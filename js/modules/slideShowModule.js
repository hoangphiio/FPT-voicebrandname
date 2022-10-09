let slideIndex = 0;
slideShowModule();
export default function slideShowModule() {
  let i;
  let slides = document.getElementsByClassName("slide-box-inner");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(slideShowModule,4000); // Change image every 2 seconds
}
