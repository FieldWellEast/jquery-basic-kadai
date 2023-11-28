//<button class="btn">クリック</button>
//<input type="text" class="text-box" value="" />

//ボタンをクリックした際に、テキストボックス内に「クリックしました！」と表示されている


$(document).ready(function () {
    $(".btn").click(function () {
      const clickText = "クリックしました！";
      $(".text-box").val(clickText);
    });
  });
