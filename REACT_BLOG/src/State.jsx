// suppose if declare one variable and store one value in it lets suppose a = 10, and onClick event u want to change it from 10 to 20 value of that var will definatly change but it wont be redenr on UI, to reder it we use states

// using variable 

// let currentReactVer = "18.0.0";

// function updateReactVer(newVersion) {
//     currentReactVer = newVersion
//     console.log("currentReactVer value after update: ", currentReactVer);
// }


// function LearState() {
//     return (
//         <div>
//             <h3>Calling state component</h3>
//             <h2>Current version: {currentReactVer}</h2>
//             <button onClick={() => updateReactVer("19.0.0")}>Change version</button>
//         </div>
//     )
// }

// export default LearState

import { useState } from "react";

function LearState() {

    const [currentReactVer, setReactVer] = useState("18.0.0");
    const [rCounter, setRCounter] = useState(20);

    function handleVersion(newVersion) {
        setReactVer(newVersion)
        console.log("currentReactVer value after update: ", currentReactVer);
    }
    return (
        <div>
            <h3>Calling state component</h3>
            <h2>Current version: {currentReactVer}</h2>
            <button onClick={() => handleVersion("19.0.0")}>Change version</button>

            <h3>rCounter: {rCounter}</h3>
            <button onClick={() => setRCounter(rCounter - 1)}>update R counter</button>
        </div>
    )
}

export default LearState