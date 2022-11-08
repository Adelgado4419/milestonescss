//START TIMER CODE!!
const timeH = document.getElementById("countdown")
const youreFinished = document.getElementById("questionformform")
let timeSecond = 40;

displayTime(timeSecond)

const countDown = setInterval(() => {
    timeSecond--;
    //timesecond -- subtracts a second ever 1000ms 
    displayTime(timeSecond);
    if (timeSecond <= 0 || timeSecond < 1) {
        endTime();
        clearInterval(countDown)
        //this sections stops the timer from going into the negatives
    }
}, 1000)
//javascript interprets time in miliseconds, so you must calculate your time in miliseconds

function displayTime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML = `${sec <10?'0':''} ${sec}`
}

function endTime() {
    youreFinished.innerHTML = "YOU HAVE FAILED ME FOR THE LAST TIME"
    document.documentElement.scrollTop = 0;
}
//having never created a timer before, i went through alot of youtube videos and tutorial to get this, 
//i finally landed on the following video, https://www.youtube.com/watch?v=_a4XCarxwr8
//
// END TIMER

//setting value for audio to stop

//counter eval code
function finalEval() {
    //runs through all anwers and verifys if its correct or not
    function getTotal() {
        var totalCorrect = 0;
        for (var a = 1; a <= 9; a++) {
            var radios = document.getElementsByName('question' + a);
            for (var x = 0; x < radios.length; x++) {
                var radio = radios[x];
                if (radio.value == "correct" && radio.checked) {
                    totalCorrect++;
                }
            }
        }
        //part of this code came from https://teamtreehouse.com/community/javascript-project-simple-quiz-with-radio-buttons
        //i had trouble getting the counter to work for some reason. this code finalyl helped me get the code working, an helped me realize I was
        //missing the values in the radio buttons. All this code does it it counts goes through all of the answers via the ID and checks to see if the value is
        //is correct, and if the radio is check, and then it add a point to the totalcorrect counter. 
        //Thank you!!!
        //another resource i used was https://stackoverflow.com/questions/13935786/quiz-counts-radio-button-values
        //this was also for the radio buttons an tracking

        //displays the total correct in the html form
        document.getElementById("questionformform").innerHTML =
            "Correct Answers:" + totalCorrect + "/9";
        //stops the counter from counting and causing the text to dispaly "You have failed me for the last time"
        clearInterval(countDown);
        //figuring out how to clear the interval came from the help of this website
        //https://www.tutorialspoint.com/how-to-stop-a-function-during-its-execution-in-javascript
        //as well as https://developer.mozilla.org/en-US/docs/Web/API/clearInterval
        //scoll back to the top, before, it would stay at the bottom of the page and not scroll back up
        document.documentElement.scrollTop = 0;
        //visual noticiation of pass or fail, as well as removing the seconds remaining
        if (totalCorrect <= 6) {
            document.getElementById("countdown").innerHTML = "You Lost!";
            document.getElementById("secondsRemaining").innerHTML = "";
        } else {
            document.getElementById("countdown").innerHTML = "Good job, my apprentice";
            document.getElementById("secondsRemaining").innerHTML = "";
        }
    }
    //since this is a function within a function, I have to call the function 
    getTotal();
}
    //https://stackoverflow.com/questions/7295634/javascript-nested-function
    //helped me better grasp function within a function. Initially, I had 3 seperate functions, an my onclick on my HTML was
    //calling all three seperate functions, but after reviewing this, I nested the getTotal function inside of a new function, finalEval, and even added an if/else
    //inside. 


    //furthermore to assist with the possibility of plagarism, I followed this guideline of commenting code
    //https://www.turnitin.com/blog/plagiarism-and-programming-how-to-code-without-plagiarizing-2