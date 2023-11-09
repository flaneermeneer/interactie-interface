// JavaScript Document
console.log("Those that tasted the bite of his sword.. named him.. The Doomslayer");
var images = ['./images/cacodemon.png', './images/Cacodemon_64_sprite.png', './images/doom3caco.png', './images/doom4caco.png', './images/doom5caco.png'];
var gifjes = ['./images/anim.gif', './images/doomguy.gif', './images/doomslayer.gif', './images/elemental.gif', './images/gore.gif'];
var titelElement = document.querySelector('h4');
var omschrijvingElement = document.querySelector('p');
let currentIndex = 0;

var body = document.querySelector("body")
//effecten
var gunsound1 = new Audio('sounds/doom1gun.mp3')
var deathsound1 = new Audio('sounds/dscacdth.wav')
//knoppen
var caco = document.querySelector("img")
var btn = document.querySelector("article:nth-of-type(1) > button")
var proceed = document.querySelector("section:first-of-type > button")
var btnyear93 = document.querySelector("button:nth-of-type(2)")
var btnyear96 = document.querySelector("button:nth-of-type(3)")
var btnyear04 = document.querySelector("button:nth-of-type(4)")
var btnyear16 = document.querySelector("button:nth-of-type(5)")
var btnyear20 = document.querySelector("button:nth-of-type(6)")
var verborgenbutton = document.querySelector("section:nth-of-type(3)");
var verborgen = document.querySelector("section:nth-of-type(2)");
var vgdstap = document.querySelector("section:nth-of-type(1)");

var omschrijving = [
  '"They float in the air, belch ball-lightning, and boast one Hell of a big mouth. "' +
  " You are toast if you get too close to these monstrosities. ― Doom & Doom II manual description " +
  " Cacodemons are common demons encountered in all classic Doom games: Doom, Doom II, and Final Doom. They are one of the most common monsters the player will encounter, behind the Imp and the Demon/Spectre. " +
  " Cacodemons are red monsters with large spherical bodies crowned with horns, that float slowly through the air. They have a single green eye over a large mouth which is persistently twisted into a Cheshire cat-like grin, showing a series of nasty teeth and a bluish interior.",

  'The Cacodemons of Doom 64 are resurrected carcasses of those from Doom 1, resurrected by the Mother Demon. They are made from systematically altered dead carnage remade back into corrupted living tissue. The mutations were devastating. The demons have returned stronger and more vicious than before. ' +
  ' They float in the air, belch ball-lightning, and have one horrendously big mouth. If you get too close to one of these monstrosities, you are toast. ' +
  ' It underwent major mutations, becoming beige brown, with a single yellow-green eye, and gaining two arms with broken chains attached, and a rather terrifying face. It resembles the original pain elemental(enemy) from Doom II. ',


  'The Cacodemon in Doom 3 has a very distinct appearance from its classic iteration. Its overall body shape is a lot less spherical, instead taking the appearance of a floating taupe reptilian-like head, with multiple green eyes, a brain clearly visible on the top of its cranium, and long thin tentacles hanging from the bottom of its body. ' +
  ' When alerted by the player, they make a sudden throaty growl, and are characterized by a mysterious whirring sound they make when they are present. ' +
  ' The Doom 3 version of the Cacodemon moves through the air faster than its previous incarnations although it is still pretty slow relative to the player. ' +
  ' Like the original, it fires an energy ball in a straight line.' +
  ' Cacodemons are monstrous psionic demons driven by the desire to feed. They display limited intelligence. ',

  ' The Cacodemons appearance is very similar to its appearance in the original Doom, their most notable features being its single green eye and gaping maw filled with sharp, yellow teeth that takes up the majority of their bodies. The top area of the Cacodemon is covered in red armor plates with spikes similar to the ones the Pinky possesses. Its fleshy underside is unarmored and displays a bulge, which is possibly an extension of the stomach to hold more food in it. The Cacodemon also has four stunted limbs that are now useless. ' +
  ' At distances, the Cacodemon will fire powerful yet slow moving energy blasts. When close enough, the Cacodemon will bite the player, dealing incredible damage. The projectile it hurls can impair the vision of the player, allowing it to get close enough to bite the player.  ',


  ' For the most part, the Cacodemon remains unchanged from its depiction in DOOM, retaining its shriveled legs and misshapen underbelly. However, its back spines and teeth have changed from their dirty yellow in the previous game to a more clean white color, and its body is a lighter shade of red. Its green eye now has a pupil, and it now bleeds blue blood, similar to its original appearance in the classic Doom games. ' +
  ' The Cacodemon will drift quietly towards the player, lobbing balls of purple plasma at him as it attempts to close distance. Occasionally, the Cacodemon will launch three plasma balls in quick succession, which can slow down the player greatly if they all hit. When in close range, the Cacodemon will bite the player, dealing an alarmingly high amount of damage. The Cacodemon is also surprisingly bulky, capable of taking hefty amounts of damage without a flinch. ',
];

var titel = [
  'DooM 1993',
  'DooM 64 1996',
  'DooM 3 2004',
  'DooM 2016',
  'Doom Eternal 2020'
];



var easteregg = [
  'In the classic Doom, the rabbits head is shown in the end picture of Episode 3: Inferno, first in a docile setting, resting in a sunny field, then in an instant turnaround, decapitated and its head impaled on a pike as evidence that the hellspawn have come to Earth. The rabbit is not specifically identified as Doomguys pet at this time.' +
  'In the end picture of Episode 4: Thy Flesh Consumed, the rabbits head reappears in Doomguys hand. It is here that the game mentions "someone was gonna pay for what happened to Daisy, your pet rabbit".'

];
var eastereggtitel = [
  'Daisy'
];

// start knop
proceed.addEventListener('click', () => {

  if (verborgen.style.display === "none", vgdstap.style.display === "none", verborgenbutton.style.display === "none") {
    verborgen.style.display = "grid";
    verborgenbutton.style.display = "none";
    vgdstap.style.display = "none";
  } else {
    verborgen.style.display = "grid";
    vgdstap.style.display = "none";
    verborgenbutton.style.display = "flex";

  }

}
);


function updateImage() {
  caco.src = images[currentIndex];
  caco.alt = titel[currentIndex];
  omschrijvingElement.textContent = omschrijving[currentIndex];
  titelElement.textContent = titel[currentIndex];
}

btn.addEventListener('click', () => {

  caco.src = "./images/gore.gif"
  caco.alt = titel[currentIndex];
  gunsound1.play();

  setTimeout(() => {
    deathsound1.play();
  }, 500); // 
});

function updateInfo(currentIndex) {
  caco.src = images[currentIndex];
  caco.alt = titel[currentIndex];
  omschrijvingElement.textContent = omschrijving[currentIndex];
  titelElement.textContent = titel[currentIndex];
}

//functie per knop
updateImage();
btnyear93.addEventListener('click', () => updateInfo(0));
btnyear96.addEventListener('click', () => updateInfo(1));
btnyear04.addEventListener('click', () => updateInfo(2));
btnyear16.addEventListener('click', () => updateInfo(3));
btnyear20.addEventListener('click', () => updateInfo(4));


// random kans op easteregg
function shouldShowAlternative() {

  var willekeurigheid = Math.random();

  var kans = 0.2;

  return willekeurigheid < kans;
}
//easteregg
btn.addEventListener('click', function () {
  if (shouldShowAlternative()) {

    caco.src = "./images/konijn.gif"
    omschrijvingElement.textContent = easteregg;
    titelElement.textContent = eastereggtitel;

  } else {
    caco.src = "./images/gore.gif"
    caco.alt = titel[currentIndex];
  }
});
