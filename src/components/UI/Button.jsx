import React from "react";

function Button({ addClasses,onClick, type, children }) {
  return (
    <button onClick={onClick} type={type || "button"} className={`btn ${addClasses}`}>
      {children}
    </button>
  );
}

export default Button;
