<template>
  <header
    class="flex items-center bg-white fixed w-full h-20 top-0 left-0 z-50 shadow-sm"
  >
    <div class="container">
      <div class="flex justify-between items-center">
        <router-link :to="{ name: 'home' }"
          ><img src="/img/logo.png" alt="logo" class="w-[120px]"
        /></router-link>
        <nav
          class="fixed h-full w-full top-3 lg:top-0 -left-full mt-16 bg-white py-8 lg:relative lg:w-auto lg:left-0 lg:m-0 lg:p-0 lg:bg-inherit capitalize font-normal text-primary text-base"
          :class="{ open: show }"
        >
          <ul
            class="block text-center lg:flex lg:space-x-8 lg:m-0 lg:items-center"
          >
            <li
              class="mb-4 lg:m-0 mt-10 last:px-4 last:py-4 last:rounded-md last:bg-primary last:text-white last:font-semibold last:w-11/12 last:m-auto last:btn transition-all duration-500 ease-in-out hover:text-[#1d1d1d] lg:underline-effect last:hover:after:w-0 last:hover:text-white"
              v-for="(route, index) in routes"
              :key="index"
              :class="{
                'text-[#1d1d1d] lg:text-current lg:border-b-2 border-b-primary':
                  active === route.path,
              }"
            >
              <a :href="route.path">{{ route.name }}</a>
            </li>
          </ul>
        </nav>
        <div
          class="toggle lg:hidden transition-all duration-500"
          @click="toggleNav"
          :class="{ change: show }"
        >
          <div class="toggler"></div>
          <div class="toggler"></div>
          <div class="toggler"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  props: {
    active: {
      type: String,
    },
  },
  data() {
    return {
      routes: [
        {
          name: "volunteer",
          path: "/#volunteer",
        },
        {
          name: "beneficiaries",
          path: "https://forms.gle/qwMxqsF6sLfkmpz96",
        },
        {
          name: "partnership",
          path: "partnership",
        },
        {
          name: "about",
          path: "about",
        },
        {
          name: "make a donation",
          path: "https://forms.gle/J7mqEfchsAA1eL3h6",
        },
      ],
      show: false,
    };
  },
  methods: {
    toggleNav() {
      this.show = !this.show;
    },
  },
  mounted() {
    // Closes navbar on route change
    this.$router.beforeEach(() => {
      this.show = false;
    });
  },
};
</script>

<style lang="scss" scoped></style>
