//HTMLドキュメントが読み込み完了したときに「loadイベントが発生しました」とコンソールに出力する
//画面をスクロールしたときに「scrollイベントが発生しました」とコンソールに出力する


$(window).on('load', function() {
    console.log("loadイベントが発生しました");
});

$(window).on('scroll', function() {
    console.log("scrollイベントが発生しました");
});
