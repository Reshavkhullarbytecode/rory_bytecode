$(document).ready(function(){
      $('.header-info-row').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        pauseOnHover: false,
        cssEase: 'linear',
        infinite: true,
        responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
      });
    });


$(document).ready(function(){
  $('.reviews_list').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
   arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
     responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
});
			

    });

// close drawer

document.addEventListener('click', function(event) {
  const drawerClose = event.target.closest('.drawer-close');
  const menuDrawer = document.getElementById('Details-menu-drawer-container');
 

  if (drawerClose) {
    menuDrawer.classList.remove('menu-opening');
    menuDrawer.removeAttribute('open');
  }
});


$(document).ready(function(){
  $('.product_reviews_slide_list').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
   arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
     responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
});
			

    });



$(document).ready(function(){
  $('.mobile_slide_list').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
   arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
     responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
});
			

    });






$(document).ready(function() {
    // Function to set height based on content
    function setSlideHeight() {
        var maxHeight = 0;
        $('.review_slide').each(function() {
            var slideHeight = $(this).height();
            if (slideHeight > maxHeight) {
                maxHeight = slideHeight;
            }
        });
        $('.review_slide').height(maxHeight);
    }

    // Set initial height after a 5-second delay
    setTimeout(function() {
        setSlideHeight();
    }, 2000);

    // Set height on window resize
    $(window).resize(function() {
        setSlideHeight();
    });
});
