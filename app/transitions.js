export default function(){
  this.transition(
    this.toRoute('cities.city.places'),
    this.use('fade')
  )
  this.transition(
    this.toRoute('cities.city.parcels'),
    this.use('fade')
  )
  this.transition(
    this.toRoute('cities.city.investments'),
    this.use('fade')
  )
};
