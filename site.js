/* site.js — メロウキッズ 共通ヘッダー / フッターの生成 */
(function () {
  var NAV = [
    { key: 'about',    label: '事業所について', href: 'about.html' },
    { key: 'program',  label: '療育プログラム', href: 'program.html' },
    { key: 'flow',     label: 'ご利用の流れ',   href: 'flow.html' },
    { key: 'price',    label: '料金・対象',     href: 'price.html' },
    { key: 'staff',    label: 'スタッフ',       href: 'staff.html' },
    { key: 'facility', label: '施設・設備',     href: 'facility.html' },
    { key: 'access',   label: 'アクセス',       href: 'access.html' },
  ];
  var current = document.body.getAttribute('data-page') || 'home';

  var MARK = '<span class="mark"><img src="logo-mark.png" alt="メロウキッズ ロゴ" width="110" height="87"></span>';
  var MARK_W = '<span class="mark"><img src="logo-mark-white.png" alt="メロウキッズ ロゴ" width="110" height="87"></span>';

  var brand = '<a class="brand" href="index.html">' + MARK
    + '<span class="name"><img class="wm-img" src="wm-solid-aqua.png" alt="メロウキッズ"><small>MELLOW KIDS</small></span></a>';

  function navLinks(cls) {
    return NAV.map(function (n) {
      return '<a class="' + (n.key === current ? cls + ' active' : cls) + '" href="' + n.href + '">' + n.label + '</a>';
    }).join('');
  }

  /* ---- header ---- */
  var header = document.getElementById('site-header');
  if (header) {
    header.className = 'site-header';
    header.innerHTML =
      '<div class="wrap bar">' + brand
      + '<nav class="nav">' + navLinks('') + '</nav>'
      + '<div class="header-cta"><a class="btn btn--cta btn--sm" href="contact.html">'
      + '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h18v12H7l-4 4z"/></svg>見学・体験予約</a></div>'
      + '<button class="nav-toggle" aria-label="メニュー"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>'
      + '</div>'
      + '<div class="wrap"><div class="mobile-nav">' + navLinks('')
      + '<a href="news.html">お知らせ・ブログ</a>'
      + '<a class="btn btn--cta" href="contact.html">見学・体験を予約する</a></div></div>';

    var toggle = header.querySelector('.nav-toggle');
    toggle.addEventListener('click', function () { header.classList.toggle('open'); });
  }

  /* ---- footer ---- */
  var footer = document.getElementById('site-footer');
  if (footer) {
    footer.className = 'site-footer';
    footer.innerHTML =
      '<div class="wrap top">'
      + '<div><div class="brand">' + MARK_W
      + '<span class="name"><img class="wm-img" src="wm-solid-white.png" alt="メロウキッズ"><small>MELLOW KIDS</small></span></div>'
      + '<p class="mt-16">奄美市永田町の児童発達支援事業所。<br>1人〜少人数の個別支援で、子育てを<br>もっと豊かに。利用児募集中（1〜5歳）。</p>'
      + '<div class="sns">'
      + '<a href="https://www.instagram.com/mellow__kids/" target="_blank" rel="noopener" aria-label="Instagram">'
      + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4.2"></circle><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none"></circle></svg></a>'
      + '<a href="https://x.com/" target="_blank" rel="noopener" aria-label="X（旧Twitter）">'
      + '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 3h3l-6.6 7.6L21.8 21h-6.1l-4.8-6.2L5.4 21h-3l7-8.1L2.5 3h6.3l4.3 5.7L17.6 3zm-1.1 16.2h1.7L7.9 4.7H6.1l10.4 14.5z"></path></svg></a>'
      + '<a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook">'
      + '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8.5V7c0-.8.2-1.2 1.3-1.2H17V3h-2.6C11.6 3 10.5 4.5 10.5 7v1.5H8.5v3h2V21H14v-9.5h2.5l.4-3H14z"></path></svg></a>'
      + '</div></div>'
      + '<div><h4>サービス</h4><div class="foot-links">'
      + '<a href="about.html">事業所について</a><a href="program.html">療育プログラム</a>'
      + '<a href="flow.html">ご利用の流れ</a><a href="price.html">料金・対象</a></div></div>'
      + '<div><h4>事業所情報</h4><div class="foot-links">'
      + '<a href="staff.html">スタッフ紹介</a><a href="facility.html">施設・設備</a>'
      + '<a href="access.html">アクセス</a><a href="news.html">お知らせ・ブログ</a></div></div>'
      + '<div><h4>お問い合わせ</h4><div class="foot-links">'
      + '<a href="contact.html">見学・体験予約</a><a href="tel:070-3762-6620">TEL 070-3762-6620</a>'
      + '<a href="https://mellow-amami.jp" target="_blank" rel="noopener">運営：Mellow Amami</a></div></div>'
      + '</div>'
      + '<div class="wrap bottom"><span>© ' + new Date().getFullYear() + ' メロウキッズ / Mellow Amami 合同会社</span>'
      + '<span>鹿児島県奄美市名瀬永田町 ／ <a href="privacy.html" style="text-decoration:underline;text-underline-offset:3px">プライバシーポリシー</a></span></div>';
  }

  /* ---- mobile sticky CTA ---- */
  if (current !== 'contact' && current !== '404') {
    var mcta = document.createElement('div');
    mcta.className = 'mobile-cta';
    mcta.innerHTML = '<a class="btn btn--cta" href="contact.html">見学・体験を予約する</a>'
      + '<a class="btn btn--ghost" href="tel:070-3762-6620">電話する</a>';
    document.body.appendChild(mcta);
    document.body.classList.add('has-mcta');
  }
})();
