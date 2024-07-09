import React from "react";

function Button({ addClasses, type, children }) {
  return (
    <button type={type || "button"} className={`btn ${addClasses}`}>
      {children}
    </button>
  );
}

export default Button;
