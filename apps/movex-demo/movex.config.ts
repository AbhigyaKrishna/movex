import { chatReducer } from './modules/chat/chat.movex';
import { reducer as rpsReducer } from './modules/rock-paper-scissors/rockPaperScissors.movex';

// The idea of this is so both the server and the client can read it
// Obviosuly being a node/js env helps a lot :)

export default {
  url: undefined, // TODO: This could be defined too in next no?
  resources: {
    chat: chatReducer,
    rps: rpsReducer,
  },
};
