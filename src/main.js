import {createTripInfoTemplate} from "./view/trip-info";
import {createTripDayTemplate} from "./view/trip-day";
import {createTripPoints, tripPointsMocks} from "./mock/trip-points";
import {renderTemplate, renderElement, RenderPosition} from "./utils.js";
import MenuComponent from "./view/menu";
import FiltersFormComponent from "./view/filters-form";
import FilterComponent from "./view/filter";
import SortComponent from "./view/sort";
import PointComponent from "./view/point";
import PointEditComponent from "./view/point-edit";


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
renderTemplate(siteTripEventsElement, createTripDayTemplate());

const siteTripDayElement = siteTripEventsElement.querySelector(`.trip-events__list`);

for (let i = 0; i < EVENTS_QUANTITY - 1; i++) {
  renderElement(siteTripDayElement, new PointComponent(tripPointsMocks[i]).getElement(), RenderPosition.AFTERBEGIN);
}
// console.log(new PointEditComponent(tripPointsMocks[EVENTS_QUANTITY - 1]).getElement());
// renderElement(siteTripDayElement, new PointEditComponent(tripPointsMocks[EVENTS_QUANTITY - 1]).getElement(), RenderPosition.BEFOREEND);
// renderTemplate(siteTripDayElement, editEventTemplate(tripPointsMocks[EVENTS_QUANTITY - 1]));
