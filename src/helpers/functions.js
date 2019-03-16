export const transformState = state => {
  return Object.keys(state).reduce((acc, el) => {
    const filters = Array.isArray(state[el])
      ? state[el].filter(el => el.checked).reduce((acc, el) => acc.concat(el.name), [])
      : state[el];

    if (!acc[el]) {
      acc[el] = Array.isArray(filters) ? [...filters] : filters;
    } else {
      acc[el] = [...filters];
    }
    return acc;
  }, {});
};
