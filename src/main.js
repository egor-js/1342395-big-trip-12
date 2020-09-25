import {createTripInfoTemplate} from "./view/trip-info";
import {createTripViewControlsTemplate} from "./view/trip-view-controls";
import {createEventsSortTemplate} from "./view/trip-events-sort";
import {createNewEventWithDestinationTemplate} from "./view/create-event-with-destination";
import {editEventTemplate} from "./view/edit-event";
import {createTripDayTemplate} from "./view/trip-day";
import TripDayComponent from "./view/trip-day-class";
import {createEventItemTemplate} from "./view/event-item";
import {createTripPoints, tripPointsMocks} from "./mock/trip-points";
import {renderTemplate} from "./utils.js";

const EVENTS_QUANTITY = 3;

console.log(new TripDayComponent());

const siteTripMainElement = document.querySelector(`.trip-main`);
const siteTripControlsElement = siteTripMainElement.querySelector(`.trip-controls`);

const siteTripEventsElement = document.querySelector(`.trip-events`);


renderTemplate(siteTripMainElement, createTripInfoTemplate(), `afterbegin`);
renderTemplate(siteTripControlsElement, createTripViewControlsTemplate(), `afterbegin`);
renderTemplate(siteTripEventsElement, createEventsSortTemplate(), `afterbegin`);


createTripPoints(EVENTS_QUANTITY);
console.log(tripPointsMocks);

// renderTemplate(siteTripEventsElement, createNewEventWithDestinationTemplate());
renderTemplate(siteTripEventsElement, createTripDayTemplate());

const siteTripDayElement = siteTripEventsElement.querySelector(`.trip-events__list`);

for (let i = 0; i < EVENTS_QUANTITY - 1; i++) {

  renderTemplate(siteTripDayElement, createEventItemTemplate(tripPointsMocks[i]));

}

renderTemplate(siteTripDayElement, editEventTemplate(tripPointsMocks[EVENTS_QUANTITY - 1]));
