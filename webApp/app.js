let database;
let x = 200;
let y = 200;

function setup(){
    createCanvas(800,600);




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
    ellipse(x, y, 120);
    
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
            x++;
            
        }
        if(dir == 'up'){
            y--;
            
        }
        if(dir == 'left'){
            x--;
            
        }
        if(dir == 'down'){
            y++;

        }
    }