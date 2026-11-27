import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([]) // here todos is an array

  // name must be same as values from provider
  const addTodo = (todo) => {
    // setTodos(todo)  // Here, you are directly replacing the existing state with todo.
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]) // Functional state update, prev represents the previous state.
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id) ? todo : prevTodo ));
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

// localStorage is a browser feature that allows us to store data in the user's browser.
//   Normally, if you refresh the browser, React's state gets initialized again, and your todos may disappear.
//   But if you save them in localStorage, they remain available even after:
// - Refreshing the page.
// - Closing and reopening the browser.
// - Navigating away and returning to the application.


// 1. Load todos from localStorage when component mounts
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")); // This retrieves the value stored under the key "todos", Because localStorage stores values as strings. JSON.parse() converts a JSON string into a JavaScript value.

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

// 2. Save todos whenever the todos state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* 
              todos.map() loops through each todo object in the todos array.
              One TodoItem component is created for every todo.

              // key={todo.id} gives each list item a unique and stable React identity.
              // React uses it to track updates, additions, and deletions efficiently.

              //todo={todo} passes the current todo object to TodoItem for display or editing.
            */}
            {todos.map((todo) => (
              <div key={todo.id}
                className='w-full'
              >
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}


// Method	Purpose
// localStorage.setItem()	Save data
// localStorage.getItem()	Retrieve data
// localStorage.removeItem()	Remove a particular key
// localStorage.clear()	Remove all localStorage data

export default App
