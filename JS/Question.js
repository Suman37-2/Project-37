class Question{
 constructor(){
  this.heading = createElement('h2');
  this.question = createElement('h3');
  this.option1 = createElement('h4');
  this.option2 = createElement('h4');
  this.option3 = createElement('h4');
  this.option4 = createElement('h4');
  this.input = createInput("Name");
  this.optionget = createInput("Option");
  this.button = createButton('Submit');   
 }

 hide(){
  this.heading.hide();
  this.input.hide();   
  this.button.hide();
 }
 
 
 display(){
  this.heading.html("MyQuiz Game");
  this.heading.position(400,50);

  this.question.html("Q : Which is the largest volcano in the solar system ?");
  this.question.position(250,160);

  this.option1.html("1 : Mt . Kilimanjaro");
  this.option1.position(250,200);

  this.option2.html("2 : Mt . Fuji");
  this.option2.position(250,230);

  this.option3.html("3 : Olympus Mons");
  this.option3.position(250,260);

  this.option4.html("4 : Mt . Etna");
  this.option4.position(250,290);

  this.input.position(300,400);
  this.optionget.position(500,400);
  this.button.position(400,500);

  this.button.mousePressed(()=>{
   this.button.hide();
   this.heading.hide();
   this.input.hide();

   contestant.name = this.input.value();
   contestantCount += 1;
   contestant.index = contestantCount;
   contestant.update();
   contestant.updateCount(contestantCount);
   contestant.answer = this.optionget.value();
  })
 }
}