import {createElement} from "../utils.js";
import AbstractComponent from "../abstract-component";

const createBoardTemplate = () => {
  return (
    `<ul class="trip-days"></ul>`
  );
};

export default class Board extends AbstractComponent {
  constructor() {
    super();
    this._element = null;
  }

  getTemplate() {
    return createBoardTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
