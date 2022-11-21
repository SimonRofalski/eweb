$("#navigation a").on("click", function (e) {
  e.preventDefault();
  var hash = this.hash;
  $("html, body").animate(
    {
      scrollTop: $(this.hash).offset().top,
    },
    1000
  );
});

$(".toggler, .nav-content a:not(#dropdown-link)").on("click", function () {
  $(".toggler").toggleClass("change");
  $(".nav-content").slideToggle();
  $("#dropdown-menu").slideUp();
  $(".menu-overlay").toggle();
});

$(".nav-content .dropdown").on("click", function () {
  $("#dropdown-menu").slideToggle();
});

$(".menu-overlay").on("click", function () {
  $(".toggler").removeClass("change");
  $(".nav-content").slideUp();
  $("#dropdown-menu").slideUp();
  $(".menu-overlay").hide();
});

const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Arbeiten", "Studium"],
    datasets: [
      {
        label: "Pensum in %",
        data: [60, 40],
        borderWidth: 0.5,
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 6,
        hoverBorderJoinStyle: "bevel",
      },
    ],
  },
});
