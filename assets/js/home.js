var animating = false;
$(function() {
    $(window).on('mousewheel DOMMouseScroll', scrollFunction);
    $(document).on("keydown", keydownFunction);
});

function keydownFunction(e) {
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
}

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
                });
            } else {
                $(window).off('mousewheel DOMMouseScroll', scrollFunction);
                $(window).off("keydown", keydownFunction);
                $(".home-item[data-index='" + index + "']").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
                    $(this).off("webkitAnimationEnd oanimationend msAnimationEnd animationend");
                    animating = false;
                });
                $(".section-1").addClass("show");
                container.scrollTop(1);
                $(window).on('mousewheel DOMMouseScroll', sectionScrollFunction);
            }
        }, 300);
    });
    $(".home-item.active").addClass("hiding");
}

function sectionScrollFunction(e) {
    if (container.scrollTop() == 0) {
        $(window).off('mousewheel DOMMouseScroll', sectionScrollFunction);
        $(window).on('mousewheel DOMMouseScroll', scrollFunction);
        animating = true;
        setAnimation(2);
    }
}