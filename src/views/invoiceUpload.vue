<script setup>
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'

import invoice from '../components/invoice.vue';
import invoiceNumber from '../components/invoiceNumber.vue';

const router = useRouter()

const goBack = () => {
    router.go(-1)
}
</script>

<template>
    <invoice>
        <template #activityContent>

            <div class="carrierPage">
                <form name="form">
                    <p class="text--white">一張發票限登錄一次，請確實拍照且填妥發票序號，以利後台審核</p>
                    <label class="uploadImg" for="uploadImg">

                        <img class="btn--icon--camera" src="../assets/img/Camera_fill.png" alt="">
                        請上傳發票照片<br>
                        並確保發票上資訊可辨識<br>
                        (JPG/PNG)<br>
                        ＊紙本發票上須註明三隻猴子品項名稱與瓶數

                        <input id="uploadImg" style="display: none;" type="file" accept="image/jpg,png">
                </label>
                <p class="text--white">*本安卓活動（Android OS）系統8.0及以上和iPhone（iOS）系統13.0及以上的智慧型手機皆可參加，且LINE版本需為9.14或以上。</p>

                <img class="line" src="../img/carrier/Line.png" alt="">


                    <span class="text--brown" style="font-size: 30px;margin-left: 40px;">請輸入發票序號</span>
                    <span class="text--brown" style="font-size: 20px;">(*必填)</span>

                    <invoiceNumber></invoiceNumber>

                    <p class="text--white">*請填上「英文兩碼」、「數字八碼」</p>
                    <img class="line" src="../img/carrier/Line.png" alt="">
                    <!-- <label for="submit">
                                <button style="letter-spacing: 3px;" class="btn btn--primary">
                                    <img class="btn--icon" src="../assets/img/Arrow_right.png" alt="">
                                    確認送出
                                </button>
                            </label> -->
                    <!-- <button class="btn btn--scecondary">回上一頁</button> -->
                    <!-- <button class="btn btn--scecondary">發票登錄說明</button> -->
                    <router-link to="" style="text-decoration: none;">
                        <label for="submit">
                            <button style="letter-spacing: 3px;" class="btn btn--primary">
                                <img class="btn--icon" src="../assets/img/Arrow_right.png" alt="">
                                確認送出
                            </button>
                        </label>
                    </router-link>
                    <button @click="goback" class="btn btn--scecondary">回上一頁</button>
                    <router-link to="" style="text-decoration: none;"><button
                            class="btn btn--scecondary">發票登錄說明</button></router-link>
                </form>
            </div>

        </template>
    </invoice>
</template>

<style lang="scss" scoped>
$width: 375px;
$color: #3E2A28;

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

.uploadImg {
    display: block;
    width: 530px;
    height: 343px;
    border: 3px solid #402C2A;
    /* border-top: 3px solid  #FFFFFF; */
    border-radius: 14px;
    background-color: #F4D19E;
    color: #402C2A;
    font-size: 20px;
    font-weight: 500;
    /* margin: auto; */
    position: relative;
    cursor: pointer;
    text-align: center;
    padding: 75px 0;
    outline: 2px dashed #402C2A;
    outline-offset: -20px;

}

.uploadImg:before {
    content: '';
    border-top: 3px solid #FFFFFF;
    border-radius: 14px;
    width: 515px;
    // height: 78px;
    position: absolute;
    top: 0;
    left: 5px;
}

.btn--icon--camera {
    /* height: 49px; */
    /* width: 49px; */
    height: 48px;
    // float: right;
    padding-right: 20px;
    display: block;
    margin: auto;
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
    margin: 15px 0;

}

.declare {
    width: 532px;
    height: 130px;
    display: flex;
    flex-direction: row;
}


.text--white {
    font-size: 20px;
    font-weight: 700;
    width: 85%;
    text-align: justify;
    color: white;

    margin: 25px auto;

}

.text--brown {
    color: #3E2A28;
    font-weight: bold;
    letter-spacing: 3px;
}

.div__input {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 20px 0;
    // border: 2px solid green;
}

.input--Combine {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border: 2px solid #3E2A28;
    background-color: #FFFFFF;
    border-radius: 10px;
    text-transform: uppercase;
}

.input--Each {
    // display: block;
    width: 40px;
    height: 70px;
    border: none;
    border-bottom: 1px solid gray;
    font-size: 24px;
    text-align: center;
    background-color: transparent;
    // padding: 0 20px;
}

.input--Each:focus {
    outline: none;
    // outline-offset: -3px;
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