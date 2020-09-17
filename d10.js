const d10 = (dice, diff) => {
  dice = dice || 1;
  diff = diff || 6
  let botch = '';
  let diceArr = [];
  let successes = 0;
  for (let i = 0; i < dice; i++) {
    diceArr.push(Math.ceil(Math.random()*10));
    if (diceArr[diceArr.length-1] === 1) {
      successes--;
    } else if (diceArr[diceArr.length-1] >= diff) successes++;
  }
  if (successes < 0) botch = 'botch!';
  return `\nRolls: ${diceArr} \nDifficulty: ${diff} \nSuccesses: ${successes}\n${botch}`;
}


console.log(d10(5))
console.log(d10(3, 9))
console.log(d10(0, 3))
