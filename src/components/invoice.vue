<script setup>
import { reactive } from 'vue';
</script>

<template>
    <div class="page">
        <img class="bgImg" src="../assets/img/bg.png" alt="">
        <img class="title" src="../assets/img/title2.png" alt="">
        <img class="bgRec" src="../assets/img/Rectangle.png" alt="">
        <img class="logoLeft" src="../assets/img/logoLeft.png" alt="">

        <img class="waterBottom" src="../assets/img/waterBottom.png" alt="">
        <img class="bottomWarn" src="../assets/img/bottomWarn.png" alt="">

        <div class="content">
            <div class="contentTop"></div>
            <div class="contentBottom">
                <slot name="activityContent"></slot>

            </div>
        </div>


    </div>
</template>

<style lang="scss" scoped>
$width: 612px;

.page {
    margin: auto;
    width: $width;
    max-height: 1089px;
    position: relative;
}

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
    border: 3px solid red;
}

.contentBottom {
    width: 580px;
    height: 70%;
    overflow-y: scroll;
    border: 3px solid blue;

}

/* Hide scrollbar for Chrome, Safari and Opera */
.contentBottom::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.contentBottom {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}

.bgImg {
    width: $width;
    height: 1089px;
    position: fixed;
    // left: 50%;
    // transform: translate(-50%);
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
    left: 0;
    display: block;
    left: 50%;
    transform: translate(-50%);
}

.waterBottom {
    width: 595px;
    position: fixed;
    bottom: 0;
    // left: 0;
    left: 50%;
    transform: translate(-50%);
    // height: 373px;

}

.title {
    width: $width;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%);
}
</style>