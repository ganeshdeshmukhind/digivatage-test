
    // $("#rangea").slider({
    //     range: "min",
    //     min: 0,
    //     max: 20,
    //     value: 10,
    //     slide: function(e, ui) {
    //       return $("#rangea .ui-slider-handle").html(ui.value);
    //     }
    //   });
    //   $("#rangea .ui-slider-handle").html("10");
      
    //   $("#rangeb").slider({
    //     range: "min",
    //     min: 0,
    //     max: 20,
    //     value: 10,
    //     slide: function(e, ui) {
    //       return $("#rangeb .ui-slider-handle").html(ui.value);
    //     }
    //   });
    //   $("#rangeb .ui-slider-handle").html("10");



  document.querySelector(".selectDropdown select").onchange = function () { document.querySelector(".selectDropdown").classList.add("selected"); };


  $('.objectiveSlider').owlCarousel({
      loop: true,
      dots: false,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      nav: true,
      autoplay: true,
      responsive: {
          0: {
              items: 1,
              margin: 0,
          },
          600: {
            items: 2,
            margin:10,
        },
          768: {
              items:3,
              margin: 10,
          },

          991: {
              items: 4,
              margin: 15,
          },

          1200: {
              items: 5,
              margin: 16
          }
      }
  })

  $(".hamburgerIcon, .mobileMenu .close").click(function(){
    $(".mobileMenu").toggleClass("active");
})
$(".form-close, .callBack-btn").click(function(){
    $(".callBackForm-box").toggleClass("active");
})