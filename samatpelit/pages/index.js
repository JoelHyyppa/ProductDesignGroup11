import GameGrid from "@/components/GameGrid"
import Layout from "@/components/Layout"
import styles from "@/styles/Home.module.css"
import Image from "next/image"
import alcohol from "../assets/alcohol.jpg"

export default function Home() {
  return (
    <main className={styles.Home}>
      <Layout>
        <div className={styles.etusivu}>
          <Image
            src={alcohol}
            alt="Picture of alcohol"
            width={700}
            height={700}
            className={styles.kuva}
          />
          <aside>
            <GameGrid />
          </aside>
        </div>
      </Layout>
    </main>
  )
}
