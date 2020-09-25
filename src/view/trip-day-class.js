import {createElement} from "../utils";

export default class TripDay {
  constructor(data) {
    this._data = data;
    this._element = null;
  }

  getTemplate() {
    return createTripDayTemplate();
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

const createTripDayTemplate = () => {
  return (`<ul class="trip-days">
            <li class="trip-days__item  day">
              <div class="day__info">
                <span class="day__counter">1</span>
                <time class="day__date" datetime="2020-09-22">SEP 22</time>
              </div>

              <ul class="trip-events__list">
              </ul>
            </li>
        </ul>`);
};
