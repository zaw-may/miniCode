document.querySelector("#btn-convert").onclick = ( () => {

    let amount = parseFloat(document.querySelector("#amt").value);

    if (isNaN(amount)) {
        document.querySelector("#result").style.display = "block";
        document.querySelector("#currency").style.display = "none";
        document.querySelector("#total").textContent = "Invalid Amount.";
        document.querySelector("#unit").textContent = "";
    } else {

    let currency1 = document.querySelector("#ex-rate1").value;
    let currency2 = document.querySelector("#ex-rate2").value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency1}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currency2];
            let result = (amount * rate).toFixed(2)

            document.querySelector("#result").style.display = "block";
            document.querySelector("#currency").style.display = "inline";
            document.querySelector("#total").textContent = result;
            document.querySelector("#unit").textContent = currency2;     
            console.log("Result Amount", rate, result);     
        })
        .catch(error => {
            console.error("Error fetching exchange rates: ", error);
            document.querySelector("#total").textContent = "Please try again!";
            document.querySelector("#unit").textContent = "";
        });
    }  
});