// Get the scroll-to-top button
var scrollToTopBtn = document.querySelector("#scroll-to-top");

// Add event listener to window scroll
window.addEventListener("scroll", function() {
  // If the user has scrolled down from the top of the document
  if (window.pageYOffset > 100) {
    // Show the button
    scrollToTopBtn.classList.add("show");
  } else {
    // Hide the button
    scrollToTopBtn.classList.remove("show");
  }
});

// Add event listener to the scroll-to-top button
scrollToTopBtn.addEventListener("click", function() {
  // Scroll to the top of the document
  window.scrollTo(0, 0);
});

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2500); // Change image every 2 seconds
// }
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
var loading = false;
var page = 1;

$(window).scroll(function() {
  if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
    if (!loading) {
      loading = true;
      $('#loading').show();
      $.ajax({
        url: 'get_content.php?page=' + page,
        success: function(data) {
          $('#content').append(data);
          page++;
          loading = false;
          $('#loading').hide();
        }
      });
    }
  }
});
$('.clicker').click(function () {
  $('body').toggleClass('overlay');
});