import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    serialized.forEach(snapshot => {
      if (snapshot.value === 'true' || snapshot.value === 'false') {
        snapshot.value = (snapshot.value === 'true');
      }

      snapshot.date = new Date(snapshot.date);
    });

    return serialized.sort((a, b) => b.date.getTime() - a.date.getTime());
  },

  serialize(deserialized) {
    deserialized.forEach(snapshot => {
      const { date } = snapshot;
      snapshot.date = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    });

    return deserialized;
  }
});
