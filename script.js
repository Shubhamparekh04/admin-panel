// navbar links mouseover-leave color effect
$("#span1,#span2").on("mouseenter", function () {
  $(this).css("color", "white");
});
$("#span1,#span2").on("mouseleave", function () {
  $(this).css("color", "#B2EBF2");
});
// //navbar links hover color effect


// sidebar button click which one to show
$("#content>div").hide();
$("#dashboard").show();
$("#sidebar button").on("click", function () {
  $("#content>div, .model1 , .modelbg").hide();
  $($(this).attr("for")).show();

  if($(this).attr("for")==="#tables"){
    $("#tables>img").attr("src","https://picsum.photos/999/512");
    $($(this).attr("for")).show();
  }
});
// //sidebar button click which one to show

// sidebar hide show
$("#menu").on("click", function () {
  $("#sidebar").toggle("linear", function () {
    $("#content").css("width", "100%");
    $(".model1 , .modelbg").hide();
  });
});
// //sidebar hide show


// popup
$(".model1,.modelbg").hide();
$(".fa-spider").on("click", function () {
  $(".model1,.modelbg").toggle();
});
// //popup



// //chart
(async function() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];
  
  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'radar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();
// //chart
