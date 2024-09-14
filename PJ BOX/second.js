jQuery(document).ready(function (e) {
    function n() {
        var n = !e(".azion-drop").hasClass("dropdown-active");
        e(".azion-drop").toggleClass("dropdown-active", n), e(".azonshop-brig").toggleClass("dropdown-active", n), 
        n || e(".azion-drop").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function () {
            e(".has-children ul").addClass("is-hidden"), e(".move-out").removeClass("move-out"), e(".is-active").removeClass("is-active")
        })
    }
    e(".azonshop-brig").on("click", function (e) {
        e.preventDefault(), n()
    }), e(".azion-drop .cd-close").on("click", function (e) {
        e.preventDefault(), n()
    }), e(".has-children").children("a").on("click", function (n) {
        n.preventDefault();
        var t = e(this);
        t.next("ul").removeClass("is-hidden").end().parent(".has-children").parent("ul").addClass("move-out")
    });

    var t = e(".azonshop-menu").hasClass("open-to-left") ? "left" : "right";
    e(".meem-dropdown").menuAim({
        activate: function (n) {
            e(n).children().addClass("is-active").removeClass("fade-out"), 0 == e(".meem-dropdown .fade-in").length && e(n).children("ul").addClass("fade-in")
        },
        deactivate: function (n) {
            e(n).children().removeClass("is-active"), (0 == e("li.has-children:hover").length || e("li.has-children:hover").is(e(n))) && (e(".meem-dropdown").find(".fade-in").removeClass("fade-in"), e(n).children("ul").addClass("fade-out"))
        },
        exitMenu: function () {
            return e(".meem-dropdown").find(".is-active").removeClass("is-active"), !0
        },
        submenuDirection: t
    });
    e(".go-back").on("click", function () {
        var n = e(this);
        e(this).parent("ul").parent(".has-children").parent("ul");
        n.parent("ul").addClass("is-hidden").parent(".has-children").parent("ul").removeClass("move-out")
    });

    Modernizr.input.placeholder || (e("[placeholder]").focus(function () {
        var n = e(this);
        n.val() == n.attr("placeholder") && n.val("")
    }).blur(function () {
        var n = e(this);
        "" != n.val() && n.val() != n.attr("placeholder") || n.val(n.attr("placeholder"))
    }).blur(), e("[placeholder]").parents("form").submit(function () {
        e(this).find("[placeholder]").each(function () {
            var n = e(this);
            n.val() == n.attr("placeholder") && n.val("")
        })
    }));
});

// Removed all cart, payment, and checkout functionalities from the original script

$(function () {
    var t = $(".tab-wrapper"),
        i = t.find(".tab-content > div"),
        a = t.find(".tab-menu li"),
        n = $('<div class="line"></div>').appendTo(a);
    i.not(":first-of-type").hide(), a.filter(":first-of-type").find(":first").width("100%"), a.each(function (t) {
        $(this).attr("data-tab", "tab" + t)
    }), i.each(function (t) {
        $(this).attr("data-tab", "tab" + t)
    }), a.on("click", function () {
        var d = $(this).data("tab"),
            e = $(this).closest(t);
        e.find(a).removeClass("active"), $(this).addClass("active"), e.find(".line").width(0), $(this).find(n).animate({
            width: "100%"
        }, "fast"), e.find(i).hide(), e.find(i).filter("[data-tab=" + d + "]").show()
    })
});
$(function () {
    function i(i) {
        pagerPos = i;
        $("#pager a.active").removeClass("active");
        $('#pager a[data-img="' + pagerPos + '"]').addClass("active");
    }

    function t(t) {
        s.animate({
            "margin-left": "-=" + t
        }, 325, function () {
            u == c ? (u = 1, s.css("margin-left", -d)) : pagerPos > u ? u = pagerPos : u++, i(u);
        });
    }

    function a(t) {
        s.animate({
            "margin-left": "+=" + t
        }, 325, function () {
            1 == u ? (u = c, s.css("margin-left", -(d * c))) : pagerPos < u ? u = pagerPos : u--, i(u);
        });
    }

    var e = $("#postslider"),
        s = $("#postslider ul"),
        r = $("#postslider ul li"),
        l = $("#postsliderPrev"),
        n = $("#postsliderNext"),
        c = r.length,
        d = r.width(),
        o = d / c;

    s.width(d * (c + 2)); // Set the slider width

    // Add pager navigation
    e.after('<div id="pager"></div>');
    var p = 1;
    r.each(function () {
        $(this).attr("data-img", p);
        $("#pager").append('<a data-img="' + p + '"><img src=' + $("img", this).attr("src") + " width=" + o + "></a>");
        p++;
    });

    // Clone first and last slides for infinite looping effect
    $("#postslider ul li:first-child").clone().appendTo("#postslider ul");
    $("#postslider ul li:nth-child(" + c + ")").clone().prependTo("#postslider ul");

    // Initialize slider starting point
    s.css("margin-left", -d);
    $("#postslider ul li:nth-child(2)").addClass("active");

    var u = pagerPos = $("#postslider ul li.active").attr("data-img");
    pagerPos && (
        $("#pager a:nth-child(" + pagerPos + ")").addClass("active"),
        $("#pager a").on("click", function () {
            pagerPos = $(this).attr("data-img");
            $("#pager a.active").removeClass("active");
            $(this).addClass("active");

            if (pagerPos > u) {
                var i = d * (pagerPos - u);
                t(i);
            } else if (pagerPos < u) {
                var i = d * (u - pagerPos);
                a(i);
            }
            return false;
        }),
        n.on("click", function () {
            return t(d), false;
        }),
        l.on("click", function () {
            return a(d), false;
        })
    );
});
