
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
    console.log(element)
    let value = element.value;
    value++;
    document.getElementById('timerFeed').value = value;
    if (value === 10){clearInterval(food); {
        alert("Oh no! Your pet died from starvation!");
    };}
   }


let fun= setInterval(boredomTab, 4000);
function boredomTab() {
    let element = document.getElementById('timerPlay');
    console.log( element)
    let value = element.value;
    console.log(value);
    value++;
    console.log(value);
    document.getElementById('timerPlay').value = value;
    if (value === 10) {clearInterval(fun); {
    alert("Oh no! Your pet died from neglect!");
};}
}

let sleep = setInterval(sleepyTab, 5000);
function sleepyTab() {
    let element = document.getElementById('timerLights');
    console.log(element)
    let value = element.value;
    console.log(value);
    value++;
    document.getElementById('timerLights').value = value;
    if (value === 10){clearInterval(sleep); {
    alert("Oh no! Your pet died from sleep deprivation!");
};}}

// Age//
setInterval(ageTab, 10000);
function ageTab() {
    let element = document.getElementById('age');
    console.log(element)
    let value = element.innerHTML;
    console.log(value);
    value++;
    console.log( value);
    if (value == 5) {
        alert("Yay! your pet has grown into a teenager!")
        document.querySelector(".gotchi").src = "CSS/teen.png"}
    if (value == 10) {
        alert("Yay! your pet has grown into an adult!")
        document.querySelector(".gotchi").src = "CSS/adult.png"
    }
    document.getElementById('age').innerHTML = value;
}




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
