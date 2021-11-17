// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

class Worker {
  constructor(stringUrl) {
    this.url = stringUrl;
    this.onMessage = () => {};
  }
  postMessage(msg) {
    this.onMessage(msg);
  }
}
window.Worker = Worker;
