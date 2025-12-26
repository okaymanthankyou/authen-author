import React from "react"
import Buttton from "./Button"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <>
      <nav className="navbar container align-items-start pt-4 pb-4">
      <Link className="text-light navbar-brand" to={"/"}>
        AUTHEN AUTHOR
      </Link>
      <div>
        <Buttton name="Login" class="btn btn-outline-info " url={"login/"} />
        &nbsp;
        <Buttton name="Register" class="btn btn-info" url={"register/"} />
      </div>
    </nav>
    </>
  )
}

export default Header
