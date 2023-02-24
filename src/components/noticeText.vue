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
        一、注意事項
        <br>
        1.本活動安卓（Android）系統8.0及以上和iPhone（iOS）系統13.0及以上的智慧型手機/平板電腦皆可參加，且LINE版本需為9.14或以上。若安卓系統（Android）5.0以上版本參加者如發生畫面無法正常顯示的情況，請參考本頁面說明。參加活動前請先確認系統及LINE版本是否符合限制，若因不符而導致無法獲得好禮，主辦單位將不予補發。
        <br>
        2.本次活動僅限LINE帳號已設定台灣手機門號的參加者參加，如僅使用FB認證或無法判定帳號所在國籍之參加者，恕無法參加本次活動。
        <br>
        3.在活動期間變更手機型號、LINE帳號國家設定之行為，最終有可能無法順利獲得本次活動之獎項。例如：在設定國家為台灣的狀態下參加活動，但事後更動設定國家為美國，即使符合本活動之中獎資格，後續則可能僅收到中獎通知但無從獲得獎項，敬請見諒。
        <br>
        4.該獎項不得要求兌換等值的商品或現金。
        <br>
        5.若發生系統無法正常運作的情形，請將LINE應用程式升級為最新版本。
        <br>
        6.如有任何問題，請透過Monkey Shoulder三隻猴子 Facebook粉專私訊詢問，我們將會協助處理您的問題。
        <br>
        7.參加本活動之參加者，視為同意上述所有活動相關辦法及注意事項，並同意主辦單位蒐集、處理及利用參加者之個人資料及本次相關之中獎資訊。
        <br>
        <br>
        二、個人資料告知事項
        <br>
        1.主辦單位將蒐集活動參加者的 LINE
        帳號之內部識別碼、活動參加時間、獲得獎勵等得以直接或間接識別個人的資料，以用於活動訊息通知、兌換通知、獎勵發送以及本活動期間相關之消費者、客戶管理與服務、網路購物、活動成效分析、其他電子商務服務範圍等目的必要範圍內為利用，包括提供予受主辦單位委託處理及利用個人資料及其他主辦單位之子公司或關係企業。利用期間限於活動開始後至活動舉辦期間結束後六個月內；利用地區限於活動舉辦地區（限台灣門號註冊之參加者）及主辦單位暨相關子公司、關係企業從事業務的國家及地區於相關法律或命令許可範圍內利用；利用對象與方式：利用LINE帳號之內部識別碼發送LINE
        POINTS、其他好禮獎項以及三隻猴子Monkey Shoulder優惠資訊。若活動參加者在活動期間不願提供相關之個人資料予主辦單位，或者請求停止蒐集、處理或利用，或者請求刪除所蒐集之個資，將無法參加本活動及收到獎項。
    <br>
    2.其他有關主辦單位對個人資料之蒐集、處理及利用，請參考本公司的隱私權政策。另有關台灣連線股份有限公司對個人資料之處理與利用，請參閱台灣連線股份有限公司隱私權條款。
    <br>
    <br>
    三、活動聲明、限制及告知事項
    <br>
    1.活動參加者必須年滿18歲，並遵守主辦單位公佈之本活動辦法、相關活動規則及注意事項，如有違反視同棄權，主辦單位並得取消其領取獎項資格。若發現獲獎者未滿18歲，亦將取消獲獎資格。
    <br>
    2.若因參加者網路狀況、裝置差異、手機設定、移轉帳號或其他變更等不可預測之因素導致活動無法順利完成或獲得之獎項遺失，主辦單位將不負擔任何責任或損害賠償。
        <br>
        3.在不影響活動參與者實質性利益的前提下，主辦單位保有修改、變更、暫停、中止、提前終止或取消本活動或獎項之權利，如有未盡事宜，悉依主辦單位相關規定或解釋辦理，而得隨時補充公告之；且主辦單位保留對本活動辦法(包含注意事項)隨時增加、修改、刪減及最終解釋之權利。如有任何變更將公告於活動頁面中，恕不另行通知。主辦單位對於所有活動流程擁有最終解釋權。
        <br>
        4.主辦單位有權不予事前通知且無需說明理由而將其認定為不符合參與資格的特定參加者排除於本活動外或取消其中獎資格。
        <br>
        5.主辦單位在法律許可範圍內，對於參加者因參與本活動而生之一切人身財產的損失及損害，皆不負賠償或補償之責。
        <br>
        6.若因活動參加者違反相關規則、或參加者之不當或違法行為導致權利人之合法權益遭受侵害、或主辦單位因此受有損害(如致生訴訟而遭權利人求償)時，活動參加者同意對於權利人及主辦單位因此所受之損害及因此所支出之相關費用負擔賠償責任，並應由活動參加者自行負擔相關法律責任；主辦單位並有權取消其參加及獲得獎項資格。違規行為包含但不限於：
        <br>
        • 以不當手段取得 LINE POINTS 或有不當手段取得之虞之行為；
        <br>
        • 任何侵犯他人智慧財產權、或涉有詐欺、資料造假、蓄意破壞活動秩序之行為。
        <br>
        7.參加者請同意以上條件後再參加本次活動。如有違反，主辦單位有權取消其參加或獲獎資格。
        <br>
        8.如因本活動而涉訟，參加者同意以臺灣士林地方法院為第一審管轄法院。
        <br>
        <br>
        <div style="font-size: 20px;text-align: center;">＊＊參加活動即視為同意本活動辦法之內容＊＊</div>
    </div>

    <!-- <div class="div--text">
                        <div class="text--title">
                            <span class="title--activity">活動辦法</span>
                            <span class="title--notice">注意事項</span>
                        </div>
                        <div class="text--content">


                        </div>
                    </div> -->
