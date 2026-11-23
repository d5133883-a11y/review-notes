// G's 復習メモ帳 ── 動きの部分
// データは js/data.js の MEMOS（1件＝1ページ）と KINOU（機能の一覧）
// 保存は localStorage（このパソコンのこのブラウザだけ）

// ---------------------------------------------------------------- 保存の名札
const KEY_STAMP = "gsFukushu_stamps"; // { id: { s: "wakatta" | "yowa", d: "2026-11-23" } }
const KEY_MEMO = "gsFukushu_memos";   // { id: { t: "自分のメモ", d: "2026-11-23" } }
const KEY_POS = "gsFukushu_last";     // 最後に見ていたページの id

function load(key, empty) {
  const text = localStorage.getItem(key);
  if (text === null) return empty;
  try { return JSON.parse(text); } catch (e) { return empty; }
}
function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

let stamps = load(KEY_STAMP, {});
let myMemos = load(KEY_MEMO, {});

// ---------------------------------------------------------------- いまの状態
const state = { view: "page", q: "", kinou: "", group: "", only: "", pos: 0 };
let list = MEMOS.slice(); // 絞り込んだあとの並び

// 講義のまとまり（日付＋テーマ）
const GROUPS = [];
MEMOS.forEach(function (m) {
  const key = m.date + "|" + m.theme;
  let g = GROUPS.find(function (x) { return x.key === key; });
  if (!g) {
    g = { key: key, kai: m.kai, date: m.date, theme: m.theme, ids: [] };
    GROUPS.push(g);
  }
  g.ids.push(m.id);
});
GROUPS.sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; });

// ---------------------------------------------------------------- 小さな道具
const YOUBI = ["日", "月", "火", "水", "木", "金", "土"];
function md(date) { // "2026-10-31" → "10/31"
  const p = date.split("-");
  return Number(p[1]) + "/" + Number(p[2]);
}
function youbi(date) { return YOUBI[new Date(date + "T00:00:00").getDay()]; }
function today() {
  const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
function esc(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}
function isKadai(m) { return m.theme.indexOf("課題") === 0; }
function kaiLabel(m) { return isKadai(m) ? "課題" : "第" + m.kai + "回"; }

// うろ覚えでも当たるように、文字をそろえる（全角→半角・カタカナ→ひらがな・小文字・空白と「・」を消す）
function norm(s) {
  return String(s).normalize("NFKC").toLowerCase()
    .replace(/[ァ-ヶ]/g, function (c) { return String.fromCharCode(c.charCodeAt(0) - 0x60); })
    .replace(/[\s・　]/g, "");
}
// 1件ごとに探す文字を作っておく
const HAY = {};
MEMOS.forEach(function (m) {
  HAY[m.id] = norm([
    m.code, m.yomi, m.oboe, m.kinou, m.imi, m.tsukai, m.chui.join(" "), m.kotoba.join(" "),
    m.theme, kaiLabel(m), "第" + m.kai + "回", md(m.date), Number(m.date.split("-")[1]) + "月"
  ].join(" "));
});

function toast(msg) {
  $(".toast").remove();
  const $t = $('<div class="toast"></div>').text(msg);
  $("body").append($t);
  setTimeout(function () { $t.remove(); }, 2300);
}

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }
  const $ta = $("<textarea>").val(text).css({ position: "fixed", left: "-9999px" });
  $("body").append($ta);
  $ta[0].select();
  document.execCommand("copy");
  $ta.remove();
  return Promise.resolve();
}

// ---------------------------------------------------------------- 絞り込み
function applyFilter() {
  // 「保存したい」「消したい」のような言い方は「したい／たい」を外して探す
  const words = state.q.split(/[\s　]+/).map(norm)
    .map(function (w) { return w.length > 3 ? w.replace(/(し)?たい$/, "") : w; })
    .filter(function (w) { return w !== ""; });
  list = MEMOS.filter(function (m) {
    if (state.kinou && m.kinou !== state.kinou) return false;
    if (state.group && (m.date + "|" + m.theme) !== state.group) return false;
    const st = stamps[m.id] ? stamps[m.id].s : "";
    if (state.only === "mada" && st === "wakatta") return false;
    if (state.only === "yowa" && st !== "yowa") return false;
    if (state.only === "mymemo" && !(myMemos[m.id] && myMemos[m.id].t)) return false;
    for (let i = 0; i < words.length; i++) {
      if (HAY[m.id].indexOf(words[i]) === -1) return false;
    }
    return true;
  });
  if (state.pos >= list.length) state.pos = Math.max(0, list.length - 1);
}

