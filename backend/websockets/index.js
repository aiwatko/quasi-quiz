import { WebSocketServer } from 'ws';
import queryString from 'query-string';

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

  websocketServer.on(
    'connection',
     (connection, req) => {
      const [_path, params] = req?.url?.split('?');
      const connectionParams = queryString.parse(params);

      console.log(connectionParams);

      connection.on('message', (message) => {
        try {
          connection.send(JSON.stringify(JSON.parse(message)));
        } catch (e) {
          console.log(e)
          connection.send(JSON.stringify({ message: 'Message must be a JSON' }));
        }
      });
    }
  );

  return websocketServer;
};