<script setup>
import myLogo from '../assets/icons/logo.svg'
import { ref } from 'vue'
const menuToggle = ref();
const items = [
  { title: 'Features' },
  { title: 'Pricing' },
  { title: 'Resources' },
]

</script>

<template>
  <v-app-bar :elevation="0" class="my-header">
    <v-app-bar-title>
      <my-logo />
    </v-app-bar-title>
    <template v-slot:append>
      <v-app-bar-nav-icon @click="menuToggle = !menuToggle" class="my-hamburger !text-zinc-400"></v-app-bar-nav-icon>
    </template>
  </v-app-bar>

  <!-- 自訂選單 -->
  <div v-if="menuToggle"
    class="my-menu-list absolute z-50 top-[80px] left-1/2 transform -translate-x-1/2 bg-white shadow-lg w-[calc(100vw-3rem)] ">
    <v-list class="my-list !font-bold" ani>
      <v-list-item v-for="(item, index) in items" :key="index" :value="index" :ripple="false" class="my-list-item ">
        <v-list-item-title class="my-list-item-title  text-center">
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
      <v-divider class="my-divider text-zinc-100"></v-divider>
      <v-list-item class="my-list-item">
        <v-list-item-title class="my-list-item-title   text-center w-full">Login
        </v-list-item-title>
        <v-list-item-title class="text-center my-list-item-title ">Sign Up
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </div>


  <!-- svg 形式 需額外安裝 @mdi/js -->
  <!-- <v-icon :icon="mdiHome"></v-icon> -->
  <!-- iconfont 形式 需裝 @mdi/font -->
  <!-- <i class="mdi mdi-home"></i> -->

</template>

<style scoped>
.my-header {
  padding: 0 4px;
  padding-top: 12px;

}

.my-list {
  background-color: var(--color-dark-violet);
  border-radius: 10px;
}

.my-list-item:active {
  background-color: transparent !important;
}

.my-list-item {
  padding: 10px 30px;
}

.my-list-item-title:hover {
  border-radius: 30px;
  background-color: var(--color-cyan);
}


.my-list-item-title {
  color: white;
  font-weight: 900;
  padding: 16px;
  cursor: pointer;
}
</style>
