import { useRouter } from "next/router"
import games from "../dummydata/gamedata.json"
import styles from "@/styles/GameGrid.module.css"
import { useState } from "react"

export default function GameGrid() {
  const [data, setData] = useState([])
  const router = useRouter()

  const getData = async () => {
    const res = await fetch("http://localhost:3000/api/dummy")
    const resjson = await res.json()
    const data = resjson.data
    setData(data)
  }
  //Make list item for each gamelist item.

  const gameContent = data.map((item) => (
    <li
      key={item.name}
      onClick={() => router.push("/games/" + item.name)}
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
      <button onClick={getData}>click me</button>
      <ul>{gameContent}</ul>
    </div>
  )
}

//<img src={item.img} />
