localStorage.getItem('mode') === 'darkmode'
  ? document.querySelector('body').classList.add('darkmode')
  : document.querySelector('body').classList.remove('darkmode')
cookieOptions = {
  msg: 'This site uses cookies to help deliver services. By using this site, you agree to the use of cookies.',
  link: 'https://www.blogger.com/go/blogspot-cookies',
  close: 'Got it!',
  learn: 'Learn More',
}
$(document).ready(function () {
  $('#sICN').on('click', function () {
    $('#nSch').slideToggle(250)
  })
  $('#sICN').click(function () {
    $(this).toggleClass('active')
  })
})
function scrollToTop() {
  verticalOffset = 'undefined' != typeof verticalOffset ? verticalOffset : 0
  element = $('body')
  offset = element.offset()
  offsetTop = offset.top
  $('html, body').animate({ scrollTop: offsetTop }, 600, 'linear')
}
$(function () {
  $(document).on('scroll', function () {
    100 < $(window).scrollTop()
      ? $('.backtop').addClass('show')
      : $('.backtop').removeClass('show')
  })
  $('.backtop').on('click', scrollToTop)
})

/*! lazysizes - v5.3.2 */
!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,i=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,o=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],a={},G=Array.prototype.forEach,J=function(e,t){if(!a[t]){a[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return a[t].test(e[$]("class")||"")&&a[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var a;if(a=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(a," "))}},V=function(t,a,e){var i=e?P:"removeEventListener";if(e){V(t,a)}r.forEach(function(e){t[i](e,a)})},X=function(e,t,a,i,r){var n=D.createEvent("Event");if(!a){a={}}a.instance=k;n.initEvent(t,!i,!r);n.detail=a;e.dispatchEvent(n);return n},Y=function(e,t){var a;if(!i&&(a=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}a({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,a){a=a||e.offsetWidth;while(a<H.minSize&&t&&!e._lazysizesWidth){a=t.offsetWidth;t=t.parentNode}return a},ee=function(){var a,i;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;a=true;i=false;while(e.length){e.shift()()}a=false};var e=function(e,t){if(a&&!t){e.apply(this,arguments)}else{n.push(e);if(!i){i=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(a,e){return e?function(){ee(a)}:function(){var e=this;var t=arguments;ee(function(){a.apply(e,t)})}},ae=function(e){var a;var i=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){a=false;i=f.now();e()};var s=o&&n>49?function(){o(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(a){return}a=true;t=r-(f.now()-i);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ie=function(e){var t,a;var i=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-a;if(e<i){I(n,i-e)}else{(o||r)(r)}};return function(){a=f.now();if(!t){t=I(n,i)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var M=0;var N=-1;var L=function(e){M--;if(!e||M<0||!e.target){M=0}};var x=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var W=function(e,t){var a;var i=e;var r=x(e);g-=t;b+=t;p-=t;C+=t;while(r&&(i=i.offsetParent)&&i!=D.body&&i!=O){r=(Z(i,"opacity")||1)>0;if(r&&Z(i,"overflow")!="visible"){a=i.getBoundingClientRect();r=C>a.left&&p<a.right&&b>a.top-1&&g<a.bottom+1}}return r};var t=function(){var e,t,a,i,r,n,s,o,l,u,f,c;var d=k.elements;if((h=H.loadMode)&&M<8&&(e=d.length)){t=0;N++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(o=d[t][$]("data-expand"))||!(n=o*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&M<1&&N>2&&h>2&&!D.hidden){w=f;N=0}else if(h>1&&N>1&&M<6){w=u}else{w=_}}if(l!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;l=n}a=d[t].getBoundingClientRect();if((b=a.bottom)>=s&&(g=a.top)<=z&&(C=a.right)>=s*c&&(p=a.left)<=y&&(b||C||p||g)&&(H.loadHidden||x(d[t]))&&(m&&M<3&&!o&&(h<3||N<4)||W(d[t],n))){R(d[t]);r=true;if(M>9){break}}else if(!r&&m&&!i&&M<4&&N<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!o&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){i=v[0]||d[t]}}if(i&&!r){R(i)}}};var a=ae(t);var S=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}L(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,B);X(t,"lazyloaded")};var i=te(S);var B=function(e){i({target:e.target})};var T=function(e,t){var a=e.getAttribute("data-load-mode")||H.iframeLoadMode;if(a==0){e.contentWindow.location.replace(t)}else if(a==1){e.src=t}};var F=function(e){var t;var a=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(a){e.setAttribute("srcset",a)}};var s=te(function(t,e,a,i,r){var n,s,o,l,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(i){if(a){K(t,H.autosizesClass)}else{t.setAttribute("sizes",i)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){o=t.parentNode;l=o&&j.test(o.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||l);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(L,2500);V(t,B,true)}if(l){G.call(o.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!l){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||l)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,H.fastLoadedClass)}S(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){M--}},true)});var R=function(e){if(e._lazyRace){return}var t;var a=n.test(e.nodeName);var i=a&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=i=="auto";if((r||!m)&&a&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;M++;s(e,t,r,i,a)};var r=ie(function(){H.loadMode=3;a()});var o=function(){if(H.loadMode==3){H.loadMode=2}r()};var l=function(){if(m){return}if(f.now()-e<999){I(l,999);return}m=true;H.loadMode=3;a();q("scroll",o,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",a,true);q("resize",a,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(a).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",a,true);O[P]("DOMAttrModified",a,true);setInterval(a,999)}q("hashchange",a,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,a,true)});if(/d$|^c/.test(D.readyState)){l()}else{q("load",l);D[P]("DOMContentLoaded",a);I(l,2e4)}if(k.elements.length){t();ee._lsFlush()}else{a()}},checkElems:a,unveil:R,_aLSL:o}}(),re=function(){var a;var n=te(function(e,t,a,i){var r,n,s;e._lazysizesWidth=i;i+="px";e.setAttribute("sizes",i);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",i)}}if(!a.detail.dataAttr){Y(e,a.detail)}});var i=function(e,t,a){var i;var r=e.parentNode;if(r){a=s(e,r,a);i=X(e,"lazybeforesizes",{width:a,dataAttr:!!t});if(!i.defaultPrevented){a=i.detail.width;if(a&&a!==e._lazysizesWidth){n(e,r,i,a)}}}};var e=function(){var e;var t=a.length;if(t){e=0;for(;e<t;e++){i(a[e])}}};var t=ie(e);return{_:function(){a=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:i}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});

'use strict'
$(function () {
  $('#main-menu').each(function () {
    for (
      var _0xf96407 = $(this).find('.LinkList ul > li').children('a'),
        _0xcea1bb = _0xf96407.length,
        _0x1260fa = 0;
      _0xcea1bb > _0x1260fa;
      _0x1260fa++
    ) {
      var _0x328a88 = _0xf96407.eq(_0x1260fa),
        _0x166fcb = _0x328a88.text()
      if ('_' !== _0x166fcb.charAt(0)) {
        var _0x26e938 = _0xf96407.eq(_0x1260fa + 1),
          _0x29e937 = _0x26e938.text()
        if ('_' === _0x29e937.charAt(0)) {
          var _0x4013ee = _0x328a88.parent()
          _0x4013ee.append('<ul class="sub-menu m-sub"/>')
        }
      }
      '_' === _0x166fcb.charAt(0) &&
        (_0x328a88.text(_0x166fcb.replace('_', '')),
        _0x328a88.parent().appendTo(_0x4013ee.children('.sub-menu')))
    }
    for (_0x1260fa = 0; _0xcea1bb > _0x1260fa; _0x1260fa++) {
      _0x328a88 = _0xf96407.eq(_0x1260fa)
      _0x166fcb = _0x328a88.text()
      '_' !== _0x166fcb.charAt(0) &&
        ((_0x26e938 = _0xf96407.eq(_0x1260fa + 1)),
        (_0x29e937 = _0x26e938.text()),
        '_' === _0x29e937.charAt(0) &&
          ((_0x4013ee = _0x328a88.parent()),
          _0x4013ee.append('<ul class="sub-menu2 m-sub"/>')))
      '_' === _0x166fcb.charAt(0) &&
        (_0x328a88.text(_0x166fcb.replace('_', '')),
        _0x328a88.parent().appendTo(_0x4013ee.children('.sub-menu2')))
    }
    $('#main-menu ul li ul').parent('li').addClass('has-sub')
    $('#main-menu .widget').addClass('show-menu')
  })
  $('#main-menu-nav').clone().appendTo('.mobile-menu')
  $('.mobile-menu .has-sub').append('<div class="submenu-toggle"/>')
  $('.mobile-menu ul > li a').each(function () {
    var _0x594945 = $(this),
      _0x29e18a = _0x594945.attr('href').trim(),
      _0x20ddc1 = _0x29e18a.toLowerCase(),
      _0x2bd239 = _0x29e18a.split('/'),
      _0x243da4 = _0x2bd239[0]
    _0x20ddc1.match('mega-menu') &&
      _0x594945.attr(
        'href',
        '/search/label/' + _0x243da4 + '?&max-results=' + postPerPage
      )
  })
  $('.slide-menu-toggle').on('click', function () {
    $('body').toggleClass('nav-active')
  })
  $('.mobile-menu ul li .submenu-toggle').on('click', function (_0x1ac944) {
    $(this).parent().hasClass('has-sub') &&
      (_0x1ac944.preventDefault(),
      $(this).parent().hasClass('show')
        ? $(this).parent().removeClass('show').find('> .m-sub').slideToggle(170)
        : $(this).parent().addClass('show').children('.m-sub').slideToggle(170))
  })
})
;('use strict')
function toggleMenu() {
  overlay.classList.toggle('active')
  menu.classList.toggle('active')
}
var overlay = document.querySelector('.overlay'),
  menu = document.querySelector('.menu')
$('.sidebar-dropdown > a').click(function () {
  $('.sidebar-submenu').slideUp(200)
  $(this).parent().hasClass('active')
    ? ($('.sidebar-dropdown').removeClass('active'),
      $(this).parent().removeClass('active'))
    : ($('.sidebar-dropdown').removeClass('active'),
      $(this).next('.sidebar-submenu').slideDown(200),
      $(this).parent().addClass('active'))
})
var noIMG =
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBEI5l29ECHatiE5MRX27V82sM77GzW2xUEIGHX2p4M5pOLwln48tq8WvEIbQ7ez5YkCWUoZnNiD4N6BWuoYhFtk5kLJ0gIm77CUxUh7IKP1WmH7677P486-afvqPE4s6KwSQTUSlaJ9uiRgmS3aQfyZhNJij6oTsXg9ejcurO0x6mTh9JYzurM2hM1To/s16000/noimage.webp',
  imglazy = 'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
  widthSize = '728',
  heightSize = '480',
  npSize = '80',
  tmSize = '300'
$.ajax({
  url: '/feeds/posts/summary/?alt=json',
  dataType: 'json',
  success: generator,
})
function generator(_0x1bb72b) {
  var _0x4553bb = _0x1bb72b.feed.id['$t'],
    _0x5dc323 = _0x4553bb.split('-')
  var _0x533261 = _0x5dc323[1]
  console.log(_0x533261)
}

/*]]>*/
  <b:if cond='data:view.isSingleItem'>
/*<![CDATA[*/
var contentContainer = document.querySelectorAll('.post-body')[0]
const dataTracking = contentContainer.setAttribute(
  'data-tracking-container',
  'true'
)
var headings = contentContainer.querySelectorAll('h1,h2,h3,h4,h5,h6'),
  showtoc = contentContainer.querySelectorAll(
    '.post-body h1,.post-body h2,.post-body h3,.post-body h4,.post-body h5,.post-body h6'
  )
if (headings.length > 1) {
  for (i = 0; i <= showtoc.length - 1; i++) {
    var tocauto = showtoc[i]
    tocauto.insertAdjacentHTML(
      'beforebegin',
      '<div class="toc-auto"><input id="toc-sh" type="checkbox"><label class="toc-title" for="toc-sh">' +
        textToc +
        '</label><div class="toc" id="toc"></div></div>'
    )
    tocatr = document.querySelectorAll('.toc-auto')[0]
    tocatr.setAttribute('data-tracking-container', 'true')
    var toptoc = document.querySelectorAll('.toc-auto')
    ;[].filter
      .call(toptoc, function (_0x3a3470) {
        return ![].some.call(_0x3a3470.attributes, function (_0x2837e1) {
          return /^data-tracking-container/i.test(_0x2837e1.name)
        })
      })
      .forEach(function (_0x1ce4d4) {
        _0x1ce4d4.parentNode.removeChild(_0x1ce4d4)
      })
  }
}
class TableOfContents {
  constructor({ from: _0x2e9d2c, to: _0x2d2248 }) {
    this.fromElement = _0x2e9d2c
    this.toElement = _0x2d2248
    this.headingElements = this.fromElement.querySelectorAll(
      'h1, h2, h3, h4, h5, h6'
    )
    this.tocElement = document.createElement('div')
  }
  ['getMostImportantHeadingLevel']() {
    let _0x406826 = 6
    for (
      let _0x24f2d3 = 0;
      _0x24f2d3 < this.headingElements.length;
      _0x24f2d3++
    ) {
      let _0x53c49d = TableOfContents.getHeadingLevel(
        this.headingElements[_0x24f2d3]
      )
      _0x406826 = _0x53c49d < _0x406826 ? _0x53c49d : _0x406826
    }
    return _0x406826
  }
  static ['generateId'](_0x32128a) {
    return _0x32128a.textContent
      .toLowerCase()
      .replace(/ /g, '_')
      .replace(/\//g, '_')
      .replace(/&lt;/g, '')
      .replace(/&gt;/g, '')
      .replace(/&amp;/g, '')
      .replace(/&amp;nbsp;/g, '')
      .replace(/&nbsp;/g, '')
      .replace(/\xA0/g, '')
      .replace(/[\n\r\f]+/g, '')
      .replace(/[.,\#!$%\^&\*;:{}=\-@`~()<>?"'“+”]/g, '')
  }
  static ['getHeadingLevel'](_0xaef6b7) {
    switch (_0xaef6b7.tagName.toLowerCase()) {
      case 'h1':
        return 1
      case 'h2':
        return 2
      case 'h3':
        return 3
      case 'h4':
        return 4
      case 'h5':
        return 5
      case 'h6':
        return 6
      default:
        return 1
    }
  }
  ['generateToc']() {
    let _0x243ec8 = this.getMostImportantHeadingLevel() - 1,
      _0x129f6f = this.tocElement
    for (
      let _0x353a05 = 0;
      _0x353a05 < this.headingElements.length;
      _0x353a05++
    ) {
      let _0x355d01 = this.headingElements[_0x353a05],
        _0x548de0 = TableOfContents.getHeadingLevel(_0x355d01),
        _0x1d3bf7 = _0x548de0 - _0x243ec8,
        _0x370e8b = document.createElement('a')
      !_0x355d01.id && (_0x355d01.id = TableOfContents.generateId(_0x355d01))
      _0x370e8b.href = '#' + _0x355d01.id
      _0x370e8b.textContent = _0x355d01.textContent
      if (_0x1d3bf7 > 0) {
        for (let _0x2e84fa = 0; _0x2e84fa < _0x1d3bf7; _0x2e84fa++) {
          let _0x5c8381 = document.createElement('ul'),
            _0x531dde = document.createElement('li')
          _0x5c8381.appendChild(_0x531dde)
          _0x129f6f.appendChild(_0x5c8381)
          _0x129f6f = _0x531dde
        }
        _0x129f6f.appendChild(_0x370e8b)
      } else {
        for (let _0x2053b1 = 0; _0x2053b1 < -_0x1d3bf7; _0x2053b1++) {
          _0x129f6f = _0x129f6f.parentNode.parentNode
        }
        let _0x4a52c0 = document.createElement('li')
        _0x4a52c0.appendChild(_0x370e8b)
        _0x129f6f.parentNode.appendChild(_0x4a52c0)
        _0x129f6f = _0x4a52c0
      }
      _0x243ec8 = _0x548de0
    }
    this.toElement.appendChild(this.tocElement.firstChild)
  }
}
document.addEventListener('DOMContentLoaded', () =>
  new TableOfContents({
    from: document.querySelector('.post-body'),
    to: document.querySelector('.toc'),
  }).generateToc()
)
function get_text(_0x52e84d) {
  ret = ''
  var _0x311f26 = _0x52e84d.childNodes.length
  for (var _0x58fefb = 0; _0x58fefb < _0x311f26; _0x58fefb++) {
    var _0x451797 = _0x52e84d.childNodes[_0x58fefb]
    _0x451797.nodeType != 8 &&
      (ret +=
        _0x451797.nodeType != 1 ? _0x451797.nodeValue : get_text(_0x451797))
  }
  return ret
}
var words = get_text(document.querySelector('.post-body')),
  count = words.split(' ').length,
  avg = 185,
  counted = count / avg,
  maincount = Math.round(counted)
document.querySelector('.readTime').innerHTML = maincount + ' min read'
document.getElementById('jp').appendChild(document.getElementById('myjump'))
/*]]>*/
    </b:if>
/*<![CDATA[*/
function newDate() {
  return new Date().getFullYear();
}
document.onload = document.getElementById('autodate').innerHTML = +newDate();
('use strict');
function checkCheckbox() {
  var checkboxes = document.querySelectorAll('.checkbox');
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = localStorage.getItem('mode') === 'darkmode';
  }
}
function darkMode() {
  var mode = localStorage.getItem('mode') === 'darkmode' ? 'light' : 'darkmode';
  localStorage.setItem('mode', mode);
  document.querySelector('body').classList.toggle('darkmode', mode === 'darkmode');
  checkCheckbox();
}
checkCheckbox();
!(function () {
  var dmElements = document.querySelectorAll('.dm');
  if (!_0x489fca.btnDark) {
    for (var i = 0; i < dmElements.length; i++) {
      dmElements[i].parentNode.removeChild(dmElements[i]);
    }
  }
})();
$(function () {
  $('.md-trigger').on('click', function () {
    $('.gsmodal').addClass('gsshow');
  });
  $('.gsclose').on('click', function () {
    $('.gsmodal').removeClass('gsshow');
  });
});
$.ajax({
  url: '/feeds/posts/summary/?alt=json',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    // Here you can handle the data as per your requirement
  }
});
