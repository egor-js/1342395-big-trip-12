import {createElement} from "../utils.js";
import AbstractComponent from "../abstract-component";

const createTripDayElement = (dayNumber = 1, date = Date.now()) => {
  const month = date.toLocaleString(`en-US`, {month: `long`});

  return (
    `<li class="trip-days__item  day">
		<div class="day__info">
			<span class="day__counter">${dayNumber}</span>
			<time class="day__date" datetime="${date}">${month} ${date.getDate()}</time>
		</div>

		<ul class="trip-events__list"></ul>
	</li>`
  );
};

export default class Day extends AbstractComponent {
  constructor(date, dayNumber) {
    super();
    this._dayNumber = dayNumber || 0;
    this._date = date || new Date();
    this._element = null;
  }

  getTemplate() {
    return createTripDayElement(this._dayNumber, this._date);
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
