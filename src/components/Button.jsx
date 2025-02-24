import React from "react";

export default function Button({ onClick, children }) {
    return (
        <button
            onClick={onClick}
            type="button"
            className="addbtn"
            // data-bs-toggle="modal"
            // data-bs-target="#exampleModal"
        >
            {children}
        </button>
    );
}
