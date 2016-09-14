var h1 = document.getElementById("h1");

h1.onclick = function(e) {
    if(h1.innerText == "Click test")
        h1.innerText = "Head 1"
    else
        h1.innerText = "Click test"
};

h1.onmousemove = function (e) {
    console.log(e);

    h1.style.color = "red";
};

h1.onmouseout = function () {
    h1.style.color = "green";
};


/**
 * DZ теория
 * 1. CSS http://htmlbook.ru/css or http://www.ex.ua/18663846 !
 * 2. https://learn.javascript.ru/document !
 *
 * DZ практика
 * 1. С помощью js менять стили элементов на странице. У каждого элемента
 * должно быть какое то уникалоное свойство
 * 2. Игра парные карты http://igroflot.ru/logic/flash_game_2470/
 * 3. Если картинка снизу экрана выводить ее над курсором
 */


