import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    // children means the components placed inside <UserContextProvider>.
    // In this app, Login and Profile are passed as children.
    // The Provider wraps them so they can read the shared context values.

    // Here, user stores the current user (starting as null), while
    // setUser is the function React provides to update that user.
    // This state belongs to the Provider, so every child can use it.
    const [user, setUser] = React.useState(null);

    // useEffect runs after React renders.
    // It runs again whenever "user" changes, which helps us see the update.
    React.useEffect(() => {
        if (user === null) {
            console.log("UserContext: no user has logged in yet.");
        } else {
            console.log("UserContext: the shared user changed.", user);
        }
    }, [user]);

    return (
        // value is the data shared with all components inside this Provider.
        // A Login component can call setUser, and a Profile component can read user.
        // When setUser changes user, React re-renders the Provider and its children.
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;