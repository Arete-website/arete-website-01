<template>
  <div class="py-16 text-[#0A1F35]">
    <div class="container">
      <div
        class="xl:w-[1110px] 2xl:w-[1226px] m-auto text-center"
        data-aos="fade"
      >
        <h3
          class="font-bold text-2xl lg:text-3xl mb-6 relative center-title-tag"
        >
          Our Objectives
        </h3>
        <p class="lg:text-xl leading-[31px]">
          We believe that teaching and equipping children with programming and
          soft skills will improve their typing, critical thinking, and
          problem-solving abilities. <br class="lg:hidden" /><br
            class="lg:hidden"
          />
          This will bridge the technological gap between our society and the
          global community and also help them solve the problems in the society
          in the long run.
        </p>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-[41px] p-4 md:p-0"
      >
        <div
          v-for="(rate, index) in rates"
          :key="index"
          class="first:bg-[#F5F9FC] bg-white p-8 text-center"
        >
          <p class="text-primary text-4xl mb-3">{{ rate.unit }}</p>
          <p class="font-semibold text-xl">{{ rate.title }}</p>
        </div>
      </div>
      <div
        class="xl:w-[1110px] 2xl:w-[1226px] mx-auto text-center mt-[122px]"
        data-aos="fade"
      >
        <h4
          class="font-bold text-2xl lg:text-3xl mb-6 relative center-title-tag"
        >
          Register for our Bootcamps and Outreaches
        </h4>
        <p class="lg:text-xl leading-[31px]">
          Arete has hosted several outreaches and boot camps. To enroll a ward
          or to know when Arete hosts its Bootcamps, please check out our
          <a href="#" class="font-bold text-primary">Events Page</a>.
          <br class="lg:hidden" /><br class="lg:hidden" />
          Arete also hosts outreaches to schools and communities to know more,
          <a href="#" class="font-bold text-primary">click here</a>.
        </p>
      </div>
      <div
        class="md:flex justify-center items-center space-y-6 md:space-y-0 md:space-x-12 mt-14"
      >
        <div
          v-for="objective in objectives"
          :key="objective"
          class="relative"
          data-aos="zoom-in"
        >
          <img
            :src="`/img/${objective.src}`"
            :alt="objective.title"
            class="md:h-[250px] w-full object-contain"
          />
          <div
            class="absolute bottom-0 left-0 w-full bg-[rgba(3,19,36,0.84)] flex justify-between items-center text-white p-3"
          >
            <p class="font-bold lg:text-lg">{{ objective.title }}</p>
            <a
              :href="objective.link"
              target="_blank"
              class="border-none outline-none bg-none underline-effect"
              >View Event</a
            >
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
      objectives: [
        {
          src: "obj-02.png",
          title: "Journey down the Street",
          link: "https://photos.app.goo.gl/rXvagd7m5Djw1uKL9",
        },
        {
          src: "obj-01.png",
          title: "Collaboration with LAHFA",
          link: "https://photos.app.goo.gl/FYk4S2z7Uh3wA7TB6",
        },
      ],
      rates: [
        { title: "Volunteers", unit: "100+" },
        { title: "States", unit: "2+" },
        { title: "Bootcamps", unit: "5+" },
        { title: "Outreach", unit: "3+" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
