const EVENTS_QUANTITY = 3;

import {createTripInfoTemplate} from "./view/trip-info";
import {createTripViewControlsTemplate} from "./view/trip-view-controls";
import {createEventsSortTemplate} from "./view/trip-events-sort";
import {createNewEventWithDestinationTemplate} from "./view/create-event-with-destination";
import {createTripDayTemplate} from "./view/trip-day";
import {createEventItemTemplate} from "./view/event-item";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteTripMainElement = document.querySelector(`.trip-main`);
const siteTripControlsElement = siteTripMainElement.querySelector(`.trip-controls`);

const siteTripEventsElement = document.querySelector(`.trip-events`);


render(siteTripMainElement, createTripInfoTemplate(), `afterbegin`);
render(siteTripControlsElement, createTripViewControlsTemplate(), `afterbegin`);
render(siteTripEventsElement, createEventsSortTemplate(), `afterbegin`);
render(siteTripEventsElement, createNewEventWithDestinationTemplate(), `beforeend`);


render(siteTripEventsElement, createTripDayTemplate(), `beforeend`);

const siteTripDayElement = siteTripEventsElement.querySelector(`.trip-events__list`);

for (let i = 0; i < EVENTS_QUANTITY; i++) {

  render(siteTripDayElement, createEventItemTemplate(), `beforeend`);

}
