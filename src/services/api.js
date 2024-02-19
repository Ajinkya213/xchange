import axios from "axios"

// To get all the currency 
async function getListQuotes(){
    try{
        const response = await axios.get('https://currency-exchange.p.rapidapi.com/listquotes', {
            headers: {
                'X-RapidAPI-Key': 'efd2070d92mshbf90c46c731d596p172b9ajsn56d779f7ed7e',
                'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
            }
        })
        return response.data
    }catch(error){
        console.error('Error in (GET) getListQuotes:', error);
        throw error
    }
}

// To get all the exchange rate
async function getExchange(currencyFrom, currencyTo, quantity){
    try{
        const response = await axios.get('https://currency-exchange.p.rapidapi.com/exchange', {
            headers: {
                'X-RapidAPI-Key': 'efd2070d92mshbf90c46c731d596p172b9ajsn56d779f7ed7e',
                'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
            },
            params:{
                from: currencyFrom,
                to: currencyTo,
                q: quantity
            }
        })
        //console.log(response)
        return response.data
    }catch(error){
        console.error('Error in (GET) getExchange:', error);
        throw error
    }
}

const api = {
    getListQuotes,
    getExchange
  };

  export default api
