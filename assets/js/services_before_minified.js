var vh100, section1, section2, section2Threshold;

$(function() {
    section1 = $(".section-1");
    section2 = $(".section-2");

    $("body").on("allLoaded", function() {
        $(".section-1").addClass("show");
    });

    setVH();
    setSectionThreshold();

    container.on("scroll", checkSection2ScrollDown);

    $(".section-2 [data-anim-ctr]").each(function() {
        var ctr = parseInt($(this).data("anim-ctr"));
        this.style.animationDelay = (ctr * 0.05) + "s";
    });

    $(window).on("resize", function() {
        setVH();
        setSectionThreshold();
    })
});

function setSectionThreshold() {
    if (!isMobile) {
        section2Threshold = section1.offset().top + container.scrollTop() + vh100 / 3;
    } else {
        if (isTablet) {
            section2Threshold = section1.offset().top + container.scrollTop() + vh100 / 3;
        } else {
            section2Threshold = section1.offset().top + container.scrollTop() + vh100 / 2;
        }
    }
}

function setVH() {
    vh100 =  parseInt(section1.css("height"));
}

function checkSection2ScrollDown() {
    if (container.scrollTop() > section2Threshold) {
        $(".section-2").addClass("show");
        container.off("scroll", checkSection2ScrollDown);
    }
}