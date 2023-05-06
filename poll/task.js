"use strict";

const pollTitle = document.getElementById("poll__title"),
	pollAnswers = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://test-back-ir02.onrender.com/poll");
xhr.send();
xhr.addEventListener("readystatechange", () => {
	if (xhr.readyState == xhr.DONE) {
		const parse = JSON.parse(xhr.responseText);
		poll__title.insertAdjacentHTML("afterbegin", `${parse.data.title}`);
		for (let i = 0; i < parse.data.answers.length; i++) {
			poll__answers.insertAdjacentHTML("beforeend", `<button class="poll__answer">${parse.data.answers[i]}</button>`);
			document.getElementsByClassName("poll__answer")[document.getElementsByClassName("poll__answer").length - 1].addEventListener("click", () => {
				alert("Спасибо, ваш голос засчитан!");

				let xhr_second = new XMLHttpRequest();
				xhr_second.open("POST", "https://test-back-ir02.onrender.com/poll");
				xhr_second.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				xhr_second.send(`vote=${parse.id}&answer=${i}`);
				xhr_second.addEventListener("readystatechange", () => {
					if (xhr_second.readyState == xhr_second.DONE) {
						const parse_second = JSON.parse(xhr_second.responseText);
						while (document.getElementsByClassName("poll__answer").length) {
							document.getElementsByClassName("poll__answer")[0].remove();
						}

						for (let j = 0; j < parse_second.stat.length; j++) {
							poll__answers.insertAdjacentHTML("beforeend", `<div>${parse_second.stat[j].answer}: ${parse_second.stat[j].votes}</div>`);
						}
					}
				});
			});
		}
	}
});