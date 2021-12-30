import React, { PureComponent } from "react";

import store from "../store";

import { addAction } from "../store/actionCreators";

export default class Home extends PureComponent {
  state = {
    counter: store.getState().counter,
  };
  // 订阅，每次store发生变化调用render重新渲染函数
  componentDidMount() {
    this.unSub = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter,
      });
    });
  }
  // 取消订阅
  componentWillUnmount() {
    this.unSub();
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        <button onClick={(e) => this.addNumber(5)}>+5</button>
      </div>
    );
  }

  increment() {
    store.dispatch(addAction(1));
  }

  addNumber(num) {
    store.dispatch(addAction(num));
  }
}
