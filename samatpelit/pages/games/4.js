import { useState } from "react";
import Layout from "@/components/Layout";
import Button from "@/components/Button";

const truthOrDare = [
    //we have an array of truth/dare questions that we pick from in the generator
  {truth: "Totuus: Ketä rakastat eniten?"},
  {truth: "Totuus: Onko sinulla piilokykyjä?"},
  {truth: "Totuus: Kenen persettä söisit mieluiten pelaajista?"},
  {truth: "Totuus: Kuka on pelissä olevista kuumin?"},
  {truth: "Totuus: Kuka pelaajista on karvaisin?"},
  {truth: "Totuus: Montako seksikumppania sinulla on ollut?"},
  {truth: "Totuus: Onko sinulla koskaan ollut sukupuolitautia?"},
  {truth: "Totuus: Mikä on pahin rikos mitä olet tehnyt?"},
  {truth: "Totuus: Ottaisitko mieluummin tosi ruman mutta luonteeltaan täydellisen kumppanin vai vitun kuuman mutta täyden kusipään?"},
  {truth: "Totuus: Mikä on synkin seksifantasiasi?"},
  {truth: "Totuus: Mikä on pahin pelkosi?"},
  {truth: "Totuus: Oletko koskaan rikkonut lakia?"},
  {truth: "Totuus: Oletko koskaan huijannut kokeessa?"},
  {truth: "Totuus: Kerro oudoimmasta unestasi jonka olet nähnyt"},
  {truth: "Totuus: Kenen julkkiksen haluaisit nähdä alasti?"},
  {truth: "Totuus: Oletko koskaan urinoinut uima-altaaseen?"},
  {truth: "Totuus: Kaivatko koskaan nenääsi?"},
  {truth: "Totuus: Puhutko unissasi?"},
  {truth: "Totuus: Jos saisit käyttää vain yhtä kirosanaa koko loppuelämäsi ajan, mikä se olisi?"},
  {truth: "Totuus: Oletko koskaan käräyttänyt jonkun tai kärähtänyt itse runkkaamisesta?"},
  {truth: "Totuus: Kerro oudoimmasta unestasi jonka olet nähnyt"},
  {truth: "Totuus: Jos voisit syntyä uudestaan jonkun ruumiissa, kuka se olisi?"},
];

const dareOrTruth = [
  {dare: "Tehtävä: Demonstroi piilokykysi!"},
  {dare: "Tehtävä: Suutele vierellä istuvan varvasta"},
  {dare: "Tehtävä: Suutele pelissä olevista kuuminta!"},
  {dare: "Tehtävä: HH"},
  {dare: "Tehtävä: Anna vasemmanpuolimmaiselle pelaajalle sylitanssi!"},
  {dare: "Tehtävä: Kenellä on eniten kortteja lompakossa? Eniten kortteja omaava joutuu höyläämään korttiaan vastapäisen pelaajan luonnontaskuun."},
  {dare: "Tehtävä: Osoita porukan kusipäisintä ihmistä"},
  {dare: "Tehtävä: Hyppää parvekkeelta alas"},
  {dare: "Tehtävä: Osoita porukan tyhmintä ihmistä"},
  {dare: "Tehtävä: Soita vanhemmallesi ja sano rakastavan häntä"},
  {dare: "Tehtävä: Twerkkaa"},
  {dare: "Tehtävä: Ota napashotti"},
  {dare: "Tehtävä: Soita McDonaldsiin ja kysy, myydäänkö siellä Whoppereita"},
  {dare: "Tehtävä: Juo ilman käsiä"},
  {dare: "Tehtävä: Näyttele orgasmi"},
  {dare: "Tehtävä: Pelaa kierros ilman paitaa"},
  {dare: "Tehtävä: Anna muiden pelaajien selata kuvagalleriaasi minuutin ajan"},
  {dare: "Tehtävä: Imitoi seksiääniä 15 sekunnin ajan"},
  {dare: "Tehtävä: Näytä muille pelaajille puhelimestasi Googlen sivuhistoria"},
  {dare: "Tehtävä: Vaihda vaatteet valitsemasi pelaajan kanssa"},
  {dare: "Tehtävä: Laita seuraava kappale soimaan: https://www.youtube.com/watch?v=oHg5SJYRHA0"}
]

export default function App() {
  const [index, setIndex] = useState();
  const [number, setNumber] = useState();
  const generate = () => {
    //we run this generate function with a button
    //inside this function, we call Math.random to generate a number between 0 and 1
    //then we multiply that with truthOrDare.length and then round that down
    //to the nearest integer with Math.floor to get the index
    const index = Math.floor(Math.random() * truthOrDare.length);
    setIndex(index);
  }
  
  const generator = () => {
    const number = Math.floor(Math.random() * dareOrTruth.length);
    setNumber(number);
  };

  const [isTextHidden, setTextHidden] = useState(false);

  const onClick = () => setTextHidden(!isTextHidden);

  return (
    <div className="App">
              <Layout />
      <div><Button variant="tod" onClick={generate}>Totuus</Button></div>
      {!isTextHidden ? <h2>{truthOrDare[index] && truthOrDare[index].truth}</h2> : null}
      <div><Button variant="tod" onClick={generator}>Tehtävä</Button></div>
      {!isTextHidden ? <h2>{dareOrTruth[number] && dareOrTruth[number].dare}</h2> : null}
      <div><Button variant="next" onClick={onClick}>{isTextHidden ? 'Next' : 'Piilota'}</Button></div>

      <h1>HOW TO PLAY</h1>
      <li>
        Next-nappia painettaessa vaihtuu vuoro.
        Kysymykset näkyvät pelaajille Next-nappia painamalla.
      </li>
      <li>
        Ennen kun painetaan Next, pelaaja päättää, haluaako ottaa totuuden vai tehtävän. Tieto päivittyy vaikka sitä ei vielä näkyisikään.
      </li>
      <li>
        Jos pelaaja ei suostu tekemään tehtävää tai kertomaan totuutta, joutuu hän ottamaan kolme huikkaa.
      </li>
      <li>
        Vuoro päättyy, kun pelaaja painaa "Piilota."
      </li>
    </div>
  );
}