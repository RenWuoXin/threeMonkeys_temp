<script setup>
import invoice from '../components/invoice.vue';
</script>

<template>
    <invoice>
        <template #activityContent>
            <router-link :to="{ name: 'invoice-carrier' }" style="text-decoration: none;"><button
                    style="letter-spacing: 15px;" class="btn btn--primary">
                    <img class="btn--icon" src="../img/invoice/Order_fill.svg" alt="">
                    登錄手機載具
                    <!-- <span style="display: block;"></span> -->
                </button></router-link>

            <router-link :to="{ name: 'invoice-login' }" style="text-decoration: none;"><button style="letter-spacing: 3px;"
                    class="btn btn--primary">
                    <img class="btn--icon" src="../img/invoice/barcode.svg" alt="">
                    登錄新式紙本發票
                </button></router-link>

            <router-link :to="{ name: 'invoice-upload' }" style="text-decoration: none;"><button
                    style="letter-spacing: 4px;" class="btn btn--primary">
                    <img class="btn--icon" src="../img/invoice/Camera_fill.svg" alt="">
                    拍照上傳紙本發票
                </button></router-link>

            <button class="btn btn--scecondary">發票登錄說明</button>
            <button class="btn btn--scecondary">活動辦法／注意事項</button>
        <router-link :to="{ name: 'home' }" style="text-decoration: none;"><button
                class="btn btn--scecondary">回到首頁</button></router-link>

        <!-- <button class="btn btn--scecondary">回到首頁</button>
            <button class="btn btn--scecondary">回到首頁</button>
                            <button class="btn btn--scecondary">回到首頁</button>
                            <button class="btn btn--scecondary">回到首頁</button>
                            <button class="btn btn--scecondary">回到首頁</button>
                            <button class="btn btn--scecondary">回到首頁</button> -->
        </template>
    </invoice>
</template>

<style scoped>
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
    float: left;
    padding-left: 20px;
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
