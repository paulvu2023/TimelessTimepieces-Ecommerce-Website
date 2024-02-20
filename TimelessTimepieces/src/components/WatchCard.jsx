export default function WatchCard({id, productName, price, productImage}) {
  return (
    <div className="watch-card">
      <img src={productImage} />
      <div className="watch-name">{productName}</div>
      <div className="watch-price">${price}.00</div>
    </div>
  )
}