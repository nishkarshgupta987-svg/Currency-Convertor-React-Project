//this is a custom hook that is made to convert the API(which contains the data about the currencies like->usd to inr) data(stringt)into json format ,
//then extract the currency from this json data , and return this data
import { useEffect, useState } from "react";

function useCurrency(currency) {
   const [data, setdata] = useState({});

   useEffect(() => {
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
         .then((res) => res.json())// convert the API data(string format) into the json format
         .then((res) => setdata(res[currency]))//extract the currency from the API data
   }, [currency])//dependency currency means whenever the currency change , then run this effect

   return data
}
export default useCurrency;
