// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
    return (
        <button onFocus={function() {
            console.log("Good!");
        }} onBlur={function() {
            console.log("Hey! Eyes on me!")
        }}>
            Eyes on me
        </button>
    )
}

export default EyesOnMe