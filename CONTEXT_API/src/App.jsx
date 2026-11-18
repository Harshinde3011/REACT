import './App.css'
import UserContextProvider from './context/userContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <>
    {/* This Provider surrounds both components, making shared user
        information available to Login and Profile. */}
    <UserContextProvider>
      <h2>Context API</h2>
      <Login />
      <Profile />
    </UserContextProvider>
    </>
  )
}

export default App
