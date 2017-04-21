import Ember from 'ember';

export default Ember.Component.extend({
  geojson: [],
  didInsertElement() {
    let geojson = this.get('geojson');
    let mapW  = this.$().height();
    let mapH  = this.$().width();
    let projection = d3.geo.mercator()
        .center([-71, 42])
        .scale(900)
        .rotate([-180,0]);
    let path = d3.geo.path()
                  .projection(projection);

    let elementId = this.get('elementId');
    let svg = d3.select(`#${elementId}`).append("svg")
                .attr("width", 150)
                .attr("height", 150);

    svg.append("g")
                .selectAll("path")
                .data([geojson])
                .enter().append("path")
                .attr("d", path);
  }
});
