import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {

    // parse
    serialized.forEach(snapshot => {
      if (snapshot.value === 'true' || snapshot.value === 'false') {
        snapshot.value = (snapshot.value === 'true');
      }

      snapshot.date = new Date(snapshot.date);
    });

    return serialized.sort((a, b) => b.date.getTime() - a.date.getTime());
  },

  serialize(deserialized) {
    return deserialized;
  }
});
