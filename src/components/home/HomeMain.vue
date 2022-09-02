<template>
  <div
    class="routes h-[calc(100vh-78px)] flex items-center justify-center w-full bg-[url('/img/mobile-bg.svg')] md:bg-[url('/img/desktop-bg.svg')] bg-no-repeat bg-center bg-cover relative main-bg"
  >
    <div class="container text-center z-10">
      <h1
        class="text-3xl lg:text-4xl text-white font-bold leading-[40px] lg:w-[800px] m-auto lg:leading-[49px]"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        Training the next generation of computer literates, with Arete.
      </h1>
      <button
        class="bg-primary text-white rounded-md px-12 py-4 mt-[24px] font-semibold btn md:px-0 md:w-[208px]"
        @click="$router.push({ name: 'partnership' })"
        data-aos="fade"
        data-aos-delay="500"
      >
        Become a partner
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
