import { PatekData } from "../PatekData"
import WatchCard from "./WatchCard"

export default function PatekPage() {
  return (
    <div className="watch-page">
      {PatekData.map((patek) => (
        <WatchCard key={patek.id} id={patek.id} productName={patek.productName} price={patek.price} productImage={patek.productImage}/>
      ))}
    </div>
  )
}