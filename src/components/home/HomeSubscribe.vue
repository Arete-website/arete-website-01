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
        <form
          method="POST"
          action="https://formsubmit.co/animashauntaofiq@gmail.com"
          class="mt-12 flex flex-col md:flex-row md:space-x-2 items-center"
        >
          <input type="hidden" name="_template" value="basic" />
          <input
            type="hidden"
            name="_next"
            value="https://areteoutreach.com/thanks?message=You're now subscribed to our waitlist."
          />
          <input
            type="hidden"
            name="_subject"
            value="Subscribing to wait list"
          />
          <input
            name="email"
            type="email"
            placeholder="Enter your mail"
            class="bg-white text-black p-4 rounded-md placeholder:text-[#333333] w-full md:basis-[70%]"
            v-model="input"
            required
          />
          <button type="submit" class="submit-btn" @submit="submitted">
            Subscribe
          </button>
        </form>
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
