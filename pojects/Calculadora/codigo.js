
//Buttons

document.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btnigual").click();
    }
});

document.addEventListener("keyup", function (event) {
    if (event.keyCode === 97 || event.keyCode === 49) {
        event.preventDefault();
        document.getElementById("btn1").click();
    }
});

document.addEventListener("keyup", function (event) {
    if (event.keyCode === 98 || event.keyCode === 50) {
        event.preventDefault();
        document.getElementById("btn2").click();
    }
});
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 99 || event.keyCode === 51) {
        event.preventDefault();
        document.getElementById("btn3").click();
    }
});
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 100 || event.keyCode === 52) {
        event.preventDefault();
        document.getElementById("btn4").click();
    }
});
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 101 || event.keyCode === 53) {
        event.preventDefault();
        document.getElementById("btn5").click();
    }
});
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 102 || event.keyCode === 54) {
        event.preventDefault();
        document.getElementById("btn6").click();
    }
});
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 103 || event.keyCode === 55) {
        event.preventDefault();
        document.getElementById("btn7").click();
    }
});
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 104 || event.keyCode === 56) {
        event.preventDefault();
        document.getElementById("btn8").click();
    }
});
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 105 || event.keyCode === 57) {
        event.preventDefault();
        document.getElementById("btn9").click();
    }
});
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 96 || event.keyCode === 48) {
        event.preventDefault();
        document.getElementById("btn0").click();
    }
});
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 107 || event.keyCode === 187) {
        event.preventDefault();
        document.getElementById("btnmas").click();
    }
});
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 109 || event.keyCode === 189) {
        event.preventDefault();
        document.getElementById("btnmenos").click();
    }
});
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 106 || event.keyCode === 88) {
        event.preventDefault();
        document.getElementById("btnx").click();
    }
});
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 111 ) {
        event.preventDefault();
        document.getElementById("btndivi").click();
    }
});
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 110) {
        event.preventDefault();
        document.getElementById("btnpunto").click();
    }
});
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 67) {
        event.preventDefault();
        document.getElementById("btnclear").click();
    }
});
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 8) {
        event.preventDefault();
        document.getElementById("btnback").click();
    }
});
//FUNCITIONS

function evaluar() {
    var ev = document.getElementById("evaluar").value
    document.getElementById("evaluar").value = "";
    document.getElementById("evaluar").value = eval(ev);
}
function limpiar() {
    document.getElementById("evaluar").value = "";
}
function back() {
    document.getElementById("evaluar").value -= value;
}

function uno() {
    document.getElementById("evaluar").value += '1'; //document.getElementById('evaluar').value = document.getEle...value + '1' Es lo mismo
}
function dos() {
    document.getElementById("evaluar").value += '2';
}
function tres() {
    document.getElementById("evaluar").value += '3';
}
function cuatro() {
    document.getElementById("evaluar").value += '4';
}
function cinco() {
    document.getElementById("evaluar").value += '5';
}
function seis() {
    document.getElementById("evaluar").value += '6';
}
function siete() {
    document.getElementById("evaluar").value += '7';
}
function ocho() {
    document.getElementById("evaluar").value += '8';
}
function nueve() {
    document.getElementById("evaluar").value += '9';
}
function cero() {
    document.getElementById("evaluar").value += '0';
}
function punto() {
    document.getElementById("evaluar").value += '.';
}
function mas() {
    document.getElementById("evaluar").value += '+';
}
function menos() {
    document.getElementById("evaluar").value += '-';
}
function multiplica() {
    document.getElementById("evaluar").value += '*';
}
function divide() {
    document.getElementById("evaluar").value += '/';
}