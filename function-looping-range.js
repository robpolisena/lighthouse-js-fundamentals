function range(start, end, step) {
  let output = []

  if (start === undefined || end === undefined || step === undefined) {
    return output
  } else if (start > end) {
    return output
  } else if (step <= 0) {
    return output
  } else {
for (var i = start; i <= end; i += step)  {
  output.push(i);
  
  
} return output
}
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(1, 2, 0));
