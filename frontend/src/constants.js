export const PLAYER = '/player';
export const HOST = '/host';
export const GAME = '/game';
export const QUESTION = '/question';
export const CATEGORY = '/category';
export const RANKING = '/ranking';

const WS_BACKEND_URL = `${process.env.REACT_APP_BACKEND_URL}/game`;
export const WS_REGISTRATION = {
  host: `${WS_BACKEND_URL}?type=host`,
  player: `${WS_BACKEND_URL}?type=player`,
};

export const WS_ACTIONS = {
  playerNameRegistration: 'player_name_registration',
};
