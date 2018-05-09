/*
 * This function iterates through snapshots to find if there is 
 * a snapshot with a date before the filter's year and month.
 *
 * THIS FUNCTION ASSUMES THAT SNAPSHOTS HAVE BEEN SORTED BY DATE
 * IN DESCENDING ORDER!
 */

export default function getTimelySnapshot(filter, snapshots) {
  const filterDate = dtoi(filter.year, filter.month);
  let i = 0;

  snapshots.any(snapshot => {
    const snapshotDate = dtoi(snapshot.date.getFullYear(), snapshot.date.getMonth());

    return (snapshotDate < filterDate) || !(++i);
  });

  return snapshots[i] || null;
}

// We only care about year/month composites since we want
// to capture all days throughout the entire month specified.
function dtoi(year, month) {
  return (parseInt(year) * 100) + parseInt(month);
}
