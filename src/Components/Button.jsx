import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline", "btn--round"];
const SIZES = ["btn--medium", "btn--large", "btn--small"];

export const Button = ({ children, type, onClick, btnStyle, btnSize }) => {
  const checkbtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];
  const checkbtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];

  return (
    <button
      className={`btn ${checkbtnStyle} ${checkbtnSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
