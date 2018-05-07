export default function isTrueFilter(filter, field, model) {

  console.log(filter, model.get(field));

  if(!filter) return true;
  return model.get(field) === filter;
}
