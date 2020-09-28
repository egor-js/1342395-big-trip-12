import {createElement} from "../utils";

export default class Filter {
  constructor(filterName, isChecked) {
    this._filterName = filterName;
    this._isChecked = isChecked;
    this._element = null;
  }

  getTemplate() {
    return (
      `<div class="trip-filters__filter">
        <input id="filter-${this._filterName}"
        class="trip-filters__filter-input visually-hidden"
        type="radio"
        name="trip-filter"
        value="everything"
        ${this._isChecked ? `checked` : ``}>
        <label class="trip-filters__filter-label" for="filter-${this._filterName}">${this._filterName}</label>
      </div>`
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
