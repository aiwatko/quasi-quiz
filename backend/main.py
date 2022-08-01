import asyncio
import json
from urllib.parse import urlparse
from urllib.parse import parse_qs

# https://websockets.readthedocs.io/en/stable/reference/server.html
import websockets

players = {}
players_connections = []
host_connection = None

QUESTIONS_FILE = 'sample_questions.json'

def read_questions(file):
  with open(file) as json_file:
    return json.load(json_file)


async def handle_connection(connection):
  query_parameters = parse_qs(urlparse(connection.path)[4])
  type = query_parameters['type'][0]
  
  match type:
    case 'host':
      global host_connection
      host_connection = connection

      questions = read_questions(QUESTIONS_FILE)
      await host_connection.send(json.dumps({ 'action': 'questions', 'questions': questions }))
      print('host registered - questions sent to the host')
    case 'player':
      name = query_parameters['name'][0]
      player_id = str(connection.id)

      players[player_id] = {}
      players[player_id]['name'] = name
      players_connections.append(connection)

      await host_connection.send(json.dumps({ 'action': 'players', 'players': players }))
      await connection.send(json.dumps({ 'action': 'player_id', 'id': player_id }))

      print('player registered')
    case _:
      print('incorrect connection type provided:', type)


async def handle_message(connection, message):
  parsed_message = json.loads(message)

  action = parsed_message['action']

  match action:
    case 'buttons_off':
      for connection in players_connections:
        await connection.send(json.dumps({ 'action': 'buttons_off' }))
      print('buttons disabled')
    case _:
      print('incorrect message action provided:', action) 


async def handler(connection):
    await handle_connection(connection)

    async for message in connection:
        await handle_message(connection, message)


async def main():
  async with websockets.serve(handler, "", 5000):
      await asyncio.Future()  # run forever


if __name__ == "__main__":
    asyncio.run(main())