let intX;
let intY;
let x;
let y;
let sizeC = 200;
let right = false;
let left = false;
let up = false;
let down = false;

function setup(){
    createCanvas(windowWidth,windowHeight); 
    intX = width/2;
    intY = height/2;
    x = width/2;
    y = height/2;
}


function draw(){
    background(0); 
    right = false;
    left = false;
    up = false;
    down = false;
    textSize(32);
    text(x+'x  :  y'+y, 200, 200);

    // for controller place holder
    fill(205,20,100,100);
    ellipse(intX, intY, sizeC);

    noFill();
    stroke(255);
    strokeWeight(10);
    ellipse(intX, intY, sizeC);
    
    if(mouseIsPressed){
        strokeWeight(50);
        line(intX, intY, mouseX, mouseY);
        x = mouseX;
        y = mouseY;
        checkDir();

    }else
    {   x =intX;
        y =intY;
    }
    //for controler itself
    strokeWeight(0);
    fill(255,20,100);
    ellipse(x, y, sizeC);

    if(right){
        console.log('right');
    }
    if(left){
        console.log('left');
    }
    if(down){
        console.log('down');
    }
    if(up){
        console.log('up');
    }
}





function checkDir(){
    if(mouseX > intX + sizeC){
        right = true;
    }
    if(mouseX < intX - sizeC){
        left = true;
    }
    if(mouseY > intY + sizeC){
        down = true;
    }
    if(mouseY < intY - sizeC){
        up = true;
    }
}