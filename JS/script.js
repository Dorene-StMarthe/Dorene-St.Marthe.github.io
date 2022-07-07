
const enter = document.querySelector('#enter');
enter.addEventListener('click', () => {

alert("Hi! Congratulations on adopting your tamagotchi pet!");
alert("Here at Gotchi-Pets, we strive to match each pet with their perfect pet-mate!");

let person = prompt("What is your name?");

alert("Hello, " + person + " your new pet-mate is so excited to play and spend time with you!");
alert("Before we let you go, there are a few things you should know to keep your pet happy.");
alert("Your pet loves to eat, sleep and play all day. Keep each of their levels up by interacting with them to prevent them from dying");

let pet = prompt("Have Fun! What shall you name your pet?")

playGame("Awesome! Take good care of " + pet + " !");

function playGame(){
  let result = confirm( "Awesome name! Are you ready to take " + pet + " home?!");
  if (result == false) {
    event.preventDefault();
  }}

});





//Next steps:
// Need to onclick to home base and add css animation for pet. align left to right
//Need to add in 