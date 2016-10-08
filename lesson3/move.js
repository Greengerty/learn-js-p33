var kv = document.getElementById("kv");
var block = document.getElementById("block");

    function createKvadr() {
    var kvadr = document.createElement("div");
    kvadr.className = "kv";

    kvadr.style.top = (Math.random() * (590 - 0) + 0) + "px";
    kvadr.style.left = (Math.random() * (590 - 0) + 0) + "px";

    block.appendChild(kvadr);
};
createKvadr();

document.addEventListener("keydown", function(e){

    // top 38
    if (e.keyCode == 38) {
        if(kv.offsetTop <= 0) {
            return;
        }
        kv.style.top = kv.offsetTop - 10 + "px";
    }


    // right 39
    if (e.keyCode == 39) {
        if(kv.offsetLeft >= 540) {
            return;
        }
        kv.style.left = kv.offsetLeft + 10 + "px";
    }


    // down 40
    if (e.keyCode == 40) {
        if(kv.offsetTop >= 540) {
            return;
        }
        kv.style.top = kv.offsetTop + 10 + "px";
    }

    // left 37
    if (e.keyCode == 37) {
        if(kv.offsetLeft <= 0) {
            return;
        }
        kv.style.left = kv.offsetLeft - 10 + "px";
    }

    getKvadr();

});

    var getKvadr = function() {
        var kvadr = document.querySelector(".kv");
        console.dir(kv);
        if ((kvadr.offsetTop >= kv.offsetTop && kvadr.offsetTop + 10 <= kv.offsetTop + 60)
            && (kvadr.offsetLeft >= kv.offsetLeft && kvadr.offsetLeft + 10 <= kv.offsetLeft + 60))
        {
            kvadr.remove();
            createKvadr();
        }
    }

console.dir(kv);
//var i = 0;
//var timeIn = 1000;
//
//function time() {
//    setTimeout(function() {
//        kv.style.top = kv.offsetTop + 1 + "px";
//        if(i != timeIn) {
//            if(kv.offsetTop >= 540) {
//                return;
//            }
//            i++;
//            time();
//        }
//    }, 10);
//};
//
//
//time();


/**
 * Создать игры
 * 1. Sneak
 * 2. Pac-man
 * 3. Лабиринт
 * 4. Тетрис
 */
//var timeIn = 0;
//function time (i) {
//    if(timeIn == i) {
//        return;
//    }
//
//    kv.style.top = kv.offsetTop + 1 + "px";
//    timeIn++;
//}