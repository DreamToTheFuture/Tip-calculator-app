import './App.css'
import { useState } from 'react'
import dollarIcon from '../../images/icon-dollar.svg'
import personIcon from '../../images/icon-person.svg'

function App() {
  const [bill, setBill] = useState('');
  const [people, setPeople] = useState('');
  const [customTip, setCustomTip] = useState('');
  const [tipAmount, setTipAmount] = useState(0.00.toFixed(2));
  const [total, setTotal] = useState(0.00.toFixed(2));
  const [isError, setIsError] = useState(false);

  const calculate = (tip) => {
    if (people === '' || people === '0') {
      setIsError(true)
    } else {
      setIsError(false);
      let tipCalculated = (bill*(tip/100))/people;
    setTipAmount(tipCalculated.toFixed(2));
    console.log(tipCalculated);
    let totalCalculated = tipCalculated + (bill/people);
    setTotal(totalCalculated.toFixed(2));
    }
  }

  const calculateCustom = () => {
    if (people === '' || people === '0') {
      setIsError(true)
    } else {
      setIsError(false);
      let tipCalculated = (bill*(customTip/100))/people;
    setTipAmount(tipCalculated.toFixed(2));
    console.log(tipCalculated);
    let totalCalculated = tipCalculated + (bill/people);
    setTotal(totalCalculated.toFixed(2));
    }
  }

  const handleResetButton = () => {
    setBill('');
    setPeople('');
    setCustomTip('');
    setIsError(false);
    setTipAmount(0.00.toFixed(2));
    setTotal(0.00.toFixed(2));
  }

  return (
    <>
      <div className='container'>
        <div className='head'>
          <h1>S P L I</h1><h1>T T E R</h1>
        </div>
        <div className='calculator'>
          <div className='bodyLeft'>
            <div>
              <label htmlFor='bill'>Bill</label><br />
              <input type='number' id='bill' value={bill} onChange={(e)=> setBill(e.target.value)} placeholder='0'></input>
            </div>
            <div>
              <label>Select Tip %</label>
              <div className='tipButton'>
                <button onClick={() => calculate(5)}>5%</button>
                <button onClick={() => calculate(10)}>10%</button>
                <button onClick={() => calculate(15)}>15%</button>
                <button onClick={() => calculate(25)}>25%</button>
                <button onClick={() => calculate(50)}>50%</button>
                <input
                type='number'
                id='custom'
                value={customTip}
                onBlur={calculateCustom}
                onKeyDown={(e) => e.key === 'Enter' && calculateCustom(e)}
                onChange={(e) => setCustomTip(e.target.value)}
                placeholder='Custom'
                />
              </div>
            </div>
            <div>
              <div className='errorPeople'>
                <label htmlFor='people'>Number of People</label><br />
                {isError && (<div>Can't be zero</div>)}
              </div>
              <input
              type='number'
              id='people'
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              placeholder='0'
              className={isError ? 'errorInput' : ''}
              ></input>
            </div>
          </div>
          <div className='bodyRight'>
            <div>
              <div className='calculated'>
                <div>
                  <h3>Tip Amount</h3>
                  <p>/ person</p>
                </div>
                <h2>${tipAmount}</h2>
              </div>
              <div className='calculated'>
                <div>
                  <h3>Total</h3>
                  <p>/ person</p>
                </div>
                <h2>${total}</h2>
              </div>
            </div>
              <button className='resetButton' onClick={handleResetButton}>RESET</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
