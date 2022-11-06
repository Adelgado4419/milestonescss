//START TIMER
const timeH = document.getElementById("countdown")
const youreFinished = document.getElementById("questionformform")
let timeSecond = 50;

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


//points keeper
// function getResults() {

//     //CORRECT ANSWERS
//     var amountCorrect = 0;
  
//   // LOOP FOR GOING THROUGH ALL QUESTIONS
//     for(var i = 1; i <= 5; i++) {
//       var radioName = document.getElementsByName('question'+i);
  
//   //LOOP FOR CHECKING ANSWERS INSIDE EACH RADIO
//       for(var x = 0; x < radioName.length; x++) {
//         var radioValue = radioName[j];
//         if(radioValue.value == "correct" && radioValue.checked) {
//           amountCorrect+= 1;
//         }
//       }
//     }
//   document.getElementById('results').innerHTML =
//   "Correct Answers " + amountCorrect + "/9"; 
  
//   }


document.getElementById("submit").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("results").innerHTML = "YOU CLICKED ME!";


// let points= 0;
// function results() {
//     let points= 0;
//     if (document.getElementById(answer1).checked) {
//         points+= 1;
//         console.log(points)}
//     if (document.getElementById(answer2).checked) {
//         points+= 1;
//         console.log(points)}
//     if (document.getElementById(answer3).checked) {
//         points+= 1;
//         console.log(points)}
//     if (document.getElementById(answer4).checked) {
//         points+= 1;
//         console.log(points)}
//     if (document.getElementById(answer5).checked) {
//         points+= 1;
//         console.log(points)}
//     if (document.getElementById(answer6).checked) {
//         points+= 1;
//         console.log(points)}
//     if (document.getElementById(answer7).checked) {
//         points+= 1;
//         console.log(points)}
//     if (document.getElementById(answer8).checked) {
//         points+= 1;
//         console.log(points)}
//     if (document.getElementById(answer9).checked) {
//         points+= 1;
//         console.log(points)}
//     }

// results()

//Logic to show score on results page


// set value of the question, you can create an event listener as well so 
//that if anakin1 is not selected, a health is removed
//for html form, https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_radio