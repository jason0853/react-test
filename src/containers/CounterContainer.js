import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Counter from 'components/Counter';
import * as counterActions from 'store/modules/counter';

class CounterContainer extends Component {

  handleIncrease = () => {
    const { CounterActions } = this.props;

    CounterActions.increase();
  }

  render() {
    const { handleIncrease } = this;
    const { number } = this.props;
    return (
      <Counter 
        number={ number }
        onIncrement={ handleIncrease }
      />
    );
  }
}

export default connect(
  (state) => ({ number: state.counter.get('number') }),
  (dispatch) => ({ CounterActions: bindActionCreators(counterActions, dispatch) }),
)(CounterContainer);
