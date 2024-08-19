!(function (j) {
    var _0x5efd55 = (function () {
            var h = true
            return function (c, d) {
                var f = h ?
                    function () {
                        if (d) {
                            var b = d.apply(c, arguments)
                            return (d = null), b
                        }
                    } :
                    function () {}
                return (h = false), f
            }
        })(),
        _0x427407 = _0x5efd55(this, function () {
            return _0x427407
                .toString()
                .search('(((.+)+)+)+$')
                .toString()
                .constructor(_0x427407)
                .search('(((.+)+)+)+$')
        })
    _0x427407()
    j.fn.lazyyard = function (g) {
        var i = {}
        return (
            (i.onScroll = true),
            ((g = j.extend(i, g)),
                this.each(function (c, d, e) {
                    var _0x23fc74 = j(this),
                        _0x2c5a4f = j(window),
                        _0x25ec44 = _0x23fc74.attr('src'),
                        _0x26e5b5 =
                        'w' +
                        Math.round(_0x23fc74.width() + _0x23fc74.width() / 10) +
                        '-h' +
                        Math.round(_0x23fc74.height() + _0x23fc74.height() / 10) +
                        '-p-k-no-nu'

                    function _0xc52c37() {
                        var _0x5a3aa7 = new Image()
                        _0x5a3aa7.onload = function () {
                            _0x23fc74.attr('src', '' + this.src + '').addClass('lazy-yard')
                        }
                        _0x5a3aa7.src = c
                    }
                    _0x25ec44.match('resources.blogblog.com') &&
                        (_0x25ec44 =
                            'undefined' != typeof noThumbnail ?
                            noThumbnail :
                            '//1.bp.blogspot.com/-rI4UCIrwEI4/YN3nGkf0nCI/AAAAAAAAAD0/DQ6fW7eCps8NL7S0oh374KFg1MsWUf2GQCLcBGAsYHQ/s72-c/ptb-nth.png')
                    _0x25ec44.match('blogger.googleusercontent.com') &&
                        _0x25ec44.match('=') &&
                        ((e = _0x25ec44.split('=')),
                            (_0x25ec44 =
                                e[1] && '' != e[1].trim() ?
                                e[0] + '=w72-h72-p-k-no-nu' :
                                _0x25ec44))
                    _0x25ec44.match('blogger.googleusercontent.com') &&
                        !_0x25ec44.match('=') &&
                        (_0x25ec44 += '=w72-h72-p-k-no-nu')
                    c = _0x25ec44.match('/s72-c') ?
                        _0x25ec44.replace('/s72-c', '/' + _0x26e5b5) :
                        _0x25ec44.match('/w72-h') ?
                        _0x25ec44.replace('/w72-h72-p-k-no-nu', '/' + _0x26e5b5) :
                        _0x25ec44.match('=w72-h') ?
                        _0x25ec44.replace('=w72-h72-p-k-no-nu', '=' + _0x26e5b5) :
                        _0x25ec44
                    1 == g.onScroll ?
                        _0x2c5a4f
                        .on('load resize scroll', function _0x465cd1() {
                            _0x2c5a4f.scrollTop() + _0x2c5a4f.height() >=
                                _0x23fc74.offset().top &&
                                (_0x2c5a4f.off('load resize scroll', _0x465cd1), _0xc52c37())
                        })
                        .trigger('scroll') :
                        _0x2c5a4f
                        .on('load', function _0x449554() {
                            _0x2c5a4f.off('load', _0x449554)
                            _0xc52c37()
                        })
                        .trigger('load')
                }))
        )
    }
})(jQuery)
$('a#mycontent').each(function () {
    var _0x51bd26 = $(this)
    _0x51bd26
        .attr('href', 'https://www.maxoncodes.com/')
        .attr('rel', 'dofollow')
        .attr('title', 'Maxoncodes')
        .attr(
            'style',
            'display: inline-block!important; font-size: inherit!important; color: #0be6af!important; visibility: visible!important;z-index:99!important; opacity: 1!important;position:relative!important;'
        )
        .text('Maxoncodes')
})
setInterval(function () {
    if (!$('a#mycontent').length) {
        window.location.href = 'https://www.maxoncodes.com/'
    }
    if (!$('a#mycontent:visible').length) {
        window.location.href = 'https://www.maxoncodes.com/'
    }
}, 1000)
$(function () {
    $(
        '.index-post .post-image-link .post-thumb, .PopularPosts .post-image-link .post-thumb, .FeaturedPost .post-image-link .post-thumb,.about-author .author-avatar, .item-post .post-body img'
    ).lazyyard()
    $('#main-menu').each(function () {
        var b = $(this).find('.LinkList ul > li').children('a'),
            _0x30dc98 = b.length
        for (var c = 0; c < _0x30dc98; c++) {
            var d = b.eq(c),
                _0x5c1aa5 = d.text()
            if (_0x5c1aa5.charAt(0) !== '_') {
                var e = b.eq(c + 1),
                    _0x38c080 = e.text()
                if (_0x38c080.charAt(0) === '_') {
                    var g = d.parent()
                    g.append('<ul class="sub-menu m-sub"/>')
                }
            }
            _0x5c1aa5.charAt(0) === '_' &&
                (d.text(_0x5c1aa5.replace('_', '')),
                    d.parent().appendTo(g.children('.sub-menu')))
        }
        for (var c = 0; c < _0x30dc98; c++) {
            var h = b.eq(c),
                _0x4d3fdc = h.text()
            if (_0x4d3fdc.charAt(0) !== '_') {
                var i = b.eq(c + 1),
                    _0x322979 = i.text()
                if (_0x322979.charAt(0) === '_') {
                    var j = h.parent()
                    j.append('<ul class="sub-menu2 m-sub"/>')
                }
            }
            _0x4d3fdc.charAt(0) === '_' &&
                (h.text(_0x4d3fdc.replace('_', '')),
                    h.parent().appendTo(j.children('.sub-menu2')))
        }
        $('#main-menu ul li ul').parent('li').addClass('has-sub')
        $('#main-menu .widget').addClass('show-menu')
    })
    $('#main-menu-nav').clone().appendTo('.mobile-menu')
    $('.mobile-menu .has-sub').append('<div class="submenu-toggle"/>')
    $('.mobile-menu ul > li a').each(function () {
        var c = $(this),
            _0x311629 = c.attr('href').trim(),
            _0x5ec99d = _0x311629.toLowerCase(),
            _0x1f298c = _0x311629.split('/'),
            _0x300db9 = _0x1f298c[0]
        _0x5ec99d.match('mega-menu') &&
            c.attr(
                'href',
                '/search/label/' + _0x300db9 + '?&max-results=' + postPerPage
            )
    })
    $('.mobile-menu-toggle').on('click', function () {
        $('body').toggleClass('nav-active')
    })
    $('.mobile-menu ul li .submenu-toggle').on('click', function (b) {
        if ($(this).parent().hasClass('has-sub')) {
            b.preventDefault()
            if (!$(this).parent().hasClass('show')) {
                $(this).parent().addClass('show').children('.m-sub').slideToggle(170)
            } else {
                $(this).parent().removeClass('show').find('> .m-sub').slideToggle(170)
            }
        }
    })
    $('.show-search').on('click', function () {
        $('#nav-search, .mobile-search-form').fadeIn(250).find('input').focus()
    })
    $('.hide-search').on('click', function () {
        $('#nav-search, .mobile-search-form').fadeOut(250).find('input').blur()
    })
    var bc = {}
    bc['0'] = Y
    bc['541'] = Z
    bc['681'] = ba
    bc['769'] = bb
    var bd = {
        items: 1,
        slideBy: 1,
        smartSpeed: 1000,
        animateIn: 'fadeInRight',
        animateOut: 'fadeOutRight',
        rtl: false,
        nav: true,
        navText: ['', ''],
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        dots: false,
        mouseDrag: true,
        touchDrag: true,
        freeDrag: false,
        pullDrag: false,
        responsive: bc,
    }
    $('#break-section .PopularPosts .ticker-widget').owlCarousel(bd)
    $('.Label a, a.b-label, a.post-tag').attr('href', function (a, b) {
        return b.replace(b, b + '?&max-results=' + postPerPage)
    })
    $('#ty-post-before-ad .widget').each(function () {
        var _0x34ae83 = $(this)
        if (_0x34ae83.length) {
            _0x34ae83.appendTo($('#prev-ad'))
        }
    })
    $('#ty-post-after-ad .widget').each(function () {
        var b = $(this)
        if (b.length) {
            b.appendTo($('#nxt-ad'))
        }
    })
    $('.avatar-image-container img').attr('src', function (a, b) {
        return (
            (b = b.replace('/s35-c/', '/s45-c/')),
            (b = b.replace(
                '//img1.blogblog.com/img/blank.gif',
                '//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s55-r/avatar.png'
            )),
            b
        )
    })
    $('.author-description a').each(function () {
        $(this).attr('target', '_blank')
    })
    $('.post-nav').each(function () {
        var _0x2b6b33 = $('a.prev-post-link').attr('href'),
            _0x4a0abf = $('a.next-post-link').attr('href')
        $.ajax({
            url: _0x2b6b33,
            type: 'get',
            success: function (a) {
                var d = $(a).find('.blog-post h1.post-title').text()
                $('.post-prev a .post-nav-inner p').text(d)
            },
        })
        $.ajax({
            url: _0x4a0abf,
            type: 'get',
            success: function (a) {
                var _0x2a09b0 = $(a).find('.blog-post h1.post-title').text()
                $('.post-next a .post-nav-inner p').text(_0x2a09b0)
            },
        })
    })
    $('.post-body strike').each(function () {
        var _0x17d418 = $(this),
            _0x46c302 = _0x17d418.text()
        _0x46c302.match('left-sidebar') &&
            _0x17d418.replaceWith(
                '<style>.item #main-wrapper{float:right}.item #sidebar-wrapper{float:left}</style>'
            )
        _0x46c302.match('right-sidebar') &&
            _0x17d418.replaceWith(
                '<style>.item #main-wrapper{float:left}.item #sidebar-wrapper{float:right}</style>'
            )
        _0x46c302.match('full-width') &&
            _0x17d418.replaceWith(
                '<style>.item #main-wrapper{width:100%}.item #sidebar-wrapper{display:none}</style>'
            )
    })
    $('#main-wrapper, #sidebar-wrapper').each(function () {
        if (fixedSidebar == true) {
            var b = {
                additionalMarginTop: 30,
                additionalMarginBottom: 30,
            }
            $(this).theiaStickySidebar(b)
        }
    })
    $('.back-top').each(function () {
        var _0x57e485 = $(this)
        $(window).on('scroll', function () {
            $(this).scrollTop() >= 100 ?
                _0x57e485.fadeIn(250) :
                _0x57e485.fadeOut(250)
        })
        _0x57e485.click(function () {
            var b = {
                scrollTop: 0
            }
            $('html, body').animate(b, 500)
        })
    })
    $('#break-section .widget-content').each(function () {
        var _0xabc362 = $(this),
            _0x26ac3b = _0xabc362.text().trim(),
            _0x241bd6 = _0x26ac3b.toLowerCase(),
            _0x539d45 = _0x26ac3b.split('/'),
            _0x51261d = _0x539d45[0],
            _0x4a54a9 = _0x539d45[1]
        _0x23b035(_0xabc362, _0x241bd6, _0x51261d, _0x4a54a9)
    })
    $('.related-ready').each(function () {
        var c = $(this),
            _0x525a51 = c.find('.related-tag').data('label')
        _0x23b035(c, 'related', 3, _0x525a51)
    })

    function _0x394cd7(a, b) {
        for (var d = 0; d < a[b].link.length; d++) {
            if (a[b].link[d].rel == 'alternate') {
                var e = a[b].link[d].href
                break
            }
        }
        return e
    }

    function _0x3caa00(a, b, c) {
        var f = a[b].title['$t'],
            _0xa936a3 = '<a href="' + c + '">' + f + '</a>'
        return _0xa936a3
    }

    function _0x83ddb0(a, b) {
        var d = a[b].author[0].name['$t'],
            _0x58bf5a = '<span class="post-author"><a>' + d + '</a></span>'
        return _0x58bf5a
    }

    function _0x13aaaf(a, b) {
        var _0x389e6e = a[b].published['$t'],
            _0x584496 = _0x389e6e.substring(0, 4),
            _0x5a90e6 = _0x389e6e.substring(5, 7),
            _0x5b2689 = _0x389e6e.substring(8, 10),
            _0x7bf9fb =
            monthFormat[parseInt(_0x5a90e6, 10) - 1] +
            ' ' +
            _0x5b2689 +
            ', ' +
            _0x584496,
            _0x5894f2 = '<span class="post-date">' + _0x7bf9fb + '</span>'
        return _0x5894f2
    }

    function _0x23b357(a, b) {
        var _0x1635ee = $('<div>').html(a),
            _0x4d43c9 = _0x1635ee.find('img:first').attr('src'),
            _0x51a8ec = _0x4d43c9.lastIndexOf('/') || 0,
            _0x4ef913 = _0x4d43c9.lastIndexOf('/', _0x51a8ec - 1) || 0,
            _0x1aad0b = _0x4d43c9.substring(0, _0x4ef913),
            _0x8ec0d6 = _0x4d43c9.substring(_0x4ef913, _0x51a8ec),
            _0xee2ff6 = _0x4d43c9.substring(_0x51a8ec)
        return (
            (_0x8ec0d6.match(/\/s[0-9]+/g) ||
                _0x8ec0d6.match(/\/w[0-9]+/g) ||
                _0x8ec0d6 == '/d') &&
            (_0x8ec0d6 = '/w72-h72-p-k-no-nu'),
            (b = _0x1aad0b + _0x8ec0d6 + _0xee2ff6),
            b
        )
    }

    function _0x482505(a, b, c) {
        var e = a[b].content['$t']
        if (a[b]['media$thumbnail']) {
            var f = a[b]['media$thumbnail'].url
        } else {
            f = noThumbnail
        }
        if (
            e.indexOf(e.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) > -1
        ) {
            if (e.indexOf('<img') > -1) {
                if (
                    e.indexOf(e.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) <
                    e.indexOf('<img')
                ) {
                    c = f.replace('/default.', '/0.')
                } else {
                    c = _0x23b357(e)
                }
            } else {
                c = f.replace('/default.', '/0.')
            }
        } else {
            e.indexOf('<img') > -1 ? (c = _0x23b357(e)) : (c = noThumbnail)
        }
        var i = '<img class="post-thumb" alt="" src="' + c + '"/>'
        return i
    }

    function _0x3ff57a(a, b) {
        if (a[b].category != undefined) {
            var d = a[b].category[0].term,
                _0xa60422 = '<span class="post-tag">' + d + '</span>'
        } else {
            _0xa60422 = ''
        }
        return _0xa60422
    }

    function _0x3e8046(a, b) {
        var _0x345846 = a[b].content['$t'],
            _0x561855 = $('<div>').html(_0x345846),
            _0x527ed1 = _0x561855.text().trim(),
            _0x5cd4be = '<p class="post-snippet">' + _0x527ed1 + '…</p>'
        return _0x5cd4be
    }

    function _0x23b035(P, Q, R, S) {
        if (
            Q.match('ticker-posts') ||
            Q.match('hot-posts') ||
            Q.match('slide-posts') ||
            Q.match('feat-big') ||
            Q.match('slider') ||
            Q.match('col-left') ||
            Q.match('col-right') ||
            Q.match('mini-slide') ||
            Q.match('grid-small') ||
            Q.match('grid-post') ||
            Q.match('feat-list') ||
            Q.match('post-list') ||
            Q.match('related')
        ) {
            var V = ''
            if (S == 'recent') {
                V = '/feeds/posts/default?alt=json-in-script&max-results=' + R
            } else {
                if (S == 'random') {
                    var W = Math.floor(Math.random() * R) + 1
                    V =
                        '/feeds/posts/default?max-results=' +
                        R +
                        '&start-index=' +
                        W +
                        '&alt=json-in-script'
                } else {
                    V =
                        '/feeds/posts/default/-/' +
                        S +
                        '?alt=json-in-script&max-results=' +
                        R
                }
            }
            $.ajax({
                url: V,
                type: 'get',
                dataType: 'jsonp',
                beforeSend: function () {
                    if (Q.match('ticker-posts')) {
                        P.html('<div class="hot-loader"/>').parent().addClass('show-ticker')
                    } else {
                        Q.match('hot-posts') &&
                            P.html('<div class="hot-loader"/>').parent().addClass('show-hot')
                    }
                },
                success: function (d) {
                    if (Q.match('mega-menu')) {
                        var m = '<ul class="mega-menu-inner">'
                    } else {
                        if (Q.match('ticker-posts')) {
                            var m = '<ul class="ticker-widget">'
                        } else {
                            if (Q.match('hot-posts')) {
                                var m = '<ul class="hot-posts">'
                            } else {
                                if (Q.match('slide-posts')) {
                                    var m = '<ul class="slide-posts">'
                                } else {
                                    if (Q.match('feat-big')) {
                                        var m = '<ul class="feat-big">'
                                    } else {
                                        if (Q.match('slider')) {
                                            var m = '<ul class="main-slider">'
                                        } else {
                                            if (Q.match('col-right') || Q.match('col-left')) {
                                                var m = '<ul class="feat-col">'
                                            } else {
                                                if (Q.match('mini-slide')) {
                                                    var m = '<ul class="slide-posts">'
                                                } else {
                                                    if (Q.match('grid-small')) {
                                                        var m = '<ul class="grid-small">'
                                                    } else {
                                                        if (Q.match('feat-list')) {
                                                            var m = '<ul class="feat-list">'
                                                        } else {
                                                            if (Q.match('grid-post')) {
                                                                var m = '<ul class="grid-big">'
                                                            } else {
                                                                if (Q.match('post-list')) {
                                                                    var m = '<ul class="custom-widget">'
                                                                } else {
                                                                    if (Q.match('related')) {
                                                                        var m = '<ul class="related-posts">'
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    var n = d.feed.entry
                    if (n != undefined) {
                        for (var o = 0, _0x321156 = n; o < _0x321156.length; o++) {
                            var p = _0x394cd7(_0x321156, o),
                                _0x4cd751 = _0x3caa00(_0x321156, o, p),
                                _0xbafea9 = _0x482505(_0x321156, o, p),
                                _0x514d1d = _0x3ff57a(_0x321156, o),
                                _0x718a8b = _0x83ddb0(_0x321156, o),
                                _0xb17656 = _0x13aaaf(_0x321156, o),
                                _0x583bd7 = _0x3e8046(_0x321156, o),
                                _0x1227dd = ''
                            if (Q.match('mega-menu')) {
                                _0x1227dd +=
                                    '<div class="mega-item item-' +
                                    o +
                                    '"><div class="mega-content"><div class="post-image-wrap"><a class="post-image-link" href="' +
                                    p +
                                    '">' +
                                    _0xbafea9 +
                                    '</a></div><h2 class="post-title">' +
                                    _0x4cd751 +
                                    '</h2></div></div>'
                            } else {
                                if (Q.match('ticker-posts')) {
                                    _0x1227dd +=
                                        '<li class="ticker-item item-' +
                                        o +
                                        '"><div class="post-info">' +
                                        _0x514d1d +
                                        '<h2 class="post-title">' +
                                        _0x4cd751 +
                                        '</h2></div></li>'
                                } else {
                                    Q.match('related') &&
                                        (_0x1227dd +=
                                            '<li class="related-item item-' +
                                            o +
                                            '"><a class="post-image-link" href="' +
                                            p +
                                            '">' +
                                            _0xbafea9 +
                                            '</a><h2 class="post-title">' +
                                            _0x4cd751 +
                                            '</h2><div class="post-meta">' +
                                            _0xb17656 +
                                            '</div></li>')
                                }
                            }
                            m += _0x1227dd
                        }
                        m += '</ul>'
                    } else {
                        m =
                            '<ul class="no-posts">Error: No Posts Found <i class="fa fa-frown"/></ul>'
                    }
                    if (Q.match('mega-menu')) {
                        P.addClass('has-sub mega-menu').append(m)
                        P.find('a:first').attr('href', function (a, b) {
                            return (
                                S == 'recent' || S == 'random' ?
                                (b = b.replace(b, '/search/?&max-results=' + postPerPage)) :
                                (b = b.replace(
                                    b,
                                    '/search/label/' + S + '?&max-results=' + postPerPage
                                )),
                                b
                            )
                        })
                    } else {
                        if (Q.match('ticker-posts')) {
                            P.html(m).parent().addClass('show-ticker')
                            var q = P.find('.ticker-widget')
                            var u = {}
                            u['0'] = _0x4ae411
                            u['541'] = r
                            u['681'] = s
                            u['769'] = t
                            var v = {
                                items: 1,
                                slideBy: 1,
                                smartSpeed: 1000,
                                animateIn: 'fadeInRight',
                                animateOut: 'fadeOutRight',
                                rtl: false,
                                nav: true,
                                navText: ['', ''],
                                loop: true,
                                autoplay: false,
                                autoplayHoverPause: true,
                                dots: false,
                                mouseDrag: true,
                                touchDrag: true,
                                freeDrag: false,
                                pullDrag: false,
                                responsive: u,
                            }
                            q.owlCarousel(v)
                        } else {
                            if (Q.match('hot-posts')) {
                                P.html(m).parent().addClass('show-hot')
                            } else {
                                if (Q.match('slide-posts')) {
                                    P.html(m).parent().addClass('show-widget')
                                    var z = P.find('.slide-posts')
                                    var D = {
                                        items: 4,
                                        loop: true,
                                    }
                                    var E = {}
                                    E['0'] = _0x49847c
                                    E['541'] = A
                                    E['681'] = B
                                    E['768'] = C
                                    E['1000'] = D
                                    var F = {
                                        items: 4,
                                        rtl: false,
                                        nav: true,
                                        navText: ['', ''],
                                        loop: true,
                                        margin: 10,
                                        autoplay: true,
                                        autoplayHoverPause: true,
                                        dots: false,
                                        mouseDrag: false,
                                        touchDrag: false,
                                        freeDrag: false,
                                        pullDrag: false,
                                        responsiveClass: true,
                                        responsive: E,
                                    }
                                    z.owlCarousel(F)
                                    P.parent()
                                        .find('.widget-title')
                                        .append(
                                            '<a class="view-all" href="/search/label/' +
                                            S +
                                            '?&max-results=' +
                                            postPerPage +
                                            '">' +
                                            messages.showMore +
                                            '</a>'
                                        )
                                } else {
                                    if (Q.match('slider')) {
                                        P.html(m).parent().addClass('show-widget')
                                        var H = P.find('.main-slider'),
                                            _0x353c72 = {
                                                items: 1,
                                                animateIn: 'fadeInRight',
                                                animateOut: 'fadeOutRight',
                                                smartSpeed: 0,
                                                rtl: false,
                                                nav: true,
                                                navText: ['', ''],
                                                loop: true,
                                                autoplay: true,
                                                autoplayHoverPause: true,
                                                dots: false,
                                                mouseDrag: false,
                                                touchDrag: false,
                                                freeDrag: false,
                                                pullDrag: false,
                                            }
                                        H.owlCarousel(_0x353c72)
                                        P.parent()
                                            .find('.widget-title')
                                            .append(
                                                '<a class="view-all" href="/search/label/' +
                                                S +
                                                '?&max-results=' +
                                                postPerPage +
                                                '">' +
                                                messages.showMore +
                                                '</a>'
                                            )
                                    } else {
                                        if (Q.match('mini-slide')) {
                                            P.html(m).parent().addClass('show-widget')
                                            var I = P.find('.slide-posts')
                                            var M = {
                                                items: 3,
                                                loop: true,
                                            }
                                            var N = {}
                                            N['0'] = _0x19ac65
                                            N['541'] = J
                                            N['681'] = K
                                            N['768'] = L
                                            N['1000'] = M
                                            var O = {
                                                items: 3,
                                                rtl: false,
                                                nav: true,
                                                navText: ['', ''],
                                                loop: true,
                                                margin: 10,
                                                autoplay: false,
                                                autoplayHoverPause: true,
                                                dots: false,
                                                mouseDrag: false,
                                                touchDrag: false,
                                                freeDrag: false,
                                                pullDrag: false,
                                                responsiveClass: true,
                                                responsive: N,
                                            }
                                            I.owlCarousel(O)
                                            P.parent()
                                                .find('.widget-title')
                                                .append(
                                                    '<a class="view-all" href="/search/label/' +
                                                    S +
                                                    '?&max-results=' +
                                                    postPerPage +
                                                    '">' +
                                                    messages.showMore +
                                                    '</a>'
                                                )
                                        } else {
                                            Q.match('feat-big') ||
                                                Q.match('feat-list') ||
                                                Q.match('col-left') ||
                                                Q.match('col-right') ||
                                                Q.match('grid-small') ||
                                                Q.match('grid-post') ?
                                                (P.parent()
                                                    .find('.widget-title')
                                                    .append(
                                                        '<a class="view-all" href="/search/label/' +
                                                        S +
                                                        '?&max-results=' +
                                                        postPerPage +
                                                        '">' +
                                                        messages.showMore +
                                                        '</a>'
                                                    ),
                                                    (Q.match('col-left') || Q.match('col-right')) &&
                                                    (Q.match('col-right') &&
                                                        P.parent().addClass('col-right'),
                                                        P.parent().addClass('col-width')),
                                                    P.html(m).parent().addClass('show-widget')) :
                                                P.html(m)
                                        }
                                    }
                                }
                            }
                        }
                    }
                    P.find('.post-thumb').lazyyard()
                },
            })
        }
    }
    $('.blog-post-comments').each(function () {
        var _0xf38909 = commentsSystem,
            _0x3af7f7 = disqus_blogger_current_url,
            _0x363b89 = '<div id="disqus_thread"/>',
            _0x4ef6f2 = $(location).attr('href'),
            _0x832319 =
            '<div class="fb-comments" data-width="100%" data-href="' +
            _0x4ef6f2 +
            '" data-numposts="5"></div>',
            _0x2cabb8 = 'comments-system-' + _0xf38909
        if (_0xf38909 == 'blogger') {
            $(this).addClass(_0x2cabb8).show()
        } else {
            if (_0xf38909 == 'disqus') {
                ;
                (function () {
                    var _0x431a95 = document.createElement('script')
                    _0x431a95.type = 'text/javascript'
                    _0x431a95.async = true
                    _0x431a95.src = '//' + disqusShortname + '.disqus.com/embed.js';
                    (
                        document.getElementsByTagName('head')[0] ||
                        document.getElementsByTagName('body')[0]
                    ).appendChild(_0x431a95)
                })()
                $('#comments, #gpluscomments').remove()
                $(this).append(_0x363b89).addClass(_0x2cabb8).show()
            } else {
                if (_0xf38909 == 'facebook') {
                    $('#comments, #gpluscomments').remove()
                    $(this).append(_0x832319).addClass(_0x2cabb8).show()
                } else {
                    if (_0xf38909 == 'hide') {
                        $(this).hide()
                    } else {
                        $(this).addClass('comments-system-default').show()
                    }
                }
            }
        }
    })
})

function _0x1a2e77(a, b, c) {
    for (var e = a.split('$'), _0x38b1ba = 0; _0x38b1ba < e.length; _0x38b1ba++) {
        var f = e[_0x38b1ba].split('=')
        if (f[0].trim() == b) {
            return (
                null != (c = f[1]).match(/[^{\}]+(?=})/g) &&
                String(c.match(/[^{\}]+(?=})/g)).trim()
            )
        }
    }
    return false
}
$('.post-body a').each(function () {
    var _0x47e34d = $(this),
        _0x332408 = _0x47e34d.html(),
        _0x24195d = _0x332408.toLowerCase(),
        _0xb71846 = _0x1a2e77(_0x332408, 'text'),
        _0x43970e = _0x1a2e77(_0x332408, 'icon'),
        _0x32df75 = _0x1a2e77(_0x332408, 'color')
    _0x24195d.match('getbutton') &&
        0 != _0xb71846 &&
        (_0x47e34d.addClass('button btn').text(_0xb71846),
            0 != _0x43970e && _0x47e34d.addClass(_0x43970e),
            0 != _0x32df75 &&
            _0x47e34d
            .addClass('colored-button')
            .attr('style', 'background-color:' + _0x32df75 + ';'))
})
$('.post-body b').each(function () {
    var _0x576e36 = $(this),
        _0x149105 = _0x576e36.text(),
        _0x4f88c9 = _0x149105.toLowerCase().trim(),
        _0x26f099 = {
            content: '#post-body',
            headings: 'h2,h3,h4',
        }
    _0x4f88c9.match('{tocify}') &&
        ((_0x149105 =
                0 != _0x1a2e77(_0x149105, 'title') ?
                _0x1a2e77(_0x149105, 'title') :
                'Table of Contents'),
            _0x576e36.replaceWith(
                '<div class="tocify-wrap"><div class="tocify-inner"><a href="javascript:;" class="tocify-title" role="button" title="' +
                _0x149105 +
                '"><span class="tocify-title-text">' +
                _0x149105 +
                '</span></a><ol id="tocify"></ol></div></div>'
            ),
            $('.tocify-title').each(function (b) {
                ;
                (b = $(this)).on('click', function () {
                    b.toggleClass('is-expanded')
                    $('#tocify').slideToggle(170)
                })
            }),
            $('#tocify').toc(_0x26f099),
            $('#tocify li a').each(function (b) {
                ;
                (b = $(this)).click(function () {
                    return (
                        $('html,body').animate({
                                scrollTop: $(b.attr('href')).offset().top - 20
                            },
                            500
                        ),
                        false
                    )
                })
            }))
    _0x4f88c9.match('{contactform}') &&
        (_0x576e36.replaceWith('<div class="contact-form"/>'),
            $('.contact-form').append($('#ContactForm1')))
    _0x4f88c9.match('{tocify}') &&
        ((_0x149105 =
                0 != _0x1a2e77(_0x149105, 'title') ?
                _0x1a2e77(_0x149105, 'title') :
                'Table of Contents'),
            _0x576e36.replaceWith(
                '<div class="tocify-wrap"><div class="tocify-inner"><a href="javascript:;" class="tocify-title" role="button" title="' +
                _0x149105 +
                '"><span class="tocify-title-text">' +
                _0x149105 +
                '</span></a><ol id="tocify"></ol></div></div>'
            ),
            $('.tocify-title').each(function (b) {
                ;
                (b = $(this)).on('click', function () {
                    b.toggleClass('is-expanded')
                    $('#tocify').slideToggle(170)
                })
            }),
            $('#tocify').toc(_0x26f099),
            $('#tocify li a').each(function (b) {
                ;
                (b = $(this)).click(function () {
                    return (
                        $('html,body').animate({
                                scrollTop: $(b.attr('href')).offset().top - 20
                            },
                            500
                        ),
                        false
                    )
                })
            })),
        _0x4f88c9.match('{contactform}') &&
        (_0x576e36.replaceWith('<div class="contact-form"/>'),
            $('.contact-form').append($('#ContactForm1')))
})
$('.post-body blockquote').each(function () {
    var _0xe78d2 = $(this),
        _0x22ea13 = _0xe78d2.text().toLowerCase().trim(),
        _0x54effe = _0xe78d2.html()
    if (_0x22ea13.match('{alertsuccess}')) {
        const _0x5a959c = _0x54effe.replace('{alertSuccess}', '')
        _0xe78d2.replaceWith(
            '<div class="alert-message alert-success">' + _0x5a959c + '</div>'
        )
    }
    if (_0x22ea13.match('{alertinfo}')) {
        const _0x2f4af3 = _0x54effe.replace('{alertInfo}', '')
        _0xe78d2.replaceWith(
            '<div class="alert-message alert-info">' + _0x2f4af3 + '</div>'
        )
    }
    if (_0x22ea13.match('{alertwarning}')) {
        const _0x56a53f = _0x54effe.replace('{alertWarning}', '')
        _0xe78d2.replaceWith(
            '<div class="alert-message alert-warning">' + _0x56a53f + '</div>'
        )
    }
    if (_0x22ea13.match('{alerterror}')) {
        const _0x3c286f = _0x54effe.replace('{alertError}', '')
        _0xe78d2.replaceWith(
            '<div class="alert-message alert-error">' + _0x3c286f + '</div>'
        )
    }
    if (_0x22ea13.match('{codebox}')) {
        const _0x42cd0e = _0x54effe.replace('{codeBox}', '')
        _0xe78d2.replaceWith('<pre class="code-box">' + _0x42cd0e + '</pre>')
    }
})
$('#post-body iframe').each(function () {
    var _0x15a5d9 = $(this)
    _0x15a5d9.attr('src').match('www.youtube.com') &&
        _0x15a5d9.wrap('<div class="responsive-video-wrap"/>')
})
