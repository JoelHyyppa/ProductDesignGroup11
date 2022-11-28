export function makeDeck() {
  const suits = ["H", "S", "D", "C"]
  const ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
    "A",
  ]
  var deck = []

  for (var suitCounter = 0; suitCounter < 4; suitCounter++) {
    for (var rankCounter = 0; rankCounter < 13; rankCounter++) {
      deck.push(ranks[rankCounter] + suits[suitCounter])
    }
  }
  return deck
}

export default function scrambledDeck() {
  var deck = makeDeck()
  deck = scramble(deck)
  return deck
}

export function scramble(props) {
  var deck = []
  deck = props

  for (var i = 0; i < deck.length; i++) {
    var tempCard = deck[i]
    var randomIndex = Math.floor(Math.random() * deck.length)
    deck[i] = deck[randomIndex]
    deck[randomIndex] = tempCard
  }
  return deck
}
