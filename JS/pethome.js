
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


//timers - set and clear
let food= setInterval(hungryTab, 3000);
function hungryTab() {
    let element = document.getElementById('timerFeed');
    let value = element.value;
    value++;
    document.getElementById('timerFeed').value = value;
    if (value === 10){clearInterval(food); {
        alert("Oh no! Your pet died from starvation!");
        gameOver()
    };}
   }


let fun= setInterval(boredomTab, 4000);
function boredomTab() {
    let element = document.getElementById('timerPlay');
    let value = element.value;
    value++;
    console.log(value);
    document.getElementById('timerPlay').value = value;
    if (value === 10) {clearInterval(fun); {
    alert("Oh no! Your pet died from neglect!");
    gameOver()
};}
}

let sleep = setInterval(sleepyTab, 2000);
function sleepyTab() {
    let element = document.getElementById('timerLights');
    let value = element.value;
    value++;
    document.getElementById('timerLights').value = value;
    if (value === 10)
    {clearInterval(sleep); {
    alert("Oh no! Your pet died from sleep deprivation!");
    gameOver()
};}}



// Age//
setInterval(ageTab, 10000);
function ageTab() {
    let element = document.getElementById('age');
    console.log(element)
    let value = element.innerHTML;
    value++;
    if (value == 3) {
        alert("Yay! your pet has grown into a teenager!")
        document.querySelector(".gotchi").src = "CSS/teen.png"}
    if (value == 9) {
        alert("Yay! your pet has grown into an adult!")
        document.querySelector(".gotchi").src = "CSS/adult.png"
    }
    
    document.getElementById('age').innerHTML = value;
}


function gameOver() {
    let game = document.getElementById('timerLights', 'timerPlay', 'timerFeed').innerHTML = value;
    if (game == 10) {
        clearInterval(game.value);
        document.querySelector(".gotchi").src = "CSS/dead-g1ca0d534f_1280.png"
        
    }}


// Classes 
/*class babyPet {
    constructor(name, hunger, sleepiness, age){
        this.name = name;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.age = age;
    }}

let teenPet = new babyPet()
//let grownupPet = new babyPet (teenager, hunger, sleepiness, 5);

class babyPet extends teenPet {
    constructor(name, hunger, sleepiness, age){
        super(name, hunger, sleepiness, boredom, age)
        this.name = name;
        this.hunger = hunger;
    }}*/
