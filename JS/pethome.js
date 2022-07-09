

//DOM and Event Listeners
let btnIncPlay = document.querySelector('.incPlay');
let input = document.querySelector('.Play');

btnIncPlay.addEventListener('click', () => {
    input.value = parseInt(input.value) - 1;
    let element = document.body;
    element.classList.toggle("play-mode");
  
});

let btnIncFeed = document.querySelector('.incFeed');
let input1 = document.querySelector('.Feed');

btnIncFeed.addEventListener('click', () => {
    input1.value = parseInt(input1.value) - 1;
});


let btnLightsToggle = document.querySelector('.lightsToggle');
let input2 = document.querySelector('.Lights');

btnLightsToggle.addEventListener('click', () => {
    input2.value = parseInt(input2.value) - 1;
    let element = document.body;
    element.classList.toggle("dark-mode");
});


//timers
setInterval(hungryTab, 4000);
function hungryTab() {
    let element = document.getElementById('timerFeed');
    console.log(element)
    let value = element.value;
    console.log(value);
    value++;
    console.log(value);
    document.getElementById('timerFeed').value = value;
    
}

setInterval(boredomTab, 4000);
function boredomTab() {
    let element = document.getElementById('timerPlay');
    console.log( element)
    let value = element.value;
    console.log(value);
    value++;
    console.log( value);
    document.getElementById('timerPlay').value = value;
}

setInterval(sleepyTab, 4000);
function sleepyTab() {
    let element = document.getElementById('timerLights');
    console.log(element)
    let value = element.value;
    console.log(value);
    value++;
    console.log( value);
    document.getElementById('timerLights').value = value;
}

setInterval(ageTab, 10000);
function ageTab() {
    let element = document.getElementById('age');
    console.log(element)
    let value = element.innerHTML;
    console.log(value);
    value++;
    console.log( value);
    document.getElementById('age').innerHTML = value;
    
}

let intervalID;
let timer = document.getElementById('timerLights')

const timerStop = () => {
    clearInterval(intervalID)
timer.value =10;
}




//



/////// timer (needs to be revisited)////


/////////////////////////////////////////////////////////

/*const ageText = document.querySelector('Play');
const startPlay = document.querySelector('incPlay');

let count = 0;

startPlay.addEventListener('click', function() {
    setInterval(function() {
        count += 1;
    ageText.textContent = count;
}, 1000);
});









/*btnIncPlay.addEventListener('click', () => {
    press (
        if (input.value)
    )
    let timer = setInterval(press, 2000);

    })



//classes 
class Game {
    constructor (name, boredom, hunger, sleepiness, age){
        this.name = name,
        this.boredom = boredom,
        this.hunger = hunger,
        this. sleepiness = sleepiness,
        this. age = age
    }
}

  setInterval(timer, 3000);
    function timer() {
    let element = document.getElementsBy('Play');
    let value = element.innerHTML;
    ++value;
    console.log(value)
    document.getElementsByClassName('Play').innerHTML = value;}
    /*

//feeding toggle
setInterval(incFeed, 3000);
function incFeed() {
    let element = document.getElementById('feedMe');
    let value = element.innerHTML;
    ++value;
    console.log(value);
    document.getElementById('feedMe').innerHTML = value;
}
//lights toggle
setInterval(lights, 3000);
function lights() {
    let element = document.getElementById('lightsToggle');
    let value = element.innerHTML;
    ++value;
    console.log(value)
    document.getElementById('lightsToggle').innerHTML = value;
}
function lightsOnOff() {
    let element = document.body;
    element.classList.toggle("dark-mode");


//conditions

//Array of Functions

//if (this.incPlay[value] >= 10) {
  //  alert( "Your pet has died and gone to pet heaven!")
//this.value -=10;


setInterval(incPlay, 3000);
    function incPlay() {
    let element = document.getElementById('letsPlay');
    let value = element.innerHTML;
    ++value;
    console.log(value)
    document.getElementById('letsPlay').innerHTML = value;
    }*/
