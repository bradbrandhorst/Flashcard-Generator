function BasicCard (front, back){

  this.front = front,
  this.back = back

  this.getQuestion = function(){
    console.log ('Question: ' + front);
  }

  this.getAnswer =  function(){
    console.log('Answer:  ' + back);
  }
};

  var  firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");

  firstPresident.getQuestion();
  firstPresident.getAnswer();