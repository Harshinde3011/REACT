import { createContext, useContext } from "react";

// This context holds the current theme and the functions that change it.
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

// Wrap components in this provider to give them access to the theme values.
export const ThemeProvider = ThemeContext.Provider 

export default function useTheme() {
    // Read the shared theme values from the nearest provider.
    return useContext(ThemeContext);
}
