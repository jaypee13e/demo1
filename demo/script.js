var ICONS = {
  mug: '<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M82 42h12a14 14 0 010 36H82" fill="none" stroke="#1b4b42" stroke-width="9"/><rect x="24" y="30" width="62" height="64" rx="9" fill="#1b4b42"/><circle cx="55" cy="62" r="15" fill="#ee9b8c"/></svg>',
  shirt:
    '<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M40 22l-26 16 10 20 12-6v46h48V52l12 6 10-20-26-16c-4 8-10 11-20 11s-16-3-20-11z" fill="#ee9b8c"/><rect x="46" y="56" width="28" height="20" rx="4" fill="#1b4b42"/></svg>',
  tumbler:
    '<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M36 18h48l-6 88H42z" fill="#1b4b42"/><rect x="32" y="12" width="56" height="10" rx="4" fill="#ee9b8c"/><circle cx="60" cy="58" r="13" fill="#ee9b8c"/></svg>',
  lanyard:
    '<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M36 8l30 60M84 8L54 68" stroke="#ee9b8c" stroke-width="12" fill="none"/><rect x="46" y="66" width="16" height="14" rx="3" fill="#1b4b42"/><rect x="38" y="80" width="32" height="26" rx="5" fill="#1b4b42"/></svg>',
  pin: '<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="46" fill="#1b4b42"/><circle cx="60" cy="60" r="34" fill="#ee9b8c"/><circle cx="60" cy="60" r="14" fill="#fbf8f6"/></svg>',
  banner:
    '<svg viewBox="0 0 120 120" aria-hidden="true"><rect x="8" y="30" width="104" height="60" rx="4" fill="#1b4b42"/><path d="M20 70l22-24 18 18 14-12 26 18z" fill="#ee9b8c"/><g fill="#fbf8f6"><circle cx="14" cy="36" r="2.5"/><circle cx="106" cy="36" r="2.5"/><circle cx="14" cy="84" r="2.5"/><circle cx="106" cy="84" r="2.5"/></g></svg>',
  paper:
    '<svg viewBox="0 0 120 120" aria-hidden="true"><rect x="14" y="30" width="92" height="60" rx="6" fill="#1b4b42"/><rect x="26" y="44" width="34" height="8" rx="3" fill="#ee9b8c"/><rect x="26" y="60" width="52" height="6" rx="3" fill="#fbf8f6"/><rect x="26" y="72" width="40" height="6" rx="3" fill="#fbf8f6"/></svg>',
  bag: '<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M42 40c0-22 36-22 36 0" fill="none" stroke="#1b4b42" stroke-width="7"/><rect x="24" y="40" width="72" height="62" rx="6" fill="#ee9b8c"/><circle cx="60" cy="72" r="12" fill="#1b4b42"/></svg>',
  cap: '<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M22 76c0-30 18-44 40-44s34 14 34 44z" fill="#1b4b42"/><path d="M60 76h50c0 8-12 12-30 12H60z" fill="#ee9b8c"/><circle cx="58" cy="52" r="7" fill="#ee9b8c"/></svg>',
  key: '<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="44" cy="44" r="22" fill="none" stroke="#1b4b42" stroke-width="9"/><path d="M60 60l36 36" stroke="#1b4b42" stroke-width="9"/><rect x="62" y="74" width="34" height="24" rx="5" fill="#ee9b8c" transform="rotate(8 79 86)"/></svg>',
  sticker:
    '<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M20 20h80v56L76 100H20z" fill="#ee9b8c"/><path d="M76 100V76h24z" fill="#1b4b42"/><circle cx="48" cy="52" r="14" fill="#1b4b42"/></svg>',
};
/* name, category, description, icon */
var items = [
  [
    "Tarpaulin printing",
    "Large format",
    "Banners and backdrops for events, shops and celebrations.",
    "banner",
  ],
  ["DTF printing", "Apparel", "Full-color transfers for shirts, caps and bags.", "shirt"],
  [
    "Sublimation printing",
    "Drinkware",
    "Vivid, long-lasting prints on mugs, tumblers and more.",
    "mug",
  ],
  ["Mugs", "Drinkware", "Custom photo and design mugs.", "mug"],
  ["Tumblers", "Drinkware", "Personalized tumblers for gifts and teams.", "tumbler"],
  ["Caps", "Apparel", "Custom caps with your logo or design.", "cap"],
  ["Tote bags", "Accessories", "Everyday bags printed with your art.", "bag"],
  ["T-shirts", "Apparel", "Custom tees for groups, events and brands.", "shirt"],
  ["Polo shirts", "Apparel", "Uniform polos for teams and businesses.", "shirt"],
  ["Long sleeves", "Apparel", "Custom long sleeve shirts.", "shirt"],
  ["Hoodies", "Apparel", "Cozy hoodies with custom prints.", "shirt"],
  ["Sweatshirts", "Apparel", "Custom sweatshirts for any group.", "shirt"],
  ["Lanyards", "Accessories", "Printed lanyards for events, schools and offices.", "lanyard"],
  ["Button pins", "Accessories", "Round pins for giveaways and merch.", "pin"],
  ["Keychains", "Accessories", "Custom keychains in small or large batches.", "key"],
  ["Vinyl stickers", "Paper", "Durable stickers for packaging, laptops and bottles.", "sticker"],
  ["Refrigerator magnets", "Accessories", "Souvenir magnets with your design.", "pin"],
  ["Business cards", "Paper", "Cards printed for your brand.", "paper"],
  ["Hang tags", "Paper", "Tags for clothing and product lines.", "paper"],
];
var featured = [
  [
    "Mugs",
    "Sublimated mugs",
    "Full-wrap photo or art prints that won’t peel or fade in the wash.",
    "mug",
  ],
  [
    "T-shirts",
    "Custom T-shirts",
    "DTF and sublimation prints for teams, events and small brands.",
    "shirt",
  ],
  [
    "Tumblers",
    "Tumblers",
    "Personalized drinkware that makes an easy gift or giveaway.",
    "tumbler",
  ],
  ["Lanyards", "Lanyards", "Printed in your colors for schools, offices and events.", "lanyard"],
  [
    "Button pins",
    "Button pins",
    "Pin-back buttons in small or bulk runs for merch and souvenirs.",
    "pin",
  ],
  [
    "Tarpaulin printing",
    "Tarpaulins",
    "Large-format banners and backdrops, finished with eyelets.",
    "banner",
  ],
];
var $ = function (i) {
  return document.getElementById(i);
};
function el(t, c, x) {
  var e = document.createElement(t);
  if (c) e.className = c;
  if (x !== undefined) e.textContent = x;
  return e;
}

