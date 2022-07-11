const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

var mouse = {
    x: null,
    y: null,
    pressed: false,
    clicked: false,
};
canvas.onmousedown = function () {
    mouse.pressed = true;
};
canvas.onmouseup = function () {
    mouse.clicked = true;
    mouse.pressed = false;
};
var rect = canvas.getBoundingClientRect();
canvas.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
});

var keys = [];
document.addEventListener("keydown", (e) => {
    keys[e.key.charCodeAt(0)] = true;
});
document.addEventListener("keyup", (e) => {
    keys[e.key.charCodeAt(0)] = false;
});
var pressed = function (key) {
    //console.log(String.fromCharCode("a".charCodeAt(0)));
    if (keys[key.charCodeAt(0)]) {
        return true;
    }
    return false;
}

let frameCount = 0;
var updateLoop = function () {
    this.clicked = false;
    frameCount++;
    requestAnimationFrame(loop);
}

function loop() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "rgb(220,220,220)";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = mouse.pressed ? "blue" : "purple";
    ctx.fillRect(mouse.x, mouse.y, 20, 20);

    ctx.font = '12px serif';
    ctx.fillStyle = "black"
    ctx.fillText(`A pressed: ${pressed("a")}`, mouse.x - 20, mouse.y);

    updateLoop();
}
window.addEventListener('load', loop);