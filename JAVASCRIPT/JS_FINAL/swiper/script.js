document.addEventListener('DOMContentLoaded', function(){

  // progress-bar
  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    const height = document.body.scrollHeight - window.innerHeight;
    const progress = (scroll / height) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
  });


  //leadspace
  const leadSpace = document.querySelector('.leadspace');
  const heading = document.querySelector('.leadspace__heading');
  
  const backgrounds = [
    'linear-gradient(0deg, rgba(255, 0, 132, 0.7), rgba(255, 154, 0, 0.7)',
    'linear-gradient(45deg, rgba(0, 212, 255, 0.7), rgba(2, 128, 144, 0.7)',
    'linear-gradient(90deg, rgba(238, 9, 121, 0.7), rgba(255, 106, 0, 0.7)',
    'linear-gradient(135deg, rgba(0, 201, 255, 0.7), rgba(146, 254, 157, 0.7)', 
    'linear-gradient(180deg, rgba(255, 0, 150, 0.7), rgba(0, 47, 255, 0.7)'
  ];

  const textColor = [
    '#000000', '#f0f0f0', 'pink', 'skyblue', 'violet'
  ];

  let currentBgIndex = 0;
  let currentTextIndex = 0;

  function changeBackground() {
    leadSpace.style.background = backgrounds[currentBgIndex];
    heading.style.color = textColor[currentTextIndex];
    currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
    currentTextIndex = (currentTextIndex + 1) % textColor.length;
    // const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    // leadSpace.style.background = randomBg;
    // const randomText = textColor[Math.floor(Math.random() * textColor.length)];
    // heading.style.color = randomText;

    // setTimeout(changeBackground, 5000);
  }

  setInterval(changeBackground, 5000);
  changeBackground();

  // swiper
  const swiper1 = new Swiper('.travel-swiper', {
    grabCursor: true,
    loop: true,
    speed: 400,
    mousewheel: {
      forceToAxis: true,
      thresholdDelta: 5, //swiper will wait for user to swipe atleast 5 pixels
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  // making nav bar fixed on top when the screen is scrolled
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
        $('nav').addClass('nav-fixed');
    } else {
        $('nav').removeClass('nav-fixed');
    }
  });


  // like icon
  const likeBtns = document.querySelectorAll('.post-like');
  likeBtns.forEach((likeBtn)=>{
    likeBtn.addEventListener('click', function(){
      likeBtn.classList.toggle('active');
    });
  });

  // post action controller
  const actionController = document.querySelectorAll('.post-actions-controller');
  actionController.forEach((actionBtn)=>{
    actionBtn.addEventListener('click', function(){
      const targetId = actionBtn.getAttribute('data-target');
      const actionContent = document.getElementById(targetId);
      if(actionContent){
        const isVisible = actionContent.getAttribute('data-visible');
        
        if(isVisible === 'false') {
          actionContent.setAttribute('data-visible', 'true');
        }
        else{
          actionContent.setAttribute('data-visible', 'false');
        }
      }
    });
  });

  // closing the content by clicking outside
  function clickOutside(event){
    actionController.forEach((actionBtn)=>{
      const targetId = actionBtn.getAttribute('data-target');
      const actionContent = document.getElementById(targetId);

      if(actionContent && actionContent.getAttribute('data-visible') === 'true'){
        if(!actionContent.contains(event.target) && event.target !== actionBtn){
          actionContent.setAttribute('data-visible','false');
        }
      }
    });
  }

  document.addEventListener('click', clickOutside);
  actionController.forEach((actionBtn)=>{
    actionBtn.addEventListener('click',(event)=>{
      event.stopPropagation();
    });
  });

  
  var swiper2 = new Swiper('.mySwiper', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    speed: 800,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      enabled: true,
      delay: 8000
    },  
    fadeEffect: {
      crossFade: true,  // Ensures a smooth fade transition
    },
  });
  var swiper3 = new Swiper('.my-Swiper', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    speed: 800,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


  // Bubble 
  const canvas = document.getElementById('board');
  const ctx = canvas.getContext('2d');

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  // console.log("changes" + canvas.width);


  const colors = [
    'red',
    'blue',
    'green',
    'purple',
    'violet',
    'orange',
    'pink'
  ];

  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  function createBubble(x, y, radius, dx, dy) {
    return{
      x: x,
      y: y,
      radius: radius,
      dx: dx,
      dy: dy,
      color: getRandomColor()
    };
  }

  function drawBubble(bubble) {
    ctx.beginPath();
    ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);

    // Temporary context to get the lightened color
    const tempCtx = canvas.getContext('2d');
    tempCtx.fillStyle = bubble.color;
    tempCtx.fillRect(0, 0, 1, 1);
    const [r, g, b] = tempCtx.getImageData(0, 0, 1, 1).data;
    const lightColor = `rgba(${r},${g},${b},0.5)`;
    
    ctx.fillStyle = lightColor;
    // ctx.fillStyle = bubble.color;
    ctx.fill();
    ctx.closePath();
  }

  function moveBubble(bubble) {
    bubble.x += bubble.dx;
    bubble.y += bubble.dy;

    if((bubble.x - bubble.radius) < 0 || (bubble.x + bubble.radius) > canvas.width) {
      bubble.dx *=  -1;
    }
    if((bubble.y - bubble.radius) < 0 || (bubble.y + bubble.radius) > canvas.height) {
      bubble.dy *=  -1;
    }
  }

  function checkCollision(bubble1, bubble2) {
    const dx = bubble1.x - bubble2.x;
    const dy = bubble1.y - bubble2.y;
    const distance = Math.sqrt((dx * dx) + (dy * dy));

    if(distance < (bubble1.radius + bubble2.radius)) {
      [bubble1.dx, bubble2.dx] = [bubble2.dx, bubble1.dx];
      [bubble1.dy, bubble2.dy] = [bubble2.dy, bubble1.dy];

      bubble1.color = getRandomColor();
      bubble2.color = getRandomColor();
    }
  }

  let bubbles = [
    createBubble(120, 200, 30, 2, -1),
    createBubble(80, 50, 45, -3, 3),
    createBubble(250, 100, 40, 2, 2),
    createBubble(50, 150, 35, 4, -3)
  ];

  function run() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bubbles.forEach((bubble) => {
      moveBubble(bubble);
      drawBubble(bubble);
    });

    for(let i = 0; i < bubbles.length; i++) {
      for(let j = i+1; j < bubbles.length; j++) {
        checkCollision(bubbles[i], bubbles[j]);
      }
    }

    requestAnimationFrame(run);
  }
  run();

  window.addEventListener('resize', debounce(()=>{
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;  
    // console.log(canvas.width);
    bubbles = [];
    bubbles = [
      createBubble(120, 200, 30, 2, -1),
      createBubble(80, 50, 45, -3, 3),
      createBubble(250, 100, 40, 2, 2),
      createBubble(50, 150, 35, 4, -3)
    ];
    // run();
    console.log("debounced");
  }));

  function debounce(func) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, 100);
      console.log('debounce');
    };
    // console.log('debounce');
  }

});