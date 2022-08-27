<template>
  <div
    class="subscribe py-16 flex justify-center items-center text-center text-white h-[450px]"
  >
    <div class="container">
      <div class="lg:w-[600px] m-auto" data-aos="fade">
        <h6 class="text-xl lg:text-3xl font-bold mb-6">
          Subscribe to our newsletter
        </h6>
        <p class="lg:text-lg font-medium">
          Be the first to know about our bootcamps , partnerships, outreachs,
          and events by subscribing to our newsletter.
        </p>
        <iframe 
        class="mt-12 flex flex-col md:flex-row md:space-x-2 items-center"
          src="https://areteoutreach.substack.com/embed"
          width="500"
          height="100"
          style="border: 1px solid #00366e; background: white"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    submitted() {
      this.input = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
