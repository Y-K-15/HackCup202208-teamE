//ハンバーガーメニュー
$(function () {
  $(".window").on("click", function () {
    let rightVal = 0;
    if ($(this).hasClass("open")) {
      rightVal = -1700;

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

// スライドショーの画像
let imgList = [
  "../images/img01.jpg",
  "../images/img14.jpg",
  "../images/img03.jpg",
  "../images/img04.jpg",
];

for (let i = 0; i < imgList.length; i++) {
  let slide = document.createElement("li");

  slide.innerHTML = "<img src = '" + imgList[i] + "'>";

  document.getElementsByClassName("slider-inner")[0].appendChild(slide);

  let nav = document.createElement("li");

  nav.setAttribute("data-nav-index", i);

  document.getElementsByClassName("nav")[0].appendChild(nav);
}

let length = imgList.length - 1;

let imageSlide = document
  .getElementsByClassName("slider-inner")[0]
  .getElementsByTagName("li");

let dotNavigation = document
  .getElementsByClassName("nav")[0]
  .getElementsByTagName("li");

let nowIndex = 0;

imageSlide[nowIndex].classList.add("show");
dotNavigation[nowIndex].classList.add("current");

function sliderSlide(val) {
  imageSlide[nowIndex].classList.remove("show");
  dotNavigation[nowIndex].classList.remove("current");
  nowIndex = val;

  imageSlide[nowIndex].classList.add("show");
  dotNavigation[nowIndex].classList.add("current");
}

//左矢印クリック時の処理
document.getElementById("arrow-prev").addEventListener(
  "click",
  function () {
    let index = nowIndex - 1;
    if (index < 0) {
      index = length;
    }
    sliderSlide(index);
  },
  false
);
//右矢印クリック時の処理
document.getElementById("arrow-next").addEventListener(
  "click",
  function () {
    let index = nowIndex + 1;
    if (index > length) {
      index = 0;
    }
    sliderSlide(index);
  },
  false
);
//ドットクリック時の処理
for (let i = 0; i < dotNavigation.length; i++) {
  dotNavigation[i].addEventListener(
    "click",
    function () {
      let index = Number(this.getAttribute("data-nav-index"));
      sliderSlide(index);
    },
    false
  );
}
