'use strict';

let loader = document.getElementById('loader');
let items = document.getElementById('items');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

loader.classList.add('loader_active');

xhr.onload = function () {
	loader.classList.remove('loader_active');
	loader.classList.add('loader_inactive');

	let response = JSON.parse(xhr.response);
	let valute = response.response.Valute;

	for (let key in valute) {
		let item = document.createElement('div');
		item.className = 'item';

		let itemCode = document.createElement('div');
		itemCode.className = 'item__code';
		itemCode.innerText = valute[key].CharCode;
		item.appendChild(itemCode);

		let itemValue = document.createElement('div');
		itemValue.className = 'item__value';
		itemValue.innerText = valute[key].Value;
		item.appendChild(itemValue);

		let itemCurrency = document.createElement('div');
		itemCurrency.className = 'item__currency';
		itemCurrency.innerText = 'руб.';
		item.appendChild(itemCurrency);

		items.appendChild(item);
	}
};
