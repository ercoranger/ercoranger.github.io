$(document).ready(function() {
          const autoAdvanceInterval = 3000;

          $(".carousel-container").each(function() {
              const $carouselContainer = $(this);
              const $carousel = $carouselContainer.find(".carousel");
              const $slides = $carousel.find(".carousel-slide");
              let currentIndex = 0;

              function showSlide(index) {
                  if (index < 0) {
                      currentIndex = $slides.length - 1;
                  } else if (index >= $slides.length) {
                      currentIndex = 0;
                  } else {
                      currentIndex = index;
                  }

                  $carousel.css("transform", `translateX(-${currentIndex * 100}%)`);
              }

              setInterval(function() {
                  currentIndex++;
                  showSlide(currentIndex);
              }, autoAdvanceInterval);
          });
      });
