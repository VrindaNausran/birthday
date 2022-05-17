function preload(){
}

function setup(){
canvas=createCanvas(600,420);
canvas.position(340,140);
Video= createCapture(VIDEO);
Video.size(300,300);
Video.hide();
}

function draw(){
image(Video,70,50,460,300);
stroke("red");
fill(255,0,0);
circle(60,60,90);
circle(540,60,90);
circle(540,360,90);
circle(60,360,90);

stroke("green");
fill("green");
rect(105,50,390,20);
rect(530,105,20,210);
rect(105,350,390,20);
rect(50,105,20,210);
}


function take_snapshot(){
save("photo.png");
}