// alert("Let's get to work! ")

// TODO: Assign value of "answers" variable to an array of strings
// that could be answers to magic 8 ball type questions
// The official Magic 8 Ball answers:
var answers = [ "It is certain",
                "It is decidedly so", 
                "Without a doubt", 
                "Yes definitely", 
                "You may rely on it", 
                "As I see it, yes", 
                "Most likely", 
                "Outlook good", 
                "Yep", 
                "Signs point to yes", 
                "Reply hazy try again", 
                "Ask again later", 
                "Better not tell you now", 
                "Cannot predict now", 
                "Concentrate and ask again", 
                "Don't count on it", 
                "My reply is no", 
                "My sources say no", 
                "Outlook not so good", 
                "Very doubtful"]

function getMagic(message) {
  
  // get the img elem
  var img = document.querySelector("img")
  // set alt attr value
  img.setAttribute("alt", "so magic!!")
  img.classList.toggle("left")
  
  console.log("so magic!! " + message)
  var ansNum = Math.floor(Math.random() * answers.length)
  console.log(answers[ansNum])
  // or could call addAnswer()
}

// get the new div #fortune-container and the existing <small> element in HTML, and assign each one to a variable. 
// You can use either get method from previous slide
//var fortElem = document.getElementById('fortune-container')
//var small = document.querySelector("small")

//container.innerHTML = "<p></p>"

//var forms = document.getElementsByTagName("form")
//var forms = document.querySelectorAll("form")
//console.log(forms)



/* TODO: Write a form handler function that will:
  1. capture the question asked in the form, and assign it to a variable
  2. console log something conversational including the question, like
     "Oh, you want to know if you'll win the lottery?"
*/
function showAnswer() {
  // In a form submit handler function to not actually submit, keep console output visible and not reload the window:
  event.preventDefault();
  var userQuestion = document.qForm.question.value
  console.log("Your question: " + userQuestion)
  var ansNum = Math.floor(Math.random() * answers.length)
  console.log(answers[ansNum])
  
  var container = document.querySelector('#fortune-container')
  container.innerHTML = answers[ansNum]

  document.qForm.question.value = ""
  
  // Remove "red" class from all other forms
  var forms = document.querySelectorAll("form")
  for (var i=0; i<forms.length; i++){
    forms[i].classList.remove("red")
  }

  // Add "red" class to this form
  document.getElementById("qForm").classList.add("red")
}

// Adds a new fortune to the array of possible answers, if the new answer is not already in the array.
function addAnswer() {
  event.preventDefault();
  var ans = document.aForm.answer.value
  
  var i = answers.indexOf(ans)
  if (i == -1) {
    answers.push(ans)
    console.log("Added answer: " + ans)
//    console.log("Answers.length: " + answers.length)
    } else {
    console.log("That answer already exists")
    }
  document.aForm.answer.value = ""

  // Remove "red" class from all other forms
  var forms = document.querySelectorAll("form")
  for (var i=0; i<forms.length; i++){
    forms[i].classList.remove("red")
  }

  // Add "red" class to this form
  document.getElementById("aForm").classList.add("red")
  // Alternative way of selecting the form to change its classlist:
//  document.aForm.classList.add("red")
  
    document.querySelector('#fortune-container').innerHTML = ""

}
