
let burgerBtn = document.querySelector('.burgerBtn');
let closeBtn = document.querySelector('.burger-close');
let burgerMenu = document.querySelector('.overlay');

burgerBtn.onclick = function() {
	burgerMenu.style.display = 'flex';
}
closeBtn.onclick = function() {
	burgerMenu.style.display = 'none';
}