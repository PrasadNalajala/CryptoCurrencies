// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoItem} = props
  const {name, euroValue, id, currencyLogo, usdValue} = cryptoItem
  console.log(cryptoItem)
  return (
    <li className="crypto_details">
      <div className="card p">
        <img src={currencyLogo} alt={name} className="currency_logo" />
        <p>{name}</p>
      </div>
      <div className="price_container">
        <p className="price p">{usdValue}</p>
        <p className="price p">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
