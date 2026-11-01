// Toggle is a mechanism for switching a UI element between two states, such as true and false. In React, we commonly implement it using the useState hook. For example, to show or hide a message, we maintain a boolean state and reverse its value when the user clicks a button. React then re-renders the component to reflect the updated state.

import { useState } from "react";

function ToggelComponent() {
    const [display, setDisplay] = useState(false);

    return (
        <div>
            <h2> Toggle in React </h2>
            { display ? <h3> toggle working </h3> : null }

            <button>display</button>
        </div>
    )
}

export default ToggelComponent;