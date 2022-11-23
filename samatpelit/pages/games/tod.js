import { useState } from "react";
import Layout from "@/components/Layout";

const truthOrDare = [
    //we have an array of truth/dare questions that we pick from in the generator
  {
    truth:
      "Totuus: Ketä panisit tästä huoneesta?",
    dare: "Tehtävä: HH"
  },
  {
    truth:
      "Totuus: Ketä rakastat eniten?",
    dare: "Tehtävä: Soita vanhemmallesi ja sano rakastavan häntä"
  },
  {
    truth: "Totuus: Onko sinulla piilokykyjä?",
    dare: "Tehtävä: Demonstroi piilokykysi!"
  },
  {
    truth: "Totuus: Kenen persettä söisit mieluiten pelaajista?",
    dare: "Tehtävä: Syö jonkun persettä bileitten jälkee"
  },
  {
    truth:
      "Totuus: Kenen paikallaolijoiden kainaloa nuolaisisit mieluiten?",
    dare: "Tehtävä: Suutele vierellä istuvan varvasta"
  },
  {
    truth:
      "Totuus: Onko sinulla koskaan ollut sukupuolitautia?",
    dare: "Tehtävä: Kerro vitsi. Jos joku nauraa, saat jakaa 5 hörppyä."
  },
  {
    truth:
      "Totuus: Minkä ikäinen on vanhin seksikumppanisi?",
    dare: "Tehtävä: Esitä pantomiimina jotakin eläintä, aikaa 30sec. Ensimmäisenä oikein arvannut saa jakaa muille pelaajille kanssasi 3 hörppyä."
  },
  {
    truth:
      "Totuus: Mikä on pahin rikos mitä olet tehnyt?",
    dare: "Tehtävä: Hyppää parvekkeelta alas"
  },
  {
    truth:
      "Totuus: Montako seksikumppania sinulla on ollut?",
    dare: "Tehtävä: Kenellä on eniten kortteja lompakossa? Eniten kortteja omaava joutuu höyläämään korttiaan vastapäisen pelaajan persereikään."
  }
];

export default function App() {
  const [index, setIndex] = useState();
  const generate = () => {
    //we run this generate function with a button
    //inside this function, we call Math.random to generate a number between 0 and 1
    //then we multiply that with truthOrDare.length and then round that down
    //to the nearest integer with Math.floor to get the index
    const index = Math.floor(Math.random() * truthOrDare.length);
    setIndex(index);
  };
  return (
    <div className="App">
              <Layout />
      <button onClick={generate}>Totuus Vai Tehtävä?</button>
      <p>{truthOrDare[index] && truthOrDare[index].truth}</p>
      <p>{truthOrDare[index] && truthOrDare[index].dare}</p>
    </div>
  );
}