import React from "react";

const connect = (...stores) => Component => {
  class Storeful extends React.PureComponent {
    state = stores.reduce((acc, { data }) => {
      return { ...acc, ...data };
    }, {});
    componentWillMount() {
      stores.forEach(store => this.createListener(store));
    }
    componentWillUnmount() {
      stores.forEach(store => this.removeListener(store));
    }
    createListener = store => {
      store.addListener(store.id, this.rerender, store.id);
    };
    removeListener = store => {
      store.removeListener(store.id, this.rerender);
    };
    rerender = id => {
      const changedStore = stores.find(st => st.id === id);
      this.setState({ ...changedStore.data });
    };
    render() {
      return <Component {...this.state} />;
    }
  }
  return Storeful;
};

export default connect;
