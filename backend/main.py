import asyncio
import json
from urllib.parse import urlparse
from urllib.parse import parse_qs

# https://websockets.readthedocs.io/en/stable/reference/server.html
import websockets

players = {}
host_connection = None
QUESTIONS_FILE = 'sample_questions.json'

def read_questions(file):
  with open(file) as json_file:
    return json.load(json_file)


async def handle_connection(websocket):
  type = parse_qs(urlparse(websocket.path)[4])['type'][0]
  
  match type:
    case 'host':
      global host_connection
      host_connection = websocket

      questions = read_questions(QUESTIONS_FILE)
      await host_connection.send(json.dumps({ 'action': 'questions', 'questions': questions }))
      print('host registered - questions sent to the host')
    case 'player':
      players[str(websocket.id)] = {}
      print('player registered')
    case _:
      print('incorrect connection type provided')


async def handle_message(websocket, message):
  parsed_message = json.loads(message)
  player_id = str(websocket.id)

  match parsed_message['action']:
    case 'player_name_registration':
      players[player_id]['name'] = parsed_message['name']

      global host_connection
      await host_connection.send(json.dumps({ 'action': 'players', 'players': players }))
      await websocket.send(json.dumps({ 'action': 'player_id', 'id': player_id }))
      print('player name registered')
    case _:
      print('incorrect message action provided') 


async def handler(websocket):
    await handle_connection(websocket)

    async for message in websocket:
        await handle_message(websocket, message)


async def main():
  async with websockets.serve(handler, "", 5000):
      await asyncio.Future()  # run forever


if __name__ == "__main__":
    asyncio.run(main())