<script setup>
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'

import invoice from '../components/invoice.vue';
import activityText from '../components/activityText.vue';
import noticeText from '../components/noticeText.vue';

const router = useRouter()

const goBack = () => {
    router.go(-1)
}


</script>

<template>
    <invoice>
        <template #activityContent>
            <div class="carrierPage">
                <!-- <activityText></activityText> -->
                <noticeText></noticeText>
                <router-link :to="{ name: 'home' }" style="text-decoration: none;"><button
                        class="btn btn--primary">回到主頁</button></router-link>
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
    /* border-top: 3px solid  #FFFFFF; */
    border-radius: 14px;
    background-color: #000000;
    color: #F4D19E;
    font-size: 32px;
    font-weight: 700;
    /* margin: auto; */
    position: relative;
    cursor: pointer;
}

.btn--primary:before {
    content: '';
    border-top: 3px solid #F4D19E;
    border-radius: 14px;
    width: 100%;
    height: 78px;
    position: absolute;
    top: 0;
    left: 0;
}
</style>