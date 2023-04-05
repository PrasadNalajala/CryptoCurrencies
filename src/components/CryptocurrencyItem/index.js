// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoItem} = props
  const {name, euroValue, id, currencyLogo, usdValue} = cryptoItem
  console.log(cryptoItem)
  return (
    <div className="crypto_details">
      <div className="card">
        <img src={currencyLogo} alt={name} className="currency_logo" />
        <h1>{name}</h1>
      </div>
      <div className="price_container">
        <h1 className="price">{usdValue}</h1>
        <h1 className="price">{euroValue}</h1>
      </div>
    </div>
  )
}

export default CryptocurrencyItem
