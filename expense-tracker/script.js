const balance = document.getElementById('balance');
const incomes = document.getElementById('money-plus');
const expens = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

//Transaction from the local storage
const localStorageTransactions = JSON.parse(
  localStorage.getItem('transactions')
);

let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

function generateId() {
  return Math.floor(Math.random() * 1000000000);

}

//to handle adding a new transaction
function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === '' || amount.value.trim() === '') {
    alert('!!Enter both a text and amount');
  } else {
    const transaction = {
      id: generateId(),
      text: text.value,
      amount: +amount.value

    };

    transactions.push(transaction);
    addTransactionDOM(transaction);
    updatevalues();
    updateLocalStorage();

    text.value = '';
    amount.value = '';
  }

}

//to add transaction item to the DOM
function addTransactionDOM(transaction) {

  const sign = transaction.amount < 0 ? '-' : '+';
  const item = document.createElement('li');

  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

  item.innerHTML = `
  ${transaction.text} <span>${sign}$${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
  `;

  list.appendChild(item);

}

//to update transactions 
function updatevalues() {
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0)
      .reduce((acc, item) => acc + item, 0) * -1
  ).toFixed(2);

  balance.innerText = `$${total}`;
  incomes.innerText = `+$${income}`;
  expens.innerText = `-$${expense}`;
}

//to save transactions to the local storage
function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));

}

//to remove transaction using id
function removeTransaction(id) {
  transactions = transactions.filter(transaction => transaction.id !== id);
  updateLocalStorage();
  init();

}
//to populate the DOM 
function init() {
  list.innerHTML = '';
  transactions.forEach(addTransactionDOM);
  updatevalues();

}
//event listener to the submit button
form.addEventListener('submit', addTransaction);
