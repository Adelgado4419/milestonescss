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


//delete lightsaber 
const lightSaberImg1 = document.getElementById("health1")

function myFunction() {
    var x = document.getElementById("myCheck").checked;
    document.getElementById("demo").innerHTML = x;
  }

//for html form, https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_radio
