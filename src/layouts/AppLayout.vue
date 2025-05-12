<script setup>
// import { mdi } from 'vuetify/lib/iconsets/mdi-svg';
import appLogo from '../assets/images/logo.svg'
import footerLogo from '../assets/images/footer-logo.svg'
import { mdiMenu } from '@mdi/js';
import { ref } from 'vue';

const menuToggle = ref(false);

//menuItems
const items = [
  {
    title: 'Features',
    subItems: [
      'Link Shortening',
      'Branded Links',
      'Analytics',
    ]
  },
  {
    title: 'Pricing',
    subItems: [
      'Blog',
      'Developers',
      'Support'
    ]
  },
  {
    title: 'Resources',
    subItems: [
      'About',
      'Our Team',
      'Careers',
      'Contact'
    ]
  },
]


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

  <div>
    <slot name="content"></slot>
  </div>

  <!-- footer -->
  <footer
    class="max-w-[1280px] w-full mx-auto bg-[var(--color-very-dark-blue)] text-white flex flex-col items-center py-12 md:flex-row md:justify-around md:items-start">
    <footer-logo class="footer-logo md:mr-8"></footer-logo>

    <!-- footer-menu-list -->
    <div v-for="(item, idx) in items" :key="idx" class="menu flex flex-col items-center text-center py-4 md:p-0 ">
      <div class="menuItem text-xl my-4 font-bold md:mt-0">{{ item.title }}</div>
      <ul>
        <li v-for="(subItem, subIdx) in item.subItems" :key="subIdx"
          class="subItem text-[14px] text-[var(--color-gray)] py-2 my-2 cursor-pointer">{{
            subItem }}</li>
      </ul>
    </div>

    <div class="flex gap-4 max-md:mt-4">
      <div class="social-media">
        <img src="../assets/images/icon-facebook.svg?url" alt="facebook " />
      </div>
      <div class="social-media">
        <img src="../assets/images/icon-twitter.svg?url" alt="twitter " />
      </div>
      <div class="social-media">
        <img src="../assets/images/icon-pinterest.svg?url" alt="pinterest " />
      </div>
      <div class="social-media">
        <img src="../assets/images/icon-instagram.svg?url" alt="instagram " />
      </div>
    </div>
  </footer>
</template>

<style scoped>
a {
  cursor: pointer;
}

nav a:hover {
  color: black;
}

.my-menu-list>li {
  padding: 16px;
  cursor: pointer;
  margin: 0 30px;
}

.my-menu-list>li:hover {
  border-radius: 30px;
  background-color: var(--color-cyan);
}
</style>
