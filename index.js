//START TIMER CODE!!
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
    youreFinished.innerHTML = "YOU HAVE FAILED ME FOR THE LAST TIME"
}
// END TIMER

//counter eval code

function getTotal(){         
    var totalCorrect = 0;          
        for(var a = 1; a <= 9; a++) {
            var radios = document.getElementsByName('question'+a);
            for(var x = 0; x < radios.length; x++) {
        var radio = radios[x];
        if(radio.value == "correct" && radio.checked) {
            totalCorrect++;
        }
    }
}                   
    document.getElementById("questionformform").innerHTML = 
    "Correct Answers:" + totalCorrect + "/9";
    clearInterval(countDown)
}

function backToTop(){
    document.documentElement.scrollTop = 0;
}
// function visualNotification() {
//     if (amountCorrect <=6){
//     document.getElementById("countdown").innerHTML = "You Lost!"
// } else {
//     document.getElementById("countdown").innerHTML = "Good job, my apprentice"
// }