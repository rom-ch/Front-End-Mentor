const question = document.querySelector('#question');
const result = document.querySelector('#results');
const star = document.querySelector('#star');
const numbers = document.querySelectorAll('.number');
const submit = document.querySelector('.btn');

submit.addEventListener('click', submitRate);

function submitRate() {
	question.style.display = 'none';
	result.style.display = 'block';
}

numbers.forEach(e => {
	e.addEventListener('click', e => {
		star.textContent = e.target.textContent;
	});
});
