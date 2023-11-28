//<p id="target">こんにちは！</p>
//<button id="change-color">文字色変化</button>
//<button id="change-text">文字内容変化</button>
//<button id="fade-out">フェードアウト</button>
//<button id="fade-in">フェードイン</button>

$(function () {

    //「文字色変化」ボタンを押した際に、文字色が任意の色に更新されている
    $('#change-color').on('click', function () {
        $('#target').css('color', 'red');
      });

    //「文字内容変化」ボタンを押した際に、任意の文字内容に更新されている
    $('#change-text').on('click', function () {
        $('p').text('Hello!');
      });

    //「フェードアウト」ボタンを押した際に、フェードアウトで文字が消える
    $('#fade-out').on('click', function () {
        $('#target').fadeOut();
      });

    //「フェードイン」ボタンを押した際に、フェードインで文字が現れる
    $('#fade-in').on('click', function () {
        $('#target').fadeIn();
      });

});