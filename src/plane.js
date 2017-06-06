function Plane() {
  this.landed = false;
}

Plane.prototype.land = function(airport) {
  this.landed = true;
};

Plane.prototype.takeoff = function() {
  this.landed = false;
};
