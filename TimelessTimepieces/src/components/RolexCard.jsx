export default function RolexCard({id, productName, price, productImage}) {
  return (
    <>
      <div>{id}</div>
      <div>{productName}</div>
      <div>{price}</div>
      <img src={productImage} />
    </>
  )
}