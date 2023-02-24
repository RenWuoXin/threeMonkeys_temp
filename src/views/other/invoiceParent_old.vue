<script setup>
import { reactive } from 'vue';
</script>

<template>
    <div class="page">
        <div class="rectangle">
            <img class="logoLeft" src="../img/home/LOGO1.png" alt="">
            <img class="title" src="../img/invoice/title.png" alt="">
            <router-view></router-view>
            <img class="bottomWarn" src="../img/home/warn.png" alt="">
        </div>
        <!-- <img class="rectangle" src="../img/invoice/Rectangle 1.png" alt=""> -->
        <!-- <router-view></router-view> -->
    </div>

</template>

<style lang="scss" scoped>
$width: 375px;

.page {
    width: $width;
    height: 667px;
    // width: 100vh;
    background-image: url('../img/invoice/bg.png');
    background-size: cover;

    background-repeat: no-repeat;
    position: relative;
}

.rectangle {
    width: $width;
    height: 667px;
    // width: 100vh;
    background-image: url('../img/invoice/Rectangle 1.png');
    background-size: cover;

    background-repeat: no-repeat;
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

.title {
    width: $width;
    position: absolute;
    top: 3%;
    left: 0;
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