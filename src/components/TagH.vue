<template>
  <div class="editor" style="height: 100vh;">
    <textarea v-model="code" style="flex: 1 1 auto;"></textarea>
    <iframe class="preview-frame" :srcdoc="code" style="flex: 1 1 auto;"></iframe>
  </div>
</template>

<script setup>
import { ref } from "vue"

const code = ref(`
<h1>Belajar HTML untuk Pemula</h1>
<h2>Tag Heading: Panduan Lengkap</h2>
<p>HTML memiliki enam level heading, dari h1 hingga h6. Gunakan sesuai kebutuhan...</p>
<h3>Subjudul Artikel</h3>
<p>Subjudul membantu pembaca memahami isi artikel secara lebih rinci.</p>
<h4>Sub Judul: penjelasan Artikel</h4>
<p>Setiap sub judul memiliki level keterbacaan yang berbeda-beda. Semakin tinggi angka maka semakin rinci penggunaanya</P>
`)
</script>

<style scoped>
.editor {
  width: 100%;   /* tambahin ini */
}


textarea {
  width: 100%;
  min-height: 15rem;
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
  min-height: 25rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: white;
}
</style>
