export const hostMessageHandler = (message, context, setContext) => {
  try {
    const parsedMessage = JSON.parse(message.data);

    switch (parsedMessage.action) {
      case 'players':
        setContext({
          ...context,
          players: parsedMessage.players,
        });
        break;
      case 'questions':
        setContext({
          ...context,
          questions: parsedMessage.questions,
          currentQuestion: parsedMessage.questions[0],
        });
        break;
      default:
        console.log('incorrect action provided:', parsedMessage.action);
        break;
    }
  } catch (e) {
    console.log(e);
  }
};

export const playerMessageHandler = (message, context, setContext) => {
  try {
    const parsedMessage = JSON.parse(message.data);

    switch (parsedMessage.action) {
      case 'player_id':
        setContext({
          ...context,
          currentPlayerId: parsedMessage.id,
        });
        break;
      default:
        console.log('incorrect action provided:', parsedMessage.action);
        break;
    }
  } catch (e) {
    console.log(e);
  }
};
