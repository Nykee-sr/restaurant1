const lunch = document.querySelector('#lunch-menu');
const breakfast = document.querySelector('#breakfast-menu');
const dinner = document.querySelector('#dinner-menu');
const appetizer = document.querySelector('#appetizer-menu');

/* function appetizerMenu() {
  if ((appetizer.style.display = 'none')) {
    appetizer.style.display = 'block';
    seeMenu.style.display = 'block';
    lunch.style.display = 'none';
    dinner.style.display = 'none';
    breakfast.style.display = 'none';
  }
} */
function appetizerMenu() {
  appetizer.style.display = 'block';
  lunch.style.display = 'none';
  dinner.style.display = 'none';
  breakfast.style.display = 'none';
}

function breakfastMenu() {
  breakfast.style.display = 'block';
  appetizer.style.display = 'none';
  lunch.style.display = 'none';
  dinner.style.display = 'none';
}

function lunchMenu() {
  lunch.style.display = 'block';
  appetizer.style.display = 'none';
  dinner.style.display = 'none';
  breakfast.style.display = 'none';
}
function dinnerMenu() {
  dinner.style.display = 'block';
  appetizer.style.display = 'none';
  lunch.style.display = 'none';
  breakfast.style.display = 'none';
}

const mainpage = document.getElementById('main');

function main() {
  mainpage.style.display = 'block';
  dinner.style.display = 'block';
  appetizer.style.display = 'block';
  lunch.style.display = 'block';
  breakfast.style.display = 'block';
}
