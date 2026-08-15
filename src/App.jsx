import { useState } from 'react'
import useCurrency from './hooks/useCurrency'
import InputBox from './components/InputBox'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currInfo = useCurrency(from)

  const options = Object.keys(currInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    if (currInfo && typeof currInfo[to] === 'number') {
      setConvertedAmount(amount * currInfo[to])
    }
  }

  return (
    <div className="container">
      <div className="card">
        <form
          onSubmit={(e) => {
            e.preventDefault();//this is used , normally when we click on the submit/covert button then the page will reload and reset all the states
            //by using this , it can stop the default behaviour of the browser , and show the reault on the same screen without being reload the page
            convert();
          }}
        >
          <InputBox
            label="From"
            amount={amount}
            CurrencyList={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            SelectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
          />
          <button
            type="button"
            className="swap-btn"
            onClick={swap}
          >
            swap
          </button>
          <InputBox
            label="To"
            amount={convertedAmount}
            CurrencyList={options}
            onCurrencyChange={(currency) => setTo(currency)}
            SelectCurrency={to}
            amountDisable
          />
          <button type="submit" className="convert-btn">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
