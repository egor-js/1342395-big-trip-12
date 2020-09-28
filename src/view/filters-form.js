import {createElement} from "../utils";

export default class Form {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return (
      `<form class="trip-filters" action="#" method="get">
        <button class="visually-hidden" type="submit">Accept filter</button>
      </form>`
    );
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
