import { useState } from "react"
import scrambledDeck from "@/components/Deck"
import Image from "next/image"
import Button from "../Button"

export default function FtD() {
  const [deck, setDeck] = useState([])

  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [currentCard, setCurrentCard] = useState("1B")
  const [allCards, setAllCards] = useState([])

  function getDeck() {
    setDeck(scrambledDeck())
    setCurrentCardIndex(0)
    console.log("Pakka haettu")
  }

  function drawCard() {
    //current card index is zero, we need a value between 0 and 1 for us to return
    setCurrentCard(deck[currentCardIndex]) //haetaan seuraava kortti pakasta
    setCurrentCardIndex((current) => current + 1) //asetetaan seuraavalle kortille arvo
    try {
      const c = allCards.find((e) => e.linkedCard == currentCard.slice(0, 1)) //tuodaan seuraava kortti
      console.log(c)
      console.log(currentCard.slice(0, 1))
    } catch {
      alert("Korttipakka on tyhjä!")
    }
  }
  var acc = document.getElementsByClassName("accordion")
  var i

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active")

      var panel = this.nextElementSibling
      if (panel.style.display === "block") {
        panel.style.display = "none"
      } else {
        panel.style.display = "block"
      }
    })
  }

  //const card = deck.map((item) => <li key={item}>{item}</li>)
  return (
    <div>
      <input type="text" placeholder="Pelaaja 1" id="player1" />
      <input type="text" placeholder="Pelaaja 2" id="player2" />
      <input type="text" placeholder="Pelaaja 3" id="player3" />
      <div>
        <Button onClick={getDeck}>Hae korttipakka</Button>
      </div>
      <h1>
        <Button variant="ftd" onClick={drawCard}>
          Nosta kortti
        </Button>
      </h1>
      <p>
        {" "}
        <Image src={"/" + currentCard + ".jpg"} width={239} height={335} />
      </p>
      <div>
        <Button onClick={getPlayerNames}>Pelaajat</Button>
      </div>
      <button class="accordion">Säännöt</button>
      <div class="panel">
        <li>
          Jokainen pelaaja nostaa vuorollaan yhden kortin. Alimman kortin
          nostanut määrätään jakajaksi.
        </li>
        <li>
          Ennen pelin alkua jakaja kysyy seuraavalta pelaajalta kortin maata.
        </li>
        <li>
          Pelaajan arvatessa oikein jakaja juo 2 ja seuraavan arvaajan vuoro
          alkaa. Muussa tapauksessa pelaaja juo 2.
        </li>
        <li>
          Pelaajan arvatessa väärin tulee hänen seuraavaksi arvata kortin arvoa.
          Oikein arvatessa pelaajan vuoro loppuu ja jakaja juo 3, muuten pelaaja
          juo 3.
        </li>
        <li>
          Jos pelaaja arvaa taas väärin, hänen tulee arvata nyt, onko kortin
          arvo edellistä pienempi vai suurempi. Jos pelaaja arvaa oikein, jakaja
          juo 4, muuten pelaaja juo 4 ja hänestä tulee diileri!
        </li>
        <h3>Muista juoda vastuullisesti!</h3>
      </div>
    </div>
  )
  function getPlayerNames() {
    alert(document.getElementById("player1").value)
    alert(document.getElementById("player2").value)
    alert(document.getElementById("player3").value)
  }
}
