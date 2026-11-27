import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
    // useState creates a local variable for this component.
    // "todo" is the current text typed by the user.
    // "setTodo" updates todo and re-renders the component with the new value.
    // The empty string "" is the starting (initial) value.
    const [todo, setTodo] = useState("");

    // useTodo gets shared todo functions and data from the TodoContext.
    // addTodo is the function used to add a new todo to the shared todo list.
    const {addTodo} = useTodo();

    const add = (e) => {
        // Prevent the form from refreshing the page when it is submitted.
        e.preventDefault()

        // Do not add an empty todo.
        if (!todo) return;

        // Call addTodo from context and start the new todo as not completed.
        addTodo({ todo, completed: false })

        // Clear todo after it is added, ready for the next new entry.
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;