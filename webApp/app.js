let database;
let x = 200;
let y ;
let ex = 20;
let ey = 20;
let er = 20;
let rwidth = 100;
let rheight = 20;
let exs = 2;
let eys = 2;
let barspeed = 5;
let point = 0;

function setup(){
    createCanvas(400,600);
    y = height-30;



    let config = {
        apiKey: "AIzaSyDVeRD0P145hETu39Ryh4HM8rvlTSj4Kos",
        authDomain: "try2-70357.firebaseapp.com",
        databaseURL: "https://try2-70357.firebaseio.com",
        projectId: "try2-70357",
        storageBucket: "",
        messagingSenderId: "99106327684"
        };

  firebase.initializeApp(config);
  database = firebase.database();

    let ref = database.ref('game');
    ref.on('value', gotData, errData);
}



function draw(){
    background(0);
    fill(255,60,80);
    ellipse(ex, ey, er)
    fill(255);
    rect(x, y, rwidth, rheight);
    // testmode();   
    textSize(32)
    text(point, 20,50);
    checkSide();
    checkKill();
    ex += exs;
    ey += eys;
}


function gotData(data){
    //delete prev data...
    
        let moves = data.val();
        let keys = Object.keys(moves);
        let lastItem = keys.length
        let k = keys[lastItem-1];
        // console.log(k);
        let lastDirection = moves[k].direction;
        // console.log(lastDirection)

        checkDirection(lastDirection)
    }
    
    function errData(err){
        console.log(err);
    }
    


    function checkDirection(dir){
        if(dir == 'right'){
            x+=barspeed;
            
        }
        // if(dir == 'up'){
        //     y-=barspeed;
            
        // }
        if(dir == 'left'){
            x-=barspeed;
            
        }
        // if(dir == 'down'){
        //     y+=barspeed;

        // }
    }



function checkSide(){
    if (ex+er/2 > width || ex-er/2<0){
        exs *= -1;
    }  
    if (ey+er/2 > height || ey-er/2<0){
        eys *= -1;
    }  
}


function checkKill(){
    if (ex >= x && ex <= (x + rwidth)){
        if(ey >= y && ey <= (y + rheight)){
            kill();
        }
    }
}


// function testmode(){
//     text(x+'x : y'+y,100,200);
//     text(ex+'ex : ey'+ey,100,500);    /...//will be enabled for testing

// }



function kill(){
    eys *= -1;
    point++;
}