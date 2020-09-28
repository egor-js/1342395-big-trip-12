import {createElement} from "../utils";

const createOfferMarkup = (title, price) => {
  return (
    `<li class="event__offer">
      <span class="event__offer-title">${title}</span>
      &plus;
      &euro;&nbsp;<span class="event__offer-price">${price}</span>
     </li>`
  );
};

export default class Point {
  constructor(data) {
    this._data = data;
    this._element = null;
  }

  getTemplate() {
    const {basePrice, destination, type, offers} = this._data;
    const {name} = destination;
    const _offerMarkups = offers ? offers.map((it) => createOfferMarkup(it.title, it.price)).join(`\n`) : ``;

    return (
      `<li class="trip-events__item">
        <div class="event">
          <div class="event__type">
            <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
          </div>
          <h3 class="event__title">${type} to ${name}</h3>

          <div class="event__schedule">
            <p class="event__time">
              <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>
              &mdash;
              <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>
            </p>
            <p class="event__duration">30M</p>
          </div>

          <p class="event__price">
            &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
          </p>

          <h4 class="visually-hidden">Offers:</h4>
          <ul class="event__selected-offers">
            ${_offerMarkups}
          </ul>

          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </div>
      </li>`
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
