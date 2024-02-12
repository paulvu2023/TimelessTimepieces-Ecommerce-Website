import { RolexData } from "../RolexData"
import RolexCard from "./RolexCard"

export default function RolexPage() {
  return (
    <div className="watch-page">
      {RolexData.map((rolex) => (
        <RolexCard key={rolex.id} id={rolex.id} productName={rolex.productName} price={rolex.price} productImage={rolex.productImage}/>
      ))}
    </div>
  )
}