<script setup>

const toggleOpen = () => {
    const appear = document.querySelector('.close');
    const toggle = document.querySelector('.toggle');
    if (appear.style.display === "block" && toggle.style.transform === "rotate(180deg)") {
        appear.style.display = "none";
        toggle.style.transform = "rotate(0deg)"
    } else {
        appear.style.display = "block";
        toggle.style.transform = "rotate(180deg)"
    }
}

</script>

<template>
    <div class="accordion">
        <div @click="toggleOpen" class="title--toggleOpentop">發票欄位輸入參考
            <img class="toggle" src="../assets/img/Vector.png" alt="">
            <!-- <img class="toggle " src="./toggleclose.png" alt=""> -->
        </div>

        <div class="close">
            <div class="title--toggleOpenbottom">
                <div class="content--left">
                    <img class="img--invoice" src="../assets/img/invoiceExample.png" alt="">
                </div>
                <div class="content--right">
                    <div class="text--content">
                        <img class="ball--number" src="../assets/img/ball1.png" alt="">
                        發票序號
                    </div>
                    <div class="text--content">
                        <img class="ball--number" src="../assets/img/ball2.png" alt="">
                        發票日期
                    </div>
                    <div class="text--content">
                        <img class="ball--number" src="../assets/img/ball3.png" alt="">
                        發票隨機碼
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.title--toggleOpentop {
    width: 530px;
    height: 82px;
    background-color: #F4D19E;
    color: #3E2A28;
    font-weight: 700;
    font-size: 28px;
    /* text-align: center; */
    vertical-align: middle;
    box-sizing: border-box;
    border: 3px solid #3F2C2A;
    border-radius: 10px 10px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px rgba(0, 0, 0, 0.25);
    position: relative;
}

.title--toggleOpentop:before {
    content: '';
    border-top: 3px solid white;
    border-radius: 10px;
    width: 100%;
    /* height: 78px; */
    position: absolute;
    top: 0;
    left: 0;
}

.title--toggleOpenbottom {
    width: 530px;
    height: 380px;
    background-color: #F4D19E;
    display: flex;
    padding: 28px;
    box-sizing: border-box;
    border: 3px solid #3F2C2A;
    border-radius: 0 5px 5px 5px;
    border-top: none;
}

.img--invoice {
    width: 207px;
    height: 312px;
}

.content--right {
    display: flex;
    flex-direction: column;
    margin: auto;
}

.ball--number {
    float: left;
    height: 34px;
    width: 34px;
    margin-right: 18px;
}

.text--content {
    color: black;
    font-size: 26px;
    padding: 18px 0;
}

.toggle {
    width: 18px;
    position: absolute;
    right: 20px;
    transform: rotate(0deg);
}

.close {
    display: none;
    transition: max-height 3s ease-in-out;
}
</style>
