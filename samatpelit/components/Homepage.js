import GameGrid from "@/components/GameGrid"
import Layout from "@/components/Layout"
import styles from "@/styles/Home.module.css"
import Image from "next/image"
import alcohol from "../assets/alcohol.jpg"
import useMediaQuery from "react-responsive"
import {useState, useEffect} from "react"



export default function Homepage() {

    const isMobile = useMediaQuery({ query:'(max-width: 600px)'})
  const [isMobileUse, setIsMobile] = useState(false)

  useEffect(()=> {
    console.log("Effect!")
    console.log(!window.matchMedia("(max-width: 600px)").matches? false : true)
    setIsMobile(!window.matchMedia("(max-width: 600px)").matches? false : true)
  },[isMobile])

  if(isMobileUse == false) {
      return (
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
      )
  }

  if(isMobileUse == true) {
    return(
    <Layout>
                <GameGrid />
          </Layout>

    )
  }
}
