"use strict";

const progress = document.getElementById("progress"),
    form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    const formData = new FormData(form);
    let xhr = new XMLHttpRequest();

    xhr.upload.addEventListener("progress", (e) => {
        progress.value = e.loaded / e.total;
    });

    xhr.upload.addEventListener("load", (e) => {
        alert("Файл загружен");
    });

    xhr.upload.addEventListener("error", (e) => {
        alert("Ошибка при загрузке");
    });

    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.send(formData);

    e.preventDefault();
});