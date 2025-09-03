// banner-slider
$(document).ready(function(){
  $('.banner-slider').slick({
    infinite: true,        
    autoplay: true,        
    autoplaySpeed: 4000,    
    arrows: true,
    slidesToShow:1,
    slidesToScroll:1
  });
  setTimeout(function() {
    $('.banner-slider .slick-prev').html('<img src="image/angle-left.png" alt="이전">');
    $('.banner-slider .slick-next').html('<img src="image/angle-right.png" alt="다음">');
  }, 0);
});
$(window).on('resize', function () {
  $('.banner-slider').slick('setPosition');
});

// best-slider
$(document).ready(function(){
  $('.best-slider').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
    swipeToSlide: true,
    touchThreshold: 3,
    responsive: [
      {
        breakpoint: 1025, 
        settings: {
          slidesToShow: 4,
          arrows: true,
          draggable: true,
          swipeToSlide: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2.5, 
          slidesToScroll: 3,
          arrows: false,
          draggable: true,
          swipeToSlide: true,
          touchThreshold: 3
        }
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 2.2, 
          slidesToScroll: 3,
          arrows: false,
          draggable: true,
          swipeToSlide: true,
          touchThreshold: 3
        }
      }
    ]
  });
  setTimeout(function() {
    $('.best-slider .slick-prev').html('<img src="image/angle-small-left.png" alt="이전">');
    $('.best-slider .slick-next').html('<img src="image/angle-small-right.png" alt="다음">');
  }, 0);
}); 
//resize
$(window).on('resize', function () {
  clearTimeout(window._slickTimer);
  window._slickTimer = setTimeout(function () {
    $('.best-slider').slick('refresh');
    $('.best-slider .slick-prev').html('<img src="image/angle-small-left.png" alt="이전">');
    $('.best-slider .slick-next').html('<img src="image/angle-small-right.png" alt="다음">');
  }, 200);
});

// new-slider
$(document).ready(function(){
  $('.new-slider').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
    swipeToSlide: true,
    touchThreshold: 5,
    responsive: [
      {
        breakpoint: 1025, 
        settings: {
          slidesToShow: 4,
          arrows: true,
          draggable: true,
          swipeToSlide: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2.5, 
          slidesToScroll: 3,
          arrows: false,
          draggable: true,
          swipeToSlide: true,
          touchThreshold: 3
        }
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 2.2, 
          slidesToScroll: 3,
          arrows: false,
          draggable: true,
          swipeToSlide: true,
          touchThreshold: 3
        }
      }
    ]
  });
  setTimeout(function() {
    $('.new-slider .slick-prev').html('<img src="image/angle-small-left.png" alt="이전">');
    $('.new-slider .slick-next').html('<img src="image/angle-small-right.png" alt="다음">');
  }, 0);
}); 
//resize
$(window).on('resize', function () {
  clearTimeout(window._slickNewTimer);
  window._slickNewTimer = setTimeout(function () {
    $('.new-slider').slick('refresh');
    $('.new-slider .slick-prev').html('<img src="image/angle-small-left.png" alt="이전">');
    $('.new-slider .slick-next').html('<img src="image/angle-small-right.png" alt="다음">');
  }, 200);
});


// 사이드바
$(document).ready(function () {
  const menuBtn = $('.menu-toggle');
  const allMenuBox = $('#allMenu_box');
  const burgerIcon = $('.burger-icon');
  const closeIcon = $('.close-icon');
  const overlay = $('.overlay'); // ✅ 추가

  allMenuBox.addClass('hidden');
  closeIcon.hide();

  function closeSidebar() {
    allMenuBox.removeClass('active').addClass('hidden');
    burgerIcon.show();
    closeIcon.hide();
    overlay.hide(); // 

    $('body').css({ overflow: '', height: '', position: '', width: '' });
  }

  function openSidebar() {
    allMenuBox.removeClass('hidden').addClass('active');
    burgerIcon.hide();
    closeIcon.show();
    overlay.show(); // 

    $('body').css({ overflow: 'hidden', height: '100vh', position: 'fixed', width: '100%' });
  }

  menuBtn.click(function () {
    if (allMenuBox.hasClass('active')) {
      closeSidebar(); 
    } else {
      openSidebar(); 
    }
  });

  overlay.click(function () {
    closeSidebar();
  });
});


//문화소식
function initCultureSlider() {
  const $culture = $('.culture-list');
  const winWidth = $(window).width();

  if ($culture.hasClass('slick-initialized')) {
    $culture.slick('unslick');
  }

  if (winWidth <= 1024) {
    $culture.slick({
      infinite: false,
      arrows: false,
      swipeToSlide: true,
      draggable: true,
      slidesToShow: 4,
      responsive: [
        { breakpoint: 821,  settings: { slidesToShow: 2.4 } }, 
        { breakpoint: 767,  settings: { slidesToShow: 1.2 } }, 
        { breakpoint: 390,  settings: { slidesToShow: 1.2 } } 
      ]
    });
  }
}
$(document).ready(function () {
  initCultureSlider();
});
$(window).on('resize', function () {
  clearTimeout(window._slickCultureTimer);
  window._slickCultureTimer = setTimeout(function () {
    initCultureSlider();
  }, 100);
});


//footer-mobile 앱
$(document).ready(function () {
  $('.footer-mobile li a').click(function (e) {
    e.preventDefault();

    const $li = $(this).closest('li');
    const page = $li.data('page');

    localStorage.setItem('activeFooterTab', page);

    if (page === 'home') location.href = 'index.html';
    else if (page === 'search') location.href = 'Searchpage.html';
    else if (page === 'history') location.href = ''; 
    else if (page === 'profile') location.href = 'mypage.html';
  });

  const savedTab = localStorage.getItem('activeFooterTab') || 'home';

  $('.footer-mobile li').removeClass('active').each(function () {
    const p = $(this).data('page');
    $(this).find('img').attr('src', `image/footerIcon-${p}-gray.png`);
  });

  const $activeLi = $(`.footer-mobile li[data-page="${savedTab}"]`);
  $activeLi.addClass('active');
  $activeLi.find('img').attr('src', `image/footerIcon-${savedTab}-white.png`);
});


// 마이페이지
$('.status-tabs .tab-item').on('click', function () {
  $('.status-tabs .tab-item').removeClass('active');
  $(this).addClass('active');

  const index = $(this).closest('li').index();
  $('.book-card-list, .reservation-box, .hope-box, .history-box').addClass('hidden');
  if (index === 0) $('.book-card-list').removeClass('hidden');
  else if (index === 1) $('.reservation-box').removeClass('hidden');
  else if (index === 2) $('.hope-box').removeClass('hidden');
  else if (index === 3) $('.history-box').removeClass('hidden');
});












