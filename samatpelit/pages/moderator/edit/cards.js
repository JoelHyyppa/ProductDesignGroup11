import Layout from "@/components/Layout"
import Button from "@/components/Button"
import styles from "@/styles/AddGames.module.css"
import { FaEdit, FaRegTimesCircle, FaUser } from "react-icons/fa"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function cards({ data }) {
  const router = useRouter()

  const [selected, setSelected] = useState()
  const [content, setContent] = useState("")
  const [linkedCard, setLinkedCard] = useState("")

  //function to handle submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!selected) {
      console.log("no card selected")
    } else {
      const data = {
        filter: { _id: selected._id },
        update: { content: content, linkedCard: linkedCard },
      }
      const res = await fetch("http://localhost:3000/api/card", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        console.log("something went wrong")
      } else {
        setContent("")
        setLinkedCard("")
        setSelected()
        router.refresh()
      }

      //console.log("Card with ID: " + selected._id)
      //console.log("New content: " + content)
      //console.log("New linkedCard: " + linkedCard)
    }
  }

  //function to handle delete
  const deleteCard = async (card) => {
    console.log(card._id + "  deleted")

    const data = { filter: { _id: card._id } }
    const res = await fetch("http://localhost:3000/api/card", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      console.log("smth went wrong")
    } else {
      console.log("ok")
      router.refresh()
    }
  }

  //Form to edit card
  const form = (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="content"> Card content </label>
        <input
          type="text"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="I.E. Drink 3"
        />
      </div>

      <div>
        <label htmlFor="linkedcard"> Linked card </label>
        <input
          type="text"
          id="linkedCard"
          value={linkedCard}
          onChange={(e) => setLinkedCard(e.target.value)}
          placeholder="I.E. Ace of Spades = AS"
        />
      </div>
      <Button type="submit" variant="submit">
        Submit
      </Button>
    </form>
  )

  //Left container to contain form
  const leftBox = (
    <div className={styles.inputs}>
      <h1>
        <FaEdit /> Edit
      </h1>
      {form}
    </div>
  )

  //Right container to contain all cards
  const rightBox = (
    <div className={styles.listCards}>
      <h1>All current cards</h1>
      <ul className={styles.editList}>
        {data.map((card) => (
          <div key={card._id}>
            <li onClick={() => handleCardSelect(card)}>{card.content}</li>
            <FaRegTimesCircle
              className={styles.removeIcon}
              onClick={() => deleteCard(card)}
            />
          </div>
        ))}
      </ul>
    </div>
  )

  //function to handle card selection
  function handleCardSelect(card) {
    setSelected(card)
    setContent(card.content)
    setLinkedCard(card.linkedCard)
  }

  return (
    <Layout>
      <h2>Edit / Delete Cards</h2>
      <div className={styles.container}>
        {leftBox}
        {rightBox}
      </div>
    </Layout>
  )
}

//fetch all cards from database
export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/card")
  const data = await res.json()
  return { props: { data } }
}
