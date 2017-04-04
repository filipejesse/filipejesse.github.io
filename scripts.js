var i = setInterval(function () {

    clearInterval(i);

    // O código desejado é apenas isto:
    document.getElementById("loading").style.display = "none";
    document.getElementById("conteudo").style.display = "inline";

}, 2000);

function move() {
    var elem = document.getElementById("wd");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
        if (width >= 85) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
function move1() {
    var elem = document.getElementById("wd1");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
        if (width >= 80) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
function move2() {
    var elem = document.getElementById("wd2");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
        if (width >= 75) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
function move3() {
    var elem = document.getElementById("wd3");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
        if (width >= 50) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
function move4() {
    var elem = document.getElementById("wd4");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
function move5() {
    var elem = document.getElementById("wd5");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
        if (width >= 65) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
function move6() {
    var elem = document.getElementById("wd6");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
        if (width >= 50) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

var time = setTimeout(function inicia() {
    return move(), move1(), move2(), move3(), move4(), move5(), move6();
}, 3000)
