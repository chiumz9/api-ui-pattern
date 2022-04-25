import {useState} from 'react'

export default function Navbar({foods,toggleNav}){
  const [showNav, setShowNav] = useState(false)

  const handleToggle =() => {
    setShowNav(!showNav)
  }

  return(
    <nav className = "navbar">

    </nav>
  )
} 
