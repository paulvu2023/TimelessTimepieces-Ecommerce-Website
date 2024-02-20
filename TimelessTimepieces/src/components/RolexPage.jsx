import { RolexData } from "../RolexData"
import RolexWatch from "./RolexWatch"

export default function RolexPage() {
  return (
    <div className="watch-page">
      {RolexData.map((rolex) => (
        <RolexWatch key={rolex.id} id={rolex.id} productName={rolex.productName} price={rolex.price} productImage={rolex.productImage}/>
      ))}
    </div>
  )
}