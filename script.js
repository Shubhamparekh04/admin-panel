var visible = false;

function sideCustomization() {
  visible = !visible;

  if (visible) {
    $("#content,nav").css("width", "100%");
    $(".modelbg").css({
      left: "0px",
      top: "55px",
      width: "100%",
      height: "95vh",
      position: "fixed",
    });
    $(".model1").css({ left: "40%", top: "40%" });
    $(".model2").css({ left: "38%", top: "48%" });
  } else {
    $("#content,nav").css("width", "80%");
    $(".modelbg").css({
      left: "282px",
      top: "55px",
      width: "80%",
      height: "91vh",
    });
    $(".model1").css({ left: "50%", top: "30%" });
    $(".model2").css({ left: "48%", top: "28%" });
  }
}

// NAVBAR LINKS HOVER CSS
$("#span1,#span2").on("mouseenter", function () {
  $(this).css("color", "#4EBDEB");
});
$("#span1,#span2").on("mouseleave", function () {
  $(this).css("color", "white");
});

// INITIALLY LOAD ONLY DASHBOARD TO SHOW REST TO BE HIDDEN
$("#content>div").hide();
$("#dashboard").show();

// ON SIDEBAR BUTTON CLICK  SIDEBAR TO BE TOGGLE & CLICKED BUTTON CONTENT TO BE SHOW REST CONTENT & POPUP TO BE HIDE
$("#sidebar>button").on("click", function () {
  $("#sidebar").toggle(0);
  $(".model1 ,.model2, .modelbg").hide();
  $("#content>div").hide();

  // FOR COUNTER TO RUN AGAIN WHEN CLICKED ON DASHBOARD BUTTON
  if ($(this).attr("for") === "#dashboard") {
    location.reload(true);
  } else {
    $($(this).attr("for")).show();
  }

  sideCustomization();
});

// HAMBURGER Menu click-------------------------------------------------------
$("#menu").on("click", function () {
  $("#sidebar").toggle(0);
  $(".model1 ,.model2 , .modelbg").hide();
  sideCustomization();
});

// popup
$(".model1,.model2,.modelbg").hide();

$(".fa-spider").on("click", function () {
  visible = !visible;
  $(".model1,.modelbg").toggle();
  sideCustomization();
  $(".apexcharts-toolbar").css("z-index", "-11");
});

// signup sign in toggle
$("#formbtn > input[type=button]:nth-child(2)").on("click", function () {
  $(".model1").hide();
  $(".model2").show();
});

$("#formbtn2 > input[type=button]:nth-child(2)").on("click", function () {
  $(".model2").hide();
  $(".model1").show();
});

// //chart
(async function () {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(document.getElementById("acquisitions"), {
    type: "radar",
    data: {
      labels: data.map((row) => row.year),
      datasets: [
        {
          label: "Acquisitions by year",
          data: data.map((row) => row.count),
        },
      ],
    },
  });
})();
// //chart

//counter

$(".counter").counter({
  autoStart: true,
  countFrom: 0, // start counting at this number, default: 0
  countTo: 0, // count to this number, default: 0

  onStart: function () {}, // callback on start of the counting
  onComplete: function () {}, // callback on completion of the counting
  // function used to format the displayed numbers.
  numberFormatter: function (number) {
    return "" + ~~number;
  },
});

// DASHBOARD CHARTS

// chart 1
var options = {
  series: [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    height: 230,
    type: "area",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z",
    ],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();

//chart 2
var options = {
  series: [
    {
      name: "Inflation",
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
    },
  ],
  chart: {
    height: 230,
    type: "bar",
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: "top", // top, center, bottom
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: "12px",
      colors: ["#304758"],
    },
  },

  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    position: "top",
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#D8E3F0",
          colorTo: "#BED1E6",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "%";
      },
    },
  },
  title: {
    text: "Year long sales data",
    floating: true,
    offsetY: 330,
    align: "center",
    style: {
      color: "#444",
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();

// calender
var calendarInstance1 = new calendarJs( "calendar", {
  manualEditingEnabled: true
  // All your options can be set here
} );