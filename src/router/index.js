import { createRouter, createWebHistory } from 'vue-router'
import HtmlEditor from '../views/HtmlEditor.vue'
import FungsiTagPdiHtml from '../components/FungsiTagPdiHtml.vue'
import EnterdiHtml from '../components/EnterdiHTML.vue'
import BrdiHtml from '../components/BrdiHtml.vue'
import TagH from '../components/TagH.vue'
// import CssEditor from '../views/CssEditor.vue'
// import JsEditor from '../views/JsEditor.vue'

const routes = [
  { path: '/', redirect: '/html' },
    {
    path: '/html',
    component: HtmlEditor,   // layout utama
    children: [
      { path: '', redirect: 'html/fungsi-tag-p-di-html' }, // kalua "/" langsung ke editor
      { path: 'fungsi-tag-p-di-html', component: FungsiTagPdiHtml }, // editor spesifik
      { path: 'enter-di-html', component: EnterdiHtml }, // editor spesifik
      { path: 'line-break-html', component: BrdiHtml }, // editor spesifik
      { path: 'tag-h-html', component: TagH } // editor spesifik
    ]
  },
//   { path: '/css', component: CssEditor },
//   { path: '/js', component: JsEditor },
]

const router = createRouter({
  history: createWebHistory('/snipped-wp/'), // base sesuai repo
  routes,
})

export default router