// ---------------------------------------------------------------- 画面を描く
function render(dir) {
  applyFilter();
  renderProgress();
  renderChips();
  if (state.view === "page") renderPage(dir);
  if (state.view === "list") renderList();
  if (state.view === "nenpyo") renderNenpyo();
  $(".tab").removeClass("active");
  $('.tab[data-view="' + state.view + '"]').addClass("active");
}

function countWakatta(ids) {
  return ids.filter(function (id) { return stamps[id] && stamps[id].s === "wakatta"; }).length;
}

function renderProgress() {
  const n = countWakatta(MEMOS.map(function (m) { return m.id; }));
  const y = Object.keys(stamps).filter(function (id) { return stamps[id].s === "yowa"; }).length;
  $("#progress_fill").css("width", (n / MEMOS.length * 100) + "%");
  $("#progress_text").html("わかった <b>" + n + "</b> / " + MEMOS.length + "　　よーわからん <b>" + y + "</b>");
}

function renderChips() {
  let html = '<button class="chip kinou' + (state.kinou === "" ? " active" : "") + '" data-kinou="">機能：ぜんぶ</button>';
  KINOU.forEach(function (k) {
    const n = MEMOS.filter(function (m) { return m.kinou === k; }).length;
    if (n === 0) return;
    html += '<button class="chip kinou' + (state.kinou === k ? " active" : "") + '" data-kinou="' + esc(k) + '">' +
      esc(k) + " <small>" + n + "</small></button>";
  });
  $("#kinou_chips").html(html);
  $(".chip.only").removeClass("active");
  $('.chip.only[data-only="' + state.only + '"]').addClass("active");
  if (state.group) {
    const g = GROUPS.find(function (x) { return x.key === state.group; });
    $("#kai_label").html("📅 " + esc(md(g.date) + "（" + youbi(g.date) + "）" + g.theme) + '<button id="group_clear">× はずす</button>');
  } else {
    $("#kai_label").html("");
  }
}

const EMPTY = '<div class="empty">' +
  '<svg viewBox="0 0 160 120" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">' +
  '<path d="M30 96 L30 30 Q30 22 38 22 L104 22 Q112 22 112 30 L112 96 Z" fill="#fff"/>' +
  '<path d="M46 44 H96 M46 60 H90 M46 76 H78" stroke="#bbb"/>' +
  '<circle cx="120" cy="78" r="18" fill="#fff"/><path d="M133 91 L148 106" stroke-width="5"/>' +
  '<path d="M114 72 q6 -8 12 0" stroke="#0b9be6"/></svg>' +
  '<p>見つかりませんでした。<br>ちがう言い方（ひらがな・英語・やりたいこと）で探してみてください。</p></div>';

function stampHtml(st, pon) {
  if (st === "wakatta") return '<div class="stamp wakatta' + (pon ? " pon" : "") + '">わかった<small>' + "OK!" + "</small></div>";
  if (st === "yowa") return '<div class="stamp yowa' + (pon ? " pon" : "") + '"><span class="q">?</span>よー<br>わからん</div>';
  return "";
}

