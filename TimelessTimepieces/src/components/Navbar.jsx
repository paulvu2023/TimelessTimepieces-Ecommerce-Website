import logo from "../assets/logo.png"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
      <div className="nav-row-1">
        <div className="placeholder"></div>
        <Link to="/">
          <img className="logo" src={logo}/>
        </Link>
        <div className="nav-icons">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-bag-shopping"></i>
        </div>
      </div>
      <div className="nav-row-2">
        <div>
          <Link to="/rolex" className="nav-link">ROLEX</Link>
          <Link to="/patek" className="nav-link">PATEK PHILIPPE</Link>
          <Link className="nav-link">AUDEMARS PIGUET</Link>
          <Link className="nav-link">OMEGA</Link>
        </div>
      </div>
    </nav>
  );
}