

import React, { useState, useEffect } from 'react';

import Navbar from './Navbar';
import SelectOptions from './SelectOptions';
import InputValue from './InputValue';
import ConversionResult from './ConversionResult';

import api from '../services/api';

function List() {
    const [conversionData, setConversionData] = useState(0.0);
    const [value, setValue] = useState('');
    const [final, setFinal] = useState('');
    const [optionsFrom, setOptionsFrom] = useState([]);
    const [optionsTo, setOptionsTo] = useState([]);
    const [selectFrom, setSelectFrom] = useState('');
    const [selectTo, setSelectTo] = useState('');
  
  

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await api.getListQuotes();
          setOptionsFrom(data);
          setOptionsTo(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    const handleSelectFrom = (e) => {
      setSelectFrom(e.target.value);
    };
  
    const handleSelectTo = (e) => {
      setSelectTo(e.target.value);
    };
  
    const handleInputChange = (e) => {
      const inputValue = e.target.value;
      console.log(inputValue)
      setValue(inputValue);
      dataf(inputValue);
    };
  
    const swapOptions = () => {
      const tempFrom = selectTo;
      const tempTo = selectFrom;
      setSelectFrom(tempFrom);
      setSelectTo(tempTo);
      dataf(value);
    };
  
    const dataf = async (inputValue) => {
      try {
        const conversionData = await api.getExchange(selectFrom, selectTo, inputValue);
        setConversionData(conversionData)
        setFinal(parseFloat(inputValue) * parseFloat(conversionData));
  
      } catch (error) {
        console.error(error);
        setFinal('Error fetching conversion data');
      }
    };
  
    return (
      <div >
        <Navbar/>

        <div className='container-values'>
        <InputValue
          placeholder='Enter Ammount'
          onChange={handleInputChange}
          value={value}
        />
        <SelectOptions
          options={optionsFrom}
          value={selectFrom}
          onChange={handleSelectFrom}
          label="From"
        />

<button className="button-swap" onClick={swapOptions}></button>

        <SelectOptions
          options={optionsTo}
          value={selectTo}
          onChange={handleSelectTo}
          label="To"
        />
  
        
  
        </div>
  
        <ConversionResult
          value={value}
          final={final}
          optionFrom={selectFrom}
          optionTo={selectTo}
          conversionData= {conversionData}
          input={value}
        />
      </div>
    );
  }
  

export default List;