/* Real photos of finished work go here, keyed by product name:
   PHOTOS["Mugs"]=["data:image/jpeg;base64,..."]; the first photo replaces the illustration. */
var PHOTOS = {};
function artFor(name, icon) {
  var p = PHOTOS[name];
  if (p && p.length) {
    var im = document.createElement("img");
    im.src = p[0];
    im.alt = name + " printed by Demo";
    im.loading = "lazy";
    return im;
  }
  var d = document.createElement("div");
  d.innerHTML = ICONS[icon];
  return d.firstChild;
}

/* product viewer */
var vList = [],
  vIdx = 0,
  vLast = null;
function openViewer(list, idx, from) {
  vList = list;
  vIdx = idx;
  vLast = from || null;
  $("viewer").classList.add("open");
  showV(0);
}
function showV(step, photo) {
  vIdx = (vIdx + step + vList.length) % vList.length;
  var it = vList[vIdx],
    st = $("vStage");
  st.textContent = "";
  var ph = PHOTOS[it[0]] || [],
    k = photo || 0;
  if (ph.length) {
    var im = document.createElement("img");
    im.src = ph[k];
    im.alt = it[0] + " printed by Demo";
    st.appendChild(im);
    if (ph.length > 1) {
      var tb = el("div", "thumbs");
      ph.forEach(function (s, j) {
        var b = el("button");
        b.type = "button";
        if (j === k) b.setAttribute("aria-current", "true");
        b.setAttribute("aria-label", "Photo " + (j + 1));
        var t = document.createElement("img");
        t.src = s;
        t.alt = "";
        b.appendChild(t);
        b.onclick = function () {
          showV(0, j);
        };
        tb.appendChild(b);
      });
      st.appendChild(tb);
    }
  } else {
    st.appendChild(artFor(it[0], it[3]));
  }
  $("vCat").textContent = it[1];
  $("vTitle").textContent = it[0];
  $("vDesc").textContent = it[2];
  $("vCount").textContent = vIdx + 1 + " of " + vList.length;
  $("vOrder").onclick = function () {
    closeViewer(true);
    orderFor(it[0]);
  };
}
function closeViewer(skip) {
  $("viewer").classList.remove("open");
  if (!skip && vLast) vLast.focus();
}
$("vClose").onclick = function () {
  closeViewer();
};
$("vPrev").onclick = function () {
  showV(-1);
};
$("vNext").onclick = function () {
  showV(1);
};
$("viewer").addEventListener("click", function (e) {
  if (e.target === this) closeViewer();
});
document.addEventListener("keydown", function (e) {
  if (!$("viewer").classList.contains("open")) return;
  if (e.key === "Escape") closeViewer();
  else if (e.key === "ArrowLeft") showV(-1);
  else if (e.key === "ArrowRight") showV(1);
});

