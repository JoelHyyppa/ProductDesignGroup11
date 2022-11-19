import styles from "@/styles/Search.module.css"

export default function Search() {
  return (
    <div className={styles.search}>
      <p>
        {" "}
        <input type="text" placeholder="Etsi peliä..." />{" "}
      </p>
    </div>
  )
}
