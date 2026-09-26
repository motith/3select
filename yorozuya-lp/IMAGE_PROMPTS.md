# 画像生成プロンプト（Codex / gpt-image 用）

LP（`index.html`）で使う生成画像のプロンプトです。生成した画像を下のファイル名で `yorozuya-lp/images/` に置くだけで差し替わります。画像がないあいだは、ページ内のSVGイラストが代わりに表示されます。

## 全画像に共通するスタイル指定

どの画像にも、プロンプトの最後に次の文を付けてください（トーンをそろえるため）。

```
Style: warm, friendly flat illustration with soft grain texture, simple rounded shapes, no outlines, gentle shading. Limited palette: deep indigo #233E63, warm yellow #F2B640, cream #FFFDF8, beige #F6F1E6, small accents of vermilion #C9502F and a few tiny gold-leaf flecks #C9A457. Japanese setting, calm and approachable mood. No text, no letters, no logos, no watermarks.
```

- 人物の顔は簡略化する（写実的にしない）。実在の人物に見えないようにするため。
- 画像の中に文字は入れない（ページ側の文字と重なって読みにくくなるため）。

---

## 1. `images/scene-side.webp`：隣で一緒に考える

- 使う場所：「わからなくて当たり前」セクションのイラスト
- サイズ：1600×1000（16:10）

```
A small business owner in their 50s and a relaxed young consultant sitting side by side at a wooden counter, both looking at the same laptop screen and smiling slightly, as if chatting casually rather than giving a lecture. Cups of green tea on the counter. Background: a bright, tidy room with a hint of a traditional Kanazawa machiya lattice window. Composition: wide shot, characters in the center-left, generous empty space on the right.
```

## 2. `images/scene-study.webp`：勉強会・交流会

- 使う場所：最終CTAの中にある「勉強会・交流会」の案内
- サイズ：1600×900（16:9）

```
A small, relaxed study meetup of 5-6 local business owners of mixed ages and genders sitting around a low wooden table in a renovated Kanazawa machiya room, laptops and notebooks open, one person pointing at a laptop screen while others lean in with interest. Warm afternoon light through wooden lattice windows. Friendly, informal atmosphere, not a lecture.
```

## 3. `images/ogp.png`：SNS・LINEでシェアされたときのサムネイル（任意）

- サイズ：1200×630
- 生成した画像の上に、キャッチコピー「『ちょっと聞きたい』が、気軽に聞ける人。」とサービス名を重ねて使います。文字入れは、生成画像を受け取ったあと、こちらでHTMLから書き出します。

```
A deep indigo Japanese shop curtain (noren) with a plain white circle in the middle, hanging at the entrance of a warm, softly lit small shop in Kanazawa, viewed from the front. Leave large calm empty areas on the left half for text overlay. Wide 1200x630 composition.
```

---

## 生成しないもの

- **プロフィール写真（`images/profile.webp`）**：本人の実写を使います。AIで生成した人物を本人として載せるのは不可です。600×600以上の正方形を用意してください。

## 書き出しの目安

- WebP、品質80前後。1枚あたり200KB以下を目安にしてください。
- `cwebp -q 80 input.png -o scene-side.webp`
