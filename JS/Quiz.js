class Quiz{
 constructor(){}   

 getState(){
  var gameStateRef = database.ref('gameState');
  gameStateRef.on("value", function(data){
   gameState = data.val();   
  })
 }

 update(gs){
  database.ref('/').update({
   gameState : gs
  })
 }

 async start(){
  if(gameState === 0){
     contestant = new Contestant();

     var contestantCountRef = await database.ref('contestantCount').once("value");
     if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount(); 
     }

     question = new Question();
     question.display();

  }
 }

 play(){
  question.hide();
  textSize(20);
  text("Result of the Quiz",400,50);
  contestant.getContestantInfo();  

  if(allContestants !== undefined){
     background("lightgreen");
     for(var plr in allContestants){
        var correctAns = "2";
        if(correctAns === allContestants[plr].answer)
        fill("green");
        else
        fill("red");
     }

  }
 }
}