import games from "../dummydata/gamedata.json"
import styles from "@/styles/GameGrid.module.css"

export default function GameGrid() {
  const gamesData = games

  //Make list item for each gamelist item.

  const gameContent = gamesData.map((item) => (
    <li className={styles.list}>
      <h3>{item.name}</h3>
      <img src={item.img} />
      <h4>{item.desc}</h4>
    </li>
  ))

  return (
    <div className={styles.list}>
      <ul>{gameContent}</ul>
    </div>
  )
}
