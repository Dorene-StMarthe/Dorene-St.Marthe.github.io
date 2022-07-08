function game() {} [
    incPlay,
    incFeed,
    lights,
]

//playtime toggle
setInterval(incPlay, 2000);
    function incPlay() {
    let element = document.getElementById('letsPlay');
    let value = element.innerHTML;
    ++value;
    console.log(value)
    document.getElementById('letsPlay').innerHTML = value;
}

//feeding toggle
setInterval(incFeed, 2000);
function incFeed() {
    let element = document.getElementById('feedMe');
    let value = element.innerHTML;
    ++value;
    console.log(value)
    document.getElementById('feedMe').innerHTML = value;
}
//lights toggle
setInterval(lights, 2000);
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
}



//Array of Functions

//if (this.incPlay[value] >= 10) {
  //  alert( "Your pet has died and gone to pet heaven!")
//this.value -=10;
