// $('.owl-carousel').addClass('owl-rtl')
// $('html').attr('dir', 'rtl');
// $('html').attr('lang', 'ar');
// $('link[href="css/bootstrap.min.css"]').attr('href', 'css/bootstrap.rtl.min.css');
document.addEventListener('DOMContentLoaded', () => {
  // Determine text direction
  const bodyDir = window.getComputedStyle(document.body).direction;
  const dirAr = bodyDir === "rtl";
  
  // make navbar fixed while scrolling
  window.addEventListener("scroll", () =>
    document.getElementById("mainNav").classList.toggle("fixed", window.scrollY > 40)
  );
  
  // Scroll to the top of the page
  window.addEventListener('scroll', () => {
    document.getElementById('scrollUp').style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  const paragraph = document.querySelector(".logo-img span");
  if (paragraph) {
    const words = paragraph.innerText.split(" ");
    words[1] = `<span class="secondary">${words[1]}</span>`;
    paragraph.innerHTML = words.join(" ");
  }

  // sliders
  const pricing = new Swiper('.pricing .swiper', {
    rtl: dirAr, 
    initialSlide: 1,
    slidesPerView: 3, 
    spaceBetween: 32,
    centeredSlides: true,

    breakpoints: {
      320: {
        slidesPerView: 1.2, 
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 3, 
        simulateTouch: false,  
        touchMoveStopPropagation: false,
      },
    },
  });
  const projects = new Swiper('.projects .swiper', {
    rtl: dirAr, 
    initialSlide: 1,
    slidesPerView: 3, 
    spaceBetween: 32,
    centeredSlides: true,

    breakpoints: {
      320: {
        slidesPerView: 1.2, 
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 3, 
        simulateTouch: false,  
        touchMoveStopPropagation: false,
      },
    },
  });
});