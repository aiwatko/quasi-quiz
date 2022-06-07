export const PLAYER = '/player';
export const HOST = '/host';
export const GAME = '/game';
export const QUESTION = '/question';
export const RANKING = '/ranking';

const WS_BACKEND_URL = 'ws://localhost:5000/game';
export const WS_REGISTRATION = {
  host: `${WS_BACKEND_URL}?type=host`,
  player: `${WS_BACKEND_URL}?type=player`,
};

export const WS_ACTIONS = {
  playerNameRegistration: 'playerNameRegistration',
};
