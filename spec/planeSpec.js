describe('Plane', function (){
  var plane;

  beforeEach(function(){
    plane = new Plane();
  });

  it ("it confirms that the plane has landed", function () {
    plane.land()
    expect(plane.landed).toEqual(true);
  });

  it ("it confirms that the plane has taken off", function () {
    plane.takeoff()
    expect(plane.landed).toEqual(false);
  });
});
