<template>
  <div
    class="fixed top-0 left-0 w-screen h-screen bg-[rgb(0,0,0,0.1)] flex justify-center items-center z-50"
  >
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl bg-white py-8 px-6 w-11/12 md:w-[400px] flex justify-center items-center text-center flex-col rounded-lg text-[#1d1d1d]"
    >
      <span class="mdi mdi-check-circle-outline text-8xl text-green-500"></span>
      <h1 class="text-2xl font-bold mt-4">Great!</h1>
      <p class="mt-2">{{ message }}</p>

      <router-link
        :to="{ name: 'home' }"
        class="bg-green-500 text-white rounded-full px-12 py-4 mt-6 font-semibold btn md:w-[200px]"
      >
        Go Home
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    message() {
      return this.$route.query.message;
    },
  },
};
</script>

<style scoped></style>
