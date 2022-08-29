//ハンバーガーメニュー
$(function () {
  $(".window").on("click", function () {
    let rightVal = 0;
    if ($(this).hasClass("open")) {
      rightVal = -1100;

      $(this).removeClass("open");
    } else {
      $(this).addClass("open");
    }
    $("#navi-inner").stop().animate(
      {
        right: rightVal,
      },
      500
    );
  });
});
