$(document).ready(function(){
     // 下拉时间，触顶时间
    $(document).scroll(function () {
        var scroll_top_value = $(document).scrollTop();
        if (scroll_top_value > 480) {
            $(".college-header").addClass("navbar-fixed-top fix-top");
            $(".college-nav").addClass("new-collegenav");
            $("#header-image").addClass("new-headerimage");
            $("#header-nav").addClass("new-headernav");
            $("#header-loginregist").addClass("new-headerloginregist");
            $("#header-image").removeClass("header-image");
            $("#header-nav").removeClass("header-nav");
            $("#header-loginregist").removeClass("header-loginregist");
        } else {
            $(".college-header").removeClass("navbar-fixed-top fix-top")
            $(".college-nav").removeClass("new-collegenav");
            $("#header-image").removeClass("new-headerimage");
            $("#header-nav").removeClass("new-headernav");
            $("#header-loginregist").removeClass("new-headerloginregist");
             $("#header-image").addClass("header-image");
            $("#header-nav").addClass("header-nav");
            $("#header-loginregist").addClass("header-loginregist");
        }

    });
});