var gallery = document.getElementById("gallery");

var show = document.getElementById("show");

for (var i = 1; i <= 9; i++) {
    var li = document.createElement("li");
    var img = document.createElement("img");
    img.src = "images/" + i + ".jpg";

    li.appendChild(img);
    gallery.appendChild(li);
}


gallery.addEventListener("mousemove", function(e) {
    if ( e.target.nodeName == 'IMG' ) {
        var currentImage = null;

        if(currentImage != e.target.attributes.src.nodeValue){
            show.innerText = "";

            var image = document.createElement('img');
            currentImage = image.src = e.target.attributes.src.nodeValue;

            show.appendChild(image);
        }

        show.style.display = "block";
        show.style.top = e.y + 10 + "px";
        show.style.left = e.x + 10 + "px";
    }

    e.target.addEventListener("mouseout", function (j) {
        show.style.display = "none"
    }, false);

}, false);


/**
 * 1. Игра парные карты http://igroflot.ru/logic/flash_game_2470/
 * 2. Если картинка снизу экрана выводить ее над курсором
 */



