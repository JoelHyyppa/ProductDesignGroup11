import useSWR from "swr"
import { useRouter } from "next/router"
import styles from "@/styles/GameGrid.module.css"

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function GameGrid() {
  const router = useRouter()

  const { data, error } = useSWR("/api/games", fetcher)

  if (error) return <div> Failed to load </div>
  if (!data) return <div> Loading... </div>

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
      <ul>{gameContent}</ul>
    </div>
  )
}
