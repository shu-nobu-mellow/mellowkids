/* site.js — メロウキッズ 共通ヘッダー / フッターの生成 */
(function () {
  /* ---- 構造化データ (LocalBusiness / ChildCare) ---- */
  /* ★ドメイン確定後、SITE を実ドメインに置き換えてください */
  var SITE = 'https://example.com';
  var ld = {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    "name": "メロウキッズ",
    "description": "奄美市永田町の児童発達支援事業所。作業療法士・公認心理師・保育士が在籍し、1名〜3名までの個別・小集団支援を行っています。",
    "url": SITE + "/",
    "logo": SITE + "/logo-full.png",
    "image": SITE + "/og-image.png",
    "telephone": "0997-58-5511",
    "faxNumber": "0997-58-5544",
    "address": {
      "@type": "PostalAddress",
      "postalCode": "894-0023",
      "addressRegion": "鹿児島県",
      "addressLocality": "奄美市",
      "streetAddress": "名瀬永田町14-1",
      "addressCountry": "JP"
    },
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:30",
      "closes": "17:00"
    }],
    "parentOrganization": {
      "@type": "Organization",
      "name": "Mellow Amami 合同会社",
      "url": "https://mellow-amami.jp"
    },
    "sameAs": ["https://www.instagram.com/mellow__kids/"]
  };
  var ldEl = document.createElement('script');
  ldEl.type = 'application/ld+json';
  ldEl.textContent = JSON.stringify(ld);
  document.head.appendChild(ldEl);

  /* ---- パンくずの構造化データ (BreadcrumbList) ---- */
  var crumbOl = document.querySelector('.crumbs ol');
  if (crumbOl) {
    var items = [];
    var lis = crumbOl.querySelectorAll('li');
    for (var i = 0; i < lis.length; i++) {
      var a = lis[i].querySelector('a');
      var item = {
        "@type": "ListItem",
        "position": i + 1,
        "name": (a ? a.textContent : lis[i].textContent).trim()
      };
      if (a) { item.item = SITE + '/' + a.getAttribute('href'); }
      items.push(item);
    }
    var bc = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items
    };
    var bcEl = document.createElement('script');
    bcEl.type = 'application/ld+json';
    bcEl.textContent = JSON.stringify(bc);
    document.head.appendChild(bcEl);
  }
  var NAV = [
    { key: 'about',    label: '事業所について', href: 'about.html' },
    { key: 'program',  label: '療育プログラム', href: 'program.html' },
    { key: 'flow',     label: 'ご利用の流れ',   href: 'flow.html' },
    { key: 'staff',    label: 'スタッフ',       href: 'staff.html' },
    { key: 'facility', label: '施設・設備',     href: 'facility.html' },
    { key: 'access',   label: 'アクセス',       href: 'access.html' },
    { key: 'news',     label: 'お知らせ',       href: 'news.html' },
  ];
  var current = document.body.getAttribute('data-page') || 'home';

  var MARK = '<span class="mark"><img src="logo-mark.png" alt="" width="110" height="87"></span>';
  var MARK_W = '<span class="mark"><img src="logo-mark-white.png" alt="" width="110" height="87"></span>';

  var brand = '<a class="brand" href="index.html">' + MARK
    + '<span class="name"><img class="wm-img" src="wm-solid-blue.png" alt="メロウキッズ ホーム"><small>MELLOW KIDS</small></span></a>';

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
      + '<svg class="ic" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h18v12H7l-4 4z"/></svg>見学・体験予約</a></div>'
      + '<button class="nav-toggle" aria-label="メニュー" aria-expanded="false" aria-controls="mobile-nav"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>'
      + '</div>'
      + '<div class="wrap"><nav class="mobile-nav" id="mobile-nav" aria-label="メニュー">' + navLinks('')
      + + '<a class="btn btn--cta" href="contact.html">見学・体験を予約する</a></nav></div>';

    var toggle = header.querySelector('.nav-toggle');
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---- footer ---- */
  var footer = document.getElementById('site-footer');
  if (footer) {
    footer.className = 'site-footer';
    footer.innerHTML =
      '<div class="wrap top">'
      + '<div><div class="brand">' + MARK_W
      + '<span class="name"><img class="wm-img" src="wm-solid-white.png" alt="メロウキッズ"><small>MELLOW KIDS</small></span></div>'
      + '<p class="mt-16">奄美市永田町の児童発達支援事業所。<br>1名〜3名までの個別・小集団支援で、<br>子育てをもっと豊かに。利用児募集中（1〜6歳）。</p>'
      + '<div class="sns">'
      + '<a href="https://www.instagram.com/mellow__kids/" target="_blank" rel="noopener" aria-label="Instagram">'
      + '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4.2"></circle><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none"></circle></svg></a>'
      /* X・Facebookはアカウント確定後にURLを設定して復活させる
      + '<a href="https://x.com/＜アカウント＞" ...>'
      + '<a href="https://www.facebook.com/＜アカウント＞" ...>' */
      + '</div></div>'
      + '<div><h4>サービス</h4><div class="foot-links">'
      + '<a href="about.html">事業所について</a><a href="program.html">療育プログラム</a>'
      + '<a href="flow.html">ご利用の流れ</a><a href="flow.html#price">料金・対象</a></div></div>'
      + '<div><h4>事業所情報</h4><div class="foot-links">'
      + '<a href="staff.html">スタッフ紹介</a><a href="facility.html">施設・設備</a>'
      + '<a href="access.html">アクセス</a><a href="news.html">お知らせ・ブログ</a></div></div>'
      + '<div><h4>お問い合わせ</h4><div class="foot-links">'
      + '<a href="contact.html">見学・体験予約</a><a href="tel:0997-58-5511">TEL 0997-58-5511</a>'
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
      + '<a class="btn btn--ghost" href="tel:0997-58-5511">電話する</a>';
    document.body.appendChild(mcta);
    document.body.classList.add('has-mcta');
  }
})();
