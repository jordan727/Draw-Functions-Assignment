// Draw Functions

let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

function drawSolidBall(x, y, color, number) {
    // Draw a Solid Pool Ball with top-left corner (x, y) and with the given color and number
    fill(color)
    circle(x, y, 40, "fill");
    fill("white");
    circle(x, y, 25, "fill");
    fill("black");
    font("45px Arial");
    text(number, x - 15, y + 15, "fill");
}

function drawFish(x, y, size, color) {
    // Draw a Fish with the top-left corner (x, y) and with the given color
    fill(color);
    triangle(x + 5, y + 0, x + 5, y + size, x + 50, y + size / 2, "fill");
    ellipse(x + 80, y + size / 2, 40, size / 3, 0, "fill");
    fill("white");
    circle(x + 100, y + size / 2, size / 10, "fill");
    fill("black");
    circle(x + 101, y + size / 2, size / 20, "fill");
}

drawSolidBall(500, 100, "black", "8");
drawSolidBall(700, 20, "blue", "2");
drawFish(10, 10, 80, "black");
drawFish(202, 200, 40, "orange");
drawFish(15, 400, 100, "green");
drawSolidBall(100, 300, "yellow", "1");