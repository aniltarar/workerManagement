import React from "react";

function Card({ children, addClasses }) {
  return (
    <div
      className={`wrapper d-flex flex-column border  rounded mt-5 p-3 justify-content-center align-items-center gap-3 shadow ${addClasses} `}
    >
      {children}
    </div>
  );
}

export default Card;
