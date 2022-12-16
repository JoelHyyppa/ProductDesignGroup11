import { use, useEffect, useState } from "react"
import scrambledDeck from "@/components/Deck"
import useSWR from "swr"
import Button from "../Button"
import Image from "next/image"

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Hitler({game}) {
  const {data, error} = useSWR("/api/card", fetcher)
  
  const [fetchState, setFetchState] = useState(0)
 
  const [allCards, setAllCards] = useState()
  const [deck, setDeck] = useState()
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [currentCard, setCurrentCard] = useState("1B")
  const [task, setTask] = useState()

  
  useEffect(()=> {
    if (fetchState == 1) {
      console.log('Pakka haettu')
      console.log("deckEffect")
      console.log(deck)
      if(currentCardIndex ==! 0){
        setCurrentCardIndex(0)
      }
    } else {
      
    }
  },[deck])
  
  useEffect(()=>{
    if(fetchState == 1) {
      console.log("currentCardIndex changed!")
      if(!currentCardIndex) {
        console.log(deck[0])
       setCurrentCard(deck[0])
      }
      console.log(deck[currentCardIndex])
      setCurrentCard(deck[currentCardIndex])
    }
  },[currentCardIndex])


  function initializeGame(data) {
    console.log("initializeGame")
    setAllCards(game.cards.map((c) => data.find((i) => i._id == c)))
    setDeck(scrambledDeck())
    setFetchState(1)
  }
  
  useEffect(() => {
    if (fetchState == 1) {
        console.log("CurrentCard Changed!")
        console.log(currentCard)
        const c = allCards.find((e) => e.linkedCard == currentCard.slice(0,1)) //tuodaan seuraava kortti
        console.log(c)
        console.log(currentCard.slice(0,1))
        setTask(c.content) 
    }
  },[currentCard])

  if (error) return alert('Error on fetching data')
  if (!data) return <div> Loading... </div>
  if (data && fetchState == 0) {
    initializeGame(data)
  } 
  
  
  function getDeck(){
    setDeck(scrambledDeck())
    //setCurrentCardIndex(0)
  }
  
    function drawCard(){ //current card index is zero, we need a value between 0 and 1 for us to return
         //haetaan seuraava kortti pakasta
        setCurrentCardIndex((current) => current+1) //asetetaan seuraavalle kortille arvo
        
    }

  
  return (
      <div>
      <h2>Hitler</h2>
      
      <Button variant="hitler2" onClick={() => drawCard()}>Nosta kortti</Button>
      <Image src={"/"+currentCard+".jpg"} alt="Kortti"width={239} height={335}/>
      <h1>{task}</h1>
      </div>
  )
}

//<Button variant="hitler" onClick={getDeck}>Hae pakka</Button>
//<Button variant="hitler" onClick={getCardContent}>Hae tiedot</Button>
// <Image src={"../../assets/custom_cards/"+currentCard+".svg"} />
