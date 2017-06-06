function Airport(capacity = 10) {
  this.capacity = capacity;
  this.planes = new Array
}

Airport.prototype.land = function(plane) {
  if (this.checkAvailability()) {
    plane.land();
    this.planes.push(plane);
    return 'Plane has landed';
  } else {
    return 'Airport at capacity';
  }
};

Airport.prototype.takeoff = function(plane) {
  plane.takeoff();
  return 'Plane has taken off';
};

Airport.prototype.checkAvailability = function() {
  return (this.planes.length < this.capacity);
};
