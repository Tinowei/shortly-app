<script setup>
import { useShortener } from '@/composables/useShortener';
import { copyToClipboard } from '@/utils/copyToClipboard';

const {
  inputLink,
  historyLink,
  isInValid,
  isApiError,
  handleShortenUrl, } = useShortener();


function OnCopy(idx) {
  const copied = copyToClipboard(historyLink.value[idx].shortUrl, idx);
  if (copied) {
    historyLink.value.forEach(item => item.copied = false);
    historyLink.value[idx].copied = true;
    setTimeout(() => {
      historyLink.value[idx].copied = false;
    }, 2000);
  }
}

</script>

<template>
  <div class=" mx-4 mt-20 mb-0">
    <div class="link-container ">
      <!-- link changer -->
      <div
        class="link-changer relative overflow-hidden w-full flex flex-col gap-4 p-6 rounded-xl bg-[var(--color-dark-violet)] md:flex md:flex-row">
        <img src="../assets/images/bg-shorten-mobile.svg" alt="bg-shorten-mobile" width="250px"
          class="absolute top-0 right-0 ">
        <div class="z-10 md:flex-grow md:w-[80%] pb-2">
          <input v-model="inputLink" type="text" placeholder="Shorten a link here..."
            :class="['z-10 relative bg-white', isInValid || isApiError ? 'border-2 border-[var(--color-red)]' : 'border-transparent']" />
          <div v-if="isInValid" class="absolute text-red text-sm mt-1">Please add a valid link</div>
          <div v-else-if="isApiError" class="absolute text-red text-sm mt-1">Cannot shorten url, please try other link
          </div>
        </div>
        <button @click="handleShortenUrl" class="z-10 btn md:!w-[20%] md:h-[52px]">Shorten It !</button>
      </div>
      <!-- / link changer -->

      <!-- link history card -->
      <div v-for="(item, idx) in historyLink" :key="idx" class="link-history-card">
        <div class="md:max-w-[80%] md:flex-grow ">
          <div class="initial-link  ">
            <p class="truncate w-full whitespace-nowrap ">
              {{ item.originalUrl }}
            </p>
          </div>
          <v-divider></v-divider>
          <div class="short-link text-[var(--color-cyan)]">
            <p>{{ item.shortUrl }}</p>
          </div>
        </div>
        <button @click="OnCopy(idx)"
          :class="['btn md:w-[20%] md:max-w-[18%]', item.copied ? '!bg-[var(--color-dark-violet)]' : 'bg-[var(--color-cyan)]']"
          disabled:item.copied>
          {{ item.copied ? 'Copied!' : 'Copy' }}
        </button>
      </div>
      <!-- / link history card -->

    </div>
  </div>
</template>


<style scoped>
input {
  width: 100%;
  padding: 10px 0;
  font-weight: 500;
  padding-left: 8px;
  border-radius: 6px;
}

input:focus {
  outline: none;
}

.btn {
  width: 100%;
  background-color: var(--color-cyan);
  color: white;
  cursor: pointer;
  font-size: 18px;
  padding: 10px 0;
  border-radius: 6px;
}

.btn:hover {
  background-color: hsl(180, 86%, 57%);
}
</style>
