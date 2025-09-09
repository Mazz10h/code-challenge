function speedOfCar(speed) {
  const speedLimit = 70;  //70 is the legal speed limit.
  const kmPerPoint = 5; //for every 5km/h above the limit, driver earns 1 demerit point.
// if the speed is within or below the limit it prints OK.
  if (speed <= speedLimit) {
    console.log("OK");
  } else {

    const points = Math.floor((speed - speedLimit) / kmPerPoint);
//if the driver has more than 12 points, license is suspended
    if (points > 12) {
      console.log("License suspended");

//if driver has 12 points or fewer, it prints how many points you receive
    } else {
      console.log(`Points: ${points}`);
    }
  }
}

speedOfCar(120)

