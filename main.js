const logIn = document.getElementById("log-in");
const screenOne = document.getElementById('screen-1')
const categories = document.getElementById("categories");
const categoryHogar = document.getElementById("hi");
const hogar = document.getElementById('hogar');
categoryHogar.addEventListener('click', () => {
  hogar.classList.remove('hide')
  categories.classList.add('hide')
})
console.log(logIn)
logIn.addEventListener('click', () => {
  categories.classList.remove('hide')
  screenOne.style.display='none'
})