/* routing: plain #token views */
var VIEWS = ["home", "products", "howtoorder", "order", "about", "faq", "contact"];
function route() {
  var h = (location.hash || "").replace("#", "");
  if (VIEWS.indexOf(h) < 0) h = "home";
  VIEWS.forEach(function (v) {
    $("v-" + v).classList.toggle("on", v === h);
  });
  document.querySelectorAll(".links a").forEach(function (a) {
    if (a.dataset.v === h) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  $("links").classList.remove("open");
  $("menu").setAttribute("aria-expanded", "false");
  window.scrollTo(0, 0);
}
window.addEventListener("hashchange", route);
$("menu").onclick = function () {
  var o = $("links").classList.toggle("open");
  this.setAttribute("aria-expanded", o);
};

/* home strip */
var strip = $("homeStrip");
items.slice(0, 19).forEach(function (i) {
  strip.appendChild(el("li", "", i[0]));
});

/* showcase */
function orderFor(name) {
  var s = $("prod");
  s.value = name;
  location.hash = "order";
  setTimeout(function () {
    $("qty").focus({ preventScroll: true });
  }, 50);
}
var show = $("showcase");
var featList = featured.map(function (f) {
  return [
    f[0],
    items.filter(function (i) {
      return i[0] === f[0];
    })[0][1],
    f[2],
    f[3],
  ];
});
featured.forEach(function (f, n) {
  var c = el("article", "card"),
    a = el("button", "art");
  a.type = "button";
  a.setAttribute("aria-label", "View " + f[1]);
  a.appendChild(artFor(f[0], f[3]));
  a.appendChild(el("span", "zoom", "View"));
  a.onclick = function () {
    openViewer(featList, n, a);
  };
  var t = el("div", "txt");
  t.appendChild(el("h3", "", f[1]));
  t.appendChild(el("p", "", f[2]));
  var b = el("button", "btn line sm", "Order " + f[1].toLowerCase());
  b.type = "button";
  b.onclick = function () {
    orderFor(f[0]);
  };
  t.appendChild(b);
  c.appendChild(a);
  c.appendChild(t);
  show.appendChild(c);
});

/* products grid + filters */
var cats = ["All"].concat(
  items
    .map(function (i) {
      return i[1];
    })
    .filter(function (v, i, a) {
      return a.indexOf(v) === i;
    }),
);
var chips = $("chips"),
  grid = $("grid"),
  prod = $("prod");
function visibleItems() {
  return items.filter(function (i) {
    return !grid.querySelector('li[data-name="' + i[0] + '"]').hidden;
  });
}
items.forEach(function (i) {
  var li = el("li", "card");
  li.dataset.cat = i[1];
  li.dataset.name = i[0];
  var a = el("button", "art");
  a.type = "button";
  a.setAttribute("aria-label", "View " + i[0]);
  a.appendChild(artFor(i[0], i[3]));
  a.appendChild(el("span", "zoom", "View"));
  a.onclick = function () {
    var v = visibleItems();
    openViewer(v, v.indexOf(i), a);
  };
  var t = el("div", "txt");
  t.appendChild(el("span", "cat", i[1]));
  var h = el("h3"),
    hb = el("button", "", i[0]);
  hb.type = "button";
  hb.onclick = function () {
    a.click();
  };
  h.appendChild(hb);
  t.appendChild(h);
  t.appendChild(el("p", "", i[2]));
  var b = el("button", "btn line sm", "Order this");
  b.type = "button";
  b.onclick = function () {
    orderFor(i[0]);
  };
  t.appendChild(b);
  li.appendChild(a);
  li.appendChild(t);
  grid.appendChild(li);
  var o = el("option", "", i[0]);
  prod.appendChild(o);
});
cats.forEach(function (c, idx) {
  var b = el("button", "chip", c);
  b.type = "button";
  b.setAttribute("aria-pressed", idx === 0);
  b.onclick = function () {
    chips.querySelectorAll(".chip").forEach(function (x) {
      x.setAttribute("aria-pressed", x === b);
    });
    grid.querySelectorAll("li").forEach(function (li) {
      li.hidden = !(c === "All" || li.dataset.cat === c);
    });
  };
  chips.appendChild(b);
});

/* order builder */
var lines = [],
  qty = $("qty"),
  det = $("det"),
  nm = $("name"),
  need = $("need"),
  msg = $("msg"),
  st = $("status"),
  list = $("lines");
function clampQty() {
  return Math.max(1, parseInt(qty.value, 10) || 1);
}
function build() {
  var pick = lines.length ? lines : [{ p: prod.value, q: clampQty() }];
  var t = "Hi Demo! ";
  if (nm.value.trim()) t += "This is " + nm.value.trim() + ". ";
  if (pick.length === 1) {
    t += "I’d like to order " + pick[0].q + " × " + pick[0].p + ".";
  } else {
    t +=
      "I’d like to order:\n" +
      pick
        .map(function (l) {
          return "• " + l.q + " × " + l.p;
        })
        .join("\n");
  }
  if (det.value.trim()) t += "\nDetails: " + det.value.trim();
  if (need.value.trim()) t += "\nNeeded by: " + need.value.trim();
  t += "\nCan you share the price and turnaround time?";
  msg.textContent = t;
  return t;
}
function renderLines() {
  list.textContent = "";
  lines.forEach(function (l, i) {
    var li = el("li");
    li.appendChild(el("span", "", l.q + " × " + l.p));
    var b = el("button", "", "Remove");
    b.type = "button";
    b.onclick = function () {
      lines.splice(i, 1);
      renderLines();
      build();
    };
    li.appendChild(b);
    list.appendChild(li);
  });
}
$("addLine").onclick = function () {
  lines.push({ p: prod.value, q: clampQty() });
  qty.value = 1;
  renderLines();
  build();
};
[prod, qty, det, nm, need].forEach(function (e) {
  e.addEventListener("input", build);
});
$("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();
});
$("copy").onclick = function () {
  var t = build();
  function ok() {
    st.textContent = "Copied.";
  }
  function fail() {
    st.textContent = "Couldn’t copy automatically. Select the message and copy it.";
  }
  try {
    navigator.clipboard.writeText(t).then(ok, fail);
  } catch (e) {
    fail();
  }
};
$("send").addEventListener("click", function () {
  var t = build();
  function ok() {
    st.textContent = "Message copied. Paste it into the chat that just opened, then press send.";
  }
  function fail() {
    st.textContent =
      "Messenger is opening. Select the message above, copy it and paste it into the chat.";
  }
  try {
    navigator.clipboard.writeText(t).then(ok, fail);
  } catch (e) {
    fail();
  }
});
build();
route();
