<template>
  <div class="pt-[56px] pb-[100px]">
    <div class="container">
      <div>
        <h2 data-aos="fade" class="text-xl font-semibold mb-8 text-left">
          Arete's Bursary
        </h2>
        <p>
          Arete's bursary is a subset of Arete; it is set up to sponsor young
          people's journey in technological fields by:

          <li>purchasing internet subscriptions for techies</li>
          <li>purchasing courses for techies</li>
          <a
            href="https://docs.google.com/presentation/d/18RRg1y_WvwUVmGfaRMf5jBnQFdOXjtOj/edit?usp=sharing&ouid=102030039098850560749&rtpof=true&sd=true"
            class="text-primary font-semibold"
          >
            Read More</a
          >
        </p>
        <a
          href="https://forms.gle/8BHJMd2rPEYcBUou7"
          target="_blank"
          class="bg-primary text-white rounded-md py-4 mt-[24px] font-semibold btn w-[208px] text-center inline-block"
        >
          Benefit from the Bursary</a
        >
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
          content: "Arete focuses on educating children and youths.",
          src: "beneficiary-01",
          bg: "bg-[#F5F9FC]",
          reverse: true,
        },
        {
          title: "Our Volunteers",
          content:
            "Our volunteers are dedicated individuals who love to impact society positively.",
          src: "beneficiary-02",
          bg: "bg-[rgba(232,0,119,0.08)]",
          reverse: false,
        },
        {
          title: "Communities and schools",
          content:
            "We carry out outreach programs to local communities and schools.",
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
