window.main_js = function () {
    $.fn.andSelf = function () {
        return this.addBack.apply(this, arguments)
    }, String.prototype.replaceAll = function (t, e) {
        return this.split(t).join(e)
    }, CUSTOM_CURRENCY_CODE && (CURRENCY_CODE.t = CUSTOM_CURRENCY_CODE), CUSTOM_CURRENCY_SYMBOL && (CURRENCY_CODE.s = CUSTOM_CURRENCY_SYMBOL), COUPON_0 && COUPON.push(COUPON_0), COUPON_1 && COUPON.push(COUPON_1), COUPON_2 && COUPON.push(COUPON_2), COUPON_3 && COUPON.push(COUPON_3), COUPON_4 && COUPON.push(COUPON_4);
    var t = "/feeds",
        i = "";
    $(".variables i").each((function () {
        var t = $(this).attr("name"),
            e = $(this).html();
        if (e && t) switch (t = t.toUpperCase().replace(/ /gi, "_")) {
        case "ADMIN_EMAIL":
            ADMIN_EMAIL = e;
            break;
        case "SEP_LONG_PRICE":
            SEP_LONG_PRICE = e;
            break;
        case "CURRENCY_CODE":
            void 0 !== SC[e] ? CURRENCY_CODE.s = SC[e].s : CURRENCY_CODE.t = e;
            break;
        case "CURRENCY_SIGN":
            CURRENCY_CODE.s = e;
            break;
        case "COUPON":
            COUPON = e.split("/");
            break;
        case "MAX_COUPON_VALUE_PER_ORDER":
            isNaN(e) || (MAX_COUPON_VALUE_PER_ORDER = Number(e));
            break;
        case "CURRENCY_POS":
        case "CURRENCY_POSITION":
            CURRENCY_POS = e.toLowerCase();
            break;
        case "PAYPAL_EMAIL":
            PAYPAL_EMAIL = e;
            break;
        case "SHIPPING_FEE":
            isNaN(e.replaceAll(" ", "").replaceAll("%", "").replaceAll("*", "").replaceAll("[", "").replaceAll("]", "").replaceAll("qty", "").replaceAll("cost", "")) && (SHIPPING_FEE = "0");
            break;
        case "TAX":
            isNaN(e.replaceAll(" ", "").replaceAll("%", "")) && (TAX = "0");
            break;
        case "STORE_NAME":
            STORE_NAME = e;
            break;
        case "STORE_STREET":
            STORE_STREET = e;
            break;
        case "STORE_TOWN":
            STORE_TOWN = e;
            break;
        case "STORE_STATE":
            STORE_STATE = e;
            break;
        case "STORE_COUNTRY":
            STORE_COUNTRY = e;
            break;
        case "STORE_POSTCODE":
            STORE_POSTCODE = e;
            break;
        case "BANK_ACCOUNT_NAME":
            BANK_ACCOUNT_1_NAME = e;
            break;
        case "BANK_ACCOUNT_NUMBER":
            BANK_ACCOUNT_1_NUMBER = e;
            break;
        case "BANK_ACCOUNT_BANKNAME":
            BANK_ACCOUNT_1_BANKNAME = e;
            break;
        case "BANK_ACCOUNT_SORTCODE":
            BANK_ACCOUNT_1_SORTCODE = e;
            break;
        case "BANK_ACCOUNT_IBAN":
            BANK_ACCOUNT_1_IBAN = e;
            break;
        case "BANK_ACCOUNT_BIC_SWIFT":
            BANK_ACCOUNT_1_BIC_SWIFT = e;
            break;
        case "DAY_FORMAT":
            DAY_FORMAT = e;
            break;
        case "SUMMARY_LEN":
            isNaN(e) || (SUMMARY_LEN = Number(e));
            break;
        case "DEFAULT_THUMBNAIL":
            DEFAULT_THUMBNAIL = e;
            break;
        case "AJAX_LOADING_IMAGE":
            AJAX_LOADING_IMAGE = e;
            break;
        case "NUMBER_ITEMS_FOR_COLLECTION":
            isNaN(e) || (NUMBER_ITEMS_FOR_COLLECTION = Number(e));
            break;
        case "CART_CACHE_DURATION":
            isNaN(e) || (CART_CACHE_DURATION = Number(e));
            break;
        case "MAX_ARCHIVE_ITEMS":
            isNaN(e) || (MAX_ARCHIVE_ITEMS = Number(e));
            break;
        case "SHOW_COLLECTION_AT_END":
            "TRUE" === (e = e.toUpperCase()) ? SHOW_COLLECTION_AT_END = !0: "FALSE" === e && (SHOW_COLLECTION_AT_END = !1);
            break;
        case "SLIDER_ANIMATION_SPEED":
            isNaN(e) || (Slider_Animation_Speed = Number(e));
            break;
        case "SLIDER_PAUSE_TIME":
            isNaN(e) || (Slider_Pause_Time = Number(e));
            break;
        case "SLIDER_CONTROL":
            "TRUE" === (e = e.toUpperCase()) ? Slider_Control = !0: "FALSE" === e && (Slider_Control = !1);
            break;
        case "SLIDER_PAUSE_WHEN_HOVER":
            "TRUE" === (e = e.toUpperCase()) ? Slider_Pause_When_Hover = !0: "FALSE" === e && (Slider_Pause_When_Hover = !1);
            break;
        case "ENABLE_DIRECT_BANK_TRANSFER":
            "TRUE" === (e = e.toUpperCase()) ? ENABLE_DIRECT_BANK_TRANSFER = !0: "FALSE" === e && (ENABLE_DIRECT_BANK_TRANSFER = !1);
            break;
        case "ENABLE_CHEQUE":
            "TRUE" === (e = e.toUpperCase()) ? ENABLE_CHEQUE = !0: "FALSE" === e && (ENABLE_CHEQUE = !1);
            break;
        case "ENABLE_CASH_ON_DELIVERY":
            "TRUE" === (e = e.toUpperCase()) ? ENABLE_CASH_ON_DELIVERY = !0: "FALSE" === e && (ENABLE_CASH_ON_DELIVERY = !1);
            break;
        case "ENABLE_PAYPAL":
            "TRUE" === (e = e.toUpperCase()) ? ENABLE_PAYPAL = !0: "FALSE" === e && (ENABLE_PAYPAL = !1);
            break;
        case "ENABLE_UPI_TRANSFER":
            "TRUE" === (e = e.toUpperCase()) ? ENABLE_UPI_TRANSFER = !0: "FALSE" === e && (ENABLE_UPI_TRANSFER = !1), ENABLE_UPI_TRANSFER = ENABLE_UPI_TRANSFER && (UPI_QR_PAYTM || UPI_QR_PHONEPE || UPI_QR_GPAY);
            break;
        case "ENABLE_FIELD_COUNTRY":
            "TRUE" === (e = e.toUpperCase()) ? ENABLE_FIELD_COUNTRY = !0: "FALSE" === e && (ENABLE_FIELD_COUNTRY = !1);
            break;
        case "ENABLE_FIELD_FIRST_NAME":
            "TRUE" === (e = e.toUpperCase()) ? ENABLE_FIELD_FIRST_NAME = !0: "FALSE" === e && (ENABLE_FIELD_FIRST_NAME = !1);
            break;
        case "ENABLE_FIELD_LAST_NAME":
            "TRUE" === (e = e.toUpperCase()) ? ENABLE_FIELD_LAST_NAME = !0: "FALSE" === e && (ENABLE_FIELD_LAST_NAME = !1);
            break;
        case "ENABLE_FIELD_COMPANY_NAME":
            "TRUE" === (e = e.toUpperCase()) ? ENABLE_FIELD_COMPANY_NAME = !0: "FALSE" === e && (ENABLE_FIELD_COMPANY_NAME = !1);
            break;
        case "ENABLE_FIELD_ADDRESS":
            "TRUE" === (e = e.toUpperCase()) ? ENABLE_FIELD_ADDRESS = !0: "FALSE" === e && (ENABLE_FIELD_ADDRESS = !1);
            break;
        case "ENABLE_FIELD_TOWN_CITY_STATE":
            "TRUE" === (e = e.toUpperCase()) ? ENABLE_FIELD_TOWN_CITY_STATE = !0: "FALSE" === e && (ENABLE_FIELD_TOWN_CITY_STATE = !1);
            break;
        case "ENABLE_FIELD_POST_ZIP_CODE":
            "TRUE" === (e = e.toUpperCase()) ? ENABLE_FIELD_POST_ZIP_CODE = !0: "FALSE" === e && (ENABLE_FIELD_POST_ZIP_CODE = !1);
            break;
        case "ENABLE_FIELD_EMAIL":
            "TRUE" === (e = e.toUpperCase()) ? ENABLE_FIELD_EMAIL = !0: "FALSE" === e && (ENABLE_FIELD_EMAIL = !1);
            break;
        case "ENABLE_FIELD_PHONE":
            "TRUE" === (e = e.toUpperCase()) ? ENABLE_FIELD_PHONE = !0: "FALSE" === e && (ENABLE_FIELD_PHONE = !1);
            break;
        case "WHATSAPP_PHONE_ORDER":
            WHATSAPP_PHONE_ORDER = e;
            break;
        default:
            if (NUMBER_BANK_ACCOUNTS > 1)
                for (var i = 1; i <= NUMBER_BANK_ACCOUNTS; i++) t == "BANK_ACCOUNT_" + i + "_NAME" && (window["BANK_ACCOUNT_" + i + "_NAME"] = e), t == "BANK_ACCOUNT_" + i + "_NUMBER" && (window["BANK_ACCOUNT_" + i + "_NUMBER"] = e), t == "BANK_ACCOUNT_" + i + "_BANKNAME" && (window["BANK_ACCOUNT_" + i + "_BANKNAME"] = e), t == "BANK_ACCOUNT_" + i + "_SORTCODE" && (window["BANK_ACCOUNT_" + i + "_SORTCODE"] = e), t == "BANK_ACCOUNT_" + i + "_IBAN" && (window["BANK_ACCOUNT_" + i + "_IBAN"] = e), t == "BANK_ACCOUNT_" + i + "_BIC_SWIFT" && (window["BANK_ACCOUNT_" + i + "_BIC_SWIFT"] = e)
        }
    })), "" == CURRENCY_CODE.t && (CURRENCY_CODE.t = "USD"), "" == CURRENCY_CODE.s && (CURRENCY_CODE.s = "$");
    var a = CURRENCY_CODE.s,
        n = "",
        r = "";
    "before" === CURRENCY_POS ? n = a : r = a;
    var o = CURRENCY_CODE.t;

    function l(t) {
        var e = t;
        return $('.translator i[data-key="' + t + '"]').each((function () {
            e = $(this).html()
        })), e
    }

    function c(t) {
        t = l(t);
        var e = $('[data-l10n="' + t + '"]').html();
        if (void 0 === e || "" == e) return t;
        if (void 0 !== arguments && arguments.length > 1) {
            var i = e.split("$$");
            e = "";
            for (var a = 0; a < i.length; a++) i[a] && !isNaN(i[a]) && void 0 !== arguments[Number(i[a])] ? e += arguments[Number(i[a])] : (a > 0 && (!i[a] || isNaN(i[a - 1]) || void 0 === arguments[Number(i[a - 1])]) && (e += "$$"), e += i[a])
        }
        return e
    }

    function d(t) {
        if (void 0 === t) return !0;
        if ("array" == typeof t) return !t.length;
        if ("object" == typeof t) {
            for (var e in t) return !1;
            return !0
        }
        return !t
    }

    function p(t) {
        var e = "",
            i = "<img ",
            a = 'src="',
            n = '"';
        return index0 = t.indexOf(i), -1 != index0 && (index1 = t.indexOf(a, index0), -1 == index1 && (a = "src='", n = "'", index1 = t.indexOf(a, index0)), -1 != index1 && (index2 = t.indexOf(n, index1 + a.length), -1 != index2 && (e = t.substring(index1 + a.length, index2)))), "" == e && (i = 'data-thumbnail-src="', a = '"', index0 = t.indexOf(i), -1 != index0 && (index1 = t.indexOf(a, index0 + i.length), -1 != index0 && (e = t.substring(index0 + i.length, index1)))), "" == e && (i = "<iframe ", a = 'src="', n = '"', index0 = t.indexOf(i), -1 != index0 && (index1 = t.indexOf(a, index0), -1 != index0 && (index2 = t.indexOf(n, index1 + a.length), -1 != index0 && (-1 != (e = (e = (e = (e = (e = t.substring(index1 + a.length, index2)).replace("http://www.youtube.com/watch?v=", "")).replace("http://www.youtube.com/embed/", "")).replace("//www.youtube.com/embed/", "")).replace("//www.youtube.com/watch?v=", "")).indexOf("?") && (e = e.substring(0, e.indexOf("?"))), -1 != e.indexOf("&") && (e = e.substring(0, e.indexOf("&"))), e = "https://img.youtube.com/vi/" + e + "/mqdefault.jpg")))), e && (e.indexOf("youtu") || e.indexOf("blogspot") || e.indexOf("gooogle")) && (e = e.replace("http://", "https://")), e
    }

    function h(t, e) {
        for (var i = "", a = 0; a < COUPON.length; a++)
            if (0 == COUPON[a].indexOf(t + ":")) {
                var n = COUPON[a].split(":");
                2 == n.length && (i = n[1]);
                break
            } if (i)
            if (-1 != (i = i.replace("-", "").replace(" ", "")).indexOf("%")) {
                if (i = i.replace("%", ""), !isNaN(i)) return i = e * (i = Number(i)) / 100, !d(MAX_COUPON_VALUE_PER_ORDER) && i > MAX_COUPON_VALUE_PER_ORDER && (i = MAX_COUPON_VALUE_PER_ORDER), e - i
            } else if (!isNaN(i)) return e - Number(i);
        return 0
    }

    function u(t, e) {
        for (var i = "", a = 0; a < COUPON.length; a++)
            if (0 == COUPON[a].indexOf(t + ":")) {
                var s = COUPON[a].split(":");
                2 == s.length && (i = s[1]);
                break
            } if (i)
            if (-1 != (i = i.replace("-", "").replace(" ", "")).indexOf("%")) {
                if (i = i.replace("%", ""), !isNaN(i)) return e ? i + "%" : "-" + i + "%"
            } else if (!isNaN(i)) return e ? i : "-" + n + i + r;
        return ""
    }

    function m(t) {
        $(t).css("margin-top", "0");
        var e = Number($(t).attr("h")),
            i = Number($(t).attr("w")),
            a = Number($(t).parents(".natural-thumbnail").height()),
            n = Number($(t).parents(".natural-thumbnail").width()),
            s = 90 * a / 100,
            r = i / e * s;
        r > 90 * n / 100 && (s = e / i * (r = 90 * n / 100));
        var o = -(s - a) / 2;
        $(t).css("width", r + "px"), $(t).css("height", s + "px"), $(t).css("margin-top", o + "px")
    }

    function f() {
        $(".natural-thumbnail img").each((function () {
            $(this).removeAttr("height"), $(this).removeAttr("width");
            var t = $(this).attr("src");
            null != t && (-1 != t.indexOf("/s72-c/") ? (t = t.replace("/s72-c/", "/s1600/"), $(this).after('<img src="' + t + '" class="replaced"/>'), $(this).remove()) : -1 != t.indexOf("=s72-c") ? (t = t.replace("=s72-c", "=s350"), $(this).after('<img src="' + t + '" class="replaced"/>'), $(this).remove()) : -1 != t.indexOf("/w72-h72-p-k-nu/") ? (t = t.replace("/w72-h72-p-k-nu/", "/s1600/"), $(this).after('<img src="' + t + '" class="replaced"/>'), $(this).remove()) : -1 != t.indexOf("/s72-c-k-no/") ? (t = t.replace("/s72-c-k-no/", "/s1600/"), $(this).after('<img src="' + t + '" class="replaced"/>'), $(this).remove()) : -1 != t.indexOf("/w72-h72-p-nu/") ? (t = t.replace("/w72-h72-p-nu/", "/s1600/"), $(this).after('<img src="' + t + '" class="replaced"/>'), $(this).remove()) : -1 != t.indexOf("youtube.com") && -1 != t.indexOf("/default.") && (t = t.replace("/default.", "/mqdefault."), $(this).after('<img src="' + t + '" class="replaced"/>'), $(this).remove()))
        })), $(".natural-thumbnail img").each((function () {
            $(this).attr("w") && $(this).attr("h") ? m(this) : $(this).on("load", (function () {
                var t = this.width,
                    e = this.height;
                $(this).attr("w", t), $(this).attr("h", e), m(this)
            })).each((function () {
                this.complete && $(this).trigger("load"), this.src = this.src
            }))
        }))
    }

    function _(t) {
        if (void 0 === e) var e = "mm/dd/yyyy";
        if (void 0 === i) var i = 150;
        if (void 0 === a) var a = "https://lorempixel.com/300/500/";
        var n = new Object;
        if (n.id = "", n.published = "", n.cate = new Array, n.title = "", n.content = "", n.summary = "", n.link = "", n.reply_label = "comments", n.author = new Object, n.author.name = "Anonymous", n.author.uri = "", n.author.avatar = "https://img1.blogblog.com/img/anon36.png", n.thumbnail = p(n.content), n.reply_number = 0, n.pid = "", "entry" in t) {
            var s = t.entry;
            if (n.id = s.id.$t, key = "post-", G = n.id.indexOf(key), n.id = n.id.substring(G + key.length), "published" in s && (n.published = s.published.$t), n.published = b(n.published, e), "category" in s)
                for (W = 0; W < s.category.length; W++) n.cate[W] = s.category[W].term;
            if ("title" in s && (n.title = s.title.$t), "content" in s && (n.content = s.content.$t), "summary" in s && (n.summary = s.summary.$t), "" == n.summary && (n.summary = n.content.replace(/<\S[^>]*>/g, "")), "" == n.content && (n.content = n.summary), n.summary.length > i && (n.summary = n.summary.substring(0, i) + "..."), "link" in s)
                for (W = 0; W < s.link.length; W++) "alternate" == s.link[W].rel && (n.link = s.link[W].href), "replies" == s.link[W].rel && (n.reply_label = s.link[W].title);
            if (a0 = s.author[0], "name" in a0 && (n.author.name = a0.name.$t), "uri" in a0 && (n.author.uri = a0.uri.$t), "gd$image" in a0 && "https://img1.blogblog.com/img/blank.gif" != a0.gd$image.src && (n.author.avatar = a0.gd$image.src), n.thumbnail = p(n.content), "" == n.thumbnail && "media$thumbnail" in s && (n.thumbnail = s.media$thumbnail.url), "" == n.thumbnail && (n.thumbnail = a), "thr$total" in s && (n.reply_number = Number(s.thr$total.$t)), n.reply_label = n.reply_label.replace(n.reply_number + " ", ""), n.reply_to = "", n.reply_json = "", n.reply_title = "", "thr$in-reply-to" in s && (n.reply_to = s["thr$in-reply-to"].href, n.reply_json = s["thr$in-reply-to"].source, n.reply_json = n.reply_json.replace("/default/", "/summary/"), n.reply_json = n.reply_json + "?alt=json-in-script"), "gd$extendedProperty" in s)
                for (W = 0; W < s.gd$extendedProperty.length; W++) "blogger.itemClass" == s.gd$extendedProperty[W].name && (n.pid = s.gd$extendedProperty[W].value);
            n.pid = n.pid.replace("pid-", "")
        }
        return n
    }

    function g(t) {
        if (void 0 === e) var e = "mm/dd/yyyy";
        if (void 0 === i) var i = 150;
        if (void 0 === a) var a = "https://lorempixel.com/300/500/";
        var n = new Object,
            s = /<\S[^>]*>/g;
        n.id = t.feed.id.$t;
        var r = "blog-",
            o = n.id.indexOf(r);
        if (n.id = n.id.substring(o + r.length), n.id = n.id.replace(".comments", ""), n.cate = new Array, "category" in t.feed)
            for (j = 0; j < t.feed.category.length; j++) n.cate[j] = t.feed.category[j].term;
        n.title = "", "title" in t.feed && (n.title = t.feed.title.$t), n.subtitle = "", "subtitle" in t.feed && (n.subtitle = t.feed.subtitle.$t), n.admin = new Object, n.admin.name = "Anonymous", n.admin.uri = "", n.admin.avatar = "https://img1.blogblog.com/img/anon36.png", "name" in t.feed.author[0] && (n.admin.name = t.feed.author[0].name.$t), "uri" in t.feed.author[0] && (n.admin.uri = t.feed.author[0].uri.$t), "gd$image" in t.feed.author[0] && "https://img1.blogblog.com/img/blank.gif" != t.feed.author[0].gd$image.src && (n.admin.avatar = t.feed.author[0].gd$image.src), n.total_entry = Number(t.feed.openSearch$totalResults.$t), n.start_index = Number(t.feed.openSearch$startIndex.$t), n.item_per_page = Number(t.feed.openSearch$itemsPerPage.$t), n.entry_number = 0, "entry" in t.feed && (n.entry_number = t.feed.entry.length), n.entry = new Array;
        for (j = 0; j < n.entry_number; j++) {
            n.entry[j] = new Object;
            var l = new Object,
                c = t.feed.entry[j];
            if (l.id = c.id.$t, r = "post-", o = l.id.indexOf(r), l.id = l.id.substring(o + r.length), l.published = "", "published" in c && (l.published = c.published.$t), l.published = b(l.published, e), l.cate = new Array, "category" in c)
                for (W = 0; W < c.category.length; W++) l.cate[W] = c.category[W].term;
            if (l.title = "", "title" in c && (l.title = c.title.$t), l.content = "", "content" in c && (l.content = c.content.$t), l.summary = "", "summary" in c && (l.summary = c.summary.$t), "" == l.summary && (l.summary = l.content.replace(s, "")), "" == l.content && (l.content = l.summary), l.summary.length > i && (l.summary = l.summary.substring(0, i) + "..."), l.link = "", l.reply_label = "comments", "link" in c)
                for (W = 0; W < c.link.length; W++) "alternate" == c.link[W].rel && (l.link = c.link[W].href), "replies" == c.link[W].rel && (l.reply_label = c.link[W].title);
            if (l.author = new Object, l.author.name = "Anonymous", l.author.uri = "", l.author.avatar = "https://img1.blogblog.com/img/anon36.png", a0 = c.author[0], "name" in a0 && (l.author.name = a0.name.$t), "uri" in a0 && (l.author.uri = a0.uri.$t), "gd$image" in a0 && "https://img1.blogblog.com/img/blank.gif" != a0.gd$image.src && (l.author.avatar = a0.gd$image.src), l.thumbnail = p(l.content), "" == l.thumbnail && "media$thumbnail" in c && (l.thumbnail = c.media$thumbnail.url), "" == l.thumbnail && (l.thumbnail = a), l.reply_number = 0, "thr$total" in c && (l.reply_number = Number(c.thr$total.$t)), l.reply_label = l.reply_label.replace(l.reply_number + " ", ""), l.reply_to = "", l.reply_json = "", l.reply_title = "", "thr$in-reply-to" in c && (l.reply_to = c["thr$in-reply-to"].href, l.reply_json = c["thr$in-reply-to"].source, l.reply_json = l.reply_json.replace("/default/", "/summary/"), l.reply_json = l.reply_json + "?alt=json-in-script"), l.pid = "", "gd$extendedProperty" in c)
                for (W = 0; W < c.gd$extendedProperty.length; W++) "blogger.itemClass" == c.gd$extendedProperty[W].name && (l.pid = c.gd$extendedProperty[W].value);
            l.pid = l.pid.replace("pid-", ""), n.entry[j] = l
        }
        return n
    }

    function b() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DAY_FORMAT;
        var i, a, n, s;
        return t ? (t = t.split("-"), i = (s = new Date(t[0], t[1] - 1, t[2].substring(0, 2))).getDate(), a = s.getMonth() + 1, n = s.getFullYear()) : (i = (s = new Date).getDate(), a = s.getMonth() + 1, n = s.getFullYear()), e = e.replace("dd", i), e = e.replace("mm", a), e = e.replace("yyyy", n), e
    }

    function v() {
        return "cookie" in document
    }

    function E(t, e, i) {
        if (!v()) return !1;
        var a = new Date;
        a.setDate(a.getDate() + i);
        var n = escape(e) + (null == i ? "" : "; expires=" + a.toUTCString()) + "; path=/";
        return document.cookie = t + "=" + n, A(t) === e
    }

    function y() {
        return !!E("test", "ok")
    }

    function A(t) {
        if (!v()) return "";
        var e, i, a, n = document.cookie.split(";");
        for (e = 0; e < n.length; e++)
            if (i = n[e].substr(0, n[e].indexOf("=")), a = n[e].substr(n[e].indexOf("=") + 1), (i = i.replace(/^\s+|\s+$/g, "")) == t) return unescape(a);
        return ""
    }

    function N() {
        return "undefined" != typeof localStorage
    }

    function O(t, e) {
        return y() ? E(t, e, 365) : !!N() && function (t, e) {
            return !!N() && (localStorage.setItem(t, e), !0)
        }(t, e)
    }

    function C(t, e) {
        return y() ? A(t) : N() ? function (t) {
            if (N()) {
                var e = localStorage.getItem(t);
                if (e) return e
            }
            return ""
        }(t) : ""
    }

    function w() {
        var t = window.location.href;
        return -1 != t.indexOf("archive.html") || -1 != t.indexOf("/search?updated-min=")
    }

    function x() {
        return -1 != window.location.href.indexOf("/search?")
    }

    function T() {
        return -1 != window.location.href.indexOf("/search/label/")
    }

    function S() {
        return -1 != window.location.href.indexOf("/p/")
    }

    function I() {
        var t = window.location.href;
        return !S() && !w() && -1 != t.indexOf(".html")
    }

    function k() {
        var t = window.location.href;
        return -1 != t.indexOf("/cart/") || -1 != t.indexOf("?page=cart")
    }

    function L() {
        var t = window.location.href;
        return -1 != t.indexOf("/checkout/") || -1 != t.indexOf("?page=checkout")
    }

    function R() {
        var t = window.location.href;
        return -1 != t.indexOf("/wishlist/") || -1 != t.indexOf("?page=wishlist")
    }

    function P() {
        return !(w() || (t = window.location.href, e = t.indexOf("?"), -1 != e && (t = t.substring(0, e)), -1 != (e = t.indexOf("#")) && (t = t.substring(0, e)), -1 != (e = t.indexOf("://")) && (t = t.substring(e + 3)), (e = t.indexOf("/")) == t.length - 1 && (t = t.substring(0, e)), t == window.location.hostname) || T() || x() || S() || I() || k() || L() || R() || -1 != window.location.href.indexOf("/b/"));
        var t, e
    }

    function U(t) {
        var e = "",
            i = "",
            a = (t = t.toString()).indexOf(".");
        if (-1 != a ? (e = t.substring(0, a), i = t.substring(a + 1)) : e = t, i && i.length > 3 && (i = i.substring(0, 2), i = String(Number(i) + 1)), e.length <= 3) return i ? e + "." + i : t;
        new_price = "";
        for (var n = e.length - 1, s = 1; n >= 0; n -= 1, s++) new_price += e.substring(n, n + 1), s % 3 == 0 && s < e.length && (new_price += SEP_LONG_PRICE);
        for (e = "", n = new_price.length - 1; n >= 0; n -= 1) e += new_price.substring(n, n + 1);
        return t = e, i && (t += "." + i), t
    }

    function B() {
        try {
            return window.self !== window.top
        } catch (t) {
            return !0
        }
    }

    function M(t) {
        if (t.length)
            for (var e = 0; e < t.length; e++)
                if ("!0" === ("string" != typeof t[e] ? $(t[e]).html() : t[e])) return !0;
        return !1
    }

    function D(t) {
        if (!t.length) return "";
        for (var e = 0; e < t.length; e++) {
            var i = t[e];
            if (i && !(i.length <= 1) && 0 == i.indexOf("_") && !isNaN(i.substring(1))) return i.substring(1)
        }
        return ""
    }

    function F(t) {
        var e = "",
            i = "",
            a = "";
        if (t.length)
            for (var s = 0; s < t.length; s++) {
                var o = "";
                (o = "string" != typeof t[s] ? $(t[s]).html() : t[s]) && o.length > 1 && !isNaN(o.substring(1)) && (0 == o.indexOf("_") ? e = o.substring(1) : 0 == o.indexOf("-") && (i = o.substring(1))), "!0" === o && (a = '<div class="property out-of-stock efont">' + c("Out of stock") + "</div>")
            }
        return a || (e && i ? a = '<div class="property on-sale color-bg efont"><span class="label">' + c("On sale") + '</span><span class="old old-price" data-old="' + i + '">' + n + U(i) + r + '</span><span class="current current-price" data-price="' + e + '">' + n + U(e) + r + "</span></div>" : e && (a = '<div class="property normal color-bg efont current-price" data-price="' + e + '">' + n + U(e) + r + "</div>")), a
    }
    $.fn.slider = function (t) {
        var e, i = $.extend({}, {
                animation_speed: 1e3,
                pause_time: 4e3,
                control: !1,
                pause_when_hover: !1
            }, t),
            a = $(this),
            n = a.find(".slide"),
            s = 0,
            r = !0,
            o = !1,
            l = n.length,
            c = 0;

        function d() {
            if (0 == $("#header-2").length) return !1;
            var t = $("#header-2").offset().top,
                e = a.find(".inner"),
                i = e.offset().left,
                s = e.width(),
                r = a.find(".image").offset().top - t,
                o = n.find("a.slide-content"),
                l = a.find(".slide-content-wrapper");
            return a.find(".image").css("left", "100%").css("max-width", 40 * s / 100 + "px"), l.css("top", r + "px"), o.removeAttr("style"), o.css("position", "static"), o.each((function () {
                $(this).css("max-width", 60 * s / 100 + "px"), $(this).attr("end-top", $(this).offset().top - t), $(this).attr("end-left", i)
            })), a.find(".slide-content-wrapper").css("top", 0), o.each((function () {
                var e = $(this);
                if (e.css("position", "absolute"), e.is(".pre-title")) e.css("left", "50%"), e.attr("start-left", $(this).offset().left + 1), e.attr("start-top", e.attr("end-top")).css("top", e.attr("end-top") + "px").css("left", e.attr("start-left") + "px");
                else if ($(this).is(".title")) {
                    e.css("bottom", "100%");
                    var a = $(this).offset().top - t - 1;
                    e.css("top", a + "px").css("bottom", "auto").css("left", i + "px").attr("start-top", a).attr("start-left", i)
                } else if (e.is(".caption")) e.css("top", "100%"), a = $(this).offset().top - t + 1, e.css("top", a + "px").css("left", i + "px").attr("start-top", a).attr("start-left", i);
                else if (e.is(".button")) {
                    var n = e.css("padding"),
                        s = -(n = Number(n.replace("px", ""))) - e.width() - 1;
                    e.css("left", s + "px").css("right", "auto").attr("start-left", s).attr("start-top", e.attr("end-top")).css("top", e.attr("end-top") + "px")
                }
            })), !0
        }

        function p(t, d) {
            if (void 0 !== e && clearTimeout(e), r) {
                r = !1, d >= l && (d = 0), d < 0 && (d = l - 1), s = d;
                var h = i.animation_speed / 3,
                    u = 2 * i.animation_speed / 3;
                $(n[t]).find("a.slide-content").each((function () {
                    $(this).animate({
                        left: $(this).attr("start-left") + "px",
                        top: $(this).attr("start-top") + "px"
                    }, h, "easeOutBack")
                })), $(n[t]).find("a.image").each((function () {
                    $(this).animate({
                        left: "100%"
                    }, h, "easeOutBack", (function () {
                        $(n[t]).css("visibility", "hidden"), $(n[d]).css("visibility", "visible"), $(n[d]).find("a.slide-content").each((function () {
                            var t = Number($(this).attr("end-left"));
                            o && i.control && (t += c), $(this).animate({
                                left: t + "px",
                                top: $(this).attr("end-top") + "px"
                            }, u, "easeOutBack")
                        })), $(n[d]).find("a.image").each((function () {
                            var t = a.find(".inner"),
                                n = t.offset().left + t.width() - $(this).width();
                            o && i.control && (n -= c), $(this).animate({
                                left: n + "px"
                            }, u, "easeOutBack", (function () {
                                r = !0, o && i.pause_when_hover || (e = setTimeout((function () {
                                    p(d, d + 1)
                                }), i.pause_time))
                            }))
                        }))
                    }))
                }))
            }
        }
        i.control && a.append('<a class="slide-left slide-control white block abs"><i class="gis gi-angle-left"></i></a><a class="slide-right slide-control white block abs"><i class="gis gi-angle-right"></i></a>'), d() && ($(window).resize((function () {
            void 0 !== e ? (clearTimeout(e), d(), p(s, s + 1)) : setTimeout((function () {
                d(), p(s, s + 1)
            }), i.animation_speed)
        })), a.css("opacity", "1"), n.css("visibility", "hidden"), setTimeout((function () {
            d(), p(l - 1, 0)
        }), 200), a.mouseenter((function () {
            if (o = !0, i.pause_when_hover && void 0 !== e && clearTimeout(e), i.control) {
                var t = a.find(".inner"),
                    n = t.offset().left,
                    s = t.width();
                a.find(".slide-control").each((function () {
                    c = $(this).width(), $(this).css("top", (a.height() - $(this).height()) / 2 + "px"), $(this).is(".slide-left") ? $(this).animate({
                        right: n + s - $(this).width() + "px"
                    }, 200) : $(this).animate({
                        left: n + s - $(this).width() + "px"
                    }, 200)
                }))
            }
        })).mouseleave((function () {
            o = !1, i.pause_when_hover && (void 0 !== e && clearTimeout(e), e = setTimeout((function () {
                p(s, s + 1)
            }), i.pause_time)), i.control && a.find(".slide-control").each((function () {
                $(this).is(".slide-left") ? $(this).animate({
                    right: "100%"
                }, 200) : $(this).animate({
                    left: "100%"
                }, 200)
            }))
        })), $("body").keydown((function (t) {
            37 == t.keyCode && 37 == t.which ? (void 0 !== e && clearTimeout(e), p(s, s - 1)) : 39 == t.keyCode && 39 == t.which && (void 0 !== e && clearTimeout(e), p(s, s + 1))
        })), a.find(".slide-left").click((function () {
            void 0 !== e && clearTimeout(e), p(s, s - 1)
        })), a.find(".slide-right").click((function () {
            void 0 !== e && clearTimeout(e), p(s, s + 1)
        })))
    }, $.fn.slider_rtl = function (t) {
        var e, i = $.extend({}, {
                animation_speed: 1e3,
                pause_time: 4e3,
                control: !1,
                pause_when_hover: !1
            }, t),
            a = $(this),
            n = a.find(".slide"),
            s = 0,
            r = !0,
            o = !1,
            l = n.length,
            c = 0;

        function d() {
            var t = $("#header-2").offset().top,
                e = a.find(".inner"),
                i = e.offset().left,
                s = e.width(),
                r = a.find(".image").offset().top - t,
                o = n.find("a.slide-content"),
                l = a.find(".slide-content-wrapper");
            a.find(".image").css("right", "100%").css("max-width", 40 * s / 100 + "px"), l.css("top", r + "px"), o.removeAttr("style"), o.css("position", "static"), o.each((function () {
                $(this).css("max-width", 60 * s / 100 + "px"), $(this).attr("end-top", $(this).offset().top - t), $(this).attr("end-left", i)
            })), a.find(".slide-content-wrapper").css("top", 0), o.each((function () {
                var e = $(this);
                if (e.css("position", "absolute"), e.is(".pre-title")) e.css("right", "50%"), e.attr("start-left", $(this).offset().left + 1), e.attr("start-top", e.attr("end-top")).css("top", e.attr("end-top") + "px").css("right", e.attr("start-left") + "px");
                else if ($(this).is(".title")) {
                    e.css("bottom", "100%");
                    var a = $(this).offset().top - t - 1;
                    e.css("top", a + "px").css("bottom", "auto").css("right", i + "px").attr("start-top", a).attr("start-left", i)
                } else if (e.is(".caption")) e.css("top", "100%"), a = $(this).offset().top - t + 1, e.css("top", a + "px").css("right", i + "px").attr("start-top", a).attr("start-left", i);
                else if (e.is(".button")) {
                    var n = e.css("padding"),
                        s = -(n = Number(n.replace("px", ""))) - e.width() - 1;
                    e.css("right", s + "px").css("right", "auto").attr("start-left", s).attr("start-top", e.attr("end-top")).css("top", e.attr("end-top") + "px")
                }
            }))
        }

        function p(t, d) {
            if (void 0 !== e && clearTimeout(e), r) {
                r = !1, d >= l && (d = 0), d < 0 && (d = l - 1), s = d;
                var h = i.animation_speed / 3,
                    u = 2 * i.animation_speed / 3;
                $(n[t]).find("a.slide-content").each((function () {
                    $(this).animate({
                        right: $(this).attr("start-left") + "px",
                        top: $(this).attr("start-top") + "px"
                    }, h, "easeOutBack")
                })), $(n[t]).find("a.image").each((function () {
                    $(this).animate({
                        right: "100%"
                    }, h, "easeOutBack", (function () {
                        $(n[t]).css("visibility", "hidden"), $(n[d]).css("visibility", "visible"), $(n[d]).find("a.slide-content").each((function () {
                            var t = Number($(this).attr("end-left"));
                            o && i.control && (t += c), $(this).animate({
                                right: t + "px",
                                top: $(this).attr("end-top") + "px"
                            }, u, "easeOutBack")
                        })), $(n[d]).find("a.image").each((function () {
                            var t = a.find(".inner"),
                                n = t.offset().left + t.width() - $(this).width();
                            o && i.control && (n -= c), $(this).animate({
                                right: n + "px"
                            }, u, "easeOutBack", (function () {
                                r = !0, o && i.pause_when_hover || (e = setTimeout((function () {
                                    p(d, d + 1)
                                }), i.pause_time))
                            }))
                        }))
                    }))
                }))
            }
        }
        i.control && a.append('<a class="slide-right slide-control white block abs"><i class="gis gi-angle-left"></i></a><a class="slide-left slide-control white block abs"><i class="gis gi-angle-right"></i></a>'), d(), $(window).resize((function () {
            void 0 !== e ? (clearTimeout(e), d(), p(s, s + 1)) : setTimeout((function () {
                d(), p(s, s + 1)
            }), i.animation_speed)
        })), a.css("opacity", "1"), n.css("visibility", "hidden"), setTimeout((function () {
            d(), p(l - 1, 0)
        }), 200), a.mouseenter((function () {
            if (o = !0, i.pause_when_hover && void 0 !== e && clearTimeout(e), i.control) {
                var t = a.find(".inner"),
                    n = t.offset().left,
                    s = t.width();
                a.find(".slide-control").each((function () {
                    c = $(this).width(), $(this).css("top", (a.height() - $(this).height()) / 2 + "px"), $(this).is(".slide-left") ? $(this).animate({
                        left: n + s - $(this).width() + "px"
                    }, 200) : $(this).animate({
                        right: n + s - $(this).width() + "px"
                    }, 200)
                }))
            }
        })).mouseleave((function () {
            o = !1, i.pause_when_hover && (void 0 !== e && clearTimeout(e), e = setTimeout((function () {
                p(s, s + 1)
            }), i.pause_time)), i.control && a.find(".slide-control").each((function () {
                $(this).is(".slide-left") ? $(this).animate({
                    left: "100%"
                }, 200) : $(this).animate({
                    right: "100%"
                }, 200)
            }))
        })), $("body").keydown((function (t) {
            37 == t.keyCode && 37 == t.which ? (void 0 !== e && clearTimeout(e), p(s, s - 1)) : 39 == t.keyCode && 39 == t.which && (void 0 !== e && clearTimeout(e), p(s, s + 1))
        })), a.find(".slide-left").click((function () {
            void 0 !== e && clearTimeout(e), p(s, s - 1)
        })), a.find(".slide-right").click((function () {
            void 0 !== e && clearTimeout(e), p(s, s + 1)
        }))
    }, $(".image-list").each((function () {
        var t = new Array,
            e = 0,
            i = $(this).attr("id");
        $(this).find(".widget.Image").each((function () {
            t[e] = new Object, t[e].title = "", t[e].src = "", t[e].href = "", $(this).find("h2").each((function () {
                t[e].title = $(this).html()
            })), $(this).find(".widget-content").each((function () {
                $(this).find("img").each((function () {
                    t[e].src = $(this).attr("src")
                })), $(this).find(".caption").each((function () {
                    t[e].caption = $(this).html()
                })), $(this).find("a").each((function () {
                    t[e].href = $(this).attr("href")
                }))
            })), e++
        })), e && function (t, e) {
            if ("slider" === e) {
                s = $("#slider"), s.html('<div class="wide inner"></div>');
                for (var i = 0; i < t.length; i++) {
                    var a = "",
                        n = t[i].caption,
                        r = "";
                    if (n && -1 != n.indexOf("[") && -1 != n.indexOf("]")) {
                        var o = n.indexOf("["); - 1 !== (l = n.indexOf("]", o)) && (r = n.substring(o + 1, l), n = l + 1 < n.length ? n.substring(0, o) : n.substring(0, o) + n.substring(l + 1))
                    }
                    var l, c = t[i].title,
                        d = ""; - 1 != c.indexOf("[") && -1 != c.indexOf("]") && (o = c.indexOf("["), -1 !== (l = c.indexOf("]", o)) && (d = c.substring(o + 1, l), c = l + 1 < c.length ? c.substring(0, o) : c.substring(0, o) + c.substring(l + 1))), a += '<div class="slide">';
                    var p = "";
                    d && (p += '<a href="' + t[i].href + '" class="slide-content pre-title efont white block">' + d + "</a>"), c && (p += '<a href="' + t[i].href + '" class="slide-content title efont white block">' + c + "</a>"), n && (p += '<a href="' + t[i].href + '" class="slide-content caption white block">' + n + "</a>"), r && (p += '<a href="' + t[i].href + '" class="slide-content button efont white color-bg black-hover inb">' + r + "</a>"), p && (a += '<div class="slide-content-wrapper">' + p + "</div>"), t[i].src && (a += '<a href="' + t[i].href + '" class="image block abs"><img alt="slide-image" src="' + t[i].src + '"/></a>'), a += "</div>", s.append(a)
                }
                $('html[dir="rtl"]').length ? s.slider_rtl({
                    animation_speed: Slider_Animation_Speed,
                    pause_time: Slider_Pause_Time,
                    control: Slider_Control,
                    pause_when_hover: Slider_Pause_When_Hover
                }) : s.slider({
                    animation_speed: Slider_Animation_Speed,
                    pause_time: Slider_Pause_Time,
                    control: Slider_Control,
                    pause_when_hover: Slider_Pause_When_Hover
                })
            }
        }(t, i)
    })), f(), $(window).resize((function () {
        f()
    })), (k() || R() || L()) && ($(".widget#Blog1").html('<div class="blog-posts hfeed"><div class="clear"></div></div>'), $("#home-horizon, #home-sticky").remove(), $("#header-2").remove());
    var G = 0;
    $(".blog-posts.hfeed.index .index-post").each((function () {
        G % 2 == 0 ? $(this).addClass("even") : $(this).addClass("odd"), G % 3 == 0 && $(this).addClass("triple"), G % 4 == 0 && $(this).addClass("quad"), G++
    })), G = 0, $("#popular-items .index-post").each((function () {
        G % 2 == 0 ? $(this).addClass("even") : $(this).addClass("odd"), G % 3 == 0 && $(this).addClass("triple"), G % 4 == 0 && $(this).addClass("quad"), G++
    })), x() && 0 == $("#Blog1 .blog-posts.hfeed .index-post").length && $(".blog-posts.hfeed").prepend('<div class="empty-msg">' + c("Not Found Any Product Matching Your Query") + "</div>"), G = 0, $("#home-horizon-section").length && $(".widget.ContactForm").prependTo($("#home-horizon-section")), $("#home-horizon-section-2 .widget").each((function () {
        G % 2 == 0 ? $(this).addClass("even") : $(this).addClass("odd"), G % 3 == 0 && $(this).addClass("triple"), G % 4 == 0 && $(this).addClass("quad"), G++
    })), $("span.trans").each((function () {
        var t = $(this).attr("data-key");
        t && $(this).html(c(t))
    })), $(".follow-by-email-submit").each((function () {
        $(this).val(c("SUBSCRIBE"))
    })), $(".follow-by-email-address").each((function () {
        $(this).attr("placeholder", c("Email address..."))
    })), $("#header .menu a").each((function () {
        var t = $(this).html();
        0 == t.indexOf("_") && ($(this).addClass("sub"), t = t.replace(/_/gi, '<span class="tab"></span>'), $(this).html(t))
    }));
    var q = !1;

    function Y() {
        $("#bar .tabs .active").each((function () {
            var t = $("#bar .tabs").offset().left,
                e = $(this).offset().left + $(this).width() / 2,
                i = $("#bar .arrow"),
                a = i.width(),
                n = e - Math.sqrt(2) * a / 2 - t;
            i.css("left", n + "px")
        }))
    }
    $("#header .menu-toggle").click((function () {
        if (q) q = !1;
        else {
            var t = $("#header .menu");
            "none" === t.css("display") ? t.stop().slideDown(300) : t.stop().slideUp(300)
        }
    })), $("#header #LinkList1").hover((function () {
        $("#header .menu").stop().slideDown(300), q = !0, setTimeout((function () {
            q = !1
        }), 50)
    })), $("#header #LinkList1").mouseleave((function (t) {
        $("#header .menu").stop().slideUp(300), q = !1
    })), k() || L() || R() ? ($("#bar .inner .tabs").remove(), $("#bar .inner").prepend('<div class="breadcrumb"></div>')) : (Y(), $("#bar .tabs a").click((function () {
        $("#bar .tabs a.active").removeClass("active"), $(this).addClass("active"), Y()
    }))), $(".search-toggle").click((function () {
        $(".search-overlay").fadeIn(200), $("#search-form").animate({
            top: "30%",
            opacity: 1
        }, 400, "easeOutBack"), $("#search-text").focus()
    })), $(".search-overlay").click((function () {
        $(".search-overlay").fadeOut(200), $("#search-form").animate({
            top: "100%",
            opacity: 0
        }, 300)
    })), $("body").keydown((function (t) {
        27 == t.keyCode && "none" !== $(".search-overlay").css("display") && ($(".search-overlay").fadeOut(200), $("#search-form").animate({
            top: "100%",
            opacity: 0
        }, 300))
    })), $(".index-post").each((function () {
        $(this).append(F($(this).find(".property"))), $(this).find(".out-of-stock").length ? $(this).find(".add-to-cart").each((function () {
            $(this).html("+ " + c("Readmore") + " +"), $(this).addClass("disabled")
        })) : $(this).find(".current-price").length && $(this).find(".add-to-cart").each((function () {
            $(this).html("+ " + c("Add to cart") + " +"), $(this).removeAttr("href")
        }))
    })), $(".tabs a").click((function () {
        $(".tabs a").removeClass("active"), $(this).addClass("active"), $(this).is(".latest") ? ($("#blog").fadeIn(), $("#home-random").fadeOut(), $("#popular-items").fadeOut()) : $(this).is(".random") ? ($("#blog").fadeOut(), $("#home-random").fadeIn(), $("#popular-items").fadeOut()) : $(this).is(".popular") && ($("#blog").fadeOut(), $("#home-random").fadeOut(), $("#popular-items").fadeIn()), f()
    }));
    var H = new Array,
        K = new Array;
    $(".label-information").each((function () {
        var t = $(this).html();
        if (t && t.length > 1 && !isNaN(t.substring(1))) {
            if (0 == t.indexOf("_")) return;
            if (0 == t.indexOf("-")) return
        }
        if ("!0" !== t) {
            var e = H.length;
            H[e] = new Object, H[e].count = Number($(this).attr("data-count")), H[e].url = $(this).attr("data-url"), H[e].name = t
        }
    })), $('.post-tags a[rel="tag"]').each((function () {
        var t = $(this).html();
        if (t && t.length > 1 && !isNaN(t.substring(1))) {
            if (0 == t.indexOf("_")) return void(K[K.length] = t);
            if (0 == t.indexOf("-")) return void(K[K.length] = t)
        }
        "!0" !== t || (K[K.length] = t)
    }));
    for (var j = 0; j < H.length - 1; j++)
        for (var W = j + 1; W < H.length; W++)
            if (H[j].count < H[W].count) {
                var V = H[j];
                H[j] = H[W], H[W] = V
            } var z = !1;
    $(".breadcrumb").each((function () {
        var t = '<a href="/" class="black color-hover">' + c("Home") + '</a><span class="sep">/</span>';
        if (T()) {
            for (var e = window.location.href, i = 0; i < H.length; i++)
                if (-1 != e.indexOf(H[i].url)) {
                    t += '<a href="' + H[i].url + "?max-results=" + MAX_ARCHIVE_ITEMS + '" class="black color-hover">' + H[i].name + "</a>";
                    break
                }
        } else if (I())
            for (i = 0; i < H.length; i++) $('.post-tags a[rel="tag"]').each((function () {
                $(this).attr("href") === H[i].url && (z || (z = new Object), z.href = $(this).attr("href"), z.name = $(this).html(), t += '<a href="' + H[i].url + "?max-results=" + MAX_ARCHIVE_ITEMS + '" class="black color-hover">' + H[i].name + '</a><span class="sep">/</span>')
            }));
        else if (S());
        else if (P()) t += '<span class="bc-post-title black">404</span>', a = (a = $("title").html()).replace("___", "404"), $("title").html(a);
        else if (w()) t += '<span class="bc-post-title black">' + c("Archive") + "</span>";
        else if (k()) t += '<span class="bc-post-title black">' + c("Cart") + "</span>", a = (a = $("title").html()).replace("___", c("Cart")), $("title").html(a);
        else if (L()) t += '<span class="bc-post-title black">' + c("Checkout") + "</span>", a = (a = $("title").html()).replace("___", c("Checkout")), $("title").html(a);
        else if (R()) {
            var a;
            t += '<span class="bc-post-title black">' + c("Wishlist") + "</span>", a = (a = $("title").html()).replace("___", c("Wishlist")), $("title").html(a)
        }
        $(this).html(t)
    })), $("#home-horizon-section .widget.Text .widget-content").each((function () {
        for (var t = $(this).html(), e = 0; e < 1e3 && t; e++) {
            var i = t.indexOf("##");
            if (-1 == i) break;
            var a = t.indexOf("##", i + 2);
            if (-1 == a) break;
            var n = t.substring(i + 2, a);
            t = t.substring(0, i) + '<span class="icon"><i class="gis gi-' + n + '"></i></span>' + t.substring(a + 2)
        }
        $(this).html(t)
    }));
    var X = new Array;
    $(".post .post-description img").each((function () {
        var t = $(this).attr("alt"),
            e = $(this).attr("title");
        void 0 !== t && t && -1 !== t.indexOf("[stay]") || void 0 !== e && e && -1 !== e.indexOf("[stay]") || $(this).attr("src") && (X[X.length] = $(this).attr("src"), $(this).next().each((function () {
            $(this).is("br") && $(this).remove()
        })), $(this).parent("a").each((function () {
            $(this).next().each((function () {
                $(this).is("br") && $(this).remove()
            })), $(this).parent("div.separator").each((function () {
                $(this).next().each((function () {
                    $(this).is("br") && $(this).remove()
                }))
            }))
        })), $(this).parent("div.separator").each((function () {
            $(this).next().each((function () {
                $(this).is("br") && $(this).remove()
            }))
        })), $(this).parent("div.separator").each((function () {
            $(this).remove()
        })), $(this).parent("a").each((function () {
            $(this).parent("div.separator").each((function () {
                $(this).remove()
            })), $(this).remove()
        })), $(this).remove())
    })), X.length && ($(".post-header .desc-image-list").html((function () {
        var t = "";
        t += '<div class="full">';
        for (var e = 0; e < X.length; e++) t += 0 == e ? '<div class="natural-thumbnail active"><img src="' + X[e] + '" alt="post-full-image"/></div>' : '<div class="natural-thumbnail" style="opacity: 0" ><img src="' + X[e] + '" alt="post-full-image"/></div>';
        if (t += "</div>", X.length > 1) {
            for (t += '<div class="thumb">', e = 0; e < X.length; e++) t += '<a class="natural-thumbnail"><img src="' + X[e] + '" alt="post-thumb-image"/></a>';
            t += '<div class="clear"></div></div>'
        }
        return t
    })), f(), $(".post-header .desc-image-list .thumb .natural-thumbnail").click((function () {
        $(this).find("img").each((function () {
            var t = $(this).attr("src");
            $(".post-header .desc-image-list .full .natural-thumbnail").each((function () {
                "1" == $(this).css("opacity") && $(this).stop().removeClass("active").animate({
                    opacity: 0
                }, 100, (function () {
                    $(".post-header .desc-image-list .full .natural-thumbnail").each((function () {
                        t === $(this).find("img").attr("src") && $(this).stop().addClass("active").animate({
                            opacity: 1
                        }, 100)
                    }))
                }))
            }))
        }))
    })));
    var Z = 0,
        Q = !1;
    $(".post.hentry .post-header-meta-2").html((function () {
        for (var t = '<span class="price-label">' + c("Price") + ":</span>", e = !1, i = 0; i < K.length; i++)
            if (name = K[i], name && name.length > 1 && !isNaN(name.substring(1)) && 0 == name.indexOf("-")) {
                t += '<span class="inb old-price efont">' + n + U(name.substring(1)) + r + "</span>", e = !0;
                break
            } for (i = 0; i < K.length; i++)
            if (name = K[i], name && name.length > 1 && !isNaN(name.substring(1)) && 0 == name.indexOf("_")) {
                Z = name.substring(1), t += '<span class="inb cur-price efont">' + n + U(name.substring(1)) + r + "</span>";
                break
            } if (!Z) return "";
        for (e && (t += '<span class="inb color-bg white efont on-sale">' + c("On sale") + "</span>"), i = 0; i < K.length; i++)
            if (name = K[i], name && name.length > 1 && !isNaN(name.substring(1)) && "!0" === name) {
                Q = !0, t += '<span class="inb white out-of-stock efont">' + c("Out of stock") + "</span>";
                break
            } return t
    }));
    var J = c("Some items have no price data. Please reload and contact admin for updating"),
        tt = c("Some items had been deleted or blog is in Private mode. Please reload and contact admin"),
        et = "add_to_cart",
        it = "add_to_wishlist";

    function at() {
        return !(!y() && !N())
    }

    function nt(t) {
        var e = new Array,
            i = "";
        if (y()) i = A(t);
        else {
            if (!N()) return !1;
            i = localStorage.getItem(t)
        }
        if (i) {
            i = i.split(",");
            for (var a = 0; a < i.length; a++) i[a] && -1 != i[a].indexOf("(") && -1 != i[a].indexOf(")") && (idx = e.length, e[idx] = new Object, e[idx].id = i[a].substring(0, i[a].indexOf("(")), e[idx].number = Number(i[a].substring(i[a].indexOf("(") + 1, i[a].indexOf(")"))))
        }
        return !!e.length && e
    }

    function st(t, e, i) {
        var a = nt(t);
        if (0 == a)(a = new Array)[0] = new Object, a[0].id = e, a[0].number = i;
        else {
            for (var n = 0; n < a.length; n++)
                if (a[n].id == e) {
                    a[n].number += i;
                    break
                } n >= a.length && (idx = a.length, a[idx] = new Object, a[idx].id = e, a[idx].number = i)
        }
        var s = "";
        for (n = 0; n < a.length; n++) s && (s += ","), s += a[n].id + "(" + a[n].number + ")";
        y() ? E(t, s, CART_CACHE_DURATION) : N && localStorage.setItem(t, s)
    }

    function rt(t, e) {
        var i = nt(t);
        if (i) {
            for (var a = 0; a < i.length; a++)
                if (i[a].id == e) {
                    i[a].number = 0;
                    break
                } if (a >= i.length) return !1;
            if (i.length) {
                var n = "";
                for (a = 0; a < i.length; a++) i[a].number && (n && (n += ","), n += i[a].id + "(" + i[a].number + ")");
                return y() ? E(t, n, CART_CACHE_DURATION) : N && localStorage.setItem(t, n), !0
            }
        }
        return !1
    }

    function ot(t) {
        return y() ? (E(t, ""), !0) : !!N && (localStorage.removeItem(t), !0)
    }

    function lt(t) {
        var e = $(".cart-toggle");
        t == it && (e = $(".wishlist-toggle"));
        var i = nt(t);
        e.find(".number").remove(), i && e.find(".gis").each((function () {
            $('<span class="number color-bg white block abs">' + i.length + "</span>").insertAfter($(this))
        }))
    }

    function ct(t) {
        if (!$(t).is(".disabled")) {
            var e = 1;
            $(t).find(".counter").length && (e = Number($(t).find(".counter").text()));
            var i = $(t).attr("data-id");
            i && e && (st(et, i, e), lt(et), $(t).find(".counter").length && $(t).parents(".shopping-item.hentry").each((function () {
                $(this).find("h1.shopping-title").each((function () {
                    $(".shopping-msg").html('<span class="icon green-bg white"><i class="gis gi-check"></i></span> "' + $(this).html() + '" ' + c("was successfully added to your cart") + '. <a href="/?page=cart">' + c("View Cart") + "</a>")
                }))
            })), $(t).is(".in-list") && $(t).html('<i class="gis gi-check"></i> ' + c("Add to cart")))
        }
    }
    at() && ($(".wishlist-toggle").removeClass("hide").attr("title", c("View wishlist")), $(".cart-toggle").removeClass("hide").attr("title", c("View Cart"))), $(".post-header-action-buttons").html((function () {
        var t = "",
            e = $(this).attr("data-id");
        return Z && at() && !Q && (Q || (t += '<div class="action-button-wrapper add-to-cart-button-wrapper rel">', t += '<span class="add-to-cart-up change-cart-counter-button color-hover ptr"><i class="gis gi-angle-up"></i></span>', t += '<span class="add-to-cart-down change-cart-counter-button color-hover ptr"><i class="gis gi-angle-down"></i></span>', t += '<a class="add-to-cart color-bg white black-bg-hover" data-id="' + e + '">' + c("Add") + ' <span class="counter b">1</span> ' + c("items to cart") + ' <i class="gis gi-shopping-cart icon"></i></a>', t += '<div class="clear"></div>', t += "</div>", d(WHATSAPP_PHONE_ORDER) || (t += '<div class="action-button-wrapper order-via-whatsapp-button-wrapper rel">', t += '<a class="order-via-whatsapp green-bg white black-bg-hover" data-id="' + e + '" href="whatsapp://send?phone=' + WHATSAPP_PHONE_ORDER + "&text=" + c("Hi, I would like to buy") + " " + window.location.href + '"><span>' + c("Order via Whatsapp") + '</span><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"></path> </g></svg></a>', t += '<div class="clear"></div>', t += "</div>")), t += '<div class="action-button-wrapper add-to-wishlist-button-wrapper rel">', t += '<a class="add-to-wishlist white-bg black green-bg-hover white-hover" data-id="' + e + '">' + c("Add to Wishlist") + ' <i class="gis gi-heart"></i></a>', t += '<div class="clear"></div>', t += "</div>", t += '<div class="clear"></div>', t += '<div class="shopping-msg"></div>', t += '<div class="clear"></div>'), t
    })), $(".post-header-action-buttons .change-cart-counter-button").click((function () {
        var t = Number($(".post-header-action-buttons .add-to-cart .counter").html());
        $(this).is(".add-to-cart-up") ? t++ : t > 1 && (t -= 1), $(".post-header-action-buttons .add-to-cart .counter").html(t)
    })), lt(et), $(".add-to-cart").click((function () {
        ct($(this))
    })), $(".add-to-wishlist").click((function () {
        if (!$(this).is(".disabled")) {
            var t = $(this).attr("data-id");
            t && (st(it, t, 1), $(this).parents(".shopping-item").each((function () {
                $(this).find("h1.shopping-title").each((function () {
                    $(".shopping-msg").html('<span class="icon green-bg white"><i class="gis gi-check"></i></span> "' + $(this).html() + '" ' + c("was successfully added to your wishlist") + '. <a href="/?page=wishlist">' + c("View wishlist") + "</a>")
                }))
            })))
        }
    })), $('<div class="cart-content white-bg abs right0">\t<div class="cart-list">\t</div>\t<p class="total"><strong>' + c("Subtotal") + ':</strong> <span class="amount">' + n + '<span class="value">0</span>' + r + '</span></p>\t<p class="buttons">\t\t<a href="/?page=cart" class="button viewcart grey-bg black color-bg-hover white-hover inb efont">' + c("View Cart") + '</a>\t\t<a href="/?page=checkout" class="button checkout inb color-bg white black-bg-hover efont">' + c("Checkout") + "</a>\t</p></div>").appendTo(".cart-toggle-wrapper");
    var dt = nt(et),
        pt = 0,
        ht = !1,
        ut = "",
        mt = !1;

    function ft() {
        ht ? mt || (mt = !0, $.get(t + "/posts/default/" + dt[pt].id + "?alt=json-in-script", (function (t) {
            if (mt = !1, ht) {
                var e = _(t),
                    i = D(e.cate);
                if (e.id && i)
                    if (ut += '<div class="cart-item">\t\t\t\t<a href="' + e.link + '" class="cart-item-thumb">\t\t\t\t<img src="' + e.thumbnail + '" alt="cart-item-thumb"></a>\t\t\t\t<div class="cart-text">\t\t\t\t\t<a class="cart-item-title" href="' + e.link + '">' + e.title + '</a>\t\t\t\t\t<span class="quantity"><span class="number">' + dt[pt].number + '</span> &#x2715; <span class="price">' + n + '<span class="price-value" data-price="' + i + '">' + U(i) + "</span>" + r + '</span></span>\t\t\t\t\t<span class="cart-item-remove" data-id="' + dt[pt].id + '" title="' + c("Remove from cart") + '">&#x2715;</span>\t\t\t\t</div>\t\t\t\t<div class="clear"></div>\t\t\t</div>', ++pt < dt.length) ft();
                    else {
                        $(".cart-toggle-wrapper .cart-content .cart-list").html(ut), $(".cart-toggle-wrapper .cart-content .cart-list .ajax-loader").remove();
                        var a = 0;
                        $(".cart-toggle-wrapper .cart-content .cart-list .cart-item").each((function () {
                            var t = Number($(this).find(".price-value").attr("data-price")),
                                e = Number($(this).find(".number").html());
                            a += t * e
                        })), $(".cart-toggle-wrapper .cart-content .total .amount .value").html(U(a)), $(".cart-toggle-wrapper .cart-content .cart-list .cart-item .cart-item-remove").click((function () {
                            var t = $(this).attr("data-id");
                            rt(et, t), lt(et), _t()
                        }))
                    }
                else B() || ($(".cart-toggle-wrapper .cart-content .cart-list").html(J), ot(et), lt(et))
            } else $(".cart-content").hide()
        }), "jsonp").fail((function () {
            B() || ($(".cart-toggle-wrapper .cart-content .cart-list").html(tt), ot(et), lt(et))
        }))) : $(".cart-content").hide()
    }

    function _t() {
        $(".cart-toggle").find(".number").length ? ($(".cart-toggle-wrapper .cart-content").show(), $(".cart-toggle-wrapper .cart-content .cart-list").html('<img class="ajax-loader" src="' + AJAX_LOADING_IMAGE + '"/>'), $(".cart-toggle-wrapper .cart-content .total .value").html("0"), dt = nt(et), pt = 0, ut = "", !1 !== dt && (ht = !0, ft())) : $(".cart-toggle-wrapper .cart-content").hide()
    }
    $(".cart-toggle-wrapper").mouseenter((function () {
        0 != ht || $(this).is(".disabled") || _t()
    })), $(".cart-toggle-wrapper").mousedown((function () {
        0 != ht || $(this).is(".disabled") || _t()
    })), $(".cart-toggle-wrapper").mouseleave((function () {
        ht = !1, $(".cart-content").hide()
    }));
    var gt = nt(it),
        bt = 0;
    R() && ($("body").addClass("wishlist"), $(".blog-posts.hfeed").addClass("wishlist-page"), gt = nt(it), bt = 0, !1 !== gt && gt.length ? ($(".blog-posts.hfeed").prepend('<img class="ajax-loader" src="' + AJAX_LOADING_IMAGE + '"/>'), function i() {
        $.get(t + "/posts/default/" + gt[bt].id + "?alt=json-in-script", (function (t) {
            var a = _(t),
                n = D(a.cate);
            if (a.id && n) {
                var s = "",
                    r = "";
                r += bt % 2 == 0 ? " even" : " odd", bt % 3 == 0 && (r += " triple"), bt % 4 == 0 && (r += " quad"), e = a, s += '<div class="index-post small shopping-item' + r + '" data-id="' + e.id + '">', s += '<a class="natural-thumbnail" href="' + e.link + '">', s += '<img src="' + e.thumbnail + '" class="shopping-thumb"/>', s += "</a>", s += '<div class="content tcenter">', s += '<h2 class="b_ shopping-title"><a class="black color-hover" href="' + e.link + '">' + e.title + "</a></h2>", M(e.cate) ? s += '<a class="add-to-cart disabled" href="' + e.link + '"><span class="text black-hover">+ ' + c("Readmore") + " +</span></a>" : s += '<a class="add-to-cart in-list" data-id="' + e.id + '"><span class="text black-hover">+ ' + c("Add to cart") + " +</span></a>", s += '<div class="clear"></div>', s += '<a class="remove-from-wishlist" data-id="' + e.id + '"><span class="text black color-hover">' + c("Remove from wishlist") + "</span></a>", s += "</div>", s += F(e.cate), s += '<div class="clear"></div></div>', $(".blog-posts.hfeed .ajax-loader").each((function () {
                    $(s).insertBefore($(this))
                })), ++bt < gt.length ? i() : ($(".blog-posts.hfeed .ajax-loader").each((function () {
                    $(this).remove()
                })), f(), $(".blog-posts.hfeed .index-post a.add-to-cart").click((function () {
                    ct($(this))
                })), $(".blog-posts.hfeed .index-post a.remove-from-wishlist").click((function () {
                    var t;
                    t = $(this), $(t).each((function () {
                        id = $(this).attr("data-id"), rt(it, id), $('.index-post[data-id="' + id + '"]').remove(), 0 == $(".index-post").length && $(".blog-posts.hfeed").prepend('<div class="empty-wishlist empty-msg">' + c("The wishlist is empty now") + "</div>")
                    }))
                })))
            } else B() || ($(".blog-posts.hfeed").html(J), ot(it), lt(it))
        }), "jsonp").fail((function () {
            B() || ($(".blog-posts.hfeed").html(tt), ot(it), lt(it))
        }))
    }()) : $(".blog-posts.hfeed").prepend('<div class="empty-wishlist empty-msg">' + c("The wishlist is empty now") + "</div>"));
    var vt = nt(et),
        $t = 0,
        Et = "";
    if (k()) {
        function yt() {
            $.get(t + "/posts/default/" + vt[$t].id + "?alt=json-in-script", (function (t) {
                var e = _(t),
                    i = D(e.cate);
                if (e.id && i) {
                    if (Et += '<tr class="cart_item" data-id="' + e.id + '">\t\t\t\t\t<td class="product-remove">\t\t\t\t\t\t<a class="remove" title="' + c("Remove from cart") + '" data-id="' + e.id + '">&#x2715;</a>\t\t\t\t\t</td>\t\t\t\t\t<td class="product-thumbnail">\t\t\t\t\t\t<a href="' + e.link + '"><img src="' + e.thumbnail + '"></a>\t\t\t\t\t</td>\t\t\t\t\t<td class="product-name">\t\t\t\t\t\t<a href="' + e.link + '">' + e.title + '</a>\t\t\t\t\t</td>\t\t\t\t\t<td class="product-price">\t\t\t\t\t\t<span class="amount">' + n + '<span class="price-value" data-id="' + e.id + '" data-price="' + i + '">' + U(i) + "</span>" + r + '</span>\t\t\t\t\t</td>\t\t\t\t\t<td class="product-quantity">\t\t\t\t\t\t<div class="quantity buttons_added"><input type="button" value="-" class="minus" data-id="' + e.id + '"><input type="number" step="1" min="1" name="cart[' + e.id + '][qty]" value="' + vt[$t].number + '" class="input-text qty text" size="4"><input type="button" value="+" class="plus" data-id="' + e.id + '"></div>\t\t\t\t\t</td>\t\t\t\t\t<td class="product-subtotal">\t\t\t\t\t\t<span class="amount">' + n + '<span class="subtotal-value">' + U(Number(i) * vt[$t].number) + "</span>" + r + "</span>\t\t\t\t\t</td>\t\t\t\t</tr>", ++$t < vt.length) yt();
                    else if (Et) {
                        Et = '<table class="cart-page-table" cellspacing="0"><thead>\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t<th class="product-remove">&nbsp;</th>\t\t\t\t\t\t\t\t<th class="product-thumbnail">&nbsp;</th>\t\t\t\t\t\t\t\t<th class="product-name">' + c("Product") + '</th>\t\t\t\t\t\t\t\t<th class="product-price">' + c("Price") + '</th>\t\t\t\t\t\t\t\t<th class="product-quantity">' + c("Quantity") + '</th>\t\t\t\t\t\t\t\t<th class="product-subtotal">' + c("Total") + "</th>\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t</thead><tbody>" + Et + "</tbody></table>", $(".cart-page-content").html(Et);
                        var a = 0;
                        $(".cart-page-content .cart_item").each((function () {
                            var t = $(this).attr("data-id"),
                                e = Number($('.price-value[data-id="' + t + '"]').attr("data-price")),
                                i = Number($('input[name="cart[' + t + '][qty]"]').val());
                            a += e * i
                        })), $(".cart-page-subtotal").html('<strong class="label">' + c("Subtotal") + ':</strong> <span class="subtotal-value">' + n + '<span class="value">' + U(a) + "</span>" + r + "</span>"), $(".cart-page-buttons").html('<a class="update-cart-page inb color-bg white-bg black-bg-hover black white-hover">' + c("Update cart") + '</a> <a class="proceed-checkout inb color-bg white green-bg-hover" href="?page=checkout">' + c("Proceed checkout") + "</a>"), $('.cart_item .product-quantity input[type="button"]').click((function () {
                            var t = $(this).attr("data-id"),
                                e = Number($('input[name="cart[' + t + '][qty]"]').val());
                            if ($(this).is(".minus")) {
                                if (e <= 1) return void $('input[name="cart[' + t + '][qty]"]').val(1);
                                e -= 1
                            } else e++;
                            $('input[name="cart[' + t + '][qty]"]').val(e)
                        })), $(".update-cart-page").click((function () {
                            $(".cart_item").each((function () {
                                var t = $(this).attr("data-id"),
                                    e = Number($('input[name="cart[' + t + '][qty]"]').val());
                                ! function (t, e, i) {
                                    var a = nt(t);
                                    if (a) {
                                        for (var n = 0; n < a.length; n++)
                                            if (a[n].id == e) {
                                                a[n].number = i;
                                                break
                                            } if (a.length) {
                                            var s = "";
                                            for (n = 0; n < a.length; n++) s && (s += ","), s += a[n].id + "(" + a[n].number + ")";
                                            y() ? E(t, s, CART_CACHE_DURATION) : N && localStorage.setItem(t, s)
                                        }
                                    }
                                }(et, t, e)
                            })), At()
                        })), $(".cart_item .remove").click((function () {
                            var t = $(this).attr("data-id");
                            rt(et, t), lt(et), At()
                        }))
                    }
                } else B() || ($(".cart-page-content").html(J), ot(et), lt(et))
            }), "jsonp").fail((function () {
                B() || ($(".cart-page-content").html(tt), ot(et), lt(et))
            }))
        }

        function At() {
            vt = nt(et), $t = 0, Et = "", $(".cart-page-content").html(""), $(".cart-page-subtotal").html(""), $(".cart-page-buttons").html(""), vt ? ($(".cart-page-content").html('<img class="ajax-loader" src="' + AJAX_LOADING_IMAGE + '"/>'), yt()) : $(".blog-posts.hfeed").prepend('<div class="empty-cart empty-msg">' + c("The cart is empty now") + "</div>")
        }
        $("body").addClass("cart"), $(".blog-posts.hfeed").addClass("cart-page"), $(".cart-toggle-wrapper").addClass("disabled"), $(".blog-posts.hfeed").prepend('<div class="cart-page-buttons"></div>'), $(".blog-posts.hfeed").prepend('<div class="cart-page-subtotal"></div>'), $(".blog-posts.hfeed").prepend('<div class="cart-page-content"></div>'), At()
    }
    var Nt = {
            _AI: "&#197;land Islands",
            _AF: "Afghanistan",
            AL: "Albania",
            DZ: "Algeria",
            AD: "Andorra",
            AO: "Angola",
            AI: "Anguilla",
            _AN: "Antarctica",
            AG: "Antigua & Barbuda",
            AR: "Argentina",
            AM: "Armenia",
            AW: "Aruba",
            AU: "Australia",
            AT: "Austria",
            AZ: "Azerbaijan",
            BS: "Bahamas",
            BH: "Bahrain",
            _BD: "Bangladesh",
            BB: "Barbados",
            BY: "Belarus",
            _BL: "Belau",
            BE: "Belgium",
            BZ: "Belize",
            BJ: "Benin",
            BM: "Bermuda",
            BT: "Bhutan",
            BO: "Bolivia",
            _BS: "Bonaire, Saint Eustatius and Saba",
            BA: "Bosnia & Herzegovina",
            BW: "Botswana",
            _BI: "Bouvet Island",
            BR: "Brazil",
            _BR: "British Indian Ocean Territory",
            VG: "British Virgin Islands",
            BN: "Brunei",
            BG: "Bulgaria",
            BF: "Burkina Faso",
            BI: "Burundi",
            KH: "Cambodia",
            CM: "Cameroon",
            CA: "Canada",
            CV: "Cape Verde",
            KY: "Cayman Islands",
            _CA: "Central African Republic",
            TD: "Chad",
            CL: "Chile",
            C2: "China",
            _CI: "Christmas Island",
            _CC: "Cocos (Keeling) Islands",
            CO: "Colombia",
            KM: "Comoros",
            CG: "Congo - Brazzaville",
            CD: "Congo - Kinshasa",
            CK: "Cook Islands",
            CR: "Costa Rica",
            CI: "Côte D’ivoire",
            HR: "Croatia",
            _CB: "Cuba",
            _CR: "CuraÇao",
            CY: "Cyprus",
            CZ: "Czech Republic",
            DK: "Denmark",
            DJ: "Djibouti",
            DM: "Dominica",
            DO: "Dominican Republic",
            EC: "Ecuador",
            EG: "Egypt",
            SV: "El Salvador",
            _EG: "Equatorial Guinea",
            ER: "Eritrea",
            EE: "Estonia",
            ET: "Ethiopia",
            FK: "Falkland Islands",
            FO: "Faroe Islands",
            FJ: "Fiji",
            FI: "Finland",
            FR: "France",
            GF: "French Guiana",
            PF: "French Polynesia",
            _FS: "French Southern Territories",
            GA: "Gabon",
            GM: "Gambia",
            GE: "Georgia",
            DE: "Germany",
            _GH: "Ghana",
            GI: "Gibraltar",
            GR: "Greece",
            GL: "Greenland",
            GD: "Grenada",
            GP: "Guadeloupe",
            GT: "Guatemala",
            _GS: "Guernsey",
            GN: "Guinea",
            GW: "Guinea-bissau",
            GY: "Guyana",
            _HT: "Haiti",
            _HM: "Heard Island and McDonald Islands",
            HN: "Honduras",
            HK: "Hong Kong",
            HU: "Hungary",
            IS: "Iceland",
            IN: "India",
            ID: "Indonesia",
            IE: "Ireland",
            _IR: "Iran",
            _IQ: "Iraq",
            _IM: "Isle of Man",
            IL: "Israel",
            IT: "Italy",
            _IC: "Ivory Coast",
            JM: "Jamaica",
            JP: "Japan",
            _JS: "Jersey",
            JO: "Jordan",
            KZ: "Kazakhstan",
            KE: "Kenya",
            KI: "Kiribati",
            KW: "Kuwait",
            KG: "Kyrgyzstan",
            LA: "Laos",
            LV: "Latvia",
            _LE: "Lebanon",
            LS: "Lesotho",
            _LI: "Liberia",
            _LB: "Libya",
            LI: "Liechtenstein",
            LT: "Lithuania",
            LU: "Luxembourg",
            _MC: "Macao S.A.R., China",
            MK: "Macedonia",
            MG: "Madagascar",
            MW: "Malawi",
            MY: "Malaysia",
            MV: "Maldives",
            ML: "Mali",
            MT: "Malta",
            MH: "Marshall Islands",
            MQ: "Martinique",
            MR: "Mauritania",
            MU: "Mauritius",
            YT: "Mayotte",
            MX: "Mexico",
            FM: "Micronesia",
            MD: "Moldova",
            MC: "Monaco",
            MN: "Mongolia",
            ME: "Montenegro",
            MS: "Montserrat",
            MA: "Morocco",
            MZ: "Mozambique",
            _MY: "Myanmar",
            NA: "Namibia",
            NR: "Nauru",
            NP: "Nepal",
            NL: "Netherlands",
            _NA: "Netherlands Antilles",
            NC: "New Caledonia",
            NZ: "New Zealand",
            NI: "Nicaragua",
            NE: "Niger",
            NG: "Nigeria",
            NU: "Niue",
            NF: "Norfolk Island",
            _NK: "North Korea",
            NO: "Norway",
            OM: "Oman",
            _PA: "Pakistan",
            _PL: "Palestinian Territory",
            PW: "Palau",
            PA: "Panama",
            PG: "Papua New Guinea",
            PY: "Paraguay",
            PE: "Peru",
            PH: "Philippines",
            PN: "Pitcairn Islands",
            PL: "Poland",
            PT: "Portugal",
            QA: "Qatar",
            _RI: "Republic of Ireland",
            RE: "Réunion",
            RO: "Romania",
            RU: "Russia",
            RW: "Rwanda",
            _ST: "São Tomé and Príncipe",
            _SB: "Saint Barthélemy",
            _SH: "Saint Helena",
            _SK: "Saint Kitts and Nevis",
            _SL: "Saint Lucia",
            _SD: "Saint Martin (Dutch part)",
            _SF: "Saint Martin (French part)",
            _SP: "Saint Pierre and Miquelon",
            _SV: "Saint Vincent and the Grenadines",
            WS: "Samoa",
            SM: "San Marino",
            ST: "São Tomé & Príncipe",
            SA: "Saudi Arabia",
            SN: "Senegal",
            RS: "Serbia",
            SC: "Seychelles",
            SL: "Sierra Leone",
            SG: "Singapore",
            SK: "Slovakia",
            SI: "Slovenia",
            SB: "Solomon Islands",
            SO: "Somalia",
            ZA: "South Africa",
            _SG: "South Georgia/Sandwich Islands",
            KR: "South Korea",
            _SS: "South Sudan",
            ES: "Spain",
            LK: "Sri Lanka",
            _SU: "Sudan",
            SH: "St. Helena",
            KN: "St. Kitts & Nevis",
            LC: "St. Lucia",
            PM: "St. Pierre & Miquelon",
            VC: "St. Vincent & Grenadines",
            SR: "Suriname",
            SJ: "Svalbard & Jan Mayen",
            SZ: "Swaziland",
            SE: "Sweden",
            CH: "Switzerland",
            _SY: "Syria",
            TW: "Taiwan",
            TJ: "Tajikistan",
            TZ: "Tanzania",
            TH: "Thailand",
            _TL: "Timor-Leste",
            TG: "Togo",
            _TK: "Tokelau",
            TO: "Tonga",
            TT: "Trinidad & Tobago",
            TN: "Tunisia",
            _TU: "Turkey",
            TM: "Turkmenistan",
            TC: "Turks & Caicos Islands",
            TV: "Tuvalu",
            UG: "Uganda",
            UA: "Ukraine",
            AE: "United Arab Emirates",
            GB: "United Kingdom (UK)",
            US: "United States (US)",
            UY: "Uruguay",
            _UZ: "Uzbekistan",
            VU: "Vanuatu",
            VA: "Vatican City",
            VE: "Venezuela",
            VN: "Vietnam",
            WF: "Wallis & Futuna",
            _WE: "Western Sahara",
            _WS: "Western Samoa",
            YE: "Yemen",
            ZM: "Zambia",
            ZW: "Zimbabwe"
        },
        Ot = new Object;
    Ot.items = new Array, Ot.id = function () {
        var t = new Date,
            e = t.getTime();
        return e += t.getSeconds(), e += t.getMinutes(), e += t.getHours(), e += t.getDay(), e += t.getDate(), (e += t.getMonth()) + t.getFullYear()
    }(), Ot.subtotal = 0, Ot.total = 0, Ot.shipping_fee = 0, Ot.tax_fee = 0, Ot.shipping_text = c("Free Shipping"), Ot.tax_text = c("Tax Free"), Ot.billing_info = new Object, Ot.shipping_info = new Object, Ot.billing_info.country = "", Ot.billing_info.firstname = "", Ot.billing_info.lastname = "", Ot.billing_info.companyname = "", Ot.billing_info.address = "", Ot.billing_info.towncitystate = "", Ot.billing_info.postcodezip = "", Ot.billing_info.email = "", Ot.billing_info.phone = "", Ot.shipping_info.country = "", Ot.shipping_info.firstname = "", Ot.shipping_info.lastname = "", Ot.shipping_info.companyname = "", Ot.shipping_info.address = "", Ot.shipping_info.towncitystate = "", Ot.shipping_info.postcodezip = "", Ot.payment_methods = "", Ot.order_notes = "";
    var Ct = nt(et),
        wt = 0,
        xt = "",
        Tt = "",
        St = "",
        It = "",
        kt = "",
        Lt = "";

    function Rt() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        t && console.log("Checkout Error: ", t);
        var e = Ot.total,
            a = "";
        if (i && u(i, !0) && (e = h(i, Ot.total), a += '<tr>\t\t\t<th scope="row">' + c("Coupon") + ": " + i + "</th>\t\t\t<td>" + u(i, !1) + "</td>\t\t</tr>"), Ot.payment_methods == c("Direct Bank Transfer") || Ot.payment_methods == c("Cheque Payment") || Ot.payment_methods == c("Cash on Delivery") || Ot.payment_methods == c("UPI Transfer")) {
            new Date;
            var s = $("#ship-to-different-address-checkbox").is(":checked"),
                p = "";
            if (SHOW_CHECKOUT_PRINT && (p = '<p><button class="checkout-print" onclick="window.print()">' + l("Print the Order") + "</button></p>"), t)
                if (GOOGLE_FORM_PREFILL_URL && GOOGLE_FORM_PREFILL_URL.includes("https://docs.google.com/forms/") && GOOGLE_FORM_PREFILL_URL.includes("?") && GOOGLE_FORM_PREFILL_URL.includes("entry.")) {
                    let t = GOOGLE_FORM_PREFILL_URL.split("?")[0],
                        e = GOOGLE_FORM_PREFILL_URL.split("entry.");
                    e.shift();
                    let i = e.map((t => (t = t.replaceAll("&", "")).split("=")[0])).at(-1),
                        a = new URL(t);
                    a.searchParams.set(`entry.${i}`, c("Name") + ": " + +It + "\n" + c("Email") + ": " + St + "\n" + c("Order ID") + ": " + kt + "\n" + c("Order Details") + ": \n" + Tt + "\n"), p += "<p>" + c("Due to a network problem, the shop owner did not receive your order. We are redirecting you to Google Form so you can submit the order there ...") + "</p>", setTimeout((function () {
                        window.open(a.href, "_blank")
                    }), 3e3)
                } else p += "<p>" + c("Thank you. Here is your order. However, due to a network problem, the shop owner did not receive your order. Please take a screenshot and send it to the owner to finish your order") + "</p>";
            else p += "<p>" + c("Thank you. Your order has been received") + "</p>";
            if (p += '<ul class="order_details">\t\t\t<li class="order">\t\t\t\t<div class="">' + c("Order ID") + ':</div><strong class="color">#' + Ot.id + '</strong>\t\t\t</li>\t\t\t<li class="date">\t\t\t\t<div class="">' + DAY_FORMAT.toUpperCase() + ":</div><strong>" + b() + '</strong>\t\t\t</li>\t\t\t<li class="total">\t\t\t\t<div class="">' + c("Total") + ':</div><strong><span class="amount">' + n + U(e) + r + '</span></strong>\t\t\t</li>\t\t\t<li class="method">\t\t\t\t<div class="">' + c("Payment method") + ":</div><strong>" + Ot.payment_methods + "</strong>\t\t\t</li>\t\t</ul>", Ot.payment_methods == c("Direct Bank Transfer")) {
                p += "<p>" + c("Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account") + "</p>\t\t\t<h2>" + c("Our Bank Details") + "</h2>";
                for (var m = 1; m <= NUMBER_BANK_ACCOUNTS; m++) {
                    var f = "BANK_ACCOUNT_" + m + "_NAME",
                        _ = "BANK_ACCOUNT_" + m + "_BANKNAME",
                        g = "BANK_ACCOUNT_" + m + "_NUMBER",
                        v = "BANK_ACCOUNT_" + m + "_SORTCODE",
                        E = "BANK_ACCOUNT_IBAN" + m + "_",
                        y = "BANK_ACCOUNT_" + m + "_BIC_SWIFT";
                    d(window[f]) || d(window[_]) || d(window[g]) || (p += '<h3 class="color">' + window[f] + " - " + window[_] + '</h3>\t\t\t\t\t<ul class="order_details">\t\t\t\t\t\t<li class="account_number"><div class="">' + c("Account Number") + ':</div><strong class="color">' + window[g] + "</strong></li>", d(window[v]) || (p += '<li class="sort_code"><div class="">' + c("Sort Code") + ":</div><strong>" + window[v] + "</strong></li>"), d(window[E]) || (p += '<li class="iban"><div class="">IBAN:</div><strong>' + window[E] + "</strong></li>"), d(window[y]) || (p += '<li class="bic"><div class="">BIC:</div><strong>' + window[y] + "</strong></li>"), p += "</ul>")
                }
            } else Ot.payment_methods == c("UPI Transfer") ? (p += "<p>" + c("Please make your payment directly via UPI transfer by scaning our below QR codes. Use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.") + "</p>", p += '<div class="upi-qr-codes">', UPI_QR_PAYTM && (p += '<span><img src="' + UPI_QR_PAYTM + '"/> <strong><img src="' + UPI_QR_PAYTM_LOGO + '"/></strong></span>'), UPI_QR_PHONEPE && (p += '<span><img src="' + UPI_QR_PHONEPE + '"/> <strong><img src="' + UPI_QR_PHONEPE_LOGO + '"/></strong></span>'), UPI_QR_GPAY && (p += '<span><img src="' + UPI_QR_GPAY + '"/> <strong><img src="' + UPI_QR_GPAY_LOGO + '"/></strong></span>'), p += "</div>") : Ot.payment_methods == c("Cheque Payment") ? p += "<p>" + c("Please send your cheque to") + ' <span class="color">' + STORE_NAME + ", " + STORE_STREET + ", " + STORE_TOWN + ", " + STORE_STATE + ", " + STORE_COUNTRY + ", " + STORE_POSTCODE + "</span></p>" : p += "<p>" + c("Pay with cash upon delivery.") + "</p>";
            for (p += "<h2>" + c("Order Details") + '</h2>\t\t<table class="shop_table order_details">\t\t\t<thead>\t\t\t\t<tr>\t\t\t\t\t<th class="product-name">' + c("Product") + '</th>\t\t\t\t\t<th class="product-total">' + c("Total") + '</th>\t\t\t\t</tr>\t\t\t</thead>\t\t\t<tfoot>\t\t\t\t<tr>\t\t\t\t\t<th scope="row">' + c("Subtotal") + ':</th>\t\t\t\t\t<td><span class="amount">' + n + U(Ot.total - Ot.shipping_fee) + r + '</span></td>\t\t\t\t</tr>\t\t\t\t<tr>\t\t\t\t\t<th scope="row">' + c("Shipping") + ":</th>\t\t\t\t\t<td>" + Ot.shipping_text + '</td>\t\t\t\t</tr>\t\t\t\t<tr>\t\t\t\t\t<th scope="row">' + c("Tax") + ":</th>\t\t\t\t\t<td>" + Ot.tax_text + "</td>\t\t\t\t</tr>\t\t\t\t" + a + '\t\t\t\t<tr>\t\t\t\t\t<th scope="row">' + c("Total") + ':</th>\t\t\t\t\t<td><span class="amount">' + n + U(e) + r + "</span></td>\t\t\t\t</tr>\t\t\t</tfoot>\t\t\t<tbody>", m = 0; m < Ot.items.length; m++) {
                var A = Ot.items[m];
                p += '<tr class="order_item">\t\t\t\t<td class="product-name">' + A.title + '<strong class="product-quantity">&#x2715; ' + A.number + '</strong></td>\t\t\t\t<td class="product-total"><span class="amount">' + n + U(A.number * A.price) + r + "</span></td>\t\t\t</tr>"
            }
            p += "</tbody>\t\t</table>\t\t<header>\t\t\t<h2>" + c("Customer details") + '</h2>\t\t</header>\t\t<dl class="customer_details">' + (Ot.billing_info.email ? "<dt>" + c("Email") + ":</dt><dd>" + Ot.billing_info.email + "</dd><dt>" : "") + (Ot.billing_info.phone ? c("Phone") + ":</dt><dd>" + Ot.billing_info.phone + "</dd>" : "") + '</dl>\t\t<div class="col2-set addresses">\t\t\t<div class="col-1 ' + (s ? "" : "full") + '">\t\t\t<header class="title">\t\t\t\t<h3>' + c(s ? "Billing Address" : "Billing Address and Shipping Address") + "</h3>\t\t\t</header>\t\t\t<address>\t\t\t\t<p>\t\t\t\t\t" + Ot.billing_info.firstname + " " + Ot.billing_info.lastname + "<br>\t\t\t\t\t" + Ot.billing_info.address + "<br>\t\t\t\t\t" + Ot.billing_info.towncitystate + "<br>\t\t\t\t\t" + Ot.billing_info.country + ", " + Ot.billing_info.postcodezip + "\t\t\t\t</p>\t\t\t</address>\t\t</div>", s && (p += '<div class="col-2">\t\t\t\t<header class="title">\t\t\t\t\t<h3>' + c("Shipping Address") + "</h3>\t\t\t\t</header>\t\t\t\t<address>\t\t\t\t\t<p>\t\t\t\t\t\t" + Ot.shipping_info.firstname + " " + Ot.shipping_info.lastname + "<br>\t\t\t\t\t\t" + Ot.shipping_info.address + "<br>\t\t\t\t\t\t" + Ot.shipping_info.towncitystate + "<br>\t\t\t\t\t\t" + Ot.shipping_info.country + ", " + Ot.shipping_info.postcodezip + "\t\t\t\t\t</p>\t\t\t\t</address>\t\t\t</div>"), p += '<div class="clear"></div></div><div class="clear"></div>', $(".checkout-step-2").html(p), ot(et), lt()
        } else if ("PayPal" == Ot.payment_methods) {
            var N = "https://www.paypal.com/cgi-bin/webscr?cmd=_cart";
            for (N += "&business=" + encodeURIComponent(PAYPAL_EMAIL), N += "&currency_code=" + o, N += "&charset=UTF-8", N += "&rm=0", N += "&upload=1", N += "&bn=SpotCommerce_Cart", N += "&invoice=" + Ot.id, Ot.billing_info.firstname && (N += "&first_name=" + encodeURIComponent(Ot.billing_info.firstname)), Ot.billing_info.lastname && (N += "&last_name=" + encodeURIComponent(Ot.billing_info.lastname)), Ot.billing_info.companyname && (N += "&company=" + encodeURIComponent(Ot.billing_info.companyname)), Ot.billing_info.address && (N += "&address1=" + encodeURIComponent(Ot.billing_info.address)), Ot.billing_info.towncitystate && (N += "&city=" + encodeURIComponent(Ot.billing_info.towncitystate)), Ot.billing_info.postcodezip && (N += "&zip=" + encodeURIComponent(Ot.billing_info.postcodezip)), Ot.billing_info.country && (N += "&country=" + encodeURIComponent(Ot.billing_info.country)), Ot.billing_info.email && (N += "&email=" + encodeURIComponent(Ot.billing_info.email)), Ot.billing_info.phone && (N += "&night_phone_b=" + encodeURIComponent(Ot.billing_info.phone), N += "&day_phone_b=" + encodeURIComponent(Ot.billing_info.phone)), Ot.shipping_fee && (N += "&handling_cart=" + encodeURIComponent(Ot.shipping_fee.toFixed(2))), N += "&tax_cart=" + encodeURIComponent(Ot.tax_fee.toFixed(2)), m = 0; m < Ot.items.length; m++) {
                var O = Ot.items[m];
                N += "&item_name_" + (m + 1) + "=" + encodeURIComponent(O.title), N += "&quantity_" + (m + 1) + "=" + encodeURIComponent(O.number), N += "&amount_" + (m + 1) + "=" + encodeURIComponent(O.price)
            }
            if (i && u(i, !0)) {
                var C = u(i, !0); - 1 != (C = C.replace("-", "")).indexOf("%") ? (C = C.replace("%", ""), N += "&discount_rate_cart=" + encodeURIComponent(C)) : N += "&discount_amount_cart=" + encodeURIComponent(C)
            }
            ot(et), window.location.href = N
        }
    }

    function Pt() {
        var i = $("#blog .index-post").length;
        i < 1 || ($("#home-random").html('<img class="ajax_loading_img" src="' + AJAX_LOADING_IMAGE + '"/>'), $.get(t + "/posts/summary?alt=json-in-script&max-results=0", (function (a) {
            var n = g(a);
            if (0 != n.total_entry) {
                var s = Math.floor(Math.random() * n.total_entry + 1);
                s + i > n.total_entry && (s = n.total_entry - i + 1), s < 1 && (s = 1), $.get(t + "/posts/default?alt=json-in-script&max-results=" + i + "&start-index=" + s, (function (t) {
                    var i = g(t),
                        a = "";
                    if (i.entry.length)
                        for (var n = 0; n < i.entry.length; n++) {
                            var s = "";
                            s += n % 2 == 0 ? " even" : " odd", n % 3 == 0 && (s += " triple"), n % 4 == 0 && (s += " quad"), e = i.entry[n];
                            var r = D(e.cate);
                            a += '<div class="index-post small shopping-item' + s + '" data-id="' + e.id + '">', a += '<a class="natural-thumbnail" href="' + e.link + '">', a += '<img src="' + e.thumbnail + '" class="shopping-thumb"/>', a += "</a>", a += '<div class="content tcenter">', a += '<h2 class="b_ shopping-title"><a class="black color-hover" href="' + e.link + '">' + e.title + "</a></h2>", r && !M(e.cate) ? a += '<a class="add-to-cart in-list" data-id="' + e.id + '"><span class="text black-hover">+ ' + c("Add to cart") + " +</span></a>" : a += '<a class="add-to-cart disabled" href="' + e.link + '"><span class="text black-hover">+ ' + c("Readmore") + " +</span></a>", a += "</div>", a += F(e.cate), a += '<div class="clear"></div></div>'
                        }
                    $("#home-random").html(a + '<div class="clear"></div>'), f(), $("#home-random .index-post a.add-to-cart").click((function () {
                        ct($(this))
                    }))
                }), "jsonp")
            }
        }), "jsonp"))
    }
    L() && ($("body").addClass("checkout"), $(".blog-posts.hfeed").addClass("checkout-page"), $(".cart-toggle-wrapper").addClass("disabled"), $("a.cart-toggle").attr("href", "/?page=cart"), $(".checkout-page").append('<div class="checkout-step-1 input-info"><div class="checkout-form">' + function () {
        var t = '<form name="checkout" method="post" class="checkout" action="">\t<div class="col-1">\t\t<h3>' + c("Billing Details") + '</h3>\t\t<div class="billing-fields">';
        if (ENABLE_FIELD_COUNTRY) {
            t += '<p class="address-field update_totals_on_change validate-required" id="billing_country_field">\t\t\t\t\t<label for="billing_country" class="">' + c("Country") + ' <abbr class="required" title="required">*</abbr></label>\t\t\t\t\t<select name="billing_country" id="billing_country" class="country_to_state country_select">';
            var e = C("billing_country");
            $.each(Nt, (function (i, a) {
                t += '<option value="' + i + '"' + (e == i ? ' selected="selected"' : "") + ">" + a + "</option>"
            })), t += '</select>\t\t\t\t</p><div class="clear"></div>'
        }
        return ENABLE_FIELD_FIRST_NAME && (t += '<p class="form-row form-row-first validate-required" id="billing_first_name_field">\t\t\t\t\t<label for="billing_first_name" class="">' + c("First Name") + ' <abbr class="required" title="required">*</abbr></label>\t\t\t\t\t<input type="text" class="input-text " name="billing_first_name" id="billing_first_name" placeholder="" value="' + C("billing_first_name") + '"/>\t\t\t\t</p>'), ENABLE_FIELD_LAST_NAME && (t += '<p class="form-row form-row-last validate-required" id="billing_last_name_field">\t\t\t\t\t<label for="billing_last_name" class="">' + c("Last Name") + ' <abbr class="required" title="required">*</abbr></label>\t\t\t\t\t<input type="text" class="input-text " name="billing_last_name" id="billing_last_name" placeholder="" value="' + C("billing_last_name") + '"/>\t\t\t\t</p>'), ENABLE_FIELD_COMPANY_NAME && (t += '<p class="form-row form-row-wide" id="billing_company_field">\t\t\t\t\t<label for="billing_company" class="">' + c("Company Name") + '</label>\t\t\t\t\t<input type="text" class="input-text " name="billing_company" id="billing_company" placeholder="" value="' + C("billing_company") + '"/>\t\t\t\t</p>'), ENABLE_FIELD_ADDRESS && (t += '<p class="form-row form-row-wide address-field validate-required" id="billing_address_field">\t\t\t\t\t<label for="billing_address" class="">' + c("Address") + ' <abbr class="required" title="required">*</abbr></label>\t\t\t\t\t<input type="text" class="input-text " name="billing_address" id="billing_address" placeholder="" value="' + C("billing_address") + '"/>\t\t\t\t</p>'), ENABLE_FIELD_TOWN_CITY_STATE && (t += '<p class="form-row form-row-wide address-field validate-required" id="billing_city_field" data-o_class="form-row form-row-wide address-field validate-required">\t\t\t\t\t<label for="billing_city" class="">' + c("Town / City / State") + ' <abbr class="required" title="required">*</abbr></label>\t\t\t\t\t<input type="text" class="input-text " name="billing_city" id="billing_city" placeholder="" value="' + C("billing_city") + '"/>\t\t\t\t</p>'), ENABLE_FIELD_POST_ZIP_CODE && (t += '<p class="form-row form-row-last address-field validate-required validate-postcode" id="billing_postcode_field" data-o_class="form-row form-row-last address-field validate-required validate-postcode">\t\t\t\t\t<label for="billing_postcode" class="">' + c("Postcode / Zip") + ' <abbr class="required" title="required">*</abbr></label>\t\t\t\t\t<input type="text" class="input-text " name="billing_postcode" id="billing_postcode" placeholder="" value="' + C("billing_postcode") + '"/>\t\t\t\t</p>'), ENABLE_FIELD_EMAIL && (t += '<p class="form-row form-row-first validate-required validate-email" id="billing_email_field">\t\t\t\t\t<label for="billing_email" class="">' + c("Email Address") + ' <abbr class="required" title="required">*</abbr></label>\t\t\t\t\t<input type="text" class="input-text " name="billing_email" id="billing_email" placeholder="" value="' + C("billing_email") + '"/>\t\t\t\t</p>'), ENABLE_FIELD_PHONE && (t += '<p class="form-row form-row-last validate-required validate-phone" id="billing_phone_field">\t\t\t\t\t<label for="billing_phone" class="">' + c("Phone") + ' <abbr class="required" title="required">*</abbr></label>\t\t\t\t\t<input type="text" class="input-text " name="billing_phone" id="billing_phone" placeholder="" value="' + C("billing_phone") + '"/>\t\t\t\t</p>'), t += '<div class="clear"></div></div>\t</div>\t<div class="col-2">\t\t<h3 id="ship-to-different-address">\t\t\t<label for="ship-to-different-address-checkbox" class="checkbox">' + c("Ship to a different address?") + '</label>\t\t\t<input id="ship-to-different-address-checkbox" class="input-checkbox" type="checkbox" name="ship_to_different_address" value="1"/>\t\t</h3>\t\t<div class="hide shipping-fields">', ENABLE_FIELD_COUNTRY && (t += '<p class="address-field update_totals_on_change validate-required" id="shipping_country_field">\t\t\t\t\t<label for="shipping_country" class="">' + c("Country") + ' <abbr class="required" title="required">*</abbr></label>\t\t\t\t\t<select name="shipping_country" id="shipping_country" class="country_to_state country_select">', $.each(Nt, (function (e, i) {
            t += '<option value="' + e + '">' + i + "</option>"
        })), t += "</select>\t\t\t\t</p>"), ENABLE_FIELD_FIRST_NAME && (t += '<p class="form-row form-row-first validate-required" id="shipping_first_name_field">\t\t\t\t\t<label for="shipping_first_name" class="">' + c("First Name") + ' <abbr class="required" title="required">*</abbr></label>\t\t\t\t\t<input type="text" class="input-text " name="shipping_first_name" id="shipping_first_name" placeholder="" value=""/>\t\t\t\t</p>'), ENABLE_FIELD_LAST_NAME && (t += '<p class="form-row form-row-last validate-required" id="shipping_last_name_field">\t\t\t\t\t<label for="shipping_last_name" class="">' + c("Last Name") + ' <abbr class="required" title="required">*</abbr></label>\t\t\t\t\t<input type="text" class="input-text " name="shipping_last_name" id="shipping_last_name" placeholder="" value=""/>\t\t\t\t</p>'), ENABLE_FIELD_COMPANY_NAME && (t += '<p class="form-row form-row-wide" id="shipping_company_field">\t\t\t\t\t<label for="shipping_company" class="">' + c("Company Name") + '</label>\t\t\t\t\t<input type="text" class="input-text " name="shipping_company" id="shipping_company" placeholder="" value=""/>\t\t\t\t</p>'), ENABLE_FIELD_ADDRESS && (t += '<p class="form-row form-row-wide address-field validate-required" id="shipping_address_field">\t\t\t\t\t<label for="shipping_address" class="">' + c("Address") + ' <abbr class="required" title="required">*</abbr></label>\t\t\t\t\t<input type="text" class="input-text " name="shipping_address" id="shipping_address" placeholder="" value=""/>\t\t\t\t</p>'), ENABLE_FIELD_TOWN_CITY_STATE && (t += '<p class="form-row form-row-wide address-field validate-required" id="shipping_city_field" data-o_class="form-row form-row-wide address-field validate-required">\t\t\t\t\t<label for="shipping_city" class="">' + c("Town / City / State") + ' <abbr class="required" title="required">*</abbr></label>\t\t\t\t\t<input type="text" class="input-text " name="shipping_city" id="shipping_city" placeholder="" value=""/>\t\t\t\t</p>'), ENABLE_FIELD_POST_ZIP_CODE && (t += '<p class="form-row form-row-last address-field validate-required validate-postcode" id="shipping_postcode_field" data-o_class="form-row form-row-last address-field validate-required validate-postcode">\t\t\t\t\t<label for="shipping_postcode" class="">' + c("Postcode / Zip") + ' <abbr class="required" title="required">*</abbr></label>\t\t\t\t\t<input type="text" class="input-text " name="shipping_postcode" id="shipping_postcode" placeholder="" value=""/>\t\t\t\t</p>'), t += '<div class="clear"></div></div>\t\t<p class="form-row notes" id="order_comments_field">\t\t\t<label for="order_comments" class="">' + c("Order Notes") + '</label><textarea name="order_comments" class="input-text " id="order_comments" placeholder="" rows="2"></textarea>\t\t</p>\t</div></form><div class="clear"></div>'
    }() + '</div><div class="billing-info"></div><div class="payment-methods"></div><div class="action-buttons"></div>'), $("form.checkout").on("submit", (function () {
        return !1
    })), $(".checkout-page").append('<div class="checkout-step-2 summary-info hide"><img class="ajax-loader" src="' + AJAX_LOADING_IMAGE + '"/></div>'), Ct = nt(et), wt = 0, xt = "", Ct && ($(".billing-info").html('<img class="ajax-loader" src="' + AJAX_LOADING_IMAGE + '"/>'), function e() {
        $.get(t + "/posts/default/" + Ct[wt].id + "?alt=json-in-script", (function (t) {
            var a = _(t),
                s = D(a.cate),
                o = -1 != TAX.indexOf("%"),
                l = Number(TAX.replaceAll(" ", "").replaceAll("%", ""));
            let d = s;
            if (TAX_IN_PRICE && l && o && (d = s * (100 - l) / 100), a.id && s) {
                var p = Ot.items.length;
                if (Ot.items[p] = new Object, Ot.items[p].id = Ct[wt].id, Ot.items[p].number = Ct[wt].number, Ot.items[p].price = s, Ot.items[p].excluded_tax_price = d, Ot.items[p].title = a.title, Ot.items[p].link = a.link, xt += '<tr class="cart_item">\t\t\t\t<td class="product-name">' + a.title + ' <strong class="product-quantity">&#x2715;' + Ct[wt].number + '</strong></td>\t\t\t\t<td class="product-total"><span class="amount">' + n + U(d * Ct[wt].number) + r + "</span></td>\t\t\t</tr>", ++wt < Ct.length) e();
                else if (xt) {
                    var m = -1 != SHIPPING_FEE.indexOf("qty"),
                        f = -1 != SHIPPING_FEE.indexOf("cost"),
                        g = -1 != SHIPPING_FEE.indexOf("%"),
                        b = Number(SHIPPING_FEE.replaceAll(" ", "").replaceAll("%", "").replaceAll("[", "").replaceAll("]", "").replaceAll("*", "").replaceAll("qty", "").replaceAll("cost", ""));
                    for (let t = 0; t < Ot.items.length; t++) Ot.subtotal += Ot.items[t].price * Ot.items[t].number, (m || f) && (Ot.shipping_fee += (m ? Ot.items[t].number : 1) * (f ? Ot.items[t].price : 1));
                    (b || Ot.shipping_fee) && (Ot.shipping_fee ? (Ot.shipping_fee *= b, g && (Ot.shipping_fee /= 100)) : (Ot.shipping_fee = b, g && (Ot.shipping_fee = Ot.subtotal * Ot.shipping_fee / 100))), l && (Ot.tax_fee = l, o && (Ot.tax_fee = Ot.tax_fee * (Ot.subtotal + Ot.shipping_fee) / 100)), Ot.shipping_fee && (Ot.shipping_text = Ot.shipping_fee, Number(Ot.shipping_text) > Number(Ot.shipping_text.toFixed(2)) && (Ot.shipping_text = Ot.shipping_text.toFixed(2)), Ot.shipping_text = n + U(Ot.shipping_text) + r), Ot.tax_fee && (Ot.tax_text = Ot.tax_fee, Number(Ot.tax_text) > Number(Ot.tax_text.toFixed(2)) && (Ot.tax_text = Ot.tax_text.toFixed(2)), Ot.tax_text = n + U(Ot.tax_text) + r), TAX_IN_PRICE && o && (Ot.subtotal -= Ot.tax_fee), Ot.total = Ot.subtotal + Ot.shipping_fee + Ot.tax_fee;
                    var v = "";
                    COUPON.length && (v = '<tr class="coupon">\t\t\t\t\t\t\t\t<th>\t\t\t\t\t\t\t\t\t<div>' + c("Coupon") + '</div>\t\t\t\t\t\t\t\t\t<div><input type="text" class="coupon_code"/> <button class="coupon_apply">' + c("Apply") + '</button></div>\t\t\t\t\t\t\t\t</th>\t\t\t\t\t\t\t\t<td>\t\t\t\t\t\t\t\t\t<div class="coupon_value"></div>\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t</tr>'), xt = '<h3 id="order_review_heading">' + c("Your Order") + '</h3>\t\t\t\t\t<table class="shop_table" cellspacing="0">\t\t\t\t\t\t<thead>\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t<th class="product-name">' + c("Product") + '</th>\t\t\t\t\t\t\t\t<th class="product-total">' + c("Total") + '</th>\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t</thead>\t\t\t\t\t\t<tfoot>\t\t\t\t\t\t\t<tr class="cart-subtotal">\t\t\t\t\t\t\t\t<th>' + c("Subtotal") + '</th>\t\t\t\t\t\t\t\t<td><span class="amount">' + n + U(Ot.subtotal) + r + '</span></td>\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t<tr class="shipping">\t\t\t\t\t\t\t\t<th>' + c("Shipping and Handling") + "</th>\t\t\t\t\t\t\t\t<td>\t\t\t\t\t\t\t\t\t" + Ot.shipping_text + '\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t<tr class="tax">\t\t\t\t\t\t\t\t<th>' + c("Tax") + "</th>\t\t\t\t\t\t\t\t<td>\t\t\t\t\t\t\t\t\t" + Ot.tax_text + "\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t" + v + '\t\t\t\t\t\t\t<tr class="order-total">\t\t\t\t\t\t\t\t<th>' + c("Total") + '</th>\t\t\t\t\t\t\t\t<td><strong><span class="amount">' + n + U(Ot.total) + r + "</span></strong> </td>\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t</tfoot>\t\t\t\t\t\t<tbody>\t\t\t\t\t\t" + xt + "\t\t\t\t\t\t</tbody>\t\t\t\t\t</table>", $(".billing-info").html(xt);
                    var E = '<ul class="payment_methods methods">';
                    if (ENABLE_DIRECT_BANK_TRANSFER && (E += '<li class="payment_method_bacs">\t\t\t\t\t\t\t<input id="payment_method_bacs" type="radio" class="input-radio" name="payment_method" value="' + c("Direct Bank Transfer") + '"/>\t\t\t\t\t\t\t<label for="payment_method_bacs">' + c("Direct Bank Transfer") + ' </label>\t\t\t\t\t\t\t<div class="payment_box payment_method_bacs"><p>' + c("Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account") + "</p></div>\t\t\t\t\t\t</li>"), ENABLE_CHEQUE && (E += '<li class="payment_method_cheque">\t\t\t\t\t\t\t<input id="payment_method_cheque" type="radio" class="input-radio" name="payment_method" value="' + c("Cheque Payment") + '"/>\t\t\t\t\t\t\t<label for="payment_method_cheque">' + c("Cheque Payment") + ' </label>\t\t\t\t\t\t\t<div class="payment_box payment_method_cheque hide">\t\t\t\t\t\t\t\t<p>' + c("Please send your cheque to") + " " + STORE_NAME + ", " + STORE_STREET + ", " + STORE_TOWN + ", " + STORE_STATE + ", " + STORE_COUNTRY + ", " + STORE_POSTCODE + "</p>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</li>"), ENABLE_CASH_ON_DELIVERY && (E += '<li class="payment_method_cod">\t\t\t\t\t\t\t<input id="payment_method_cod" type="radio" class="input-radio" name="payment_method" value="' + c("Cash on Delivery") + '"/>\t\t\t\t\t\t\t<label for="payment_method_cod">' + c("Cash on Delivery") + ' </label>\t\t\t\t\t\t\t<div class="payment_box payment_method_cod hide">\t\t\t\t\t\t\t\t<p>' + c("Pay with cash upon delivery.") + "</p>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</li>"), ENABLE_PAYPAL && (E += '<li class="payment_method_paypal">\t\t\t\t\t\t\t<input id="payment_method_paypal" type="radio" class="input-radio" name="payment_method" value="PayPal"/>\t\t\t\t\t\t\t<label for="payment_method_paypal">\t\t\t\t\t\t\t\tPayPal \t\t\t\t\t\t\t\t<img class="paypal-logo" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLzRXAPARhVeXsUJxaUvqqIw4ubIZFHuCOCUoPA53yKQHxq24wF5dxOCmND-kSSKcLhoCmq503MplThHUGS6o1vLyPe2Ws2eH2hYeDPidqwcz1NpTnLRuJZCyr-dpyq7EeF7v9XXS_KqxbBxbFs2Iz6wErWlY91iBXNME4-KNAkPrRa9H2FgqnBaIY/s16000/logo-paypal-frame.png"/>\t\t\t\t\t\t\t</label>\t\t\t\t\t\t\t<div class="payment_box payment_method_paypal hide">\t\t\t\t\t\t\t\t<p>' + c("Pay via PayPal; you can pay with your credit card if you have no a PayPal account") + "</p>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</li>"), ENABLE_UPI_TRANSFER && (E += '<li class="payment_method_upi">\t\t\t\t\t\t\t<input id="payment_method_upi" type="radio" class="input-radio" name="payment_method" value="' + c("UPI Transfer") + '"/>\t\t\t\t\t\t\t<label for="payment_method_upi">' + c("UPI Transfer") + '\t\t\t\t\t\t\t<img src="' + UPI_QR_PAYTM_LOGO + '"/>\t\t\t\t\t\t\t<img src="' + UPI_QR_PHONEPE_LOGO + '"/>\t\t\t\t\t\t\t<img src="' + UPI_QR_GPAY_LOGO + '"/>\t\t\t\t\t\t\t</label>\t\t\t\t\t\t\t<div class="payment_box payment_method_upi hide">\t\t\t\t\t\t\t\t<p>' + c("Pay via UPI Transfer; you can pay by scanning PayTM, PhonePe, or Gpay QR Code") + "</p>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</li>"), E += "</ul>", $(".checkout-page .payment-methods").html(E), $('ul.payment_methods li:first input[type="radio"]').attr("checked", "checked"), $(".checkout-step-1 .action-buttons").html('<a href="/?page=cart" class="white-bg black color-hover inb button">' + c("View Cart") + "</a>"), $(".widget.ContactForm").addClass("checkout-contact-form"), $(".checkout-contact-form .contact-form-button-submit").addClass("color-bg white inb continue button place-order checkout-action-button").val(c("Place Order")), ENABLE_FIELD_AGREEMENT) {
                        let t = $.trim($('[data-option="Checkout Agreement"]').html());
                        t && ($('<div class="checkount-agreement"><input id="checkout-agreement-checkbox" type="checkbox" class="input-checkbox" name="checkoung-agreement-checkbox"/> ' + t + "</div>").insertBefore($(".action-buttons")), $(".contact-form-button-submit").addClass("disabled").attr("disabled", "on"), $(document).on("change", "#checkout-agreement-checkbox", (function () {
                            $(this).is(":checked") ? $(".contact-form-button-submit").removeClass("disabled").removeAttr("disabled") : $(".contact-form-button-submit").addClass("disabled").attr("disabled", "on")
                        })))
                    }
                    1 == $('.checkout-page input[name="payment_method"]').length ? $(".payment_box").show() : $('.checkout-page input[name="payment_method"]').on("change", (function () {
                        if (!$(this).attr("checked")) {
                            $('.checkout-page .payment_methods input[checked="checked"]').each((function () {
                                var t = $(this).attr("id");
                                $(".payment_box." + t).slideUp(), $(this).removeAttr("checked")
                            }));
                            var t = $(this).attr("id");
                            $(".payment_box." + t).slideDown(), $(this).attr("checked", "checked")
                        }
                    })), $(".checkout-contact-form .button.place-order").mouseenter((function () {
                        ! function () {
                            var t = !0,
                                e = "";
                            if ((e = $("#ship-to-different-address-checkbox").is(":checked") ? $("p.validate-required") : $(".billing-fields p.validate-required")).length && e.find('input[type="text"]').each((function () {
                                    if ($(this).val())
                                        if (-1 != $(this).attr("id").indexOf("_email")) {
                                            var e = $(this).val();
                                            (e.length < 6 || e.indexOf("@") < 1 || e.indexOf("@") > e.lastIndexOf(".")) && (t = !1)
                                        } else if (-1 != $(this).attr("id").indexOf("_phone")) {
                                        var i = $(this).val();
                                        0 == i.indexOf("+") && (i = i.substring(1)), isNaN(i) && (t = !1)
                                    } else -1 != $(this).attr("id").indexOf("_postcode") && ($(this).val() || (t = !1));
                                    else t = !1
                                })), t) {
                                ENABLE_FIELD_COUNTRY ? Ot.billing_info.country = $("#billing_country").val() : Ot.billing_info.country = "", ENABLE_FIELD_FIRST_NAME ? Ot.billing_info.firstname = $("#billing_first_name").val() : Ot.billing_info.firstname = "", ENABLE_FIELD_LAST_NAME ? Ot.billing_info.lastname = $("#billing_last_name").val() : Ot.billing_info.lastname = "", ENABLE_FIELD_COMPANY_NAME ? Ot.billing_info.companyname = $("#billing_company").val() : Ot.billing_info.companyname = "", ENABLE_FIELD_ADDRESS ? Ot.billing_info.address = $("#billing_address").val() : Ot.billing_info.address = "", ENABLE_FIELD_TOWN_CITY_STATE ? Ot.billing_info.towncitystate = $("#billing_city").val() : Ot.billing_info.towncitystate = "", ENABLE_FIELD_POST_ZIP_CODE ? Ot.billing_info.postcodezip = $("#billing_postcode").val() : Ot.billing_info.postcodezip = "", ENABLE_FIELD_EMAIL ? Ot.billing_info.email = $("#billing_email").val() : Ot.billing_info.email = "", ENABLE_FIELD_PHONE ? Ot.billing_info.phone = $("#billing_phone").val() : Ot.billing_info.phone = "", ENABLE_FIELD_COUNTRY ? Ot.shipping_info.country = $("#shipping_country").val() : Ot.shipping_info.country = "", ENABLE_FIELD_FIRST_NAME ? Ot.shipping_info.firstname = $("#shipping_first_name").val() : Ot.shipping_info.firstname = "", ENABLE_FIELD_LAST_NAME ? Ot.shipping_info.lastname = $("#shipping_last_name").val() : Ot.shipping_info.lastname = "", ENABLE_FIELD_COMPANY_NAME ? Ot.shipping_info.companyname = $("#shipping_company").val() : Ot.shipping_info.companyname = "", ENABLE_FIELD_ADDRESS ? Ot.shipping_info.address = $("#shipping_address").val() : Ot.shipping_info.address = "", ENABLE_FIELD_TOWN_CITY_STATE ? Ot.shipping_info.towncitystate = $("#shipping_city").val() : Ot.shipping_info.towncitystate = "", ENABLE_FIELD_POST_ZIP_CODE ? Ot.shipping_info.postcodezip = $("#shipping_postcode").val() : Ot.shipping_info.postcodezip = "", Ot.order_notes = $("#order_comments").val(), Ot.payment_methods = $('.checkout-page .payment-methods input[name="payment_method"][checked="checked"]').val(), Ot.diff_shipping = $("#ship-to-different-address-checkbox").is(":checked"), It = Ot.billing_info.firstname + " " + Ot.billing_info.lastname, St = Ot.billing_info.email ? Ot.billing_info.email : "noreply@none_email_buyer.com", Tt = c("NEW ORDER") + ": #" + Ot.id + "\n", Tt += "==========================\n", Tt += c("METHOD") + ":" + Ot.payment_methods + "\n", Ot.diff_shipping ? Tt += c("Billing Address") : Tt += c("Billing Address and Shipping Address"), Tt += "\n", Tt += "-----------------------------------------------------------\n", Ot.billing_info.firstname && (Tt += "    " + c("First Name") + ": " + Ot.billing_info.firstname + "\n"), Ot.billing_info.lastname && (Tt += "    " + c("Last Name") + ": " + Ot.billing_info.lastname + "\n"), Ot.billing_info.companyname && (Tt += "    " + c("Company Name") + ":" + Ot.billing_info.companyname + "\n"), Ot.billing_info.address && (Tt += "    " + c("Address") + ": " + Ot.billing_info.address + "\n"), Ot.billing_info.towncitystate && (Tt += "    " + c("Town / City / State") + ": " + Ot.billing_info.towncitystate + "\n"), Ot.billing_info.country && (Tt += "    " + c("Country") + ": " + Nt[Ot.billing_info.country] + "\n"), Ot.billing_info.postcodezip && (Tt += "    " + c("Postcode / Zip") + ": " + Ot.billing_info.postcodezip + "\n"), Ot.billing_info.email && (Tt += "    " + c("Email") + ": " + Ot.billing_info.email + "\n"), Ot.billing_info.phone && (Tt += "    " + c("Phone") + ": " + Ot.billing_info.phone + "\n"), Tt += "\n", Ot.diff_shipping && (Tt += c("Shipping Address") + "\n", Tt += "-----------------------------------------------------------\n", Ot.shipping_info.firstname && (Tt += "    " + c("First Name") + ": " + Ot.shipping_info.firstname + "\n"), Ot.shipping_info.lastname && (Tt += "    " + c("Last Name") + ": " + Ot.shipping_info.lastname + "\n"), Ot.shipping_info.companyname && (Tt += "    " + c("Company Name") + ":" + Ot.shipping_info.companyname + "\n"), Ot.shipping_info.address && (Tt += "    " + c("Address") + ": " + Ot.shipping_info.address + "\n"), Ot.shipping_info.towncitystate && (Tt += "    " + c("Town / City / State") + ": " + Ot.shipping_info.towncitystate + "\n"), Ot.shipping_info.country && (Tt += "    " + c("Country") + ": " + Nt[Ot.billing_info.country] + "\n"), Ot.shipping_info.postcodezip && (Tt += "    " + c("Postcode / Zip") + ": " + Ot.shipping_info.postcodezip + "\n"), Tt += "\n"), Ot.order_notes && (Tt += c("Order Notes") + "\n", Tt += "-----------------------------------------------------------\n", Tt += Ot.order_notes), Tt += "\n\n", Tt += c("Order Details") + "\n", Tt += "============================================================\n";
                                for (var a = 0; a < Ot.items.length; a++) {
                                    var s = Ot.items[a];
                                    Tt += "    " + c("Product") + ": " + s.title + "\n", Tt += "    " + c("Price") + ": " + n + U(s.excluded_tax_price) + r + "\n", Tt += "    " + c("Quantity") + ": " + s.number + "\n", Tt += "    " + c("Total") + ": " + n + U(s.excluded_tax_price * s.number) + r + "\n", Tt += "    " + c("Link") + ": " + s.link + "\n", Tt += "-----------------------------------------------------------\n"
                                }
                                Tt += c("Subtotal") + ": " + n + U(Ot.subtotal) + r + "\n", Tt += "-----------------------------------------------------------\n", Tt += c("Shipping") + ": " + Ot.shipping_text + "\n", Tt += "-----------------------------------------------------------\n", Tt += c("Tax") + ": " + Ot.tax_text + "\n", Tt += "-----------------------------------------------------------\n";
                                var o = Ot.total;
                                i && u(i, !0) && (o = h(i, Ot.total), Tt += c("Coupon code") + ": " + i + "\n", Tt += c("Coupon value") + ": " + u(i, !1) + "\n", Tt += "-----------------------------------------------------------\n"), Tt += c("Total") + ": " + n + U(o) + r + "\n", Tt += "-----------------------------------------------------------\n", Tt += "\n\n\n\n\n ";
                                const t = new Date,
                                    e = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][t.getDay()],
                                    l = t.getFullYear(),
                                    d = (t.getMonth() + 1).toString().padStart(2, "0"),
                                    p = t.getDate().toString().padStart(2, "0"),
                                    m = t.getHours().toString().padStart(2, "0"),
                                    f = t.getMinutes().toString().padStart(2, "0"),
                                    _ = `${e}, ${l}-${d}-${p}, ${m}:${f}\n`,
                                    g = {
                                        0: "A",
                                        1: "B",
                                        2: "C",
                                        3: "D",
                                        4: "E",
                                        5: "F",
                                        6: "G",
                                        7: "H",
                                        8: "I",
                                        9: "J"
                                    },
                                    b = "#" + (l + d + p + m + f).split("").map((t => g[t] || t)).join("") + "\n";
                                kt = _ + b, $(document).find(".ContactForm .contact-form-name").val(It), $(document).find(".ContactForm .contact-form-email").val(St), $(document).find(".ContactForm .contact-form-email-message").val(kt + Tt)
                            }
                        }()
                    })), $(".checkout-contact-form .button.place-order").click((function (t) {
                        if (! function () {
                                var t = !0,
                                    e = $("#ship-to-different-address-checkbox").is(":checked"),
                                    i = "",
                                    a = "";
                                if ((i = e ? $("p.validate-required") : $(".billing-fields p.validate-required")).length && i.find('input[type="text"]').each((function () {
                                        var e = !0;
                                        if ($(this).val())
                                            if (-1 != $(this).attr("id").indexOf("_email")) {
                                                var i = $(this).val();
                                                (i.length < 6 || i.indexOf("@") < 1 || i.indexOf("@") > i.lastIndexOf(".")) && (e = !1)
                                            } else if (-1 != $(this).attr("id").indexOf("_phone")) {
                                            var n = $(this).val();
                                            0 == n.indexOf("+") && (n = n.substring(1)), isNaN(n) && (e = !1)
                                        } else -1 != $(this).attr("id").indexOf("_postcode") && ($(this).val() || (e = !1));
                                        else e = !1;
                                        e ? $(this).removeAttr("style") : ($(this).css("border", "1px solid red"), a || (a = $(this))), e || (t = !1)
                                    })), t) Ot.billing_info.country && O("billing_country", Ot.billing_info.country), Ot.billing_info.firstname && O("billing_first_name", Ot.billing_info.firstname), Ot.billing_info.lastname && O("billing_last_name", Ot.billing_info.lastname), Ot.billing_info.country && O("billing_company", Ot.billing_info.country), Ot.billing_info.address && O("billing_address", Ot.billing_info.address), Ot.billing_info.towncitystate && O("billing_city", Ot.billing_info.towncitystate), Ot.billing_info.postcodezip && O("billing_postcode", Ot.billing_info.postcodezip), Ot.billing_info.email && O("billing_email", Ot.billing_info.email), Ot.billing_info.phone && O("billing_phone", Ot.billing_info.phone);
                                else {
                                    var n = 150;
                                    a && (n = a.offset().top), $("html, body").animate({
                                        scrollTop: n
                                    }, 600)
                                }
                                return t
                            }()) return t.preventDefault(), !1;
                        ! function () {
                            if ($(".checkout-step-1").hide(), $(".checkout-contact-form").hide(), $(".checkout-step-2").show(), ADMIN_EMAIL) $.ajax({
                                url: "https://formsubmit.co/ajax/" + ADMIN_EMAIL,
                                method: "POST",
                                data: {
                                    name: It,
                                    email: St,
                                    message: Tt
                                },
                                dataType: "json"
                            }).done((function (t) {
                                Rt()
                            })).fail((function (t) {
                                console.log(t), $(".checkout-step-2").html("Checkout Error: " + t)
                            }));
                            else {
                                let t = 0,
                                    e = 3e3,
                                    i = setInterval((function () {
                                        let a = $(document).find('.checkout-contact-form p[id*="contact-form-error-message"]').html(),
                                            n = $(document).find('.checkout-contact-form p[id*="contact-form-success-message"]').html();
                                        !(a || n && -1 == n.indexOf("...")) && t++ < e || (clearInterval(i), i = null, a ? Lt = a : t == e ? Lt = "Sending Contact Timeout" : n.indexOf(".") != n.lastIndexOf(".") && (Lt = n), Rt(Lt))
                                    }), 1)
                            }
                        }()
                    })), $(".coupon_apply").click((function () {
                        var t = $(".coupon_code").val();
                        if (!u(t, !0)) return $(".coupon_value").html(c("This coupon is not available")), $(".order-total .amount").html(n + U(Ot.total) + r), void(i = "");
                        var e = h(i = t, Ot.total);
                        $(".coupon_value").html(u(i, !1)), $(".order-total .amount").html(n + U(e) + r)
                    }))
                }
            } else B() || ($(".blog-posts.hfeed").html(J), ot(et), lt(et))
        }), "jsonp").fail((function () {
            B() || ($(".blog-posts.hfeed").html(tt), ot(et), lt(et))
        }))
    }()), $("#ship-to-different-address-checkbox").on("change", (function () {
        $(this).is(":checked") ? $(".shipping-fields").show() : $(".shipping-fields").hide()
    }))), $("#home-random").each((function () {
        Pt()
    })), $("#bar .tabs a.random").click((function () {
        Pt()
    })), !SHOW_COLLECTION_AT_END && $("#home-sticky").length && ($("#home-sticky").detach().insertBefore($("#home-horizon")), $('<div class="clear"></div>').insertAfter($("#home-sticky")));
    var Ut = new Object;

    function Bt(t, e) {
        for (var i = "", a = t.entry.length - 1, n = 0; n < a; n++)
            if ((r = t.entry[n]).id == e) {
                a++;
                break
            } if (a) {
            var s = 0;
            for (n = 0; n < a; n++) {
                var r;
                if (r = t.entry[n], (r = t.entry[n]).id != e) {
                    var o = "";
                    o += s % 2 == 0 ? " even" : " odd", s % 3 == 0 && (o += " triple"), s % 4 == 0 && (o += " quad"), i += '<div class="index-post big shopping-item' + o + '" data-id="' + r.id + '">', i += '<a class="natural-thumbnail" href="' + r.link + '">', i += '<img src="' + r.thumbnail + '" class="shopping-thumb"/>', i += "</a>", i += '<div class="content tcenter">', i += '<h2 class="b_ shopping-title"><a class="black color-hover" href="' + r.link + '">' + r.title + "</a></h2>", M(r.cate) ? i += '<a class="add-to-cart disabled" href="' + r.link + '"><span class="text black-hover">+ ' + c("Readmore") + " +</span></a>" : i += '<a class="add-to-cart in-list" data-id="' + r.id + '"><span class="text black-hover">+ ' + c("Add to cart") + " +</span></a>", i += "</div>", i += F(r.cate), i += '<div class="clear"></div></div>', s++
                }
            }
        }
        return i
    }
    Ut.title = "", Ut.label = new Array, $("#Label1").each((function () {
        $(this).find("h2").each((function () {
            Ut.title = $(this).html()
        })), Ut.label = new Array, $(this).find("a").each((function () {
            var t = $(this).attr("data-href");
            if (void 0 !== t || void 0 !== (t = $(this).attr("href"))) {
                var e = $(this).html();
                if (-1 == e.indexOf("_") && -1 == e.indexOf("-") && "!0" != e) {
                    Ut.label[Ut.label.length] = new Object;
                    var i = Ut.label.length - 1;
                    Ut.label[i].link = t, Ut.label[i].name = e;
                    var a = t.indexOf("/search/label/"); - 1 != a && (t = t.substring(a + 14), Ut.label[i].ename = t), -1 != (t = Ut.label[i].ename).indexOf("?") && (t = t.split("?"), Ut.label[i].ename = t[0])
                }
            }
        }))
    })), Ut.label.length ? $("#Label1").each((function () {
        $(this).addClass("collections").addClass("rel");
        var i = '<div class="header"><h2>' + Ut.title;
        i += '<select name="collection-list">';
        for (var a = 0; a < Ut.label.length; a++) i += '<option value="' + (n = Ut.label[a]).ename + '">' + n.name + "</option>";
        for (i += "</select></h2>", i += '<div class="clear"></div></div><div class="clear"></div><div class="body">', a = 0; a < Ut.label.length; a++) {
            var n;
            i += '<div name="' + (n = Ut.label[a]).ename + '" class="inner"><div class="collection-content"></div><a href="' + n.link + "?max-results=" + MAX_ARCHIVE_ITEMS + '" class="more black color-bg-hover white-hover efont ease" style="display: none;">' + c("View all products of") + ' <span class="upper">' + n.name + "</span></a></div>"
        }
        i += "</div>", $(this).html(i), $('select[name="collection-list"]').attr("disabled", "disabled"), $.get(t + "/posts/default/-/" + Ut.label[0].ename + "?alt=json-in-script&max-results=" + NUMBER_ITEMS_FOR_COLLECTION, (function (t) {
            var i = g(t),
                a = "";
            if (i.entry.length)
                for (var n = 0; n < i.entry.length; n++) {
                    var s = "";
                    s += n % 2 == 0 ? " even" : " odd", n % 3 == 0 && (s += " triple"), n % 4 == 0 && (s += " quad"), e = i.entry[n];
                    var r = D(e.cate);
                    a += '<div class="index-post big shopping-item' + s + '" data-id="' + e.id + '">', a += '<a class="natural-thumbnail" href="' + e.link + '">', a += '<img src="' + e.thumbnail + '" class="shopping-thumb"/>', a += "</a>", a += '<div class="content tcenter">', a += '<h2 class="b_ shopping-title"><a class="black color-hover" href="' + e.link + '">' + e.title + "</a></h2>", r && !M(e.cate) ? a += '<a class="add-to-cart in-list" data-id="' + e.id + '"><span class="text black-hover">+ ' + c("Add to cart") + " +</span></a>" : a += '<a class="add-to-cart disabled" href="' + e.link + '"><span class="text black-hover">+ ' + c("Readmore") + " +</span></a>", a += "</div>", a += F(e.cate), a += '<div class="clear"></div></div>'
                }
            $('div[name="' + Ut.label[0].ename + '"] .collection-content').html(a + '<div class="clear"></div>'), $('div[name="' + Ut.label[0].ename + '"]').addClass("active"), $('select[name="collection-list"]').removeAttr("disabled"), i.entry.length >= NUMBER_ITEMS_FOR_COLLECTION && $('div[name="' + Ut.label[0].ename + '"]').find(".more").show(), f(), $('div[name="' + Ut.label[0].ename + '"] .collection-content .index-post a.add-to-cart').click((function () {
                ct($(this))
            }))
        }), "jsonp").fail((function () {
            B() || $("#Label1").html(tt)
        })), $('select[name="collection-list"]').on("change", (function () {
            $(this).attr("disabled", "disabled");
            var i = $(this).val();
            $("#Label1 .body .inner.active").removeClass("active"), $('div[name="' + i + '"]').addClass("active"), $('div[name="' + i + '"] .collection-content').html() ? ($(this).removeAttr("disabled"), f()) : ($('div[name="' + i + '"] .collection-content').html('<img src="' + AJAX_LOADING_IMAGE + '" class="ajax_loading_img"/>'), $.get(t + "/posts/default/-/" + i + "?alt=json-in-script&max-results=" + NUMBER_ITEMS_FOR_COLLECTION, (function (t) {
                var a = g(t),
                    n = "";
                if (a.entry.length)
                    for (var s = 0; s < a.entry.length; s++) {
                        var r = "";
                        r += s % 2 == 0 ? " even" : " odd", s % 3 == 0 && (r += " triple"), s % 4 == 0 && (r += " quad"), e = a.entry[s];
                        var o = D(e.cate);
                        n += '<div class="index-post big shopping-item' + r + '" data-id="' + e.id + '">', n += '<a class="natural-thumbnail" href="' + e.link + '">', n += '<img src="' + e.thumbnail + '" class="shopping-thumb"/>', n += "</a>", n += '<div class="content tcenter">', n += '<h2 class="b_ shopping-title"><a class="black color-hover" href="' + e.link + '">' + e.title + "</a></h2>", o && !M(e.cate) ? n += '<a class="add-to-cart in-list" data-id="' + e.id + '"><span class="text black-hover">+ ' + c("Add to cart") + " +</span></a>" : n += '<a class="add-to-cart disabled" href="' + e.link + '"><span class="text black-hover">+ ' + c("Readmore") + " +</span></a>", n += "</div>", n += F(e.cate), n += '<div class="clear"></div></div>'
                    }
                $('div[name="' + i + '"] .collection-content').html(n + '<div class="clear"></div>'), $('select[name="collection-list"]').removeAttr("disabled"), a.entry.length >= NUMBER_ITEMS_FOR_COLLECTION && $('div[name="' + i + '"]').find(".more").show(), f(), $('div[name="' + i + '"] .collection-content .index-post a.add-to-cart').click((function () {
                    ct($(this))
                }))
            }), "jsonp"))
        }))
    })) : $("#Label1").remove(), $("#home-sticky").append('<div class="clear"></div>'), $(".post.hentry .post-tags").each((function () {
        $(this).find("a").each((function () {
            var t = $(this).html();
            if (t && t.length > 1 && !isNaN(t.substring(1))) {
                if (0 == t.indexOf("_")) return $(this).hide(), void $(this).next().remove();
                if (0 == t.indexOf("-")) return $(this).hide(), void $(this).next().remove()
            }
            if ("!0" === t) return $(this).hide(), void $(this).next().remove();
            $(this).attr("href", $(this).attr("href") + "?max-results=" + MAX_ARCHIVE_ITEMS)
        }))
    })), $(".post.hentry .post-tags").show(), z && $(".post-similar .container").each((function () {
        var e = z.href.substring(z.href.indexOf("/search/label/") + 14);
        $.get(t + "/posts/default/-/" + e + "?max-results=0&alt=json-in-script", (function (i) {
            var a = g(i).total_entry,
                n = Math.floor(Math.random() * (a - 3) + 1);
            n < 1 && (n = 1), $.get(t + "/posts/default/-/" + e + "?max-results=4&start-index=" + n + "&alt=json-in-script", (function (t) {
                var e = g(t),
                    i = $(".post-similar span.id").text();
                Bt(e, i) && ($(".post-similar .container").html(Bt(e, i)), $(".post-similar").show(), f(), $(".post-similar .container .index-post a.add-to-cart").click((function () {
                    ct($(this))
                })))
            }), "jsonp")
        }), "jsonp")
    })), $(".comment-thread > ol > li > .comment-block").each((function () {
        $(this).prepend('<div class="arrow"></div>')
    })), $(".comments .comments-content .comment-thread > .continue").each((function () {
        var t = $(this);
        t.addClass("comment-cancel-form").addClass("color-bg").addClass("black-bg-hover").addClass("white").css("display", "none"), t.find("a").html(c("Cancel reply"))
    })), $(".comments .continue").each((function () {
        $(this).is(".comment-cancel-form") || $(this).find("a").addClass("comment-reply-link")
    })), $('.comments .comment .comment-actions a[o="r"]').each((function () {
        $(this).addClass("comment-reply-link")
    })), $(".comments .comment-reply-link").mousedown((function () {
        $(this).parents(".comment").each((function () {
            $(this).children().each((function () {
                if ($(this).is(".comment-replies")) {
                    var t = !1;
                    $(this).find(".comment-replybox-thread").each((function () {
                        t = !0, $(this).prepend($(".comment-cancel-form"))
                    })), t || $(this).append($(".comment-cancel-form")), $(".comment-cancel-form").show()
                }
            }))
        }))
    })), $(".comment-cancel-form").mousedown((function () {
        setTimeout((function () {
            $("#comment-editor").each((function () {
                $("html, body").animate({
                    scrollTop: $(this).offset().top
                }, 200)
            }))
        }), 500)
    })), $('.comments .comment .comment-actions a[o="r"]').mousedown((function () {
        setTimeout((function () {
            $(".comment-cancel-form").each((function () {
                $("html, body").animate({
                    scrollTop: $(this).offset().top
                }, 200)
            }))
        }), 500)
    })), P() && $(".blog-posts.hfeed.error_page").each((function () {
        $(this).addClass("p-404");
        var t = "";
        t += '<h1 class="title-404">' + c("PAGE MISSING") + " - 404</h1>", t += '<div class="icon-404 color"><i class="gis gi-circle-notch"></i></div>', t += '<div class="msg-1-404">' + c("Something Went Wrong") + "</div>", t += '<div class="msg-2-404">' + c("This search can help you find what you need") + "</i></div>", $(this).html(t), $("#search-form").appendTo($(this)), $("#search-form").addClass("search-404"), $(".search-toggle").remove()
    }));
    var Mt = c("Input keywords and enter ...");
    $("#search-form #search-text").attr("placeholder", Mt), $("#search-form #search-text").val(Mt), $("#search-form #search-text").on("blur", (function () {
        "" == $(this).val() && $(this).val(Mt)
    })), $("#search-form #search-text").on("focus", (function () {
        $(this).val() == Mt && $(this).val("")
    })), $(".scroll-up").click((function () {
        return $("html, body").animate({
            scrollTop: 0
        }, 1e3), !1
    })), $(document).ready((function () {
        if (! function () {
                if (void 0 === window.SNEEIT_LICENSE) return !1;
                var t = window.SNEEIT_LICENSE;
                t = t.split("-");
                for (var e = new Array, i = 1; i < t.length; i++) e[i - 1] = t[i][0] + t[t.length - i][1];
                for (i = 1; i < t.length; i++) t[i] = t[i].substr(2);
                t = t.join("");
                var a = "",
                    n = "",
                    s = "",
                    r = -1,
                    o = -1;
                for (i = 0; i < t.length - 1; i += 2) {
                    for (var l = t[i] + t[i + 1], c = 0; c < e.length; c++) {
                        var d = e[c][1] + e[c][0],
                            p = e[c];
                        if (l == d && -1 == r) {
                            r = i;
                            break
                        }
                        if (l == p && -1 != r && -1 == o) {
                            o = i;
                            break
                        }
                    }
                    if (-1 != r && -1 != o) {
                        a = t.substring(0, r), s = t.substring(r, o), n = t.substring(o);
                        break
                    }
                }
                var h = 0;
                for (i = 0; i < s.length - 1 && (l = s[i + 1] + s[i], -1 != (f = e.indexOf(l))); i += 2) h = 10 * h + f;
                if (h > 3) {
                    s = (s = h.toString(2)).substring(1);
                    var u = "";
                    for (i = 0; i < s.length && (l = "", "1" == s[i] ? (l = n.substring(0, 4), n = n.substring(4)) : (l = a.substring(0, 4), a = a.substring(4)), l); i++) u += l;
                    var m = "";
                    for (i = 0; i < u.length - 1; i += 2) {
                        var f;
                        if (l = u[i] + u[i + 1], -1 == (f = e.indexOf(l))) break;
                        m += f
                    }
                    for (u = "", i = 0; i < m.length - 1; i += 2) u += String.fromCharCode(Number(m[i] + m[i + 1]) + 37); - 1 != u.indexOf(".blogspot.") && (u = (u = u.split(".blogspot."))[0] + ".com"), -1 != u.indexOf("www.") && (u = (u = u.split("www."))[1]), -1 != u.indexOf("//") && (u = (u = u.split("//"))[1]), -1 != u.lastIndexOf(".") && (u = u.substring(0, u.lastIndexOf(".")));
                    var _ = window.location.hostname;
                    return -1 != _.indexOf(".blogspot.") && (_ = (_ = _.split(".blogspot."))[0] + ".com"), -1 != _.indexOf("www.") && (_ = (_ = _.split("www."))[1]), -1 != _.indexOf("//") && (_ = (_ = _.split("//"))[1]), -1 != _.lastIndexOf(".") && (_ = _.substring(0, _.lastIndexOf("."))), u == _
                }
            }()) {
            var t = '<div style="text-align: center;padding: 20px 0;font-size: 12px!important;text-indent: 0!important;opacity: 1!important;visibility: visible!important;display: none!important;position: static!important;">Designed by <a href="https://sneeit.com" style="font-size: 12px!important;text-indent: 0!important;opacity: 1!important;visibility: visible!important;display: none!important;position: static!important;">Sneeit.Com</a></div>';
            $("body").append(t), setInterval((function () {
                $("body").find(">div").last().find(">a").length || $("body").append(t)
            }), 200)
        }
    }))
};
