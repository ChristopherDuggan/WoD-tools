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


const rollInitiative = (characters) => {
  if (!characters){
    return 'please enter some characters';
  }

  for ( let i = 0; i < Object.keys(characters).length; i++ ) {

  }

  console.log(Object.values(characters)[0]['dex']+Object.values(characters)[0]['wit'] )
}

console.log(rollInitiative({
  Chris: {
    dex: 3,
    wit: 2,
  },
  Goomba: {
    dex: 4,
    wit: 3,
  },
  Link: {
    dex: 5,
    wit: 1,
  }
}))
