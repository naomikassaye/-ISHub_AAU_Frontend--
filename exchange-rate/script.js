const curreny_one = document.getElementById("currency-one");
const curreny_two = document.getElementById("currency-two");
const amount_one = document.getElementById("amount-one");
const amount_two = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

//API link  https://open.exchangerate-api.com/v6/latest

//to fetch the exchange rate from the API and to calculate the amount that is converted
function calculate(){
  const curr1=curreny_one.value;
  const curr2=curreny_two.value;

  fetch(`https://open.exchangerate-api.com/v6/latest/${curr1}`)
  .then(res => res.json())
  .then(data =>{
    const rate=data.rates[curr2];
    rateEl.innerText=`1 ${curr1} = ${rate} ${curr2}`;
    amount_two.value=(amount_one.value * rate).toFixed(2);

  })
  .catch(err=>{
    rateEl.innerText="Error fetching exchange rate";
    console.error("Error:", err);
  });
    
}

//event listeners for input
curreny_one.addEventListener('change', calculate);
curreny_two.addEventListener('change', calculate);
amount_one.addEventListener('input', calculate);
amount_two.addEventListener('input', calculate);
calculate(); 

//to swap currencies and thus recalculate the value
swap.addEventListener('click', () =>{
  const temp = curreny_one.value;
  curreny_one.value = curreny_two.value;
  curreny_two.value = temp;
  calculate();
})
