import { WebSocketServer } from 'ws';
import { connectionHandler, messageHandller } from './actionHandlers.js';

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

  websocketServer.on(
    'connection',
     (connection, req) => {
      connectionHandler(connection, req);
    
      connection.on('message', (message) => {
        messageHandller(connection, message)
      });
    }
  );

  return websocketServer;
};