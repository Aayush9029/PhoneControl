let intX;
let intY;
let x;
let y;
let sizeC = 200;
let right = false;
let left = false;
let up = false;
let down = false;
let database;



function setup(){
    createCanvas(windowWidth,windowHeight); 
    intX = width/2;
    intY = height/2;
    x = width/2;
    y = height/2;
    sizeC = width/5;
    var config = {
        apiKey: "AIzaSyDVeRD0P145hETu39Ryh4HM8rvlTSj4Kos",
        authDomain: "try2-70357.firebaseapp.com",
        databaseURL: "https://try2-70357.firebaseio.com",
        projectId: "try2-70357",
        storageBucket: "",
        messagingSenderId: "99106327684"
    };

    firebase.initializeApp(config);
    database = firebase.database();

    var ref = database.ref('game');
    ref.on('value', gotData, errData);
}


function draw(){
    background(0); 
    // translate(width/2, height/2);
    right = false;
    left = false;
    up = false;
    down = false;
    // textSize(32);
    // text(x+'x  :  y'+y, 200, 200);

    // for controller place holder
    // fill(205,20,100,100);
    ellipse(intX, intY, sizeC);

    noFill();
    stroke(255);
    strokeWeight(sizeC/10);
    ellipse(intX, intY, sizeC);
    
    if(mouseIsPressed){
        strokeWeight(sizeC/3);
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

   
    
    //if mouse is pressed or screen is touched it sends data to firebase

    if (mouseIsPressed){
        if(right){
            // console.log('right');
            sentData('right')
        }
        if(left){
            // console.log('left');
            sentData('left')
        }
        if(down){
            // console.log('down');
            sentData('down')
        }
        if(up){
            // console.log('up');
            sentData('up')
        }
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


function sentData(direction){
    var ref = database.ref('game');
    let data = {
        direction: direction
    }
    var result = ref.push(data, dataSent);
    // console.log(result.key);

    function dataSent(status){
        // console.log(status)
    }
}


function gotData(data){
    // console.table(data)
}
function errData(err){
    // console.log(err)
}