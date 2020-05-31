const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves) {
  let final = [0,0]
  for(const move of moves) {
    if (move === 'north') {
        final[1] += 1;
    }if (move === 'west') {
      final[0] -= 1;
     } if (move === 'east') {
        final[0] +=
      }
  }
  
   
return final;
    
  }

console.log(finalPosition(moves));