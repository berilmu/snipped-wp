import { createRouter, createWebHistory } from 'vue-router'
import HtmlEditor from '../views/HtmlEditor.vue'
import Editor from '../components/FungsiTagPdiHtml.vue'
// import CssEditor from '../views/CssEditor.vue'
// import JsEditor from '../views/JsEditor.vue'

const routes = [
  { path: '/', redirect: '/html' },
    {
    path: '/html',
    component: HtmlEditor,   // layout utama
    children: [
      { path: '', redirect: 'html/fungsi-tag-p-di-html' }, // kalua "/" langsung ke editor
      { path: 'fungsi-tag-p-di-html', component: Editor } // editor spesifik
    ]
  },
//   { path: '/css', component: CssEditor },
//   { path: '/js', component: JsEditor },
]

const router = createRouter({
  history: createWebHistory('/snipped-wp/'), // base path sesuai repo / subfolder
  routes,
})


export default router
