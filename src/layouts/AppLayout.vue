<script setup>
// import { mdi } from 'vuetify/lib/iconsets/mdi-svg';
import appLogo from '../assets/icons/logo.svg'
import { mdiMenu } from '@mdi/js';
import { ref } from 'vue';
const menuToggle = ref(false);

</script>
<template>
  <header class="my-header max-w-[1280px] w-full mx-auto flex justify-between  pt-10 pb-[20px] px-[24px]">
    <app-logo></app-logo>
    <nav class="hidden grow-1 md:flex justify-between md:mx-4 text-[var(--color-gray)] font-semibold">
      <div class="grow-1 ml-8 ">
        <a class="mr-6">Features</a>
        <a class="mr-6">Pricing</a>
        <a class="mr-6">Resources</a>
      </div>
      <div class="md:block">
        <a class="mr-6 px-4 py-2 hover:!text-white  rounded-4xl hover:bg-[var(--color-cyan)]">Login</a>
        <a class=" px-4 py-2 hover:!text-white  rounded-4xl hover:bg-[var(--color-cyan)]">Sign Up</a>
      </div>
    </nav>
    <div class="my-hamburger md:hidden">
      <v-icon @click="menuToggle = !menuToggle" :icon="mdiMenu" class="text-zinc-400 "></v-icon>
    </div>
    <!-- custom List -->
    <ul v-if="menuToggle"
      class="my-menu-list z-50 fixed border w-[calc(100vw-3rem)] top-[95px] left-[50%] right-[50%] transform -translate-x-[50%] text-center text-white font-bold bg-[var(--color-dark-violet)] rounded-xl pt-4 pb-10 md:hidden">
      <li>Features</li>
      <li>Pricing</li>
      <li>Resources</li>
      <v-divider class="my-divider mx-4 my-4"></v-divider>
      <li>Login</li>
      <li>Sign Up</li>
    </ul>
  </header>
  <slot name="content"></slot>
</template>

<style scoped>
a {
  cursor: pointer;
}

nav a:hover {
  color: black;
}

li {
  padding: 16px;
  cursor: pointer;
  margin: 0 30px;
}

li:hover {
  border-radius: 30px;
  background-color: var(--color-cyan);
}
</style>
