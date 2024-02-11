export default function RolexCard({id, productName, price, productImage}) {
  return (
    <div className="rolex-card">
      <img src={productImage} />
      <div className="product-name">{productName}</div>
      <div className="product-price">${price}.00</div>
    </div>
  )
}