import { createRouter, createWebHistory } from "vue-router";

import Index from "../views/index.vue";
// import Home from "../views/Home.vue";
// 父元件與子元件要放在同一個資料夾
// import invoiceParent from "../views/invoiceParent.vue";
import invoice from "../views/invoice.vue";
import Carrier from "../views/carrier.vue";
import Invoicelogin from "../views/invoicelogin.vue";
import InvoiceInput from "../views/invoiceInput.vue";
import InvoiceCamera from "../views/invoiceCamera.vue";
import InvoiceUpload from "../views/invoiceUpload.vue";
import Caution from "../views/caution.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", 
    name:'home',
    component: Index },
    // { path: "/home", component: Home },
    {
      path: "/invoice",
      // component: invoice,
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
          component: Carrier,
        },
        {
          path: "login",
          name:'invoice-login',
          component:Invoicelogin,
        },
        {
          path: "input",
          name:'invoice-input',
          component: InvoiceInput,
        },
        {
          path: "camera",
          name:'invoice-camera',
          component: InvoiceCamera,
        },
        {
          path: "upload",
          name:'invoice-upload',
          component: InvoiceUpload,
        },
      ],
    },
    { path: "/caution", 
    name:'caution',
    component: Caution },
  ],
});


export default router;
