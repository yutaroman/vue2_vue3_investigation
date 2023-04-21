<script setup lang="ts">
import { ref } from 'vue'
import ModalConventional from '../components/ModalConventional.vue'
import ModalTeleport from '../components/ModalTeleport.vue'

// 従来の方法のモーダルの開閉状態
const isOpenModalConventional = ref(false)
const setIsOpenModalConventional = (value: boolean) => {
  isOpenModalConventional.value = value
}

// Teleport を使った方法のモーダルの開閉状態
const isOpenModalTeleport = ref(false)
const setIsOpenModalTeleport = (value: boolean) => {
  isOpenModalTeleport.value = value
}
</script>

<template>
  <div>
    <h1 class="text-h1">組込コンポーネント</h1>
    <div class="mt-10">
      <h2
        class="text-h2"
        v-text="'Teleport'"
      />
      <p class="mt-5">
        <a
          href="https://ja.vuejs.org/guide/built-ins/teleport.html"
          v-text="'https://ja.vuejs.org/guide/built-ins/teleport.html'"
        />
      </p>
      <div class="mt-10">
        <h3
          class="text-h3"
          v-text="'1. 従来の方法'"
        />
        <div class="mt-3">
          <v-btn
            variant="outlined"
            v-text="'Open Modal'"
            @click="setIsOpenModalConventional(true)"
          />
        </div>
        <ModalConventional
          v-if="isOpenModalConventional"
          class="mt-3"
          @close="setIsOpenModalConventional(false)"
        />
      </div>
    </div>
    <div class="mt-10">
      <h3
        class="text-h3"
        v-text="'2. Teleportを使った方法'"
      />
      <div class="mt-3">
        <v-btn
          variant="outlined"
          v-text="'Open Modal'"
          @click="setIsOpenModalTeleport(true)"
        />
      </div>
      <ModalTeleport
        v-if="isOpenModalTeleport"
        class="mt-3"
        @close="setIsOpenModalTeleport(false)"
      />
    </div>
  </div>
</template>
