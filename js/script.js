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
const descriptionContainerEl = document.getElementById("description")


// for each to assign the big images to the image container
   images.forEach((bigImage) => {
    let activeImage = document.createElement("img");
    activeImage.src = bigImage.image;
    imgContainerEl.append(activeImage);
    activeImage.classList.add("imgBig")
   }) 

// for each to assign the small images to the aside
   images.forEach((smallImage) => {
    let activeImageSmall = document.createElement("img");
    activeImageSmall.src = smallImage.image;
    playerContainerEl.append(activeImageSmall);
    activeImageSmall.classList.add("imgSmall")
   }) 
 

// creating an array to get the titles of the images
   let title = [];
   title = images.map((imageName)=>{
    return imageName.title
   })

   console.log(title)


// cicle to put every title to the relative image
   for (let i = 0; i < title; i++) {
    let description = document.createElement("h4")
    description.innerHTML = title
    descriptionContainerEl.append(description)
    description.classList.add("description")
   }


   console.log(description)





