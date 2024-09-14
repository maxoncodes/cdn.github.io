function darkMode() {
    localStorage.setItem("mode", "darkmode" === localStorage.getItem("mode") ? "light" : "darkmode"), 
    "darkmode" === localStorage.getItem("mode") ? document.querySelector("#mainCont").classList.add("drK") : document.querySelector("#mainCont").classList.remove("drK")
};

function gridMode() {
    localStorage.setItem("list", "listmode" === localStorage.getItem("list") ? "grid" : "listmode"), 
    "listmode" === localStorage.getItem("list") ? document.querySelector("#mainCont").classList.remove("grD") : document.querySelector("#mainCont").classList.add("grD")
};

$('.pro-features .get-pro').on("click", function () {
    $('.pro-features').toggleClass('active')
});

! function (o) {
    o.fn.lazyier = function () {
        return this.each(function () {
            var t = o(this),
                a = o(window),
                n = t.attr("data-image"),
                e = "w" + Math.round(t.width() + t.width() / 10) + "-h" + Math.round(t.height() + t.height() / 10) + "-p-k-no-nu",
                r = "";
            n.match("resources.blogblog.com") && (n = noThumbnail), r = n.match("/s72-c") ? n.replace("/s72-c", "/" + e) : n.match("/w72-h") ? n.replace("/w72-h72-p-k-no-nu", "/" + e) : n.match("=w72-h") ? n.replace("=w72-h72-p-k-no-nu", "=" + e) : n, 
            t.is(":hidden") || a.on("load resize scroll", function o() {
                if (a.scrollTop() + a.height() >= t.offset().top) {
                    a.off("load resize scroll", o);
                    var n = new Image;
                    n.onload = function () {
                        t.attr("style", "background-image:url(" + this.src + ")").addClass("klazy")
                    }, n.src = r
                }
            }).trigger("scroll")
        })
    }
}(jQuery);

// Removed cart functionality related to item_add
/*
$("body").on("click", ".item_add", function () {
    setTimeout(function (i) {
        i.addClass("active disable-cart"), $(".active.zen").removeClass("item_add")
    }, 500, $(this))
});
*/

$(".slideshows").each(function () {
    var e, i = $(this),
        t = 4e3,
        s = parseInt(i.attr("data-delay")),
        l = 1e3,
        n = parseInt(i.attr("data-fade"));
    s.length && (t = s), n.length && (l = n), 1 < $(".slideshows-item, .widget", i).length && (e = setInterval(function () {
        $(".slideshows-item:visible, .widget:visible", i).each(function () {
            var e = $(this);
            e.hide(), (e.next(".slideshows-item, .widget").length ? e.next(".slideshows-item, .widget") : e.closest(".slideshows").find(".slideshows-item, .widget").first()).fadeIn(l)
        })
    }, t), $(this).append('<button class="nav-left" aria-label="Navigation"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"/></svg></button>  <button class="nav-right" aria-label="Navigation"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/></svg></button>')), $(".nav-left", i).on("click", function () {
        clearInterval(e), $(".slideshows-item:visible, .widget:visible", i).each(function () {
            var e = $(this);
            e.hide(), (e.prev(".slideshows-item, .widget").length ? e.prev(".slideshows-item, .widget") : e.closest(".slideshows").find(".slideshows-item, .widget").last()).fadeIn(l)
        })
    }), $(".nav-right", i).on("click", function () {
        clearInterval(e), $(".slideshows-item:visible, .widget:visible", i).each(function () {
            var e = $(this);
            e.hide(), (e.next(".slideshows-item, .widget").length ? e.next(".slideshows-item, .widget") : e.closest(".slideshows").find(".slideshows-item, .widget").first()).fadeIn(l)
        })
    })
});

// Other parts of the script stay unchanged

