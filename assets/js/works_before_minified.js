$(function() {
    $("[data-anim-ctr]").each(function() {
        var ctr = parseInt($(this).data("anim-ctr"));
        this.style.animationDelay = (ctr * 0.1) + "s";
    });

    $("body").on("allLoaded", function() {
        $(".section").addClass("show");
    });
});