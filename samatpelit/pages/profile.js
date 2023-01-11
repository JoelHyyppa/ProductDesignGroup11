import Layout from "@/components/Layout"
import styles from "@/styles/Profile.module.css"
import { useEffect, useState } from "react"

import useMediaQuery from "react-responsive"



export default function profile() {

  const isMobile = useMediaQuery({ query:'(max-width: 600px)'})
  const [isMobileUse, setIsMobile] = useState(false)

  useEffect(()=> {
    console.log("Effect!")
    console.log(!window.matchMedia("(max-width: 600px)").matches? false : true)
    setIsMobile(!window.matchMedia("(max-width: 600px)").matches? false : true)
  },[isMobile])

console.log(isMobile)
  if(isMobileUse == false || !isMobileUse) {
    return (
      <Layout>
        <h1> This is Profile Page </h1>
      </Layout>
    )
  }

  if(isMobileUse == true) {
    return (
      <Layout>
        <h1> This is mobile </h1>
      </Layout>
    )
  }



  /*const isMobile = useMediaQuery({ query:'(max-width: 600px)'})
  const [isMobileUse, setIsMobile] = useState(false)

  /*useEffect(()=>{
    //const test = window.matchMedia("(max-width: 600px;)").matches
    //setIsMobile(window.matchMedia("(max-width: 600px;)").matches)
    if(window.innerWidth < 600){
      setIsMobile(true)
    }
    else{
      setIsMobile(false)
    }
    //console.log(test)
    console.log(window.innerWidth)
    console.log(window.outerWidth)
  },[])

  useEffect(()=> {
    setIsMobile(isMobile)
    console.log("isMobile Changed")
    console.log(isMobile)
    console.log(isMobileUse)
  },[isMobile])

//console.log(isMobile)
  if(isMobileUse == false || !isMobileUse) {
    return (
      <Layout>
        <h1> This is Profile Page </h1>
      </Layout>
    )
  }

  if(isMobileUse == true) {
    return (
      <Layout>
        <h1> This is mobile </h1>
      </Layout>
    )
  }
  
    const width = window.innerWidth

  const mobile = <p> Mobile </p>
  const desktop = <p> Desktop </p>

  return (
    <Layout>
      <div>
        <div className={styles.mycontainer}>
          This is profile-page!
          <div>{width < 600 ? mobile : desktop }</div>
        </div>
      </div>
    </Layout>
  )
  
  */
}
