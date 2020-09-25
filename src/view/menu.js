import {createElement} from "../utils";

export default class Menu {
  constructor(menuItems) {
    this._menuItems = menuItems;
  }

  getTemplate() {
    const createMenuItem = (menuTitle, isActive) => {
      return (
        `<a class="trip-tabs__btn ${isActive ? `trip-tabs__btn--active` : ``}" href="#">${menuTitle}</a>`
      );
    };

    const menuItemsMarkup = this._menuItems
    .map((menuTitle, index) => (createMenuItem(menuTitle, index === 0)))
    .join(`\n`);

    return (
      `<nav class="trip-controls__trip-tabs  trip-tabs">
        ${menuItemsMarkup}
      </nav>`
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
