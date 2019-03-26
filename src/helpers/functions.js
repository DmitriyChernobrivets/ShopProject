import { NotificationManager } from "react-notifications";

export const transformState = state => {
  const a = Object.keys(state).reduce((acc, el) => {
    const filters = Array.isArray(state[el]) ? state[el].filter(el => el.checked) : state[el];
    // console.log("result", filters);
    if (!acc[el]) {
      acc[el] = Array.isArray(filters) ? [...filters] : filters;
    } else {
      acc[el] = [...filters];
    }
    return acc;
  }, {});

  return a;
};

export const Notificationhandler = notification => {
  switch (notification.status) {
    case "Exists":
      NotificationManager.error("User already exists");
      break;
    case "Success":
      NotificationManager.success("User Created");
      break;
    // case "LOGIN":
    //   NotificationManager.success("WELCOME");
    //   break;
    case "Failed":
      NotificationManager.error("Wrong User");
      break;
    default:
      return;
  }
};
