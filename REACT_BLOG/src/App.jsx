import Header from "./Header";
import LearState from "./State";
import ToggelComponent from "./Toggle";

const sendAlert = () => {
  return alert("Hello")
}

function App() {

  const version = 9;

  function operation(a, b, op) {
    if (op == "+") {
      return a + b
    }else if (op == "-") {
      return a - b
    }else {
      return a * b
    }
  }

  function sum(a, b) {
    return alert(a+b)
  }
  const userDetails = {
    name: "Harsh",
    mobileNo: "7028121922",
    age: 25
  }

  return (
    <div>
      <Header />
      <h1>Hello React, version: {version}</h1>
      <Learn />
      <button onClick={sendAlert}>Click</button>  
      {/* here onClick event it want function defination not function calling like sendAlert() */}
      <h2>{operation(10, 20, "-")}</h2>
      <h2>User name: {userDetails.name}</h2>
      <button onClick={() => sum(10,20)}>Operation</button> 
      {/* If want to pass parameter then call function like this use arrow function */}

      <LearState />
      <br></br>
      <ToggelComponent/>
    </div>
  )
}

function Learn() {
  return (
    <div>
      <h2>first component</h2>
    </div>
  )
}

export default App;