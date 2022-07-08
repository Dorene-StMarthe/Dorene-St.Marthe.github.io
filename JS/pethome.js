



setInterval ("increaseNumber()", 2000);
function increaseNumber (){
    let element = document.getElementsByClassName('Play');
    let value = element.innerHTML;
    ++value;
    console.log(value)
    document.getElementsByClassName('Play').innerHTML = value;
    
}
    
//
let btnIncPlay = document.querySelector('#incPlay');
let input = document.querySelector('.Play');

btnIncPlay.addEventListener('click', () => {
    input.value = parseInt(input.value) - 1;
});


let btnIncFeed = document.querySelector('#incFeed');
let input1 = document.querySelector('.Feed');

btnIncFeed.addEventListener('click', () => {
    input1.value = parseInt(input1.value) - 1;
});


let btnLightsToggle = document.querySelector('#lightsToggle');
let input2 = document.querySelector('.Lights');

btnLightsToggle.addEventListener('click', () => {
    input2.value = parseInt(input2.value) - 1;
    let element = document.body;
    element.classList.toggle("dark-mode");
});

//







/*setInterval(incPlay, 3000);
    function incPlay() {
    let element = document.getElementById('incPlay');
    let value = element.innerHTML;
    ++value;
    console.log(value)
    document.getElementById('inPlay').innerHTML = value;}

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
