document.addEventListener('DOMContentLoaded', function(){
    const amount = document.getElementById('amount')
    const oldCurrency = document.getElementById('oldCurrency')
    const newCurrency = document.getElementById('newCurrency')
    const convert = document.getElementById('convert')
    const result = document.getElementById('result')

    // INSERT YOUR API KEY FROM API NINJAS HERE (Can be found here https://api-ninjas.com/profile)
    const API_KEY="YOUR_API_KEY!"
    const apiUrl="https://api.api-ninjas.com/v1/convertcurrency?have="

    convert.addEventListener('click', () => {
        const amountTotal = amount.value;
        const oldCurrencyTotal = oldCurrency.value;
        const newCurrencyTotal = newCurrency.value;
        console.log("Old ", oldCurrencyTotal);
        const url = apiUrl + oldCurrencyTotal + "&want=" + newCurrencyTotal + "&amount=" + amountTotal;
        console.log("URL", url)

        fetch(url, {
            headers: {
                'X-API-KEY': API_KEY
            }
        })
        .then(response=> response.json())
        .then(data =>{
            const resultPrice =  data.new_amount;
            result.innerHTML = `${amountTotal} ${oldCurrencyTotal} = ${resultPrice.toFixed(2)} ${newCurrencyTotal}`;
        })
        .catch(error =>{
            console.error('Request Failed;', error);
            result.innerHTML = 'An error occured please try again later.'
        })
    })
})