(function () {
    var youtube = document.querySelectorAll(".lazyYt");
    for (var i = 0; i < youtube.length; i++) {
        var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";
        var image = new Image();
        image.setAttribute("class", "lazy");
        image.setAttribute("data-src", source);
        image.setAttribute("src", "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=");
        image.setAttribute("alt", "Youtube video");
        image.addEventListener("load", function () {
            youtube[i].appendChild(image)
        }(i));
        youtube[i].addEventListener("click", function () {
            var iframe = document.createElement("iframe");
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allowfullscreen", "");
            iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");
            this.innerHTML = "";
            this.appendChild(iframe)
        })
    }
})();
for (var imageslazy = document.querySelectorAll('.pS .separator img, .pS .tr-caption-container img, .pS .psImg >img, .pS .btImg >img'), i = 0; i < imageslazy.length; i++) imageslazy[i].setAttribute('onclick', 'return false');

function wrap(o, t, e) {
    for (var i = document.querySelectorAll(t), c = 0; c < i.length; c++) {
        var a = o + i[c].outerHTML + e;
        i[c].outerHTML = a
    }
}
wrap('<div class="zmImg">', '.pS .separator >a', '</div>');
wrap('<div class="zmImg">', '.pS .tr-caption-container td >a', '</div>');
wrap('<div class="zmImg">', '.pS .separator >img', '</div>');
wrap('<div class="zmImg">', '.pS .tr-caption-container td >img', '</div>');
wrap('<div class="zmImg">', '.pS .psImg >img', '</div>');
wrap('<div class="zmImg">', '.pS .btImg >img', '</div>');
for (var containerimg = document.getElementsByClassName('zmImg'), i = 0; i < containerimg.length; i++) containerimg[i].onclick = function () {
    this.classList.toggle('s')
};
Defer.dom('.lazy', 100, 'loaded', null, {
    rootMargin: '1px'
}), 'undefined' != typeof infinite_scroll && infinite_scroll.on('load', function () {
    Defer.dom('.lazy', 100, 'loaded', null, {
        rootMargin: '1px'
    })
});
var Shortcode = function (el, tags) {
    if (!el) {
        return
    }
    this.el = el;
    this.tags = tags;
    this.matches = [];
    this.regex = '\\[{name}(\\s[\\s\\S]*?)?\\]' + '(?:((?!\\s*?(?:\\[{name}|\\[\\/(?!{name})))[\\s\\S]*?)' + '(\\[\/{name}\\]))?';
    if (this.el.jquery) {
        this.el = this.el[0]
    }
    this.matchTags();
    this.convertMatchesToNodes();
    this.replaceNodes()
};
Shortcode.prototype.matchTags = function () {
    var html = this.el.outerHTML,
        instances, match, re, contents, regex, tag, options;
    for (var key in this.tags) {
        if (!this.tags.hasOwnProperty(key)) {
            return
        }
        re = this.template(this.regex, {
            name: key
        });
        instances = html.match(new RegExp(re, 'g')) || [];
        for (var i = 0, len = instances.length; i < len; i++) {
            match = instances[i].match(new RegExp(re));
            contents = match[3] ? '' : undefined;
            tag = match[0];
            regex = this.escapeTagRegExp(tag);
            options = this.parseOptions(match[1]);
            if (match[2]) {
                contents = match[2].trim();
                tag = tag.replace(contents, '').replace(/\n\s*/g, '');
                regex = this.escapeTagRegExp(tag).replace('\\]\\[', '\\]([\\s\\S]*?)\\[')
            }
            this.matches.push({
                name: key,
                tag: tag,
                regex: regex,
                options: options,
                contents: contents
            })
        }
    }
};
Shortcode.prototype.convertMatchesToNodes = function () {
    var html = this.el.innerHTML,
        excludes, re, replacer;
    replacer = function (match, p1, p2, p3, p4, offset, string) {
        if (p1) {
            return match
        } else {
            var node = document.createElement('span');
            node.setAttribute('data-sc-tag', this.tag);
            node.className = 'sc-node sc-node-' + this.name;
            return node.outerHTML
        }
    };
    for (var i = 0, len = this.matches.length; i < len; i++) {
        excludes = '((data-sc-tag=")|(<pre.*)|(<code.*))?';
        re = new RegExp(excludes + this.matches[i].regex, 'g');
        html = html.replace(re, replacer.bind(this.matches[i]))
    }
    this.el.innerHTML = html
};
Shortcode.prototype.replaceNodes = function () {
    var self = this,
        html, match, result, done, node, fn, replacer, nodes = this.el.querySelectorAll('.sc-node');
    replacer = function (result) {
        if (result.jquery) {
            result = result[0]
        }
        result = self.parseCallbackResult(result);
        node.parentNode.replaceChild(result, node)
    };
    for (var i = 0, len = this.matches.length; i < len; i++) {
        match = this.matches[i];
        node = this.el.querySelector('.sc-node-' + match.name);
        if (node && node.dataset.scTag === match.tag) {
            fn = this.tags[match.name].bind(match);
            done = replacer.bind(match);
            result = fn(done);
            if (result !== undefined) {
                done(result)
            }
        }
    }
};
Shortcode.prototype.parseCallbackResult = function (result) {
    var container, fragment, children;
    switch (typeof result) {
    case 'function':
        result = document.createTextNode(result());
        break;
    case 'string':
        container = document.createElement('div');
        fragment = document.createDocumentFragment();
        container.innerHTML = result;
        children = container.childNodes;
        if (children.length) {
            for (var i = 0, len = children.length; i < len; i++) {
                fragment.appendChild(children[i].cloneNode(true))
            }
            result = fragment
        } else {
            result = document.createTextNode(result)
        }
        break;
    case 'object':
        if (!result.nodeType) {
            result = JSON.stringify(result);
            result = document.createTextNode(result)
        }
        break;
    case 'default':
        break
    }
    return result
};
Shortcode.prototype.parseOptions = function (stringOptions) {
    var options = {},
        set;
    if (!stringOptions) {
        return
    }
    set = stringOptions.replace(/(\w+=)/g, '\n$1').split('\n');
    set.shift();
    for (var i = 0; i < set.length; i++) {
        var kv = set[i].split('=');
        options[kv[0]] = kv[1].replace(/\'|\"/g, '').trim()
    }
    return options
};
Shortcode.prototype.escapeTagRegExp = function (regex) {
    return regex.replace(/[\[\]\/]/g, '\\$&')
};
Shortcode.prototype.template = function (s, d) {
    for (var p in d) {
        s = s.replace(new RegExp('{' + p + '}', 'g'), d[p])
    }
    return s
};
String.prototype.trim = String.prototype.trim || function () {
    return this.replace(/^\s+|\s+$/g, '')
};
if (window.jQuery) {
    var pluginName = 'shortcode';
    $.fn[pluginName] = function (tags) {
        this.each(function () {
            if (!$.data(this, pluginName)) {
                $.data(this, pluginName, new Shortcode(this, tags))
            }
        });
        return this
    }
}! function (a) {
    a.fn.magtab = function (b) {
        b = jQuery.extend({
            onHover: false,
            animated: true,
            transition: 'fadeInUp'
        }, b);
        return this.each(function () {
            var e = a(this),
                c = e.children('[navi-tab]'),
                d = 0,
                n = 'tab-animated',
                k = 'taber-active';
            if (b.onHover == true) {
                var event = 'mouseenter'
            } else {
                var event = 'click'
            }
            e.prepend('<ul class="selec-taber"></ul>');
            c.each(function () {
                if (b.animated == true) {
                    a(this).addClass(n)
                }
                e.find('.selec-taber').append('<li><a href="#">' + a(this).attr('navi-tab') + '</a></li>')
            }).eq(d).addClass(k).addClass('tab-' + b.transition);
            e.find('.selec-taber a').on(event, function () {
                var f = a(this).parent().index();
                a(this).closest('.selec-taber').find('.active').removeClass('active');
                a(this).parent().addClass('active');
                c.removeClass(k).removeClass('tab-' + b.transition).eq(f).addClass(k).addClass('tab-' + b.transition);
                return false
            }).eq(d).parent().addClass('active')
        })
    }
}(jQuery);

function msgError() {
    return '<span class="no-posts"><b>[Add shortcode]</b></span>'
}

function megaTabs(a, e, t) {
    if ("mtabs" == e)
        if (null != t) {
            for (var s = t.length, n = '<ul class="complex-tabs">', i = 0; i < s; i++) {
                var r = t[i];
                r && (n += '<div class="mega-tab" navi-tab="' + r + '"/>')
            }
            n += "</ul>", a.addClass("has-sub mega-menu mega-tabs").append(n), a.find("a:first").attr("href", "#"), $(".mega-tab").each(function () {
                var a = $(this),
                    e = a.attr("navi-tab");
                ajaxMega(a, "megatabs", 4, e, "getmega")
            }), a.find("ul.complex-tabs").magtab()
        } else a.addClass("has-sub mega-menu mega-tabs").append('<ul class="mega-widget">' + msgError() + "</ul>")
}

function getFeedUrl(a, e, t) {
    var s = "";
    switch (t) {
    case "recent":
        s = "/feeds/posts/default?alt=json-in-script&max-results=" + e;
        break;
    case "random":
        s = "/feeds/posts/default?max-results=" + e + "&start-index=" + Math.floor(Math.random() * e + 1) + "&alt=json-in-script";
        break;
    default:
        s = "/feeds/posts/default/-/" + t + "?alt=json-in-script&max-results=" + e
    }
    return s
}

function getPostLink(a, e) {
    for (var t = 0; t < a[e].link.length; t++)
        if ("alternate" == a[e].link[t].rel) {
            var s = a[e].link[t].href;
            break
        } return s
}

function post_title(a, e, t) {
    return '<a href="' + t + '">' + a[e].title.$t + "</a>"
}

function postThumb(a, e) {
    var t = $("<div>").html(a).find("img:first").attr("src"),
        s = t.lastIndexOf("/") || 0,
        n = t.lastIndexOf("/", s - 1) || 0,
        a = t.substring(0, n),
        n = t.substring(n, s),
        s = t.substring(s);
    return (n.match(/\/s[0-9]+/g) || n.match(/\/w[0-9]+/g) || "/d" == n) && (n = "/w180-h180-p-k-no-nu"), a + n + s
}

function FeatImage(a, e, t) {
    var s = a[e].content.$t,
        e = a[e].media$thumbnail ? a[e].media$thumbnail.url : noThumbnail;
    return '<img class="post-thumb" alt="" src="' + (-1 < s.indexOf(s.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) ? !(-1 < s.indexOf("<img")) || s.indexOf(s.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) < s.indexOf("<img") ? e.replace("/default.", "/0.") : postThumb(s) : -1 < s.indexOf("<img") ? postThumb(s) : noThumbnail) + '"/>'
}

function post_info(a, e) {
    var t, s, a = a[e].content.$t,
        e = $("<div>").html(a),
        a = e.find('strike:contains("price/")'),
        e = e.find('strike:contains("off/")');
    return 0 < a.length && (t = a.text().split("/")[1]), 0 < e.length && (s = e.text().split("/")[1]), [null != t ? '<span class="perga">' + t + "</span>" : "", null != s ? '<span class="product_off show">' + s + "</span>" : ""]
}

function getAjax(o, m, a, e) {
    switch (m) {
    case "megatabs":
    case "slidetabs":
        null == e && (e = "geterror");
        var t = getFeedUrl(m, a, e);
        $.ajax({
            url: t,
            type: "GET",
            cache: !0,
            dataType: "jsonp",
            success: function (a) {
                var e = "";
                "megatabs" === m && (e = '<ul class="mega-widget">');
                a = a.feed.entry;
                if (null != a)
                    for (var t = 0, s = a; t < s.length; t++) {
                        var n = getPostLink(s, t),
                            i = post_title(s, t, n),
                            r = FeatImage(s, t, n),
                            l = post_info(s, t),
                            u = "";
                        "megatabs" === m && (u += '<div class="mega-item"><div class="mega-content"><div class="post-image-wrap"><a class="post-image-link" href="' + n + '">' + r + "</a>" + l[1] + '</div><h2 class="post-title">' + i + '</h2><div class="mega-t">' + l[0] + "</div></div></div>"), e += u
                    } else e = "megatabs" === m ? '<ul class="mega-widget">' + msgError() + "</ul>" : msgError();
                e += "</ul>", o.html(e)
            }
        })
    }
}

function ajaxMega(a, e, t, s, n) {
    if (n.match("getmega")) {
        if ("megatabs" == e) return getAjax(a, e, t, s);
        a.addClass("has-sub mega-menu")
    }
}

function post_link(a, e) {
    for (var t = 0; t < a[e].link.length; t++)
        if ("alternate" == a[e].link[t].rel) {
            var s = a[e].link[t].href;
            break
        } return s
}
$("#Hmain-menu").each(function () {
    for (var a = $(this).find(".LinkList ul > li").children("a"), e = a.length, t = 0; t < e; t++) {
        var s, n = a.eq(t),
            i = n.text();
        "_" !== i.charAt(0) && "_" === a.eq(t + 1).text().charAt(0) && (s = n.parent()).append('<ul class="sub-menu m-sub"/>'), "_" === i.charAt(0) && (n.text(i.replace("_", "")), n.parent().appendTo(s.children(".sub-menu")))
    }
    for (t = 0; t < e; t++) {
        var r, l = a.eq(t),
            u = l.text();
        "_" !== u.charAt(0) && "_" === a.eq(t + 1).text().charAt(0) && (r = l.parent()).append('<ul class="sub-menu2 m-sub"/>'), "_" === u.charAt(0) && (l.text(u.replace("_", "")), l.parent().appendTo(r.children(".sub-menu2")))
    }
    $("#Hmain-menu ul li ul").parent("li").addClass("has-sub"), $("#Hmain-menu .widget").addClass("show-menu")
}), $("#Hmain-menu-nav").clone().appendTo(".tmobil-menu"), $(".tmobil-menu .has-sub").append('<div class="submenu-toggle"/>'), $(".tmobil-menu ul > li a").each(function () {
    var a = $(this),
        e = a.attr("href").trim(),
        t = e.toLowerCase(),
        e = e.split("/")[0];
    t.match("mega-menu") && a.attr("href", "/search/label/" + e + "?&max-results=" + postPerPage)
}), $(".tmobil-menu ul li a").each(function () {
    var r = $(this),
        a = r.attr("href");
    $(this).data("title");
    a.toLowerCase().match("getmega") && (r.parent("li").append('<div class="getMega">' + a + "</div>"), r.parent("li").find(".getMega").shortcode({
        getMega: function () {
            var a = this.options.label;
            switch (this.options.type) {
            case "mtabs":
                if (r.parent("li").addClass("has-sub").append('<div class="submenu-toggle"/>'), r.attr("href", "#"), null != a) {
                    for (var e = (a = a.split("/")).length, t = '<ul class="sub-menu m-sub">', s = 0; s < e; s++) {
                        var n = a[s],
                            i = postPerPage;
                        n && (t += '<li><a href="/search/label/' + n + "?&max-results=" + i + '">' + n + "</a></li>")
                    }
                    t += "</ul>", r.parent("li").append(t);
                    break
                }
            }
        }
    }))
}), $(".tmobil-menu ul li .submenu-toggle").on("click", function (a) {
    $(this).parent().hasClass("has-sub") && (a.preventDefault(), ($(this).parent().hasClass("show") ? $(this).parent().removeClass("show").find("> .m-sub") : $(this).parent().addClass("show").children(".m-sub")).slideToggle(170))
}), $("#Hmain-menu li,#car-menu li").each(function () {
    var a = $(this),
        e = a.find("a").attr("href"),
        t = e.toLowerCase(),
        s = a,
        n = s,
        i = t;
    t.match("getmega") && s.append('<div class="getMega">' + e + "</div>"), s.find(".getMega").shortcode({
        getMega: function () {
            var a = this.options.results,
                e = this.options.label,
                t = this.options.type;
            ajaxMega(s, t, a, e, i), "mtabs" == t && (null != e && (e = e.split("/")), megaTabs(n, t, e))
        }
    })
});
$(document).ready(function () {
    $('#credit').html('<a href="https://www.maxoncodes.com/" style="visibility:visible !important;display:inline-block!important;opacity:1!important;position:static!important;text-indent:0px!important;color:var(--mainC)!important" rel="dofollow">「 ✦ MAXONCODES ✦ 」™</a>');
    setInterval(function () {
        if (!$('#credit:visible').length) window.location.href = 'https://www.maxoncodes.com/'
    }, 3000)
})