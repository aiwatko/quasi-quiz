import { hostMessageHandler, playerMessageHandler } from './actionHanlders';
import { WS_ACTIONS, WS_REGISTRATION } from './constants';

// host actions
export const registerHost = (setContext) => {
  const ws = new WebSocket(WS_REGISTRATION.host);

  setContext((prevContext) => ({ ...prevContext, hostWs: ws }));
  ws.onmessage = (message) => hostMessageHandler(message, setContext);
};

export const disablePlayerButtons = (context) => {
  context.hostWs.send(JSON.stringify({ action: WS_ACTIONS.buttonsOff }));
};

// player actions
export const registerPlayer = (setContext) => {
  const ws = new WebSocket(WS_REGISTRATION.player);
  setContext((prevContext) => ({ ...prevContext, playerWs: ws }));

  ws.onmessage = (message) => playerMessageHandler(message, setContext);
};

export const sendPlayerName = (context, name) => {
  context.playerWs.send(JSON.stringify({ action: WS_ACTIONS.playerNameRegistration, name }));
};
