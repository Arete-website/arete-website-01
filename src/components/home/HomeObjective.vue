<template>
  <div class="py-16 text-[#0A1F35]">
    <div class="container">
      <div class="xl:w-[950px] m-auto text-center" data-aos="fade">
        <h3 class="font-bold text-xl lg:text-3xl mb-6">Our Objectives</h3>
        <p class="lg:text-lg">
          We believe that teaching and equipping children with programming and
          soft skills will improve their typing, critical thinking, and
          problem-solving abilities and also bridge the technological gap
          between our society and the global community and also help them solve
          the problems in the society in the long run.
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
            <button class="border-none outline-none bg-none">View Event</button>
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
          src: "obj-01.png",
          title: "Journey down the Street",
        },
        {
          src: "obj-02.png",
          title: "July Bootcamp",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
