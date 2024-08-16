var buttonPlus = $('.qty-plus'),
  buttonMinus = $('.qty-minus'),
  incrementPlus = buttonPlus.click(function () {
    var _0x59090b = $(this).parent('.qty-container').find('.item_Quantity')
    _0x59090b.val(Number(_0x59090b.val()) + 1)
  }),
  incrementMinus = buttonMinus.click(function () {
    var _0x3aae1a = $(this).parent('.qty-container').find('.item_Quantity')
    var _0x243bdd = Number(_0x3aae1a.val())
    _0x243bdd > 1 && _0x3aae1a.val(_0x243bdd - 1)
  })
;('use strict')
$(function () {
  $('.post-body-Shop').each(function () {
    $(this).find('.slider-post,.myprice').remove()
  })
})
$('.item_price').clone().appendTo('.cc_price')
$('.myprice').clone().appendTo('.cc_disc_price')
$('.slider-post').clone().appendTo('.cc-slider')
$(document).ready(function () {
  var _0x76f862 = $('.slider-post')
  _0x76f862.owlCarousel({
    items: 1,
    nav: false,
    dots: true,
    dotsData: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
        dotsData: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
      },
      1000: {
        items: 1,
        nav: false,
        loop: false,
      },
    },
  })
  $('.slider-post .owl-dot').each(function (_0x29c133) {
    var _0x189df5 = $(this),
      _0x962f99 = $('.slider-post .tHimage')
        .eq(_0x29c133)
        .find('img')
        .attr('src')
    void 0 === _0x962f99 &&
      (_0x962f99 =
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBLxBGjkptt9ZhJzwaW7uuokOzFvkqDOMovqN3yZ5njgmiVkcD1ZErOjjLdUncob4u9wD2w8lNzdtZ72TXSC5kvcmbrtC2CGaX9HkXx_-axodrvG9jJFM3F6ks7dhGpPJ8y_pn4znpg77Eiq80ZW69HvBd9AQTmrmW8l3lyByIfizkPxxNTid7wus0WsYL/s1600/1.jpg')
    var _0x43be69 =
      "<div class='tHimage'><div class='tHimg'><img class='lazyload' data-src='" +
      _0x962f99 +
      "' src='" +
      _0x962f99 +
      "' alt='slide'></div></div>"
    _0x189df5.html(_0x43be69)
    var _0x4e9e14 = $('.slider-post .tHimage').eq(_0x29c133).find('.owl-dot'),
      _0xb26d23 = _0x4e9e14.find('img')
    void 0 === _0xb26d23.attr('src') &&
      (_0xb26d23.parent().remove(),
      _0x4e9e14.append(
        "<img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBLxBGjkptt9ZhJzwaW7uuokOzFvkqDOMovqN3yZ5njgmiVkcD1ZErOjjLdUncob4u9wD2w8lNzdtZ72TXSC5kvcmbrtC2CGaX9HkXx_-axodrvG9jJFM3F6ks7dhGpPJ8y_pn4znpg77Eiq80ZW69HvBd9AQTmrmW8l3lyByIfizkPxxNTid7wus0WsYL/s1600/1.jpg' class='play-button' alt='Play Button'>"
      ))
    _0x189df5.on('click', function () {
      console.log('Dot clicked:', _0x189df5.index())
      _0x76f862.trigger('to.owl.carousel', _0x29c133)
    })
  })
  _0x76f862.on('changed.owl.carousel', function (_0x3f8018) {
    var _0x1270f2 = _0x3f8018.item.index
    console.log('Current slide index:', _0x1270f2)
  })
})
$('#relPSt').each(function () {
  var _0x227be0 = $(this).text()
  $.ajax({
    url:
      '/feeds/posts/default/-/' +
      _0x227be0 +
      '?alt=json-in-script&max-results=' +
      jrelated,
    type: 'get',
    dataType: 'jsonp',
    success: function (_0x1047bd) {
      var _0x484332 = ''
      var _0x342183 = '<div class="relWr owl-carousel owl-theme">'
      for (
        var _0x1de27a = 0;
        _0x1de27a < _0x1047bd.feed.entry.length;
        _0x1de27a++
      ) {
        for (
          var _0x4c87a5 = 0;
          _0x4c87a5 < _0x1047bd.feed.entry[_0x1de27a].link.length;
          _0x4c87a5++
        ) {
          if (
            _0x1047bd.feed.entry[_0x1de27a].link[_0x4c87a5].rel == 'alternate'
          ) {
            _0x484332 = _0x1047bd.feed.entry[_0x1de27a].link[_0x4c87a5].href
            break
          }
        }
        var _0x40d20d = _0x1047bd.feed.entry[_0x1de27a].title['$t'],
          _0x33ea9a = _0x1047bd.feed.entry[_0x1de27a].category[0].term,
          _0x4c4fd6 = _0x1047bd.feed.entry[_0x1de27a].author[0].name['$t'],
          _0x263ea7 = _0x1047bd.feed.entry[_0x1de27a].content['$t'],
          _0x283d61 = $('<div>').html(_0x263ea7),
          _0x15d40f = _0x1047bd.feed.entry[_0x1de27a].published['$t'],
          _0x4771ed = _0x15d40f.substring(0, 4),
          _0xd6f2a7 = _0x15d40f.substring(5, 7),
          _0x4c7a25 = _0x15d40f.substring(8, 10),
          _0x5673ef =
            mNTH[parseInt(_0xd6f2a7, 10)] + ' ' + _0x4c7a25 + ', ' + _0x4771ed
        if (_0x263ea7.indexOf('//www.youtube.com/embed/') > -1) {
          var _0x20cb36 = _0x1047bd.feed.entry[_0x1de27a]['media$thumbnail'].url
              .replace('/default.jpg', '/maxresdefault.jpg')
              .replace(/s72-(c|.*?-c)/, 'w' + tmSize + '-h' + tmSize + ''),
            _0x2950ff = _0x20cb36
        } else {
          if (_0x263ea7.indexOf('<img') > -1) {
            var _0x34baee = _0x283d61
                .find('img:first')
                .attr('src')
                .replace(/s72-(c|.*?-c)/, 'w' + tmSize + '-h' + tmSize + ''),
              _0x2950ff = _0x34baee
          } else {
            var _0x2950ff = noIMG
          }
        }
        _0x342183 +=
          '<div><div class="tHimage"><div class="tHimg"><a href="' +
          _0x484332 +
          '" title="' +
          _0x40d20d +
          '"><img class="lazyload" data-sizes="auto" alt="' +
          _0x40d20d +
          '" data-src="' +
          _0x2950ff +
          '" src="' +
          imglazy +
          '" title="' +
          _0x40d20d +
          '" width="' +
          tmSize +
          '" height="' +
          tmSize +
          '" title="' +
          _0x40d20d +
          '"/></a></div></div><div class="psTinF"><h4 class="rcTiL"><a href="' +
          _0x484332 +
          '" title="' +
          _0x40d20d +
          '">' +
          _0x40d20d +
          '</a></h4><div class="rcMtA"><span class="rlDate opacity">' +
          _0x5673ef +
          '</span></div></div></div>'
      }
      $('#relPSt').html(_0x342183)
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: false,
          },
          600: {
            items: 2,
            nav: false,
          },
          1000: {
            items: 3,
            nav: false,
            loop: false,
          },
        },
      })
      $('#relPSt').html(_0x342183),
        $('.owl-carousel').owlCarousel({
          loop: true,
          margin: 20,
          nav: false,
          dots: true,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              nav: false,
            },
            600: {
              items: 2,
              nav: false,
            },
            1000: {
              items: 3,
              nav: false,
              loop: false,
            },
          },
        })
      var _0x37c1e6 = $('.owl-carousel')
      $('.relNtBtN').click(function () {
        _0x37c1e6.trigger('next.owl.carousel')
      })
      $('.relPrBtN').click(function () {
        _0x37c1e6.trigger('prev.owl.carousel')
      })
      $('.owl-carousel').each(function () {
        $(this)
          .find('.owl-dot')
          .each(function (_0x23cd56) {
            $(this).attr('aria-label', _0x23cd56 + 1)
          })
      })
    },
  })
})
;('use strict')
function blockLinks(_0x57eec5, _0x1c7c8e) {
  for (
    var _0x508420 = document.getElementById(_0x57eec5),
      _0x34b5ef = _0x508420.getElementsByTagName(_0x1c7c8e),
      _0x5acb8a = 0;
    _0x5acb8a < _0x34b5ef.length;
    _0x5acb8a++
  ) {
    ;-1 !== _0x34b5ef[_0x5acb8a].innerHTML.indexOf('</a>') &&
      (_0x34b5ef[_0x5acb8a].innerHTML =
        'Sorry, the comment contains an <mark>active links</mark>')
  }
}
blockLinks('comments', 'p')
!(function () {
  var _0x405785 = document.querySelector('.post-body'),
    _0x3bfdf9 = _0x405785.querySelectorAll(
      'div > br, span > br, div > p, span > p'
    ),
    _0xa80f39 = Math.ceil(0.2 * _0x3bfdf9.length),
    _0x24dced = Math.ceil(0.5 * _0x3bfdf9.length),
    _0x2381a9 = document.querySelector('#Middle-Ad-Slot1 .widget-content'),
    _0x3dca24 = document.querySelector('#relBefore'),
    _0x124ed7 = document.querySelector('#top-Ad-Slots .widget-content'),
    _0x9d830d = document.querySelector('#Ad-Slots-below .widget-content'),
    _0x11df9a = document.getElementById('adsone'),
    _0x5ab2e3 = document.getElementById('adstwo')
  function _0x3ad4b4(_0x4edc84, _0x3af271) {
    _0x3af271.parentNode.insertBefore(_0x4edc84, _0x3af271.nextSibling)
  }
  null != _0x124ed7 &&
    '\n' != _0x124ed7.innerHTML &&
    _0x405785.insertBefore(_0x124ed7, _0x405785.childNodes[0])
  null != _0x9d830d &&
    '\n' != _0x9d830d.innerHTML &&
    _0x405785.appendChild(_0x9d830d)
  0 < _0x3bfdf9.length
    ? (null != _0x2381a9 &&
        '\n' != _0x2381a9.innerHTML &&
        _0x3ad4b4(
          _0x2381a9,
          null !== _0x11df9a ? _0x11df9a : _0x3bfdf9[_0xa80f39]
        ),
      null != _0x3dca24 &&
        '\n' != _0x3dca24.innerHTML &&
        _0x3ad4b4(
          _0x3dca24,
          null !== _0x5ab2e3 ? _0x5ab2e3 : _0x3bfdf9[_0x24dced]
        ))
    : (_0x2381a9.parentNode.removeChild(_0x2381a9),
      _0x3dca24.parentNode.removeChild(_0x3dca24))
})()
$(document).ready(function (_0x3da865) {
  _0x3da865('.goompage').each(function () {
    var _0x1d129b = _0x3da865('a.prev-post').attr('href'),
      _0x1334d5 = _0x3da865('a.next-post').attr('href')
    _0x3da865.ajax({
      url: _0x1d129b,
      type: 'get',
      success: function (_0x2dc96c) {
        var _0x2b289e = _0x3da865(_0x2dc96c).find('.bPst h1.post-title').text(),
          _0x1b72c0 = '',
          _0x2dc96c = _0x3da865(_0x2dc96c)
            .find('.post-content img:first')
            .attr('src')
        void 0 === _0x2dc96c && (_0x2dc96c = noIMG)
        _0x1b72c0 +=
          "<div class='tmPost'><div class='goomthumb'><div class='tHimage'><div class='tHimg'><img alt='" +
          _0x2b289e +
          "' class='lazyload' data-src='" +
          _0x2dc96c +
          "' src='" +
          imglazy +
          "' width='" +
          npSize +
          "' height='" +
          npSize +
          "'/></div></div><h4 class='pg-title'>" +
          _0x2b289e +
          '</h4></div></div>'
        _0x3da865('a.prev-post').html(_0x1b72c0)
      },
    })
    _0x3da865.ajax({
      url: _0x1334d5,
      type: 'get',
      success: function (_0x5d0032) {
        var _0x9a2b5e = _0x3da865(_0x5d0032).find('.bPst h1.post-title').text(),
          _0x4ce202 = '',
          _0x5d0032 = _0x3da865(_0x5d0032)
            .find('.post-content img:first')
            .attr('src')
        void 0 === _0x5d0032 && (_0x5d0032 = noIMG)
        _0x4ce202 +=
          "<div class='tmPost'><div class='goomthumb'><div class='tHimage'><div class='tHimg'><img alt='" +
          _0x9a2b5e +
          "' class='lazyload' data-src='" +
          _0x5d0032 +
          "' src='" +
          imglazy +
          "' width='" +
          npSize +
          "' height='" +
          npSize +
          "'/></div></div><h4 class='pg-title'>" +
          _0x9a2b5e +
          '</h4></div></div>'
        _0x3da865('a.next-post').html(_0x4ce202)
      },
    })
  })
})
var myCode1 = {
    _keyStr:
      'AQZSWXDECFRVGTBHYNJUMKILOPaqzswxdecfrvgtbhynjumkilop0567891234+/=',
    desimple: function (_0x4724bb) {
      var _0x251163 = '',
        _0x5757a4,
        _0x3b592f,
        _0xbb8cb4
      var _0x104c95,
        _0x5abe6a,
        _0x497230,
        _0xb6f3e6,
        _0x2b31f6 = 0
      _0x4724bb = _0x4724bb.replace(/[^A-Za-z0-9\+\/\=]/g, '')
      while (_0x2b31f6 < _0x4724bb.length) {
        _0x104c95 = this['_keyStr'].indexOf(_0x4724bb.charAt(_0x2b31f6++))
        _0x5abe6a = this['_keyStr'].indexOf(_0x4724bb.charAt(_0x2b31f6++))
        _0x497230 = this['_keyStr'].indexOf(_0x4724bb.charAt(_0x2b31f6++))
        _0xb6f3e6 = this['_keyStr'].indexOf(_0x4724bb.charAt(_0x2b31f6++))
        _0x5757a4 = (_0x104c95 << 2) | (_0x5abe6a >> 4)
        _0x3b592f = ((_0x5abe6a & 15) << 4) | (_0x497230 >> 2)
        _0xbb8cb4 = ((_0x497230 & 3) << 6) | _0xb6f3e6
        _0x251163 = _0x251163 + String.fromCharCode(_0x5757a4)
        _0x497230 != 64 &&
          (_0x251163 = _0x251163 + String.fromCharCode(_0x3b592f))
        _0xb6f3e6 != 64 &&
          (_0x251163 = _0x251163 + String.fromCharCode(_0xbb8cb4))
      }
      return (_0x251163 = myCode['_utf8_desimple'](_0x251163)), _0x251163
    },
    _utf8_desimple: function (_0x5006b4) {
      var _0x13c0cb = '',
        _0x588bad = 0
      var _0x478e66 = (c1 = c2 = 0)
      while (_0x588bad < _0x5006b4.length) {
        _0x478e66 = _0x5006b4.charCodeAt(_0x588bad)
        if (_0x478e66 < 128) {
          _0x13c0cb += String.fromCharCode(_0x478e66)
          _0x588bad++
        } else {
          _0x478e66 > 191 && _0x478e66 < 224
            ? ((c2 = _0x5006b4.charCodeAt(_0x588bad + 1)),
              (_0x13c0cb += String.fromCharCode(
                ((_0x478e66 & 31) << 6) | (c2 & 63)
              )),
              (_0x588bad += 2))
            : ((c2 = _0x5006b4.charCodeAt(_0x588bad + 1)),
              (c3 = _0x5006b4.charCodeAt(_0x588bad + 2)),
              (_0x13c0cb += String.fromCharCode(
                ((_0x478e66 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
              )),
              (_0x588bad += 3))
        }
      }
      return _0x13c0cb
    },
  },
  j = window.location.href,
  k = new URL(j),
  urlHome = k.origin,
  urlPathname = k.pathname
$.ajax({
  url: '/feeds/posts/summary/?alt=json',
  dataType: 'json',
  success: generator,
})
function generator(_0x3280e6) {
  var _0x227609 = _0x3280e6.feed.id['$t'],
    _0x91528d = _0x227609.split('-'),
    _0x51bbd1 = _0x91528d[1]
  var _0x260266 = _0x51bbd1,
    _0x11aa39 = $('.license-code').text()
  console.log(_0x260266)
  console.log(_0x11aa39)
  var _0x3c6177 =
    "<style>#key-wrapper{position:fixed;z-index:999;top:0;margin:0 auto;width:100%;bottom:0;background:0;height:100vh}#key-content{height:100%;max-width:800px;width:100%;padding:0 20px;display:flex;flex-direction:column;justify-content:center;align-items:center;color:#000;position:relative;text-align:center;z-index:10;margin:0 auto}#key-wrapper h4{font-size:20px}#waiting-time{color:#fff;background:#559164;width:35px;height:35px;line-height:35px;margin-top:20px;border-radius:50px}#lc{width:72px;height:auto;margin-top:30px;}#lc img{width:100%;height:auto}#key-content p{padding:10px 0}#key-content ul{list-style:none}#key-content ul li{padding:5px 0}#key-content ul li b{color:#227c2f}</style><div id='key-wrapper'><div id='key-content'><h4>Activate Templates</h4><div id='lc'><img alt='Goomsite.Net' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgA1NT8a4cnrRFVvViKAkic6AHHWXUfQByUoOs96fiNVSnWelrP6VdoQDDeDJSwY9FQLwYMgfZLPQu92T7y8Dsb991eDsovjGpILj_OeRRFxUbadqe987Ld3i3W2zjHlToGpd6Ocj3h0dguO_zRQF7VRCxvBMuKHKTqznWCsA1uCAiG0aGR8zd38ziZ/s1600/lokeds.png' height='512' width='512'></img></div><p><b>English</b><br/>Contact Admin goomsite.net to get a license</p><p><b>Indonesia</b><br/>Hubungi Admin goomsite.net untuk mendapatkan lisensi</p><ul><li>Email: <b>goomsite@gmail.com</b></li><li>WhatsApp: <b>+6281241105658</b></li></ul><div id='waiting-time'></div></div></div></div>"
  if (_0x11aa39 == '') {
    $(document.body).html(_0x3c6177)
  } else {
    var _0x7aff0c = myCode.desimple(_0x11aa39)
    console.log(_0x7aff0c)
    if (_0x260266 != _0x7aff0c) {
      $(document.body).html(_0x3c6177)
      var _0xc084d3 = 30,
        _0x428ba6 = setInterval(function _0x6da7cb() {
          _0xc084d3 -= 1
          $('#waiting-time').html(_0xc084d3)
          if (_0xc084d3 <= 0) {
            clearInterval(_0x428ba6)
            var _0x44d65e = myCode.desimple(
              'aEN0zEG1Vo47s7zmP64kqLThsDMmqgK0Vi=='
            )
            window.location.href = _0x44d65e
          }
        }, 1000)
    }
  }
}
/*]]>*/
</b:if>
<b:if cond='data:view.isPage'>
/*<![CDATA[*/
function formatMoney(_0x465ee6) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(_0x465ee6)
}
$('.waForm .validate').each(function () {
  label = $(this).parents('.waForm')
  $('<span class="waValidasi">Required</span>').appendTo(label)
})
$(document).on('keyup', '.waForm .validate', function () {
  $(this).val() != '' &&
    ($(this).removeClass('focus'),
    $(this).parents('.waForm').find('.waValidasi').removeClass('show'))
})
$(document).on('change', '.waForm select', function () {
  $(this).removeClass('focus')
  $(this).parents('.waForm').find('.waValidasi').removeClass('show')
})
$('.send_form').click(checkout)
function checkout() {
  if ($('#namalengkap').val() == '') {
    return (
      $('#namalengkap').each(function () {
        $(this).addClass('focus')
        $(this).parents('.waForm').find('.waValidasi').addClass('show')
      }),
      $('#namalengkap').focus(),
      false
    )
  } else {
    if ($('#nomorWA').val() == '') {
      return (
        $('#nomorWA').each(function () {
          $(this).addClass('focus')
          $(this).parents('.waForm').find('.waValidasi').addClass('show')
        }),
        $('#nomorWA').focus(),
        false
      )
    } else {
      if ($('#email').val() == '') {
        return (
          $('#email').each(function () {
            $(this).addClass('focus')
            $(this).parents('.waForm').find('.waValidasi').addClass('show')
          }),
          $('#email').focus(),
          false
        )
      } else {
        if ($('#address').val() == '') {
          return (
            $('#address').each(function () {
              $(this).addClass('focus')
              $(this).parents('.waForm').find('.waValidasi').addClass('show')
            }),
            $('#address').focus(),
            false
          )
        } else {
          if ($('#city').val() == '') {
            return (
              $('#city').each(function () {
                $(this).addClass('focus')
                $(this).parents('.waForm').find('.waValidasi').addClass('show')
              }),
              $('#city').focus(),
              false
            )
          } else {
            if ($('#province').val() == '') {
              return (
                $('#province').each(function () {
                  $(this).addClass('focus')
                  $(this)
                    .parents('.waForm')
                    .find('.waValidasi')
                    .addClass('show')
                }),
                $('#province').focus(),
                false
              )
            } else {
              if ($('#postal').val() == '') {
                return (
                  $('#postal').each(function () {
                    $(this).addClass('focus')
                    $(this)
                      .parents('.waForm')
                      .find('.waValidasi')
                      .addClass('show')
                  }),
                  $('#postal').focus(),
                  false
                )
              } else {
                if ($('#payment').val() == 'default') {
                  return (
                    $('#payment').each(function () {
                      $(this).addClass('focus')
                      $(this)
                        .parents('.waForm')
                        .find('.waValidasi')
                        .addClass('show')
                    }),
                    $('#payment').focus(),
                    false
                  )
                } else {
                  var _0x757712 =
                      'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=',
                    _0x3495d4 = '',
                    _0x2951cd = 'https://api.whatsapp.com/send'
                  if (
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      navigator.userAgent
                    )
                  ) {
                    var _0x757712 = 'mailto:',
                      _0x3495d4 = '?cc=&bcc=',
                      _0x2951cd = 'whatsapp://send'
                  }
                  cartItem = ''
                  counter = 1
                  forinput = JSON.parse(
                    localStorage.getItem('simpleCart_items')
                  )
                  forinput = Object.values(forinput)
                  forinput.forEach((_0x58b2bd, _0x4b2033) => {
                    cartItem += '*' + counter + '.' + _0x58b2bd.name + '* %0A'
                    cartItem +=
                      text.textqty +
                      '%20' +
                      text.time +
                      _0x58b2bd.quantity +
                      ' %0A'
                    cartItem +=
                      text.textsubtotal +
                      formatMoney(_0x58b2bd.price * _0x58b2bd.quantity) +
                      ' %0A'
                    cartItem += '%0A'
                    counter++
                  })
                  var _0x1471b6 = $('#namalengkap').val(),
                    _0x3bb5a2 = $('#nomorWA').val(),
                    _0xa3eb7b = $('#email').val(),
                    _0x1601e8 = $('#address').val(),
                    _0xecda5b = $('#city').val(),
                    _0x108908 = $('#province').val(),
                    _0x5bfd06 = $('#postal').val(),
                    _0xe695e6 = $('#payment :selected').text(),
                    _0x36ffe4 = cartItem,
                    _0x24a417 = $('#ranNum').text(),
                    _0x4ce0af = $('.simpleCart_total').text(),
                    _0x398836 =
                      _0x757712 +
                      email +
                      _0x3495d4 +
                      '&subject=' +
                      textsubject +
                      '%20&body=' +
                      textadmin +
                      '%20\uD83D\uDE42%0A' +
                      '%0A' +
                      textwaadmin +
                      '%0A-----------------------------%0A' +
                      '%0A' +
                      '\u2B50%20' +
                      textorderid +
                      '%20%3A%20' +
                      _0x24a417 +
                      '%0A%0A' +
                      '' +
                      textname +
                      '%20%3A%20' +
                      _0x1471b6 +
                      '%0A' +
                      '' +
                      textphone +
                      '%20%3A%20' +
                      _0x3bb5a2 +
                      '%0A' +
                      '' +
                      textemail +
                      '%20%3A%20' +
                      _0xa3eb7b +
                      '%0A' +
                      '' +
                      textaddress +
                      '%20%3A%20' +
                      _0x1601e8 +
                      '%0A' +
                      '' +
                      textcity +
                      '%20%3A%20' +
                      _0xecda5b +
                      '%0A' +
                      '' +
                      textprovince +
                      '%20%3A%20' +
                      _0x108908 +
                      '%0A' +
                      '' +
                      textpostal +
                      '%20%3A%20' +
                      _0x5bfd06 +
                      '%0A' +
                      '' +
                      textpayment +
                      '%20%3A%20' +
                      _0xe695e6 +
                      '%0A' +
                      '-----------------------------%0A' +
                      '%0A' +
                      '\uD83D\uDED2%20' +
                      textlist +
                      '%0A' +
                      '%0A' +
                      _0x36ffe4 +
                      '%0A' +
                      '\uD83D\uDD25%20' +
                      texttotal +
                      '%20%3A%20' +
                      _0x4ce0af +
                      '%0A' +
                      '%0A' +
                      textthanks +
                      '%0A' +
                      _0x1471b6 +
                      '%0A%0A',
                    _0x3bbd2d =
                      _0x2951cd +
                      '?phone=' +
                      phone +
                      '&text=%2A' +
                      textadmin +
                      '%2A%20\uD83D\uDE42%0A' +
                      '%0A' +
                      textwaadmin +
                      '%0A-----------------------------%0A' +
                      '%0A' +
                      '%2A' +
                      textorderid +
                      '%20%3A%2A%20' +
                      _0x24a417 +
                      '%0A%0A' +
                      '%2A' +
                      textname +
                      '%20%3A%2A%20' +
                      _0x1471b6 +
                      '%0A' +
                      '%2A' +
                      textphone +
                      '%20%3A%2A%20' +
                      _0x3bb5a2 +
                      '%0A' +
                      '%2A' +
                      textemail +
                      '%20%3A%2A%20' +
                      _0xa3eb7b +
                      '%0A' +
                      '%2A' +
                      textaddress +
                      '%20%3A%2A%20' +
                      _0x1601e8 +
                      '%0A' +
                      '%2A' +
                      textcity +
                      '%20%3A%2A%20' +
                      _0xecda5b +
                      '%0A' +
                      '%2A' +
                      textprovince +
                      '%20%3A%2A%20' +
                      _0x108908 +
                      '%0A' +
                      '%2A' +
                      textpostal +
                      '%20%3A%2A%20' +
                      _0x5bfd06 +
                      '%0A' +
                      '%2A' +
                      textpayment +
                      '%20%3A%2A%20' +
                      _0xe695e6 +
                      '%0A' +
                      '-----------------------------%0A' +
                      '%0A' +
                      '%2A\uD83D\uDED2%20' +
                      textlist +
                      '%2A%0A' +
                      '%0A' +
                      _0x36ffe4 +
                      '%0A' +
                      '%2A\uD83D\uDD25%20' +
                      texttotal +
                      '%20%3A%2A%20' +
                      _0x4ce0af +
                      '%0A' +
                      '%0A' +
                      textthanks +
                      '%0A' +
                      _0x1471b6 +
                      '%0A%0A'
                  $('#to_wa').attr('href', _0x3bbd2d).attr('target', '_blank')
                  $('#to_mail').attr('href', _0x398836).attr('target', '_blank')
                  $('#namalengkap').val('')
                  $('#nomorWA').val('')
                  $('#email').val('')
                  $('#address').val('')
                  $('#city').val('')
                  $('#province').val('')
                  $('#postal').val('')
                  $('#payment :selected').text('Pembayaran')
                }
              }
            }
          }
        }
      }
    }
  }
}
var randomNum = Math.floor(1000000 * Math.random() + 1),
  el = document.getElementById('ranNum')
