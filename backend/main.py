import asyncio
import json
from multiprocessing.dummy import current_process
from urllib.parse import urlparse
from urllib.parse import parse_qs

# https://websockets.readthedocs.io/en/stable/reference/server.html
import websockets

players = {}
players_connections = []
host_connection = None
current_question = None
current_answers = {}

QUESTIONS_FILE = 'sample_questions.json'
ANSWERS_FILE = 'sample_answers.json'
ANSWER_TO_INDEX = {
  'A': 0,
  'B': 1,
  'C': 2,
  'D': 3
}

def read_json_file(file):
  with open(file) as json_file:
    return json.load(json_file)


async def handle_connection(connection):
  query_parameters = parse_qs(urlparse(connection.path)[4])
  type = query_parameters['type'][0]
  
  match type:
    case 'host':
      global host_connection
      host_connection = connection

      questions = read_json_file(QUESTIONS_FILE)
      await host_connection.send(json.dumps({ 'action': 'send_questions', 'questions': questions }))
      print('host registered - questions sent to the host')
    case 'player':
      name = query_parameters['name'][0]
      player_id = str(connection.id)

      players[player_id] = {}
      players[player_id]['name'] = name
      players_connections.append(connection)

      await host_connection.send(json.dumps({ 'action': 'send_players', 'players': players }))
      await connection.send(json.dumps({ 'action': 'send_player_id', 'id': player_id }))

      print('player registered:', name)
    case _:
      print('incorrect connection type provided:', type)


async def handle_message(connection, message):
  parsed_message = json.loads(message)

  action = parsed_message['action']

  match action:
    case 'start_question':
      global current_question
      current_question = parsed_message['id']
      for connection in players_connections:
        await connection.send(json.dumps({ 'action': 'start_question', 'question_id': current_question }))
      print('question started:', current_question)
    case 'end_question':
      for connection in players_connections:
        await connection.send(json.dumps({ 'action': 'end_question' }))
      await host_connection.send(json.dumps({ 'action': 'send_answers', 'answers': current_answers }))
      print('question ended')
    case 'send_answer':
      if current_question != parsed_message['question_id']:
        print('🔴 current question mismatch between frontend and backend')
      
      correct_answer = read_json_file(ANSWERS_FILE)[current_question]
      current_answers[parsed_message['player_id']] = correct_answer == ANSWER_TO_INDEX[parsed_message['answer']]
      print('answer received')
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