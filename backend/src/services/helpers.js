const transformQuery = body =>
  Object.keys(body).reduce((acc, querykey) => {
    const query = querykey === "price" ? body[querykey] : body[querykey].map(el => RegExp(el));

    if (querykey === "memory" && query.length > 0) {
      acc["description.memory"] = query;
      return acc;
    } else if (querykey === "price") {
      acc[querykey] = { $gt: query.min, $lt: query.max };
      return acc;
    } else {
      if (query.length > 0) {
        acc[querykey] = query;

        return acc;
      }
      return acc;
    }
  }, {});

module.exports = { transformQuery };
