const isFunc = allegedFunc => typeof allegedFunc === "function";

export default class EventEmitter {
  listeners = {};
  addListener = (name, callback, ...args) => {
    if (!isFunc(callback)) {
      throw new Error("Listener callback must be a function");
    }
    if (args === undefined) {
      args = [];
    }
    if (this.listeners[name] === undefined) {
      this.listeners[name] = [];
    }
    this.listeners[name].push({ callback, args });
  };
  emit = name => {
    if (this.listeners[name] !== undefined) {
      this.listeners[name].forEach(({ callback, args }) => callback(...args));
    }
  };
  getListeners = name => {
    return this.listeners[name];
  };
  removeListener = (name, _callback) => {
    if (!isFunc(_callback)) {
      throw new Error("Listener callback must be a function");
    }
    if (this.listeners[name] !== undefined) {
      this.listeners[name] = this.listenesr[name].filter(
        ({ callback }) => callback !== _callback
      );
    }
  };
}
