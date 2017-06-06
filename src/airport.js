function Airport() {
  this.capacity = 10
  this.planes = new Array
}

Airport.prototype.land = function(plane) {
  plane.land();
  this.planes.push(plane);
  return 'Plane has landed';
};

Airport.prototype.takeoff = function(plane) {
  plane.takeoff();
  return 'Plane has taken off';
};
