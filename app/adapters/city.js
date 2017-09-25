import ApplicationAdapter from './application';

// https://api.fieldbook.com/v1/58765e1fa945af0400dbe354/districts

export default ApplicationAdapter.extend({
  pathForType: function(modelName) {
    return 'districts';
  },
});
