export const generateQuery = data => {
  const url = Object.keys(data).reduce((acc, el) => {
    const asd = data[el]
      .filter(el => el.checked)
      .reduce((acc, el) => acc.concat(el.name), [])
      .join();

    if (!asd) return acc;

    return acc + el + "=" + asd + "&";
  }, "?");
  return url;
};
