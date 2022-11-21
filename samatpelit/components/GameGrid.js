import { useRouter } from "next/router"
import games from "../dummydata/gamedata.json"
import styles from "@/styles/GameGrid.module.css"

export default function GameGrid() {
  const gamesData = games
  const router = useRouter()

  //Make list item for each gamelist item.

  const gameContent = gamesData.map((item) => (
    <li
      key={item.id}
      onClick={() => router.push("/games/" + item.id)}
      className={styles.list}
      style={{ backgroundImage: `url(${item.img})` }}
    >
      <div className={styles.infobox}>
        <h3>{item.name}</h3>
        <h4>{item.desc}</h4>
      </div>
    </li>
  ))

  return (
    <div className={styles.list}>
      <ul>{gameContent}</ul>
    </div>
  )
}

//<img src={item.img} />
