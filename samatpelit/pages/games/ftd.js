import { useState } from "react";
import Layout from "@/components/Layout";
import scrambledDeck from "@/components/Deck";

export default function App() {

    const [deck, setDeck] = useState([]);
    const getDeck = () => {
        setDeck(scrambledDeck())
    };
    /*const generate = () => {
      //we run this generate function with a button
      //inside this function, we call Math.random to generate a number between 0 and 1
      //then we multiply that with truthOrDare.length and then round that down
      //to the nearest integer with Math.floor to get the index
      const index = 52;
      setIndex(index);
    };*/

    /*const test = () => {
        //var deckk = ['AS', 'AH', 'AD', 'AC']
        //setDeck(scramble(deckk))
        setDeck(scrambledDeck())
    }*/

    const card = deck.map((item) => (
        <li
          key={item}
        >
            {item}
        </li>
      ))

    return (
      <div className="App">
                <Layout />
        <button onClick={getDeck}>Nosta kortti</button>
        <p>{deck}</p>
        <ul>
        {card}
        </ul>
      </div>
    );
}