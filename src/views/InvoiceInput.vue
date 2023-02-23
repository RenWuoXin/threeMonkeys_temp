<script setup>
import { reactive, ref } from 'vue';
import invoice from '../components/invoice.vue';
import accordionInvoice from '../components/accordionInvoice.vue';


const veriForm = reactive({
    invoiceSerialNumber: '',
    invoiceDate: '',
    invoiceRandomNumber: '',
    verify: () => { }
});
</script>

<template>
    <invoice>
        <template #activityContent>

            
            <div class="carrierPage">
                <accordionInvoice class="accordion"></accordionInvoice>
                <form name="form">

                    <input required v-model="veriForm.invoiceSerialNumber" class="fullInput" type="text"
                        placeholder="請輸入發票序號">
                    <input required v-model="veriForm.invoiceDate" class="fullInput" type="text" placeholder="請輸入發票日期">
                    <input required v-model="veriForm.invoiceDate" class="fullInput" type="text" placeholder="請輸入發票隨機碼">


                    <img class="line" src="../img/carrier/Line.png" alt="">
                    <label for="submit">
                        <button style="letter-spacing: 3px;" class="btn btn--primary">
                            <img class="btn--icon" src="../assets/img/Arrow_right.png" alt="">
                            確認送出
                        </button>
                    </label>
                    <!-- <input id="submit" style="display: none;" type="submit" value=""> -->

                    <button class="btn btn--scecondary">回上一頁</button>
                    <button class="btn btn--scecondary">發票登錄說明</button>
                </form>
            </div>
        </template>
    </invoice>
</template>

<style lang="scss" scoped>
$width: 375px;
$color: #3E2A28;

// .accordion{
//     margin: auto;
// }
.carrierPage {
    margin: 5px auto;
    // border: 1px solid green;
    width: 532px;
    // height: 686px;
    display: flex;
    flex-direction: column;
    position: relative;
    // align-items: center;

}

.accordion{
    margin: 20px 0;
}

.fullInput {
    margin: 10px 0;
    width: 532px;
    height: 82px;
    font-size: 24px;
    background-color: white;
    color: $color;
    border: 1px solid #3E2A28;
    border-radius: 5px;
}


a {
    color: white;
    font-size: 18px;
    text-decoration: underline;
}

.line {
    width: 530px;
    height: 2px;
    margin: 20px 0;

}

.declare {
    width: 532px;
    height: 130px;
    display: flex;
    flex-direction: row;
}

input[type=checkbox] {
    width: 40px;
    height: 40px;
    // background-color: white;
    // border: 1px solid #3E2A28;
    // border-radius: 10px;
    // transform: scale(2.8);
}

.checkbox {
    margin: 0 auto;
    // border: 1px solid purple;
}

.declaration {
    font-size: 18px;
    font-weight: 500;
    width: 85%;
    text-align: justify;
    color: white;

    margin: 0 auto;

}

.btn {
    /* display: flex; */
    /* width: 419px; */
    /* height: 82px; */
    /* flex-direction: row; */
    margin: 23px auto;
    /* left: 10px; */
    /* transform: translate(-50%); */
}

.btn--icon {
    /* height: 49px; */
    /* width: 49px; */
    height: 48px;
    float: right;
    padding-right: 20px;
}

.btn--primary {
    display: block;
    width: 420px;
    height: 78px;
    border: 3px solid #402C2A;
    /* border-top: 3px solid  #000000; */
    border-radius: 14px;
    background-color: #000000;
    color: #F4D19E;
    /* text-align: center; */
    /* text-decoration: none; */
    font-size: 32px;
    font-weight: 700;
    /* margin: auto; */
    position: relative;
    cursor: pointer;
    padding-left: 75px;
}

.btn--primary:before {
    content: '';
    border-top: 3px solid #f4d19e;
    border-radius: 14px;
    width: 100%;
    height: 78px;
    position: absolute;
    top: 0;
    left: 0;
}

.btn--scecondary {
    display: block;
    width: 420px;
    height: 78px;
    border: 3px solid #402C2A;
    /* border-top: 3px solid  #FFFFFF; */
    border-radius: 14px;
    background-color: #F4D19E;
    color: #402C2A;
    font-size: 32px;
    font-weight: 700;
    /* margin: auto; */
    position: relative;
    cursor: pointer;
}

.btn--scecondary:before {
    content: '';
    border-top: 3px solid #FFFFFF;
    border-radius: 14px;
    width: 100%;
    height: 78px;
    position: absolute;
    top: 0;
    left: 0;
}
</style>