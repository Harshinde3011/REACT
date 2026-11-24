import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import { useEffect } from 'react';
import ThemeButton from './components/ThemeBtn';
import Card from './components/Card';

function App() {

  // Keep the selected theme here so every child can use the same value.
  const [themeMode, setThemeMode] = useState("light");

  // These functions let the toggle choose a theme by name.
  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  // Put the theme name on the page so Tailwind's dark: styles can respond.
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  // Share the theme and change functions with components inside this provider.
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
