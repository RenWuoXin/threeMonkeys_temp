<script setup>
import { reactive } from 'vue';
</script>

<template>
    <div class="page">
        <!-- <div class="rectangle"></div> -->
        <img class="bgImg" src="../img/invoice/bg.png" alt="">
        <img class="bgRec" src="../img/invoice/Rectangle 1.png" alt="">
        <img class="logoLeft" src="../img/home/LOGO1.png" alt="">
        <img class="title" src="../img/invoice/title.png" alt="">

        <div class="content">
            <div class="contentTop"></div>
            <div class="contentBottom">
                <router-view></router-view>
            </div>
        </div>

        <img class="bottomWarn" src="../img/home/warn.png" alt="">
        <!-- <img class="rectangle" src="../img/invoice/Rectangle 1.png" alt=""> -->
    </div>
    <!-- <router-view></router-view> -->
</template>

<style lang="scss" scoped>
$width: 612px;

.page {
    margin: auto;
    width: $width;
    height: 1089px;
    // background-image: url('../img/invoice/bg.png');
    // background-size: cover;
    // background-position: center;
    // background-repeat: no-repeat;
    // position: relative;
}

// .rectangle {
//     // width: $width;
//     // height: 1089px;
//     // width: 100vh;
//     background-image: url('../img/invoice/Rectangle 1.png');
//     background-size: cover;

//     background-repeat: no-repeat;
//     position: relative;
// }

.content {
    margin: auto;
    width: 580px;
    height: 980px;
    // border: 10px solid green;
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap-reverse;
}

.contentTop {
    width: 580px;
    height: 30%;
    // border: 3px solid red ;
}

.contentBottom {
    width: 580px;
    height: 70%;
    // overflow-y:scroll;
    // border: 3px solid blue ;
}

.bgImg {
    width: $width;
    height: 1089px;
    position: fixed;
    left: 50%;
    transform: translate(-50%);
}

.bgRec {
    width: $width;
    height: 1089px;
    position: fixed;
    // left:50%;
    // transform: translate(-50%);
}

.logoLeft {
    width: 169px;
    height: 112px;
    position: absolute;
    top: 0;
    left: 0;
    // transform: translate(-50%);
}

.bottomWarn {
    width: $width;
    height: 109px;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
}

.title {
    width: $width;
    position: fixed;
    top: 3%;
    left: 50%;
    transform: translate(-50%);
}
</style>