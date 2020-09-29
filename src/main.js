import {createTripInfoTemplate} from "./view/trip-info";
import {createTripPoints, tripPointsMocks} from "./mock/trip-points";
import {renderTemplate, renderElement, RenderPosition} from "./utils.js";
import MenuComponent from "./view/menu";
import FiltersFormComponent from "./view/filters-form";
import FilterComponent from "./view/filter";
import SortComponent from "./view/sort";
import PointComponent from "./view/point";
import PointEditComponent from "./view/point-edit";
import BoardComponent from "./view/board";
import DayComponent from "./view/trip-day";

const EVENTS_QUANTITY = 3;

const MENU_TABS = [
  `Table`, `Stats`
];

const FILTERS_TABS = [
  `everything`, `future`, `past`
];

const SORT_TYPES = [
  `event`, `time`, `price`
];

createTripPoints(EVENTS_QUANTITY);
const siteTripMainElement = document.querySelector(`.trip-main`);
const siteTripControlsElement = siteTripMainElement.querySelector(`.trip-controls`);
const siteTripEventsElement = document.querySelector(`.trip-events`);

renderTemplate(siteTripMainElement, createTripInfoTemplate(), `afterbegin`);
renderElement(siteTripControlsElement, new FiltersFormComponent().getElement(), RenderPosition.AFTERBEGIN);

const formTrip = document.querySelector(`.trip-filters`);
FILTERS_TABS.forEach((filter, index) => {
  renderElement(formTrip, new FilterComponent(filter, index === 0).getElement(), RenderPosition.BEFOREEND);
});

renderElement(siteTripControlsElement, new MenuComponent(MENU_TABS).getElement(), RenderPosition.AFTERBEGIN);

renderElement(siteTripEventsElement, new SortComponent(SORT_TYPES).getElement(), RenderPosition.AFTERBEGIN);

console.log(new BoardComponent().getElement());
console.log(new DayComponent().getElement());

renderElement(siteTripEventsElement, new BoardComponent().getElement(), RenderPosition.AFTERBEGIN);
renderElement(siteTripEventsElement, new DayComponent().getElement(), RenderPosition.AFTEREND);

const siteTripDayElement = siteTripEventsElement.querySelector(`.trip-events__list`);

renderElement(siteTripEventsElement, new BoardComponent().getElement(), RenderPosition.AFTERBEGIN);

const points = [];

for (let i = 0; i < EVENTS_QUANTITY; i++) {
  points[i] = (new PointComponent(tripPointsMocks[i]));
  renderElement(siteTripDayElement, points[i].getElement(), RenderPosition.AFTERBEGIN);
}
