<script setup lang="ts">
interface Emit {
  close: () => void
}
const emit = defineEmits<Emit>()
</script>

<template>
  <div class="ModalTeleport">
    <Teleport to="#app">
      <div class="ModalTeleport_Body">
        <v-card
          class="mx-auto"
          width="300"
          variant="outlined"
        >
          <v-card-title
            v-text="'Teleport モーダル'"
          />
          <v-card-text>
            <p
              class="text-body1"
              v-text="'テキストテキストテキストテキストテキストテキストテキストテキスト'"
            />
          </v-card-text>
          <v-card-actions>
            <v-btn
              variant="outlined"
              color-type="primary"
              @click="$emit('close')"
              v-text="'閉じる'"
            />
          </v-card-actions>
        </v-card>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.ModalTeleport_Body {
  background-color: white;
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>
