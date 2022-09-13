
  $('.objectiveSlider').owlCarousel({
      loop: true,
      dots: false,
      autoplayTimeout: 5000,
      smartSpeed: 1000,
      autoplayHoverPause: true,
      nav: true,
      autoplay: true,
      responsive: {
        0: {
            items: 1,
            margin: 10,
            center: false
        },
        426: {
              items: 3,
              margin: 0,
              center: true
          },
          768: {
              items:3,
              margin: 10,
              center: false
          },

          991: {
              items: 4,
              margin: 15,
              center: false
          },

          1200: {
              items: 5,
              margin: 16,
              center: false
          }
      }
  })

  $(".hamburgerIcon, .mobileMenu .close").click(function(){
    $(".mobileMenu").toggleClass("active");
})
$(".form-close, .callBack-btn").click(function(){
    $(".callBackForm-box").toggleClass("active");
})


var $range = $(".ageSelect"),
$input = $("#ageInput"),
$range2 = $(".alreadyInsured"),
$input2 = $("#alreadyInsuredInput"),
$range3 = $(".annualIncome"),
$input3 = $("#annualIncomeInput"),
instance,
instance2,
instance3,
min = 18,
max = 60,
min2 = 10,
max2 = 100,
min3 = 10,
max3 = 100,
assuredRupees = ",00,000",
annualIncome = ",00,000";

$("#lakhs1").click(function(){
    assuredRupees = ",00,000";
})
$("#crore1").click(function(){
    assuredRupees = ",00,00,000";
})
$("#lakhs2").click(function(){
    annualIncome = ",00,000";
})
$("#crore2").click(function(){
    annualIncome = ",00,00,000";
})
$range.ionRangeSlider({
min: min,
max: max,
from: 30,
onStart: function(data) {
    $input.prop("value", data.from  + " Years");
},
onChange: function(data) {
    $input.prop("value", data.from + " Years");
}
});
instance = $range.data("ionRangeSlider");
$input.on("change keyup", function() {
let val = $(this).prop("value");
// validate
if (val < min) {
    val = min;
} else if (val > max) {
    val = max;
}
instance.update({
    from: val
});
});


$range2.ionRangeSlider({
min: min2,
max: max2,
from: 36,
onStart: function(data) {
    $input2.prop("value", data.from + assuredRupees);
},
onChange: function(data) {
    $input2.prop("value", data.from + assuredRupees);
}
});
instance2 = $range2.data("ionRangeSlider");
$input2.on("change keyup", function() {
let val2 = $(this).prop("value");
// validate
if (val2 < min2) {
    val2 = min2;
} else if (val2 > max2) {
    val2 = max2;
}
instance2.update({
    from: val2
});
});


$range3.ionRangeSlider({
min: min3,
max: max3,
from: 20,
onStart: function(data) {
    $input3.prop("value", data.from + annualIncome);
},
onChange: function(data) {
    $input3.prop("value", data.from + annualIncome);
}
});
instance3 = $range3.data("ionRangeSlider");
$input3.on("change keyup", function() {
let val3 = $(this).prop("value");
// validate
if (val3 < min3) {
    val3 = min3;
} else if (val3 > max3) {
    val3 = max3;
}
instance2.update({
    from: val3
});
});
