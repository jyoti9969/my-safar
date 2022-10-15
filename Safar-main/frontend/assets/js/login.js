const signUpButton = document.getElementById('signUp');
const signUpButton2 = document.getElementById('signUp2');
const signInButton = document.getElementById('signIn');
const signInButton2 = document.getElementById('signIn2');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signUpButton2.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

signInButton2.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});