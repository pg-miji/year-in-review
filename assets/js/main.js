$(function () {
    $("#question_btn").click(function () {
        loading("/pages/question.html");
    });

    $("#cards_btn").click(function () {
        loading("/pages/cards.html");
    });
});

function loading(url) {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var scrollX = window.scrollX || document.documentElement.scrollLeft;
    var scrollY = window.scrollY || document.documentElement.scrollTop;
    var centerX = scrollX + screenWidth / 2 - 30;
    var centerY = scrollY + screenHeight / 2 - 12.7;

    $("#spinner").attr("style", "top:" + centerY + "px" + "; left:" + centerX + "px");
    document.querySelector("#loading").style.height = "100%";
    $("#loading").show();

    setTimeout(function () { location.href = url; }, 1500);
}