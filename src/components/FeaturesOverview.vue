<template>
  <div class=" mx-auto">
    <div class="flex flex-col items-center">
      <h2>Advanced Statistics</h2>
      <p class="text-center text-md my-4 max-w-[520px] text-[var(--color-gray)]">Track how your links are performing
        across the web
        with
        our
        advanced
        statistics dashboard.</p>
    </div>
    <div class="card-container">
      <div class="feature-card  ">
        <div class="card-icon">
          <img src="../assets/images/icon-brand-recognition.svg" alt="brand recognition img">
        </div>
        <div class="card-title">Brand Recognition</div>
        <div class="card-content"> Boost your brand recognition with each click.
          Generic links
          don’t mean a
          thing. Branded
          links help instil confidence in your content.</div>
      </div>
      <div class="feature-card md:relative md:top-[40px]">
        <div class="card-icon">
          <img src='../assets/images/icon-detailed-records.svg' alt="detailed records img">
        </div>
        <div class="card-title">Detailed Records</div>
        <div class="card-content ">Gain insights into who is clicking your links.
          Knowing when
          and
          where people
          engage with
          your content helps inform better decisions.</div>
      </div>
      <div class="feature-card md:relative md:top-[80px]">
        <div class="card-icon">
          <img src='../assets/images/icon-fully-customizable.svg' alt="fully customizable img" width="40px"
            height="40px">
        </div>
        <div class="card-title">Fully Customizable</div>
        <div class="card-content">Improve brand awareness and content
          discoverability through
          customizable
          links,
          supercharging audience engagement.</div>
      </div>
    </div>
    <div
      class=" flex flex-col justify-center items-center py-20 bg-[var(--color-dark-violet)] text-white
    bg-[url('../assets/images/bg-boost-mobile.svg')] md:bg-[url('../assets/images/bg-boost-desktop.svg')] bg-no-repeat bg-cover bg-right-top">
      <h3 class="z-5 text-2xl font-bold">Boost your links today</h3>
      <button class="get-started-btn z-5 mt-10 "><a href="" class="py-3">Get
          Started</a></button>
    </div>
  </div>

</template>

<script setup>
</script>

<style scoped>
@media screen and (min-width: 768px) {
  .card-container::before {
    content: '';
    position: absolute;
    width: 400px;
    height: 5px;
    left: 50%;
    right: 50%;
    top: 60%;
    transform: translateX(-50%);
    background-color: var(--color-cyan);
  }
}

.get-started-btn:hover {
  background-color: hsl(180, 86%, 57%);
}
</style>
