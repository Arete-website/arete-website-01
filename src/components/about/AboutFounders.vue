<template>
  <div class="bg-[#031324] py-16 text-white">
    <div class="container">
      <div class="text-center md:text-left">
        <h3 class="text-xl lg:text-3xl font-bold mb-6">Meet The Founders</h3>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 md:gap-y-0 md:gap-x-10 mt-12 lg:text-lg"
        >
          <div
            data-aos="zoom-in"
            v-for="founder in founders"
            :key="founder"
            class="flex justify-between items-center space-y-3 flex-col text-center p-6"
          >
            <img
              :src="`/img/${founder.src}`"
              :alt="founder.name"
              class="rounded-full w-[200px] md:w-[250px]"
            />
            <h4 class="text-base font-bold mb-6">
              {{ founder.name }}
            </h4>
            <ul class="flex justify-center items-center space-x-2">
              <li v-for="social in founder.socials" :key="social">
                <a
                  :href="social.link"
                  target="_blank"
                  :class="social.icon"
                  class="text-lg bg-secondary rounded-md py-0.5 px-1.5 cursor-pointer border border-solid border-primary transition duration-500 ease-in-out hover:bg-primary hover:text-white hover:scale-90 text-primary bg-white mt-2"
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
      founders: [
        {
          name: "Mbaoma Chioma M.",
          src: "f-01.jpeg",
          socials: [
            {
              link: "https://twitter.com/mba_oma",
              icon: "mdi mdi-twitter",
            },
            {
              link: "https://www.linkedin.com/in/mbaoma-chioma-mary",
              icon: "mdi mdi-linkedin",
            },
          ],
        },
        {
          name: "Jegede Abisola C.",
          src: "f-02.jpeg",
          socials: [
            {
              link: "https://www.twitter.com/arby981",
              icon: "mdi mdi-twitter",
            },
            {
              link: "https://www.linkedin.com/in/abisola-jegede/",
              icon: "mdi mdi-linkedin",
            },
          ],
        },
        {
          name: "Ifihanagbara Oluseye",
          src: "f-03.JPG",
          socials: [
            {
              link: "https://twitter.com/ifihan_",
              icon: "mdi mdi-twitter",
            },
            {
              link: "https://www.linkedin.com/in/ifihan-olusheye",
              icon: "mdi mdi-linkedin",
            },
          ],
        },
        {
          name: "Maryann Onuhua C.",
          src: "f-04.jpeg",
          socials: [
            {
              link: "https://twitter.com/Maryanneonuoha",
              icon: "mdi mdi-twitter",
            },
            {
              link: "https://www.linkedin.com/in/maryann-onuoha-555210198",
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
