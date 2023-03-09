const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


const mainContainerEl = document.getElementById("main-container");
const imgContainerEl = document.getElementById("img-container");
const playerContainerEl = document.getElementById("player-container");
const descriptionContainerEl = document.getElementById("description");
const upArrowEl = document.getElementById("up-arrow");
const downArrowEl = document.getElementById("down-arrow");

// for each to assign the values to the image container
   images.forEach((element, index) => {
    let activeImage = document.createElement("img");
    activeImage.src = element.image;
    imgContainerEl.append(activeImage);
    activeImage.classList.add("imgBig");

    let title = document.createElement("h2");
    title.textContent = element.title;


    let imageText = document.createElement("p");
    imageText.textContent = element.text;

    if (index == 0) {
        descriptionContainerEl.append(title);
        descriptionContainerEl.append(imageText);
    }
   }) 


// for each to assign the small images to the aside
   images.forEach((smallImage) => {
    let activeImageSmall = document.createElement("img");
    let activeSmallContainer = document.createElement("div");
    activeSmallContainer.append(activeImageSmall);
    activeImageSmall.src = smallImage.image;
    playerContainerEl.append(activeImageSmall);
    activeImageSmall.classList.add("imgSmall");
   }) 



   let activeImageIndex = 0;
   upArrowEl.addEventListener("click", function() {
       activeImageIndex--;
       if (activeImageIndex < 0) {
         activeImageIndex = images.length - 1;
       }
       imgContainerEl.querySelector(".imgBig").src = images[activeImageIndex].image;
       descriptionContainerEl.querySelector("h2").textContent = images[activeImageIndex].title;
       descriptionContainerEl.querySelector("p").textContent = images[activeImageIndex].text;
     });


     
     downArrowEl.addEventListener("click", function() {
        activeImageIndex++;
        if (activeImageIndex >= images.length) {
          activeImageIndex = 0;
        }
        imgContainerEl.querySelector(".imgBig").src = images[activeImageIndex].image;
        descriptionContainerEl.querySelector("h2").textContent = images[activeImageIndex].title;
        descriptionContainerEl.querySelector("p").textContent = images[activeImageIndex].text;
      });
// // event to link the big images to the arrows
//    let activeImageIndex = 0;

//    downArrowEl.addEventListener("click", function(){

//     activeImageIndex++;

//     if (activeImageIndex >= images.length) {
//         activeImageIndex = 0;
//     }

// })



// upArrowEl.addEventListener("click", function(){
//     activeImageIndex--;

//     if (activeImageIndex < 0) {
//         activeImageIndex = images.length - 1;
//     }

// })
 







