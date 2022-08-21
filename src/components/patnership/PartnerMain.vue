<template>
  <div
    class="routes h-[400px] flex items-center justify-center w-full bg-[url('/img/partner-m-bg.png')] md:bg-[url('/img/partner-d-bg.png')] bg-no-repeat bg-center bg-cover relative main-bg partner"
  >
    <div
      class="grid grid-cols-1 md:grid-cols-3 text-center relative z-10 w-full h-full"
    >
      <div
        v-for="(text, index) in texts"
        :key="index"
        class="text-white font-bold text-2xl border-r border-r-white border-b border-b-white flex justify-center items-end pb-4"
        :class="[index === 0 || index === 3 ? 'flex' : 'hidden md:flex']"
      >
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texts: [
        "Excellence",
        "Leadership",
        "Unity",
        "Quality",
        "Strength",
        "Collaboration",
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
