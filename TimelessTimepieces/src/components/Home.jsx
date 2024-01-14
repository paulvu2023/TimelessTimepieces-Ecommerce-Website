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
            <Link className="home-link" to="">Find your Rolex</Link>
          </div>
        </div>
      </div>
    </div>
  )
}