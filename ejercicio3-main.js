$(document).ready(function () {
    $(".box-01").on("mouseover", function () {
        $("li").filter(":even").css("background-color", "rgb(252,129,129)");
    });

    $(".box-01").on("mouseleave", function () {
        $("li").filter(":even").css("background-color", "rgb(203,213,224)")
    });


})