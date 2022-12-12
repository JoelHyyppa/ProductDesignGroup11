import styles from "@/styles/AddGames.module.css"
import Button from "@/components/Button"
import Layout from "@/components/Layout"
import { useState, useRef } from "react"
import { FaEdit, FaSortNumericUpAlt, FaUser } from "react-icons/fa"
import { useRouter } from "next/router"
import GameGrid from "@/components/GameGrid"
import { set } from "mongoose"

export default function index({ data }) {
  const router = useRouter()

  const [game, setGame] = useState()

  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [img, setImg] = useState("")

  const [cards, setCards] = useState(data)
  const [selectedCards, setSelectedCards] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const enteredValues = {
      filter: { _id: game._id },
      update: {
        name: name,
        desc: desc,
        img: img,
        cards: selectedCards,
      },
    }
    console.log(enteredValues)

    const res = await fetch("http://localhost:3000/api/games", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enteredValues),
    })

    if (!res.ok) {
      console.log("something went wrong")
    } else {
      router.push("/moderator")
    }
  }

  async function handleDelete() {
    const data = { filter: { _id: game._id } }
    const res = await fetch("http://localhost:3000/api/games", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      console.log("smth went wrong")
    } else {
      console.log("ok")
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

  //Adds selected games cards to selectedCards
  function addCardsFromGames(crds) {
    const crdsArray = crds.map((id) => cards.find((e) => e._id == id))
    crdsArray.forEach((item) => {
      if (item != undefined) {
        handleAddCard(item)
      }
    })
  }

  //Called when selected game to edit. Adds current game details to states.
  function selectGame(item) {
    setGame(item)
    setName(item.name)
    setDesc(item.desc)
    setImg(item.img)
    addCardsFromGames(item.cards)
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
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="desc">Description</label>
        <input
          type="text"
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="img">Image Link</label>
        <input
          type="text"
          id="img"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
      </div>

      <Button type="submit" variant="submit">
        Submit
      </Button>

      <Button variant="delete" onClick={handleDelete}>
        {" "}
        Delete{" "}
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

  if (!game) {
    return (
      <Layout>
        <GameGrid onClick={selectGame} />
      </Layout>
    )
  }
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
