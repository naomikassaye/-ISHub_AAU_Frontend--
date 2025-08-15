const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const addCardBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear');
const addContainer = document.getElementById('add-container');

let activeCard=0;
let cardList=[];
let storedCards=JSON.parse(localStorage.getItem("cards"))|| [];

//to create a card 
function showCards(){
    storedCards.forEach((cardData, i)=>{
        buildCard(cardData,i)
    });
}

//to create an individual card DOM elements and add it to the page
function buildCard(cardData,idx){
    let div=document.createElement('div');
    div.classList.add('card');
    if(idx===0){
        div.classList.add('active');
    }

      div.innerHTML = `
    <div class="inner-card">
      <div class="inner-card-front">
        <p>${cardData.question}</p>
      </div>
      <div class="inner-card-back">
        <p>${cardData.answer}</p>
      </div>
    </div>
  `;

  div.addEventListener('click', () => {
    div.classList.toggle('show-answer');
  });

  cardList.push(div);
  cardsContainer.appendChild(div);
  updateCounter();

}

//to show the cirrent card number out of the total cards
function updateCounter(){
    currentEl.innerText=(activeCard + 1) + '/'+ cardList.length;
}

//to save cards to the localstorage and to reload the page
function saveCards(){
    localStorage.setItem("cards", JSON.stringify(storedCards));
    location.reload();
}

//event listener to move to the next card in the list
nextBtn.addEventListener('click', function(){
    cardList[activeCard].className='card left';
    activeCard++;
     if(activeCard > cardList.length - 1){
        activeCard = 0;
    }
    cardList[activeCard].className = 'card active';
    updateCounter();

});

//event listener to move the previous card in the list
prevBtn.addEventListener('click', function(){
    cardList[activeCard].className = 'card right';
    activeCard--;
    if(activeCard < 0){
        activeCard = cardList.length - 1;
    }
    cardList[activeCard].className = 'card active';
    updateCounter();
});

//to display the add card button
showBtn.addEventListener('click', function(){
    addContainer.classList.add('show');
});

// hides the add card form
hideBtn.addEventListener('click', function(){
    addContainer.classList.remove('show');
});

// add new card,saves it and hides the form for adding
addCardBtn.addEventListener('click', function(){
    let q = questionEl.value.trim();
    let a = answerEl.value.trim();

    if(q && a){
        let newCard = { question: q, answer: a };
        buildCard(newCard);
        storedCards.push(newCard);
        saveCards();
        questionEl.value = '';
        answerEl.value = '';
        addContainer.classList.remove('show');
    }
});

// clear all previous cards from local storage and page as well
clearBtn.addEventListener('click', function(){
    localStorage.clear();
    cardsContainer.innerHTML = '';
    location.reload();
});


showCards();