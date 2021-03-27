class Contestant{
    constructor(){
     this.name = null;
     this.index = null;
     this.answer = null;

    }
    
    getCount(){
     var contestantCountRef = database.ref('contestantCount'); 
     contestantCountRef.on("value",function(data){
      contestantCount = data.val();
     })
    }

    update(){
     var contestantIndex = "contestants/contestant " + this.index;
     database.ref(contestantIndex).set({
      name : this.name   
     })   
    }
   
    updateCount(count){
     database.ref('/').update({
      contestantCount : count   
     })   
    }

    static getContestantInfo(){
     var contestantRef = database.ref('contestants');
     contestantRef.on("value",function(data){
      allContestants = data.val();   
     })   
    }
   
   }