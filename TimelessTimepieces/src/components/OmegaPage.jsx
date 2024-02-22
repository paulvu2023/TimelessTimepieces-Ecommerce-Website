import { OmegaData } from "../OmegaData"
import WatchCard from "./WatchCard"

export default function OmegaPage() {
  return (
    <div className="watch-page">
      {OmegaData.map((omega) => (
        <WatchCard key={omega.id} id={omega.id} productName={omega.productName} price={omega.price} productImage={omega.productImage}/>
      ))}
    </div>
  )
}