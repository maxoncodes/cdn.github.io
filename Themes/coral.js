function webdesignNav() {
    document.getElementById('submenu').style.left = '0';
    document.getElementById('design').style.display = 'none';
    document.getElementById('webdesign').style.display = 'unset';
    document.getElementById('microsoft').style.display = 'none';
    document.getElementById('headerkanan').style.overflow = 'hidden';
}

function microsoftNav() {
    document.getElementById('submenu').style.left = '0';
    document.getElementById('design').style.display = 'none';
    document.getElementById('webdesign').style.display = 'none';
    document.getElementById('microsoft').style.display = 'unset';
    document.getElementById('headerkanan').style.overflow = 'hidden';
}

function designNav() {
    document.getElementById('submenu').style.left = '0';
    document.getElementById('design').style.display = 'unset';
    document.getElementById('webdesign').style.display = 'none';
    document.getElementById('microsoft').style.display = 'none';
    document.getElementById('headerkanan').style.overflow = 'hidden';
}

function closeNav() {
    document.getElementById('submenu').style.left = '-250px';
    document.getElementById('headerkanan').style.overflow = 'auto';
};
$('#blog-repeat').on('click', function (_0x54ffa8) {
    _0x54ffa8.preventDefault();
    var _0x6994e6 = $('.blog-pager-older-link');
    var _0x2b8e4d = _0x6994e6.attr('href');
    var _0x1f668b = _0x6994e6.data('clicked');
    if (_0x1f668b) {
        return !0x1;
    }
    _0x6994e6.data('clicked', !0x0);
    $('.blog-pager-older-link').html('Loading...');
    $.get(_0x2b8e4d, function (_0x419134) {
        var _0x250478 = $(_0x419134).find('.blog-posts').length ? $(_0x419134) : $('<div></div>');
        $('.blog-posts').append(_0x250478.find('.blog-posts').html());
        var _0x1234f9 = _0x250478.find('#Blog1_blog-pager-older-link').clone();
        if (_0x1234f9.html() === undefined) {
            $('#blog-pager-older-link').html('<span></span><span><a class="blog-pager-older-link">Empty Post</a></span><span></span>');
            finish = 0x1;
        } else {
            $('#blog-repeat').html(_0x1234f9);
        }
        _0x6994e6.data('clicked', !0x1);
    }, 'html');
});
$('#hartomyTampilanGrid').click(function () {
    $('body').removeClass('hartomyTampilanList');
});
$('#hartomyTampilanList').click(function () {
    $('body').addClass('hartomyTampilanList');
});
$(function () {
    $(document).on('scroll', function () {
        if ($(window).scrollTop() > 0x64) {
            $('.scroll-top-wrapper').addClass('show');
        } else {
            $('.scroll-top-wrapper').removeClass('show');
        }
    });
    $('.scroll-top-wrapper').on('click', scrollToTop);
});

