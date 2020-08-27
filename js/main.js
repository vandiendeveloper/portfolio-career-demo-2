$(document).ready(function () {
  var sence = document.getElementById('sence');
  new Parallax(sence)
  $('.development').addClass('active');
  $('.design').addClass('active');
  $('.photography').addClass('active');
  $('.num').counterUp({ delay: 10 });
  $('ul .button').click(function () {
    console.log($(this));
    $(this).addClass('active').siblings().removeClass('active')
  })
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    resizable: true,
  });
  // bind filter button click
  $('.button').click(function () {
    var filterValue = '.' + $(this).attr('data-filter');
    if (filterValue === '.all') {
      $grid.isotope({ filter: '*' });
    } else {
      $grid.isotope({ filter: filterValue });
    }
  });
  // ----reviews slide
  $('.slides-reviews').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  //Client slides
  $('.slides-clients').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  //Jump button
  if (window.scrollY > 0) {
    $('.jump-top a').addClass('active')
  }
  if (window.scrollY === 0) {
    $('.jump-top a').removeClass('active')
  }
  $(window).scroll(() => {
    if (window.scrollY > 0) {
      $('.jump-top a').addClass('active')
    } else {
      $('.jump-top a').removeClass('active')
    }
  });

  // scroll Menu
  var locationList = [$('.home').offset().top, $('.about').offset().top, $('.service').offset().top, $('.experience').offset().top, $('.works').offset().top, $('.blog').offset().top,$('.contact').offset().top]

  $(window).scroll(function () {
    scrollSpy()
    if(window.scrollY >= 5028) {
      $('.menu-div .menu li .link.active').removeClass('active');
      document.querySelectorAll('.menu-div .menu li .link')[6].classList.add('active')
    }
  })
  function scrollSpy() {
    for(var i = 0; i < locationList.length; i++) {
      if(window.scrollY > locationList[i] & window.scrollY < locationList[i+1]) {
        $('.menu-div .menu li .link.active').removeClass('active');
        document.querySelectorAll('.menu-div .menu li .link')[i].classList.add('active')
      }
    }
  }
  scrollSpy();
  $('body').on({
    'touchmove': function (e) {
      console.log('aaa');
      if ($(this).scrollTop() > 0) {
        $('.jump-top a').addClass('active')
      }
      scrollSpy(); 
    },
    'scroll': function (e) {
      if ($(this).scrollTop() == 0) {
        $('.jump-top a').removeClass('active')
      }
    }
  });
});