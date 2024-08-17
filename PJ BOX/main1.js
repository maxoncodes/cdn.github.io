'use strict'
var $license_item = '/p/themes.html'
function license() {
  function _0x218fc1(_0x2c2272) {
    var _0x20b78f
    return !(function _0x5f0986(_0x2a3b82) {
      try {
        return btoa(atob(_0x2a3b82)) == _0x2a3b82
      } catch (_0x56aa7a) {
        return false
      }
    })(_0x2c2272)
      ? ''
      : (_0x2c2272 = (_0x20b78f = _0x2c2272 =
          (_0x2c2272 = (_0x2c2272 = (_0x2c2272 = (_0x2c2272 = (_0x2c2272 =
            (_0x2c2272 = (_0x2c2272 = atob(_0x2c2272)).replaceAll(
              'XXX',
              '.'
            )).replaceAll('YY', '-')).replaceAll('O5', 'a')).replaceAll(
            'E4',
            'i'
          )).replaceAll('U3', 'u')).replaceAll('I2', 'e')).replaceAll(
            'A1',
            'o'
          ))
          .split('')
          .reverse()
          .join(''))
  }
  if (
    -1 == location.hostname.indexOf('localhost') ||
    -1 == location.hostname.indexOf('.blogspot.com') ||
    -1 == location.hostname.indexOf('.blogger.com')
  ) {
    var _0x861a81 = document.getElementById('wp_crd')
    if (null === _0x861a81) {
      document.body.innerHTML =
        ' <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap" rel="stylesheet"><style>hr { margin:0!important; } body { padding: 0px!important; } * { font-family: "Rubik", sans-serif; font-weight:400; box-sizing:border-box;margin:0;padding:0; text-decoration:none; color:#636363; } b { font-weight: 500; color:#232323; font-size:16px; display:block; margin:0 0 8px;}</style> <div id="notice_html" style="display:flex;background:#fafafa;min-height:100vh;text-align:center;"><div style="margin:auto;width:480px;max-width:80%;background:white;padding:30px;border-radius:10px;border:1px solid #ddd;"><svg style="fill:#636363;width:80px;height:80px;display:block;margin:0 auto 2px" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M228.9 79.9L51.8 403.1C40.6 423.3 55.5 448 78.9 448h354.3c23.3 0 38.2-24.7 27.1-44.9L283.1 79.9c-11.7-21.2-42.5-21.2-54.2 0zM273.6 214L270 336h-28l-3.6-122h35.2zM256 402.4c-10.7 0-19.1-8.1-19.1-18.4s8.4-18.4 19.1-18.4 19.1 8.1 19.1 18.4-8.4 18.4-19.1 18.4z"/></svg><p><b>Respect Copyright </b>Do not to remove footer credits.<br><small>#COPYRIGHT_ERROR</small><div id="dcounter" style="height:20px;"></div></p><br><hr style="border:0;border-top:1px solid #ddd;"><br><a href="https://www.maxoncodes.com' +
        $license_item +
        '" target="_blank" style="opacity:.7;font-size:70%;letter-spacing:1px;">https://www.maxoncodes.com</a></div> '
      var _0x1d8fde = 15
      setInterval(function () {
        document.getElementById('dcounter').innerHTML = _0x1d8fde
        0 == _0x1d8fde
          ? (location.href = 'https://www.maxoncodes.com/')
          : _0x1d8fde--
      }, 1000)
    } else {
      _0x861a81.innerHTML =
        ' &#8212; Designed by <a href="https://www.maxoncodes.com' +
        $license_item +
        '" target="_blank">Maxoncodes</a>.'
      _0x861a81.setAttribute(
        'style',
        'display:inline-block!important;opacity:1!important;position:static!important;visibility:visible!important;text-indent:0px!important;color:currentColor!important'
      )
    }
  }
}
function maining() {
  $(function () {
    function _0x26df02(_0x220d55, _0x1b469f) {
      for (
        var _0x4afd70 = 0;
        _0x4afd70 < _0x220d55[_0x1b469f].link.length;
        _0x4afd70++
      ) {
        if ('alternate' == _0x220d55[_0x1b469f].link[_0x4afd70].rel) {
          var _0x43d70c = _0x220d55[_0x1b469f].link[_0x4afd70].href
          break
        }
      }
      return _0x43d70c
    }
    function _0x4b81b3(_0x1863a6, _0x33afc1, _0x3d2794) {
      return (
        '<a href="' +
        _0x3d2794 +
        '">' +
        _0x1863a6[_0x33afc1].title['$t'] +
        '</a>'
      )
    }
    function _0x7341a3(_0x1f2222, _0x3155e3) {
      var _0x4ba908 = _0x1f2222[_0x3155e3].title['$t'],
        _0x49cd83 = _0x1f2222[_0x3155e3].content['$t'],
        _0x4482b4 = $('<div>').html(_0x49cd83)
      if ('media$thumbnail' in _0x1f2222[_0x3155e3]) {
        var _0x44ef76 = _0x1f2222[_0x3155e3]['media$thumbnail'].url,
          _0x2330ac = _0x44ef76.replace('/s72-c', '/w300')
        _0x49cd83.indexOf('youtube.com/embed') > -1 &&
          (_0x2330ac = _0x44ef76.replace('/default.', '/hqdefault.'))
      } else {
        _0x2330ac =
          _0x49cd83.indexOf('<img') > -1
            ? _0x4482b4.find('img:first').attr('src')
            : noThumbnail
      }
      return (
        '<img class="post-thumb" alt="' +
        _0x4ba908 +
        '" src="' +
        _0x2330ac +
        '"/>'
      )
    }
    function _0x572386(_0x4db74a, _0x2828f4) {
      var _0x320c12 = _0x4db74a[_0x2828f4].content['$t'],
        _0x5dd651 = $('<div>').html(_0x320c12),
        _0x45b254 = _0x5dd651.find('strike:contains("price/")'),
        _0x1f7a14 = _0x5dd651.find('strike:contains("off/")')
      if (_0x45b254.length > 0) {
        var _0x4e88be = _0x45b254.text(),
          _0x4799db = _0x4e88be.split('/'),
          _0x323aae = _0x4799db[1]
      }
      if (_0x1f7a14.length > 0) {
        var _0x4e88be = _0x1f7a14.text(),
          _0x4799db = _0x4e88be.split('/'),
          _0x575e40 = _0x4799db[1]
      }
      if (void 0 != _0x323aae) {
        var _0x3b4c6b = '<span class="meta-price">' + _0x323aae + '</span>'
      } else {
        _0x3b4c6b = ''
      }
      if (void 0 != _0x575e40) {
        var _0x55eb07 =
          '<span class="product_off show">' + _0x575e40 + '</span>'
      } else {
        _0x55eb07 = ''
      }
      return [_0x3b4c6b, _0x55eb07]
    }
    function _0x2f3f4d(_0x573ac0, _0x127acb, _0x517919, _0x1502e6) {
      if (
        _0x127acb.match('mega-menu') ||
        _0x127acb.match('hot-posts') ||
        _0x127acb.match('featured') ||
        _0x127acb.match('post-list') ||
        _0x127acb.match('related')
      ) {
        var _0x157726 = ''
        _0x157726 =
          'recent' == _0x1502e6
            ? '/feeds/posts/default?alt=json-in-script&max-results=' + _0x517919
            : 'random' == _0x1502e6
            ? '/feeds/posts/default?max-results=' +
              _0x517919 +
              '&start-index=' +
              (Math.floor(Math.random() * _0x517919) + 1) +
              '&alt=json-in-script'
            : '/feeds/posts/default/-/' +
              _0x1502e6 +
              '?alt=json-in-script&max-results=' +
              _0x517919
        $.ajax({
          url: _0x157726,
          type: 'get',
          dataType: 'jsonp',
          beforeSend: function () {
            _0x127acb.match('hot-posts') &&
              _0x573ac0
                .html('<div class="hot-loader"/>')
                .parent()
                .addClass('show-hot')
          },
          success: function (_0x59807c) {
            if (_0x127acb.match('mega-menu')) {
              var _0x41ce55 = '<ul class="mega-menu-inner">'
            } else {
              if (_0x127acb.match('hot-posts')) {
                var _0x41ce55 = '<ul class="snow">'
              } else {
                if (_0x127acb.match('post-list')) {
                  var _0x41ce55 = '<ul class="custom-widget">'
                } else {
                  if (_0x127acb.match('related')) {
                    var _0x41ce55 = '<ul class="related-posts bow">'
                  }
                }
              }
            }
            var _0x51406a = _0x59807c.feed.entry
            if (void 0 != _0x51406a) {
              for (
                var _0x9e2f3c = 0, _0xe7a897 = _0x51406a;
                _0x9e2f3c < _0xe7a897.length;
                _0x9e2f3c++
              ) {
                var _0x18c62c = _0x26df02(_0xe7a897, _0x9e2f3c),
                  _0x57abf2 = _0x4b81b3(_0xe7a897, _0x9e2f3c, _0x18c62c),
                  _0x3b79ad = _0x7341a3(_0xe7a897, _0x9e2f3c),
                  _0x110418 = _0x572386(_0xe7a897, _0x9e2f3c),
                  _0x3f12bd = ''
                _0x127acb.match('mega-menu')
                  ? (_0x3f12bd +=
                      '<div class="mega-item item-' +
                      _0x9e2f3c +
                      '"><div class="mega-content"><div class="post-image-wrap"><a class="post-image-link" href="' +
                      _0x18c62c +
                      '">' +
                      _0x3b79ad +
                      '</a>' +
                      _0x110418[1] +
                      '</div><h2 class="post-title">' +
                      _0x57abf2 +
                      '</h2>' +
                      _0x110418[0] +
                      '</div></div>')
                  : _0x127acb.match('hot-posts')
                  ? (_0x3f12bd +=
                      '<li class="slide-fourth item-' +
                      _0x9e2f3c +
                      '"><div class="hot-item-inner"><a class="post-image-link" href="' +
                      _0x18c62c +
                      '">' +
                      _0x3b79ad +
                      '</a>' +
                      _0x110418[1] +
                      '<div class="product-info"><h2 class="post-title">' +
                      _0x57abf2 +
                      '</h2>' +
                      _0x110418[0] +
                      '</div></div></li>')
                  : _0x127acb.match('post-list')
                  ? (_0x3f12bd +=
                      '<li class="item-' +
                      _0x9e2f3c +
                      '"><div class="post-image-wrap"><a class="post-image-link" href="' +
                      _0x18c62c +
                      '">' +
                      _0x3b79ad +
                      '</a></div>' +
                      _0x110418[1] +
                      '<div class="product-info"><h2 class="post-title">' +
                      _0x57abf2 +
                      '</h2>' +
                      _0x110418[0] +
                      '</div></div></li>')
                  : _0x127acb.match('related') &&
                    (_0x3f12bd +=
                      '<li class="related-item item-' +
                      _0x9e2f3c +
                      '"><div class="post-image-wrap"><a class="post-image-link" href="' +
                      _0x18c62c +
                      '">' +
                      _0x3b79ad +
                      '</a>' +
                      _0x110418[1] +
                      '</div><h2 class="post-title">' +
                      _0x57abf2 +
                      '</h2>' +
                      _0x110418[0] +
                      '</li>')
                _0x41ce55 += _0x3f12bd
              }
              _0x41ce55 += '</ul>'
            } else {
              _0x41ce55 =
                '<ul class="no-posts">Error: No Posts Found <i class="fa fa-frown"/></ul>'
            }
            _0x127acb.match('mega-menu')
              ? (_0x573ac0.addClass('has-sub mega-menu').append(_0x41ce55),
                _0x573ac0
                  .find('a:first')
                  .attr('href', function (_0x5b60e3, _0x1aa33a) {
                    return (_0x1aa33a =
                      'recent' == _0x1502e6 || 'random' == _0x1502e6
                        ? _0x1aa33a.replace(
                            _0x1aa33a,
                            '/search/?&max-results=' + postPerPage
                          )
                        : _0x1aa33a.replace(
                            _0x1aa33a,
                            '/search/label/' +
                              _0x1502e6 +
                              '?&max-results=' +
                              postPerPage
                          ))
                  }))
              : _0x127acb.match('hot-posts')
              ? _0x573ac0.html(_0x41ce55).parent().addClass('show-hot')
              : _0x573ac0.html(_0x41ce55)
          },
        })
      }
    }
    $('.post-shop-info').each(function () {
      var _0x1346e0 = $(this),
        _0x3fc937 = _0x1346e0.data('id')
      $.ajax({
        url: '/feeds/posts/default/' + _0x3fc937 + '?alt=json',
        type: 'get',
        dataType: 'jsonp',
        success: function (_0x26971e) {
          var _0x18a335 = _0x26971e.entry.content['$t'],
            _0xe2407d = $('<div>').html(_0x18a335),
            _0xc832eb = _0xe2407d.find('strike:contains("price/")'),
            _0x447335 = _0xe2407d.find('strike:contains("off/")')
          if (_0xc832eb.length > 0) {
            var _0x417a63 = _0xc832eb.text(),
              _0x1fbc50 = _0x417a63.split('/'),
              _0x4d568b = _0x1fbc50[1]
            _0x1346e0
              .find('.meta-price')
              .text(_0x4d568b)
              .parent()
              .addClass('show')
          }
          if (_0x447335.length > 0) {
            var _0x417a63 = _0x447335.text(),
              _0x1fbc50 = _0x417a63.split('/'),
              _0x2847e0 = _0x1fbc50[1]
            _0x1346e0.find('.product_off').text(_0x2847e0).addClass('show')
          }
        },
      })
    })
    $('.product-post .post-body').each(function () {
      var _0x4c394a = $(this),
        _0x1fcdf6 = _0x4c394a.find('strike:contains("price/")'),
        _0x53af08 = _0x4c394a.find('strike:contains("off/")'),
        _0x3ead98 = _0x4c394a.find('strike:contains("size/")')
      if (_0x1fcdf6.length > 0) {
        var _0x428444 = _0x1fcdf6.text(),
          _0x5c09e5 = _0x428444.split('/'),
          _0x3138a5 = _0x5c09e5[1]
        $('.product-header')
          .find('.meta-price')
          .text(_0x3138a5)
          .parent()
          .addClass('show')
        _0x1fcdf6.hide()
      }
      if (_0x53af08.length > 0) {
        var _0x428444 = _0x53af08.text(),
          _0x5c09e5 = _0x428444.split('/'),
          _0x567b30 = _0x5c09e5[1]
        $('.product-header')
          .find('.product_off')
          .text(_0x567b30)
          .addClass('show')
        _0x53af08.hide()
      }
      if (_0x3ead98.length > 0) {
        var _0x428444 = _0x3ead98.text(),
          _0x5c09e5 = _0x428444.split('/')
        for (var _0x2b4213 in (_0x5c09e5[1], _0x5c09e5))
          'size' != _0x5c09e5[_0x2b4213] &&
            $('.product-header')
              .find('.item_size')
              .append(
                '<option value=' +
                  _0x5c09e5[_0x2b4213] +
                  '>' +
                  _0x5c09e5[_0x2b4213] +
                  '</option>'
              )
              .addClass('show')
        _0x3ead98.hide()
      }
    })
    $('.item_add').click(function () {
      $(this).toggleClass('productad')
    })
    $('.product-post .post-body').each(function () {
      $(this).find('img:first').remove()
      $(this).find('img').show()
    })
    $('.Label a, a.b-label').attr('href', function (_0x5de272, _0x5da0ef) {
      return _0x5da0ef.replace(
        _0x5da0ef,
        _0x5da0ef + '?&max-results=' + postPerPage
      )
    })
    $('.avatar-image-container img').attr(
      'src',
      function (_0x5f0fb3, _0x5cfef3) {
        return (_0x5cfef3 = (_0x5cfef3 = _0x5cfef3.replace(
          '/s35-c/',
          '/s45-c/'
        )).replace(
          '//img1.blogblog.com/img/blank.gif',
          '//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s55-r/avatar.png'
        ))
      }
    )
    $('.post-body strike').each(function () {
      var _0x5d7ff8 = $(this),
        _0x4409e1 = _0x5d7ff8.text()
      _0x4409e1.match('post-left') &&
        _0x5d7ff8.replaceWith(
          '<style>.main-wrapper{float:left}.sidebar-wrapper{float:right}</style>'
        )
      _0x4409e1.match('post-right') &&
        _0x5d7ff8.replaceWith(
          '<style>.main-wrapper{float:right}.sidebar-wrapper{float:left}</style>'
        )
      _0x4409e1.match('full-width') &&
        _0x5d7ff8.replaceWith(
          '<style>.main-wrapper{width:100%}.sidebar-wrapper{display:none}</style>'
        )
    })
    $('.back-top').each(function () {
      var _0x38f190 = $(this)
      $(window).on('scroll', function () {
        $(this).scrollTop() >= 100
          ? _0x38f190.fadeIn(250)
          : _0x38f190.fadeOut(250)
      })
      _0x38f190.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500)
      })
    })
    $('#hot-section .widget-content').each(function () {
      var _0x41c03a = $(this),
        _0x655d59 = _0x41c03a.text().trim()
      _0x2f3f4d(_0x41c03a, _0x655d59.toLowerCase(), 4, _0x655d59.split('/')[0])
    })
    $('#hot-sections .widget-content').each(function () {
      var _0x542d8d = $(this),
        _0x183f0d = _0x542d8d.text().trim()
      _0x2f3f4d(_0x542d8d, _0x183f0d.toLowerCase(), 4, _0x183f0d.split('/')[0])
    })
    $('.producting .widget-content').each(function () {
      var _0x17d41f = $(this),
        _0x36dc5c = _0x17d41f.text().trim(),
        _0x31271c = _0x36dc5c.toLowerCase(),
        _0x3dd6f1 = _0x36dc5c.split('/')
      _0x2f3f4d(_0x17d41f, _0x31271c, _0x3dd6f1[0], _0x3dd6f1[1])
    })
    $('.related-ready').each(function () {
      var _0x3a7846 = $(this),
        _0x451d97 = _0x3a7846.find('.related-tag').data('label')
      _0x2f3f4d(_0x3a7846, 'related', 5, _0x451d97)
    })
    var _0x19135f = Math.floor(Math.random() * 99000000001 + 1000000000)
    $('.customform form').change('input', function () {
      var _0x1fcf31,
        _0x4d386a,
        _0x3251ee,
        _0x1c7374,
        _0x2184fa = $('.customform form'),
        _0x9f0564 = _0x2184fa.find('input.contact-form-name').val().trim(),
        _0x1edff7 = _0x2184fa.find('input.contact-form-email').val().trim(),
        _0x3ed783 = _0x2184fa.find('input.customform-phone').val().trim(),
        _0x123e42 = _0x2184fa.find('input.customform-city').val().trim(),
        _0x2edafb = _0x2184fa.find('input.customform-address').val().trim(),
        _0x1eddbd = _0x2184fa.find('input.customform-postal').val().trim(),
        _0x4b54bb = _0x2184fa.find('textarea.customform-message').val().trim()
      $('.itemRow')
      $('.-cart-shipping').find('.simpleCart_shipping').text().trim()
      $('.-cart-grand').find('.simpleCart_grandTotal').text().trim()
      var _0x34db3a =
        '\nOrder Details :_____________________________________\n\n'
      document.querySelectorAll('.itemRow').forEach((_0x2fbc2a) => {
        _0x34db3a +=
          _0x2fbc2a.outerText.split('\n')[0] +
          '\nProduct Quantity: ' +
          _0x2fbc2a.outerText.split('\n')[3] +
          '\nProduct Size: ' +
          _0x2fbc2a.outerText.split('\n')[2] +
          '\nProduct Price: ' +
          _0x2fbc2a.outerText.split('\n')[1] +
          '\n\n'
        _0x1fcf31 += _0x2fbc2a.outerText.split('\n')[0] + '<br>'
        _0x4d386a += _0x2fbc2a.outerText.split('\n')[3] + '<br>'
        _0x3251ee += _0x2fbc2a.outerText.split('\n')[1] + '<br>'
        _0x1c7374 += _0x2fbc2a.outerText.split('\n')[2] + '<br>'
      })
      _0x34db3a += '_____________________________________'
      _0x2184fa
        .find('.contact-form-email-message')
        .val(
          'Order ID: ' +
            _0x19135f +
            '_____________________________________\n\nPhone Number:_____' +
            _0x3ed783 +
            '\nCity:______________' +
            _0x123e42 +
            '\nAddress :__________' +
            _0x2edafb +
            '\nPostal Code:_______' +
            _0x1eddbd +
            '\nOrder Note:________' +
            _0x4b54bb +
            '\n' +
            _0x34db3a
        )
      $('.customform-ok').click(function () {
        '' != _0x9f0564
          ? _0x2184fa.find('input.contact-form-name').removeClass('error')
          : _0x2184fa.find('input.contact-form-name').addClass('error')
        '' != _0x1edff7
          ? _0x2184fa.find('input.contact-form-email').removeClass('error')
          : _0x2184fa.find('input.contact-form-email').addClass('error')
        '' != _0x3ed783
          ? _0x2184fa.find('input.customform-phone').removeClass('error')
          : _0x2184fa.find('input.customform-phone').addClass('error')
        '' != _0x123e42
          ? _0x2184fa.find('input.customform-city').removeClass('error')
          : _0x2184fa.find('input.customform-city').addClass('error')
        '' != _0x4b54bb
          ? _0x2184fa.find('textarea.customform-message').removeClass('error')
          : _0x2184fa.find('textarea.customform-message').addClass('error')
        '' != _0x2edafb
          ? _0x2184fa.find('input.customform-address').removeClass('error')
          : _0x2184fa.find('input.customform-address').addClass('error')
        '' != _0x1eddbd
          ? _0x2184fa.find('input.customform-postal').removeClass('error')
          : _0x2184fa.find('input.customform-postal').addClass('error')
        '' != (_0x9f0564 && _0x1edff7 && _0x3ed783 && _0x4b54bb && _0x2edafb)
          ? _0x2184fa
              .find('.contact-form-button-submit')
              .removeAttr('disabled')
              .removeClass('disabled')
          : _0x2184fa
              .find('.contact-form-button-submit')
              .attr('disabled', 'true')
              .addClass('disabled')
      })
      var _0x2e527c = $('.uk-checkout-wrap .simpleCart_grandTotal').text()
      $('.orderidsuccess').html(_0x19135f)
      $('.totalsuccess').html(_0x2e527c.replace('undefined', ''))
      $('.orderdetails-name').html(_0x1fcf31.replace('undefined', ''))
      $('.orderdetails-quantity').html(_0x4d386a.replace('undefined', ''))
      $('.orderdetails-size').html(_0x1c7374.replace('undefined', ''))
      $('.orderdetails-price').html(_0x3251ee.replace('undefined', ''))
      $('.cfullname').html(_0x9f0564)
      $('.namesuccess').html(_0x9f0564)
      $('.cemail').html(_0x1edff7)
      $('.cphone').html(_0x3ed783)
      $('.caddress').html(_0x2edafb)
      $('.ccity').html(_0x123e42)
      $('.cpostal').html(_0x1eddbd)
      $('#-cod').is(':checked') &&
        $('.methodsuccess').html(
          '<span>Cash on Delivery <em>(Pay with cash upon delivery)</em></span>'
        )
      $('#-upi').is(':checked') &&
        ($('.methodsuccess').html(
          '<span>Make payment through Mobile app<em>(EasyPaisa, PayTM or GPay)</em></span>'
        ),
        $('.-upi-details').show())
      $('#-bank').is(':checked') &&
        ($('.methodsuccess').html(
          '<span>Bank Transfer <em>(Make payment directly into our bank account)</em></span>'
        ),
        $('.-bank-details').show())
      $(
        '.contact-form-name,.contact-form-email,.customform-phone,.customform-message,.customform-address,.customform-postal,.customform-city'
      ).click(function () {
        _0x2184fa
          .find('.contact-form-button-submit')
          .attr('disabled', 'true')
          .addClass('disabled')
      })
      $(
        '.contact-form-name,.contact-form-email,.customform-phone,.customform-message,.customform-address,.customform-postal,.customform-city'
      ).keydown(function () {
        _0x2184fa
          .find('.contact-form-button-submit')
          .attr('disabled', 'true')
          .addClass('disabled')
      })
    })
    $('input[id="-paypal"]').click(function () {
      $('.contact-form-button-submit').parent().addClass('simpleCart_checkout')
    })
    $('input[id="-cod"],input[id="-upi"],input[id="-bank"]').click(function (
      _0x34a591
    ) {
      _0x34a591.stopPropagation()
      $('.contact-form-button-submit')
        .parent()
        .removeClass('simpleCart_checkout')
      $('.contact-form-button-submit').click(function () {
        setTimeout(function () {
          $('.customform').fadeOut()
        }, 1000)
        setTimeout(function () {
          $('.successbox').fadeIn()
        }, 1100)
      })
    })
    $('body').on('click', '.item_add', function () {
      setTimeout(
        function (_0x14144f) {
          _0x14144f.addClass('active disab-cart')
          $('.active.ren').removeClass('item_add')
        },
        500,
        $(this)
      )
    })
    $('.tab').on('click', function (_0x320e2a) {
      _0x320e2a.preventDefault()
      $('.tab, .panel').removeClass('active')
      $(this)
        .add(
          '#' +
            $(this)
              .attr('id')
              .replace(/\s*tab\s*/, 'panel')
        )
        .addClass('active')
      $(this).focus()
    })
    window.location.href.indexOf('/p/cart.html') > -1 &&
      $('.barred-widgets').remove()
    $(function () {
      $('.barred-widgets .-billing-form').appendTo('.-cart-checkout')
      var _0xc54c0c = new Date(),
        _0x4d1f4f = _0xc54c0c.getMonth() + 1,
        _0x4605b7 = _0xc54c0c.getDate(),
        _0x19c776 =
          (('' + _0x4d1f4f).length < 2 ? '0' : '') +
          _0x4d1f4f +
          '/' +
          (('' + _0x4605b7).length < 2 ? '0' : '') +
          _0x4605b7 +
          '/' +
          _0xc54c0c.getFullYear()
      $('.orderdate').append(_0x19c776)
      $('.print').click(function () {
        window.print()
      })
    })
    jQuery(document).ready(function (_0x550c55) {
      var _0x26718f = _0x550c55('#menu'),
        _0x424e27 = _0x550c55('.menu-btn'),
        _0x2d42ec = _0x550c55('.with-ul > a')
      _0x424e27.click(function (_0x3a6a06) {
        _0x3a6a06.preventDefault()
        _0x424e27.toggleClass('active')
        _0x26718f.toggleClass('active')
      })
      _0x2d42ec.click(function (_0x25383b) {
        _0x25383b.preventDefault()
        _0x550c55(this).toggleClass('active').next('ul').toggleClass('active')
      })
    })
    $(function () {
      $('#LinkList51 ul li:nth-child(1)')
        .contents()
        .appendTo('.-upi-details .infoorder ul li.paytm-qr')
      $('#LinkList51 ul li:nth-child(2)')
        .contents()
        .appendTo('.-upi-details .infoorder ul li.phonepe-qr')
      $('#LinkList51 ul li:nth-child(3)')
        .contents()
        .appendTo('.-upi-details .infoorder ul li.gpay-qr')
      $('#LinkList61 ul li:nth-child(1) span.details-first')
        .contents()
        .appendTo('.-bank-details .infoorder th.bank-name')
      $('#LinkList61 ul li:nth-child(2) span.details-first')
        .contents()
        .appendTo('.-bank-details .infoorder th.branch-name')
      $('#LinkList61 ul li:nth-child(3) span.details-first')
        .contents()
        .appendTo('.-bank-details .infoorder th.branch-code')
      $('#LinkList61 ul li:nth-child(4) span.details-first')
        .contents()
        .appendTo('.-bank-details .infoorder th.account-name')
      $('#LinkList61 ul li:nth-child(5) span.details-first')
        .contents()
        .appendTo('.-bank-details .infoorder th.account-number')
      $('#LinkList61 ul li:nth-child(1) span.details-second')
        .contents()
        .appendTo('.-bank-details .infoorder td.bank-name-value')
      $('#LinkList61 ul li:nth-child(2) span.details-second')
        .contents()
        .appendTo('.-bank-details .infoorder td.branch-name-value')
      $('#LinkList61 ul li:nth-child(3) span.details-second')
        .contents()
        .appendTo('.-bank-details .infoorder td.branch-code-value')
      $('#LinkList61 ul li:nth-child(4) span.details-second')
        .contents()
        .appendTo('.-bank-details .infoorder td.account-name-value')
      $('#LinkList61 ul li:nth-child(5) span.details-second')
        .contents()
        .appendTo('.-bank-details .infoorder td.account-number-value')
    })
    window.location.href.indexOf('/p/checkout.html') > -1 &&
      ((document.title = 'Checkout'),
      $('.item-post .post-body').html(
        "<div class='-cart-checkout'></div><style>.-cart a {display: block;position: relative;}.-cart .-cart-description,div#sidebar-wrapper,.static_page .item-post h1.post-title, .blog-post-comments { display: none!important; }.item #main-wrapper, .static_page #main-wrapper { width:100%;float:none;max-width: 100%; }</style>"
      ),
      $('.-cart .-cart-details').wrap("<a href='/p/cart.html'></a>"))
    window.location.href.indexOf('/p/cart.html') > -1 &&
      ((document.title = 'Shopping Cart'),
      $('.item-post .post-body').html(
        '<div class="my-shopping check"><h2>Shopping Cart</h2><div class="cart-review-wrap"><div class="simpleCart_items"/><div style="clear: both;"/><div class="cart-bot-element"><div class="cart-amount"><div class="cart-subtotal">Subtotal :<span class="simpleCart_total"/></div><h4>Your cart : </h4><div class="carter">You have <span class="simpleCart_quantity"/> item(s) in your Cart.</div><div class="my-total">Total: <span class="simpleCart_total"/></div></div><a class="simpleCart_checkout" href="/p/checkout.html">Proceed to Checkout</a></div></div></div><style>.item-post h1.post-title { display: none!important; }</style>'
      ))
  })
}
license()
window.onload = function () {
  maining()
}
;(function (_0x5e7bc4) {
  var _0x59355e = function (_0x36952e, _0x40fa75) {
    this.elem = _0x36952e
    this.settings = _0x40fa75
    this.megaMenuHtml()
    this.ajaxcall = null
    this.menulist = this.elem.find('.leftmenulist li a')
    this.menuHelper(this.elem)
    this.addEvents()
  }
  _0x59355e.prototype = {
    regex: {
      islabel: RegExp('/search/label/', 'g'),
      issearch: RegExp('[?&]q=', 'g'),
      labelsearch: RegExp(
        '(https://[^/]+)/search/label/([^/?&]+).*[?&]q=([^$&]+)(?:[^$]+)?',
        'g'
      ),
      label: RegExp('(https://[^/]+)/search/label/([^/?&$]+)', 'g'),
      search: RegExp('(https://[^/]+)/search/?[?&]q=(.*)', 'g'),
    },
    addEvents: function () {
      var _0x56054b = this
      this.menulist.hover(
        function () {
          'true' !== _0x5e7bc4(this).data('menuloaded') &&
            ((_0x56054b.li = _0x5e7bc4(this)),
            (_0x56054b.url = _0x56054b.li.attr('href')),
            (_0x56054b.container = _0x56054b.li.closest('ul').siblings('ul')),
            _0x56054b.hoverOver())
        },
        function () {
          _0x56054b.hoverOut()
        }
      )
    },
    hoverOver: function () {
      var _0x258f71 = this
      this.getAJAXUrl()
      this.ajaxUrl &&
        (this.ajaxcall = _0x5e7bc4.ajax({
          type: 'GET',
          url: _0x258f71.ajaxUrl,
          dataType: 'jsonp',
          data: _0x258f71.ajaxData,
          beforeSend: function () {
            _0x258f71.showLoader()
          },
          success: function (_0x1069d7) {
            _0x258f71.hideLoader()
            _0x258f71.addArrow()
            _0x258f71.showPosts(_0x1069d7)
          },
          error: function (_0x1d1085) {
            _0x258f71.showError(_0x1d1085)
          },
        }))
    },
    hoverOut: function () {
      this.ajaxcall.abort()
      this.hideLoader()
    },
    getAJAXUrl: function () {
      if (this.url) {
        var _0x4c14d4 = this
        this.ajaxData = {
          alt: 'json',
          'max-results': this.settings.postsNumber,
        }
        ;-1 !== this.url.search(this.regex.islabel) &&
        -1 !== this.url.search(this.regex.issearch)
          ? (this.ajaxUrl = this.url.replace(
              this.regex.labelsearch,
              function (_0x37da29, _0x3347ac, _0xd6d505, _0x477c98) {
                return (
                  (_0x4c14d4.ajaxData.q = _0x477c98),
                  [_0x3347ac, '/feeds/posts/default/-/', _0xd6d505, '/'].join(
                    ''
                  )
                )
              }
            ))
          : -1 !== this.url.search(this.regex.islabel) &&
            -1 === this.url.search(this.regex.issearch)
          ? (this.ajaxUrl = this.url.replace(
              this.regex.label,
              function (_0x4a862c, _0x44dd6f, _0x5aef2e) {
                return (
                  delete _0x4c14d4.ajaxData.q,
                  [_0x44dd6f, '/feeds/posts/default/-/', _0x5aef2e, '/'].join(
                    ''
                  )
                )
              }
            ))
          : -1 === this.url.search(this.regex.islabel) &&
            -1 !== this.url.search(this.regex.issearch)
          ? (this.ajaxUrl = this.url.replace(
              this.regex.search,
              function (_0xc9d2a7, _0x5c218f, _0xa19ac7) {
                return (
                  (_0x4c14d4.ajaxData.q = _0xa19ac7),
                  [_0x5c218f, '/feeds/posts/default'].join('')
                )
              }
            ))
          : (this.ajaxUrl = false)
      } else {
        this.ajaxUrl = false
      }
    },
    showLoader: function () {
      _0x5e7bc4('<span></span>', { class: 'loading-icon' }).appendTo(
        this.li.closest('li')
      )
    },
    hideLoader: function () {
      this.li.closest('li').find('span.loading-icon').remove()
    },
    showPosts: function (_0x2076da) {
      var _0x3636ad,
        _0x571d13,
        _0x5e8e2c,
        _0x47e063 = this,
        _0x1c5d9f = []
      _0x2076da.feed['openSearch$totalResults']['$t'] > 0
        ? _0x5e7bc4.each(_0x2076da.feed.entry, function (_0x1ae777, _0x294930) {
            _0x3636ad = _0x294930.title['$t']
            _0x5e7bc4.each(_0x294930.link, function (_0x2f5f92, _0x1c1676) {
              _0x571d13 = 'alternate' === _0x1c1676.rel ? _0x1c1676.href : '#'
            })
            _0x5e8e2c = _0x294930['media$thumbnail']
              ? _0x294930['media$thumbnail'].url.replace(
                  /\/s72\-c\//,
                  '/s200-c/'
                )
              : _0x47e063.settings.noThumbnail
            _0x1c5d9f.push(
              '<li><span class="thumb-container"><a title="',
              _0x3636ad,
              '" href="',
              _0x571d13,
              '"><img alt="',
              _0x3636ad,
              '" src="',
              _0x5e8e2c,
              '"/><br />',
              _0x3636ad,
              '</a></span></li>'
            )
          })
        : _0x1c5d9f.push('<h5>', 'No posts available.', '</h5>')
      this.container.html(_0x1c5d9f.join(''))
      this.menulist.removeData('menuloaded')
      this.li.data('menuloaded', 'true')
    },
    showError: function (_0x578bab) {
      'error' === _0x578bab.statusText &&
        (this.hideLoader(),
        this.addArrow(),
        this.container.html('<h5>Oops... Could not fetch the blog posts.</h5>'))
    },
    addArrow: function () {
      this.menulist.closest('li').find('span').remove()
      this.menulist.removeClass('hover-menu')
      this.li.addClass('hover-menu')
      _0x5e7bc4('<span></span>', { class: 'menu-icon' }).appendTo(
        this.li.closest('li')
      )
    },
    menuHelper: function (_0x1afd1d) {
      var _0x9ea366 = this
      _0x1afd1d.find('>li').hover(
        function () {
          var _0x50ae14 = _0x5e7bc4(this)
          _0x50ae14.find('a:first').addClass('hover-menu')
          var _0x294a =
            _0x5e7bc4(this).find('ul.leftmenulist li').height() *
            _0x5e7bc4(this).find('ul.leftmenulist li').length
          _0x50ae14
            .find('ul.rightmenulist')
            .css({ 'min-height': _0x294a + 'px' })
          _0x9ea366.requestFirstAjax(_0x50ae14)
        },
        function () {
          _0x5e7bc4(this).find('a:first').removeClass('hover-menu')
        }
      )
    },
    megaMenuHtml: function () {
      this.elem.find('ul ul').remove()
      this.elem
        .addClass('megamenuid')
        .find('>li')
        .find('ul:first')
        .addClass('leftmenulist')
        .wrap(_0x5e7bc4('<div></div>', { class: this.settings.divClass }))
      _0x5e7bc4('ul.leftmenulist').after(
        _0x5e7bc4('<ul></ul>', { class: 'rightmenulist' })
      )
    },
    requestFirstAjax: function (_0x4ba2fb) {
      _0x4ba2fb = _0x4ba2fb.find('.leftmenulist li:first-child a')
      this.url = _0x4ba2fb.attr('href')
      this.container = _0x4ba2fb.closest('ul').siblings('ul')
      this.li = _0x4ba2fb
      this.hoverOver()
    },
  }
  _0x5e7bc4.fn.megaBloggerMenu = function (_0x3daff4) {
    var _0x46c633 = _0x5e7bc4.extend(
      {},
      {
        postsNumber: 4,
        divClass: 'megasubmenu',
        postsClass: 'rightmenulist',
        noThumbnail: '/default.png',
      },
      _0x3daff4
    )
    return this.each(function () {
      new _0x59355e(_0x5e7bc4(this), _0x46c633)
    })
  }
})(jQuery)﻿
