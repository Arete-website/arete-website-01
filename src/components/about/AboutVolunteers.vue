<template>
  <div class="py-16">
    <div class="container">
      <div class="text-center md:text-left">
        <h3 class="text-xl lg:text-3xl font-bold mb-6">Our Volunteers</h3>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 md:gap-y-0 md:gap-x-10 mt-12 lg:text-lg"
        >
          <div
            data-aos="zoom-in"
            v-for="volunteer in volunteers"
            :key="volunteer"
            class="flex justify-between items-center space-y-3 flex-col text-center p-6 rounded-md"
          >
            <img
              :src="`/img/${volunteer.src}`"
              :alt="volunteer.name"
              class="rounded-full w-full md:w-[250px]"
            />
            <h4 class="text-base font-bold mb-6">
              {{ volunteer.name }}
            </h4>
            <ul class="flex justify-center items-center space-x-2">
              <li
                v-for="social in volunteer.socials"
                :key="social"
                class="bg-secondary rounded-md py-0.5 px-1.5 cursor-pointer border border-solid border-primary transition duration-500 ease-in-out hover:bg-primary hover:text-white hover:scale-90 bg-primary text-white mt-2"
              >
                <a
                  :href="social.link"
                  target="_blank"
                  :class="social.icon"
                  class="text-lg"
                ></a>
              </li>
            </ul>
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
      volunteers: [
        {
          name: "Zion Igwe",
          src: "avt-01.jpeg",
          socials: [
            {
              link: "https://twitter.com/IgweZion_",
              icon: "mdi mdi-twitter",
            },
            {
              link: "https://www.linkedin.com/in/zion-igwe-a1b759176",
              icon: "mdi mdi-linkedin",
            },
          ],
        },
        {
          name: "Abubakar Emmanuella Faridat",
          src: "avt-02.jpg",
          socials: [
            {
              link: "https://twitter.com/manuellabubakar",
              icon: "mdi mdi-twitter",
            },
            {
              link: "  https://www.linkedin.com/in/emmanuella-faridat-abubakar/",
              icon: "mdi mdi-linkedin",
            },
          ],
        },
        {
          name: "Emmanuel Ikpesu",
          src: "avt-03.jpg",
          socials: [
            {
              link: "  https://twitter.com/IkpesuE?t=xEQLowp7cMhmiBJ_DvPPdA&s=09",
              icon: "mdi mdi-twitter",
            },
          ],
        },
        {
          name: "Oche Joshua Onoda",
          src: "avt-04.jpg",
          socials: [
            {
              link: "https://twitter.com/qingmarcel?t=TQISEjnzqM755OoJoOd2Kw&s=09",
              icon: "mdi mdi-twitter",
            },
            {
              link: "https://www.linkedin.com/in/oche-onoda-b51735218",
              icon: "mdi mdi-linkedin",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
