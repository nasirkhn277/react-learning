import {useEffect, useState} from "react";

const useCurrencyData = (currency) => {
    const [data, setData] = useState({});

useEffect(() => {
fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/"+{currency}+".json")
.then((res) => res.json())
.then((res) => setData(res[currency]));
console.log(res)
}, [currency])
return data;

}

export default useCurrencyData;

