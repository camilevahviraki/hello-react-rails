import axios from 'axios';

const GREETINGS = '/redux/GREETINGS';

const greetingsReducer = (state = {}, action) => {
  switch (action.type) {
    case GREETINGS:
      return action.greeting;
    default:
      return state;
  }
};

export const fetchGreetings = () => (dispatch) => {
    axios.post("http://localhost:3000/api/v1/greetings", {azerty: 243})
    .then((response) => dispatch(
      {
        type: GREETINGS,
        greeting: response.data,
      },
    ));
  };
  
  export default greetingsReducer;