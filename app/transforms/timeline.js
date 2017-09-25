import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    console.log(serialized);
    if(serialized) {
      return JSON.parse(serialized);  
    } else {
      return [];
    }
  },

  serialize(deserialized) {
    console.log(serialized);
    if(deserialized) {
      return JSON.stringify(deserialized);  
    } else {
      return '[]';
    }
  }
});
