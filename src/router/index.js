import { createRouter, createWebHistory } from "vue-router";

import Index from "../views/index.vue";
// import Home from "../views/Home.vue";
// 父元件與子元件要放在同一個資料夾
// import invoiceParent from "../views/invoiceParent.vue";
import invoice from "../views/invoice.vue";
import carrier from "../views/carrier.vue";
import invoicelogin from "../views/invoicelogin.vue";
import invoiceInput from "../views/invoiceInput.vue";
import invoiceCamera from "../views/invoiceCamera.vue";
import invoiceUpload from "../views/invoiceUpload.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", 
    name:'home',
    component: Index },
    // { path: "/home", component: Home },
    {
      path: "/invoice",
      component: invoice,
      children: [
        {
          // 如果希望 "/invoice" 也有頁面時的設定
          path: "",
          name:'invoice',
          component: invoice,
        },
        {
          // 注意，嵌套時 path 不帶 "/"
          path: "carrier",
          name:'invoice-carrier',
          component: carrier,
        },
        {
          path: "login",
          name:'invoice-login',
          component: invoicelogin,
        },
        {
          path: "input",
          name:'invoice-input',
          component: invoiceInput,
        },
        {
          path: "camera",
          name:'invoice-camera',
          component: invoiceCamera,
        },
        {
          path: "upload",
          name:'invoice-upload',
          component: invoiceUpload,
        },
      ],
    },
  ],
});


export default router;
