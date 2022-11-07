//START TIMER CODE!!
const timeH = document.getElementById("countdown")
const youreFinished = document.getElementById("questionformform")
let timeSecond = 40;

displayTime(timeSecond)

const countDown = setInterval(() => {
    timeSecond--;
    displayTime(timeSecond);
    if (timeSecond <= 0 || timeSecond < 1) {
        endTime();
        clearInterval(countDown)
    }
}, 1000)

function displayTime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML = `${sec <10?'0':''} ${sec}`
}

function endTime() {
    youreFinished.innerHTML = "YOU HAVE FAILED ME FOR THE LAST TIME"
}
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

        //displays the total correct in the html form
        document.getElementById("questionformform").innerHTML =
            "Correct Answers:" + totalCorrect + "/9";
        //stops the counter from counting and causing the text to dispaly "You have failed me for the last time"
        clearInterval(countDown);
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