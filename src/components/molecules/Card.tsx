import React from "react";
import Button from "../atoms/Button";
import "./Card.css";

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="card">
      <h3>Card Title</h3>
      <p>Some card content</p>
      {children}
      <Button label="Click Me" onClick={() => alert("Button Clicked!")} />
    </div>
  );
};

export default Card;
