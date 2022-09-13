const lunch = document.querySelector('#lunch-menu');
const breakfast = document.querySelector('#breakfast-menu');
const dinner = document.querySelector('#dinner-menu');
const appetizer = document.querySelector('#appetizer-menu');

function appetizerMenu() {
  if ((appetizer.style.display = 'none')) {
    appetizer.style.display = 'block';
    lunch.style.display = 'none';
    dinner.style.display = 'none';
    breakfast.style.display = 'none';
  }
}
function breakfastMenu() {
  if ((breakfast.style.display = 'none')) {
    breakfast.style.display = 'block';
    appetizer.style.display = 'none';
    lunch.style.display = 'none';
    dinner.style.display = 'none';
  }
}
function lunchMenu() {
  if ((lunch.style.display = 'none')) {
    lunch.style.display = 'block';
    appetizer.style.display = 'none';
    dinner.style.display = 'none';
    breakfast.style.display = 'none';
  }
}
function dinnerMenu() {
  if ((dinner.style.display = 'none')) {
    dinner.style.display = 'block';
    appetizer.style.display = 'none';
    lunch.style.display = 'none';
    breakfast.style.display = 'none';
  }
}
/* function myFunction(x) {
  x.classList.toggle('change');
} */
const mainpage = document.getElementById('main');

function find() {
  mainpage.style.display = 'none';
}
function main() {
  mainpage.style.display = 'block';
  dinner.style.display = 'block';
  appetizer.style.display = 'block';
  lunch.style.display = 'block';
  breakfast.style.display = 'block';
}
