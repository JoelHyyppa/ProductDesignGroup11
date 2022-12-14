import { useEffect, useState } from "react"
import customSizeDeck from "@/components/Deck"

export default function Giggolo({ game }) {
  const [allCards, setAllCards] = useState([])
  const [cards, setCards] = useState([])

  const getCards = async () => {
    console.log("fetch")
    const res = await fetch("http://localhost:3000/api/card")
    const data = await res.json()
    setAllCards(data)
  }

  useEffect(() => {
    getCards()
  }, [])

  return (
    <div>
      Giggolo
      <p>{}</p>
    </div>
  )
}
