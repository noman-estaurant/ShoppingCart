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


    //---------------------------------------(2019.5.11) by Wu
    //Recieve data from the menu page
    // (number, name-of-main-meal, price)
    $("#main-meal").append(getDetail(2, "xxx", "80"));

});

var mclick = 0;
$("#main-meal .button").click(function() {
    if (mclick == 0) { //click once
         $("#main-meal .detail").toggleClass('showing-detail', 'slow');
        mclick = 1;
    } else { //click twice        
        $("#main-meal .detail").toggleClass('showing-detail', 'slow');                    
        mclick = 0;
    }
});

var sclick = 0;
$("#side-meal .button").click(function() {
    if (sclick == 0) { //click once      
        $("#side-meal .detail").toggleClass('showing-detail', 'slow');
        sclick = 1;
    } else { //click twice
        $("#side-meal .detail").toggleClass('showing-detail', 'slow');
        sclick = 0;
    }
});

var dclick = 0;
$("#drinks .button").click(function() {
    $("").insertAfter("#drinks");
    if (dclick == 0) { //click once
        $("#drinks .detail").toggleClass('showing-detail', 'slow');
        dclick = 1;
    } else { //click twice
        $("#drinks .detail").toggleClass('showing-detail', 'slow');
        dclick = 0;
    }
});


var temp;
function ReallyDelete(thisObj){
    $('.ui.basic.modal').modal('show');
    temp = thisObj
}

function removeThis(){       
        temp.parent(".detail").transition("fade right", function() {
            thisObj.parent(".detail").remove();
        });
}



function getDetail(n, name, money) {
    var s = "";
    s = s + '<div class="detail" >';
    s = s + '   <p class="close" onclick="ReallyDelete($(this))">✖</p>';
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
    return s.repeat(n);
}