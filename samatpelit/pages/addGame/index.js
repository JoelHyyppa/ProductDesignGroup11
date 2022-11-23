import styles from "@/styles/AuthForm.module.css"
import Layout from "@/components/Layout"
import { useState, useEffect, useContext } from "react"
import { FaUser } from "react-icons/fa"

export default function index() {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [img, setImg] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ name, desc, img })
  }
  return (
    <div className={styles.auth}>
      <h1>
        <FaUser /> Rekisteröidy
      </h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Game Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="img">Image Link</label>
          <input
            type="test"
            id="img"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>

        <input type="submit" value="Register" className="btn" />
      </form>
    </div>
  )
}
