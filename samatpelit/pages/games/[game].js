import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Layout from "@/components/Layout"
import Button from "@/components/Button"
import ToD from "@/components/games/ToD"
import FtD from "@/components/games/FtD"

export default function GamePage() {
  const router = useRouter()

  const [game, setGame] = useState()

  const [renderedGame, setRenderedGame] = useState()
  useEffect(() => {
    console.log("USE EFFECT")
    if (game != undefined) {
      if (game.tod == true) {
        setRenderedGame(<ToD />)
      }
      switch (game._id) {
        case "63973fa2c00ec876633befd0":
          setRenderedGame(<FtD />)
          break

        default:
          break
      }
    }
  }, [game])

  const getGameDetails = async () => {
    const res = await fetch("http://localhost:3000/api/" + router.query.game)
    const data = await res.json()
    console.log(data)
    setGame(data)
  }

  return (
    <div>
      <Layout />
      <h1> This is game page</h1>
      <h2>game = {router.query.game}</h2>
      <Button onClick={getGameDetails}>Play now!</Button>
      {renderedGame}
    </div>
  )
}
