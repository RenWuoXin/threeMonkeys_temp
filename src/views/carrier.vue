<script setup>
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'

import invoice from '../components/invoice.vue';

const router = useRouter()

const goBack = () => {
    router.go(-1)
}

const veriForm = reactive({
    carrierData: '',
    veriData: '',
    agreeDeclaration: false,
    verify: () => {
        const carrierCode = document.querySelector('.carrierCode').value;
        const veriCode = document.querySelector('.veriCode').value;
        const checkBox = document.querySelector('#checkDeclaration').value;
        // if (!carrierCode) {
        //     carrierCode.style = "border:1px solid #ffffff";
        // };
        // if (!veriCode) {
        //     veriCode.style = "border:1px solid #ffffff";
        // };
        // if (!checkBox) {
        //     checkBox.style = "border:1px solid #ffffff";
        // }
        // document.forms['form'].submit();
        console.log('checkBox');
    },
    look: () => {
        console.log('hello');
    },
});
</script>

<template>
    <invoice>
        <template #activityContent>
            <div class="carrierPage">
                <form name="form">

                    <input required v-model="veriForm.carrierData" class="carrierCode" type="text"
                        placeholder="    請輸入你的手機載具號碼(必填)">
                    <p><a class="howToLook" href="#example">如何查看載具號碼 ></a></p>
                    <input required v-model="veriForm.veriData" class="veriCode" type="text"
                        placeholder="    請輸入手機載具驗證碼(必填)">
                    <p><a class="forgetPassword" href="">忘記密碼 ></a></p>
                    <img class="line" src="../img/carrier/Line.png" alt="">

                    <div class="declare">
                        <div class="checkbox">
                            <input v-model="veriForm.agreeDeclaration" required id="checkDeclaration" type="checkbox">
                        </div>
                        <div class="declaration">
                            <label for="checkDeclaration">本人已詳閱並完全了解及同意有關本次活動辦法，
                                注意事項及個資蒐集利用之聲明，
                                並同意主辦單位得將所蒐集之個人資料一活動須知第二條之規定進行後續活動所需之利用與處理。
                            </label>
                        </div>
                    </div>

                    <!-- <img onclick="document.forms['form'].submit();" class="btn" src="../img/carrier/btn1-2-1.png" alt=""> -->
                    <router-link :to="{ name: 'invoice-login' }" style="text-decoration: none;"> <label for="submit">
                            <button style="letter-spacing: 3px;" class="btn btn--primary">
                                <img class="btn--icon" src="../assets/img/Arrow_right.png" alt="">
                                確認送出
                            </button>
                        </label></router-link>

                    <!-- <input id="submit" style="display: none;" type="submit" value=""> -->

                    <button @click="goBack" class="btn btn--scecondary">回上一頁</button>
                    <button class="btn btn--scecondary">發票登錄說明</button>
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