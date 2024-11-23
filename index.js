const span = document.querySelector("span");

const btn = document.querySelector(".header__browse--btn");

btn.addEventListener('click', function () {
    span.classList.add("arrow__right--click")
})