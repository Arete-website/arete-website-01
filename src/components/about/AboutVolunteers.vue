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
              :src="volunteer.src"
              :alt="volunteer.name"
              class="bg-[#F5F9FC] rounded-md"
            />
            <h4 class="text-base font-bold mb-6">
              {{ volunteer.name }}
            </h4>
            <ul class="grid grid-cols-2 gap-x-2">
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
          name: "Mbaoma Chioma M.",
          src: "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png",
          socials: [
            {
              link: "https://twitter.com",
              icon: "mdi mdi-twitter",
            },
            {
              link: "https://linkedin.com",
              icon: "mdi mdi-linkedin",
            },
          ],
        },
        {
          name: "Jegede Abisola C.",
          src: "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png",
          socials: [
            {
              link: "https://twitter.com",
              icon: "mdi mdi-twitter",
            },
            {
              link: "https://linkedin.com",
              icon: "mdi mdi-linkedin",
            },
          ],
        },
        {
          name: "Ifihanagbara Oluseye",
          src: "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png",
          socials: [
            {
              link: "https://twitter.com",
              icon: "mdi mdi-twitter",
            },
            {
              link: "https://linkedin.com",
              icon: "mdi mdi-linkedin",
            },
          ],
        },
        {
          name: "Maryann Onuhua C.",
          src: "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png",
          socials: [
            {
              link: "https://twitter.com",
              icon: "mdi mdi-twitter",
            },
            {
              link: "https://linkedin.com",
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
