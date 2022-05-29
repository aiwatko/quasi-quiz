import express from "express";
import websockets from './websockets/index.js';


const app = express();
const port = 5000;

const server = app.listen(port, () => {
  if (process.send) {
    process.send(`Server running at http://localhost:${port}\n\n`);
  }
});

websockets(server);