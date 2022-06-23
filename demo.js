// API ENDPOINT
const endpoint = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

console.log(endpoint);

const quoteButton = document.querySelector("#js-new-quote");
quoteButton.addEventListener("click",getQuote);
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

//document.querySelector("button");
//document.querySelector(".new-quote button");
//document.querySelector("#js-new-quote");

async function getQuote(){
  console.log("HI");
  try {
    const response = await fetch(endpoint); //access endpoint
    if(!response.ok){
      throw Error(response.statusText);
    }
    const json = await response.json();
    //console.log(json.drinks);
    displayQuote(json.drinks[0].strDrink);
  //  console.log(response); //throw the error to the console
  } catch(err){
    console.log(err);
    alert('failed');
  }
}

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function displayQuote(quote){
  const quoteText = document.querySelector("#js-quote-text")
  quoteText.textContent = quote;
}
function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