</template>

<style scoped>
.div--text {
    width: 530px;
    height: 550px;
    box-sizing: content-box;
    display: flex;
    flex-direction: column;
    border: 3px solid #3E2A28;
    border-radius: 10px;
    background-color: #EECC9A;
}

.title--activity {
    display: inline-block;
    width: 265px;
    height: 81px;
    border-right: 3px solid #3E2A28;
    border-bottom: none;
    /* border-top: 3px solid  #FFFFFF; */
    /* border-radius: 10px; */
    /* background-color: #EECC9A; */
    color: #3E2A28;
    font-size: 28px;
    font-weight: 500;
    /* margin: auto; */
    position: relative;
    cursor: pointer;
    text-align: center;
    line-height: 81px;
}

.title--activity:before {
    content: '';
    border-top: 3px solid #FFFFFF;
    border-radius: 10px 0 0 0;
    width: 100%;
    height: 78px;
    position: absolute;
    top: 0;
    left: 0;
}

.title--notice {
    display: inline-block;
    width: 265px;
    height: 81px;
    border-left: 3px solid #3E2A28;
    /* border-top: 3px solid  #FFFFFF; */
    border-radius: 0 10px 0 0;
    background-color: #3E2A28;
    color: #FFF6E9;
    font-size: 28px;
    font-weight: 500;
    /* margin: auto; */
    position: relative;
    cursor: pointer;
    text-align: center;
    line-height: 81px;
}

.title--notice:before {
    content: '';
    border-top: 3px solid #EECC9A;
    border-radius: 0 10px 0 0;
    width: 100%;
    height: 78px;
    position: absolute;
    top: 0;
    left: 0;
}

.text--content {
    width: 530px;
    height: 450px;
    background-color: #EECC9A;
    color: #402C2A;
    font-size: 24px;
    border-top: 3px solid #3E2A28;
    padding: 15px 30px;
    text-align: justify;
    overflow-y: scroll;
    /* border-radius: 10px; */
}

/* Hide scrollbar for Chrome, Safari and Opera */
.text--content::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.text--content {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>