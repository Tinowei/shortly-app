<script setup>
import ShortLinkContainer from './ShortLink.vue';
import FeaturesOverview from './FeaturesOverview.vue';



</script>

<template>
  <div class="max-w-[1280px] w-full mx-auto">
    <div class="md:flex md:flex-row-reverse md:gap-4 md:mx-4">
      <div class="img-container w-full md:min-w-[500px]  md:w-4/8  overflow-hidden">
        <img src="../assets/images/illustration-working.svg?url"
          class="w-[100%] max-md:h-full relative my-10 scale-120 md:scale-100 left-16 md:left-12" alt="Illustration" />
      </div>
      <div class="text-container pb-16 md:w-4/8 md:mt-12 md:pl-4">
        <h1 class="title text-4xl font-bold max-md:text-center my-4 md:text-[64px]">More than just shorter links
        </h1>
        <p
          class=" font-medium text-[var(--color-gray)] my-4 mb-4 px-4 max-md:text-center  md:text-[20px] md:pr-8 md:pl-0">
          Build your
          brand's
          recognition and
          get
          detailed
          insights on
          how your links are
          performing
        </p>
        <button class="get-started-btn ">Get
          Started
        </button>
      </div>
    </div>

    <div class="bg-[var(--color-light-gray)] h-full">
      <short-link-container></short-link-container>
      <features-overview></features-overview>
    </div>
  </div>
</template>



<style scoped>
.get-started-btn:hover {
  background-color: hsl(180, 86%, 57%);
}
</style>
