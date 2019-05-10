$(document).ready(function() {
    $("#empty").hide();
    //$("#notempty").hide();

    //if is empty, use
    //$("#empty").show();
    //else
    //$("#notempty").show();
    //get data from ?
    // $("#main-meal .howmany").text("x "+??);
    // $("#main-meal .howmuch").text("$ "+??);
    //create detail
    // var i;
    // for (i = 0; i < 2; i++) {
    //     $("#main-meal").append(getDetail());

    // }

    // $("#side-meal .howmany").text("x "+??);
    // $("#side-meal .howmuch").text("$ "+??);

    // $("#drinks .howmany").text("x "+??);
    // $("#drinks .howmuch").text("$ "+??);

    //轉場動畫
    //$(".check").show()

    $("#main-meal").append(getDetail("xxx", "80"));

});

var mclick = 0;
$("#main-meal .button").click(function() {
    if (mclick == 0) { //click once

       // $("#side-meal").animate({
      //      marginTop: "30px",
      //      marginBottom: "0px",
     //   }, 300);
        //$(".detail").slideDown(200);

         $(".detail").toggleClass('showing-detail', 'slow');
        mclick = 1;
    } else { //click twice        
      //  $("#side-meal").animate({
     //       marginTop: "0px",
     //       marginBottom: "-8px",
     //   }, 300);
        //$(".detail").slideUp(200);

        $(".detail").toggleClass('showing-detail', 'slow');
        mclick = 0;
    }
});

var sclick = 0;
$("#side-meal .button").click(function() {
    if (sclick == 0) { //click once
        //$("").insertAfter("#side-meal");
        $("#drinks").animate({
            marginTop: "30px",
            marginBottom: "0px",
        }, 300);
        sclick = 1;
    } else { //click twice
        $("#drinks").animate({
            marginTop: "0px",
            marginBottom: "-8px",
        }, 300);
        sclick = 0;
    }
});

var dclick = 0;
$("#drinks .button").click(function() {
    $("").insertAfter("#drinks");
    if (dclick == 0) { //click once

        dclick = 1;
    } else { //click twice

        dclick = 0;
    }
});

function removeThis() {
    console.log("why");
    $(".close").closest(".detail").hide(500, function() {
        $(".close").closest(".detail").remove();
    });

}

function getDetail(name, money) {
    var s = "";
    s = s + '<div class="detail" style="display:none">';
    s = s + '   <p class="close" onclick="removeThis()">✖</p>';
    s = s + '   <p class="name">' + name + '</p>';
    s = s + '   <label class="check-container">不要洋蔥';
    s = s + '       <input type="checkbox">';
    s = s + '       <span class="checkmark"></span>';
    s = s + '   </label>';
    s = s + '   <label class="check-container">不要酸黃瓜';
    s = s + '       <input type="checkbox" >';
    s = s + '       <span class="checkmark"></span>';
    s = s + '   </label>';
    s = s + '   <p class="howmuch">' + "$ " + money + '</p>';
    s = s + '</div>';
    return s;
}