function renderPage(dir, pon) {
  if (list.length === 0) { $("#view").html(EMPTY); return; }
  const m = list[state.pos];
  localStorage.setItem(KEY_POS, m.id);
  const st = stamps[m.id] ? stamps[m.id].s : "";
  const memo = myMemos[m.id] || { t: "", d: "" };
  const chui = m.chui.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("");

  const html =
    '<p class="count"><b>' + (state.pos + 1) + "</b> / " + list.length + " ページ</p>" +
    '<div class="pager">' +
    '<button class="nav_btn" id="prev" ' + (state.pos === 0 ? "disabled" : "") + ' aria-label="前へ">◀</button>' +
    '<article class="card' + (st === "wakatta" ? " done" : "") + (dir === "l" ? " from_left" : "") + '">' +
    stampHtml(st, pon) +
    '<div class="badges">' +
    '<span class="badge_kai">' + kaiLabel(m) + "</span>" +
    '<span class="badge_date">' + md(m.date) + "（" + youbi(m.date) + "）</span>" +
    '<span class="badge_theme">' + esc(m.theme) + "</span>" +
    '<span class="badge_kinou">' + esc(m.kinou) + "</span>" +
    "</div>" +
    '<div class="code_box mono">' + esc(m.code) + '<button class="copy" data-copy="code">コピー</button></div>' +
    '<div class="yomi_row"><span class="label">読み方</span><span class="yomi">' + esc(m.yomi) + "</span>" +
    '<button class="speak">🔊 読み上げ</button></div>' +
    '<div class="grid2">' +
    '<div class="box imi"><h3>意味</h3><p>' + esc(m.imi) + "</p></div>" +
    '<div class="box oboe"><h3>覚え方</h3><p>' + esc(m.oboe) + "</p></div>" +
    '<div class="box tsukai"><h3>使い方</h3><pre class="mono">' + esc(m.tsukai) + "</pre></div>" +
    '<div class="box chui"><h3>注意点</h3><ul>' + chui + "</ul></div>" +
    "</div>" +
    '<div class="mymemo"><h3>自分のメモ' + (memo.d ? '<span class="memo_date">' + md(memo.d) + " に書いた</span>" : "") + "</h3>" +
    '<textarea id="mymemo" placeholder="ここでつまずいた・こう覚えた、など（このブラウザにだけ残ります）">' + esc(memo.t) + "</textarea></div>" +
    '<div class="actions">' +
    '<button class="stamp_btn wakatta' + (st === "wakatta" ? " on" : "") + '" data-stamp="wakatta">⭕ わかった</button>' +
    '<button class="stamp_btn yowa' + (st === "yowa" ? " on" : "") + '" data-stamp="yowa">🤔 よーわからん</button>' +
    '<button class="ai_btn">🤖 いつも使ってるAIに投げるプロンプトをコピー</button>' +
    "</div>" +
    '<div class="ai_box" id="ai_box">' +
    '<p class="ai_head">📋 コピーしたプロンプト（書き足してから「もう一度コピー」もできます）</p>' +
    '<textarea id="ai_text" class="mono"></textarea>' +
    '<div class="ai_btns"><button class="ai_recopy">もう一度コピー</button><button class="ai_close">とじる</button></div>' +
    "</div>" +
    "</article>" +
    '<button class="nav_btn" id="next" ' + (state.pos >= list.length - 1 ? "disabled" : "") + ' aria-label="次へ">▶</button>' +
    "</div>";
  $("#view").html(html);
}

function renderList() {
  if (list.length === 0) { $("#view").html(EMPTY); return; }
  let html = "";
  GROUPS.forEach(function (g) {
    const items = list.filter(function (m) { return m.date + "|" + m.theme === g.key; });
    if (items.length === 0) return;
    const n = countWakatta(g.ids);
    html += '<section class="group"><div class="group_head"><h2>' +
      (g.theme.indexOf("課題") === 0 ? "課題" : "第" + g.kai + "回") + "　" + md(g.date) + "（" + youbi(g.date) + "）　" + esc(g.theme) +
      '</h2><span class="mini_prog">わかった ' + n + " / " + g.ids.length + "</span></div><div class=\"tiles\">";
    items.forEach(function (m) {
      const st = stamps[m.id] ? stamps[m.id].s : "";
      const mark = st === "wakatta" ? "⭕" : st === "yowa" ? "🤔" : (myMemos[m.id] && myMemos[m.id].t ? "✏️" : "");
      html += '<button class="tile ' + (st === "wakatta" ? "done" : st) + '" data-id="' + m.id + '">' +
        '<span class="t_code mono">' + esc(m.code.split("\n")[0]) + "</span>" +
        '<span class="t_imi">' + esc(m.imi) + "</span>" +
        '<span class="t_mark">' + mark + "</span></button>";
    });
    html += "</div></section>";
  });
  $("#view").html(html);
}

function renderNenpyo() {
  let html = '<div class="nenpyo">';
  GROUPS.forEach(function (g) {
    const n = countWakatta(g.ids);
    const rikai = n === g.ids.length;
    html += '<button class="n_item' + (rikai ? " rikai" : "") + '" data-group="' + esc(g.key) + '">' +
      '<div class="n_date"><b>' + md(g.date) + "</b><span>" + youbi(g.date) + "曜日</span></div>" +
      '<div class="n_body"><h3>' + (g.theme.indexOf("課題") === 0 ? "" : "第" + g.kai + "回　") + esc(g.theme) + "</h3>" +
      "<p>" + g.ids.length + " 項目　わかった " + n + "</p>" +
      '<div class="n_bar"><span style="width:' + (n / g.ids.length * 100) + '%"></span></div></div>' +
      (rikai ? '<div class="n_hanko">理解した</div>' : "") +
      "</button>";
  });
  html += "</div>";
  $("#view").html(html);
}

