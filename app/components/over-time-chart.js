import Ember from 'ember';
import moment from 'moment';
import { nest } from 'd3-collection';

function flatten(arr) {
  return arr.reduce((a,b)=> { return a.concat(b); }, []); 
}

export default Ember.Component.extend({
  dates: null,
  classNames: ['over-time-chart'],
  openDates: Ember.computed('models', function() {
    let models = this.get('models');
    if (Array.isArray(models)) { 
      models = flatten(models.invoke('map', (model)=> { return model; }));
    } 
    return flatten(models.mapBy('fake_open_or_closed').invoke('filterBy','status', 'open'));
  }),
  openDateStamps: Ember.computed('openDates', function() {
    let models = this.get('openDates');
    return models.mapBy('quarter');
  }),
  openMonthYears: Ember.computed('openDateStamps', function() {
    let openDates = this.get('openDates');

    // return open
    // let grouped = nest().key((d) => { return d.type })
    //                     .rollup((d) => { return d.length; })
    //                     .entries(dates)
    //                     .sortBy((el) => { return el.key; });

    // grouped = grouped.map((el) => { 
    //   let date = new Date(el.key);
    //   let obj = { key: `${date.getFullYear()}-${date.getMonth()}-01` };
    //   let type1 = el.values[0];
    //   let type2 = el.values[1];

    //   if(type1) {
    //     obj[type1.key] = type1.value;
    //   }

    //   if(type2) {
    //     obj[type2.key] = type2.value;
    //   }
      
    //   return obj;
    // });

    // return grouped.sortBy((el) => { return new Date(el.key); });
  }),

  tooltipsConfig: [
    { to: (num) => { return moment(num).format('MMM Do YYYY'); } }
  ],

  data: Ember.computed('dates', function() {
    let that = this;
    return {
      x: 'x',
      type: 'spline',
      json: this.get('dates'),
      keys: { 
          x: 'key',
          value: ['feature', 'investment']
      }
    }
  }),
  legend: {
    show: false
  },

  padding: {
    left: 20,
    right: 40
  },

  tooltip: {
    show: false
  },

  grid: Ember.computed('selection', function() {
    let selection = new Date(this.get('selection'));
    let addMonth = new Date(selection.setMonth(selection.getMonth()+1));
    let end = `${addMonth.getFullYear()}-${addMonth.getMonth()}-01`;
    return {
      x: {
        lines: [
          {value: end, text: end}
        ]
      }
    }
  }),
  regions: Ember.computed('selection', function() {
   let selection = new Date(this.get('selection'));
   
   let start = `${selection.getFullYear()}-${selection.getMonth()}-01`;
   let addMonth = new Date(selection.setMonth(selection.getMonth()+1));

   let end = `${addMonth.getFullYear()}-${addMonth.getMonth()}-01`;

   return [
     { axis: 'x', start: start, end: end, class: 'regionX' }
   ];
  }),
  axis: {
    x: {
      type: 'timeseries',
      tick: {
        format: '%Y-%m'
      }
    },
    y: {
      show: false
    }
  },

  chartColors: {
    pattern: ['#5CA2D1','#A53ED5']
  },

  size: {
    height: 100
  },

  // range-slider
  timeMin: Ember.computed('models', function() {
    let models = this.get('openDateStamps');
    return Math.min(...models);
  }),
  timeMax: Ember.computed('selection', function() {
    let models = this.get('openDateStamps');
    return Math.max(...models);
  }),

  defaultTime: Ember.computed(function() {
    let now = Date.now();
    let timeMin = this.get('timeMin');
    let timeMax = this.get('timeMax');

    if((now > timeMin) && (now < timeMax)) {
      return now;
    }

    if(now < timeMin) {
      return timeMin;
    }

    if(now > timeMax) {
      return timeMax;
    }
  }),

  didInsertElement() {
    
    this.set('selection', this.get('defaultTime'));
  },

  onrendered: Ember.computed(function(c3) {
    var that = this;
    return function() {
      d3.selectAll('.c3-event-rect')
        .on('click', (d,element) => {
          that.set('selection', d.x);
        });
      d3.selectAll('.c3-chart-lines')
        .style('display', 'none');
    }
  }),

  actions: {
    update(value) {
      // TODO ?
    }
  }
});
