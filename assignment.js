// feetToMile

function feetToMile(feet) {
  var mile = feet / 5280;
  return mile;
}
var result = feetToMile(10000);
console.log("Number of mile is", result);

//woodCalculator
function woodCalculator(chair, table, bed) {
  var wood = 0;
  wood = chair * 1 + table * 3 + bed * 5;
  return wood;
}
var countWood = woodCalculator((chair = 0), (table = 2), (bed = 10));
console.log("Wood Required to build is", countWood);

//brickCalculator

function brickCalculator(floor) {
  var brick = 0;
  /**brick required for 15 feet heigh floor = 1000 pcs
  So brick Required for 12 feet height floor = 1000*12/15 = 800 pcs
                        10 feet heigt floor = 1000*10/15 = 633 Pcs (appx) **/

  if (floor <= 10) {
    brick = floor * 1000;
  } else if (floor <= 20) {
    var firstPart = floor * 1000;
    var remaining = floor - 10;
    var secondPart = remaining * 800;
    brick = firstPart + secondPart;
  } else {
    var firstPart = floor * 1000;
    var secondPart = floor * 800;
    var remaining = floor - 20;
    var thirdPart = remaining * Math.round(2000 / 3);
    brick = firstPart + secondPart + thirdPart;
  }
  return brick;
}

var count = brickCalculator(5);
console.log("Brick required to build this building ", count, "pcs");
