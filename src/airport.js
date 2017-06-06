function Airport() {}

Airport.prototype.land = function(plane) {
  plane.land();
  return 'Plane has landed';
};

Airport.prototype.takeoff = function(plane) {
  plane.takeoff();
  return 'Plane has taken off';
};
