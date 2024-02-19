import React from "react";


export default function SelectOptions({ options, value, onChange, label }) {
  //<p>Selected Option: {value}</p>  
  
  return (
      <div >
        <p className="label">{label}</p>
        <select className="selected" value={value} onChange={onChange}>
          <option value="">Select an option</option>
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
        
      </div>
    );
  }
  