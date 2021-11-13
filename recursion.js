function factorial(num) {
  var fact = 1;
  for (var i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}

function factorialRescursive(num) {
  if (num == 1) {
    console.log(num);
    return 1;
  } else {
    console.log(num, num - 1);
    return num * factorialRescursive(num - 1);
  }
}

var result = factorialRescursive(10);
console.log("result", result);
