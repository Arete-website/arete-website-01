<template>
  <div class="pb-[100px] text-[#141414]">
    <div class="container">
      <div class="text-center">
        <p class="text-xl mb-2">Don't Just Take our word for it,</p>
        <p class="text-4xl mb-4">Hear from others.</p>
      </div>

      <carousel
        :settings="settings"
        :autoplay="3000"
        v-if="beneficiaries.length"
      >
        <slide v-for="benefactor in beneficiaries" :key="benefactor">
          <div
            class="flex justify-center items-center text-center md:w-[500px] lg:w-[590px] mx-auto flex-col"
          >
            <img
              :src="`/img/${benefactor.src}`"
              alt="benefactor"
              class="mb-6 w-[100px] h-[100px]"
            />
            <p class="mb-4">
              {{ benefactor.content }}
            </p>
            <p class="text-xl mb-1">{{ benefactor.name }}</p>
            <p class="text-xl">Volunteer</p>
          </div>
        </slide>
        <template #addons>
          <pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";
export default {
  components: { Carousel, Slide, Pagination },
  data() {
    return {
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
        wrapAround: true,
      },
      beneficiaries: [
        {
          name: "Jegede Eniola",
          content:
            "As a content writer I was able to improve on my writing skills as well as gain more experience by being a member of Aretes book club.",
          src: "benefactor-01.svg",
        },
        {
          name: "Fortune Adekogbe",
          content:
            "I got to meet other great volunteers and introduce children to programming. As someone who is particular about impact, this helped.",
          src: "benefactor-02.svg",
        },
        {
          name: "Eunice Edeoghon",
          content:
            "Arete gave me an opportunity to work closely with kids, that is something I always wanted to do. Also, I got the opportunity to handle their social media pages for a period of time. That helped me develop my graphics design and PR skills as well.",
          src: "benefactor-03.svg",
        },
      ],
    };
  },
};
</script>

<style scoped>
:deep(.carousel__pagination-button) {
  background: rgba(217, 217, 217, 0.29);
  border-radius: 100%;
  height: 12px;
  width: 12px;
}
:deep(.carousel__pagination-button--active) {
  background: #00366e;
}
</style>