el.innerHTML = randomNum
$(document).ready(function () {
  var _0x8cae43 = $('<select>')
  $.each(bankTransfer, function (_0x21e0e1, _0x4026ee) {
    _0x8cae43.append($('<option></option>').val(_0x4026ee).html(_0x4026ee))
  })
  $('#payment').append(_0x8cae43.html())
})
var myCode1 = {
    _keyStr:
      'AQZSWXDECFRVGTBHYNJUMKILOPaqzswxdecfrvgtbhynjumkilop0567891234+/=',
    desimple: function (_0x3b2878) {
      var _0x250acd = '',
        _0x38bd0c,
        _0x2006cc,
        _0x5a1c67,
        _0x35cf43,
        _0x32d518,
        _0x13ba68,
        _0x993d78
      var _0x5472b9 = 0
      _0x3b2878 = _0x3b2878.replace(/[^A-Za-z0-9\+\/\=]/g, '')
      while (_0x5472b9 < _0x3b2878.length) {
        _0x35cf43 = this['_keyStr'].indexOf(_0x3b2878.charAt(_0x5472b9++))
        _0x32d518 = this['_keyStr'].indexOf(_0x3b2878.charAt(_0x5472b9++))
        _0x13ba68 = this['_keyStr'].indexOf(_0x3b2878.charAt(_0x5472b9++))
        _0x993d78 = this['_keyStr'].indexOf(_0x3b2878.charAt(_0x5472b9++))
        _0x38bd0c = (_0x35cf43 << 2) | (_0x32d518 >> 4)
        _0x2006cc = ((_0x32d518 & 15) << 4) | (_0x13ba68 >> 2)
        _0x5a1c67 = ((_0x13ba68 & 3) << 6) | _0x993d78
        _0x250acd = _0x250acd + String.fromCharCode(_0x38bd0c)
        _0x13ba68 != 64 &&
          (_0x250acd = _0x250acd + String.fromCharCode(_0x2006cc))
        _0x993d78 != 64 &&
          (_0x250acd = _0x250acd + String.fromCharCode(_0x5a1c67))
      }
      return (_0x250acd = myCode['_utf8_desimple'](_0x250acd)), _0x250acd
    },
    _utf8_desimple: function (_0x141d13) {
      var _0x577ddf = ''
      var _0x13c726 = 0,
        _0x28049a = (c1 = c2 = 0)
      while (_0x13c726 < _0x141d13.length) {
        _0x28049a = _0x141d13.charCodeAt(_0x13c726)
        if (_0x28049a < 128) {
          _0x577ddf += String.fromCharCode(_0x28049a)
          _0x13c726++
        } else {
          _0x28049a > 191 && _0x28049a < 224
            ? ((c2 = _0x141d13.charCodeAt(_0x13c726 + 1)),
              (_0x577ddf += String.fromCharCode(
                ((_0x28049a & 31) << 6) | (c2 & 63)
              )),
              (_0x13c726 += 2))
            : ((c2 = _0x141d13.charCodeAt(_0x13c726 + 1)),
              (c3 = _0x141d13.charCodeAt(_0x13c726 + 2)),
              (_0x577ddf += String.fromCharCode(
                ((_0x28049a & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
              )),
              (_0x13c726 += 3))
        }
      }
      return _0x577ddf
    },
  },
  j = window.location.href
var k = new URL(j),
  urlHome = k.origin,
  urlPathname = k.pathname
$.ajax({
  url: '/feeds/posts/summary/?alt=json',
  dataType: 'json',
  success: generator,
})
function generator(_0x98fa04) {
  var _0x33f6f1 = _0x98fa04.feed.id['$t'],
    _0x27c6c0 = _0x33f6f1.split('-'),
    _0x4c1fa2 = _0x27c6c0[1],
    _0x8bb2b1 = _0x4c1fa2,
    _0x1043c0 = $('.license-code').text()
  console.log(_0x8bb2b1)
  console.log(_0x1043c0)
  var _0x599fe5 =
    "<style>#key-wrapper{position:fixed;z-index:999;top:0;margin:0 auto;width:100%;bottom:0;background:0;height:100vh}#key-content{height:100%;max-width:800px;width:100%;padding:0 20px;display:flex;flex-direction:column;justify-content:center;align-items:center;color:#000;position:relative;text-align:center;z-index:10;margin:0 auto}#key-wrapper h4{font-size:20px}#waiting-time{color:#fff;background:#559164;width:35px;height:35px;line-height:35px;margin-top:20px;border-radius:50px}#lc{width:72px;height:auto;margin-top:30px;}#lc img{width:100%;height:auto}#key-content p{padding:10px 0}#key-content ul{list-style:none}#key-content ul li{padding:5px 0}#key-content ul li b{color:#227c2f}</style><div id='key-wrapper'><div id='key-content'><h4>Activate Templates</h4><div id='lc'><img alt='Goomsite.Net' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgA1NT8a4cnrRFVvViKAkic6AHHWXUfQByUoOs96fiNVSnWelrP6VdoQDDeDJSwY9FQLwYMgfZLPQu92T7y8Dsb991eDsovjGpILj_OeRRFxUbadqe987Ld3i3W2zjHlToGpd6Ocj3h0dguO_zRQF7VRCxvBMuKHKTqznWCsA1uCAiG0aGR8zd38ziZ/s1600/lokeds.png' height='512' width='512'></img></div><p><b>English</b><br/>Contact Admin goomsite.net to get a license</p><p><b>Indonesia</b><br/>Hubungi Admin goomsite.net untuk mendapatkan lisensi</p><ul><li>Email: <b>goomsite@gmail.com</b></li><li>WhatsApp: <b>+6281241105658</b></li></ul><div id='waiting-time'></div></div></div></div>"
  if (_0x1043c0 == '') {
    $(document.body).html(_0x599fe5)
  } else {
    var _0x141928 = myCode.desimple(_0x1043c0)
    console.log(_0x141928)
    if (_0x8bb2b1 != _0x141928) {
      $(document.body).html(_0x599fe5)
      var _0x56d6ea = 30,
        _0x38ffb8 = setInterval(function _0xbefd7e() {
          _0x56d6ea -= 1
          $('#waiting-time').html(_0x56d6ea)
          if (_0x56d6ea <= 0) {
            clearInterval(_0x38ffb8)
            var _0x54fbf3 = myCode.desimple(
              'aEN0zEG1Vo47s7zmP64kqLThsDMmqgK0Vi=='
            )
            window.location.href = _0x54fbf3
          }
        }, 1000)
    }
  }
}

/*]]>*/
</b:if>
  <b:if cond='data:view.isHomepage'>
/*<![CDATA[*/
$('.slGS .widget-content').each(function () {
  var _0x298bdb = $(this).find('span').attr('label'),
    _0x17c96a = $(this).find('span').attr('type')
  _0x17c96a.match('sL') &&
    $.ajax({
      url:
        '/feeds/posts/default/-/' +
        _0x298bdb +
        '?alt=json-in-script&max-results=' +
        jslide,
      type: 'get',
      dataType: 'jsonp',
      success: function (_0x54813e) {
        var _0x51b40b = '',
          _0x73dfa0 = '<div class="fr owl-carousel">'
        for (
          var _0x3c0045 = 0;
          _0x3c0045 < _0x54813e.feed.entry.length;
          _0x3c0045++
        ) {
          for (
            var _0x4d5623 = 0;
            _0x4d5623 < _0x54813e.feed.entry[_0x3c0045].link.length;
            _0x4d5623++
          ) {
            if (
              _0x54813e.feed.entry[_0x3c0045].link[_0x4d5623].rel == 'alternate'
            ) {
              _0x51b40b = _0x54813e.feed.entry[_0x3c0045].link[_0x4d5623].href
              break
            }
          }
          var _0x5914bb = _0x54813e.feed.entry[_0x3c0045].title['$t'],
            _0x41f3f0 = _0x54813e.feed.entry[_0x3c0045].category[0].term,
            _0xe0de7e = _0x54813e.feed.entry[_0x3c0045].author[0].name['$t'],
            _0x1873b3 = _0x54813e.feed.entry[_0x3c0045].published['$t'],
            _0xa8895a = _0x1873b3.substring(0, 4),
            _0x59667a = _0x1873b3.substring(5, 7),
            _0x42b361 = _0x1873b3.substring(8, 10),
            _0x56798f =
              mNTH[parseInt(_0x59667a, 10)] +
              ' ' +
              _0x42b361 +
              ', ' +
              _0xa8895a,
            _0x23d611 = _0x54813e.feed.entry[_0x3c0045].content['$t'],
            _0x2c1f09 = $('<div>').html(_0x23d611)
          snippets = _0x23d611.replace(/<\S[^>]*>/g, '')
          if (
            (75 < snippets.length &&
              (snippets = snippets.substring(0, 75) + '...'),
            _0x23d611.indexOf('//www.youtube.com/embed/') > -1)
          ) {
            var _0xc4770 = _0x54813e.feed.entry[_0x3c0045][
                'media$thumbnail'
              ].url
                .replace('/default.jpg', '/maxresdefault.jpg')
                .replace(
                  /s72-(c|.*?-c)/,
                  'w' + heightSize + '-h' + heightSize + ''
                ),
              _0x52d746 = _0xc4770
          } else {
            if (_0x23d611.indexOf('<img') > -1) {
              var _0x188c45 = _0x2c1f09
                  .find('img:first')
                  .attr('src')
                  .replace('/default.jpg', '/maxresdefault.jpg')
                  .replace(
                    /s72-(c|.*?-c)/,
                    'w' + widthSize + '-h' + heightSize + ''
                  ),
                _0x52d746 = _0x188c45
            } else {
              var _0x52d746 = noIMG
            }
          }
          _0x73dfa0 +=
            '<div class="carousel-item"><div class="tHimg"><div class="category-gallery"><a class="' +
            _0x41f3f0 +
            '" href="/search/label/' +
            _0x41f3f0 +
            '?&max-results=8"><span class="hiden_absolute">' +
            _0x41f3f0 +
            '</span></a></div><a href="' +
            _0x51b40b +
            '" title="' +
            _0x5914bb +
            '"><img class="lazyload" data-sizes="auto" alt="' +
            _0x5914bb +
            '" data-src="' +
            _0x52d746 +
            '" src="' +
            imglazy +
            '" width="' +
            widthSize +
            '" height="' +
            heightSize +
            '" title="' +
            _0x5914bb +
            '"/><span class="ly"></span></a></div><div class="cTAbSl"><div class="cTnSL"><div class="post-tag"><a href="/search/label/' +
            _0x41f3f0 +
            '?&max-results=8" title="' +
            _0x41f3f0 +
            '">' +
            _0x41f3f0 +
            '</a></div><h2><a href="' +
            _0x51b40b +
            '" title="' +
            _0x5914bb +
            '">' +
            _0x5914bb +
            '</a></h2><div class="post-meta"><div class="rcDTe">' +
            _0x56798f +
            '</div></div></div></div></div>'
        }
        _0x73dfa0 += '</div>'
        $('.slGS .widget-content').each(function () {
          $('.fr.owl-carousel').owlCarousel({
            items: 1,
            lazyLoad: true,
            smartSpeed: 550,
            nav: true,
            navText: [
              "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z'></path></svg>",
              "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='m13.171 12-4.95-4.95 1.415-1.413L16 12l-6.364 6.364-1.414-1.415 4.95-4.95Z'></path></svg>",
            ],
            loop: true,
            autoplay: true,
            autoplaySpeed: 500,
            dots: false,
            margin: 30,
            responsive: {
              0: {
                items: 1,
                nav: false,
              },
              320: {
                items: 1,
                nav: false,
                dots: false,
              },
              360: {
                items: 1,
                nav: false,
                dots: false,
              },
              384: {
                items: 1,
                nav: false,
                dots: false,
              },
              414: {
                items: 1,
                nav: false,
              },
              480: {
                items: 1,
                nav: false,
              },
              515: {
                items: 1,
                nav: false,
              },
              560: {
                items: 1,
                nav: false,
              },
              600: {
                items: 1,
                nav: true,
              },
              880: {
                items: 1,
                nav: true,
              },
            },
          })
          $('.owl-carousel').each(function () {
            $(this)
              .find('.owl-dot')
              .each(function (_0x10b6b1) {
                $(this).attr('aria-label', _0x10b6b1 + 1)
              })
          })
          $(this)
            .find('.lazyload')
            .each(function () {
              $(this)
                .attr('data-src', function (_0x3dcd21, _0x4764d5) {
                  return _0x4764d5.replace('/default.jpg', '/maxresdefault.jpg')
                })
                .attr('data-src', function (_0x3342a5, _0x3f32f6) {
                  return _0x3f32f6.replace('s72-c', 's1600')
                })
            })
          $('.fr.owl-carousel').owlCarousel({
            items: 1,
            lazyLoad: true,
            smartSpeed: 550,
            nav: true,
            navText: [
              "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z'></path></svg>",
              "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='m13.171 12-4.95-4.95 1.415-1.413L16 12l-6.364 6.364-1.414-1.415 4.95-4.95Z'></path></svg>",
            ],
            loop: true,
            autoplay: true,
            autoplaySpeed: 500,
            dots: false,
            margin: 30,
            responsive: {
              0: {
                items: 1,
                nav: false,
              },
              320: {
                items: 1,
                nav: false,
                dots: false,
              },
              360: {
                items: 1,
                nav: false,
                dots: false,
              },
              384: {
                items: 1,
                nav: false,
                dots: false,
              },
              414: {
                items: 1,
                nav: false,
              },
              480: {
                items: 1,
                nav: false,
              },
              515: {
                items: 1,
                nav: false,
              },
              560: {
                items: 1,
                nav: false,
              },
              600: {
                items: 1,
                nav: true,
              },
              880: {
                items: 1,
                nav: true,
              },
            },
          }),
            $('.owl-carousel').each(function () {
              $(this)
                .find('.owl-dot')
                .each(function (_0x10b6b1) {
                  $(this).attr('aria-label', _0x10b6b1 + 1)
                })
            }),
            $(this)
              .find('.lazyload')
              .each(function () {
                $(this)
                  .attr('data-src', function (_0x3dcd21, _0x4764d5) {
                    return _0x4764d5.replace(
                      '/default.jpg',
                      '/maxresdefault.jpg'
                    )
                  })
                  .attr('data-src', function (_0x3342a5, _0x3f32f6) {
                    return _0x3f32f6.replace('s72-c', 's1600')
                  })
              })
        })
      },
    })
})
$('.rB .widget-content').each(function () {
  var _0x399816 = $(this).find('span').attr('label'),
    _0x5c4994 = $(this).find('span').attr('num'),
    _0xd6f99f = ($(this).prev('h3').text(), $(this).parent().attr('id')),
    _0x54bf34 = $(this).find('span').attr('type')
  _0x54bf34.match('rL') &&
    $.ajax({
      url:
        '/feeds/posts/default/-/' +
        _0x399816 +
        '?alt=json-in-script&max-results=' +
        _0x5c4994,
      type: 'get',
      dataType: 'jsonp',
      success: function (_0x2b93ee) {
        for (
          var _0x1d7b9f = '', _0x2e2b2b = "<ul class='gRWn'>", _0x11e9d6 = 0;
          _0x11e9d6 < _0x2b93ee.feed.entry.length;
          _0x11e9d6++
        ) {
          for (
            var _0x2c667a = 0;
            _0x2c667a < _0x2b93ee.feed.entry[_0x11e9d6].link.length;
            _0x2c667a++
          ) {
            if (
              'alternate' == _0x2b93ee.feed.entry[_0x11e9d6].link[_0x2c667a].rel
            ) {
              _0x1d7b9f = _0x2b93ee.feed.entry[_0x11e9d6].link[_0x2c667a].href
              break
            }
          }
          var _0x4da0e4 = _0x2b93ee.feed.entry[_0x11e9d6].title['$t'],
            _0xd53e6a =
              (_0x2b93ee.feed.entry[_0x11e9d6].category[0].term,
              _0x2b93ee.feed.entry[_0x11e9d6].content['$t']),
            _0x2a3662 = _0x2b93ee.feed.entry[_0x11e9d6].author[0].name['$t'],
            _0x4df37d = _0x2b93ee.feed.entry[_0x11e9d6].published['$t'],
            _0x3b9761 = _0x4df37d.substring(0, 4),
            _0x285d55 = _0x4df37d.substring(5, 7),
            _0x45d5d0 = _0x4df37d.substring(8, 10),
            _0x216e08 =
              mNTH[parseInt(_0x285d55, 10)] +
              ' ' +
              _0x45d5d0 +
              ', ' +
              _0x3b9761,
            _0x1b6d6c = $('<div>').html(_0xd53e6a),
            _0x264cd4 = _0xd53e6a.replace(/<\S[^>]*>/g, '')
          if (
            (75 < _0x264cd4.length &&
              (_0x264cd4 = _0x264cd4.substring(0, 75) + '...'),
            -1 < _0xd53e6a.indexOf('//www.youtube.com/embed/'))
          ) {
            var _0x4ca5e3 = _0x2b93ee.feed.entry[_0x11e9d6][
              'media$thumbnail'
            ].url
              .replace('/default.jpg', '/maxresdefault.jpg')
              .replace(
                /s72-(c|.*?-c)/,
                'w' + widthSize + '-h' + heightSize + ''
              )
          } else {
            _0x4ca5e3 =
              -1 < _0xd53e6a.indexOf('<img')
                ? _0x1b6d6c
                    .find('img:first')
                    .attr('src')
                    .replace(
                      /s72-(c|.*?-c)/,
                      'w' + widthSize + '-h' + heightSize + ''
                    )
                : noIMG
          }
          _0x2e2b2b +=
            '<li class="gR"><div class="tHimage"><div class="tHimg"><a href="' +
            _0x1d7b9f +
            '" title="' +
            _0x4da0e4 +
            '"><img class="lazyload" alt="' +
            _0x4da0e4 +
            '" data-src="' +
            _0x4ca5e3 +
            '" src="' +
            imglazy +
            '" data-sizes="auto" width="' +
            widthSize +
            '" height="' +
            heightSize +
            '"/></a><span class="post-tag"><a href="/search/label/' +
            _0x399816 +
            '?&amp;max-results=8" title="' +
            _0x399816 +
            '">' +
            _0x399816 +
            '</a></span></div></div><div class="rcinfo"><h2 class="post-title"><a href="' +
            _0x1d7b9f +
            '" title="' +
            _0x4da0e4 +
            '">' +
            _0x4da0e4 +
            '</a></h2><p class="pStNpet opacity">' +
            _0x264cd4 +
            '</p><div class="post-meta"><time class="post-date">' +
            _0x216e08 +
            '</time><div class="jump-link"><a href="' +
            _0x1d7b9f +
            '" title="' +
            _0x4da0e4 +
            '">Read more</a></div></div></div></li>'
        }
        _0x2e2b2b += '</ul>'
        $('.rB .widget-content').each(function () {
          $(this).parent().attr('id') == _0xd6f99f &&
            ($(this).html(_0x2e2b2b),
            $(this).prev('h3').wrap('<div class="widget-title"></div>'),
            $(this)
              .prev('.widget-title')
              .append(
                '<a class="more-link" href="/search/label/' +
                  _0x399816 +
                  '" title=' +
                  _0x399816 +
                  '>' +
                  morelink +
                  '</a>'
              ),
            $(this)
              .parent()
              .addClass('rL')
              .each(function () {
                $(this)
                  .find('.lazyload')
                  .each(function () {
                    $(this)
                      .attr('data-src', function (_0x507a00, _0x1ddeb7) {
                        return _0x1ddeb7.replace(
                          '/default.jpg',
                          '/maxresdefault.jpg'
                        )
                      })
                      .attr('data-src', function (_0x346872, _0x580ff5) {
                        return _0x580ff5.replace('s72-c', 's1600')
                      })
                  })
              }))
        })
      },
    })
})
$('.rB .widget-content').each(function () {
  var _0x676965 = $(this).find('span').attr('label'),
    _0x33f489 = $(this).find('span').attr('num'),
    _0x3bcf73 = $(this).parent().attr('id'),
    _0x3620a1 = $(this).find('span').attr('type')
  _0x3620a1.match('rG') &&
    $.ajax({
      url:
        '/feeds/posts/default/-/' +
        _0x676965 +
        '?alt=json-in-script&max-results=3',
      type: 'get',
      dataType: 'jsonp',
      success: function (_0x3b85d7) {
        var _0x50334b = '',
          _0x572b85 = '<ul>'
        for (
          var _0xccac48 = 0;
          _0xccac48 < _0x3b85d7.feed.entry.length;
          _0xccac48++
        ) {
          for (
            var _0x2a9e44 = 0;
            _0x2a9e44 < _0x3b85d7.feed.entry[_0xccac48].link.length;
            _0x2a9e44++
          ) {
            if (
              _0x3b85d7.feed.entry[_0xccac48].link[_0x2a9e44].rel == 'alternate'
            ) {
              _0x50334b = _0x3b85d7.feed.entry[_0xccac48].link[_0x2a9e44].href
              break
            }
          }
          var _0x49d36f = _0x3b85d7.feed.entry[_0xccac48].title['$t'],
            _0x39fb5b = _0x3b85d7.feed.entry[_0xccac48].category[0].term,
            _0x315f9d = _0x3b85d7.feed.entry[_0xccac48].author[0].name['$t'],
            _0x2d4d67 = _0x3b85d7.feed.entry[_0xccac48].published['$t'],
            _0x5521eb = _0x2d4d67.substring(0, 4),
            _0x273a35 = _0x2d4d67.substring(5, 7),
            _0x3406b9 = _0x2d4d67.substring(8, 10),
            _0x19738b =
              mNTH[parseInt(_0x273a35, 10)] +
              ' ' +
              _0x3406b9 +
              ', ' +
              _0x5521eb,
            _0x92c1ee = _0x3b85d7.feed.entry[_0xccac48].content['$t'],
            _0x506a9a = $('<div>').html(_0x92c1ee)
          if (_0x92c1ee.indexOf('//www.youtube.com/embed/') > -1) {
            var _0x934d52 = _0x3b85d7.feed.entry[_0xccac48][
                'media$thumbnail'
              ].url
                .replace('/default.jpg', '/maxresdefault.jpg')
                .replace(
                  /s72-(c|.*?-c)/,
                  'w' + widthSize + '-h' + heightSize + ''
                ),
              _0x10ab81 = _0x934d52
          } else {
            if (_0x92c1ee.indexOf('<img') > -1) {
              var _0x2f112b = _0x506a9a
                  .find('img:first')
                  .attr('src')
                  .replace('/default.jpg', '/maxresdefault.jpg')
                  .replace(
                    /s72-(c|.*?-c)/,
                    'w' + widthSize + '-h' + heightSize + ''
                  ),
                _0x10ab81 = _0x2f112b
            } else {
              var _0x10ab81 = noIMG
            }
          }
          _0xccac48 == 0
            ? (_0x572b85 +=
                '<div class="rect-left"><div class="tHimage"><div class="tHimg"><a href="' +
                _0x50334b +
                '"><img class="lazyload" data-sizes="auto" data-src="' +
                _0x10ab81 +
                '" src="' +
                imglazy +
                '" data-sizes="auto" width="' +
                widthSize +
                '" height="' +
                heightSize +
                '" alt="' +
                _0x49d36f +
                '" title="' +
                _0x49d36f +
                '"></a><span class="post-tag"><a href="/search/label/' +
                _0x39fb5b +
                '?&max-results=8">' +
                _0x39fb5b +
                '</a></span></div></div><div class="rcinfo"><h2 class="rect-title"><a href="' +
                _0x50334b +
                '" title="' +
                _0x49d36f +
                '">' +
                _0x49d36f +
                '</a></h2><div class="post-meta">' +
                _0x19738b +
                '</div></div></div><div class="rect-right">')
            : (_0x572b85 +=
                '<li><div class="tHimage"><div class="tHimg"><a href="' +
                _0x50334b +
                '"><img class="lazyload" data-sizes="auto" data-src="' +
                _0x10ab81 +
                '" src="' +
                imglazy +
                '" data-sizes="auto" width="' +
                widthSize +
                '" height="' +
                heightSize +
                '" alt="' +
                _0x49d36f +
                '" title="' +
                _0x49d36f +
                '"></a></div></div><div class="rcinfo"><h2 class="rect-title"><a href="' +
                _0x50334b +
                '" title="' +
                _0x49d36f +
                '">' +
                _0x49d36f +
                '</a></h2><div class="post-meta"><span class="recent-date">' +
                _0x19738b +
                '</span></div></div></li>')
        }
        _0x572b85 += '</div></ul>'
        $('.rB .widget-content').each(function () {
          var _0x4944cc = $(this).parent().attr('id')
          _0x4944cc == _0x3bcf73 &&
            ($(this).html(_0x572b85),
            $(this).parent().addClass('rG'),
            ($(this).prev('h3').wrap('<div class="widget-title"></div>'),
            $(this)
              .prev('.widget-title')
              .append(
                '<a class="more-link" href="/search/label/' +
                  _0x39fb5b +
                  '?&max-results=8" title=' +
                  _0x39fb5b +
                  '>' +
                  morelink +
                  '</a>'
              ),
            $(this)
              .find('.lazyload')
              .each(function () {
                $(this)
                  .attr('data-src', function (_0x367d4d, _0x1dbd4b) {
                    return _0x1dbd4b.replace('/default.jpg', '/sddefault.jpg')
                  })
                  .attr('data-src', function (_0xf3625c, _0x48a691) {
                    return _0x48a691.replace('s72-c', 's1600')
                  })
              })))
        })
      },
    })
})
$('.rB .widget-content').each(function () {
  var _0x46fe39 = $(this).find('span').attr('label'),
    _0x1c576f = $(this).find('span').attr('num'),
    _0x55a529 = ($(this).prev('h3').text(), $(this).parent().attr('id')),
    _0x40b7c8 = $(this).find('span').attr('type')
  _0x40b7c8.match('rM') &&
    $.ajax({
      url:
        '/feeds/posts/default/-/' +
        _0x46fe39 +
        '?alt=json-in-script&max-results=4',
      type: 'get',
      dataType: 'jsonp',
      success: function (_0x2444ef) {
        for (
          var _0x5368ac = '', _0x415a5a = "<ul class='gD'>", _0x389368 = 0;
          _0x389368 < _0x2444ef.feed.entry.length;
          _0x389368++
        ) {
          for (
            var _0x4740fb = 0;
            _0x4740fb < _0x2444ef.feed.entry[_0x389368].link.length;
            _0x4740fb++
          ) {
            if (
              'alternate' == _0x2444ef.feed.entry[_0x389368].link[_0x4740fb].rel
            ) {
              _0x5368ac = _0x2444ef.feed.entry[_0x389368].link[_0x4740fb].href
              break
            }
          }
          var _0x47830e = _0x2444ef.feed.entry[_0x389368].title['$t'],
            _0x70c258 =
              (_0x2444ef.feed.entry[_0x389368].category[0].term,
              _0x2444ef.feed.entry[_0x389368].content['$t']),
            _0x4d32ba = _0x2444ef.feed.entry[_0x389368].author[0].name['$t'],
            _0x53625a = _0x2444ef.feed.entry[_0x389368].published['$t'],
            _0x44c3d3 = _0x53625a.substring(0, 4),
            _0x500f05 = _0x53625a.substring(5, 7),
            _0x58ec3d = _0x53625a.substring(8, 10),
            _0x427b21 =
              mNTH[parseInt(_0x500f05, 10)] +
              ' ' +
              _0x58ec3d +
              ', ' +
              _0x44c3d3,
            _0x29e3c6 = $('<div>').html(_0x70c258),
            _0x3e1b5c = _0x70c258.replace(/<\S[^>]*>/g, '')
          if (
            (75 < _0x3e1b5c.length &&
              (_0x3e1b5c = _0x3e1b5c.substring(0, 75) + '...'),
            -1 < _0x70c258.indexOf('//www.youtube.com/embed/'))
          ) {
            var _0x23c8b1 = _0x2444ef.feed.entry[_0x389368][
              'media$thumbnail'
            ].url
              .replace('/default.jpg', '/maxresdefault.jpg')
              .replace(
                /s72-(c|.*?-c)/,
                'w' + widthSize + '-h' + heightSize + ''
              )
          } else {
            _0x23c8b1 =
              -1 < _0x70c258.indexOf('<img')
                ? _0x29e3c6
                    .find('img:first')
                    .attr('src')
                    .replace(
                      /s72-(c|.*?-c)/,
                      'w' + widthSize + '-h' + heightSize + ''
                    )
                : noIMG
          }
          _0x415a5a +=
            '<li class="gR"><div class="tHimage"><div class="tHimg"><a href="' +
            _0x5368ac +
            '" title="' +
            _0x47830e +
            '"><img class="lazyload" alt="' +
            _0x47830e +
            '" data-src="' +
            _0x23c8b1 +
            '" src="' +
            imglazy +
            '" data-sizes="auto" width="' +
            widthSize +
            '" height="' +
            heightSize +
            '"/></a><span class="post-tag"><a href="/search/label/' +
            _0x46fe39 +
            '?&amp;max-results=8" title="' +
            _0x46fe39 +
            '">' +
            _0x46fe39 +
            '</a></span></div></div><div class="rcinfo"><h2 class="post-title"><a href="' +
            _0x5368ac +
            '" title="' +
            _0x47830e +
            '">' +
            _0x47830e +
            '</a></h2><p class="pStNpet opacity">' +
            _0x3e1b5c +
            '</p><div class="post-meta"><time class="post-date">' +
            _0x427b21 +
            '</time><div class="jump-link"><a href="' +
            _0x5368ac +
            '" title="' +
            _0x47830e +
            '">' +
            more +
            '</a></div></div></div></li>'
        }
        _0x415a5a += '</ul>'
        $('.rB .widget-content').each(function () {
          $(this).parent().attr('id') == _0x55a529 &&
            ($(this).html(_0x415a5a),
            $(this).prev('h3').wrap('<div class="widget-title"></div>'),
            $(this)
              .prev('.widget-title')
              .append(
                '<a class="more-link" href="/search/label/' +
                  _0x46fe39 +
                  '" title=' +
                  _0x46fe39 +
                  '>' +
                  morelink +
                  '</a>'
              ),
            $(this)
              .parent()
              .addClass('rM')
              .each(function () {
                $(this)
                  .find('.lazyload')
                  .each(function () {
                    $(this)
                      .attr('data-src', function (_0xcb50db, _0xa31752) {
                        return _0xa31752.replace(
                          '/default.jpg',
                          '/maxresdefault.jpg'
                        )
                      })
                      .attr('data-src', function (_0x51d249, _0x3d1f49) {
                        return _0x3d1f49.replace('s72-c', 's1600')
                      })
                  })
              }))
        })
      },
    })
})
var myCode1 = {
    _keyStr:
      'AQZSWXDECFRVGTBHYNJUMKILOPaqzswxdecfrvgtbhynjumkilop0567891234+/=',
    desimple: function (_0x4c3836) {
      var _0x21203a = '',
        _0x1c7700,
        _0x37667f,
        _0x3997c0,
        _0x32640a,
        _0x17493d,
        _0xbc4304,
        _0x304d48,
        _0x917158 = 0
      _0x4c3836 = _0x4c3836.replace(/[^A-Za-z0-9\+\/\=]/g, '')
      while (_0x917158 < _0x4c3836.length) {
        _0x32640a = this['_keyStr'].indexOf(_0x4c3836.charAt(_0x917158++))
        _0x17493d = this['_keyStr'].indexOf(_0x4c3836.charAt(_0x917158++))
        _0xbc4304 = this['_keyStr'].indexOf(_0x4c3836.charAt(_0x917158++))
        _0x304d48 = this['_keyStr'].indexOf(_0x4c3836.charAt(_0x917158++))
        _0x1c7700 = (_0x32640a << 2) | (_0x17493d >> 4)
        _0x37667f = ((_0x17493d & 15) << 4) | (_0xbc4304 >> 2)
        _0x3997c0 = ((_0xbc4304 & 3) << 6) | _0x304d48
        _0x21203a = _0x21203a + String.fromCharCode(_0x1c7700)
        _0xbc4304 != 64 &&
          (_0x21203a = _0x21203a + String.fromCharCode(_0x37667f))
        _0x304d48 != 64 &&
          (_0x21203a = _0x21203a + String.fromCharCode(_0x3997c0))
      }
      _0x21203a = myCode['_utf8_desimple'](_0x21203a)
      return _0x21203a
    },
    _utf8_desimple: function (_0x122a31) {
      var _0x2cd0e6 = '',
        _0x4b66dc = 0,
        _0x5cfb15 = (c1 = c2 = 0)
      while (_0x4b66dc < _0x122a31.length) {
        _0x5cfb15 = _0x122a31.charCodeAt(_0x4b66dc)
        if (_0x5cfb15 < 128) {
          _0x2cd0e6 += String.fromCharCode(_0x5cfb15)
          _0x4b66dc++
        } else {
          _0x5cfb15 > 191 && _0x5cfb15 < 224
            ? ((c2 = _0x122a31.charCodeAt(_0x4b66dc + 1)),
              (_0x2cd0e6 += String.fromCharCode(
                ((_0x5cfb15 & 31) << 6) | (c2 & 63)
              )),
              (_0x4b66dc += 2))
            : ((c2 = _0x122a31.charCodeAt(_0x4b66dc + 1)),
              (c3 = _0x122a31.charCodeAt(_0x4b66dc + 2)),
              (_0x2cd0e6 += String.fromCharCode(
                ((_0x5cfb15 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
              )),
              (_0x4b66dc += 3))
        }
      }
      return _0x2cd0e6
    },
  },
  j = window.location.href,
  k = new URL(j),
  urlHome = k.origin,
  urlPathname = k.pathname
$.ajax({
  url: '/feeds/posts/summary/?alt=json',
  dataType: 'json',
  success: generator,
})
function generator(_0x370dd8) {
  var _0x4da5f5 = _0x370dd8.feed.id['$t'],
    _0x1851a = _0x4da5f5.split('-'),
    _0x138a15 = _0x1851a[1],
    _0x490f94 = _0x138a15
  var _0x24ea01 = $('.license-code').text()
  console.log(_0x490f94)
  console.log(_0x24ea01)
  var _0x1ed1df =
    "<style>#key-wrapper{position:fixed;z-index:999;top:0;margin:0 auto;width:100%;bottom:0;background:0;height:100vh}#key-content{height:100%;max-width:800px;width:100%;padding:0 20px;display:flex;flex-direction:column;justify-content:center;align-items:center;color:#000;position:relative;text-align:center;z-index:10;margin:0 auto}#key-wrapper h4{font-size:20px}#waiting-time{color:#fff;background:#559164;width:35px;height:35px;line-height:35px;margin-top:20px;border-radius:50px}#lc{width:72px;height:auto;margin-top:30px;}#lc img{width:100%;height:auto}#key-content p{padding:10px 0}#key-content ul{list-style:none}#key-content ul li{padding:5px 0}#key-content ul li b{color:#227c2f}</style><div id='key-wrapper'><div id='key-content'><h4>Activate Templates</h4><div id='lc'><img alt='Goomsite.Net' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgA1NT8a4cnrRFVvViKAkic6AHHWXUfQByUoOs96fiNVSnWelrP6VdoQDDeDJSwY9FQLwYMgfZLPQu92T7y8Dsb991eDsovjGpILj_OeRRFxUbadqe987Ld3i3W2zjHlToGpd6Ocj3h0dguO_zRQF7VRCxvBMuKHKTqznWCsA1uCAiG0aGR8zd38ziZ/s1600/lokeds.png' height='512' width='512'></img></div><p><b>English</b><br/>Contact Admin goomsite.net to get a license</p><p><b>Indonesia</b><br/>Hubungi Admin goomsite.net untuk mendapatkan lisensi</p><ul><li>Email: <b>goomsite@gmail.com</b></li><li>WhatsApp: <b>+6281241105658</b></li></ul><div id='waiting-time'></div></div></div></div>"
  if (_0x24ea01 == '') {
    $(document.body).html(_0x1ed1df)
  } else {
    var _0x3b362e = myCode.desimple(_0x24ea01)
    console.log(_0x3b362e)
    if (_0x490f94 != _0x3b362e) {
      $(document.body).html(_0x1ed1df)
      var _0x375491 = 30,
        _0x5148fa = setInterval(function _0x102e50() {
          _0x375491 -= 1
          $('#waiting-time').html(_0x375491)
          if (_0x375491 <= 0) {
            clearInterval(_0x5148fa)
            var _0x43f9de = myCode.desimple(
              'aEN0zEG1Vo47s7zmP64kqLThsDMmqgK0Vi=='
            )
            window.location.href = _0x43f9de
          }
        }, 1000)
    }
  }
}

/*]]>*/
</b:if>
 <b:if cond='data:view.isMultipleItems'>
/*<![CDATA[*/
!(function () {
  function _0x40b1b5(_0x2dbf10, _0x1b270f) {
    var _0x3c2aed
    null !== _0x2dbf10 &&
      ((_0x3c2aed = _0x2dbf10.innerHTML.match(
        /<div.class=.lbp.[\s\S]*?<\/div>/g
      )),
      (_0x1b270f.innerHTML = _0x3c2aed))
  }
  var _0x5ec439
  _0x5ec439 = _0x40b1b5
  ;(function () {
    for (
      var _0x303ed2,
        _0x4ae4df,
        _0x2790f1 = document.querySelectorAll('.mediaproduct'),
        _0x5ad847 = 0;
      _0x5ad847 < _0x2790f1.length;
      _0x5ad847++
    ) {
      _0x303ed2 = _0x2790f1[_0x5ad847].querySelector('.sShp')
      _0x40b1b5(
        (_0x4ae4df = _0x2790f1[_0x5ad847].querySelector('.Psj')),
        _0x303ed2
      )
    }
  })()
})()
var myCode1 = {
    _keyStr:
      'AQZSWXDECFRVGTBHYNJUMKILOPaqzswxdecfrvgtbhynjumkilop0567891234+/=',
    desimple: function (_0x2f989) {
      var _0x57d9a6 = ''
      var _0xd7712e,
        _0x544e47,
        _0x275668,
        _0x2b26ed,
        _0x25f45d,
        _0x586875,
        _0x6d8a3,
        _0x9581ef = 0
      _0x2f989 = _0x2f989.replace(/[^A-Za-z0-9\+\/\=]/g, '')
      while (_0x9581ef < _0x2f989.length) {
        _0x2b26ed = this['_keyStr'].indexOf(_0x2f989.charAt(_0x9581ef++))
        _0x25f45d = this['_keyStr'].indexOf(_0x2f989.charAt(_0x9581ef++))
        _0x586875 = this['_keyStr'].indexOf(_0x2f989.charAt(_0x9581ef++))
        _0x6d8a3 = this['_keyStr'].indexOf(_0x2f989.charAt(_0x9581ef++))
        _0xd7712e = (_0x2b26ed << 2) | (_0x25f45d >> 4)
        _0x544e47 = ((_0x25f45d & 15) << 4) | (_0x586875 >> 2)
        _0x275668 = ((_0x586875 & 3) << 6) | _0x6d8a3
        _0x57d9a6 = _0x57d9a6 + String.fromCharCode(_0xd7712e)
        _0x586875 != 64 &&
          (_0x57d9a6 = _0x57d9a6 + String.fromCharCode(_0x544e47))
        _0x6d8a3 != 64 &&
          (_0x57d9a6 = _0x57d9a6 + String.fromCharCode(_0x275668))
      }
      return (_0x57d9a6 = myCode['_utf8_desimple'](_0x57d9a6)), _0x57d9a6
    },
    _utf8_desimple: function (_0x137487) {
      var _0x45fd8f = '',
        _0x46eb65 = 0,
        _0x4ebec7 = (c1 = c2 = 0)
      while (_0x46eb65 < _0x137487.length) {
        _0x4ebec7 = _0x137487.charCodeAt(_0x46eb65)
        if (_0x4ebec7 < 128) {
          _0x45fd8f += String.fromCharCode(_0x4ebec7)
          _0x46eb65++
        } else {
          _0x4ebec7 > 191 && _0x4ebec7 < 224
            ? ((c2 = _0x137487.charCodeAt(_0x46eb65 + 1)),
              (_0x45fd8f += String.fromCharCode(
                ((_0x4ebec7 & 31) << 6) | (c2 & 63)
              )),
              (_0x46eb65 += 2))
            : ((c2 = _0x137487.charCodeAt(_0x46eb65 + 1)),
              (c3 = _0x137487.charCodeAt(_0x46eb65 + 2)),
              (_0x45fd8f += String.fromCharCode(
                ((_0x4ebec7 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
              )),
              (_0x46eb65 += 3))
        }
      }
      return _0x45fd8f
    },
  },
  j = window.location.href,
  k = new URL(j),
  urlHome = k.origin,
  urlPathname = k.pathname
$.ajax({
  url: '/feeds/posts/summary/?alt=json',
  dataType: 'json',
  success: generator,
})
function generator(_0x5d5140) {
  var _0x5efec9 = _0x5d5140.feed.id['$t'],
    _0x11f666 = _0x5efec9.split('-'),
    _0x3c1deb = _0x11f666[1],
    _0x3323d4 = _0x3c1deb,
    _0x79e997 = $('.license-code').text()
  console.log(_0x3323d4)
  console.log(_0x79e997)
  var _0x1fcf06 =
    "<style>#key-wrapper{position:fixed;z-index:999;top:0;margin:0 auto;width:100%;bottom:0;background:0;height:100vh}#key-content{height:100%;max-width:800px;width:100%;padding:0 20px;display:flex;flex-direction:column;justify-content:center;align-items:center;color:#000;position:relative;text-align:center;z-index:10;margin:0 auto}#key-wrapper h4{font-size:20px}#waiting-time{color:#fff;background:#559164;width:35px;height:35px;line-height:35px;margin-top:20px;border-radius:50px}#lc{width:72px;height:auto;margin-top:30px;}#lc img{width:100%;height:auto}#key-content p{padding:10px 0}#key-content ul{list-style:none}#key-content ul li{padding:5px 0}#key-content ul li b{color:#227c2f}</style><div id='key-wrapper'><div id='key-content'><h4>Activate Templates</h4><div id='lc'><img alt='Goomsite.Net' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgA1NT8a4cnrRFVvViKAkic6AHHWXUfQByUoOs96fiNVSnWelrP6VdoQDDeDJSwY9FQLwYMgfZLPQu92T7y8Dsb991eDsovjGpILj_OeRRFxUbadqe987Ld3i3W2zjHlToGpd6Ocj3h0dguO_zRQF7VRCxvBMuKHKTqznWCsA1uCAiG0aGR8zd38ziZ/s1600/lokeds.png' height='512' width='512'></img></div><p><b>English</b><br/>Contact Admin goomsite.net to get a license</p><p><b>Indonesia</b><br/>Hubungi Admin goomsite.net untuk mendapatkan lisensi</p><ul><li>Email: <b>goomsite@gmail.com</b></li><li>WhatsApp: <b>+6281241105658</b></li></ul><div id='waiting-time'></div></div></div></div>"
  if (_0x79e997 == '') {
    $(document.body).html(_0x1fcf06)
  } else {
    var _0x2d1376 = myCode.desimple(_0x79e997)
    console.log(_0x2d1376)
    if (_0x3323d4 != _0x2d1376) {
      $(document.body).html(_0x1fcf06)
      var _0x1f3a5e = 30,
        _0x90dc6b = setInterval(function _0x4bf205() {
          _0x1f3a5e -= 1
          $('#waiting-time').html(_0x1f3a5e)
          if (_0x1f3a5e <= 0) {
            clearInterval(_0x90dc6b)
            var _0x2f5eda = myCode.desimple(
              'aEN0zEG1Vo47s7zmP64kqLThsDMmqgK0Vi=='
            )
            window.location.href = _0x2f5eda
          }
        }, 1000)
    }
  }
}