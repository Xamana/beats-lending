/** @format */

function productSlider() {
    changeColor();
  const sliderImages = document.querySelectorAll('.carousel-img');
  const sliderLine = document.querySelector('.product-slider__img');
  const sliderSwitchImg = document.querySelectorAll('.product-slider__item');
  const btnPerv = document.querySelector('.carousel-prev');
  const btnNext = document.querySelector('.carousel-next');

  let sliderCount = 0;
  let sliderWidth = 370;

  btnPerv.addEventListener('click', prevSlide);
  btnNext.addEventListener('click', nextSlide);

  function showSlide() {
    sliderWidth = document.querySelector('.product-slider__carousel').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    // rollSlide();
  }
  showSlide();

  function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) {
      sliderCount = 0;
    }
    rollSlide();
  }

  function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) {
      sliderCount = sliderImages.length - 1;
    }
    rollSlide();
  }

  function rollSlide() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
  }

  function currentSlide(index) {
    sliderSwitchImg.forEach((item, i) => {
      item.classList.remove('active');
    });
    sliderSwitchImg[index].classList.add('active');
  }

  sliderSwitchImg.forEach((item, i) => {
    item.addEventListener('click', () => {
      sliderCount = i;
      rollSlide();
      currentSlide(i);
    });
  });
}

function changeColor() {
    
  const allColors = document.querySelectorAll('.all-colors__item');
  const productSlider = document.querySelectorAll('.carousel-img');
  const previewPhoto = document.querySelectorAll('.product-slider__preview');


    const photos = {
        silver: ["./assets/img/products/silver/case.png","./assets/img/products/silver/earphone.png","./assets/img/products/silver/person.png"],
        black: ["./assets/img/products/black/case.png","./assets/img/products/black/earphone.png","./assets/img/products/black/person.png"],
        pink: ["./assets/img/products/pink/case.png","./assets/img/products/pink/earphone.png","./assets/img/products/pink/person.png"],
        white: ["./assets/img/products/white/case.png","./assets/img/products/white/earphone.png","./assets/img/products/white/person.png"],
    }

  allColors.forEach((item, i) => {
    item.addEventListener('click', () => {
      let color = item.getAttribute('color');
      changeProduct(color);
    });
  });

  function changeProduct(elem) {
    photos[elem].forEach((item, i) => {
        productSlider[i].src = item
        previewPhoto[i].src = item;
        
    })
  }
  changeProduct("silver")
  
}

function timerController() {
    const descountTimer = document.querySelector('.payment-timer');

    let mockTime = 14400000;
    function msToTime(duration) {
        let milliseconds = Math.floor((duration % 1000) / 100),
          seconds = Math.floor((duration / 1000) % 60),
          minutes = Math.floor((duration / (1000 * 60)) % 60),
          hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
      
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
      
        return `${hours} h : ${minutes} m : ${seconds}.${milliseconds} s`;
    }

    const timer = setInterval(()=> {
        if (mockTime <= 0) {
            clearInterval(timer);
        }
        descountTimer.textContent = msToTime(mockTime)
        mockTime = mockTime - 100;
    }, 100)
}

timerController()


function showInfo() {
  const buttons = document.querySelectorAll('.shipping-item');
  buttons.forEach((item, i) => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
}

function reviewsSlider() {
  const buttons = document.querySelectorAll('.reviews-carousel__item');
  const reviews = document.querySelectorAll('.reviews-item');
  const reviewsList = document.querySelector('.reviews-list');

  let sliderCount = 1;
  let sliderWidth = 290;

  const showSlide = () => {
    reviewsList.style.width = sliderWidth * reviews.length + 'px';
    reviews.forEach((item, i) => {
      item.style.width = sliderWidth + 'px';
    });
    rollSlide();
  };

  showSlide();

  function rollSlide() {
    reviewsList.style.transform = `translateX(-${sliderWidth * sliderCount}px)`;
  }

  function currentSlide(index) {
    buttons.forEach((item, i) => {
      item.classList.remove('active');
    });
    buttons[index].classList.add('active');
  }

  buttons.forEach((item, i) => {
    item.addEventListener('click', () => {
      sliderCount = i;
      rollSlide();
      currentSlide(i);
    });
  });
}

showInfo();
reviewsSlider();

productSlider();

