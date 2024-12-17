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

  // change 2nd word color
  const paragraph = document.querySelector(".logo-img span");
  if (paragraph) {
    const words = paragraph.innerText.split(" ");
    words[1] = `<span class="secondary">${words[1]}</span>`;
    paragraph.innerHTML = words.join(" ");
  }

  const select = document.querySelector(".form-select");
  if (select) {
    document.querySelectorAll("select").forEach(function (select) {
      const numberOfOptions = select.options.length;
    
      // إخفاء الـ <select> الأصلي
      select.classList.add("select-hidden");
    
      // إنشاء الهيكل الخاص بـ select-styled
      const wrapper = document.createElement("div");
      wrapper.classList.add("select");
      select.parentNode.insertBefore(wrapper, select);
      wrapper.appendChild(select);
    
      const styledSelect = document.createElement("div");
      styledSelect.classList.add("select-styled");
      styledSelect.textContent = select.options[0].textContent;
      wrapper.appendChild(styledSelect);
    
      const optionsList = document.createElement("ul");
      optionsList.classList.add("select-options");
      wrapper.appendChild(optionsList);
    
      // إضافة الخيارات إلى القائمة المخصصة
      Array.from(select.options).forEach((option, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = option.textContent;
        listItem.setAttribute("rel", option.value);
        optionsList.appendChild(listItem);
    
        if (option.selected) {
          listItem.classList.add("is-selected");
        }
      });
    
      const listItems = optionsList.querySelectorAll("li");
    
      // عند الضغط على العنصر المخصص
      styledSelect.addEventListener("click", function (e) {
        e.stopPropagation();
        document.querySelectorAll("div.select-styled.active").forEach(function (activeStyledSelect) {
          if (activeStyledSelect !== styledSelect) {
            activeStyledSelect.classList.remove("active");
            activeStyledSelect.nextElementSibling.style.display = "none";
          }
        });
    
        styledSelect.classList.toggle("active");
        optionsList.style.display = styledSelect.classList.contains("active") ? "block" : "none";
      });
    
      // عند اختيار عنصر من القائمة
      listItems.forEach(function (listItem) {
        listItem.addEventListener("click", function (e) {
          e.stopPropagation();
          styledSelect.textContent = listItem.textContent;
          styledSelect.classList.remove("active");
    
          select.value = listItem.getAttribute("rel");
    
          optionsList.querySelectorAll("li.is-selected").forEach(function (selectedItem) {
            selectedItem.classList.remove("is-selected");
          });
          listItem.classList.add("is-selected");
    
          optionsList.style.display = "none";
    
          // يمكنك إضافة أي شيء هنا مثل: console.log(select.value);
        });
      });
    
      // عند الضغط خارج العنصر
      document.addEventListener("click", function () {
        styledSelect.classList.remove("active");
        optionsList.style.display = "none";
      });
    });
  }

  function equalizeSlideHeights() {
    const slides = document.querySelectorAll('.swiper-slide');
    let maxHeight = 0;
  
    // حساب أطول عنصر
    slides.forEach(slide => {
      const pricingCard = slide.querySelector('.pricing-card');
      if (pricingCard) { // التحقق من وجود العنصر
        const contentHeight = pricingCard.offsetHeight;
        if (contentHeight > maxHeight) {
          maxHeight = contentHeight;
        }
      }
    });
  
    // تطبيق الطول على جميع العناصر
    slides.forEach(slide => {
      const pricingCard = slide.querySelector('.pricing-card');
      if (pricingCard) { // التحقق من وجود العنصر
        pricingCard.style.height = `${maxHeight}px`;
      }
    });
  }
  

  // sliders
  const swiper = new Swiper('.swiper', {
    on: {
      init: equalizeSlideHeights,
      slideChange: equalizeSlideHeights,
    },
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