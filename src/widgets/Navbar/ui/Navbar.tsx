import { Fragment } from "react"
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <Fragment>
      <Link to='/about'>О сайте</Link>
      <Link to='/'>Главная</Link>
    </Fragment>
  )
}
