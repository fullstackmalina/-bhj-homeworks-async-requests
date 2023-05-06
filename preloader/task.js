"use strict";
const table = document.getElementById("items"),
	loader = document.getElementById("loader");

// есть ли кэшированные значения
if (localStorage.hasOwnProperty("curBase")) {
	showTable(localStorage.getItem("curBase"));
}

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/");
xhr.send();
xhr.addEventListener("readystatechange", () => {
	if (xhr.readyState === xhr.DONE && xhr.status == 200) {

		table.innerHTML = ""; // очищаем кэшированные значения
		showTable(xhr.responseText);

		localStorage.setItem("curBase", xhr.responseText); // сохраняем значения в localStorage

		loader.classList.remove("loader_active"); // убираем прелоадер
	}
});

// отрисовка таблицы с валютами
function showTable(base) {
	const curBase = JSON.parse(base).response.Valute;
	for (let item in curBase) {
		table.innerHTML += `<div class="item">
            <div class="item__code">${curBase[item].CharCode}</div>
            <div class="item__value">${curBase[item].Value}</div>
            <div class="item__currency">руб.</div>
        </div>`;
	}
}