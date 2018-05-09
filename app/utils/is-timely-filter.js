/*
 * This filter iterates through the model's timeline snapshots
 * to find if there is a snapshot with a date before the value
 * that we are filtering by. 
 *
 * THIS FILTER ASSUMES THAT SNAPSHOTS HAVE BEEN SORTED BY DATE
 * IN DESCENDING ORDER!
 */

import getTimelySnapshot from '../utils/get-timely-snapshot';

export default function isTimelyFilter(filter, field, model) {
  return getTimelySnapshot(filter, model.get(field)) !== null;
}
