const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const pointTypes = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check-in`, `Sightseeing`, `Restaurant`];

const offersByPointType = {
  "Drive": [
    {
      "title": `Rent a car`,
      "price": 200
    },
    {
      "title": `Eat in car`,
      "price": 30
    },
  ],
  "Bus": [
    {
      "title": `Choose meal`,
      "price": 180
    },
    {
      "title": `Upgrade to comfort class`,
      "price": 50
    },
  ],
  "Flight": [
    {
      "title": `Add luggage`,
      "price": 30
    },
    {
      "title": `Switch to comfort class`,
      "price": 100
    },
    {
      "title": `Add meal`,
      "price": 15
    },
    {
      "title": `Choose seats`,
      "price": 5
    },
    {
      "title": `Travel by train`,
      "price": 40
    },
  ],
  "Taxi": [
    {
      "title": `Order Uber`,
      "price": 20
    }
  ],
  "Check-in": [
    {
      "title": `Add breakfast`,
      "price": 50
    }
  ],
  "Sightseeing": [
    {
      "title": `Book tickets`,
      "price": 40
    },
    {
      "title": `Lunch in city`,
      "price": 30
    }
  ],
};

const destination = [
  {
    "description": `Chamonix, is a beautiful city, a true asian pearl, with crowded streets.`,
    "name": `Chamonix`,
    "pictures": [
      {
        "src": `http://picsum.photos/248/152?r=${Math.random()}`,
        "description": `Chamonix parliament building`
      }
    ]
  },
  {
    "description": `Amsterdam is a capital of the Smoking World`,
    "name": `Amsterdam`,
    "pictures": [
      {
        "src": `http://picsum.photos/248/152?r=${Math.random()}`,
        "description": `Red lighting street in Amsterdam`
      }
    ]
  },
  {
    "description": `Geneva is the second-most populous city in Switzerland (after Zürich) and the most populous city of Romandy, the French-speaking part of Switzerland.`,
    "name": `Geneva`,
    "pictures": [
      {
        "src": `http://picsum.photos/248/152?r=${Math.random()}`,
        "description": `The Jet d'Eau is a large fountain in Geneva,`
      }
    ]
  },
];

export const tripPointsMocks = [];

export const createTripPoints = (EVENTS_QUANTITY) => {
  for (let i = 0; i < EVENTS_QUANTITY; i++) {
    const randomType = pointTypes[getRandomInteger(pointTypes.length - 1)];
    tripPointsMocks.push({
      "base_price": getRandomInteger(500, 2000),
      "destination": destination[getRandomInteger(0, 2)],
      "id": i,
      "is_favorite": Math.random() > 0.5,
      "type": randomType,
      "offers": offersByPointType[randomType],
    });

  }
};