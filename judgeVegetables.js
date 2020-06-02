const judgeVegetable = function (vegetables, metric) {
  const keyNames = Object.keys(metric);
  
  
  let i = 0;
  let max = 0;
  let place = 0;
  if (keyNames === metric){
  for (i; i < vegetables.length; i++){
  if (vegetables[i].keyNames > max){
  max = vegetables[i].keyNames;
  place = i;
  }
  }
  return console.log("\"" + vegetables[place].submitter + "\"");
  }else if(metric === 'plumpness'){
  for (i; i < vegetables.length; i++){
  if (vegetables[i].plumpness > max){
  max = vegetables[i].plumpness;
  place = i;
  }
  }
  
  }return console.log("\"" + vegetables[place].submitter + "\"");
  }

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)
