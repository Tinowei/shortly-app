<script setup>
import AppLayout from './layouts/AppLayout.vue';
import MainContent from './components/MainContent.vue';

</script>

<template>


  <v-app>

    <app-layout>
      <template #content>
        <main-content></main-content>
      </template>
    </app-layout>
  </v-app>
</template>

<style scoped></style>
