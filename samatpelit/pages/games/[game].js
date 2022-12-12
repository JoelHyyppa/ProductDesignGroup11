import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Layout from "@/components/Layout"
import Button from "@/components/Button"
import ToD from "@/components/games/ToD"
import FtD from "@/components/games/FtD"
import Hitler from "@/components/games/Hitler"
import styles from "@/styles/GamePage.module.css"

export default function GamePage() {
  const router = useRouter()

  useEffect(() => {
    console.log("useEff")
    if (game == "") {
      getGameDetails()
    }
  })

  const [game, setGame] = useState("")
  const [gameState, setGameState] = useState(0)

  const [renderedGame, setRenderedGame] = useState()
  useEffect(() => {
    console.log("USE EFFECT")
    if (game != undefined) {
      if (game.tod == true && gameState == 1) {
        setRenderedGame(
          <>
            <Button
              variant="delete"
              onClick={() => setGameState(0) + setRenderedGame("")}
            >
              Close Game
            </Button>
            <ToD />
          </>
        )
      }
      switch (game._id) {
        case "63973fa2c00ec876633befd0":
          setRenderedGame(<FtD />)
          break

        case "6392585582fa78fe059f108f":
          setRenderedGame(<>
            <Button
                variant="delete"
                onClick={() => setGameState(0) + setRenderedGame("")}
              >
                Close Game
              </Button>
            <Hitler game = {game}/>
            </>)

          break

        default:
          break
      }
    }
  }, [gameState])

  const getGameDetails = async () => {
    const res = await fetch("http://localhost:3000/api/" + router.query.game)
    const data = await res.json()
    setGame(data)
  }

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.description} hidden={gameState}>
          <h1> {game.name}</h1>
          <h2>{game.desc}</h2>
          <div>
            <Button onClick={() => setGameState(1)}>Play now!</Button>
          </div>
        </div>
        <div
          alt="Image of a Game"
          className={styles.image}
          style={{
            backgroundImage: `url(${game.img})`,
          }}
          hidden={gameState}
        />
      </div>
      {renderedGame}
    </Layout>
  )
}