// ---------------------------------------------------------------- 全部わかったとき
function celebrate(g) {
  let kami = "";
  const colors = ["#e60012", "#0b9be6", "#111111", "#ffffff"];
  for (let i = 0; i < 60; i++) {
    kami += '<span class="kami" style="left:' + Math.random() * 100 + "vw;background:" + colors[i % 4] +
      ";animation-duration:" + (2 + Math.random() * 2.5) + "s;animation-delay:" + Math.random() * .6 + 's;"></span>';
  }
  const title = g ? (g.theme.indexOf("課題") === 0 ? g.theme : "第" + g.kai + "回 " + g.theme) : "ぜんぶ";
  $("#complete").html(kami +
    '<div class="big_hanko"><small>' + esc(title) + "</small>理解<br>した</div>" +
    "<p>" + (g ? md(g.date) + " の分が全部「わかった」になりました！" : "1か月分、全部「わかった」！おつかれさまでした！") + "</p>" +
    '<button class="stamp_btn wakatta" id="complete_close">とじる</button>'
  ).addClass("show");
}

// ---------------------------------------------------------------- スタンプ
function setStamp(id, s) {
  const before = stamps[id] ? stamps[id].s : "";
  const g = GROUPS.find(function (x) { return x.ids.indexOf(id) !== -1; });
  const wasDone = countWakatta(g.ids) === g.ids.length;
  const wasAll = countWakatta(MEMOS.map(function (m) { return m.id; })) === MEMOS.length;

  if (before === s) {
    delete stamps[id]; // もう一度押すと取り消し
  } else {
    stamps[id] = { s: s, d: today() };
  }
  save(KEY_STAMP, stamps);

  const pon = before !== s;
  renderProgress();
  renderPage("", pon);
  if (pon) $(".card").addClass("don");

  const nowDone = countWakatta(g.ids) === g.ids.length;
  const nowAll = countWakatta(MEMOS.map(function (m) { return m.id; })) === MEMOS.length;
  if (nowAll && !wasAll) setTimeout(function () { celebrate(null); }, 600);
  else if (nowDone && !wasDone) setTimeout(function () { celebrate(g); }, 600);
}

// ---------------------------------------------------------------- 操作
function go(step) {
  const next = state.pos + step;
  if (next < 0 || next >= list.length) return;
  state.pos = next;
  renderPage(step < 0 ? "l" : "r");
  toPageTop("smooth");
}

// カードの上が検索欄に隠れないところまで戻す
function toPageTop(how) {
  const bar = $(".tools").css("position") === "sticky" ? $(".tools").outerHeight() : 0;
  const top = $("#view").offset().top - bar - 8;
  if (window.scrollY > top) window.scrollTo({ top: top, behavior: how || "auto" });
}

$(document).on("click", "#prev", function () { go(-1); });
$(document).on("click", "#next", function () { go(1); });

$(document).on("keydown", function (e) {
  if (state.view !== "page") return;
  if ($(e.target).is("input, textarea")) return;
  if (e.key === "ArrowLeft") go(-1);
  if (e.key === "ArrowRight") go(1);
});

// スマホは左右にすべらせてめくる
let touchX = null;
$(document).on("touchstart", ".card", function (e) { touchX = e.originalEvent.touches[0].clientX; });
$(document).on("touchend", ".card", function (e) {
  if (touchX === null) return;
  const dx = e.originalEvent.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 60) go(dx < 0 ? 1 : -1);
  touchX = null;
});

$(".tab").on("click", function () {
  state.view = $(this).data("view");
  render();
});

let timer = null;
$("#q").on("input", function () {
  clearTimeout(timer);
  const v = $(this).val();
  timer = setTimeout(function () {
    state.q = v;
    state.pos = 0;
    if (state.view === "nenpyo") state.view = "page";
    render();
  }, 200);
});

