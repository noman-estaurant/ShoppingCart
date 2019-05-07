$(document).ready(function() {
    $("#empty").hide();
    //$("#notempty").hide();
    //if is empty
    //$("#empty").show();
    //else
    //$("#notempty").show();
    //get data from ?
    // $("#main-meal .howmany").text("x "+??);
    // $("#main-meal .howmuch").text("$ "+??);

    // $("#side-meal .howmany").text("x "+??);
    // $("#side-meal .howmuch").text("$ "+??);

    // $("#drinks .howmany").text("x "+??);
    // $("#drinks .howmuch").text("$ "+??);

    //轉場動畫
    //$(".check").show()

});

$("#main-meal").click(function() {
    $("").insertAfter("#main-meal").show('slow');
});

$("#side-meal").click(function() {

    $("").insertAfter("#side-meal");
});

$("#drinks").click(function() {

    $("").insertAfter("#drinks");
});