import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const INCREMENT = 'counter/INCREMENT';

export const increase = createAction(INCREMENT);

const initialState = Map({
  number: 100
})

export default handleActions({
  [INCREMENT]: (state, action) => {
    return state.set('number', state.get('number') + 1)
  }
}, initialState)