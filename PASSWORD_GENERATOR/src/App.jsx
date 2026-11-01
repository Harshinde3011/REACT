
import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  // 1. useState: Stores data that can change over time.
  // When state changes, React re-renders the component.

  // Stores the password length. Initially, it is 8.
  const [length, setLength] = useState(8)

  // Controls whether numbers are included in the password.
  const [numberAllowed, setNumberAllowed] = useState(false)

  // Controls whether special characters are included.
  const [charAllowed, setCharAllowed] = useState(false)

  // Stores the generated password.
  const [password, setPassword] = useState('')


  // 2. useCallback: Caches a function reference between renders.
  // React reuses this function while its dependencies remain unchanged.
  // The function generates a password based on the current settings.

  const passwordGenerator = useCallback(() => {

    // A local variable to build the password.
    let pass = ''

    // Characters available by default.
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    // Add numbers only when the Numbers checkbox is enabled.
    if (numberAllowed) {
      str += '0123456789'
    }

    // Add special characters only when Characters is enabled.
    if (charAllowed) {
      str += '!@#$%^&*()-_=+[]{}|;:",./?'
    }

    // Generate one random character for each position.
    // The loop runs according to the selected password length.
    for (let i = 1; i <= length; i++) {

      // Math.random() gives a random decimal between 0 and 1.
      // Math.floor() converts the result into an integer index.
      const char = Math.floor(Math.random() * str.length)

      // Get the character at that index and add it to the password.
      pass += str.charAt(char)
    }

    // Update password state.
    // React re-renders the component with the new password.
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  // Dependency array:
  // React creates a new version of passwordGenerator when
  // length, numberAllowed, or charAllowed changes.
  // setPassword is stable, so including it is optional.


  // 3. useEffect: Runs side effects after React renders.
  // Here, we generate a new password whenever the settings change.

  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator])

  // Because passwordGenerator depends on length, numberAllowed,
  // and charAllowed, this effect runs when those settings change.
  // Including passwordGenerator in the dependency array keeps
  // the effect synchronized with the latest function.


  // 4. useRef: Keeps a reference to a DOM element.
  // Unlike state, updating a ref does not trigger a re-render.
  // We use it to access the password input directly.

  const passwordRef = useRef(null)


  // 5. useCallback: Caches the copy function reference.
  // It uses the latest password because password is a dependency.

  const copyPasswordToClipBorad = useCallback(() => {

    // Access the input element through the ref.
    // ?. prevents an error if the input element is unavailable.
    passwordRef.current?.select()

    // Copy the current password to the clipboard.
    // Clipboard access generally requires HTTPS or localhost.
    if (password) {
      window.navigator.clipboard.writeText(password)
    }

  }, [password])


  return (
    <>
      {/* Main container for the password generator */}
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-500'>

        <h1 className='text-white text-center text-4xl font-bold'>
          Password generator
        </h1>

        {/* Password input and Copy button */}
        <div className='flex rounded-lg overflow-hidden mb-4 bg-amber-50'>

          <input
            type='text'

            // Controlled input:
            // React state determines what appears inside the input.
            value={password}

            placeholder='password'
            className='outline-none w-full py-1 px-3'

            // Users cannot manually edit the generated password.
            readOnly

            // Connect this input to passwordRef.
            ref={passwordRef}
          />

          {/* Clicking this button calls the copy function. */}
          <button
            onClick={copyPasswordToClipBorad}
            className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'
          >
            Copy
          </button>
        </div>

        {/* Controls for password length and character options */}
        <div className='flex text-sm gap-x-2'>

          {/* Password length slider */}
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={6}
              max={100}

              // Controlled input: its value comes from React state.
              value={length}
              className='cursor-pointer'

              // onChange receives the event when the slider moves.
              // Convert the input value from a string to a number.
              onChange={(e) => setLength(Number(e.target.value))}
            />

            <label className='text-white'>
              Length: {length}
            </label>
          </div>

          {/* Numbers checkbox */}
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'

              // checked makes this a controlled checkbox.
              checked={numberAllowed}
              id='numberInput'

              // Functional state update toggles true/false.
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />

            <label htmlFor='numberInput' className='text-white'>
              Numbers
            </label>
          </div>

          {/* Special characters checkbox */}
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              checked={charAllowed}
              id='charInput'

              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />

            <label htmlFor='charInput' className='text-white'>
              Characters
            </label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
