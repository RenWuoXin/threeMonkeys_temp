<script setup>
import { reactive } from 'vue';
</script>

<template>
    <div class="page">
        <img class="logoLeft" src="../img/home/LOGO1.png" alt="">
        <img class="activityName" src="../img/home/activeity.png" alt="">
        <img class="brandLogo" src="../img/home/LOGO.png" alt="">
        <img class="sendPoint" src="../img/home/送LINE POINT.svg" alt="">
        <img class="btn btn1" src="../img/home/btn1.png" alt="">
        <img class="btn btn2" src="../img/home/btn2.png" alt="">
        <img class="btn btn3" src="../img/home/btn3.png" alt="">
        <img class="bottomWarn" src="../img/home/warn.png" alt="">
    </div>

</template>

<style lang="scss" scoped>
$width: 375px;

.page {
    margin: auto;
    width: $width;
    height: 667px;
    background-image: url('../img/home/homebg.png');
    background-size: cover;
    position: relative;
}

.logoLeft {
    width: 95px;
    height: 63px;
    position: absolute;
    top: 0;
    left: 0;
}

.bottomWarn {
    width: $width;
    height: 67px;
    position: absolute;
    bottom: 0;
    left: 0
}

.activityName {
    width: 271px;
    height: 163px;
    position: absolute;
    left: 15%;
    top: 8%;
}

.brandLogo {
    width: 210px;
    height: 58px;
    position: absolute;
    left: 22%;
    top: 31%;
}

.sendPoint {
    width: 203px;
    height: 72px;
    position: absolute;
    left: 22%;
    top: 43%;
}

.btn {
    width: 257px;
    height: 50px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
}

.btn1 {
    top: 55%;
}

.btn2 {
    top: 65%;
}

.btn3 {
    top: 75%;
}
</style>