var img; 

function setup(){
	img = loadImage('assets/IMG_9682.jpg')
	createCanvas(windowWidth, windowHeight)
	background(0,0,255)
}

function draw(){
image(img,0,0,windowWidth, windowHeight)
rect(40,30,60,60)
ellipse(700,100,70,70)
textAlign(CENTER);
textSize(40);
text("Camino", windowWidth/2, 300);
textSize(12);
text("Those who come to the Camino with a heavy heart leave with a lighter load. Don't cry because it's over, smile because it happened. As in any journey, it's not what you take with you, but what you leave behind. Listen to your heart and it will show you the way.", windowWidth/2, 400);

}

