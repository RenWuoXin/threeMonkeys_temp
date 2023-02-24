<script setup>
import { reactive, ref } from 'vue';

import invoice from '../components/invoice.vue';

</script>

<template>
    <invoice>
        <template #activityContent>

            <div class="cameraBox">
                <div class="boxTop">
                    <img class="img--colse" src="../assets/img/Close_round.png" alt="">
                </div>
                <div class="boxBottom"></div>
            </div>

        </template>
    </invoice>
</template>

<style lang="scss" scoped>
$width: 375px;
$color: #3E2A28;

.cameraBox{
    position: fixed;
    left: 50%;
    transform: translate(-50%);
    width: 612px;
    height: 814px;
    display: flex;
    flex-direction: column;
}
.boxTop {
    // position: fixed;
    // left: 50%;
    // transform: translate(-50%);
    width: 612px;
    height: 75px;
    background-color: #F4D19E;
    color: #3E2A28;
    vertical-align: middle;
    border: 3px solid #3F2C2A;
    border-radius: 20px 20px 0 0;
    display: flex;
    align-items: center;
    justify-content: right;
    box-shadow: 0 4px rgba(0, 0, 0, 0.25);
}

.boxTop:before {
    content: '';
    border-top: 3px solid white;
    border-radius: 20px;
    width: 585px;
    /* height: 78px; */
    position: absolute;
    top: 3px;
    left: 10px;
}

.boxBottom{
    // position: fixed;
    // top:739px;
    // left: 50%;
    // transform: translate(-50%);
    width: 612px;
    height: 740px;
    // background-color: #F4D19E;
    background-color: black;
    // vertical-align: middle;
    border: 3px solid white;
    // border-radius: 20px 20px 0 0;

    align-items: center;
    justify-content: right;
    // box-shadow: 0 4px rgba(0, 0, 0, 0.25);
}
.img--colse{
    height: 59px;
    flex: none;
    margin-right: 15px;
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