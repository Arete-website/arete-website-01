<template>
  <div class="pt-[56px] pb-[100px]">
    <div class="container">
      <div>
        <h2 data-aos="fade" class="text-xl font-semibold mb-8 text-center">
          To know when our next event, bootcamp and outreach comes up click
          <router-link
            :to="{ name: 'event' }"
            class="text-primary font-semibold"
            >here</router-link
          >
        </h2>
      </div>
    </div>
    <side-slide
      :src="slide.src"
      :bg="slide.bg"
      :alt="slide.title"
      :reverse="slide.reverse"
      v-for="(slide, index) in slides"
      :key="index"
    >
      <p
        class="text-4xl text-[#0A1F35] bg-[rgba(0,54,110,0.03)] rounded-full w-[56px] h-[56px] flex items-center justify-center mb-4"
      >
        {{ index + 1 }}
      </p>
      <h5 class="text-xl lg:text-3xl xl:text-4xl mb-6 text-[#0A1F35]">
        {{ slide.title }}
      </h5>
      <p class="lg:text-lg text-[#141414]">
        {{ slide.content }}
      </p>
    </side-slide>
  </div>
</template>

<script>
import SideSlide from "../reuseables/SideSlide.vue";
export default {
  components: {
    SideSlide,
  },
  data() {
    return {
      slides: [
        {
          title: "Our learners",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar at mauris quis blandit faucibus quis tempus. Amet diam tempus amet, massa ultrices. Parturient mi, ullamcorper diam in dolor pellentesque sagittis ultricies justo. ",
          src: "beneficiary-01",
          bg: "bg-[#F5F9FC]",
          reverse: true,
        },
        {
          title: "Our Volunteers",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar at mauris quis blandit faucibus quis tempus. Amet diam tempus amet, massa ultrices. Parturient mi, ullamcorper diam in dolor pellentesque sagittis ultricies justo. ",
          src: "beneficiary-02",
          bg: "bg-[rgba(232,0,119,0.08)]",
          reverse: false,
        },
        {
          title: "Communities and schools",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar at mauris quis blandit faucibus quis tempus. Amet diam tempus amet, massa ultrices. Parturient mi, ullamcorper diam in dolor pellentesque sagittis ultricies justo. ",
          src: "beneficiary-03",
          bg: "bg-[#F5F9FC]",
          reverse: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
