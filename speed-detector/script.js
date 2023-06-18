function calculatePoints() {
  const speed = document.getElementById("speed").value;
  let points = 0;
  // if the speed is less than 70 it prints OK//
  if (speed < 70) {
    document.getElementById("output").innerHTML = "Ok";
    // if the speed is more than 70 it prints Points:...//
  } else {
    points = Math.floor((speed - 70) / 5);
    // if ponts exceed 12 it prints Liscence Suspended //
    if (points > 12) {
      document.getElementById("output").innerHTML = "License suspended";
    } else {
      document.getElementById("output").innerHTML = "Points: " + points;
    }
  }
}

