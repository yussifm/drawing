const canvas = document.getElementById("canvas1");

const ctx = canvas.getContext('2d');


canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
ctx.globalCompositeOperation = 'destination-over';
hue = Math.random() * 360;
let number = 0;
let scale = 10;

drawbox = () => {
    let angle = number * 1000;
    let radius = scale * Math.sqrt(number);

    let positionY = radius * Math.sin(angle) + canvas.height / 3;
    let positionX = radius * Math.cos(angle) + canvas.width / 4;

    ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
    ctx.strokeStyle = "black";

    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(positionX, positionY, 20, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    number++;
    hue += 1;

};


drawcir = () => {

    let angle = number * 1000;
    let radius = scale * Math.sqrt(number);

    let positionY = radius * Math.sin(angle) + canvas.height / 2;
    let positionX = radius * Math.cos(angle) + canvas.width / 2;

    ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
    ctx.strokeStyle = "black";

    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(positionX, positionY, 12, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    number++;
    hue += 1;
};

function animate() {

    // ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawcir();
    drawbox();

    if (number === 500) return;



    requestAnimationFrame(animate);
}

animate();