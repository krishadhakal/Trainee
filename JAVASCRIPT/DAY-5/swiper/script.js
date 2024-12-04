document.addEventListener('DOMContentLoaded', function(){
  // swiper
  const swiper = new Swiper(".travel-swiper", {
    grabCursor: true,
    loop: true,
    speed: 400,
    mousewheel: {
      forceToAxis: true,
      thresholdDelta: 5, //swiper will wait for user to swipe atleast 5 pixels
    },
    scrollbar: {
      el: ".swiper-scrollbar",
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

});