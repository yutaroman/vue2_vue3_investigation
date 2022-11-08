<template>
  <div>
    <h2 v-text="'属性強制の振る舞い'" />
    <p>
      <a
          href="https://v3.ja.vuejs.org/guide/migration/attribute-coercion.html"
          v-text="'https://v3.ja.vuejs.org/guide/migration/attribute-coercion.html'"
      />
    </p>
    <hr />

    <h3>
      １、
      <a
          href="https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/util/attrs.js#L33-L40"
          target="_blank"
          v-text="'論理型属性'"
      />
      の場合
    </h3>
    <p>input 要素の disabled 属性で確認</p>
    <label>
      <span class="bold" v-text="'null '" />
      <input type="text" :disabled="booleanAttributes.typeNull">
    </label>
    <br>
    <label>
      <span class="bold" v-text="'undefined '" />
      <input type="text" :disabled="booleanAttributes.typeUndefined">
    </label>
    <br>
    <label>
      <span class="bold" v-text="'0 '" />
      <input type="text" :disabled="booleanAttributes.typeZero">
    </label>
    <br>
    <label>
      <span class="bold" v-text="'1 '" />
      <input type="text" :disabled="booleanAttributes.typeOne">
    </label>
    <br>
    <label>
      <span class="bold" v-text="'true(boolean) '" />
      <input type="text" :disabled="booleanAttributes.typeBooleanTrue">
    </label>
    <br>
    <label>
      <span class="bold" v-text="'false(boolean) '" />
      <input type="text" :disabled="booleanAttributes.typeBooleanFalse">
    </label>
    <br>
    <label>
      <span class="bold" v-text="'true(string) '" />
      <input type="text" :disabled="booleanAttributes.typeStringTrue">
    </label>
    <br>
    <label>
      <span class="bold" v-text="'false(string) '" />
      <input type="text" :disabled="booleanAttributes.typeStringFalse">
    </label>
    <br>
    <label>
      <span class="bold" v-text="'foo(string) '" />
      <input type="text" :disabled="booleanAttributes.typeString">
    </label>
    <br>
    <label>
      <span class="bold" v-text="'空文字列 '" />
      <input type="text" :disabled="booleanAttributes.typeStringEmpty">
    </label>
    <br>
    <label>
      <span class="bold" v-text="'keyのみ '" />
      <input type="text" disabled>
    </label>

    <h3>
      ２、
      <a
          href="https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/util/attrs.js#L20"
          target="_blank"
          v-text="'列挙型属性 ( ※一部 )'"
      />
      の場合
    </h3>
    <p>blockquote 要素の contenteditable 属性で確認</p>
    <dl>
      <dt class="bold" v-text="'null'" />
      <dd>
        <blockquote :contenteditable="enumeratedAttributes.typeNull">
          <p>Edit this content to add your own quote</p>
        </blockquote>
      </dd>
    </dl>
    <dl>
      <dt class="bold" v-text="'undefined'" />
      <dd>
        <blockquote :contenteditable="enumeratedAttributes.typeUndefined">
          <p>Edit this content to add your own quote</p>
        </blockquote>
      </dd>
    </dl>
    <dl>
      <dt class="bold" v-text="'0'" />
      <dd>
        <blockquote :contenteditable="enumeratedAttributes.typeZero">
          <p>Edit this content to add your own quote</p>
        </blockquote>
      </dd>
    </dl>
    <dl>
      <dt class="bold" v-text="'1'" />
      <dd>
        <blockquote :contenteditable="enumeratedAttributes.typeOne">
          <p>Edit this content to add your own quote</p>
        </blockquote>
      </dd>
    </dl>
    <dl>
      <dt class="bold" v-text="'true(boolean)'" />
      <dd>
        <blockquote :contenteditable="enumeratedAttributes.typeBooleanTrue">
          <p>Edit this content to add your own quote</p>
        </blockquote>
      </dd>
    </dl>
    <dl>
      <dt class="bold" v-text="'false(boolean)'" />
      <dd>
        <blockquote :contenteditable="enumeratedAttributes.typeBooleanFalse">
          <p>Edit this content to add your own quote</p>
        </blockquote>
      </dd>
    </dl>
    <dl>
      <dt class="bold" v-text="'true(string)'" />
      <dd>
        <blockquote :contenteditable="enumeratedAttributes.typeStringTrue">
          <p>Edit this content to add your own quote</p>
        </blockquote>
      </dd>
    </dl>
    <dl>
      <dt class="bold" v-text="'false(string)'" />
      <dd>
        <blockquote :contenteditable="enumeratedAttributes.typeStringFalse">
          <p>Edit this content to add your own quote</p>
        </blockquote>
      </dd>
    </dl>
    <dl>
      <dt class="bold" v-text="'foo(string)'" />
      <dd>
        <blockquote :contenteditable="enumeratedAttributes.typeString">
          <p>Edit this content to add your own quote</p>
        </blockquote>
      </dd>
    </dl>
    <dl>
      <dt class="bold" v-text="'空文字列'" />
      <dd>
        <blockquote :contenteditable="enumeratedAttributes.typeStringEmpty">
          <p>Edit this content to add your own quote</p>
        </blockquote>
      </dd>
    </dl>
    <dl>
      <dt class="bold" v-text="'keyのみ'" />
      <dd>
        <blockquote contenteditable>
          <p>Edit this content to add your own quote</p>
        </blockquote>
      </dd>
    </dl>

    <h3>
      ３、その他属性の場合
    </h3>
    <p>p 要素の aria-hidden 属性で確認</p>
    <dl>
      <dt class="bold" v-text="'null'" />
      <dd class="box">
        <p :aria-hidden="otherAttributes.typeNull">穏やかな夜をお過ごしください。</p>
      </dd>
    </dl>
    <dl>
      <dt class="bold" v-text="'undefined'" />
      <dd class="box">
        <p :aria-hidden="otherAttributes.typeUndefined">穏やかな夜をお過ごしください。</p>
      </dd>
    </dl>
    <dl>
      <dt class="bold" v-text="'0'" />
      <dd class="box">
        <p :aria-hidden="otherAttributes.typeZero">穏やかな夜をお過ごしください。</p>
      </dd>
    </dl>
    <dl>
      <dt class="bold" v-text="'1'" />
      <dd class="box">
        <p :aria-hidden="otherAttributes.typeOne">穏やかな夜をお過ごしください。</p>
      </dd>
    </dl>
    <dl>
      <dt class="bold" v-text="'true(boolean)'" />
      <dd class="box">
        <p :aria-hidden="otherAttributes.typeBooleanTrue">穏やかな夜をお過ごしください。</p>
      </dd>
    </dl>
    <dl>
      <dt class="bold" v-text="'false(boolean)'" />
      <dd class="box">
        <p :aria-hidden="otherAttributes.typeBooleanFalse">穏やかな夜をお過ごしください。</p>
      </dd>
    </dl>
    <dl>
      <dt class="bold" v-text="'true(string)'" />
      <dd class="box">
        <p :aria-hidden="otherAttributes.typeStringTrue">穏やかな夜をお過ごしください。</p>
      </dd>
    </dl>
    <dl>
      <dt class="bold" v-text="'false(string)'" />
      <dd class="box">
        <p :aria-hidden="otherAttributes.typeStringFalse">穏やかな夜をお過ごしください。</p>
      </dd>
    </dl>
    <dl>
      <dt class="bold" v-text="'foo(string)'" />
      <dd class="box">
        <p :aria-hidden="otherAttributes.typeString">穏やかな夜をお過ごしください。</p>
      </dd>
    </dl>
    <dl>
      <dt class="bold" v-text="'空文字列'" />
      <dd class="box">
        <p :aria-hidden="otherAttributes.typeStringEmpty">穏やかな夜をお過ごしください。</p>
      </dd>
    </dl>
    <dl>
      <dt class="bold" v-text="'keyのみ'" />
      <dd class="box">
        <p aria-hidden>穏やかな夜をお過ごしください。</p>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: "AttributeCoercion",
  data () {
    return {
      booleanAttributes: {
        typeNull: null,
        typeUndefined: undefined,
        typeZero: 0,
        typeOne: 1,
        typeBooleanTrue: true,
        typeBooleanFalse: false,
        typeStringTrue: 'true',
        typeStringFalse: 'false',
        typeStringEmpty: '',
        typeString: "foo"
      },
      enumeratedAttributes: {
        typeNull: null,
        typeUndefined: undefined,
        typeZero: 0,
        typeOne: 1,
        typeBooleanTrue: true,
        typeBooleanFalse: false,
        typeStringTrue: 'true',
        typeStringFalse: 'false',
        typeStringEmpty: '',
        typeString: "foo"
      },
      otherAttributes: {
        typeNull: null,
        typeUndefined: undefined,
        typeZero: 0,
        typeOne: 1,
        typeBooleanTrue: true,
        typeBooleanFalse: false,
        typeStringTrue: 'true',
        typeStringFalse: 'false',
        typeStringEmpty: '',
        typeString: "foo"
      }
    }
  }
}
</script>

<style scoped>
.bold {
  font-weight: bold;
}
.box {
  padding: 0.5em 1em;
  color: #5d627b;
  background: white;
  border-top: solid 5px #5d627b;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
  box-sizing: border-box;
  width: 500px;
  margin: 0 auto;
}
input {
  border: 1px solid #5d627b;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  line-height: 1.539;
  padding: 2px 5px;
  width: 300px;
  min-height: 30px;
  display: block;
  margin: 0 auto;
}
input:disabled {
  box-shadow: none;
  border-color: #d2d2d2;
  background-color: #fafafa;
}
blockquote {
  position: relative;
  padding: 30px 15px 8px 15px;
  box-sizing: border-box;
  font-style: italic;
  background: #efefef;
  color: #555;
  width: 500px;
  margin: 0 auto;
}
blockquote:before {
  display: inline-block;
  position: absolute;
  top: 5px;
  left: 3px;
  content: "“";
  font-family: sans-serif;
  color: #cfcfcf;
  font-size: 90px;
  line-height: 1;
}
blockquote[contenteditable="true"]:before,
blockquote[contenteditable=""]:before {
  color: #9dd4ff;
}
[aria-hidden="true"] {
  visibility: hidden;
}
</style>
