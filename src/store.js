import EventEmitter from "./event_emitter";
const random = () => Math.random().toString();

export default class Store extends EventEmitter {
  id = random();
  setData = change => {
    const newData = this._getNewData(change);
    this.data = { ...this.data, ...newData };
    this.emit(this.id);
  };
  _getNewData = change => {
    switch (typeof change) {
      case "function":
        return change(this.data);
      default:
        return change;
    }
  };
}
