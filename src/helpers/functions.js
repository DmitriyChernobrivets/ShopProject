export const transformState = state => {
  console.log(state);
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
