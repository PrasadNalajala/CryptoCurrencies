// Write your JS code here
import {Component} from 'react'

import './index.css'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {cryptosList: [], isLoading: true}

  componentDidMount() {
    this.fetchCrptos()
  }

  fetchCrptos = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )

    const data = await response.json()
    const updatedData = data.map(item => ({
      name: item.currency_name,
      euroValue: item.euro_value,
      id: item.id,
      currencyLogo: item.currency_logo,
      usdValue: item.usd_value,
    }))
    this.setState({cryptosList: updatedData, isLoading: false})
  }

  render() {
    const {cryptosList, isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <div>
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="crypto_heading_contaier">
          <div className="crypto_details back">
            <h1>Coin Type</h1>
            <div className="price_container">
              <h1 className="price">USD</h1>
              <h1 className="price">EURO</h1>
            </div>
          </div>
          {cryptosList.map(each => (
            <CryptocurrencyItem cryptoItem={each} key={each.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
