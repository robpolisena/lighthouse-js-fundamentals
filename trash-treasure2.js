const smartGarbage = function(trash, bins) {
const keyNames = Object.keys(trash);
//console.log(keyNames);
//return trash
for(let x of keyNames) {
  if (x === trash) {
bins[x] += 1;
}
  }  return console.log(bins);
}

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
