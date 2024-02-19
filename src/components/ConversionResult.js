import React from "react";

export default function ConversionResult({ value, final, optionFrom, optionTo, conversionData, input}) {
    return (<div className="container-result">
      <div>
      <h4>{input} {optionFrom} = </h4>
      <h2>{value.length === 0 ? '0' : final+" "+optionTo }</h2> 
      </div>
      <div>
         <h5>Current Exchange Rate <br/> 1 {optionFrom} = {conversionData.toString()} {optionTo}</h5> 
      </div>
      </div>);
  }
  