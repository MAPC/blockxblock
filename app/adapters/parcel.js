import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  host: 'https://bxb-data.it.massdevelopment.com/api/',
  pathForType() {
    return 'parcels/';
  },
  urlForFindRecord(id) {
    return `https://bxb-data.it.massdevelopment.com/api/parcels/${id}`;
  },
});
