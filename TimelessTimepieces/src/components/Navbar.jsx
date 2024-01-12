import logo from "../assets/logo.png"

export default function Navbar() {
  return (
    <nav>
      <div className="nav-row-1">
        <div className="placeholder"></div>
        <img className="logo" src={logo}/>
        <div className="nav-icons">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-bag-shopping"></i>
        </div>
      </div>
      <div className="nav-row-2">
        <div>
          <div>ROLEX</div>
          <div>AUDEMARS PIGUET</div>
          <div>PATEK PHILIPPE</div>
          <div>OMEGA</div>
        </div>
      </div>
    </nav>
  );
}