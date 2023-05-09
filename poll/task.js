'use strict';

const title = document.getElementById('poll__title');
const answersList = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.addEventListener('readystatechange', show);
xhr.send();

function show(event) {

	if (xhr.readyState === 4 && xhr.status === 200) {

		const data = JSON.parse(xhr.responseText).data;
		title.innerText = data.title;

		for (const answer of data.answers) {

			const btn = `<button class="poll__answer">${answer}</button>`;

			answersList.insertAdjacentHTML('beforeend', btn);
		}

		const answerBtns = document.querySelectorAll('.poll__answer');

		for (const answerBtn of answerBtns) {
			answerBtn.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'));
		}
	}
}