import { useEffect, useState } from "react"
import useSWR from "swr"
import {customSizeDeck} from "@/components/Deck"
import Button from "../Button"
import styles from "@/styles/Giggolo.module.css"
import { icons } from "react-icons"

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Giggolo({ game }) {
  const [fetchState, setFetchState] = useState(0)
  const [cards, setCards] = useState([])
  const [currentCard, setCurrentCard] = useState("Moi")
  const [currentCardIndex, setCardIndex] = useState(0)

  const { data, error } = useSWR("/api/card", fetcher)

  function initializeGame(data) {
    const neededCards = game.cards.map((c) => data.find((i) => i._id == c))
    makeDeck(neededCards)
    setFetchState(1)
  }

  useEffect(()=> {
    if(fetchState == 1){
      console.log(cards)
      setCurrentCard(cards[0].content)
    }
  },[cards])

  function makeDeck(cards) {
    const rawDeck = customSizeDeck(cards.length)
    const scrambledCards = rawDeck.map((key) =>
      cards.find((cKey, cValue) => cValue == key)
    )
    setCards(scrambledCards)
  }

  if (error) return <div> failed to fetch data </div>
  if (!data) return <div> Loading... </div>
  if (data && fetchState == 0) initializeGame(data)

  function nextCard() {
    if (currentCardIndex + 1 < cards.length) {
      if(cards === undefined || currentCardIndex === undefined){
        
      }
      console.log(currentCardIndex)
      setCurrentCard(cards[currentCardIndex].content)
      setCardIndex((current) => current + 1)
    } else {
      console.log("else")
      console.log(currentCardIndex)
      makeDeck(cards)
      setCardIndex(0)
    }
  }

  return (
    <div className={styles.container}>
      <h1>Giggolo</h1>
      <div className={styles.card} onClick={() => nextCard()}>
        <p>{currentCard}</p>
      </div>
    </div>
  )
}
