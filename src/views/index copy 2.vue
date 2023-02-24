<script setup>
import { reactive, ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'

import invoice from '../components/invoice.vue';
import activityText from '../components/activityText.vue';
import noticeText from '../components/noticeText.vue';

const $router = useRouter();

const state = reactive({
    tab: '',
    isAgree: false,
});

// const isRead = ref(false);
// const isShowReadButton = ref(false);
// const handleIntersection = (entries, observer) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             switch (entry.target.id) {
//                 case 'activityText':
//                     isRead.value = true;
//                     break;
//                 case 'noticeText':
//                     isRead.value = true;
//                     break;
//             }
//             observer.unobserve(entry.target);
//         }
//     });
// };

// const observer = new IntersectionObserver(handleIntersection, { threshold: 1 });
// onMounted(() => {
//     observer.observe($refs.activityText.$el);
//     observer.observe($refs.noticeText.$el);
// });

const goBack = () => {
    $router.go(-1)
}

// onMounted(() => {
//     const { tab } = $router.params;
//     state.tab = tab || 'activityText';
// });
</script>

<template>
    <invoice>
        <template #activityContent>
            <div class="carrierPage">
                <div class="div--text">
                    <div class="text--title">
                        <span class="title--notice" 
                              :class="{ active: state.tab === 'activityText' }"
                            @click="state.tab = 'activityText'">
                            活動辦法</span>
                        <span class="title--notice" 
                              :class="{ active: state.tab === 'noticeText' }"
                            @click="state.tab = 'noticeText'">
                            注意事項</span>
                    </div>
                    <div class="text--content">
                        <template v-if="state.tab === 'activityText'">
                            <activityText></activityText>
                        </template>
                        <template v-else>
                            <noticeText></noticeText>
                        </template>
                    </div>
                </div>

                <router-link :to="{ name: 'home' }" style="text-decoration: none;"><button
                        class="btn btn--primary">回到主頁</button></router-link>

                <router-link :to="{ name: 'home' }" style="text-decoration: none;"><button
                        class="btn btn--primary">閱讀完了，進入首頁</button></router-link>


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

.div--text {
    width: 530px;
    height: 550px;
    box-sizing: content-box;
    display: flex;
    flex-direction: column;
    border: 3px solid #3E2A28;
    border-radius: 10px;
    background-color: #EECC9A;
}

.title--notice.active {
    display: inline-block;
    width: 265px;
    height: 81px;
    border-right: 3px solid #3E2A28;
    border-bottom: none;
    /* border-top: 3px solid  #FFFFFF; */
    /* border-radius: 10px; */
    background-color: #3E2A28;
    color: #FFF6E9;
    font-size: 28px;
    font-weight: 500;
    /* margin: auto; */
    position: relative;
    cursor: pointer;
    text-align: center;
    line-height: 81px;
}

.title--notice.active::before {
    content: '';
    border-top: 3px solid #EECC9A;
    border-radius: 10px 0 0 0;
    width: 100%;
    height: 78px;
    position: absolute;
    top: 0;
    left: 0;
}

.title--notice {
    display: inline-block;
    width: 265px;
    height: 81px;
    border-left: 3px solid #3E2A28;
    /* border-top: 3px solid  #FFFFFF; */
    border-radius: 0 10px 0 0;
    background-color: #EECC9A;
    color: #3E2A28;
    font-size: 28px;
    font-weight: 500;
    /* margin: auto; */
    position: relative;
    cursor: pointer;
    text-align: center;
    line-height: 81px;
}

.title--notice::before {
    content: '';
    border-top: 3px solid #FFFFFF;
    border-radius: 0 10px 0 0;
    width: 100%;
    height: 78px;
    position: absolute;
    top: 0;
    left: 0;
}

.text--content {
    width: 530px;
    height: 450px;
    background-color: #EECC9A;
    color: #402C2A;
    font-size: 24px;
    border-top: 3px solid #3E2A28;
    padding: 15px 30px;
    text-align: justify;
    overflow-y: scroll;
    /* border-radius: 10px; */
}

/* Hide scrollbar for Chrome, Safari and Opera */
.text--content::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.text--content {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
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