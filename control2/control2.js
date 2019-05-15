let database;


function setup(){
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


function right(){
    // console.log('right');
    sentData('right')
}
function left(){
    // console.log('left');
    sentData('left')
}
function down(){
    // console.log('down');
    sentData('down')
}
function up(){
    // console.log('up');
    sentData('up')
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