import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    console.log("add counter: ", counter);
    // Normal update. here it only updates value by 1, React batches these updates and processes the replacement value 1 each time. The final state is 1, not 5.
  }

  const addValues = () => {
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
    console.log("add counter: ", counter);
    // Functional update. here it only updates value by 4, React processes each updater sequentially using the latest pending state. Therefore, every increment is applied correctly.
  }

  const reduceValue = () => {
    if (counter < 0) return alert("Your are not abke to reduce more than this")

    setCounter(counter - 1)
    console.log("drop counter: ", counter);
  }

  return (
    <>
      <h2>what is use of Hook</h2>
      <h3>counter value {counter}</h3>
      <br></br>

      <button onClick={addValue}>Add value {counter}</button>
      <br></br>
      <button onClick={addValues}>Add values {counter}</button>
      <br></br>
      <button onClick={reduceValue}>Drop value {counter}</button>

    </>
  )
}

export default App
