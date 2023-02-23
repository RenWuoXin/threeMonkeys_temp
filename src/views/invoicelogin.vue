<script setup>
import { reactive, ref } from 'vue';
import invoice from '../components/invoice.vue';

</script>

<template>
    <invoice>
        <template #activityContent>
            <button style="font-size: 28px;" class="btn btn--scecondary--big">
                <img class="btn--icon" src="../img/carrier/scan.png" alt="">
                開啟相機<br>
                掃描發票上的QR CODE
            </button>
            <p class="declaration">相機掃描功能僅支援「Android 系統」「iPhone ios 15.0」或 以上版本系統使用。</p>
            <img class="img--seperator" src="../img/carrier/or.png" alt="">
            <button style="font-size: 34px;" class="btn btn--scecondary--big">
                <img class="btn--icon" src="../img/carrier/Order.png" alt="">
                輸入紙本發票
            </button>
            <button class="btn btn--primary">
                回上一頁
            </button>
            <button class="btn btn--primary">
                發票登錄說明
            </button>
        </template>
    </invoice>
</template>

<style lang="scss" scoped>
$width: 375px;
$color: #3E2A28;

.btn {
    // display: flex;
    // width: 419px;
    // height: 82px;
    // flex-direction: row;
    margin: 30px auto;
    text-align: left;
    // left: 10px;
    // transform: translate(-50%);
}

.btn--icon {
    // height: 49px;
    // width: 48px;
    height: 60px;
    float: left;
    padding-left: 30px;
    padding-right: 30px;
    // padding-top: 20px;
}

.btn--primary {
    display: block;
    width: 420px;
    height: 78px;
    border: 3px solid #402C2A;
    // border-top: 3px solid  #000000;
    border-radius: 14px;
    background-color: #000000;
    color: #F4D19E;
    // text-align: center;
    // text-decoration: none;
    font-size: 32px;
    font-weight: 700;
    // margin: auto;
    position: relative;
    cursor: pointer;
    text-align: center;
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

.btn--scecondary--big {
    display: block;
    width: 530px;
    height: 131px;
    border: 3px solid #402C2A;
    // border-top: 3px solid  #FFFFFF;
    border-radius: 14px;
    background-color: #F4D19E;
    color: #402C2A;
    // font-size: 28px;
    font-weight: 900;
    // margin: auto;
    position: relative;
    cursor: pointer;
}

.btn--scecondary--big:before {
    content: '';
    border-top: 3px solid #FFFFFF;
    border-radius: 14px;
    width: 100%;
    height: 78px;
    position: absolute;
    top: 0;
    left: 0;
}

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

.carrierCode,
.veriCode {
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
    font-size: 20px;
    font-weight: 500;
    width: 85%;
    text-align: justify;
    color: white;

    margin: 0 auto;

}

.img--seperator {
    width: 529px;
    height: 54px;
    display: block;
    margin:15px auto;
}
</style>