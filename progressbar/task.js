'use strict';

const progress = document.getElementById('progress');

form.addEventListener('submit', check);

function check(event) {

    event.preventDefault();

    const form = document.getElementById('form');
    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.upload.onprogress = function (event) {

        progress.value = event.loaded / event.total;
    }

    xhr.upload.onload = function () {
        alert("Данные полностью загружены на сервер!");
    }

    xhr.send(formData);
}