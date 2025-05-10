<script setup>
import AppLayout from './layouts/AppLayout.vue';

</script>

<template>

  <v-app>

    <app-layout>
      <template #content>
        <div>this is slot content
          <v-btn>vuetifys' button</v-btn>
        </div>
      </template>
    </app-layout>



  </v-app>
</template>

<style scoped></style>
