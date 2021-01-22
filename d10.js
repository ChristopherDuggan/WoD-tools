const raw = (dice) => {
  dice = dice || 1;
  let diceArr = [];
  for (let i = 0; i < dice; i++) diceArr.push(Math.ceil(Math.random()*10));
  if (diceArr.length == 1) return diceArr[0];
  return diceArr;
}

const vsDiff = (dice, diff) => {
  //does a raw roll
  //checks the roll against the difficulty
  //does a botch check
  //does a success check
}

module.exports = { raw };


vsDiff(3, 2)
