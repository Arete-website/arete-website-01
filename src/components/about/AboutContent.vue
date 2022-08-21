<template>
  <div class="py-[100px]">
    <div class="container">
      <div class="text-left">
        <p data-aos="fade" class="text-primary font-bold text-xl mb-3.5">
          Get to know the team
        </p>
        <h2
          data-aos="fade-up"
          class="text-2xl lg:text-4xl font-bold mb-14 md:w-[600px] lg:w-[727px]"
        >
          We are dedicated to providing value and impact in the society.
        </h2>
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0 md:gap-x-10 mt-12 lg:text-lg text-[rgba(20,20,20,0.62)]"
        >
          <div v-for="content in contents" :key="content" data-aos="zoom-in">
            <p class="font-bold mb-[18px] text-2xl">{{ content.title }}</p>
            <p class="text-[#141414]">
              {{ content.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contents: [
        {
          title: "Arete for Soft-Skills",
          content:
            "Arete is an initiative that offers teaching services on soft skills such as Microsoft Packages such as Microsoft Word, Microsoft-Excel, Microsoft-Powerpoint, Microsoft -Access, and Scratch for children and students.",
        },
        {
          title: "Arete for Tech",
          content:
            "Arete recently started teaching tech-related courses such as front-end development and design. Our team stays current on the latest technology and provides a professional curriculum for all the teaching services we offer.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
