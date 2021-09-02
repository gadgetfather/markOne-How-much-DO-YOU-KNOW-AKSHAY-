var readlineSync = require('readline-sync');

var score =0
var name= readlineSync.question("What is your name ")
console.log("Welcome "+ name+ " To **** How much Do You Know Akshay?***")


function play(question,answer){
var userAnswer = readlineSync.question(question)
if (userAnswer===answer) {
  console.log("right!")
  score++
 
}
else {
  console.log("wrong!")
}
 console.log("Your score is ",score)
}

var questions = [{
  question:"Who is Akshay's favorite superhero? ",
  answer:"Batman"
},{
  question:"Where does Akshay live? ",
  answer:"Ratnagiri" 
},{
  question:"How old is Akshay? ",
  answer:"21"
}, {
  question:"Which graphics card does Akshay have? (hint = put only number like 3080) ",
  answer:"1060"}]

  for(i=0; i<questions.length;i++){
    var currenQuestion = questions[i]
    play(currenQuestion.question,currenQuestion.answer)
  }

  console.log("WOW !You scored ",score," points")