$(document).on("click", ".chip.kinou", function () {
  state.kinou = String($(this).data("kinou"));
  state.pos = 0;
  render();
});
$(document).on("click", ".chip.only", function () {
  state.only = String($(this).data("only"));
  state.pos = 0;
  render();
});
$(document).on("click", "#group_clear", function () {
  state.group = "";
  render();
});

$(document).on("click", ".tile", function () {
  const id = Number($(this).data("id"));
  state.pos = list.findIndex(function (m) { return m.id === id; });
  state.view = "page";
  render();
  toPageTop();
});

$(document).on("click", ".n_item", function () {
  state.group = String($(this).data("group"));
  state.kinou = "";
  state.q = "";
  $("#q").val("");
  state.pos = 0;
  state.view = "list";
  render();
});

$(document).on("click", ".stamp_btn[data-stamp]", function () {
  setStamp(list[state.pos].id, $(this).data("stamp"));
});

$(document).on("click", "#complete_close, #complete", function (e) {
  if (e.target.id === "complete" || e.target.id === "complete_close") $("#complete").removeClass("show").html("");
});

$(document).on("click", ".copy", function () {
  copyText(list[state.pos].code).then(function () { toast("コードをコピーしました"); });
});

$(document).on("click", ".speak", function () {
  const m = list[state.pos];
  if (!("speechSynthesis" in window)) { toast("このブラウザは読み上げに対応していません"); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(m.yomi);
  u.lang = "ja-JP";
  u.rate = 0.9;
  speechSynthesis.speak(u);
});

$(document).on("input", "#mymemo", function () {
  const id = list[state.pos].id;
  const t = $(this).val();
  if (t.trim() === "") {
    delete myMemos[id];
  } else {
    myMemos[id] = { t: t, d: (myMemos[id] && myMemos[id].d) || today() };
  }
  save(KEY_MEMO, myMemos);
});

$(document).on("click", ".ai_btn", function () {
  const m = list[state.pos];
  const memo = myMemos[m.id] ? myMemos[m.id].t : "";
  const text =
    "プログラミングを習い始めて1か月の初心者です。次のコードがよくわかりません。\n" +
    "身近なたとえを使って、短く、順番に説明してください。\n\n" +
    "■ コード\n" + m.code + "\n\n" +
    "■ 習った回\n" + kaiLabel(m) + "（" + md(m.date) + "）" + m.theme + "\n\n" +
    "■ 自分なりの理解\n" + m.imi + "\n" +
    (memo ? "\n■ 自分のメモ（ここがわからない）\n" + memo + "\n" : "");
  $("#ai_text").val(text);
  $("#ai_box").addClass("show");
  const box = document.getElementById("ai_text");
  box.style.height = "auto";
  box.style.height = box.scrollHeight + 4 + "px";
  copyText(text).then(function () { toast("プロンプトをコピーしました。いつも使ってるAIに貼ってください"); });
});

$(document).on("click", ".ai_recopy", function () {
  copyText($("#ai_text").val()).then(function () { toast("もう一度コピーしました"); });
});
$(document).on("click", ".ai_close", function () {
  $("#ai_box").removeClass("show");
});

// ---------------------------------------------------------------- 書き出す・読み込む
$("#export").on("click", function () {
  const data = { app: "gs-fukushu-memo", exportedAt: new Date().toISOString(), stamps: stamps, memos: myMemos };
  const blob = new Blob([JSON.stringify(data, null, 1)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "復習メモ帳_自分の記録_" + today().replace(/-/g, "") + ".json";
  a.click();
  URL.revokeObjectURL(a.href);
  toast("書き出しました（ダウンロードフォルダ）");
});

$("#import").on("change", function () {
  const file = this.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function () {
    try {
      const data = JSON.parse(reader.result);
      if (data.app !== "gs-fukushu-memo") throw new Error("ちがうファイル");
      stamps = Object.assign(stamps, data.stamps || {});
      myMemos = Object.assign(myMemos, data.memos || {});
      save(KEY_STAMP, stamps);
      save(KEY_MEMO, myMemos);
      render();
      toast("読み込みました");
    } catch (e) {
      toast("読み込めませんでした（このアプリで書き出したファイルを選んでください）");
    }
  };
  reader.readAsText(file);
  this.value = "";
});

// ---------------------------------------------------------------- はじめに
(function start() {
  const last = Number(localStorage.getItem(KEY_POS));
  const i = MEMOS.findIndex(function (m) { return m.id === last; });
  if (i !== -1) state.pos = i;
  render();
})();
