<script setup>
import { reactive, ref, onMounted, nextTick } from 'vue';

const inputs = ref([
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
]);

const handleInput = (index) => {
    const input = inputs.value[index];
    if (index < 2) {
        // uppercase only
        input.value = input.value.replace(/[^A-Z]/g, '');
    } else {
        // numbers only
        input.value = input.value.replace(/[^0-9]/g, '');
    }
    if (input.value && index < inputs.value.length - 1) {
        inputs.value[index + 1].$el.focus();
    }
};

onMounted(() => {
    inputs.value[0].$el.focus();
});
</script>

<template>
    <div class="div__input">
        <div class="input--Combine" style="width: 88px;height: 82px;">
            <!-- <input class="input--Each" type="text" maxlength="1">
                                    <input class="input--Each" type="text" maxlength="1"> -->
            <input v-for="(input, index) in inputs" :key="index" ref="inputs" v-model="input.value" class="input--Each"
                :class="{ 'uppercase': index < 2 }" @input="handleInput(index)" :maxlength="1" :tabindex="index + 1"
                @keydown.enter.prevent />
        </div>
        <span style="font-size: 50px;margin: 0 10px;">-</span>
        <div class="input--Combine" style="width: 351px;height: 82px;">
            <!-- <input class="input--Each" type="tel" maxlength="1">
                                <input class="input--Each" type="tel" maxlength="1">
                                <input class="input--Each" type="tel" maxlength="1">
                                    <input class="input--Each" type="tel" maxlength="1">
                                    <input class="input--Each" type="tel" maxlength="1">
                                    <input class="input--Each" type="tel" maxlength="1">
                                    <input class="input--Each" type="tel" maxlength="1">
                                    <input class="input--Each" type="tel" maxlength="1"> -->

        </div>
        <p></p>
    </div>
</template>

<style lang="scss" scoped>
$width: 375px;
$color: #3E2A28;

.uppercase {
    text-transform: uppercase;
}

.div__input {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 20px 0;
    // border: 2px solid green;
}

.input--Combine {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border: 2px solid #3E2A28;
    background-color: #FFFFFF;
    border-radius: 10px;
    text-transform: uppercase;
}

.input--Each {
    // display: block;
    width: 40px;
    height: 70px;
    border: none;
    border-bottom: 1px solid gray;
    font-size: 24px;
    text-align: center;
    background-color: transparent;
    // padding: 0 20px;
}

.input--Each:focus {
    outline: none;
    // outline-offset: -3px;
}
</style>