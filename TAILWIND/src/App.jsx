import './App.css'
import Card from './components/card'

function App() {

  let userDetails = {
    name: "Harsh",
    age: 25
  }

  let usersArray = ['harsh', 'raj', 'golu'];

  return (
    <>
      <h2 className='bg-green-500 text-black p-4 rounded-xl'>Hello Tailwind</h2>

    {/* Props in React are short for properties. They allow us to pass data from a parent component to a child component. Props are read-only, and they help us build reusable components. */}
    
      <Card location="pune" userDetailsObject={userDetails} usrArray={usersArray} description="pune is famous for forts" />
      <Card location="mumbai" description="mumbai is famous for food street" />
    </>
  )
}

export default App
