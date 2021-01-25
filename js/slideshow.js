var currentSlide = 0;

var slides = document.getElementsByClassName("slide");

function nextslide() {

    // Remove the 'visible' to hide the slide
    slides[currentSlide].classList.remove("visible");

    if (currentSlide == slides.length-1) {
        // Reset the counter to 0 (first slide)
        currentSlide = 0;

    } else {
        currentSlide +=1;
    }

    // Next slide
    slides[currentSlide].classList.add("visible");
}

setInterval(nextSlide, 3000);
