$(document).ready(function () {
  $(window).scroll(() => {
    let pos = $(this).scrollTop();
    if (pos >= 483.20001220703125) {
      $("#nav2").addClass("fixed-top");
    } else {
      $("#nav2").removeClass("fixed-top");
    }
  });

  // Ripples
  $(".banner").ripples({
    dropRadius: 20,
    perturbance: 0.03,
  });
});

$(document).ready(function () {
  $(".button-edit").magnificPopup({
    type: "image",
  });
});
