export default function isAnyFilter(typesArray, field, model) {
  const value = model.get(field);
  if(typeof typesArray==='undefined') throw new Error("is-any-filter: nothing to compare");
  if(typesArray.length <= 1) return true;
  if (value) return typesArray.includes(value);
  return;
}
