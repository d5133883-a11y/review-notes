// 習ったことメモ帳のデータ（_生成スクリプト\make_data.py で作る。ここは直接直さない）
// 1件＝1ページ。kai＝第何回 date＝習った日 code＝コード名 yomi＝読み方 oboe＝覚え方 kinou＝機能 imi＝意味
//        tsukai＝使い方 chui＝注意点 kotoba＝うろ覚えで引っかける言葉
const KINOU = ["画面に置く", "入力させる", "見た目を変える", "並べる", "つなぐ", "表示する", "計算する", "でたらめに選ぶ", "条件で分ける", "クリックで動かす", "時間で動かす", "まとめる", "くり返す", "保存する", "消す", "Gitで記録する", "GitHubに出す", "準備・操作"];
const MEMOS = [
 {
  "id": 1,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "Ctrl + S",
  "yomi": "コントロール・エス",
  "oboe": "S＝Save（セーブ＝保存）",
  "kinou": "準備・操作",
  "imi": "保存",
  "tsukai": "書いたら毎回押す。保存しないと画面は変わらない",
  "chui": [
   "タブの名前の横に●が出ていたら、まだ保存していない",
   "保存しないと画面は変わらない"
  ],
  "kotoba": [
   "書いたものを保存したい",
   "S＝Save（セーブ＝保存）",
   "コントロール・エス",
   "VS Code の操作"
  ]
 },
 {
  "id": 2,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "! + Tab",
  "yomi": "ビックリ・タブ",
  "oboe": "ひな形を一発で出す合図",
  "kinou": "準備・操作",
  "imi": "HTMLのひな形を出す",
  "tsukai": "空の index.html で半角の ! を打って Tab",
  "chui": [
   "! は半角。空のファイルで打つ",
   "日本語入力がオンだと出ない"
  ],
  "kotoba": [
   "HTMLのひな形を出したい",
   "ひな形を一発で出す合図",
   "ビックリ・タブ",
   "VS Code の操作"
  ]
 },
 {
  "id": 3,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "link + Tab",
  "yomi": "リンク・タブ",
  "oboe": "link＝つなぐ",
  "kinou": "つなぐ",
  "imi": "CSSをつなぐ1行を出す",
  "tsukai": "title の下で打つ。href を css/main.css に直す",
  "chui": [
   "出てきた href を自分のCSSファイルの場所に直す"
  ],
  "kotoba": [
   "CSSをつなぐ1行を出したい",
   "link＝つなぐ",
   "リンク・タブ",
   "VS Code の操作"
  ]
 },
 {
  "id": 4,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "Go Live",
  "yomi": "ゴー・ライブ",
  "oboe": "Live＝生で（その場で）見る",
  "kinou": "準備・操作",
  "imi": "ブラウザでページを開く",
  "tsukai": "画面右下のボタン。保存するたびに自動で変わる",
  "chui": [
   "画面が変わらないときは F5",
   "VS Code でフォルダを開いていないと出ない"
  ],
  "kotoba": [
   "作ったページをブラウザで見たい",
   "Live＝生で（その場で）見る",
   "ゴー・ライブ",
   "VS Code の操作"
  ]
 },
 {
  "id": 5,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "F12",
  "yomi": "エフじゅうに（検証）",
  "oboe": "右クリック→検証 と同じ",
  "kinou": "準備・操作",
  "imi": "ブラウザで中身と効いているCSSを見る",
  "tsukai": "ずれの原因探しに使う。ここで直しても保存されない",
  "chui": [
   "ここで直しても保存されない。直すのは VS Code 側"
  ],
  "kotoba": [
   "どのCSSが効いているか調べたい",
   "右クリック→検証 と同じ",
   "エフじゅうに（検証）",
   "VS Code の操作"
  ]
 },
 {
  "id": 6,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "ファイル\n（例 index.html）",
  "yomi": "ファイル",
  "oboe": "file＝書類（1枚の紙）",
  "kinou": "準備・操作",
  "imi": "中身（文字・写真）が入った1つ1つ",
  "tsukai": "VS Code で開いて中に書く。\n名前の後ろの .html .css .jpg で\n種類がわかる（拡張子）",
  "chui": [
   "名前の後ろの拡張子（.html .css）まで正しく付ける"
  ],
  "kotoba": [
   "ファイルとは何か知りたい",
   "file＝書類（1枚の紙）",
   "ファイル",
   "ファイルとフォルダ"
  ]
 },
 {
  "id": 7,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "フォルダ\n（例 css）",
  "yomi": "フォルダ",
  "oboe": "folder＝書類ばさみ （紙を束ねる入れ物）",
  "kinou": "準備・操作",
  "imi": "ファイルを入れて分けておく入れ物",
  "tsukai": "中に字は書けない。\nファイルを種類ごとに分ける\n（css・img）",
  "chui": [
   "フォルダ名に全角や空白を入れない（css・img・js）"
  ],
  "kotoba": [
   "フォルダとは何か知りたい",
   "folder＝書類ばさみ",
   "（紙を束ねる入れ物）",
   "フォルダ",
   "ファイルとフォルダ"
  ]
 },
 {
  "id": 8,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "フォルダ＝入れ物\nファイル＝中身",
  "yomi": "ちがい",
  "oboe": "現場でいえば フォルダ＝工具箱 ファイル＝工具1本",
  "kinou": "準備・操作",
  "imi": "フォルダの中にファイルを入れる。フォルダの中にフォルダも入る",
  "tsukai": "課題の形\nチーズアカデミー（フォルダ）\n├ index.html（ファイル）\n├ css（フォルダ）─ main.css\n└ img（フォルダ）─ 写真",
  "chui": [
   "VS Code では一番外のフォルダを開く"
  ],
  "kotoba": [
   "ファイルとフォルダの違いを知りたい",
   "現場でいえば",
   "フォルダ＝工具箱",
   "ファイル＝工具1本",
   "ちがい",
   "ファイルとフォルダ"
  ]
 },
 {
  "id": 9,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "使い分け\n書く→ファイル\n分ける→フォルダ",
  "yomi": "つかいわけ",
  "oboe": "迷ったら 「中に字を書くか？」",
  "kinou": "準備・操作",
  "imi": "字を書くならファイルを作る。種類ごとに分けたいならフォルダを作る",
  "tsukai": "VS Code の左上のボタン\n紙のマーク＝新しいファイル\nフォルダのマーク＝新しいフォルダ\n課題の決まり\nHTML＝index.html（外側）\nCSS＝css フォルダの中\n写真＝img フォルダの中\nJavaScript＝js フォルダの中",
  "chui": [
   "写真は img、CSS は css、JS は js に分けて入れる"
  ],
  "kotoba": [
   "ファイルとフォルダのどちらを作るか迷った",
   "迷ったら",
   "「中に字を書くか？」",
   "つかいわけ",
   "ファイルとフォルダ"
  ]
 },
 {
  "id": 10,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "css/main.css",
  "yomi": "スラッシュ",
  "oboe": "/＝フォルダの中へ入る区切り",
  "kinou": "つなぐ",
  "imi": "css フォルダの中のmain.css ファイル",
  "tsukai": "link の href・img の src で使う。\nindex.html のある場所から数える",
  "chui": [
   "区切りは / （\\ ではない）",
   "index.html のある場所から数える"
  ],
  "kotoba": [
   "フォルダの中のファイルを指したい",
   "/＝フォルダの中へ入る区切り",
   "スラッシュ",
   "ファイルとフォルダ"
  ]
 },
 {
  "id": 11,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "../img/main_bg.jpg",
  "yomi": "ドット・ドット・スラッシュ",
  "oboe": "..＝1つ外（親のフォルダ）",
  "kinou": "つなぐ",
  "imi": "1つ外のフォルダへ出てからimg の中へ入る",
  "tsukai": "main.css から写真を指すとき。\ncss の外へ出ないと\nimg に届かない",
  "chui": [
   ".. は「1つ外へ出る」。CSSから写真を指すときに要る"
  ],
  "kotoba": [
   "1つ外のフォルダのファイルを指したい",
   "..＝1つ外（親のフォルダ）",
   "ドット・ドット・スラッシュ",
   "ファイルとフォルダ"
  ]
 },
 {
  "id": 12,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<!DOCTYPE html>",
  "yomi": "ドックタイプ・エイチティーエムエル",
  "oboe": "DOC TYPE＝文書の種類",
  "kinou": "画面に置く",
  "imi": "HTMLのページです、という宣言",
  "tsukai": "ひな形の1行目。触らない",
  "chui": [
   "1行目に書く。ひな形のまま触らない"
  ],
  "kotoba": [
   "HTMLのページだと宣言したい",
   "DOC TYPE＝文書の種類",
   "ドックタイプ・エイチティーエムエル",
   "HTML 骨組み"
  ]
 },
 {
  "id": 13,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<html lang=\"ja\">",
  "yomi": "エイチティーエムエル・ラング",
  "oboe": "lang＝language（ランゲージ＝言語）、ja＝日本語",
  "kinou": "画面に置く",
  "imi": "日本語のページです、という宣言",
  "tsukai": "ひな形の en を ja に直す",
  "chui": [
   "en のままでも動くが、日本語のページは ja にする"
  ],
  "kotoba": [
   "日本語のページにしたい",
   "lang＝language（ランゲージ＝言語）、ja＝日本語",
   "エイチティーエムエル・ラング",
   "HTML 骨組み"
  ]
 },
 {
  "id": 14,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<head></head>",
  "yomi": "ヘッド",
  "oboe": "head＝頭。体（body）の上にある設定の場所",
  "kinou": "画面に置く",
  "imi": "設定の場所（画面に出ない）",
  "tsukai": "title・link・meta を中に入れる",
  "chui": [
   "画面に出したいものは head ではなく body に書く"
  ],
  "kotoba": [
   "ページの設定を書く場所がほしい",
   "head＝頭。体（body）の上にある設定の場所",
   "ヘッド",
   "HTML 骨組み"
  ]
 },
 {
  "id": 15,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<meta charset=\"UTF-8\">",
  "yomi": "メタ・キャラセット・ユーティーエフエイト",
  "oboe": "charset＝character set（文字の組）",
  "kinou": "画面に置く",
  "imi": "文字化けを防ぐ設定",
  "tsukai": "ひな形に最初から入っている。触らない",
  "chui": [
   "消すと文字化けすることがある"
  ],
  "kotoba": [
   "文字化けを防ぎたい",
   "charset＝character set（文字の組）",
   "メタ・キャラセット・ユーティーエフエイト",
   "HTML 骨組み"
  ]
 },
 {
  "id": 16,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
  "yomi": "メタ・ビューポート",
  "oboe": "viewport＝見える窓。device-width＝機械（スマホ）の幅",
  "kinou": "画面に置く",
  "imi": "スマホでも見やすくする設定",
  "tsukai": "ひな形に最初から入っている。触らない",
  "chui": [
   "スマホで見るときに要る。消さない"
  ],
  "kotoba": [
   "スマホでも見やすくしたい",
   "viewport＝見える窓。device-width＝機械（スマホ）の幅",
   "メタ・ビューポート",
   "HTML 骨組み"
  ]
 },
 {
  "id": 17,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<title>Document</title>",
  "yomi": "タイトル",
  "oboe": "title＝題名",
  "kinou": "画面に置く",
  "imi": "ブラウザのタブに出る名前",
  "tsukai": "head の中。Document の所を書き換える",
  "chui": [
   "画面の中ではなく、ブラウザのタブに出る"
  ],
  "kotoba": [
   "ブラウザのタブの名前を変えたい",
   "title＝題名",
   "タイトル",
   "HTML 骨組み"
  ]
 },
 {
  "id": 18,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<link rel=\"stylesheet\" href=\"css/main.css\" />",
  "yomi": "リンク・レル・スタイルシート・エイチレフ",
  "oboe": "link＝つなぐ、rel＝relation（関係）、href＝参照先",
  "kinou": "つなぐ",
  "imi": "CSSファイルをつなぐ",
  "tsukai": "head の中。無いとCSSが全部効かない",
  "chui": [
   "この1行が無い、またはファイルの場所が違うと、CSS を書いても何も変わらない",
   "head の中に書く"
  ],
  "kotoba": [
   "CSSを効かせたい",
   "link＝つなぐ、rel＝relation（関係）、href＝参照先",
   "リンク・レル・スタイルシート・エイチレフ",
   "HTML 骨組み"
  ]
 },
 {
  "id": 19,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<body></body>",
  "yomi": "ボディ",
  "oboe": "body＝体。画面に見える本体",
  "kinou": "画面に置く",
  "imi": "画面に出る中身の場所",
  "tsukai": "見えるものは全部この中に書く",
  "chui": [
   "</body> は1つだけ。2つになっていないか見る"
  ],
  "kotoba": [
   "画面に何か出したい",
   "body＝体。画面に見える本体",
   "ボディ",
   "HTML 骨組み"
  ]
 },
 {
  "id": 20,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<!-- memo -->",
  "yomi": "コメント",
  "oboe": "<!-- と --> ではさむと無かったことになる",
  "kinou": "準備・操作",
  "imi": "コメント（画面に出ない）",
  "tsukai": "メモを残す。部品を一時的に止める",
  "chui": [
   "閉じの --> を忘れると、その下が全部消えたように見える"
  ],
  "kotoba": [
   "HTMLにメモを残したい",
   "一時的に消したい",
   "<!-- と --> ではさむと無かったことになる",
   "コメント",
   "HTML 骨組み"
  ]
 },
 {
  "id": 21,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<div></div>",
  "yomi": "ディブ",
  "oboe": "division（ディビジョン）＝区切り",
  "kinou": "画面に置く",
  "imi": "箱。中に部品をまとめる",
  "tsukai": "ページをブロックに分ける",
  "chui": [
   "開いた div は必ず閉じる。数が合わないと形がくずれる"
  ],
  "kotoba": [
   "部品をひとまとめにしたい",
   "division（ディビジョン）＝区切り",
   "ディブ",
   "HTML 部品"
  ]
 },
 {
  "id": 22,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<h1></h1>",
  "yomi": "エイチワン",
  "oboe": "h＝heading（ヘディング＝見出し）、1＝いちばん大きい",
  "kinou": "画面に置く",
  "imi": "大見出し",
  "tsukai": "1ページに1つだけ",
  "chui": [
   "大きさのためではなく見出しの順番で使う。大きさは CSS で変える"
  ],
  "kotoba": [
   "大きな見出しを出したい",
   "h＝heading（ヘディング＝見出し）、1＝いちばん大きい",
   "エイチワン",
   "HTML 部品"
  ]
 },
 {
  "id": 23,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<h2></h2>",
  "yomi": "エイチツー",
  "oboe": "heading の2番目",
  "kinou": "画面に置く",
  "imi": "中見出し",
  "tsukai": "話題の区切りごとに",
  "chui": [
   "h1 の次の段の見出し"
  ],
  "kotoba": [
   "中くらいの見出しを出したい",
   "heading の2番目",
   "エイチツー",
   "HTML 部品"
  ]
 },
 {
  "id": 24,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<h3></h3>",
  "yomi": "エイチスリー",
  "oboe": "heading の3番目",
  "kinou": "画面に置く",
  "imi": "小見出し",
  "tsukai": "",
  "chui": [
   "h2 の次の段の見出し"
  ],
  "kotoba": [
   "小さな見出しを出したい",
   "heading の3番目",
   "エイチスリー",
   "HTML 部品"
  ]
 },
 {
  "id": 25,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<p></p>",
  "yomi": "ピー",
  "oboe": "p＝paragraph（パラグラフ＝段落）",
  "kinou": "画面に置く",
  "imi": "文章（段落）",
  "tsukai": "普通の文はこれで囲む",
  "chui": [
   "改行したいだけなら <br>。段落を分けるなら p"
  ],
  "kotoba": [
   "文章を書きたい",
   "p＝paragraph（パラグラフ＝段落）",
   "ピー",
   "HTML 部品"
  ]
 },
 {
  "id": 26,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<img src=\"img/content_img.jpg\" />",
  "yomi": "イメージ・ソース",
  "oboe": "img＝image（画像）、src＝source（元の場所）",
  "kinou": "画面に置く",
  "imi": "画像を出す",
  "tsukai": "はさまない。src は index.html から見た写真の場所",
  "chui": [
   "src の名前と実際のファイル名（.jpg .png .webp）が1字でも違うと出ない"
  ],
  "kotoba": [
   "写真を出したい",
   "img＝image（画像）、src＝source（元の場所）",
   "イメージ・ソース",
   "HTML 部品"
  ]
 },
 {
  "id": 27,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<div class=\"main\"></div>",
  "yomi": "クラス",
  "oboe": "class＝組・グループ。部品に付ける名札",
  "kinou": "画面に置く",
  "imi": "部品に名札（クラス）を付ける",
  "tsukai": "class=\"名前\"。CSSから .main で呼ぶ",
  "chui": [
   "class=\"…\" は < > の中に書く",
   "タグと class の間は半角スペース（全角だと効かない）"
  ],
  "kotoba": [
   "一部の部品だけ見た目を変えたい",
   "class＝組・グループ。部品に付ける名札",
   "クラス",
   "HTML 部品"
  ]
 },
 {
  "id": 28,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<img src=\"img/content_img.jpg\" alt=\"photo\" />",
  "yomi": "オルト",
  "oboe": "alt＝alternative（オルタナティブ＝代わり）",
  "kinou": "画面に置く",
  "imi": "画像の説明文を付ける",
  "tsukai": "画像が出ないときや、\n読み上げのときに使われる",
  "chui": [
   "alt は画像が出ないときの代わりの文字"
  ],
  "kotoba": [
   "画像に説明を付けたい",
   "alt＝alternative（オルタナティブ＝代わり）",
   "オルト",
   "HTML 部品"
  ]
 },
 {
  "id": 29,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<br>",
  "yomi": "ブレイク",
  "oboe": "br＝break（ブレイク＝区切る）",
  "kinou": "画面に置く",
  "imi": "その場所で改行する",
  "tsukai": "文の途中で行を変えるとき。\nはさまない形",
  "chui": [
   "余白を作るために何個も並べない。余白は CSS の margin で"
  ],
  "kotoba": [
   "文の途中で改行したい",
   "br＝break（ブレイク＝区切る）",
   "ブレイク",
   "HTML 部品"
  ]
 },
 {
  "id": 30,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<input type=\"text\">",
  "yomi": "インプット・タイプ・テキスト",
  "oboe": "input＝入力、type＝種類",
  "kinou": "画面に置く",
  "imi": "入力欄",
  "tsukai": "名前などを打ち込ませる",
  "chui": [
   "閉じタグは要らない"
  ],
  "kotoba": [
   "文字を入力させたい",
   "input＝入力、type＝種類",
   "インプット・タイプ・テキスト",
   "HTML 部品"
  ]
 },
 {
  "id": 31,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<table>\n  <tr>\n    <td></td>\n  </tr>\n</table>",
  "yomi": "テーブル・ティーアール・ティーディー",
  "oboe": "tr＝table row（表の行）、td＝table data（表のマス）",
  "kinou": "画面に置く",
  "imi": "表",
  "tsukai": "tr が行、td がマス",
  "chui": [
   "tr（行）の中に td（マス）。順番を逆にしない"
  ],
  "kotoba": [
   "表を作りたい",
   "tr＝table row（表の行）、td＝table data（表のマス）",
   "テーブル・ティーアール・ティーディー",
   "HTML 部品"
  ]
 },
 {
  "id": 32,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<th></th>",
  "yomi": "ティーエイチ",
  "oboe": "th＝table header（表の見出し）",
  "kinou": "画面に置く",
  "imi": "表の見出しのマス（太字・真ん中になる）",
  "tsukai": "tr の中で td の代わりに使う。\nAccess の「学校名」「TEL」",
  "chui": [
   "th は太字・中央になる。見出しのマスだけに使う"
  ],
  "kotoba": [
   "表に見出しのマスを作りたい",
   "th＝table header（表の見出し）",
   "ティーエイチ",
   "HTML 部品"
  ]
 },
 {
  "id": 33,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<dl>\n  <dt></dt>\n  <dd></dd>\n</dl>",
  "yomi": "ディーエル・ディーティー・ディーディー",
  "oboe": "dl＝description list（説明の一覧） dt＝term（言葉） dd＝description（説明）",
  "kinou": "画面に置く",
  "imi": "「言葉」と「その説明」の組",
  "tsukai": "NEWS の日付（dt）と\n本文（dd）を組にした",
  "chui": [
   "dt（項目）と dd（中身）を組にして並べる"
  ],
  "kotoba": [
   "日付と中身を組にして並べたい",
   "dl＝description list（説明の一覧）",
   "dt＝term（言葉）",
   "dd＝description（説明）",
   "ディーエル・ディーティー・ディーディー",
   "HTML 部品"
  ]
 },
 {
  "id": 34,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<iframe src=\"https://maps.google.com/maps?q=tokyo&output=embed\"></iframe>",
  "yomi": "アイフレーム",
  "oboe": "i＝inline（行の中）、frame＝枠。 ページの中にはめる窓",
  "kinou": "画面に置く",
  "imi": "ページの中に別のページ（地図など）をはめこむ",
  "tsukai": "Access の地図。\nq= の後ろに住所を書く。\nGoogleマップの「共有」→\n「地図を埋め込む」でも出る",
  "chui": [
   "地図は埋め込み用のURL（output=embed）にする",
   "iframe と src の間は半角スペース"
  ],
  "kotoba": [
   "地図をのせたい",
   "i＝inline（行の中）、frame＝枠。",
   "ページの中にはめる窓",
   "アイフレーム",
   "HTML 部品"
  ]
 },
 {
  "id": 35,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<form></form>",
  "yomi": "フォーム",
  "oboe": "form＝用紙（申込用紙）",
  "kinou": "入力させる",
  "imi": "入力欄をまとめる申込用紙の箱",
  "tsukai": "label・input・select・button を\nこの中に入れる",
  "chui": [
   "送信先を決めない練習では、押すとページが読み込み直される"
  ],
  "kotoba": [
   "入力フォームを作りたい",
   "form＝用紙（申込用紙）",
   "フォーム",
   "HTML フォーム"
  ]
 },
 {
  "id": 36,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<label></label>",
  "yomi": "ラベル",
  "oboe": "label＝札（荷札）",
  "kinou": "入力させる",
  "imi": "入力欄の名前（項目名）",
  "tsukai": "「お名前」など。\ninput をはさむと、\n文字を押してもチェックが入る",
  "chui": [
   "for と入力欄の id をそろえると、文字を押しても入力欄に入れる"
  ],
  "kotoba": [
   "入力欄に項目名を付けたい",
   "label＝札（荷札）",
   "ラベル",
   "HTML フォーム"
  ]
 },
 {
  "id": 37,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<input type=\"email\">",
  "yomi": "インプット・タイプ・イーメール",
  "oboe": "email＝電子メール",
  "kinou": "入力させる",
  "imi": "メールアドレスの入力欄",
  "tsukai": "見た目は text と同じ。\nスマホでは @ の付いた\nキーボードが出る",
  "chui": [
   "@ が無いと送信のときに注意が出る"
  ],
  "kotoba": [
   "メールアドレスを入力させたい",
   "email＝電子メール",
   "インプット・タイプ・イーメール",
   "HTML フォーム"
  ]
 },
 {
  "id": 38,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<select>\n  <option></option>\n</select>",
  "yomi": "セレクト・オプション",
  "oboe": "select＝選ぶ、option＝選択肢",
  "kinou": "入力させる",
  "imi": "下に開いて1つ選ぶ箱（プルダウン）",
  "tsukai": "option が選択肢1つ分。\n「知ったきっかけ」の5択",
  "chui": [
   "option の数だけ選択肢になる"
  ],
  "kotoba": [
   "選択肢から1つ選ばせたい",
   "select＝選ぶ、option＝選択肢",
   "セレクト・オプション",
   "HTML フォーム"
  ]
 },
 {
  "id": 39,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<input type=\"checkbox\">",
  "yomi": "インプット・タイプ・チェックボックス",
  "oboe": "check＝印を付ける、box＝四角",
  "kinou": "入力させる",
  "imi": "いくつでも選べる四角",
  "tsukai": "「志望動機」で使った。\nlabel ではさむ",
  "chui": [
   "1つだけ選ばせたいなら radio"
  ],
  "kotoba": [
   "いくつでも選ばせたい",
   "check＝印を付ける、box＝四角",
   "インプット・タイプ・チェックボックス",
   "HTML フォーム"
  ]
 },
 {
  "id": 40,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<textarea rows=\"5\"></textarea>",
  "yomi": "テキストエリア・ロウズ",
  "oboe": "text＝文字、area＝広場、 rows＝行（の数）",
  "kinou": "入力させる",
  "imi": "何行も書ける入力欄",
  "tsukai": "rows＝行の数（高さ）。\ninput と違ってはさむ形",
  "chui": [
   "閉じタグが要る（input とちがう）"
  ],
  "kotoba": [
   "長い文を入力させたい",
   "text＝文字、area＝広場、",
   "rows＝行（の数）",
   "テキストエリア・ロウズ",
   "HTML フォーム"
  ]
 },
 {
  "id": 41,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "<button type=\"submit\">send</button>",
  "yomi": "ボタン・タイプ・サブミット",
  "oboe": "submit＝提出する",
  "kinou": "入力させる",
  "imi": "フォームを送るボタン",
  "tsukai": "form の中の最後に置く。\n押すとフォームの中身を送る",
  "chui": [
   "form の中で押すと送信になる"
  ],
  "kotoba": [
   "フォームの送信ボタンを置きたい",
   "submit＝提出する",
   "ボタン・タイプ・サブミット",
   "HTML フォーム"
  ]
 },
 {
  "id": 42,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "body {\n  color: red;\n}",
  "yomi": "ボディ・カラー",
  "oboe": "だれに { 何を: どうする; }",
  "kinou": "見た目を変える",
  "imi": "CSSの基本の型",
  "tsukai": "「:」で区切って「;」で終わる",
  "chui": [
   "「: 」のあとに値、最後に ; 。{ } の閉じ忘れに注意"
  ],
  "kotoba": [
   "CSSの書き方の型を知りたい",
   "だれに { 何を: どうする; }",
   "ボディ・カラー",
   "CSS 書き方"
  ]
 },
 {
  "id": 43,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "body {\n}",
  "yomi": "ボディ",
  "oboe": "タグの名前で呼ぶ",
  "kinou": "見た目を変える",
  "imi": "タグの名前で指定",
  "tsukai": "そのタグ全部に効く",
  "chui": [
   "「: 」のあとに値、最後に ; 。{ } の閉じ忘れに注意"
  ],
  "kotoba": [
   "ページ全体に効かせたい",
   "タグの名前で呼ぶ",
   "ボディ",
   "CSS 書き方"
  ]
 },
 {
  "id": 44,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": ".title {\n}",
  "yomi": "ドット・タイトル",
  "oboe": "点＝名札（クラス）で呼ぶ印",
  "kinou": "見た目を変える",
  "imi": "クラス名で指定",
  "tsukai": "CSS側だけ先頭に「.」を付ける",
  "chui": [
   "CSS では . を付ける（HTML の class には . を付けない）"
  ],
  "kotoba": [
   "名札を付けた部品だけ変えたい",
   "点＝名札（クラス）で呼ぶ印",
   "ドット・タイトル",
   "CSS 書き方"
  ]
 },
 {
  "id": 45,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": ".title,\n.subtitle {\n}",
  "yomi": "カンマ",
  "oboe": "カンマ＝「と」",
  "kinou": "見た目を変える",
  "imi": "2つ以上に同じ指示",
  "tsukai": "カンマで並べる",
  "chui": [
   "カンマで区切る。最後のあとにカンマは付けない"
  ],
  "kotoba": [
   "いくつかの部品に同じ指示をしたい",
   "カンマ＝「と」",
   "カンマ",
   "CSS 書き方"
  ]
 },
 {
  "id": 46,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": ".main .title {\n}",
  "yomi": "スペース（〜の中の）",
  "oboe": "スペース＝「の中の」",
  "kinou": "見た目を変える",
  "imi": "main の箱の中の title だけ",
  "tsukai": "あいだはスペース",
  "chui": [
   "間の半角スペースが「〜の中の」の意味。詰めると別の意味になる"
  ],
  "kotoba": [
   "ある箱の中の部品だけ変えたい",
   "スペース＝「の中の」",
   "スペース（〜の中の）",
   "CSS 書き方"
  ]
 },
 {
  "id": 47,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "/* memo */",
  "yomi": "コメント",
  "oboe": "/* と */ ではさむと効かなくなる",
  "kinou": "準備・操作",
  "imi": "コメント（効かない）",
  "tsukai": "指示を一時的に止める",
  "chui": [
   "CSS のメモは /* */。HTML の <!-- --> とはちがう"
  ],
  "kotoba": [
   "CSSにメモを残したい",
   "一時的に止めたい",
   "/* と */ ではさむと効かなくなる",
   "コメント",
   "CSS 書き方"
  ]
 },
 {
  "id": 48,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "* {\n}",
  "yomi": "アスタリスク（全部）",
  "oboe": "*＝全部（何にでも当てはまる印）",
  "kinou": "見た目を変える",
  "imi": "すべての部品に効く",
  "tsukai": "最初に margin: 0;\npadding: 0; を書いて、\nブラウザが付ける余白を消す",
  "chui": [
   "全部に効くので、強い指示は書きすぎない"
  ],
  "kotoba": [
   "全部の部品にまとめて効かせたい",
   "*＝全部（何にでも当てはまる印）",
   "アスタリスク（全部）",
   "CSS 書き方"
  ]
 },
 {
  "id": 49,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "input[type=\"text\"] {\n}",
  "yomi": "インプット・カッコ・タイプ・\nイコール・テキスト",
  "oboe": "[ ]＝中の書き込み（属性）で 絞りこむ印",
  "kinou": "見た目を変える",
  "imi": "type が text のinput だけ",
  "tsukai": "チェックボックスには効かせず、\n文字の入力欄だけ整える",
  "chui": [
   "[ ] の中の \" を忘れない"
  ],
  "kotoba": [
   "決まった種類の入力欄だけ見た目を変えたい",
   "[ ]＝中の書き込み（属性）で",
   "絞りこむ印",
   "インプット・カッコ・タイプ・",
   "イコール・テキスト",
   "CSS 書き方"
  ]
 },
 {
  "id": 50,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "width: 960px;",
  "yomi": "ウィドス",
  "oboe": "width＝幅（wide＝広い）",
  "kinou": "見た目を変える",
  "imi": "幅",
  "tsukai": "授業では body を 960px にした",
  "chui": [
   "px は半角。数字と px の間に空白を入れない"
  ],
  "kotoba": [
   "幅を決めたい",
   "width＝幅（wide＝広い）",
   "ウィドス",
   "CSS 大きさ・色"
  ]
 },
 {
  "id": 51,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "width: 50%;",
  "yomi": "ウィドス・パーセント",
  "oboe": "%＝外の箱に対する割合",
  "kinou": "見た目を変える",
  "imi": "外の箱の半分の幅",
  "tsukai": "横に2つ並べるとき",
  "chui": [
   "外の箱の幅の何％か。外の箱の幅が決まっていないと思った通りにならない"
  ],
  "kotoba": [
   "外の箱の半分の幅にしたい",
   "%＝外の箱に対する割合",
   "ウィドス・パーセント",
   "CSS 大きさ・色"
  ]
 },
 {
  "id": 52,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "width: 100%;",
  "yomi": "ウィドス・ひゃくパーセント",
  "oboe": "100%＝外の箱いっぱい",
  "kinou": "見た目を変える",
  "imi": "外の箱いっぱいの幅",
  "tsukai": "画像がはみ出すとき",
  "chui": [
   "画像がはみ出すときに使う"
  ],
  "kotoba": [
   "画像を箱の幅に収めたい",
   "100%＝外の箱いっぱい",
   "ウィドス・ひゃくパーセント",
   "CSS 大きさ・色"
  ]
 },
 {
  "id": 53,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "height: 360px;",
  "yomi": "ハイト",
  "oboe": "height＝高さ（high＝高い）",
  "kinou": "見た目を変える",
  "imi": "高さ",
  "tsukai": "100% もある",
  "chui": [
   "中身が多いと、はみ出して下に重なる"
  ],
  "kotoba": [
   "高さを決めたい",
   "height＝高さ（high＝高い）",
   "ハイト",
   "CSS 大きさ・色"
  ]
 },
 {
  "id": 54,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "font-size: 36px;",
  "yomi": "フォントサイズ",
  "oboe": "font＝文字の形、size＝大きさ",
  "kinou": "見た目を変える",
  "imi": "文字の大きさ",
  "tsukai": "見出しを大きく",
  "chui": [
   "スマホでは大きすぎないか見る"
  ],
  "kotoba": [
   "文字を大きくしたい",
   "font＝文字の形、size＝大きさ",
   "フォントサイズ",
   "CSS 大きさ・色"
  ]
 },
 {
  "id": 55,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "color: white;",
  "yomi": "カラー・ホワイト",
  "oboe": "color＝色",
  "kinou": "見た目を変える",
  "imi": "文字の色",
  "tsukai": "#ffffff の形でもよい",
  "chui": [
   "color は文字の色。背景の色は background"
  ],
  "kotoba": [
   "文字の色を変えたい",
   "color＝色",
   "カラー・ホワイト",
   "CSS 大きさ・色"
  ]
 },
 {
  "id": 56,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "background: red;",
  "yomi": "バックグラウンド",
  "oboe": "background＝背景",
  "kinou": "見た目を変える",
  "imi": "背景の色",
  "tsukai": "#rrggbb の形でもよい",
  "chui": [
   "文字の色ではなく背景の色"
  ],
  "kotoba": [
   "背景に色を付けたい",
   "background＝背景",
   "バックグラウンド",
   "CSS 大きさ・色"
  ]
 },
 {
  "id": 57,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "background: url(../img/main_bg.jpg);",
  "yomi": "バックグラウンド・ユーアールエル",
  "oboe": "url＝場所。../＝1つ外のフォルダへ",
  "kinou": "見た目を変える",
  "imi": "背景に写真",
  "tsukai": "../ ＝ css フォルダから1つ外へ出る",
  "chui": [
   "CSS から見た場所で書く（../ で1つ外へ）"
  ],
  "kotoba": [
   "背景に写真を敷きたい",
   "url＝場所。../＝1つ外のフォルダへ",
   "バックグラウンド・ユーアールエル",
   "CSS 大きさ・色"
  ]
 },
 {
  "id": 58,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "background-size: cover;",
  "yomi": "バックグラウンドサイズ・カバー",
  "oboe": "cover＝おおう（すき間なく）",
  "kinou": "見た目を変える",
  "imi": "写真を箱いっぱいに広げる",
  "tsukai": "背景写真とセットで使う",
  "chui": [
   "箱からはみ出した写真の端は切れる"
  ],
  "kotoba": [
   "背景の写真を箱いっぱいに広げたい",
   "cover＝おおう（すき間なく）",
   "バックグラウンドサイズ・カバー",
   "CSS 大きさ・色"
  ]
 },
 {
  "id": 59,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "background-position: center;",
  "yomi": "バックグラウンドポジション・センター",
  "oboe": "position＝位置、center＝真ん中",
  "kinou": "見た目を変える",
  "imi": "写真の真ん中を見せる",
  "tsukai": "背景写真とセットで使う",
  "chui": [
   "cover と組にして使う"
  ],
  "kotoba": [
   "背景の写真の真ん中を見せたい",
   "position＝位置、center＝真ん中",
   "バックグラウンドポジション・センター",
   "CSS 大きさ・色"
  ]
 },
 {
  "id": 60,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "margin: 0 auto;",
  "yomi": "マージン・ゼロ・オート",
  "oboe": "auto＝自動（左右を同じだけ空ける）",
  "kinou": "見た目を変える",
  "imi": "箱を左右の真ん中に置く",
  "tsukai": "ページ全体を中央に寄せる。\n幅の指定とセットで使う",
  "chui": [
   "幅（width か max-width）を決めないと真ん中に寄らない"
  ],
  "kotoba": [
   "箱を真ん中に置きたい",
   "ページ全体を中央に寄せたい",
   "auto＝自動（左右を同じだけ空ける）",
   "マージン・ゼロ・オート",
   "CSS 大きさ・色"
  ]
 },
 {
  "id": 61,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "padding: 20px;",
  "yomi": "パディング",
  "oboe": "padding＝詰め物（箱の内側）",
  "kinou": "見た目を変える",
  "imi": "箱の内側の余白",
  "tsukai": "枠と文字のすき間をあける",
  "chui": [
   "padding は内側の余白、margin は外側の余白"
  ],
  "kotoba": [
   "枠と文字の間をあけたい",
   "padding＝詰め物（箱の内側）",
   "パディング",
   "CSS 大きさ・色"
  ]
 },
 {
  "id": 62,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "border: 1px solid #cccccc;",
  "yomi": "ボーダー・ソリッド",
  "oboe": "border＝境界線、solid＝実線",
  "kinou": "見た目を変える",
  "imi": "枠線（太さ・種類・色）",
  "tsukai": "箱を線で囲む",
  "chui": [
   "太さ・線の種類・色の3つを空白で区切る"
  ],
  "kotoba": [
   "箱を線で囲みたい",
   "border＝境界線、solid＝実線",
   "ボーダー・ソリッド",
   "CSS 大きさ・色"
  ]
 },
 {
  "id": 63,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "text-align: center;",
  "yomi": "テキストアライン・センター",
  "oboe": "align＝そろえる",
  "kinou": "見た目を変える",
  "imi": "文字を真ん中にそろえる",
  "tsukai": "flex を使わずに文字だけ寄せる",
  "chui": [
   "文字を寄せる。箱そのものは寄らない（箱は margin: 0 auto）"
  ],
  "kotoba": [
   "文字を真ん中にそろえたい",
   "align＝そろえる",
   "テキストアライン・センター",
   "CSS 大きさ・色"
  ]
 },
 {
  "id": 64,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "font-weight: bold;",
  "yomi": "フォントウェイト・ボールド",
  "oboe": "weight＝重さ（太さ）、bold＝太い",
  "kinou": "見た目を変える",
  "imi": "文字を太くする",
  "tsukai": "見出し・強調",
  "chui": [
   "見出し（h1〜h3）は最初から太い"
  ],
  "kotoba": [
   "文字を太くしたい",
   "weight＝重さ（太さ）、bold＝太い",
   "フォントウェイト・ボールド",
   "CSS 大きさ・色"
  ]
 },
 {
  "id": 65,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "font-family: sans-serif;",
  "yomi": "フォントファミリー・サンセリフ",
  "oboe": "family＝一族（書体のなかま）、sans-serif＝ゴシック",
  "kinou": "見た目を変える",
  "imi": "書体（フォント）",
  "tsukai": "ゴシック・明朝などを選ぶ",
  "chui": [
   "その書体が入っていないPCでは別の書体になる"
  ],
  "kotoba": [
   "書体を変えたい",
   "family＝一族（書体のなかま）、sans-serif＝ゴシック",
   "フォントファミリー・サンセリフ",
   "CSS 大きさ・色"
  ]
 },
 {
  "id": 66,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "line-height: 1.8;",
  "yomi": "ラインハイト",
  "oboe": "line＝行、height＝高さ",
  "kinou": "見た目を変える",
  "imi": "行の間隔",
  "tsukai": "文章を読みやすくする",
  "chui": [
   "単位なしの数字が使いやすい（文字の大きさの1.8倍）"
  ],
  "kotoba": [
   "行の間を広げたい",
   "line＝行、height＝高さ",
   "ラインハイト",
   "CSS 大きさ・色"
  ]
 },
 {
  "id": 67,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "max-width: 960px;",
  "yomi": "マックスウィドス",
  "oboe": "max＝maximum（いちばん大きい）",
  "kinou": "見た目を変える",
  "imi": "これ以上は広がらない幅",
  "tsukai": "スマホでははみ出さず、PCでは960で止まる",
  "chui": [
   "width とちがい、画面が狭いときは縮む"
  ],
  "kotoba": [
   "広がりすぎないようにしたい",
   "max＝maximum（いちばん大きい）",
   "マックスウィドス",
   "CSS 大きさ・色"
  ]
 },
 {
  "id": 68,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "box-sizing: border-box;",
  "yomi": "ボックスサイジング・\nボーダーボックス",
  "oboe": "sizing＝大きさの決め方、 border-box＝枠線まで含めて",
  "kinou": "見た目を変える",
  "imi": "幅に余白と枠を含める（はみ出し防止）",
  "tsukai": "* { } に書いておく。\nwidth: 50%; に padding を\n足しても 50% のまま",
  "chui": [
   "* { } に入れて全部に効かせることが多い"
  ],
  "kotoba": [
   "余白を足しても幅が増えないようにしたい",
   "sizing＝大きさの決め方、",
   "border-box＝枠線まで含めて",
   "ボックスサイジング・",
   "ボーダーボックス",
   "CSS 大きさ・色"
  ]
 },
 {
  "id": 69,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "margin-bottom: 30px;",
  "yomi": "マージンボトム",
  "oboe": "bottom＝下",
  "kinou": "見た目を変える",
  "imi": "下だけ外側の余白",
  "tsukai": "見出しと本文の間をあける。\nmargin-top（上）なども同じ",
  "chui": [
   "上の部品の margin-bottom と下の margin-top は足されず、大きいほうになる"
  ],
  "kotoba": [
   "下だけ間をあけたい",
   "bottom＝下",
   "マージンボトム",
   "CSS 大きさ・色"
  ]
 },
 {
  "id": 70,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "padding: 80px 20px;",
  "yomi": "パディング（数字2つ）",
  "oboe": "数字2つ＝上下・左右の順",
  "kinou": "見た目を変える",
  "imi": "上下80・左右20の内側の余白",
  "tsukai": "数字4つなら\n上・右・下・左（時計回り）。\nmargin も同じ決まり",
  "chui": [
   "2つ書くと「上下 左右」の順"
  ],
  "kotoba": [
   "上下と左右で余白を変えたい",
   "数字2つ＝上下・左右の順",
   "パディング（数字2つ）",
   "CSS 大きさ・色"
  ]
 },
 {
  "id": 71,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "background-color: #fff8dc;",
  "yomi": "バックグラウンドカラー",
  "oboe": "background＝背景、color＝色",
  "kinou": "見た目を変える",
  "imi": "背景の色（色だけを決める）",
  "tsukai": "background: と同じく色が付く。\n区画ごとに色を変えた",
  "chui": [
   "# のあとは6けた（または3けた）"
  ],
  "kotoba": [
   "背景に色だけ付けたい",
   "background＝背景、color＝色",
   "バックグラウンドカラー",
   "CSS 大きさ・色"
  ]
 },
 {
  "id": 72,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "background-image: url(../img/main_bg.jpg);",
  "yomi": "バックグラウンドイメージ・\nユーアールエル",
  "oboe": "image＝画像、url＝場所",
  "kinou": "見た目を変える",
  "imi": "背景に写真（写真だけを決める）",
  "tsukai": "background: url() と同じ。\n../ ＝ css フォルダから1つ外へ",
  "chui": [
   "写真が小さいと並んでくり返される（cover と組で）"
  ],
  "kotoba": [
   "背景に写真だけ敷きたい",
   "image＝画像、url＝場所",
   "バックグラウンドイメージ・",
   "ユーアールエル",
   "CSS 大きさ・色"
  ]
 },
 {
  "id": 73,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);",
  "yomi": "テキストシャドウ",
  "oboe": "text＝文字、shadow＝影。 数字は 横・縦・ぼかし・色",
  "kinou": "見た目を変える",
  "imi": "文字に影を付ける",
  "tsukai": "写真の上の白い文字を\n読みやすくする",
  "chui": [
   "横・縦・ぼかし・色の順"
  ],
  "kotoba": [
   "写真の上の文字を読みやすくしたい",
   "text＝文字、shadow＝影。",
   "数字は 横・縦・ぼかし・色",
   "テキストシャドウ",
   "CSS 大きさ・色"
  ]
 },
 {
  "id": 74,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "white-space: nowrap;",
  "yomi": "ホワイトスペース・ノーラップ",
  "oboe": "white-space＝空白の扱い、 nowrap＝折り返さない",
  "kinou": "見た目を変える",
  "imi": "文字を折り返さない",
  "tsukai": "NEWS の日付が\n2行に割れないようにした",
  "chui": [
   "長い文に使うとはみ出す"
  ],
  "kotoba": [
   "文字を折り返さないようにしたい",
   "white-space＝空白の扱い、",
   "nowrap＝折り返さない",
   "ホワイトスペース・ノーラップ",
   "CSS 大きさ・色"
  ]
 },
 {
  "id": 75,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "border-bottom: 1px solid #dddddd;",
  "yomi": "ボーダーボトム",
  "oboe": "border＝境界線、bottom＝下",
  "kinou": "見た目を変える",
  "imi": "下だけ線を引く",
  "tsukai": "表の行の区切り線。\nborder-top（上）なども",
  "chui": [
   "下だけ。上は border-top"
  ],
  "kotoba": [
   "下だけ線を引きたい",
   "border＝境界線、bottom＝下",
   "ボーダーボトム",
   "CSS 大きさ・色"
  ]
 },
 {
  "id": 76,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "border-collapse: collapse;",
  "yomi": "ボーダーコラプス",
  "oboe": "collapse＝つぶす （重なった線を1本にまとめる）",
  "kinou": "見た目を変える",
  "imi": "表のマスの線を1本にまとめる",
  "tsukai": "table に書く。\n無いとマスの線が二重になる",
  "chui": [
   "table に書く（td ではない）"
  ],
  "kotoba": [
   "表の線を1本にしたい",
   "collapse＝つぶす",
   "（重なった線を1本にまとめる）",
   "ボーダーコラプス",
   "CSS 大きさ・色"
  ]
 },
 {
  "id": 77,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "cursor: pointer;",
  "yomi": "カーソル・ポインター",
  "oboe": "cursor＝マウスの矢印、 pointer＝指さし",
  "kinou": "見た目を変える",
  "imi": "マウスを乗せると指の形になる",
  "tsukai": "ボタンに書く。押せる所だと伝わる",
  "chui": [
   "押せない所に付けると、押せると思われる"
  ],
  "kotoba": [
   "押せる所の矢印を指の形にしたい",
   "cursor＝マウスの矢印、",
   "pointer＝指さし",
   "カーソル・ポインター",
   "CSS 大きさ・色"
  ]
 },
 {
  "id": 78,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "display: flex;",
  "yomi": "ディスプレイ・フレックス",
  "oboe": "flex＝flexible（フレキシブル＝しなやか）",
  "kinou": "並べる",
  "imi": "中の部品を横に並べる",
  "tsukai": "並べたい部品の外側の箱に書く。無いと下の指示は全部効かない",
  "chui": [
   "並べたい部品の「外の箱」に書く（部品そのものではない）"
  ],
  "kotoba": [
   "横に並べたい",
   "flex＝flexible（フレキシブル＝しなやか）",
   "ディスプレイ・フレックス",
   "CSS 並べ方"
  ]
 },
 {
  "id": 79,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "justify-content: center;",
  "yomi": "ジャスティファイコンテント・センター",
  "oboe": "justify＝そろえる、content＝中身（左右の方向）",
  "kinou": "並べる",
  "imi": "左右の真ん中に寄せる",
  "tsukai": "justify ＝ 左右",
  "chui": [
   "display: flex; と同じ箱に書く"
  ],
  "kotoba": [
   "左右の真ん中に寄せたい",
   "justify＝そろえる、content＝中身（左右の方向）",
   "ジャスティファイコンテント・センター",
   "CSS 並べ方"
  ]
 },
 {
  "id": 80,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "justify-content: end;",
  "yomi": "ジャスティファイコンテント・エンド",
  "oboe": "end＝終わり（右はし）",
  "kinou": "並べる",
  "imi": "右に寄せる",
  "tsukai": "",
  "chui": [
   "display: flex; と同じ箱に書く"
  ],
  "kotoba": [
   "右に寄せたい",
   "end＝終わり（右はし）",
   "ジャスティファイコンテント・エンド",
   "CSS 並べ方"
  ]
 },
 {
  "id": 81,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "justify-content: space-between;",
  "yomi": "ジャスティファイコンテント・スペースビトゥイーン",
  "oboe": "space＝空き、between＝あいだ",
  "kinou": "並べる",
  "imi": "両端に置いて間を均等に",
  "tsukai": "メニューを横いっぱいに並べる",
  "chui": [
   "部品が1つだけだと左に寄るだけ"
  ],
  "kotoba": [
   "両端に置いて間を均等にしたい",
   "space＝空き、between＝あいだ",
   "ジャスティファイコンテント・スペースビトゥイーン",
   "CSS 並べ方"
  ]
 },
 {
  "id": 82,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "justify-content: space-evenly;",
  "yomi": "ジャスティファイコンテント・スペースイーブンリー",
  "oboe": "evenly＝均等に",
  "kinou": "並べる",
  "imi": "すき間を全部均等に",
  "tsukai": "",
  "chui": [
   "両端のすき間も同じになる（between とのちがい）"
  ],
  "kotoba": [
   "すき間を全部同じにしたい",
   "evenly＝均等に",
   "ジャスティファイコンテント・スペースイーブンリー",
   "CSS 並べ方"
  ]
 },
 {
  "id": 83,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "align-items: center;",
  "yomi": "アラインアイテムズ・センター",
  "oboe": "align＝一列にそろえる、items＝部品たち（上下の方向）",
  "kinou": "並べる",
  "imi": "上下の真ん中に寄せる",
  "tsukai": "align ＝ 上下",
  "chui": [
   "箱に高さが無いと上下には動かない"
  ],
  "kotoba": [
   "上下の真ん中に寄せたい",
   "align＝一列にそろえる、items＝部品たち（上下の方向）",
   "アラインアイテムズ・センター",
   "CSS 並べ方"
  ]
 },
 {
  "id": 84,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "align-items: end;",
  "yomi": "アラインアイテムズ・エンド",
  "oboe": "end＝終わり（下はし）",
  "kinou": "並べる",
  "imi": "下に寄せる",
  "tsukai": "",
  "chui": [
   "箱に高さが無いと上下には動かない"
  ],
  "kotoba": [
   "下に寄せたい",
   "end＝終わり（下はし）",
   "アラインアイテムズ・エンド",
   "CSS 並べ方"
  ]
 },
 {
  "id": 85,
  "kai": 1,
  "date": "2026-10-24",
  "theme": "HTML・CSS",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "flex-direction: column;",
  "yomi": "フレックスディレクション・カラム",
  "oboe": "direction＝方向、column＝柱（縦）",
  "kinou": "並べる",
  "imi": "縦に並べ直す",
  "tsukai": "左右と上下の役目が入れ替わる",
  "chui": [
   "縦にすると justify-content と align-items の向きが入れ替わる"
  ],
  "kotoba": [
   "縦に並べたい",
   "direction＝方向、column＝柱（縦）",
   "フレックスディレクション・カラム",
   "CSS 並べ方"
  ]
 },
 {
  "id": 86,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "gap: 20px;",
  "yomi": "ギャップ",
  "oboe": "gap＝すき間",
  "kinou": "並べる",
  "imi": "並んだ部品どうしのすき間",
  "tsukai": "flex の箱に書く",
  "chui": [
   "display: flex; の箱に書く"
  ],
  "kotoba": [
   "並んだ部品の間をあけたい",
   "gap＝すき間",
   "ギャップ",
   "CSS 並べ方"
  ]
 },
 {
  "id": 87,
  "kai": 1,
  "date": "2026-10-27",
  "theme": "課題 チーズアカデミー",
  "shiryou": "20261024_02_HTML_CSS",
  "code": "display: block;",
  "yomi": "ディスプレイ・ブロック",
  "oboe": "block＝かたまり （1つで1行まるごと使う）",
  "kinou": "並べる",
  "imi": "1つで1行を使う（次の部品は下の行へ）",
  "tsukai": "label は普通は横に続く。\n1行ずつ並べるときに使った",
  "chui": [
   "a や span など横に続く部品を、1行ずつにする"
  ],
  "kotoba": [
   "横に続く部品を1行ずつにしたい",
   "block＝かたまり",
   "（1つで1行まるごと使う）",
   "ディスプレイ・ブロック",
   "CSS 並べ方"
  ]
 },
 {
  "id": 88,
  "kai": 2,
  "date": "2026-10-31",
  "theme": "JavaScript01",
  "shiryou": "20261031_03_JavaScript01",
  "code": "<script src=\"js/main.js\"></script>",
  "yomi": "スクリプト・エスアールシー",
  "oboe": "script＝台本。src＝source（出どころ）",
  "kinou": "つなぐ",
  "imi": "HTML に JavaScript のファイルをつなぐ。</body> のすぐ上に書く",
  "tsukai": "    <script src=\"js/main.js\"></script>\n  </body>",
  "chui": [
   "CSS は head の link、JS は body の一番下の script。混ぜない"
  ],
  "kotoba": [
   "つなぐ",
   "jsを読み込む",
   "すくりぷと",
   "動かない"
  ]
 },
 {
  "id": 89,
  "kai": 2,
  "date": "2026-10-31",
  "theme": "JavaScript01",
  "shiryou": "20261031_03_JavaScript01",
  "code": "alert(\"Hello world\");",
  "yomi": "アラート",
  "oboe": "alert＝警報・お知らせ",
  "kinou": "表示する",
  "imi": "画面の真ん中に小窓（お知らせ）を出す。OK を押すまで止まる",
  "tsukai": "alert(\"Hello world\");",
  "chui": [
   "ボタンが反応するかの確認に使う。確認できたら消す"
  ],
  "kotoba": [
   "小窓",
   "お知らせ",
   "ポップアップ",
   "あらーと",
   "確かめる"
  ]
 },
 {
  "id": 90,
  "kai": 2,
  "date": "2026-10-31",
  "theme": "JavaScript01",
  "shiryou": "20261031_03_JavaScript01",
  "code": "console.log(\"Hello world\");",
  "yomi": "コンソール・ログ",
  "oboe": "console＝操作盤、log＝記録（日誌）",
  "kinou": "表示する",
  "imi": "検証画面（F12）の Console にだけ出す。途中経過の確認用のメモ",
  "tsukai": "console.log(randomNumber);",
  "chui": [
   "F12 →「Console」タブで見る。画面には出ない",
   "動かないときは、途中に入れてどこまで動いたかを見る"
  ],
  "kotoba": [
   "確認",
   "途中",
   "どこまで動いた",
   "こんそーる",
   "検証"
  ]
 },
 {
  "id": 91,
  "kai": 2,
  "date": "2026-10-31",
  "theme": "JavaScript01",
  "shiryou": "20261031_03_JavaScript01",
  "code": "const 名前 = 値;",
  "yomi": "コンスト",
  "oboe": "constant＝変わらない",
  "kinou": "まとめる",
  "imi": "名札をつけた箱（変数）に値を入れる。あとで名前で呼び出す。中身は入れ替えられない",
  "tsukai": "const text1 = \"hello\";",
  "chui": [
   "= は「等しい」ではなく「右のものを左の箱に入れる」",
   "名前の先頭を数字にしない（3text は不可）"
  ],
  "kotoba": [
   "変数",
   "箱",
   "名札",
   "入れる",
   "こんすと"
  ]
 },
 {
  "id": 92,
  "kai": 2,
  "date": "2026-10-31",
  "theme": "JavaScript01",
  "shiryou": "20261031_03_JavaScript01",
  "code": "let 名前 = 値;",
  "yomi": "レット",
  "oboe": "let＝〜にしよう（あとで変えてよい）",
  "kinou": "まとめる",
  "imi": "中身を入れ替えられる箱（変数）。入れ替えたいときだけ使う",
  "tsukai": "let medal = 0;\nmedal = medal + 5;",
  "chui": [
   "var は昔の書き方。使わない",
   "基本は const。どうしても入れ替えるときだけ let"
  ],
  "kotoba": [
   "変数",
   "入れ替える",
   "増やす",
   "れっと"
  ]
 },
 {
  "id": 93,
  "kai": 2,
  "date": "2026-10-31",
  "theme": "JavaScript01",
  "shiryou": "20261031_03_JavaScript01",
  "code": "\"100\" + 200",
  "yomi": "もじれつ と すうち",
  "oboe": "\" で囲んだら文字。囲まなければ数",
  "kinou": "計算する",
  "imi": "\" で囲むと文字列になる。文字列がまざると足し算ではなく、つながる（100200）",
  "tsukai": "const number1 = 100;      // 数値\nconst number3 = \"100\";    // 文字列",
  "chui": [
   "100 と \"100\" は別物。足し算の結果がおかしいときは \" で囲んでいないか見る"
  ],
  "kotoba": [
   "文字",
   "数字",
   "足し算がおかしい",
   "つながる",
   "文字列"
  ]
 },
 {
  "id": 94,
  "kai": 2,
  "date": "2026-10-31",
  "theme": "JavaScript01",
  "shiryou": "20261031_03_JavaScript01",
  "code": "+ - * / %",
  "yomi": "けいさんの きごう",
  "oboe": "* は × の代わり、/ は ÷ の代わり、% は余り",
  "kinou": "計算する",
  "imi": "足す・引く・かける（*）・わる（/）・わった余り（%）",
  "tsukai": "10 % 3   // 1（余り）",
  "chui": [
   "かけ算は ×ではなく *、わり算は ÷ ではなく /"
  ],
  "kotoba": [
   "計算",
   "かけ算",
   "わり算",
   "余り",
   "四則"
  ]
 },
 {
  "id": 95,
  "kai": 2,
  "date": "2026-10-31",
  "theme": "JavaScript01",
  "shiryou": "20261031_03_JavaScript01",
  "code": "Math.floor(Math.random() * 5)",
  "yomi": "マス・フロア マス・ランダム",
  "oboe": "random＝でたらめ、floor＝床（下へ切り捨て）",
  "kinou": "でたらめに選ぶ",
  "imi": "0〜4 のどれかの数を出す。* のあとの数＝出てくる数の種類の数",
  "tsukai": "const randomNumber = Math.floor(Math.random() * 3);  // 0・1・2",
  "chui": [
   "Math.random() だけだと 0.123… の小数。Math.floor で小数を切り捨てる",
   "おみくじは5種類なので * 5、じゃんけんは3種類なので * 3"
  ],
  "kotoba": [
   "ランダム",
   "乱数",
   "くじ",
   "おみくじ",
   "でたらめ",
   "毎回ちがう",
   "らんだむ"
  ]
 },
 {
  "id": 96,
  "kai": 2,
  "date": "2026-10-31",
  "theme": "JavaScript01",
  "shiryou": "20261031_03_JavaScript01",
  "code": "if (条件) {\n} else if (条件) {\n} else {\n}",
  "yomi": "イフ・エルス",
  "oboe": "if＝もし、else＝そうでなければ",
  "kinou": "条件で分ける",
  "imi": "場合分け。上から順に見て、最初に当てはまったところだけを実行する",
  "tsukai": "if (num === 0) {\n  pc = \"グー\";\n} else if (num === 1) {\n  pc = \"チョキ\";\n} else {\n  pc = \"パー\";\n}",
  "chui": [
   "先に if () {} else {} の外枠だけ打ってから中身を書く（カッコの閉じ忘れが減る）"
  ],
  "kotoba": [
   "場合分け",
   "もし",
   "条件",
   "いふ",
   "勝ち負け",
   "判定"
  ]
 },
 {
  "id": 97,
  "kai": 2,
  "date": "2026-10-31",
  "theme": "JavaScript01",
  "shiryou": "20261031_03_JavaScript01",
  "code": "===",
  "yomi": "イコール3つ",
  "oboe": "3本そろって初めて「同じ」",
  "kinou": "条件で分ける",
  "imi": "左と右がまったく同じか比べる。同じでないかは !==",
  "tsukai": "if (hand === \"グー\") { … }",
  "chui": [
   "= 1つは「入れる」、=== は「比べる」。== は使わない"
  ],
  "kotoba": [
   "同じか",
   "比べる",
   "イコール",
   "一致"
  ]
 },
 {
  "id": 98,
  "kai": 2,
  "date": "2026-10-31",
  "theme": "JavaScript01",
  "shiryou": "20261031_03_JavaScript01",
  "code": "&&　||",
  "yomi": "アンド　オア",
  "oboe": "&＝and（と）、|＝縦棒は「または」",
  "kinou": "条件で分ける",
  "imi": "&& は両方そろったとき、|| はどちらか1つでよいとき",
  "tsukai": "if (my === \"グー\" && pc === \"チョキ\") { … }",
  "chui": [
   "|| は Shift ＋ ¥ キー（Enter の左上あたり）"
  ],
  "kotoba": [
   "かつ",
   "または",
   "両方",
   "どちらか",
   "あんど",
   "おあ"
  ]
 },
 {
  "id": 99,
  "kai": 2,
  "date": "2026-10-31",
  "theme": "JavaScript01",
  "shiryou": "20261031_03_JavaScript01",
  "code": "<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js\"></script>",
  "yomi": "ジェイクエリ",
  "oboe": "jQuery＝JavaScript の便利な道具箱（Query＝問い合わせ）",
  "kinou": "つなぐ",
  "imi": "jQuery（他の人が作った便利な道具）をつなぐ。自分の js より上に書く",
  "tsukai": "<script src=\"…jquery.min.js\"></script>\n<script src=\"js/main.js\"></script>",
  "chui": [
   "jQuery が上、自分の js が下。逆にすると道具が届く前に作業を始めてエラーになる"
  ],
  "kotoba": [
   "じぇいくえり",
   "jquery",
   "道具",
   "ライブラリ",
   "$ が動かない"
  ]
 },
 {
  "id": 100,
  "kai": 2,
  "date": "2026-10-31",
  "theme": "JavaScript01",
  "shiryou": "20261031_03_JavaScript01",
  "code": "$(\"#button\").on(\"click\", function () {\n});",
  "yomi": "ドル・オン・クリック",
  "oboe": "$＝jQuery の呼び出し、on＝〜のときに、click＝押す",
  "kinou": "クリックで動かす",
  "imi": "id=\"button\" の部品をクリックしたら、{ } の中を実行する",
  "tsukai": "$(\"#gu\").on(\"click\", function () {\n  alert(\"グー\");\n});",
  "chui": [
   "閉じは }); の3つ。変わるのは id 名とイベントだけ",
   "# を忘れない（# は id の印）"
  ],
  "kotoba": [
   "ボタン",
   "押したら",
   "クリック",
   "おしたら",
   "反応"
  ]
 },
 {
  "id": 101,
  "kai": 2,
  "date": "2026-10-31",
  "theme": "JavaScript01",
  "shiryou": "20261031_03_JavaScript01",
  "code": "id=\"gu\"",
  "yomi": "アイディー",
  "oboe": "id＝identity（身分証）。1人に1枚",
  "kinou": "画面に置く",
  "imi": "部品につける機器番号。1ページに1つだけ。jQuery では $(\"#gu\") で呼ぶ",
  "tsukai": "<button id=\"gu\">グー</button>",
  "chui": [
   "class は同じ名札を何個でも。id は1つだけ",
   "HTML の id=\"gu\" と $(\"#gu\") の名前を一致させる"
  ],
  "kotoba": [
   "名札",
   "番号",
   "あいでぃー",
   "呼び出す"
  ]
 },
 {
  "id": 102,
  "kai": 2,
  "date": "2026-10-31",
  "theme": "JavaScript01",
  "shiryou": "20261031_03_JavaScript01",
  "code": "$(\"#judgment\").text(\"あなたの勝ち\");",
  "yomi": "テキスト",
  "oboe": "text＝文字",
  "kinou": "表示する",
  "imi": "id の場所の文字を書き換える（文字のまま出す）",
  "tsukai": "$(\"#pc_hand\").text(\"コンピュータ：\" + pc);",
  "chui": [
   "タグも効かせたいときは .html()"
  ],
  "kotoba": [
   "書き換える",
   "画面に出す",
   "文字",
   "てきすと"
  ]
 },
 {
  "id": 103,
  "kai": 2,
  "date": "2026-10-31",
  "theme": "Git の事前準備",
  "shiryou": "20261031_04_Git_事前準備",
  "code": "git config --global user.name \"名前\"",
  "yomi": "ギット・コンフィグ",
  "oboe": "config＝configuration（設定）",
  "kinou": "準備・操作",
  "imi": "Git に自分の名前とメールを登録する。日報の名前欄のようなもの（誰が記録したかが残る）",
  "tsukai": "git config --global user.name \"hoge\"\ngit config --global user.email \"hoge@example.com\"\ngit config --global init.defaultBranch main",
  "chui": [
   "1回やればよい"
  ],
  "kotoba": [
   "名前",
   "メール",
   "設定",
   "こんふぃぐ",
   "最初の準備"
  ]
 },
 {
  "id": 104,
  "kai": 2,
  "date": "2026-10-31",
  "theme": "Git の事前準備",
  "shiryou": "20261031_04_Git_事前準備",
  "code": "ssh-keygen -t ed25519",
  "yomi": "エスエスエイチ・キージェン",
  "oboe": "key＝鍵、gen＝generate（作る）",
  "kinou": "準備・操作",
  "imi": "GitHub とつなぐ鍵を作る。鍵は2つで1組（公開鍵＝GitHub に登録／秘密鍵＝PC にだけ置く）",
  "tsukai": "ssh-keygen -t ed25519\nclip < ~/.ssh/id_ed25519.pub",
  "chui": [
   "質問には何も入れず Enter を3回",
   "秘密鍵は人に渡さない（家の鍵と同じ）"
  ],
  "kotoba": [
   "鍵",
   "かぎ",
   "SSH",
   "合い鍵",
   "接続"
  ]
 },
 {
  "id": 105,
  "kai": 2,
  "date": "2026-10-31",
  "theme": "Git の事前準備",
  "shiryou": "20261031_04_Git_事前準備",
  "code": "ssh -T git@github.com",
  "yomi": "エスエスエイチ・ティー",
  "oboe": "T＝Test（ためす）",
  "kinou": "準備・操作",
  "imi": "GitHub とつながったか確かめる。Hi ○○! と出れば成功",
  "tsukai": "ssh -T git@github.com",
  "chui": [
   "途中で聞かれたら yes",
   "Git Bash では Ctrl + V で貼れない（右クリック→Paste か Shift + Insert）"
  ],
  "kotoba": [
   "接続確認",
   "つながったか",
   "確かめる"
  ]
 },
 {
  "id": 106,
  "kai": 2,
  "date": "2026-11-05",
  "theme": "課題 じゃんけん",
  "shiryou": "20261031_03_JavaScript01",
  "code": "function spin(数) {\n}",
  "yomi": "ファンクション",
  "oboe": "function＝働き・機能",
  "kinou": "まとめる",
  "imi": "やることのまとまりに名前をつける。spin(5); と呼ぶと中身が動く",
  "tsukai": "function spin(getMedal) {\n  medal = medal + getMedal;\n}\nspin(5);",
  "chui": [
   "3つのボタンで同じことをするなら1つにまとめて呼ぶ"
  ],
  "kotoba": [
   "まとめる",
   "関数",
   "ふぁんくしょん",
   "同じ処理",
   "何回も使う"
  ]
 },
 {
  "id": 107,
  "kai": 2,
  "date": "2026-11-05",
  "theme": "課題 じゃんけん",
  "shiryou": "20261031_03_JavaScript01",
  "code": "setInterval(… , 80)　clearInterval()",
  "yomi": "セット・インターバル",
  "oboe": "interval＝間隔。clear＝取り消す",
  "kinou": "時間で動かす",
  "imi": "決めた時間ごと（80＝0.08秒）にくり返す。clearInterval で止める",
  "tsukai": "const timer = setInterval(function () { … }, 80);\nclearInterval(timer);",
  "chui": [
   "止める clearInterval を忘れると回り続ける"
  ],
  "kotoba": [
   "くり返し",
   "ルーレット",
   "回す",
   "演出",
   "時間ごと"
  ]
 },
 {
  "id": 108,
  "kai": 2,
  "date": "2026-11-05",
  "theme": "課題 じゃんけん",
  "shiryou": "20261031_03_JavaScript01",
  "code": "setTimeout(… , 1500)",
  "yomi": "セット・タイムアウト",
  "oboe": "timeout＝時間切れ（になったら動く）",
  "kinou": "時間で動かす",
  "imi": "決めた時間（1500＝1.5秒）のあとに1回だけ実行する",
  "tsukai": "setTimeout(function () {\n  clearInterval(timer);\n}, 1500);",
  "chui": [
   "数はミリ秒（1000＝1秒）"
  ],
  "kotoba": [
   "あとで",
   "待つ",
   "時間差",
   "遅らせる"
  ]
 },
 {
  "id": 109,
  "kai": 2,
  "date": "2026-11-05",
  "theme": "課題 じゃんけん",
  "shiryou": "20261031_03_JavaScript01",
  "code": "transform: rotate(90deg);",
  "yomi": "トランスフォーム・ローテート",
  "oboe": "transform＝形を変える、rotate＝回す、deg＝degree（度）",
  "kinou": "見た目を変える",
  "imi": "部品を回す。scaleX(-1) で左右反転",
  "tsukai": "#face { transform: rotate(-90deg); }",
  "chui": [
   "もとに戻すときは transform: none;"
  ],
  "kotoba": [
   "回す",
   "向き",
   "反転",
   "傾ける"
  ]
 },
 {
  "id": 110,
  "kai": 3,
  "date": "2026-11-07",
  "theme": "Git と GitHub",
  "shiryou": "20261107_05_Git_と_GitHub",
  "code": "git init",
  "yomi": "ギット・イニット",
  "oboe": "init＝initialize（はじめる）",
  "kinou": "Gitで記録する",
  "imi": "このフォルダを Git の管理下に置く（.git フォルダができる）。最初の1回だけ",
  "tsukai": "git init",
  "chui": [
   "2回目からは打たない"
  ],
  "kotoba": [
   "はじめる",
   "管理",
   "いにっと",
   "最初"
  ]
 },
 {
  "id": 111,
  "kai": 3,
  "date": "2026-11-07",
  "theme": "Git と GitHub",
  "shiryou": "20261107_05_Git_と_GitHub",
  "code": "git add .",
  "yomi": "ギット・アド・ドット",
  "oboe": "add＝加える、.＝ここ全部",
  "kinou": "Gitで記録する",
  "imi": "フォルダ内の変更したファイルを、記録する対象に選ぶ",
  "tsukai": "git add .",
  "chui": [
   "add と . の間は半角スペース"
  ],
  "kotoba": [
   "選ぶ",
   "あど",
   "記録の前"
  ]
 },
 {
  "id": 112,
  "kai": 3,
  "date": "2026-11-07",
  "theme": "Git と GitHub",
  "shiryou": "20261107_05_Git_と_GitHub",
  "code": "git commit -m \"メッセージ\"",
  "yomi": "ギット・コミット",
  "oboe": "commit＝記録に残す、-m＝message",
  "kinou": "Gitで記録する",
  "imi": "選んだファイルの今の状態を1つのバージョンとして記録する（写真で一瞬を切り取る）",
  "tsukai": "git commit -m \"first commit\"",
  "chui": [
   "メッセージは何をしたかが分かる言葉にする",
   "以降は 書く → add → commit → push のくり返し"
  ],
  "kotoba": [
   "記録",
   "保存",
   "バージョン",
   "こみっと",
   "写真"
  ]
 },
 {
  "id": 113,
  "kai": 3,
  "date": "2026-11-07",
  "theme": "Git と GitHub",
  "shiryou": "20261107_05_Git_と_GitHub",
  "code": "git branch -M main",
  "yomi": "ギット・ブランチ・エム・メイン",
  "oboe": "branch＝枝、main＝本線",
  "kinou": "Gitで記録する",
  "imi": "今いるブランチの名前を main にする",
  "tsukai": "git branch -M main",
  "chui": [
   "-M は大文字"
  ],
  "kotoba": [
   "名前",
   "main",
   "ブランチ"
  ]
 },
 {
  "id": 114,
  "kai": 3,
  "date": "2026-11-07",
  "theme": "Git と GitHub",
  "shiryou": "20261107_05_Git_と_GitHub",
  "code": "git remote add origin URL",
  "yomi": "ギット・リモート・アド",
  "oboe": "remote＝遠く（ネットの向こう）、origin＝元",
  "kinou": "GitHubに出す",
  "imi": "送り先の GitHub リポジトリを origin という名前で登録する。最初の1回だけ",
  "tsukai": "git remote add origin git@github.com:ユーザ名/janken.git",
  "chui": [
   "URL は GitHub の SSH タブのもの"
  ],
  "kotoba": [
   "送り先",
   "登録",
   "りもーと",
   "URL"
  ]
 },
 {
  "id": 115,
  "kai": 3,
  "date": "2026-11-07",
  "theme": "Git と GitHub",
  "shiryou": "20261107_05_Git_と_GitHub",
  "code": "git push -u origin main",
  "yomi": "ギット・プッシュ",
  "oboe": "push＝押し出す（送る）",
  "kinou": "GitHubに出す",
  "imi": "手元の記録を GitHub に送る。-u で次から送り先を覚える",
  "tsukai": "git push -u origin main\ngit push origin develop",
  "chui": [
   "develop で作業しているときは git push origin develop"
  ],
  "kotoba": [
   "送る",
   "アップロード",
   "ぷっしゅ",
   "上げる"
  ]
 },
 {
  "id": 116,
  "kai": 3,
  "date": "2026-11-07",
  "theme": "Git と GitHub",
  "shiryou": "20261107_05_Git_と_GitHub",
  "code": "git pull origin main",
  "yomi": "ギット・プル",
  "oboe": "pull＝引っぱる（取ってくる）",
  "kinou": "GitHubに出す",
  "imi": "GitHub の最新を手元に取ってくる",
  "tsukai": "git switch main\ngit pull origin main",
  "chui": [
   "main に切り替えて（git switch main）から打つ"
  ],
  "kotoba": [
   "取ってくる",
   "最新",
   "ぷる",
   "ダウンロード"
  ]
 },
 {
  "id": 117,
  "kai": 3,
  "date": "2026-11-07",
  "theme": "Git と GitHub",
  "shiryou": "20261107_05_Git_と_GitHub",
  "code": "git branch develop　git switch develop",
  "yomi": "ギット・ブランチ　ギット・スイッチ",
  "oboe": "develop＝開発、switch＝切り替え",
  "kinou": "Gitで記録する",
  "imi": "作業用の枝（develop）を作って移る。git branch だけ打つと今いる枝に * が付く",
  "tsukai": "git branch develop\ngit switch develop\ngit branch",
  "chui": [
   "main は本番用。いつも動く状態にしておく。作業は develop で"
  ],
  "kotoba": [
   "枝",
   "ブランチ",
   "切り替え",
   "すいっち",
   "develop"
  ]
 },
 {
  "id": 118,
  "kai": 3,
  "date": "2026-11-07",
  "theme": "Git と GitHub",
  "shiryou": "20261107_05_Git_と_GitHub",
  "code": "プルリクエスト → マージ",
  "yomi": "プル・リクエスト",
  "oboe": "pull request＝取り込んでのお願い、merge＝合流",
  "kinou": "GitHubに出す",
  "imi": "develop の変更を main に取り込んでよいか確かめて（プルリク）、取り込む（マージ）。GitHub の画面で行う",
  "tsukai": "Pull requests → New pull request → main ← develop → Create → Merge pull request",
  "chui": [
   "向きは main ← develop"
  ],
  "kotoba": [
   "プルリク",
   "取り込む",
   "まーじ",
   "合体"
  ]
 },
 {
  "id": 119,
  "kai": 3,
  "date": "2026-11-07",
  "theme": "Git と GitHub",
  "shiryou": "20261107_05_Git_と_GitHub",
  "code": "readme.md",
  "yomi": "リードミー",
  "oboe": "read me＝私を読んで",
  "kinou": "GitHubに出す",
  "imi": "プロダクトの案内（タイトル・紹介・工夫した点・苦戦した点）。マークダウンで書く",
  "tsukai": "# タイトル\n## プロダクトの紹介\n- 箇条書き",
  "chui": [
   "README が無いと再提出になる"
  ],
  "kotoba": [
   "説明",
   "案内",
   "りーどみー",
   "提出",
   "README"
  ]
 },
 {
  "id": 120,
  "kai": 3,
  "date": "2026-11-07",
  "theme": "Git と GitHub",
  "shiryou": "20261107_05_Git_と_GitHub",
  "code": "GitHub Pages",
  "yomi": "ギットハブ・ページズ",
  "oboe": "pages＝ページ（公開する紙面）",
  "kinou": "GitHubに出す",
  "imi": "GitHub に置いたページを、誰でも見られるURLで公開する。提出のURLに使う",
  "tsukai": "Settings → Pages → Branch: main → Save",
  "chui": [
   "設定しないと Pages の URL が開かない（cheese・janken は 11/12 に設定）"
  ],
  "kotoba": [
   "公開",
   "URL",
   "ページズ",
   "提出"
  ]
 },
 {
  "id": 121,
  "kai": 4,
  "date": "2026-11-14",
  "theme": "JavaScript02",
  "shiryou": "20261114_06_JavaScript02",
  "code": "const hands = [\"グー\", \"チョキ\", \"パー\"];",
  "yomi": "はいれつ",
  "oboe": "[ ]＝仕切り箱",
  "kinou": "まとめる",
  "imi": "番号つきの仕切り箱。[ ] で囲みカンマで区切る。hands[0] で1番目を取り出す",
  "tsukai": "console.log(hands[0]);  // グー",
  "chui": [
   "番号は 0 から数える（1番目が [0]）"
  ],
  "kotoba": [
   "配列",
   "仕切り箱",
   "はいれつ",
   "まとめて",
   "一覧",
   "リスト"
  ]
 },
 {
  "id": 122,
  "kai": 4,
  "date": "2026-11-14",
  "theme": "JavaScript02",
  "shiryou": "20261114_06_JavaScript02",
  "code": "配列.length",
  "yomi": "レングス",
  "oboe": "length＝長さ",
  "kinou": "まとめる",
  "imi": "箱の数（中身の数）",
  "tsukai": "hands.length  // 3",
  "chui": [
   "* 3 ではなく * hands.length と書くと、中身を増やしても直さなくてよい"
  ],
  "kotoba": [
   "数",
   "何個",
   "長さ",
   "れんぐす"
  ]
 },
 {
  "id": 123,
  "kai": 4,
  "date": "2026-11-14",
  "theme": "JavaScript02",
  "shiryou": "20261114_06_JavaScript02",
  "code": "hands[Math.floor(Math.random() * hands.length)]",
  "yomi": "はいれつから くじびき",
  "oboe": "箱の数だけくじを作る",
  "kinou": "でたらめに選ぶ",
  "imi": "配列からランダムに1つ取り出す。if を並べなくてよい",
  "tsukai": "const pc = hands[Math.floor(Math.random() * hands.length)];",
  "chui": [
   "カッコが3重。外側の [ ] の閉じ忘れに注意"
  ],
  "kotoba": [
   "ランダム",
   "くじ",
   "1つ選ぶ",
   "おみくじ"
  ]
 },
 {
  "id": 124,
  "kai": 4,
  "date": "2026-11-14",
  "theme": "JavaScript02",
  "shiryou": "20261114_06_JavaScript02",
  "code": "unshift()　push()",
  "yomi": "アンシフト　プッシュ",
  "oboe": "push＝後ろへ押し込む、unshift＝前へ（shift の逆）",
  "kinou": "まとめる",
  "imi": "unshift＝先頭に足す（束のいちばん上）、push＝末尾に足す（束のいちばん下）",
  "tsukai": "history.unshift(result);",
  "chui": [
   "( ) の中に足したいものを入れる。空だと何も足されない"
  ],
  "kotoba": [
   "足す",
   "追加",
   "履歴",
   "あんしふと",
   "ぷっしゅ"
  ]
 },
 {
  "id": 125,
  "kai": 4,
  "date": "2026-11-14",
  "theme": "JavaScript02",
  "shiryou": "20261114_06_JavaScript02",
  "code": "shift()　pop()",
  "yomi": "シフト　ポップ",
  "oboe": "pop＝ポンと抜く（後ろ）、shift＝ずらす（前を抜く）",
  "kinou": "消す",
  "imi": "shift＝先頭を消す、pop＝末尾を消す",
  "tsukai": "history.pop();",
  "chui": [
   "消したものは戻らない"
  ],
  "kotoba": [
   "消す",
   "減らす",
   "古いのを消す",
   "ぽっぷ"
  ]
 },
 {
  "id": 126,
  "kai": 4,
  "date": "2026-11-14",
  "theme": "JavaScript02",
  "shiryou": "20261114_06_JavaScript02",
  "code": "resultTable[0][1]",
  "yomi": "はいれつのなかの はいれつ",
  "oboe": "[行][列]＝縦が先、横があと",
  "kinou": "まとめる",
  "imi": "表の形の配列。[行][列] の順に番号を2つ並べる。じゃんけんの if 9通りが表1つで済む",
  "tsukai": "const resultTable = [\n  [\"draw\", \"win\", \"lose\"],\n  [\"lose\", \"draw\", \"win\"],\n  [\"win\", \"lose\", \"draw\"],\n];",
  "chui": [
   "番号は「行 → 列」の順"
  ],
  "kotoba": [
   "表",
   "2次元",
   "勝ち負け表",
   "行と列"
  ]
 },
 {
  "id": 127,
  "kai": 4,
  "date": "2026-11-14",
  "theme": "JavaScript02",
  "shiryou": "20261114_06_JavaScript02",
  "code": "for (let i = 0; i < list.length; i++) {\n}",
  "yomi": "フォー",
  "oboe": "for＝〜の間（回数ぶん）",
  "kinou": "くり返す",
  "imi": "決めた回数くり返す。i を箱の番号に使うと list[i] で中身を順に全部取り出せる（電柱を1本目から順に巡視）",
  "tsukai": "for (let i = 0; i < history.length; i++) {\n  html.push(\"<p>\" + history[i] + \"</p>\");\n}",
  "chui": [
   "区切りは ; が2つ（カンマではない）",
   "先に for () { } の形を作ってから中身を書く"
  ],
  "kotoba": [
   "くり返し",
   "ループ",
   "全部",
   "順番に",
   "ふぉー",
   "一覧を出す"
  ]
 },
 {
  "id": 128,
  "kai": 4,
  "date": "2026-11-14",
  "theme": "JavaScript02",
  "shiryou": "20261114_06_JavaScript02",
  "code": "i++",
  "yomi": "アイ・プラスプラス",
  "oboe": "+ を2つで「1つ増やす」",
  "kinou": "くり返す",
  "imi": "i を 1 増やす（i = i + 1 と同じ）",
  "tsukai": "i++",
  "chui": [
   "for の3つ目に書く。書き忘れると止まらなくなる"
  ],
  "kotoba": [
   "1増やす",
   "数える",
   "ぷらすぷらす"
  ]
 },
 {
  "id": 129,
  "kai": 4,
  "date": "2026-11-14",
  "theme": "JavaScript02",
  "shiryou": "20261114_06_JavaScript02",
  "code": "const 履歴 = [];",
  "yomi": "からの はいれつ",
  "oboe": "[ ]＝空の仕切り箱",
  "kinou": "まとめる",
  "imi": "空の箱を用意する。ずっと覚えておく箱はクリックの枠の外（上）に置く",
  "tsukai": "const history = [];\n$(\"#pull\").on(\"click\", function () { … });",
  "chui": [
   "枠の中に書くと、押すたびに空に戻る"
  ],
  "kotoba": [
   "空",
   "用意",
   "履歴",
   "からっぽ"
  ]
 },
 {
  "id": 130,
  "kai": 4,
  "date": "2026-11-14",
  "theme": "JavaScript02",
  "shiryou": "20261114_06_JavaScript02",
  "code": "$(\"#history\").html(…);",
  "yomi": "エイチティーエムエル",
  "oboe": "html＝タグごと",
  "kinou": "表示する",
  "imi": "タグを効かせて書き換える（<p> が段落として出る）。.text() は文字のまま",
  "tsukai": "$(\"#history\").html(html);",
  "chui": [
   "人が打った文字をそのまま .html() に入れると、タグとして動いてしまう"
  ],
  "kotoba": [
   "書き換える",
   "タグごと",
   "一覧を出す"
  ]
 },
 {
  "id": 131,
  "kai": 4,
  "date": "2026-11-14",
  "theme": "JavaScript02",
  "shiryou": "20261114_06_JavaScript02",
  "code": "const student = { name: \"田中\" };",
  "yomi": "オブジェクト",
  "oboe": "{ }＝台帳の1行、object＝もの",
  "kinou": "まとめる",
  "imi": "名前（キー）つきの台帳の1行。student.name で取り出す",
  "tsukai": "const student01 = {\n  number: 1,\n  name: \"田中\",\n};\nconsole.log(student01.name);",
  "chui": [
   "順に並ぶデータ＝配列、いろいろな情報を持つ1つのもの＝オブジェクト",
   "配列の中にオブジェクト＝台帳（students[0].name）"
  ],
  "kotoba": [
   "台帳",
   "キー",
   "まとめる",
   "おぶじぇくと",
   "1人分"
  ]
 },
 {
  "id": 132,
  "kai": 4,
  "date": "2026-11-14",
  "theme": "JavaScript02",
  "shiryou": "20261114_06_JavaScript02",
  "code": "localStorage.setItem(key, value);",
  "yomi": "ローカルストレージ・セットアイテム",
  "oboe": "local＝手元、storage＝倉庫、set＝置く、item＝品物",
  "kinou": "保存する",
  "imi": "ブラウザの保管庫に、名札（key）をつけて保存する。リロードしても消えない",
  "tsukai": "localStorage.setItem(\"memo\", text);",
  "chui": [
   "保存できるのは文字だけ",
   "残るのはそのPCのそのブラウザだけ",
   "同じ名札で保存すると上書き"
  ],
  "kotoba": [
   "保存",
   "残す",
   "消えない",
   "ろーかるすとれーじ",
   "メモ帳",
   "セーブ"
  ]
 },
 {
  "id": 133,
  "kai": 4,
  "date": "2026-11-14",
  "theme": "JavaScript02",
  "shiryou": "20261114_06_JavaScript02",
  "code": "localStorage.getItem(key);",
  "yomi": "ローカルストレージ・ゲットアイテム",
  "oboe": "get＝取る",
  "kinou": "保存する",
  "imi": "保管庫から名札で取り出す",
  "tsukai": "const text = localStorage.getItem(\"memo\");",
  "chui": [
   "ページを開いたときに読む処理は、クリックの枠の外に書く",
   "保存が無いと null。if で確かめてから使う"
  ],
  "kotoba": [
   "取り出す",
   "読み込む",
   "ロード",
   "げっとあいてむ"
  ]
 },
 {
  "id": 134,
  "kai": 4,
  "date": "2026-11-14",
  "theme": "JavaScript02",
  "shiryou": "20261114_06_JavaScript02",
  "code": "localStorage.removeItem(key);",
  "yomi": "ローカルストレージ・リムーブアイテム",
  "oboe": "remove＝取り除く",
  "kinou": "消す",
  "imi": "保管庫から名札の分を消す",
  "tsukai": "localStorage.removeItem(\"memo\");",
  "chui": [
   "名札（key）が1字違うと消えない",
   "全部消すなら localStorage.clear()（ほかの保存も消える）"
  ],
  "kotoba": [
   "消す",
   "削除",
   "クリア",
   "りむーぶ"
  ]
 },
 {
  "id": 135,
  "kai": 4,
  "date": "2026-11-14",
  "theme": "JavaScript02",
  "shiryou": "20261114_06_JavaScript02",
  "code": "$(\"#text_area\").val();",
  "yomi": "バリュー",
  "oboe": "val＝value（値）",
  "kinou": "入力させる",
  "imi": "( ) が空なら入力欄の値を取る。( ) に値を入れるとその値で上書き。.val(\"\") で空にする",
  "tsukai": "const text = $(\"#text_area\").val();\n$(\"#text_area\").val(\"\");",
  "chui": [
   ".text() ではなく .val()（入力欄の中身は val）"
  ],
  "kotoba": [
   "入力",
   "取る",
   "空にする",
   "ばる"
  ]
 },
 {
  "id": 136,
  "kai": 4,
  "date": "2026-11-14",
  "theme": "JavaScript02",
  "shiryou": "20261114_06_JavaScript02",
  "code": "JSON.stringify(オブジェクト)",
  "yomi": "ジェイソン・ストリンギファイ",
  "oboe": "string＝文字列、-ify＝〜にする",
  "kinou": "保存する",
  "imi": "オブジェクトを文字（JSON）にする。台帳の1行を伝票に書き写して箱に入れる",
  "tsukai": "localStorage.setItem(\"memo\", JSON.stringify(data));",
  "chui": [
   "そのまま setItem すると [object Object] になって中身が残らない"
  ],
  "kotoba": [
   "文字にする",
   "じぇいそん",
   "伝票",
   "変換"
  ]
 },
 {
  "id": 137,
  "kai": 4,
  "date": "2026-11-14",
  "theme": "JavaScript02",
  "shiryou": "20261114_06_JavaScript02",
  "code": "JSON.parse(文字)",
  "yomi": "ジェイソン・パース",
  "oboe": "parse＝読み解く",
  "kinou": "保存する",
  "imi": "JSON（文字）をオブジェクトに戻す。伝票を読んで台帳の1行に戻す",
  "tsukai": "const data = JSON.parse(localStorage.getItem(\"memo\"));\n$(\"#input\").val(data.title);",
  "chui": [
   "保存が無いと null。if で確かめてから parse する"
  ],
  "kotoba": [
   "戻す",
   "読み解く",
   "ぱーす",
   "変換"
  ]
 },
 {
  "id": 138,
  "kai": 4,
  "date": "2026-11-14",
  "theme": "JavaScript02",
  "shiryou": "20261114_06_JavaScript02",
  "code": "F12 → Application → Local storage",
  "yomi": "アプリケーション",
  "oboe": "Application＝アプリの中身",
  "kinou": "準備・操作",
  "imi": "保存できたか・名札（key）が合っているかを見る場所",
  "tsukai": "F12 → Application → Local storage",
  "chui": [
   "左の一覧で自分のページのアドレスを選ぶ"
  ],
  "kotoba": [
   "確認",
   "保存できたか",
   "検証",
   "あぷりけーしょん"
  ]
 }
];
