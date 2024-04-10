// $("#dashboard,#forms,#tables,#charts,#icons,#uielements,#authentication,#pages,#users,#settings").css("display", "none");
// // 1
// $("#dashboardBtn").on("click", function () {
//   $("#forms,#tables,#charts,#icons,#uielements,#authentication,#pages,#users,#settings").css("display", "none");
//   $("#dashboard").css("display", "block");
// });
// // 2
// $("#formsBtn").on("click", function () {
//   $("#dashboard,#tables,#charts,#icons,#uielements,#authentication,#pages,#users,#settings").css("display", "none");
//   $("#forms").css("display", "block");
// });

// // 3
// $("#tablesBtn").on("click", function () {
//   $("#dashboard,#forms,#charts,#icons,#uielements,#authentication,#pages,#users,#settings").css("display", "none");
//   $("#tables").css("display", "block");
// });

// // 4
// $("#chartsBtn").on("click", function () {
//     $("#dashboard,#forms,#tables,#icons,#uielements,#authentication,#pages,#users,#settings").css("display", "none");
//     $("#charts").css("display", "block");
//   });
// // 5
// $("#iconsBtn").on("click", function () {
//     $("#dashboard,#forms,#tables,#charts,#uielements,#authentication,#pages,#users,#settings").css("display", "none");
//     $("#icons").css("display", "block");
//   });
// // 6
// $("#uiBtn").on("click", function () {
//     $("#dashboard,#forms,#tables,#charts,#icons,#authentication,#pages,#users,#settings").css("display", "none");
//     $("#uielements").css("display", "block");
//   });
// // 7
// $("#authBtn").on("click", function () {
//     $("#dashboard,#forms,#tables,#charts,#icons,#uielements,#pages,#users,#settings").css("display", "none");
//     $("#authentication").css("display", "block");
//   });
// // 8
// $("#pagesBtn").on("click", function () {
//     $("#dashboard,#forms,#tables,#charts,#icons,#uielements,#authentication,#users,#settings").css("display", "none");
//     $("#pages").css("display", "block");
//   });
// // 9
// $("#usersBtn").on("click", function () {
//     $("#dashboard,#forms,#tables,#charts,#icons,#uielements,#authentication,#pages,#settings").css("display", "none");
//     $("#users").css("display", "block");
//   });
// // 10
// $("#settingsBtn").on("click", function () {
//     $("#dashboard,#forms,#tables,#charts,#icons,#uielements,#authentication,#pages,#users").css("display", "none");
//     $("#settings").css("display", "block");
//   });

$("#content>div").hide();
$("#dashboard").show();

$("#sidebar button").on("click", function () {
  $("#content>div").hide();
  $("#" + $(this).attr("for")).show();
});

var hidden = false;

$("#menu").on("click", function () {
  if (hidden === false) {
    $("#sidebar").fadeOut();
    $("#content").css("width", "100%");
    hidden = true;
  } else {
    $("#sidebar").fadeIn();
    $("#content").css("width", "80%");
    hidden=false;
  }
});
