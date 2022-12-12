import { useState } from "react"
import scrambledDeck from "@/components/Deck"
import { fetchServerResponse } from "next/dist/client/components/app-router"
import Button from "../Button"

export default function Hitler({game}) {
  const [deck, setDeck] = useState([])
  
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [currentCard, setCurrentCard] = useState("")
  const [allCards, setAllCards] = useState([])
  const [task, setTask] = useState("")

  function getDeck(){
    setDeck(scrambledDeck())
    setCurrentCardIndex(0)
  }
  /*const generate = () => {
      //we run this generate function with a button
      //inside this function, we call Math.random to generate a number between 0 and 1
      //then we multiply that with truthOrDare.length and then round that down
      //to the nearest integer with Math.floor to get the index
      const index = 52;
      setIndex(index);
    };*/

    //const card = deck.map((item) => <li key={item}>{item}</li>)

     const getCardContent = async () => {
        const res = await fetch("http://localhost:3000/api/card", {method: "GET", headers:{"Content-Type": "application/json",},})
        const data = await res.json()
        console.log(data)
        setAllCards(data)
    }

    function drawCard(){
        setCurrentCard(deck[currentCardIndex])
        setCurrentCardIndex((current) => current+1) 
        const c = allCards.find((e) => e.linkedCard == currentCard.slice(0,1))
        console.log(c)
        console.log(currentCard.slice(0,1))
        setTask(c.content)
    }
  
  return (
    <div>
      <Button onClick={getDeck}>Hae pakka</Button>
      <Button onClick={drawCard}>Nosta kortti</Button>
      <Button onClick={getCardContent}>Hae tiedot</Button>
      <p>{currentCard}</p>
      <p>{task}</p>
    </div>
  )
}
//      <img src={"../../assets/custom_cards/"+currentCard+".svg"} />
