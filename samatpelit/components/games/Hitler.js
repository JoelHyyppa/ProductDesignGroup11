import { useState } from "react"
import scrambledDeck from "@/components/Deck"
import { fetchServerResponse } from "next/dist/client/components/app-router"
import Button from "../Button"
import Image from "next/image"

export default function Hitler({game}) {
  const [deck, setDeck] = useState([])
  
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [currentCard, setCurrentCard] = useState("")
  const [allCards, setAllCards] = useState([])
  const [task, setTask] = useState("")

  function getDeck(){
    setDeck(scrambledDeck())
    setCurrentCardIndex(0)
    console.log('Pakka haettu')
  }

     const getCardContent = async () => { //getting the data asynchronously from our db
        const res = await fetch("http://localhost:3000/api/card", {method: "GET", headers:{"Content-Type": "application/json",},})
        const data = await res.json()
        console.log(data)
        console.log('Tiedot haettu')
        setAllCards(data)
    }

    function drawCard(){ //current card index is zero, we need a value between 0 and 1 for us to return
        setCurrentCard(deck[currentCardIndex]) //haetaan seuraava kortti pakasta
        setCurrentCardIndex((current) => current+1) //asetetaan seuraavalle kortille arvo
       try {
        const c = allCards.find((e) => e.linkedCard == currentCard.slice(0,1)) //tuodaan seuraava kortti
        console.log(c)
        console.log(currentCard.slice(0,1))
        setTask(c.content) 
       } catch {
        alert ('Korttipakka on tyhjä!')
       }
        
    }

  return (

    <body>
      <div>
      <h2>Muista hakea ensin pakka ja korttitiedot!</h2>
      <input type="text" placeholder="Pelaaja 1" id="player1"/>
      <input type="text" placeholder="Pelaaja 2" id="player2"/>
      <input type="text" placeholder="Pelaaja 3" id="player3"/>
      <input type="text" placeholder="Pelaaja 4" id="player4"/>
      <input type="text" placeholder="Pelaaja 5" id="player5"/>
      <Button variant="hitler" onClick={getDeck}>Hae pakka</Button>
      <Button variant="hitler" onClick={getCardContent}>Hae tiedot</Button>
      <h1><Button variant="hitler2" onClick={drawCard}>Nosta kortti</Button></h1>
      <p> <Image src={"/"+currentCard+".jpg"} width={239} height={335}/></p>
      <p>{currentCard}</p>
      <h1>{task}</h1>
      </div>
    </body>
  )
}
// <Image src={"../../assets/custom_cards/"+currentCard+".svg"} />