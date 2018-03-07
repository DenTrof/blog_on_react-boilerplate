
import { fromJS } from 'immutable';
import { ADD_COUNTER, RES_COUNTER } from 'containers/HomePage/constants';



// The initial state of the App
const counterState = fromJS({
  /*Data to Counter*/  counter: 0,

});


function counterReducer(state = counterState, action) {
 
  switch (action.type) { 
    case ADD_COUNTER:
        return state.set('counter', state.get('counter') + action.value);
    case RES_COUNTER:
        return state.set('counter', state.get('counter') * 0);
    default:
      return state;

  }
}

export default counterReducer;


