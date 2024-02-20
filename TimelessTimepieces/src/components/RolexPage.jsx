import { RolexData } from "../RolexData"
import WatchCard from "./WatchCard"

export default function RolexPage() {
  return (
    <div className="watch-page">
      {RolexData.map((rolex) => (
        <WatchCard key={rolex.id} id={rolex.id} productName={rolex.productName} price={rolex.price} productImage={rolex.productImage}/>
      ))}
    </div>
  )
}