import queryString from 'query-string';


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
      console.log('incorrect action provided')
      break;
  }
}

export const messageHandller = (connection, message) => {
  try {
    const parsedMessage = JSON.parse(message)

    switch (parsedMessage.action) {
      case 'playerNameRegistration':
        players.push(parsedMessage.playerName);
        hostConnection.send(JSON.stringify({ players }));

        console.log('player registered');
        break;
      default:
        console.log('incorrect action provided');
        break;
    }

  } catch (e) {
    console.log(e)
    connection.send(JSON.stringify({ message: 'Message must be a JSON' }));
  }
}