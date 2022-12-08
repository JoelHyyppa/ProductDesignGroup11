import styles from "@/styles/AddGames.module.css"
import Layout from "@/components/Layout"
import { useState, useRef } from "react"
import { FaUser } from "react-icons/fa"
import { useRouter } from "next/router"

export default function index({ data }) {
  const nameInputRef = useRef()
  const descInputRef = useRef()
  const imgInputRef = useRef()

  const router = useRouter()

  const [cards, setCards] = useState(data)
  const [selectedCards, setSelectedCards] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const enteredValues = {
      name: nameInputRef.current.value,
      desc: descInputRef.current.value,
      img: imgInputRef.current.value,
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
      router.push("/games")
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

  const cardItems = cards.map((card) => (
    <li key={card._id} onClick={() => handleAddCard(card)}>
      {card.content}
    </li>
  ))

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.inputs}>
          <h1>
            <FaUser /> Add Games
          </h1>

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

            <input type="submit" value="Submit" className="btn" />
          </form>
        </div>

        <div className={styles.cardSelectContainer}>
          <ul className={styles.cardList}>
            {selectedCards.map((card) => (
              <li key={card._id} onClick={() => handleRemoveCard(card)}>
                {" "}
                {card.content}{" "}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.cardSelectContainer}>
          <ul className={styles.cardList}>{cardItems}</ul>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/card")
  const data = await res.json()

  return { props: { data } }
}
