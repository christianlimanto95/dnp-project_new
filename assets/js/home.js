var animating = false;
$(function() {
    $(window).one('mousewheel DOMMouseScroll', scrollFunction);

    $(document).on("keydown", function(e) {
        if (e.which == 40) {
            if (!animating) {
                var index = parseInt($(".home-item.active").attr("data-index"));
                index = nextIndex(index);
                if (index) {
                    animating = true;
                    setAnimation(index);
                }
            }
        } else if (e.which == 38) {
            if (!animating) {
                var index = parseInt($(".home-item.active").attr("data-index"));
                index = prevIndex(index);
                if (index) {
                    animating = true;
                    setAnimation(index);
                }
            }
        }
    });
});

function scrollFunction(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!animating) {
        var index = parseInt($(".home-item.active").attr("data-index"));
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            index = prevIndex(index);
        } else {
            index = nextIndex(index);
        }

        if (index) {
            animating = true;
            $(window).off("mousewheel DOMMouseScroll");
            setAnimation(index);
        }
    }
}

function nextIndex(index) {
    if (index + 1 <= 3) {
        index++;
        return index;
    }
    return false;
}

function prevIndex(index) {
    if (index - 1 > 0) {
        index--;
        return index;
    }
    return false;
}

function setAnimation(index) {
    $(".home-item.active").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
        $(this).off("webkitAnimationEnd oanimationend msAnimationEnd animationend");
        $(this).removeClass("active hiding");
        $(".section-1").removeClass("show");
        setTimeout(function() {
            $(".home-item[data-index='" + index + "']").addClass("active");
            if (index < 3) {
                $(".home-item[data-index='" + index + "']").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
                    $(this).off("webkitAnimationEnd oanimationend msAnimationEnd animationend");
                    animating = false;
                    $(window).one('mousewheel DOMMouseScroll', scrollFunction);
                });
            } else {
                $(".home-item[data-index='" + index + "']").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
                    $(this).off("webkitAnimationEnd oanimationend msAnimationEnd animationend");
                    animating = false;
                    $(window).one('mousewheel DOMMouseScroll', scrollFunction);
                });
                $(".section-1").addClass("show");
            }
        }, 300);
    });
    $(".home-item.active").addClass("hiding");
}