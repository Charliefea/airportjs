describe('Airport', function (){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });


  it ("it confirms that the plane has landed", function () {
    expect(airport.land(plane)).toEqual('Plane has landed');
  });

  it ("it confirms that the plane has landed", function () {
    airport.land(plane)
    expect(plane.landed).toEqual(true);
  });

  it ("it confirms that the plane has taken off", function () {
    airport.takeoff(plane)
    expect(plane.landed).toEqual(false);
  });

  it ("it confirms that the plane has taken off" , function () {
    expect(airport.takeoff(plane)).toEqual('Plane has taken off');
  });

  it ("It has a capicity on initialisation ", function () {
    expect(airport.capacity).toEqual(10);
  });

  it ("Landed planes stored within array", function () {
    airport.land(plane)
    expect(airport.planes).toEqual([plane]);
  });
});
