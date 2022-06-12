<template>
  <div class="py-16">
    <div class="container">
      <div class="text-center md:text-left">
        <h2 class="text-xl lg:text-3xl font-bold mb-6">Partner with Arete</h2>
        <p class="lg:text-lg">
          "Alone we can do so little. Together we can do so much." - Helen
          Keller.
          <br />
          <br />
          Arete seeks to partner with Non-Governmental Organizations, corporate
          organizations, and individuals to effect a change in the lives of
          underprivileged children and young people.
          <br />
          <br />
          Partner with us today to use tech as a catalyst for improvement in
          underprivileged youths and children's lives.
        </p>
      </div>
      <div
        class="flex justify-between items-center flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 mt-12"
      >
        <div
          data-aos="zoom-in"
          v-for="card in cards"
          :key="card"
          class="flex justify-between items-center space-y-3 flex-col text-center bg-[#F5F9FC] p-6 rounded-md text-[#1d1d1d]"
        >
          <img :src="`/img/${card.src}`" :alt="card.title" class="w-12 h-12" />
          <h3 class="text-lg lg:text-xl font-bold mb-6">
            {{ card.title }}
          </h3>
          <p>{{ card.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "Collaborate",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elitadipiscing elitadipiscing elitadipiscing elit.",
          src: "icon-01.png",
        },
        {
          title: "Partner",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elitadipiscing elitadipiscing elitadipiscing elit.",
          src: "icon-02.png",
        },
        {
          title: "Donate",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elitadipiscing elitadipiscing elitadipiscing elit.",
          src: "icon-03.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
