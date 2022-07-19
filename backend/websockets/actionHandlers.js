import queryString from 'query-string';
import { v4 } from 'uuid';

const HOST_ACTIONS = {
  players: 'players'
}

const PLAYER_ACTIONS = {
  playerId: 'playerId'
}

const players = []
let hostConnection;

export const connectionHandler = (connection, req) => {
  const params = queryString.parse(req?.url?.split('?')[1]);

  switch (params.type) {
    case 'host':
      hostConnection = connection;
      console.log('host registered');
      break;
    case 'player':
      console.log('player registered')
      break;
    default:
      console.log('incorrect connection action provided')
      break;
  }
}

export const messageHandller = (connection, message) => {
  try {
    const parsedMessage = JSON.parse(message)

    switch (parsedMessage.action) {
      case 'playerNameRegistration':
        const id = v4()
        players.push({ id, name: parsedMessage.playerName });
        hostConnection.send(JSON.stringify({ action: HOST_ACTIONS.players, players }));
        connection.send(JSON.stringify({ action: PLAYER_ACTIONS.playerId, id }))

        console.log('player registered');
        break;
      default:
        console.log('incorrect message action provided');
        break;
    }

  } catch (e) {
    console.log(e)
    connection.send(JSON.stringify({ message: 'Message must be a JSON' }));
  }
}