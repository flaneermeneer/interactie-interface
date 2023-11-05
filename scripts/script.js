// JavaScript Document
console.log("Those that tasted the bite of his sword.. named him.. The Doomslayer");
const images = ['./images/cacodemon.png', './images/Cacodemon_64_sprite.png' ,  './images/doom3caco.png',  './images/doom4caco.png',  './images/doom5caco.png'];
const titelElement = document.getElementById('gametitel');
const omschrijvingElement = document.getElementById('omschrijving');
let currentIndex = 0;

var gunsound1 = new Audio('sounds/doom1gun.mp3')
var deathsound1 = new Audio('sounds/dscacdth.wav')

var caco  = document.querySelector(".caco")
var btn  = document.querySelector(".btn")

const omschrijving = [
    '"They float in the air, belch ball-lightning, and boast one Hell of a big mouth."<br><br>' +
     "You are toast if you get too close to these monstrosities. ― Doom & Doom II manual description <br><br>" +
     "Cacodemons are common demons encountered in all classic Doom games: Doom, Doom II, and Final Doom. They are one of the most common monsters the player will encounter, behind the Imp and the Demon/Spectre." +
     "Cacodemons are red monsters with large spherical bodies crowned with horns, that float slowly through the air. They have a single green eye over a large mouth which is persistently twisted into a Cheshire cat-like grin, showing a series of nasty teeth and a bluish interior. If you see their sprite used when you look at it from behind, you can see it appears to have a female genitalia and an anus. However, these two holes in the back of the spite may not be genitals, but holes in the original clay models of the Cacodemon, where pegs may have been inserted for various floating camera angle shots. The Pain Elemental partially re-uses some parts of the Cacodemon sprite, recolored, and it has the same holes as well. This means either all Pain Elementals and Cacodemons are females, or they are simply just holes in the original clay models that were never filled in, either by accident or on purpose. So far, there is no official explanation for these holes, and the same goes for the hole near the Imp's rear end when it dies.",
    'hans is lekker',
    'lekker poepen',
    'Description for Image 4',
    'Description for Image 5'
  ];

const titel = [
    'DooM (1993)',
    'DooM 64 (1997)',
    'DooM 3 (2004)',
    'DooM (2016)',
    'Doom Eternal (2020)'
  ];


// btn.addEventListener('click', function () {

//     caco.src = `./images/anim.gif`

    

// })


function updateImage() {
    caco.src = images[currentIndex];
    caco.alt = `Image ${currentIndex + 1}`;
    omschrijvingElement.textContent = omschrijving[currentIndex];
    titelElement.textContent =titel[currentIndex];
  }
  
btn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
    gunsound1.play();

    setTimeout(() => {
        deathsound1.play();
      }, 500); // 5000 milliseconds = 5 seconds
  });
  

  // Initial image setup
updateImage();