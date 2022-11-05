//START TIMER
const timeH = document.getElementById("countdown")
const youreFinished = document.getElementById("questionformform")
let timeSecond = 30;

displayTime(timeSecond)

const countDown = setInterval(()=>{
    timeSecond--;
    displayTime(timeSecond);
    if(timeSecond <=0 || timeSecond<1){
        endTime();
        clearInterval(countDown)
    }
},1000)

function displayTime(second){
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML = `${sec <10?'0':''} ${sec}`
}

function endTime(){
    // timeH.innerHTML = "YOURE FINISHED!"//not sure if I want this
    youreFinished.innerHTML = "YOU HAVE FAILED ME FOR THE LAST TIME"
}
// END TIMER


//delete lightsaber upon wrong answer
const lightSaberImg1 = document.getElementById("health1")

// if(document.getElementById("obiWan1").selected = true) {
//     lightSaberImg1.remove()
// }

//online test code

var answers = ["A", "C"],
  total = answers.length;


function getAnswer(QuestionId) {
  var answer = document.querySelector("#" + QuestionId + " input[type=radio]:checked");
  if (answer === null) 
  {
    document.querySelector("#" + QuestionId + " .choice_error").style.display = "inline";
  } 
  else 
  {
             
    document.querySelector("#" + QuestionId + " .choice_error").style.display = "";
    answer = answer.value;
  }

  return answer;
}



function getScore() 
{
  var score = 0;

  for (var i = 0; i < total; i++) 
  {
    document.getElementById("flag" + i).innerHTML = "";
	
    if (getAnswer("radio" + (i + 1)) == answers[i]) 
	{
      score += 1;
      document.getElementById("flag" + i).innerHTML = "Correct!";
    }

    else 
	{
      document.getElementById("flag" + i).innerHTML = "Incorrect!";
    }
  }
  
 
  return score;
}

var getResults = function() 
{	
  var x = document.getElementById("myText").value;
  var message = "";
  
  var answerInput1 = document.getElementById("answerText1").value.trim();
  var answerInput2 = document.getElementById("answerText2").value.trim();
   
  var validateInteger = /^\d{2,3}$/;
  var isValid = true;
  
   //score feedback
   if(getScore() == 0)
  {
	  message = "Nothing at all?...Okay, " + x+ ".";
  }
  else if(getScore() > 0)
  {
	  message = "Cool, but there's still more to answer, " + x + "!";
  }
  else if(getScore() == 2)
  {
	  message = "Perfect. Thanks for participating, " + x + "!";
  }
  
  //validating input text 1
  if (answerInput1 == "") 
  {
    document.getElementById("answerText1").nextElementSibling.firstChild.nodeValue = "This field is required.";
    isValid = false;
  } 
  else if(answerInput1 != validateInteger)
  {
	  document.getElementById("answerText1").nextElementSibling.firstChild.nodeValue = "Answer must be a 2- or 3- digit number";
	  isValid = false;
  }
  else
  {
    document.getElementById("answerText1").nextElementSibling.firstChild.nodeValue = "Correct!";
  }
  
  //validating input text 2
  if (answerInput2 == "") 
  {
    document.getElementById("answerText2").nextElementSibling.firstChild.nodeValue = "This field is required.";
    isValid = false;
  } 
  else 
  {
    document.getElementById("answerText2").nextElementSibling.firstChild.nodeValue = "Correct!";
  }

  return message;
}

function returnResults() 
{
  document.getElementById("results").innerHTML = getResults();
}

  

// set value of the question, you can create an event listener as well so 
//that if anakin1 is not selected, a health is removed
//for html form, https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_radio
