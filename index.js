const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");


function time() {
    
    seconds.textContent -= 1;

    if(days.textContent == 0 && 
        hours.textContent == 0 && 
        minutes.textContent == 0 && 
        seconds.textContent == 0){
            clearInterval(id) 
    }

    if((hours.textContent == 0 && (hours.textContent == 0 && seconds.textContent == 0)) && days.textContent != 0){
        days.textContent -= 1;
        hours.textContent = 23
        minutes.textContent = 59
        seconds.textContent = 59;
    }

    if(minutes.textContent == 0 && hours.textContent != 0){
        hours.textContent -= 1;
        minutes.textContent = 59;
    }

    if(seconds.textContent == 0 && minutes.textContent !=0){
        minutes.textContent -= 1;
        seconds.textContent = 59;
    }

    
    

}

const id = setInterval(time, 1000)

