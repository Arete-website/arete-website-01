<template>
  <div class="bg-primary text-[#0A1F35] leading-9 py-16">
    <div class="container">
      <div class="md:flex justify-between items-center md:space-x-8">
        <div
          class="bg-white rounded-md p-6 basis-1/2 mb-8 md:mb-0 lg:h-[500px] lg:basis-[600px] 1xl:basis-[681px] lg:p-14"
          data-aos="fade"
        >
          <div class="1xl:w-[544px] m-auto">
            <h2 class="text-primary font-bold text-xl lg:text-3xl mb-4">
              Who Are We?
            </h2>
            <p class="mb-6">
              Arete, founded in 2019, is a non-profit organization, focusing on
              educating children and young people in tech and supporting their
              journeys through the Arete Bursary.
            </p>
            <p class="mb-[14px]">
              We believe that equipping children and young people with technical
              and soft skills bridges the technological gap between our society
              and the global community.
            </p>
            <router-link
              :to="{ name: 'about' }"
              class="text-primary font-bold btn"
              >Read More</router-link
            >
          </div>
        </div>
        <ul class="basis-1/2 lg:basis-[480px] 1xl:basis-[480px]">
          <li v-for="who in whos" :key="who" class="pt-1" data-aos="zoom-in">
            <span
              class="font-semibold text-white bg-[#002A56] rounded-md px-3 py-2 lg:text-lg"
              >{{ who.title }}</span
            >
            <span class="text-[#CEDEEF] block my-3">{{ who.content }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      whos: [
        {
          title: "Tech In Slums",
          content:
            "We partner with outreach programs and non-profits to bring tech to children and young people living  in slums.",
        },
        {
          title: "Training bootcamps",
          content:
            "We host virtual bootcamps, where we teach children and young people valuable tech and people skills.",
        },
        {
          title: "Arete Bursary",
          content:
            "We also run a bursary that caters to young people building a career in tech.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
