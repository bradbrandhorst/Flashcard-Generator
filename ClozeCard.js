var fs = require("fs");


function ClozeCard(text, cloze){

  this.text = text,
  this.cloze = cloze,
  this.deletedCloze = this.text.replace(this.cloze, '...');

  this.printInfo = function() {

    var data = {
            text: this.text,
            cloze: this.cloze,
            deletedCloze: this.deletedCloze,
    };
  fs.appendFile("log.txt", JSON.stringify(data) + ';', "utf8", function(error) {

    if (error) {
      console.log(error);
      }
     });
   };
}

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

firstPresidentCloze.printInfo();