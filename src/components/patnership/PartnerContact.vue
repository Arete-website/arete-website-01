<template>
  <div id="contact"></div>
  <div
    class="subscribe py-16 flex justify-center items-center text-center text-white"
  >
    <div class="container">
      <div class="lg:w-[600px] m-auto" data-aos="fade">
        <h6 class="text-xl lg:text-3xl font-bold my-6">Get in touch</h6>
        <p class="lg:text-lg font-medium">
          Arete appreciates your feedback. We are constantly on the search for
          ways to improve our services. Feel free to send us a message!
        </p>
        <form class="mt-12 mb-6" @submit.prevent>
          <input
            type="text"
            placeholder="Enter your mail"
            class="bg-white text-black p-4 rounded-md placeholder:text-[#333333] w-full mb-6"
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            class="bg-white text-black p-4 rounded-md placeholder:text-[#333333] w-full mb-6"
            placeholder="Enter your message"
          ></textarea>
          <input type="submit" value="Send A Message" class="submit-btn" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
