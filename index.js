var readlineSync = require('readline-sync');

var score =0
var name= readlineSync.question("What is your name ")
console.log("Welcome "+ name+ " To **** How much Do You Know Akshay?***")



var scores= [{
  name:"Akshay",
  score:5
},{
  name:"Dhruv",
  score:3
}]


function play(question,answer){
var userAnswer = readlineSync.question(question)
if (userAnswer.toUpperCase()===answer.toUpperCase()) {
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
  answer:"1060"},
  {
  question:"How tall is Akshay?(*enter option not option number!) \n 1. 5.5ft \n 2. 6.3ft \n 3. 6.1ft\n ",
  answer:"6.1ft"}, {
  question:"Who is Akshay's favorite legend?(*enter option not option number!) \n 1. bloodhound \n 2. wraith \n 3. octane\n ",
  answer:"octane"},
  {
  question:"what is Akshay's favorite sport?(*enter option not option number!) \n 1.Cricket  \n 2.Volleyball \n 3.Football\n ",
  answer:"Football"}
  ]

  for(i=0; i<questions.length;i++){
    var currenQuestion = questions[i]
    play(currenQuestion.question,currenQuestion.answer)
  }

  console.log("WOW !You scored ",score," points")

  console.log("check out highScores")
  
  for(i=0;i<scores.length;i++)
  {
  console.log(scores[i].name,scores[i].score)
  }