function scrollToTop() {
    verticalOffset = typeof verticalOffset != 'undefined' ? verticalOffset : 0x0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({
        'scrollTop': offsetTop
    }, 0x1f4, 'linear');
}
$(function () {
    $('.separator:first').remove(), $('.post-body > img:first').remove();
});
$('.buka').click(function () {
    if ($('#headerkanan').css('left') == '80px') {
        $('#headerkanan').css({
            'left': '-300px'
        });
        $('#menututup').css({
            'left': '28px'
        });
        $('#headerwidget').css({
            'width': '76%'
        });
    } else {
        $('body').css({
            'overflow': ''
        });
        $('#headerkanan').css({
            'left': ''
        });
        $('#menukiri').css({
            'left': '0'
        });
        $('#wrapper').css({
            'width': '76%',
            'left': '138px'
        });
        $('#fotoku').css({
            'left': '0'
        });
        $('#menubuka').css({
            'left': '-28px'
        });
        $('#menututup').css({
            'left': '28px'
        });
        $('#headerwidget').css({
            'width': '76%'
        });
    }
});
$('.menututup').click(function () {
    if ($('#menututup').css('left') == '28px') {
        $('#headerkanan').css({
            'left': '-300px'
        });
        $('#menukiri').css({
            'left': '-210px'
        });
        $('#menututup').css({
            'left': '-28px'
        });
        $('#menubuka').css({
            'left': '28px'
        });
        $('#wrapper').css({
            'left': '40px',
            'width': '85%'
        });
        $('#headerwidget').css({
            'width': '100%'
        });
        $('#fotoku').css({
            'left': '198px'
        });
    }
});
$('.menubuka').click(function () {
    if ($('#menukiri').css('left') == '-210px') {
        $('#menukiri').css({
            'left': '0'
        });
        $('#headerkanan').css({
            'left': '80px'
        });
        $('#menututup').css({
            'left': '28px'
        });
        $('#menubuka').css({
            'left': '-28px'
        });
        $('#fotoku').css({
            'left': '0'
        });
        $('#wrapper').css({
            'left': '138px',
            'width': '76%'
        });
        $('#headerwidget').css({
            'width': '76%'
        });
    }
});
$('.mediabuka').click(function () {
    if ($('#menukiri').css('left') == '-210px') {
        $('#menukiri').css({
            'left': '0'
        });
        $('#headerkanan').css({
            'left': '80px'
        });
        $('#mediatutup').css({
            'left': '28px'
        });
        $('#mediabuka').css({
            'left': '-28px'
        });
        $('#fotoku').css({
            'left': '0'
        });
    }
});
$('.mediatutup').click(function () {
    if ($('#mediatutup').css('left') == '28px') {
        $('#menukiri').css({
            'left': '-210px'
        });
        $('#headerkanan').css({
            'left': '-300px'
        });
        $('#mediatutup').css({
            'left': '-28px'
        });
        $('#mediabuka').css({
            'left': '28px'
        });
        $('#fotoku').css({
            'left': '198px'
        });
    }
});
$('.mobilebuka').click(function () {
    if ($('#mobilebuka').css('left') == '233px') {
        $('#menukiri').css({
            'left': '-300px'
        });
        $('#headerkanan').css({
            'left': '-300px'
        });
        $('#mobilebuka').css({
            'left': '-300px'
        });
    }
});
$('.meopen').click(function () {
    if ($('#headerkanan').css('left') == '-300px') {
        $('#menukiri').css({
            'left': '0'
        });
        $('#fotoku').css({
            'left': '0'
        });
        $('#mobilebuka').css({
            'left': '233px'
        });
        $('#mediatutup').css({
            'left': '28px'
        });
        $('#mediabuka').css({
            'left': '-28px'
        });
    } else {
        $('body').css({
            'overflow': ''
        });
        $('#headerkanan').css({
            'left': '-300px'
        });
    }
});
$('.bukaM').click(function () {
    if ($('#headerkanan').css('left') == '-300px') {
        $('#menukiri').css({
            'left': '0'
        });
        $('#fotoku').css({
            'left': '0'
        });
        $('#mobilebuka').css({
            'left': '233px'
        });
        $('#headerkanan').css({
            'left': '35px'
        });
    } else {
        $('body').css({
            'overflow': ''
        });
        $('#headerkanan').css({
            'left': ''
        });
    }
});
$('.bukaMedia').click(function () {
    if ($('#headerkanan').css('left') == '-300px') {
        $('#menukiri').css({
            'left': '0'
        });
        $('#fotoku').css({
            'left': '0'
        });
        $('#wrapper').css({
            'left': ''
        });
        $('#headerkanan').css({
            'left': '80px'
        });
        $('#mediatutup').css({
            'left': '28px'
        });
        $('#mediabuka').css({
            'left': '-28px'
        });
    } else {
        $('body').css({
            'overflow': ''
        });
        $('#headerkanan').css({
            'left': ''
        });
    }
});
var base64 = {
    '_keyStr': 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890+/=',
    'encode': function (_0x4972a4) {
        var _0x235690, _0x222e5f, _0x26a4a4, _0x3e75a4, _0x37450d, _0x3de865, _0x329e56, _0x125133 = '',
            _0x2229ea = 0x0;
        for (_0x4972a4 = base64._utf8_encode(_0x4972a4); _0x2229ea < _0x4972a4.length;) {
            _0x3e75a4 = (_0x235690 = _0x4972a4.charCodeAt(_0x2229ea++)) >> 0x2, _0x37450d = (0x3 & _0x235690) << 0x4 | (_0x222e5f = _0x4972a4.charCodeAt(_0x2229ea++)) >> 0x4, _0x3de865 = (0xf & _0x222e5f) << 0x2 | (_0x26a4a4 = _0x4972a4.charCodeAt(_0x2229ea++)) >> 0x6, _0x329e56 = 0x3f & _0x26a4a4, isNaN(_0x222e5f) ? _0x3de865 = _0x329e56 = 0x40 : isNaN(_0x26a4a4) && (_0x329e56 = 0x40), _0x125133 = _0x125133 + this._keyStr.charAt(_0x3e75a4) + this._keyStr.charAt(_0x37450d) + this._keyStr.charAt(_0x3de865) + this._keyStr.charAt(_0x329e56);
        };
        return _0x125133;
    },
    'decode': function (_0x3aff8a) {
        var _0x385c80, _0x63e868, _0x16b245, _0x2a60fb, _0x14fab4, _0x3e4698, _0x27774d = '',
            _0x1a7436 = 0x0;
        for (_0x3aff8a = _0x3aff8a.replace(/[^A-Za-z0-9\+\/\=]/g, ''); _0x1a7436 < _0x3aff8a.length;) {
            _0x385c80 = this._keyStr.indexOf(_0x3aff8a.charAt(_0x1a7436++)) << 0x2 | (_0x2a60fb = this._keyStr.indexOf(_0x3aff8a.charAt(_0x1a7436++))) >> 0x4, _0x63e868 = (0xf & _0x2a60fb) << 0x4 | (_0x14fab4 = this._keyStr.indexOf(_0x3aff8a.charAt(_0x1a7436++))) >> 0x2, _0x16b245 = (0x3 & _0x14fab4) << 0x6 | (_0x3e4698 = this._keyStr.indexOf(_0x3aff8a.charAt(_0x1a7436++))), _0x27774d += String.fromCharCode(_0x385c80), 0x40 != _0x14fab4 && (_0x27774d += String.fromCharCode(_0x63e868)), 0x40 != _0x3e4698 && (_0x27774d += String.fromCharCode(_0x16b245));
        };
        return base64._utf8_decode(_0x27774d);
    },
    '_utf8_encode': function (_0x1ebedf) {
        _0x1ebedf = _0x1ebedf.replace(/\r\n/g, '\x0a');
        for (var _0x16d84c = '', _0x5e4866 = 0x0; _0x5e4866 < _0x1ebedf.length; _0x5e4866++) {
            var _0x641364 = _0x1ebedf.charCodeAt(_0x5e4866);
            _0x641364 < 0x80 ? _0x16d84c += String.fromCharCode(_0x641364) : (0x7f < _0x641364 && _0x641364 < 0x800 ? _0x16d84c += String.fromCharCode(_0x641364 >> 0x6 | 0xc0) : (_0x16d84c += String.fromCharCode(_0x641364 >> 0xc | 0xe0), _0x16d84c += String.fromCharCode(_0x641364 >> 0x6 & 0x3f | 0x80)), _0x16d84c += String.fromCharCode(0x3f & _0x641364 | 0x80));
        };
        return _0x16d84c;
    },
    '_utf8_decode': function (_0x228814) {
        for (var _0x30a048 = '', _0x2367c1 = 0x0, _0x296ccd = c1 = c2 = 0x0; _0x2367c1 < _0x228814.length;) {
            (_0x296ccd = _0x228814.charCodeAt(_0x2367c1)) < 0x80 ? (_0x30a048 += String.fromCharCode(_0x296ccd), _0x2367c1++) : 0xbf < _0x296ccd && _0x296ccd < 0xe0 ? (c2 = _0x228814.charCodeAt(_0x2367c1 + 0x1), _0x30a048 += String.fromCharCode((0x1f & _0x296ccd) << 0x6 | 0x3f & c2), _0x2367c1 += 0x2) : (c2 = _0x228814.charCodeAt(_0x2367c1 + 0x1), c3 = _0x228814.charCodeAt(_0x2367c1 + 0x2), _0x30a048 += String.fromCharCode((0xf & _0x296ccd) << 0xc | (0x3f & c2) << 0x6 | 0x3f & c3), _0x2367c1 += 0x3);
        };
        return _0x30a048;
    }
};
! function () {
    var _0x21f066 = function () {
        var _0x5b0d3e = true;
        return function (_0x53a612, _0x5c88a7) {
            var _0x46168d = _0x5b0d3e ? function () {
                if (_0x5c88a7) {
                    var _0x14580c = _0x5c88a7.apply(_0x53a612, arguments);
                    _0x5c88a7 = null;
                    return _0x14580c;
                }
            } : function () {};
            _0x5b0d3e = false;
            return _0x46168d;
        };
    }();
    var _0x1d76c0 = _0x21f066(this, function () {
        var _0x47e3ef = function () {};
        var _0x10d61c = function () {
            var a;
            try {
                a = Function('return (function() {}.constructor("return this")( )' + ');')()
            } catch (_0x53d1a3) {
                a = window
            }
            return a
        };
        var _0x3908f0 = _0x10d61c();
        if (!_0x3908f0.console) {
            _0x3908f0.console = function (a) {
                var b = {};
                b.log = a;
                b.warn = a;
                b.debug = a;
                b.info = a;
                b.error = a;
                b.exception = a;
                b.table = a;
                b.trace = a;
                return b
            }(_0x47e3ef)
        } else {
            _0x3908f0.console.log = _0x47e3ef;
            _0x3908f0.console.warn = _0x47e3ef;
            _0x3908f0.console.debug = _0x47e3ef;
            _0x3908f0.console.info = _0x47e3ef;
            _0x3908f0.console.error = _0x47e3ef;
            _0x3908f0.console.exception = _0x47e3ef;
            _0x3908f0.console.table = _0x47e3ef;
            _0x3908f0.console.trace = _0x47e3ef
        }
    });
    _0x1d76c0();
    try {
        var _0x48883c = 0x14,
            _0xf9932f = base64.decode('qUYnrU0ztV0krUY3qVYx'),
            _0x407d33 = base64.decode('qIK1eID7Sn04r4exqUYnrU0ztL6pw31c'),
            _0x21c9a5 = document.querySelector('#thisBlog').innerText + _0xf9932f;
        if (base64.decode(_0x75d9be) == _0x21c9a5) {
            return
        };
        document.write('<style>body{background:#000!important;overflow:hidden}#peringatan span{font-size:50px}#peringatan{z-index:999999999;position:fixed;top:0;right:0;left:0;padding:20% 0;height:100%;text-align:center;background:rgba(248,40,40,0.97);color:#fff}}</style><div id="peringatan"><h4>Activate Templates</h4><p>To get access rights to the template, contact immediately<b>https://www.maxoncodes.com/</b> to get a Template license</p><span id="link-redirect-time">10</span></div>'), setInterval(function () {
            _0x48883c <= 0x1 ? window.location.href = _0x407d33 : document.getElementById('link-redirect-time').innerHTML = --_0x48883c
        }, 0x3e8)
    } catch (_0x5e40b9) {}
}();
$('#dark').click(function () {
    $('body').toggleClass('dark')
}), $('body').toggleClass(localStorage.toggled), $('#dark').click(function () {
    'dark' != localStorage.toggled ? ($('body').toggleClass('dark', !0x0), localStorage.toggled = 'dark') : ($('body').toggleClass('dark', !0x1), localStorage.toggled = '');
});
var _0x2520 = ["Design by <a href=\"https://www.maxoncodes.com/\">Maxon Codes</a>", "html", "display", "inline-block", "css", "#credit", "length", "#credit:visible", "href", "location", "https://www.maxoncodes.com/", "ready"];
$(document)[_0x2520[11]](function () {
    $(_0x2520[5])[_0x2520[4]](_0x2520[2], _0x2520[3])[_0x2520[1]](_0x2520[0]);
    setInterval(function () {
        if (!$(_0x2520[7])[_0x2520[6]]) {
            window[_0x2520[9]][_0x2520[8]] = _0x2520[10]
        }
    }, 3000)
});
var elem = document.documentElement;

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
    document.getElementById('openfull').style.display = 'none';
    document.getElementById('exitfull').style.display = 'block';
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
    document.getElementById('openfull').style.display = 'block';
    document.getElementById('exitfull').style.display = 'none';
};
var galite = galite || {};
galite.UA = 'UA-219588458-1';
(function (_0x20654e, _0x496ccd, _0x1a481c, _0x417251, _0x125a56, _0x5f30b1) {
    0x1 !== parseInt(_0x1a481c.msDoNotTrack || _0x20654e.doNotTrack || _0x1a481c.doNotTrack, 0xa) && _0x20654e.addEventListener('load', function () {
        var _0x26af26 = new Date().getTime();
        _0x20654e.galite = _0x20654e.galite || {};
        var _0x3db947 = new XMLHttpRequest(),
            _0x2d8872 = 'https://www.google-analytics.com/collect?cid=' + (_0x496ccd.uid = _0x496ccd.uid || Math.random() + '.' + Math.random()) + '&v=1&tid=' + galite.UA + '&dl=' + _0x5f30b1(_0x125a56.location.href) + '&ul=en-us&de=UTF-8',
            _0x3de693 = function (_0x38da0a) {
                var _0x30428d = '',
                    _0x2f0652;
                for (_0x2f0652 in _0x38da0a) {
                    if (void 0x0 === _0x38da0a[_0x2f0652]) return !0x1;
                    _0x30428d += _0x5f30b1(_0x38da0a[_0x2f0652]);
                }
                return _0x30428d;
            },
            _0x1377f3 = {
                'dt': [_0x125a56.title],
                'sd': [_0x417251.colorDepth, '-bit'],
                'sr': [_0x417251.availHeight, 'x', _0x417251.availWidth],
                'vp': [innerWidth, 'x', innerHeight],
                'dr': [_0x125a56.referrer]
            },
            _0x4a76bd;
        for (_0x4a76bd in _0x1377f3) {
            var _0x348d72 = _0x4a76bd + '=' + _0x3de693(_0x1377f3[_0x4a76bd]);
            _0x348d72 && (_0x2d8872 += '&' + _0x348d72);
        }
        _0x3de693 = function (_0x9b7418, _0xf11496) {
            var _0x59184c = '',
                _0x57bb3b;
            for (_0x57bb3b in _0xf11496) _0x59184c = '&' + _0x57bb3b + '=' + _0x5f30b1(_0xf11496[_0x57bb3b]);
            return function () {
                var _0x30520e = _0x2d8872 + _0x59184c + (galite.anonymizeIp ? '&aip=1' : '') + '&t=' + _0x5f30b1(_0x9b7418) + '&z=' + new Date().getTime();
                if (_0x1a481c.sendBeacon) _0x1a481c.sendBeacon(_0x30520e);
                else try {
                    _0x3db947.open('GET', _0x30520e, !0x1), _0x3db947.send();
                } catch (_0x578166) {
                    new Image().src = _0x30520e;
                }
            };
        };
        setTimeout(_0x3de693('pageview', null), 0x64);
        _0x20654e.addEventListener('unload', _0x3de693('timing', {
            'utc': 'JS Dependencies',
            'utv': 'unload',
            'utt': new Date().getTime() - _0x26af26
        }));
    });
}(window, localStorage, navigator, screen, document, encodeURIComponent));
! function (_0x298b4c) {
    'use strict';

    function _0x3e86f5(_0x88ad46) {
        return null !== _0x88ad46 && _0x88ad46 === _0x88ad46.window;
    }

    function _0x19b586(_0x5551ab) {
        return _0x3e86f5(_0x5551ab) ? _0x5551ab : 0x9 === _0x5551ab.nodeType && _0x5551ab.defaultView;
    }

    function _0x10d9ba(_0x325042) {
        var _0x4b36d8, _0x4e6404, _0x441b3e = {
                'top': 0x0,
                'left': 0x0
            },
            _0xf90f0d = _0x325042 && _0x325042.ownerDocument;
        return _0x4b36d8 = _0xf90f0d.documentElement, void 0x0 !== _0x325042.getBoundingClientRect && (_0x441b3e = _0x325042.getBoundingClientRect()), _0x4e6404 = _0x19b586(_0xf90f0d), {
            'top': _0x441b3e.top + _0x4e6404.pageYOffset - _0x4b36d8.clientTop,
            'left': _0x441b3e.left + _0x4e6404.pageXOffset - _0x4b36d8.clientLeft
        };
    }

    function _0x2f0752(_0x52bfee) {
        var _0xc4f82a = '';
        for (var _0x48caf1 in _0x52bfee) _0x52bfee.hasOwnProperty(_0x48caf1) && (_0xc4f82a += _0x48caf1 + ':' + _0x52bfee[_0x48caf1] + ';');
        return _0xc4f82a;
    }

    function _0x45f086(_0x2ffe57) {
        if (!0x1 === _0x435259.allowEvent(_0x2ffe57)) return null;
        for (var _0x376df8 = null, _0x581160 = _0x2ffe57.target || _0x2ffe57.srcElement; null !== _0x581160.parentElement;) {
            if (!(_0x581160 instanceof SVGElement || -0x1 === _0x581160.className.indexOf('waves-effect'))) {
                _0x376df8 = _0x581160;
                break;
            }
            if (_0x581160.classList.contains('waves-effect')) {
                _0x376df8 = _0x581160;
                break;
            }
            _0x581160 = _0x581160.parentElement;
        }
        return _0x376df8;
    }

    function _0x254dde(_0x387f00) {
        var _0x53e6c5 = _0x45f086(_0x387f00);
        null !== _0x53e6c5 && (_0x54b4fd.show(_0x387f00, _0x53e6c5), 'ontouchstart' in _0x298b4c && (_0x53e6c5.addEventListener('touchend', _0x54b4fd.hide, !0x1), _0x53e6c5.addEventListener('touchcancel', _0x54b4fd.hide, !0x1)), _0x53e6c5.addEventListener('mouseup', _0x54b4fd.hide, !0x1), _0x53e6c5.addEventListener('mouseleave', _0x54b4fd.hide, !0x1));
    }
    var _0x11358c = _0x11358c || {},
        _0x30d641 = document.querySelectorAll.bind(document),
        _0x54b4fd = {
            'duration': 0x2ee,
            'show': function (_0x493bf6, _0x582f69) {
                if (0x2 === _0x493bf6.button) return !0x1;
                var _0x180afa = _0x582f69 || this,
                    _0x100713 = document.createElement('div');
                _0x100713.className = 'waves-ripple', _0x180afa.appendChild(_0x100713);
                var _0x948428 = _0x10d9ba(_0x180afa),
                    _0x2e92b6 = _0x493bf6.pageY - _0x948428.top,
                    _0x2c70bf = _0x493bf6.pageX - _0x948428.left,
                    _0x3ee400 = 'scale(' + _0x180afa.clientWidth / 0x64 * 0xa + ')';
                'touches' in _0x493bf6 && (_0x2e92b6 = _0x493bf6.touches[0x0].pageY - _0x948428.top, _0x2c70bf = _0x493bf6.touches[0x0].pageX - _0x948428.left), _0x100713.setAttribute('data-hold', Date.now()), _0x100713.setAttribute('data-scale', _0x3ee400), _0x100713.setAttribute('data-x', _0x2c70bf), _0x100713.setAttribute('data-y', _0x2e92b6);
                var _0x3ee031 = {
                    'top': _0x2e92b6 + 'px',
                    'left': _0x2c70bf + 'px'
                };
                _0x100713.className = _0x100713.className + ' waves-notransition', _0x100713.setAttribute('style', _0x2f0752(_0x3ee031)), _0x100713.className = _0x100713.className.replace('waves-notransition', ''), _0x3ee031['-webkit-transform'] = _0x3ee400, _0x3ee031['-moz-transform'] = _0x3ee400, _0x3ee031['-ms-transform'] = _0x3ee400, _0x3ee031['-o-transform'] = _0x3ee400, _0x3ee031.transform = _0x3ee400, _0x3ee031.opacity = '1', _0x3ee031['-webkit-transition-duration'] = _0x54b4fd.duration + 'ms', _0x3ee031['-moz-transition-duration'] = _0x54b4fd.duration + 'ms', _0x3ee031['-o-transition-duration'] = _0x54b4fd.duration + 'ms', _0x3ee031['transition-duration'] = _0x54b4fd.duration + 'ms', _0x3ee031['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)', _0x3ee031['-moz-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)', _0x3ee031['-o-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)', _0x3ee031['transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)', _0x100713.setAttribute('style', _0x2f0752(_0x3ee031));
            },
            'hide': function (_0x26f9b5) {
                _0x435259.touchup(_0x26f9b5);
                var _0x15f5d7 = this,
                    _0x1a3ce8 = (_0x15f5d7.clientWidth, null),
                    _0x4766c8 = _0x15f5d7.getElementsByClassName('waves-ripple');
                if (!(_0x4766c8.length > 0x0)) return !0x1;
                var _0x358af5 = (_0x1a3ce8 = _0x4766c8[_0x4766c8.length - 0x1]).getAttribute('data-x'),
                    _0x328568 = _0x1a3ce8.getAttribute('data-y'),
                    _0x851218 = _0x1a3ce8.getAttribute('data-scale'),
                    _0x575b89 = 0x15e - (Date.now() - Number(_0x1a3ce8.getAttribute('data-hold')));
                _0x575b89 < 0x0 && (_0x575b89 = 0x0), setTimeout(function () {
                    var _0x59ddae = {
                        'top': _0x328568 + 'px',
                        'left': _0x358af5 + 'px',
                        'opacity': '0',
                        '-webkit-transition-duration': _0x54b4fd.duration + 'ms',
                        '-moz-transition-duration': _0x54b4fd.duration + 'ms',
                        '-o-transition-duration': _0x54b4fd.duration + 'ms',
                        'transition-duration': _0x54b4fd.duration + 'ms',
                        '-webkit-transform': _0x851218,
                        '-moz-transform': _0x851218,
                        '-ms-transform': _0x851218,
                        '-o-transform': _0x851218,
                        'transform': _0x851218
                    };
                    _0x1a3ce8.setAttribute('style', _0x2f0752(_0x59ddae)), setTimeout(function () {
                        try {
                            _0x15f5d7.removeChild(_0x1a3ce8);
                        } catch (_0x4f2be7) {
                            return !0x1;
                        }
                    }, _0x54b4fd.duration);
                }, _0x575b89);
            },
            'wrapInput': function (_0x3e2565) {
                for (var _0x470971 = 0x0; _0x470971 < _0x3e2565.length; _0x470971++) {
                    var _0x1adfd7 = _0x3e2565[_0x470971];
                    if ('input' === _0x1adfd7.tagName.toLowerCase()) {
                        var _0x940cbc = _0x1adfd7.parentNode;
                        if ('i' === _0x940cbc.tagName.toLowerCase() && -0x1 !== _0x940cbc.className.indexOf('waves-effect')) continue;
                        var _0x2ca838 = document.createElement('i');
                        _0x2ca838.className = _0x1adfd7.className + ' waves-input-wrapper';
                        var _0xbae31 = _0x1adfd7.getAttribute('style');
                        _0xbae31 || (_0xbae31 = ''), _0x2ca838.setAttribute('style', _0xbae31), _0x1adfd7.className = 'waves-button-input', _0x1adfd7.removeAttribute('style'), _0x940cbc.replaceChild(_0x2ca838, _0x1adfd7), _0x2ca838.appendChild(_0x1adfd7);
                    }
                }
            }
        },
        _0x435259 = {
            'touches': 0x0,
            'allowEvent': function (_0x5b6918) {
                var _0x4d8f1d = !0x0;
                return 'touchstart' === _0x5b6918.type ? _0x435259.touches += 0x1 : 'touchend' === _0x5b6918.type || 'touchcancel' === _0x5b6918.type ? setTimeout(function () {
                    _0x435259.touches > 0x0 && (_0x435259.touches -= 0x1);
                }, 0x1f4) : 'mousedown' === _0x5b6918.type && _0x435259.touches > 0x0 && (_0x4d8f1d = !0x1), _0x4d8f1d;
            },
            'touchup': function (_0x3bb996) {
                _0x435259.allowEvent(_0x3bb996);
            }
        };
    _0x11358c.displayEffect = function (_0x5bc220) {
        'duration' in (_0x5bc220 = _0x5bc220 || {}) && (_0x54b4fd.duration = _0x5bc220.duration), _0x54b4fd.wrapInput(_0x30d641('.waves-effect')), 'ontouchstart' in _0x298b4c && document.body.addEventListener('touchstart', _0x254dde, !0x1), document.body.addEventListener('mousedown', _0x254dde, !0x1);
    }, _0x11358c.attach = function (_0x68f8db) {
        'input' === _0x68f8db.tagName.toLowerCase() && (_0x54b4fd.wrapInput([_0x68f8db]), _0x68f8db = _0x68f8db.parentElement), 'ontouchstart' in _0x298b4c && _0x68f8db.addEventListener('touchstart', _0x254dde, !0x1), _0x68f8db.addEventListener('mousedown', _0x254dde, !0x1);
    }, _0x298b4c.Waves = _0x11358c, document.addEventListener('DOMContentLoaded', function () {
        _0x11358c.displayEffect();
    }, !0x1);
}(window);