import styles from "@/styles/AuthForm.module.css"
import Layout from "@/components/Layout"
import { useRef } from "react"
import { FaUser } from "react-icons/fa"
import { useRouter } from "next/router"

export default function index() {
  const nameInputRef = useRef()
  const descInputRef = useRef()
  const imgInputRef = useRef()

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const enteredValues = {
      name: nameInputRef.current.value,
      desc: descInputRef.current.value,
      img: imgInputRef.current.value,
    }
    console.log(enteredValues)

    const res = await fetch("http://localhost:3000/api/dummy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enteredValues),
    })

    if (!res.ok) {
      console.log("something went wrong")
    } else {
      router.push("/games")
    }
  }

  return (
    <Layout>
      <div className={styles.auth}>
        <h1>
          <FaUser /> Add Games
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Game Name</label>
            <input type="text" id="name" ref={nameInputRef} />
          </div>
          <div>
            <label htmlFor="desc">Description</label>
            <input type="text" id="desc" ref={descInputRef} />
          </div>
          <div>
            <label htmlFor="img">Image Link</label>
            <input type="text" id="img" ref={imgInputRef} />
          </div>

          <input type="submit" value="Submit" className="btn" />
        </form>
      </div>
    </Layout>
  )
}
