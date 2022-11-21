import styles from "@/styles/Button.module.css"

export default function Button({ children, variant, type, onClick }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={styles[`variant-${variant}`]}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  variant: "primary",
  type: "button",
}
