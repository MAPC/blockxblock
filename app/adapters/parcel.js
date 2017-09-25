import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  host: 'https://fieldbookcode.com/58765e1fa945af0400dbe354',
  pathForType() {
    return 'parcels-geo';
  },
  urlForFindRecord(id) {
    return `https://api.fieldbook.com/v1/58765e1fa945af0400dbe354/parcels/${id}`;
  },
});
