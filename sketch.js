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

//     r = random(255);
//     g = random(255);
//     b = random(255);

//     background(78);

//     // Set text characteristics
//     textFont("Arial");
//     textSize(40);
//     textAlign(CENTER, CENTER);
// }

// function draw() {
//     background(160);
//     // Align the text in the center
//     // and run drawWords() in the middle of the canvas
//     textAlign(CENTER);
//     drawWords(width * 0.5);


// }

// function drawWords(x) {
//     // The text() function needs three parameters:
//     // the text to draw, the horizontal position,
//     // and the vertical position
//     // if (mouseIsPressed) {


//     //     r = random(255);
//     //     g = random(255);
//     //     b = random(255);

//     //     fill(r, g, b, 127);

//     //     text('System change not climate change', x, 180);
//     // }

//     // else {
//     //     text('(Ad) Gas Corporations hate this idea', x, 180);

//     text('(Ad) Gas Corporations hate this idea', x, 180);

// }




// }


