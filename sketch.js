function setup() {
    var myCanvas = createCanvas(400, 400);
    myCanvas.parent("sketch-holder");
    draw();

}
function draw() {
    background(50);
    fill(255);
    textSize(32);
    textLeading((mouseX / width) * 64);
    text("System change not climate change.",
        100, 100, 200, 200);
}
