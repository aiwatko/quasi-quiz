import asyncio
import json
from urllib.parse import urlparse
from urllib.parse import parse_qs

# https://websockets.readthedocs.io/en/stable/reference/server.html
import websockets

players = {}
host_connection = None

HOST_ACTIONS = {
  'players': 'players'
}

PLAYER_ACTIONS = {
  'playerId': 'playerId'
}


def handle_connection(websocket):
  type = parse_qs(urlparse(websocket.path)[4])['type'][0]
  
  match type:
    case 'host':
      global host_connection
      host_connection = websocket
      print('host registered')
    case 'player':
      players[str(websocket.id)] = {}
      print('player registered')
    case _:
      print('incorrect connection type provided')


async def handle_message(websocket, message):
  parsedMessage = json.loads(message)
  match parsedMessage['action']:
    case 'playerNameRegistration':
      players[str(websocket.id)]['name'] = parsedMessage['playerName']

      global host_connection
      await host_connection.send(json.dumps({ 'action': HOST_ACTIONS['players'], 'players': players }))
      await websocket.send(json.dumps({ 'action': PLAYER_ACTIONS['playerId'], 'id': str(websocket.id) }))
      print('player name registered')
    case _:
      print('incorrect message action provided') 


async def handler(websocket):
    handle_connection(websocket)

    async for message in websocket:
        await handle_message(websocket, message)


async def main():
    async with websockets.serve(handler, "", 5000):
        await asyncio.Future()  # run forever


if __name__ == "__main__":
    asyncio.run(main())