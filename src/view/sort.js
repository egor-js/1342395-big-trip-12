import {createElement} from "../utils";

export default class Sort {
  constructor(sortTypes) {
    this._element = null;
    this._sortTypes = sortTypes;
  }

  getTemplate() {
    const _createSortItemTemplate = (sortType, isSvg, isSelected) => {
      return (
        `<div class="trip-sort__item  trip-sort__item--${sortType}">
          <input id="sort-${sortType}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time" ${isSelected ? `checked` : ``}>
          <label class="trip-sort__btn" for="sort-${sortType}">
            ${sortType}
            ${isSvg ? `<svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
              <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>` : ``}
            </svg>
            </label>
        </div>`
      );
    };

    const _sortItemMarkup = this._sortTypes.map((sortType, index) => _createSortItemTemplate(sortType, index !== 0, index === 0)).join(`\n`);

    return (
      `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
        <span class="trip-sort__item  trip-sort__item--day">Day</span>
            ${_sortItemMarkup}
        <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
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
