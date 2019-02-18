function triangleSides() {

  var result = [];

  var a = parseInt(document.getElementById('A').value);
  result.push(a);
  var b = parseInt(document.getElementById('B').value);
  result.push(b);
  var c = parseInt(document.getElementById('C').value);
  result.push(c);
  var display = document.querySelector("#results");


  //Check if input received is a triangle.
  if ((a + b > c) && (b + c > a) && (a + c > b)) {

    if (a == b && a == c && b == c) {
      display.innerHTML = "This is an Equilateral triangle"
    } else if (a == b || a == c || b == c) {
      display.innerHTML = "This is an Isoceles triangle"
    } else {
      display.innerHTML = "This is a Scalene triangle"
    }

  } else {
    display.innerHTML = "This is not a triangle"

  }
}
