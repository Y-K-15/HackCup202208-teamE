//ハンバーガーメニュー
$(function () {
  $(".window").on("click", function () {
    let rightVal = 0;
    if ($(this).hasClass("open")) {
      rightVal = -1400;

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
const quizText = document.getElementById("quiz-text");
const quizImage = document.getElementById("quiz-image");
const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const choice3 = document.getElementById("choice-3");
const feedback = document.getElementById("feedback");
const nextQuizButton = document.getElementById("next-quiz");

let quizNumber = 0;
const quizzes = [
  {
    text: "この人物の名前は何でしょう？",
    image: "../../images/img05.jpg",
    choices: [
      {
        text: "ジェフ・ベゾス",
        isCorrect: false,
        feedback: "残念！ジェフ・ベゾスはアマゾンの創設者です。",
      },
      {
        text: "マークザッカーバーグ",
        isCorrect: true,
        feedback: "正解! マークザッカーバーグはTwitteerの創設者です。",
      },
      {
        text: "ラリー・ペイジ",
        isCorrect: false,
        feedback: "残念! ラリー・ペイジはGoogleの創設者です。",
      },
    ],
  },
  {
    text: "プログラミング言語の人気ナンバーワンは？",
    image: "../../images/img06.png",
    choices: [
      {
        text: "Java",
        isCorrect: false,
        feedback: "残念! Javaは4位です。",
      },
      {
        text: "JavaScript",
        isCorrect: false,
        feedback: "残念! JavaScriptは2位です！",
      },
      {
        text: "python",
        isCorrect: true,
        feedback:
          "正解！3割以上のエンジニアがPythonを何らかの業務に使っているそうです。",
      },
    ],
  },
  {
    text: "しゃっくりはある調味料をなめると止まります。ある調味料とは何でしょう？",
    image: "../../images/img07.jpg",
    choices: [
      {
        text: "お酢",
        isCorrect: false,
        feedback: "残念！よく言われていますが、迷信のようです。",
      },
      {
        text: "砂糖",
        isCorrect: true,
        feedback:
          "正解！しゃっくりは体の中の「横隔膜」で起きる痙攣です。甘いものを食べると喉が刺激を受けて横隔膜の痙攣が止まって、しゃっくりが止まるといわれています。",
      },
      {
        text: "塩",
        isCorrect: false,
        feedback: "残念！塩はあまり聞かないですね...",
      },
    ],
  },
  {
    text: "今年の夏の甲子園優勝高は？",
    image: "../../images/img08.jpg",
    choices: [
      {
        text: "仙台育英",
        isCorrect: true,
        feedback: "正解！。初優勝でした！！",
      },
      {
        text: "大阪桐蔭",
        isCorrect: false,
        feedback: "残念。大阪桐蔭はセンバツ高校野球の優勝校です。",
      },
      {
        text: "花巻東",
        isCorrect: false,
        feedback: "残念! ちなみに大谷翔平選手の出身高です。",
      },
    ],
  },
  {
    text: "ファミレスで一番店舗数が多いのは？",
    image: "../../images/img09.png",
    choices: [
      {
        text: "サイゼリヤ",
        isCorrect: false,
        feedback: "残念！2番目です。",
      },
      {
        text: "ガスト",
        isCorrect: true,
        feedback:
          "正解!スカイラークグループが展開する日本最大のファミレスです。",
      },
      {
        text: "デニーズ",
        isCorrect: false,
        feedback: "残念!ファミリー層を意識したサービスが特徴です",
      },
    ],
  },
  {
    text: "「最初はグー」を流行らせた人は次の内誰？",
    image: "../../images/img10.jpg",
    choices: [
      {
        text: "志村けん",
        isCorrect: true,
        feedback:
          "正解！コント番組「8時だョ！全員集合」の中でのじゃんけんがきっかけで世に広まりました。",
      },
      {
        text: "明石家さんま",
        isCorrect: false,
        feedback: "残念!",
      },
      {
        text: "タモリ",
        isCorrect: false,
        feedback: "残念!",
      },
    ],
  },
];

const reloadQuiz = function (quizNumber) {
  const quiz = quizzes[quizNumber];

  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text;

  // 画像を表示
  quizImage.src = "../../images/" + quiz.image;

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz.choices[0].text;
  choice2.textContent = quiz.choices[1].text;
  choice3.textContent = quiz.choices[2].text;

  // フィードバックを削除
  feedback.textContent = "";

  // 次の問題ボタンを隠す
  nextQuizButton.classList.add("hidden");
};

// 共通の処理②
// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  // quizzes[quizNumber].choices[choiceNumber] は使いまわすので、定数に入れておく
  const choice = quizzes[quizNumber].choices[choiceNumber];

  // フィードバックを表示
  feedback.textContent = choice.feedback;

  // 正解ならば……
  if (choice.isCorrect) {
    if (quizNumber < quizzes.length - 1) {
      // 次の問題があれば、次の問題ボタンを表示
      nextQuizButton.classList.remove("hidden");
    } else {
      // 次の問題がなければ、結果を表示
    }
  }
};

choice1.onclick = function () {
  // 0番目の選択肢を選択
  choose(0);
};
choice2.onclick = function () {
  // 1番目の選択肢を選択
  choose(1);
};
choice3.onclick = function () {
  // 2番目の選択肢を選択
  choose(2);
};

// 次の問題ボタンを押したら
nextQuizButton.onclick = function () {
  // 問題番号を１増やす
  quizNumber += 1;
  // quizNumber番目の問題を読み込む
  reloadQuiz(quizNumber);
};

// 0番目のクイズを表示
reloadQuiz(0);
