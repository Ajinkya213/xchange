import React from "react";

export default function InputValue({ value, onChange, placeholder }) {
  //<p>Input Value: {value}</p> 
  
  return (
      <div >
        <p className="label">Amount</p>
        <input
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className="container-input-text"
        />
        
      </div>
    );
  }
  