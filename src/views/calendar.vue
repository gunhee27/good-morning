<template>
    <div class="layout">
      <DatePicker v-model.string="date" :masks="masks" expanded/>
      <div class="today">
        <p>날짜 : {{ date }}</p>
        <p>날씨 : </p>
        <p>할일 : <textarea /></p>
        <p>뉴스 : <textarea /></p>
      </div>
    </div>
</template>

<script setup lang="ts">
import { DatePicker } from 'v-calendar';
import { ref } from 'vue';

const date = ref(new Date().toISOString().split('T')[0]);

const masks = ref({
  modelValue: 'YYYY-MM-DD',
}); 

</script>

<style scoped lang="scss">
.today{
  height: 200px;
  border: 1px solid;
  border-radius: 20px;
  width: 50vw;
  p{
    width: fit-content;
    margin: 10px; 
  }
  
}
</style>
