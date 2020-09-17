const d10 = (dice) => {
  dice = dice || 1;
  let diceArr = [];
  for (let i = 0; i < dice; i++) diceArr.push(Math.ceil(Math.random()*10));
  return diceArr;
}
