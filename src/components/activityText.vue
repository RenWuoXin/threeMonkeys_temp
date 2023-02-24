<script setup>
import { ref, onMounted } from "vue";

// const isRead = ref(false);
// const options = {
//     rootMargin: '0px',
//     threshold: 1.0
// }

// const emits = defineEmits(['read-finish']);

// // callback 函式，當目標元素進入可視範圍時觸發
// const callback = (entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             isRead.value = true; // 顯示讀完按鈕
//             observer.unobserve(entry.target); // 顯示讀完按鈕
//             emits('read-finish', isRead.value) // 傳遞事件
//         }
//     })
// }

// const observer = new IntersectionObserver(callback, options);
// const articleRef = ref(null);
// onMounted(() => {
//     observer.observe(articleRef.value)
// })


</script>

<template>
    <div >
        請知悉需同意下方「個人資料告知事項」後方可開始進行活動，如於活動期間封鎖「三隻猴子 Monkey Shoulder」LINE官方帳號則無法參加活動並喪失抽/獲獎資格。
        <br>
        <br>
        一、活動期間
        2023年2月20日（一）00:00 ～ 2023年3月12日（日）23:59（台灣時間，下同）
        <br>
        <br>
        二、活動位置
        「三隻猴子 Monkey Shoulder」LINE官方帳號
        <br>
        <br>
        三、活動流程
        1.於2023年2月20日（一）00:00～2023年3月12日（日）23:59前，至活動菸酒專賣店，購買三瓶「三隻猴子威士忌」700ml，並取得購物發票(電子發票證明聯或存入手機載具內)。
        <br>
        2.參與活動者需先加入「三隻猴子 Monkey Shoulder」LINE官方帳號，並完成會員綁定流程，按步驟登錄購買「三隻猴子威士忌」時所得發票，登錄並經系統驗證成功後即可獲得LINE
        POINTS點數100點。(登錄發票並驗證成功需７個工作日，故請盡早登錄發票，避免造成無法即時獲得點數。)
        <br>
        3. 發票日期須符合活動時間區間，且發票內容須可辨識三隻猴子品項名稱，一張發票限登錄一次，不得重複登錄。
        <br>
        4. 可登錄多張發票，一個LINE帳號限獲得一次點數。
        <br>
        <br>
        四、活動獎項說明
        <br>
        1. 若無法順利進入活動頁面，請重新將LINE應用程式升級為最新版本或重新開啟LINE應用程式。
        <br>
        2. 參加活動即同意若因個人裝置、收貨地址等資訊提供錯誤、網路設備、環境等因素導致活動無法順利完成、獲得獎項或獲得之獎項遺失，格蘭父子洋酒股份有限公司－三隻猴子Monkey
        Shoulder（下稱主辦單位）將不負擔任何責任或損害賠償。
        <br>
        <br>
        ※LINE POINTS點數兌換說明
        <br>
        本活動所發放之LINE POINTS有效期限為最後一次獲得點數當日起算180日止，可用於購買LINE貼圖、主題小舖、LINE 禮物、口袋商店折抵商品等，若超過有效期限未使用LINE
        POINTS，視同放棄使用權利。惟在使用LINE POINTS前，須先於LINE帳號內完成電話號碼綁定。LINE POINTS相關規定，請參考LINE POINTS使用條款與條件及LINE POINTS FAQ。
    </div>
</template>

<style scoped></style>