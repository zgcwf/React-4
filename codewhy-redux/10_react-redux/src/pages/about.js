import React, { PureComponent } from "react";

import store from "../store";
import { subAction } from "../store/actionCreators";

export default class About extends PureComponent {
  state = {
    counter: store.getState().counter,
  };

  componentDidMount() {
    this.unSub = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter,
      });
    });
  }

  componentWillUnmount() {
    this.unSub();
  }

  render() {
    return (
      <div>
        <hr />
        <h1>About</h1>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.decrement()}>-1</button>
        <button onClick={(e) => this.subNumber(3)}>-3</button>
      </div>
    );
  }

  decrement() {
    store.dispatch(subAction(1));
  }

  subNumber(num) {
    store.dispatch(subAction(num));
  }
}
