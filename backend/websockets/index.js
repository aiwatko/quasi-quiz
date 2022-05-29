import { WebSocketServer } from 'ws';
import queryString from 'query-string';

const handlePlayerMessage = () => {}
const handleHostMessage = () => {}

// websockets tutorial https://cheatcode.co/tutorials/how-to-set-up-a-websocket-server-with-node-js-and-express
export default async (server) => {
  const websocketServer = new WebSocketServer({
    noServer: true,
    path: '/game',
  });

  server.on('upgrade', (request, socket, head) => {
    websocketServer.handleUpgrade(request, socket, head, (websocket) => {
      websocketServer.emit('connection', websocket, request);
    });
  });

  let hostConnection;

  websocketServer.on(
    'connection',
     (connection, req) => {
      const [_path, params] = req?.url?.split('?');
      const connectionParams = queryString.parse(params);

      if (connectionParams.type === 'host') {
        console.log('Host registered')
      }

      if (connectionParams.type === 'player') {
        console.log('Player registered')
      }

      connection.on('message', (message) => {
        try {
          const parsedMessage = JSON.parse(message)

          if (connectionParams.type === 'host') {
            hostConnection = connection;
            handleHostMessage(connection, parsedMessage);
            return;
          }

          if (connectionParams.type === 'player') {
            handlePlayerMessage(connection, parsedMessage, hostConnection);
            return;
          }

        } catch (e) {
          console.log(e)
          connection.send(JSON.stringify({ message: 'Message must be a JSON' }));
        }
      });
    }
  );

  return websocketServer;
};