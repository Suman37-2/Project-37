var gameState=0, contestant, contestantCount;
var database, quiz, question,allContestants;

function setup(){
 createCanvas(900,550); 
 database = firebase.database();

 quiz = new Quiz();
}

function draw(){
 background("lightblue");
 quiz.start();

 if(contestantCount === 4){
    quiz.update(1); 
 }

 if(gameState === 1){
    clear(); 
    quiz.play(); 
 }
}