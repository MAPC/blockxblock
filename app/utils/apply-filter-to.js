import isAnyFilter from '../utils/is-any-filter';
import isTrueFilter from '../utils/is-true-filter';
import isWithinFilter from '../utils/is-within-filter';
import isTimelyFilter from '../utils/is-timely-filter';
import isLongitudinalFilter from '../utils/is-longitudinal-filter';

export default function applyFilterTo(enumerable, config) {
  if (enumerable) return {
    get() { return getFilter(this, enumerable, config) }
  };
}

export function getFilter(context, enumerable, config) {
  let models = context.get(enumerable);

  if (models) {
    config.forEach((propertyConfig) => {
      let filter;
      let filterType = propertyConfig.filterType;

      if(filterType == "isWithin") {
        let [ min, max ] = propertyConfig.filter;
        filter = [context.get(min), context.get(max)];
      } else {
        filter = context.get(propertyConfig.filter);
      }

      let property = propertyConfig.property;
      
      models = models.filter(
        (filterFactory(filterType))
        .bind(context, filter, property)
      );
    });
  }

  console.log(enumerable, models);

  return models;
}

function filterFactory(filterType) {
  switch(filterType) {
    case 'isAny':
      return isAnyFilter
    case 'isTrue':
      return isTrueFilter
    case 'isWithin':
      return isWithinFilter
    case 'isLongitudinal':
      return isLongitudinalFilter
    case 'isTimely':
      return isTimelyFilter
  }
}
