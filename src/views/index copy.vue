<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';


</script>

<template>
    <div class="page">
        <!-- <div class="rectangle"></div> -->
        <img class="bgImg" src="../img/home/homebg.png" alt="">
        <!-- <img class="bgRec" src="../img/invoice/Rectangle 1.png" alt=""> -->
        <img class="logoLeft" src="../img/home/LOGO1.png" alt="">


        <div class="content">
            <div class="contentTop">
                <img class="title" src="../img/home/activeity.png" alt="">
                <img class="brandName" src="../img/home/LOGO.png" alt="">
            </div>
            <div class="contentBottom">
                <img class="sendPoint" src="../img/home/送LINE POINT.svg" alt="">
                <button class="btn btn--primary">立即登錄發票</button>
                <button class="btn btn--scecondary">活動辦法／注意事項</button>
                <button class="btn btn--scecondary">活動店家資訊</button>
                <!-- <img class="btn" src="../img/home/btn1.png" alt=""> -->
                <!-- <img class="btn" src="../img/home/btn2.png" alt=""> -->
                <!-- <img class="btn" src="../img/home/btn3.png" alt=""> -->
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
    position: relative;
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
    height: 46%;
    // border: 3px solid red;
}

.contentBottom {
    width: 580px;
    height: 54%;
    overflow-y: scroll;
    // border: 3px solid blue;

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
    position: absolute;
    bottom: 0;
    left: 0;
    // left: 50%;
    // transform: translate(-50%);
}

.content img {
    display: flex;
    flex-direction: column;

}

.title {
    width: 418px;
    // position: fixed;
    top: 3%;
    left: 50%;
    margin: 80px 90px 0;
    // transform: translate(-50%);
}

.brandName {
    width: 343px;
    margin: 0 auto;
}

.sendPoint {
    width: 333px;
    // border: 1px solid green;
    margin: 8px auto 0;
}

.btn {
    // display: flex;
    // width: 419px;
    // height: 82px;
    // flex-direction: row;
    margin: 20px auto;
    // left: 10px;
    // transform: translate(-50%);
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
    // border-top: 3px solid  #FFFFFF;
    border-radius: 14px;
    background-color: #F4D19E;
    color: #402C2A;
    font-size: 32px;
    font-weight: 700;
    // margin: auto;
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