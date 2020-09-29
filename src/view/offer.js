import {createElement} from "../utils.js";
import AbstractComponent from "../abstract-component"

const createOffersElement = (offer) => {
  const { name, price } = offer;
  return (
    `<li class="event__offer">
		<span class="event__offer-title">${name}</span>
		&plus;
		&euro;&nbsp;<span class="event__offer-price">${price}</span>
	 </li>`
  );
};

export default class Offer extends AbstractComponent {
  constructor(offer) {
    super();
    this._offer = offer || {};
    this._element = null;
  }

  getTemplate() {
    return createOffersElement(this._offer);
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
