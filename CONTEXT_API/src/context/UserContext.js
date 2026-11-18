import React from "react";

// createContext creates the shared "box" used by the Context API.
// Components can read from this context with useContext(UserContext).
// The empty call here is fine because UserContextProvider gives real values.
// The values can be found below inside UserContext.Provider.
const UserContext = React.createContext();

export default UserContext;