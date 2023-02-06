import { FaBars, FaRegTimesCircle } from "react-icons/fa"
import { useState } from "react"
import NavLinks from "./NavLinks"

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false)

  const hamburgerIcon = <FaBars onClick={() => setOpen(!open)} />
  const closeIcon = <FaRegTimesCircle onClick={() => setOpen(!open)} />

  return (
    <nav>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isBurger={true} />}
    </nav>
  )
}
