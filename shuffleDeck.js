var shuffleDeck = function(deck) {
  
  for(let n=0; n<2; n++) {
    for(let i=0; i<deck.length; i++) {
      let j = Math.floor(Math.random() * i);
      [deck[i],deck[j]] = [deck[j], deck[i]];
    }
  }
  
  return deck;
}
