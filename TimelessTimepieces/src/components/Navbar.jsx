import logo from "../assets/logo.png"

export default function Navbar() {
  return (
    <nav>
      <div className="nav-row-1">
        <div></div>
        <img className="logo" src={logo}/>
        <div className="nav-icons">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-bag-shopping"></i>
        </div>
      </div>
      <div className="nav-row-2">
        <div className="rolex">ROLEX</div>
        <div className="ap">Audemars Piguet</div>
        <div className="patek">PATEK PHILIPPE</div>
        <div className="omega">OMEGA</div>
      </div>
    </nav>
  );
}