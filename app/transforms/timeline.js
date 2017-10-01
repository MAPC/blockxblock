import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {

    // parse
    serialized.forEach(snapshot => {
      if (snapshot.value === 'true' || snapshot.value === 'false') {
        snapshot.value = (snapshot.value === 'true');
      }
    });

    return serialized.sort((snapshot1, snapshot2) => {
      const { a } = snapshot1;
      const { b } = snapshot2;

      return b - a;
    });
  },

  serialize(deserialized) {
    return deserialized;
  }
});
