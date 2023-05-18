<script setup lang="ts">
import condenseWhitespaceImage from '../../../assets/images/config/compilerOptions/whitespace/condense_whitespace.png?url'
import condenseNewlineImage from '../../../assets/images/config/compilerOptions/whitespace/condense_newline.png?url'
import preserveWhitespaceImage from '../../../assets/images/config/compilerOptions/whitespace/preserve_whitespace.png?url'
import preserveNewlineImage from '../../../assets/images/config/compilerOptions/whitespace/preserve_newline.png?url'
</script>

<template>
  <div>
    <h1 class="text-h1">
      app.config
      <br>
      compilerOptions
      <br>
      whitespace
    </h1>
    <p class="mt-10">テンプレートの空白を扱う振る舞いを調整する設定</p>
    <p>
      <a href="https://ja.vuejs.org/api/application.html#app-config-compileroptions-whitespace">ドキュメント</a>
    </p>
    <div class="mt-15">
      <h2
        class="text-h2"
        v-text="'空白がどうなるか'"
      />
      <div class="mt-10">
        <div class="mt-5">
          <p style="white-space:pre-wrap;">通常|                       直前に大量の空白が入っています</p>
          <br>
          <p style="white-space:pre-wrap;">{{ 'マスタッシュ構文|                       直前に大量の空白が入っています' }}</p>
          <br>
          <p style="white-space:pre-wrap;" v-text="'v-text|                       直前に大量の空白が入っています'" />
        </div>
      </div>
    </div>
    <div class="mt-15">
      <h2
        class="text-h2"
        v-text="'改行コードがどうなるか'"
      />
      <div class="mt-10">
        <div class="mt-5">
          <p style="white-space:pre-wrap;">通常|&#10;直前に改行コードが入っています</p>
          <br>
          <p style="white-space:pre-wrap;">{{ 'マスタッシュ構文|\n直前に改行コードが入っています' }}</p>
          <br>
          <p style="white-space:pre-wrap;" v-text="'v-text|\n直前に改行コードが入っています'" />
        </div>
      </div>
    </div>
    <section class="mt-15">
      <h2 class="text-h2">condense の場合 ( Vue3 デフォルト )</h2>
      <p>
        <img class="capture" :src="condenseWhitespaceImage" alt="">
      </p>
      <p class="font-weight-bold text-red">結果: タグ内に普通に記述すると連続した空白は除去されるが、マスタッシュ構文及び v-text を使えば有効</p>
      <p class="mt-5">
        <img class="capture" :src="condenseNewlineImage" alt="">
      </p>
      <p class="font-weight-bold text-red">結果: タグ内に普通に記述すると改行コードは除去されるが、マスタッシュ構文及び v-text を使えば有効</p>
    </section>
    <section class="mt-15">
      <h2 class="text-h2">preserve の場合 ( Vue2 での動作を保証 )</h2>
      <p>
        <img class="capture" :src="preserveWhitespaceImage" alt="">
      </p>
      <p class="font-weight-bold text-red">結果: 連続した空白は、全ての手段で有効</p>
      <p class="mt-5">
        <img class="capture" :src="preserveNewlineImage" alt="">
      </p>
      <p class="font-weight-bold text-red">結果: 改行コードは、全ての手段で有効</p>
    </section>
  </div>
</template>

<style>
.capture {
  border: 1px solid black;
}
</style>
