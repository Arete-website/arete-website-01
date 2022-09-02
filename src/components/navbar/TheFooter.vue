<template>
  <footer class="bg-[#031324] text-white py-16">
    <div class="container">
      <div class="flex justify-center items-center md:justify-start">
        <router-link :to="{ name: 'home' }" class="font-bold text-2xl mb-8"
          ><img src="/img/logo-.png" alt="logo" class="w-[120px]"
        /></router-link>
      </div>
      <div
        class="flex justify-between items-center md:items-start flex-col md:flex-row pt-8 text-center md:text-left md:text-sm lg:text-lg"
      >
        <div
          class="md:basis-[33.33%] flex justify-center flex-col items-center md:items-start mb-10 md:mb-0"
        >
          <p class="mb-3">
            Arete is a non-profit that equips children with digital and soft
            skills.
          </p>
          <p>
            “Alone we can do so little; together we can do so much.” - Helen
            Keller
          </p>
        </div>
        <ul
          class="mb-10 md:mb-0 md:basis-[33.33%] md:grid md:grid-cols-2 xl:grid-cols-3"
        >
          <li
            class="mb-4 capitalize"
            v-for="(link, index) in links"
            :key="index"
          >
            <router-link
              :to="{ name: link.route }"
              v-if="link.name !== 'contact'"
              >{{ link.name }}</router-link
            >
            <a :href="link.route" v-else>{{ link.name }}</a>
          </li>
        </ul>
        <ul>
          <li
            class="flex justify-center md:justify-start items-center space-x-2 md:basis-[33.33%] mb-4"
          >
            <a
              v-for="(social, index) in socials"
              :key="index"
              :href="social.link"
              target="_blank"
              :class="social.icon"
              class="text-lg bg-secondary rounded-md py-0.5 px-1.5 cursor-pointer border border-solid border-primary transition duration-500 ease-in-out hover:bg-primary hover:text-white hover:scale-90 text-primary bg-white"
            ></a>
          </li>
          <li class="mb-4">
            <a href="mailto:areteorg7@gmail.com">areteorg7@gmail.com</a>
          </li>
          <li class="mb-4">© {{ getYear }} All Rights Reserved.</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      links: [
        {
          name: "home",
          route: "home",
        },
        {
          name: "about",
          route: "about",
        },
        {
          name: "partnership",
          route: "partnership",
        },
        {
          name: "contact",
          route: "/partnership#contact",
        },
        {
          name: "events",
          route: "event",
        },
        {
          name: "beneficiaries",
          route: "beneficiaries",
        },
        // {
        //   name: "FAQ's",
        //   route: "#",
        // },
        // {
        //   name: "event",
        //   route: "https://photos.app.goo.gl/rXvagd7m5Djw1uKL9",
        // },
        // {
        //   name: "donate",
        //   route: "https://forms.gle/J7mqEfchsAA1eL3h6",
        // },
      ],
      socials: [
        {
          icon: "mdi mdi-facebook",
          link: "https://web.facebook.com/arete700",
        },
        {
          icon: "mdi mdi-twitter",
          link: "https://twitter.com/official_arete",
        },
        {
          icon: "mdi mdi-instagram",
          link: "https://instagram.com/official_arete",
        },
        {
          icon: "mdi mdi-linkedin",
          link: "https://www.linkedin.com/in/ar%C3%AAte/",
        },
      ],
    };
  },
  computed: {
    getYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped></style>
