import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



// Prop drilling is a process of passing props from a parent component to deeply nested child components through intermediate components that don't need the data. We can avoid prop drilling using the Context API or state management libraries like Redux.

// Why is prop drilling a problem?
// - Makes code harder to maintain when components are deeply nested.
// - Middle components receive props they don't actually need.
// - If the data changes, you may need to update several components.

// Context API is a built-in React feature used to share data across multiple components without prop drilling. We create a context using createContext, provide the data using a Provider, and access it using useContext.
// Context does not automatically make data persistent. If you refresh the browser, the state resets unless you restore it from something like localStorage, an API, or another storage mechanism.