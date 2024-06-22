let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
} 

let messages = [
  "This is the first message.\nIt has multiple lines.\nLine three.",
            "This is the second message.\nAnother line here.\nAnd another one.",
            "This is the third message.\nYet another set of lines.\nLine three again.",
            "This is the fourth message.\nMore lines to show.\nLine three here too."
];
let currentIndex = 0;

function displayMessage(index) {
  const scrollText = document.getElementById('scroll-text');
  scrollText.innerHTML = messages[index];
  scrollText.style.animation = 'none'; // Reset animation
  scrollText.offsetHeight; // Trigger reflow
  scrollText.style.animation = ''; // Restart animation
}

function nextMessage() {
  currentIndex = (currentIndex + 1) % messages.length;
  displayMessage(currentIndex);
}

function previousMessage() {
  currentIndex = (currentIndex - 1 + messages.length) % messages.length;
  displayMessage(currentIndex);
}

// Initially display the first message
window.onload = function() {
  displayMessage(currentIndex);
}