export default function csvFactory(models, exclusions) {
  let data = models;
  let keys = Object.keys(data[0].toJSON()).removeObjects(exclusions || []);
  let values = data.map((model)=> {
    // no undefined
    return Object.values(model.getProperties(...keys)).map(value=> { return value || '' });
  });
  values.unshift(keys);
  return values;
}
