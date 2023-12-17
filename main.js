//navbar


const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const li = document.querySelectorAll("li")
console.log(hamburger)
hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
    li.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",()=>{
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
        li.classList.remove("active")
    }))

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const prevTwo = document.querySelector(".prev-2");
const nextTwo = document.querySelector(".next-2");
const images = document.querySelector(".basic-con").children;
const imagesTwo = document.querySelector(".basic-conTwo").children;

const totalImages = images.length;
let index = 0;

prev.addEventListener("click", ()=>{
newImage("next");
console.log("clicked")
})
next.addEventListener("click", ()=>{
    newImage("prev")
    })

    function newImage(direction) {
        if (direction == "next") {
            index++
            if (index == totalImages) {
                index = 0
            }
        } else {
            if (index == 0) {
                index = totalImages -1;
            } else {
            index--;
        }
    }
        for (let i = 0; i < images.length; i++) {
            images[i].classList.remove("main")
            
        }
        images[index].classList.add("main")
    }

    //second slider

const totalImagesTwo = imagesTwo.length;
let indexTwo = 0;
console.log(totalImagesTwo)
prevTwo.addEventListener("click", ()=>{
nextImage("next");
})
nextTwo.addEventListener("click", ()=>{
    nextImage("prev")
    })

    function nextImage(direction) {
        if (direction == "next") {
            indexTwo++;
            if (indexTwo == totalImagesTwo) {
                indexTwo = 0
            }
        } else {
            if (indexTwo == 0) {
                indexTwo = totalImagesTwo -1;
            } else {
            indexTwo--;
        }
    }
        for (let i = 0; i < imagesTwo.length; i++) {
            imagesTwo[i].classList.remove("main")
            
        }
        imagesTwo[indexTwo].classList.add("main")
    }


//smooth scrolling
$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
