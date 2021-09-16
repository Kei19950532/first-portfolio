// jQuery
$(function() {
    // menu-triggerがクリックされたらbodyにactiveを付け外しする
    $(".menu-trigger").on("click", function() {
        $("body").toggleClass("active");
    });
    // l-header_navigation_linkがクリックされたらbodyからactiveを外す
    $(".l-header_navigation_link").on("click", function() {
        $("body").removeClass("active");
    });

    // 追加したコード
    // js-scroll-topがクリックされたら500ミリ秒かけてトップまで遷移する
    $(".js-scroll-top").on("click", function() {
        $("body, html").animate({ scrollTop: 0 }, 500);
    });
    // 追加したコード 終
});

// 追加したコード
// JavaScript
// smooth-scroll.jsの設定
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 400
});
// 追加したコード 終
