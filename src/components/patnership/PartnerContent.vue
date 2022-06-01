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
          class="flex justify-between items-center space-y-3 flex-col text-center bg-[#F5F9FC] p-6 rounded-md"
        >
          <img :src="`/img/${card.src}`" :alt="card.title" class="w-12 h-12" />
          <h3 class="text-lg lg:text-xl font-bold mb-6">
            {{ card.title }}
          </h3>
          <p>{{ card.content }}</p>
        </div>
      </div>
      <div
        class="flex justify-between items-center flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8 mt-12"
      >
        <div class="md:basis-1/2">
          <h4 class="text-lg lg:text-xl font-bold mb-6">Arete Busary</h4>
          <p class="pb-3">
            Arete's bursary is a subset of Arete. It is set up to sponsor young
            people's journey in technological fields by:
          </p>
          <ul class="list-disc list-inside">
            <li class="pb-3">Purchasing internet subscriptions for techies</li>
            <li class="pb-3">Purchasing courses for techies</li>
          </ul>
          <p>The bursary runs on goodwill donations from sponsors.</p>
          <div
            class="flex justify-between items-center flex-col space-y-2 xl:flex-row xl:space-y-0 xl:space-x-2 my-6"
          >
            <button
              class="bg-primary text-white rounded-md px-12 py-4 font-semibold btn w-full lg:text-sm mb-0 basis-1/2"
            >
              Make a donation</button
            ><button
              class="bg-primary text-white rounded-md px-12 py-4 font-semibold btn w-full lg:text-sm basis-1/2"
            >
              Request sponsorship
            </button>
          </div>
        </div>
        <div class="md:basis-1/2">
          <img src="/img/abt-01.png" alt="about" class="lg:w-[500px]" />
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
