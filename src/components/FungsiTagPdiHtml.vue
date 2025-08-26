<template>
  <div class="editor" style="height: 100vh;">
    <textarea v-model="code" style="flex: 1 1 auto;"></textarea>
    <iframe class="preview-frame" :srcdoc="code" style="flex: 1 1 auto;"></iframe>
  </div>
</template>

<script setup>
import { ref } from "vue"

const code = ref(`
<p>Halo, ini adalah paragraf pertama saya di HTML.</p>
<p>Halo, ini adalah paragraf kedua saya di HTML.</p>
`)
</script>

<style scoped>
.editor {
  width: 100%;   /* tambahin ini */
}


textarea {
  width: 100%;
  min-height: 150px;
  font-family: monospace;
  font-size: 14px;
  background: #1e1e1e;
  color: #f8f8f2;
  border: none;
  border-radius: 6px;
  resize: vertical;
}

/* iframe biar tampil kayak browser asli */
.preview-frame {
  width: 100%;
  min-height: 200px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: white;
}
</style>
