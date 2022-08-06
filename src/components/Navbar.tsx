/*
=====IMPORTANT=====================
REMOVE PHONE NUMBER FROM RESUME
=====IMPORTANT=====================
*/
import { Link } from "react-router-dom"

const Navbar = () => {
  return <>
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container nav-container">
        <Link className="navbar-brand" to={"/"}>Ernesto Gonzalez</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="nav  gap-4">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="\">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="\">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="\">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="\">Download Resume</a>
            </li>
          </ul>
        </div>
        <button className="btn btn-outline-success navBtn" type="submit">Contact</button>
      </div>
    </nav>
  </>
}

export default Navbar