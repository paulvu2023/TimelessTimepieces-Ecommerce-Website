import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="home">
      <div className="home-card">
        <div className="home-flex">
          <img src="https://twaintime.com/cdn/shop/articles/Why_rolex_will_go_up_Blog.jpg?v=1668133304" />
          <div>
            <h1>ROLEX</h1>
            <h2>Founded in 1905 by watchmaker Hans Wilsdorf, Rolex crafts precision timepieces for dynamic lifestyles, serving athletes, explorers, and those in perpetual motion.</h2>
            <Link className="home-link" to="/rolex">Shop Rolex</Link>
          </div>
        </div>
      </div>
      <div className="home-card">
        <div className="home-flex">
          <div>
            <h1>PATEK PHILIPPE</h1>
            <h2>Pioneered in 1839 by Antoine Norbert de Patek and Adrien Philippe, Patek Philippe epitomizes timeless elegance and precision, fusing entrepreneurial spirit with technical brilliance.</h2>
            <Link className="home-link" to="/patek">Shop Patek Philippe</Link>
          </div>
          <img src="https://www.globalicejewelry.com/cdn/shop/collections/IMG_6070_1200x1200.jpg?v=1653999407" />
        </div>
      </div>
      <div className="home-card">
        <div className="home-flex">
          <img src="https://watchmydiamonds.com/media/catalog/product/cache/1/image/1280x/040ec09b1e35df139433887a97daa66f/i/m/img_4665.jpg" alt="" />
          <div>
            <h1>AUDEMARS PIGUET</h1>
            <h2>Established in 1875, Audemars Piguet epitomizes Swiss excellence, from pocket watches to the iconic Royal Oak, embodying precision, enduring craftsmanship, and timeless luxury.</h2>
            <Link className="home-link" to="">Shop Audemars Piguet</Link>
          </div>
        </div>
      </div>
      <div className="home-card">
        <div className="home-flex">
          <div>
            <h1>OMEGA</h1>
            <h2>Originating in 1848, Omega, pioneered by Louis Brandt, stands as a luminary in Swiss watchmaking. From its inception to the present, Omega watches symbolize precision, innovation, and enduring elegance, with a legendary connection to the moon, marking a celestial chapter in the craftsmanship of time.</h2>
            <Link className="home-link" to="/omega">Shop Omega</Link>
          </div>
          <img src="https://i.ebayimg.com/images/g/WMwAAOSwgKdiQHw1/s-l1600.jpg" alt="" />
        </div>
      </div>  
    </div>
  )
}