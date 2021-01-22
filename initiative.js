/* This should take in a list of characters and their Initiative Rating
 * (Dexterity + Wits), then for each player, roll a d10 and add their
 * IR to it, sorting them highest to lowest.
 *
 * If two players are tied, the one with the highest IR wins. If their IRs
 * are also tied, the character with the highest Wits wins. If the Wits
 * ratings are also tied, the character with the highest Dexterity wins. If ALL
 * of those things are tied, select the winner randomly.
 *
 * **** Technically, the character actions should happen simultaneously in a
 * "true" tie. This should be added later.*****
 */

const d10 = require('./d10');

const rollInitiative = (characters) => {
  if (!characters){
    return 'please enter some characters';
  }

  let order = []

  for ( let i = 0; i < Object.keys(characters).length; i++ ) {

    let player = characters[i];
    let init = player.dex + player.wit + d10.raw();
    let result = {
      name: player.name,
      init: init
    }

    order.push(result);
  }

return order;
}

console.log(rollInitiative([
  { name: 'Chris',
    dex: 3,
    wit: 2,
  },
  { name: 'Goomba',
    dex: 4,
    wit: 3,
  },
  { name: 'Link',
    dex: 5,
    wit: 1,
  }
]))
