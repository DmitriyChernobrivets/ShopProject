import { NotificationManager } from "react-notifications";

const transformState = state => {
  const a = Object.keys(state).reduce((acc, el) => {
    const filters = Array.isArray(state[el]) ? state[el].filter(el => el.checked) : state[el];

    !acc[el]
      ? (acc[el] = Array.isArray(filters) ? [...filters] : filters)
      : (acc[el] = [...filters]);

    return acc;
  }, {});

  return a;
};

const totalPrice = items => items.reduce((acc, el) => acc + el.price, 0);

const Notificationhandler = notification => {
  switch (notification.status) {
    case "Exists":
      NotificationManager.error("User already exists");
      break;
    case "Success":
      NotificationManager.success("User Created");
      break;

    case "Failed":
      NotificationManager.error("Wrong User");
      break;
    default:
      return;
  }
};
const validateInputs = state => {
  return Object.keys(state).some(el => !state[el]);
};

const isFiltersEmpty = state =>
  state.title.every(el => !el.checked) &&
  state.memory.every(el => !el.checked) &&
  state.price.min === 0 &&
  state.price.max === 150000
    ? true
    : false;

export { totalPrice, Notificationhandler, transformState, validateInputs, isFiltersEmpty };
