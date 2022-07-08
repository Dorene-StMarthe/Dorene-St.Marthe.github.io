
//playtime toggle
function incPlay() {
    let element = document.getElementById('letsPlay');
    let value = element.innerHTML;
    ++value;
    console.log(value)
    document.getElementById('letsPlay').innerHTML = value;
}
//feeding toggle
function incFeed() {
    let element = document.getElementById('feedMe');
    let value = element.innerHTML;
    ++value;
    console.log(value)
    document.getElementById('feedMe').innerHTML = value;
}
//lights toggle
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
const game = [
    incPlay,
    incFeed,
    lights,
    lightsOnOff,
]

if (i >= 10 ) {
    alert("Your pet has died and gone to pet heaven!");
}