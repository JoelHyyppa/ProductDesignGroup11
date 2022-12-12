import styles from "@/styles/AddGames.module.css"
import Button from "@/components/Button"
import Layout from "@/components/Layout"
import { useState, useRef } from "react"
import { FaEdit, FaUser } from "react-icons/fa"
import { useRouter } from "next/router"

export default function index({ data }) {
  const nameInputRef = useRef()
  const descInputRef = useRef()
  const imgInputRef = useRef()
  const todBoolRef = useRef()

  const router = useRouter()

  const [cards, setCards] = useState(data)
  const [selectedCards, setSelectedCards] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const enteredValues = {
      name: nameInputRef.current.value,
      desc: descInputRef.current.value,
      img: imgInputRef.current.value,
      tod: todBoolRef.current.checked,
      cards: selectedCards,
    }
    console.log(enteredValues)

    const res = await fetch("http://localhost:3000/api/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enteredValues),
    })

    if (!res.ok) {
      console.log("something went wrong")
    } else {
      router.push("/moderator")
    }
  }

  function handleAddCard(card) {
    setSelectedCards((current) => [...current, card])
    setCards((cur) => cur.filter((e) => e._id != card._id))
  }

  function handleRemoveCard(card) {
    setCards((current) => [...current, card])
    setSelectedCards((cur) => cur.filter((e) => e._id != card._id))
  }

  const allCards = cards.map((card) => (
    <li key={card._id} onClick={() => handleAddCard(card)}>
      {card.content}
    </li>
  ))

  const rightBox = (
    <div className={styles.cardSelectContainer}>
      <ul className={styles.cardList}>{allCards}</ul>
    </div>
  )

  const middleBox = (
    <div className={styles.cardSelectContainer}>
      <ul className={styles.cardList}>
        {selectedCards.map((card) => (
          <li key={card._id} onClick={() => handleRemoveCard(card)}>
            {card.content}
          </li>
        ))}
      </ul>
    </div>
  )

  const form = (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Game Name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div>
        <label htmlFor="desc">Description</label>
        <input type="text" id="desc" ref={descInputRef} />
      </div>
      <div>
        <label htmlFor="img">Image Link</label>
        <input type="text" id="img" ref={imgInputRef} />
      </div>

      <div>
        <label htmlFor="tod">Truth or Dare?</label>
        <input type="checkbox" name="tod" ref={todBoolRef} />
      </div>

      <Button type="submit" variant="submit">
        Submit
      </Button>
    </form>
  )

  const leftBox = (
    <div className={styles.inputs}>
      <h1>
        <FaEdit /> Add Games
      </h1>
      {form}
    </div>
  )

  return (
    <Layout>
      <div className={styles.container}>
        {leftBox}
        {middleBox}
        {rightBox}
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/card")
  const data = await res.json()

  return { props: { data } }
}
