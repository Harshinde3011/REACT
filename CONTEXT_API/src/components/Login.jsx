import { useContext, useState } from "react";
import UserContext from "../context/UserContext";


function Login() {
    // These are local form states: they remember what the user types.
    // The component re-renders whenever one of these values changes.
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // useContext reads values from the nearest UserContext.Provider.
    // Here we only need setUser, so we read that one property.
    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        // Prevents the browser from refreshing the page after form submission.
        e.preventDefault();
        console.log("Login: submit button clicked.");
        console.log("Login: saving username in shared Context.", { username });

        // This updates the Provider's user state.
        // Profile will automatically receive the new value through Context.
        setUser({ username });
    }

    return (
        <div>
            <h2>Login</h2>

            {/* Controlled input: React state is the source of the displayed value. */}
            <input type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username" />
            {" "}
            {/* Password is currently collected by the UI but is not stored
                in shared Context. Never add real passwords to a normal log. */}
            <input type="text" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password" />
            
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;