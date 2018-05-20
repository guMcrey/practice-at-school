/*message->js document*/

var prox;
var proy;
var proxc;
var proyc;
function show(id) {
    clearInterval(prox);
    clearInterval(proy);
    clearInterval(proxc);
    clearInterval(proyc);
    var o = document.getElementById(id);
    o.style.display = "block";
    o.style.width = "10px";
    o.style.height = "10px";
    prox = setInterval(function() {
        openx(o, 408)
    },
    1);
}
function openx(o, x) {
    var cx = parseInt(o.style.width);
    if (cx < x) {
        o.style.width = (cx + Math.ceil((x - cx) / 5)) + "px";
    } else {
        clearInterval(prox);
        proy = setInterval(function() {
            openy(o, 130)
        },
        1);
    }
}

function openy(o, y) {
    var cy = parseInt(o.style.height);
    if (cy < y) {
        o.style.height = (cy + Math.ceil((y - cy) / 5)) + "px";
    } else {
        clearInterval(proy);
    }
}

function closeed(id) {
    clearInterval(prox);
    clearInterval(proy);
    clearInterval(proxc);
    clearInterval(proyc);
    var o = document.getElementById(id);
    if (o.style.display == "block") {
        proyc = setInterval(function() {
            closey(o)
        },
        1);
    }
}

/*--------------------点击弹出、收起-------------------*/
function closey(o) {
    var cy = parseInt(o.style.height);
    if (cy > 0) {
        o.style.height = (cy - Math.ceil(cy / 5)) + "px";
    } else {
        clearInterval(proyc);
        proxc = setInterval(function() {
            closex(o)
        },
        1);
    }
}

function closex(o) {
    var cx = parseInt(o.style.width);
    if (cx > 0) {
        o.style.width = (cx - Math.ceil(cx / 5)) + "px";
    } else {
        clearInterval(proxc);
        o.style.display = "none";
    }
}