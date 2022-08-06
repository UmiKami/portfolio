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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav  gap-4">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experience">Experience</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Download Resume</Link>
            </li>
          </ul>
        </div>
        <button className="btn btn-outline-success navBtn" type="submit">Contact</button>
      </div>
    </nav>
  </>
}

export default Navbar