import styles from "@/styles/AddGames.module.css"
import Layout from "@/components/Layout"
import { useRef } from "react"
import { FaUser } from "react-icons/fa"
import { useRouter } from "next/router"

import React from "react"
import Button from "@/components/Button"

export default function cards({ data }) {
  const contentInputRef = useRef()
  const linkedCardRef = useRef()

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const enteredValues = {
      content: contentInputRef.current.value,
      linkedCard: linkedCardRef.current.value,
    }

    const res = await fetch("http://localhost:3000/api/card", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enteredValues),
    })

    if (!res.ok) {
      console.log("something went wrong")
    } else {
      router.push("/add")
    }
  }

  const form = (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="content"> Card content </label>
        <input
          type="text"
          id="content"
          ref={contentInputRef}
          placeholder="I.E. Drink 3"
        />
      </div>

      <div>
        <label htmlFor="linkedcard"> Linked card </label>
        <input
          type="text"
          id="linkedCard"
          ref={linkedCardRef}
          placeholder="I.E. Ace of Spades = AS"
        />
      </div>
      <Button type="submit" variant="submit">
        Submit
      </Button>
    </form>
  )

  const leftBox = (
    <div className={styles.inputs}>
      <h1>
        <FaUser /> Add Cards
      </h1>
      {form}
    </div>
  )

  const allCards = data.map((card) => <li key={card._id}>{card.content}</li>)

  const rightBox = (
    <div className={styles.listCards}>
      <h1>All current cards</h1>
      <ul>{allCards}</ul>
    </div>
  )

  return (
    <Layout>
      <div className={styles.container}>
        {leftBox}
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
