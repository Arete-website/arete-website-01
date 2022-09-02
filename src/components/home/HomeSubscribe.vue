<template>
  <div
    class="subscribe py-16 flex justify-center items-center text-center text-white h-[450px]"
  >
    <div class="container">
      <div
        class="lg:w-[600px] m-auto"
        data-aos="fade"
        style="
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        "
      >
        <h6 class="text-xl lg:text-3xl font-bold mb-6">
          Subscribe to our newsletter
        </h6>
        <p class="lg:text-lg font-medium mb-8">
          Be the first to know about our bootcamps, partnerships, outreachs, and
          events by subscribing to our newsletter.
        </p>
        <iframe
          class="md:w-[480px]"
          src="https://areteoutreach.substack.com/embed"
          height="100"
          style="border: 1px solid transparent; background: #00366e"
          frameborder="0"
          scrolling="no"
        ></iframe>
        <p
          v-if="successful"
          data-aos="fade-up"
          class="text-green-600 bg-green-50 border border-green-800 p-4 rounded-md"
        >
          {{ message }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "You've successfully Subscribed! 🎉",
      successful: false,
    };
  },
  methods: {
    subscribed() {
      setTimeout(() => {
        this.successful = true;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped></style>
