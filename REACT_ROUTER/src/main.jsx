// React StrictMode helps find possible problems while developing the app.
import { StrictMode } from 'react'

// createRoot connects React to the HTML element with the id "root".
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// Each import below represents a component that React can display.
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import GitHub, { fetchGitHubInfo } from './components/GitHub/GitHub'

// This router defines which component should be shown for each URL.
// createRoutesFromElements lets us describe the routes using JSX.
const router = createBrowserRouter(
  createRoutesFromElements(
    // Layout is the parent route, so it is shared by the nested pages below.
    <Route path='/' element={<Layout />}>
      {/* An empty path shows Home at the website root: "/" */}
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>

      {/* ":userid" is a dynamic URL value, for example "/user/123". */}
      <Route path='user/:userid' element={<User />}/>  

      {/* The loader fetches GitHub data before the GitHub page is displayed. */}
      <Route 
      loader={fetchGitHubInfo}
      path='github' 
      element={<GitHub />}
      />  
    </Route>
  )
)

// Start React and render the app inside the "root" element from index.html.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* RouterProvider connects the router configuration to the whole app. */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
