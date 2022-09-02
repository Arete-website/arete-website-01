<template>
  <div class="py-[100px]">
    <div class="container">
      <div>
        <h2
          data-aos="fade-up"
          class="text-2xl lg:text-4xl font-bold mb-14 md:w-[575px] relative left-title-tag"
        ></h2>
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-10 mt-12 lg:text-lg text-[rgba(20,20,20,0.62)]"
        >
          <div v-for="content in contents" :key="content" data-aos="zoom-in">
            <p class="font-bold mb-[18px] text-2xl">{{ content.title }}</p>
            <p class="text-[#141414]">
              {{ content.content }}
            </p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[150px]">
        <div
          data-aos="zoom-in"
          v-for="card in cards"
          :key="card"
          class="flex justify-between items-center space-y-3 flex-col text-center even:bg-[#F5F9FC] px-6 py-16 rounded-md text-[#1d1d1d]"
        >
          <img :src="`/img/${card.src}`" :alt="card.title" class="w-12 h-12" />
          <h3 class="text-lg lg:text-2xl font-bold mt-3.5 mb-2.5">
            {{ card.title }}
          </h3>
          <p>{{ card.content }}</p>
          <a
            :href="`${card.link}`"
            target="_blank"
            class="font-semibold text-primary mt-[41px]"
            >View More</a
          >
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
          title: "Partnership with organizations",
          content:
            "Arete partners with non-profits, corporate bodies and indivduals to support her mission. Arete has partnered with various non-profit organizations and schools to offer digital and soft skills training.",
        },
        {
          title: "Become an Arete Sponsor",
          content:
            "For Arete, your support goes a long way. We look forward to working with and receiving support from organizations, companies, and individuals to provide quality services for our young learners and volunteers.",
        },
        {
          title: "A common vision",
          content:
            "Among the Arete team, giving back to society is our shared vision. We look forward to working with like-minded individuals to create an impact in the lives of young people through technology.",
        },
        {
          title: "Lend your skills",
          content:
            "Impact thousands of learners by lending your skills to the community and offering to become an Arete volunteer. Volunteers have access to free training sessions on every skill training Arete offers.",
        },
      ],
      cards: [
        {
          title: "Volunteer",
          content:
            "Partner with Arete by Volunteering to be a part of our community and lending your talents to society.",
          src: "icon-01.svg",
          link: "https://forms.gle/TChp9htYvJfK4Xpq7",
        },
        {
          title: "Sponsorship",
          content:
            "Sponsor arete by partering with us and helping to reach out to a larger audience via our outreaches and bootcamps.",
          src: "icon-02.svg",
          link: "https://forms.gle/a3Dvi1JfjXh1jLsH7",
        },
        {
          title: "Donation",
          content:
            "You can make make donations to futher a childs soft skills journey by donating to Arete or sponsor a youth who is in need via Arete Busaries.",
          src: "icon-03.svg",
          link: "https://forms.gle/a3Dvi1JfjXh1jLsH7",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
