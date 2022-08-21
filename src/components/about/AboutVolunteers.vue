<template>
  <div class="py-[100px]">
    <div class="container">
      <div class="text-center md:text-left">
        <h3
          class="text-primary font-bold text-xl mb-6 relative center-title-tag text-center"
          data-aos="fade-up"
        >
          Meet Our Amazing Volunteers
        </h3>
        <p class="lg:text-2xl xl:w-[900px] mx-auto text-center" data-aos="fade">
          At Arete, we understand and cherish all our volunteers. Joining our
          team will expose you to a community of like-minded individuals bonded
          by their love of technology.
        </p>
        <div class="mt-16">
          <carousel
            :settings="settings"
            :breakpoints="breakpoints"
            :autoplay="3000"
            v-if="volunteers.length"
          >
            <slide v-for="volunteer in volunteers" :key="volunteer">
              <div
                class="flex justify-center items-center text-center flex-col carousel__item"
              >
                <img
                  :src="`/img/${volunteer.src}`"
                  :alt="volunteer.name"
                  class="rounded-full w-[200px]"
                />
                <h4 class="text-base font-semibold my-6 text-primary">
                  {{ volunteer.name }}
                </h4>
                <ul class="flex justify-center items-center space-x-2">
                  <li v-for="social in volunteer.socials" :key="social">
                    <a
                      :href="social.link"
                      target="_blank"
                      :class="social.icon"
                      class="text-lg bg-secondary rounded-md py-0.5 px-1.5 cursor-pointer border border-solid border-primary transition duration-500 ease-in-out hover:bg-primary hover:text-white hover:scale-90 bg-primary text-white mt-2"
                    ></a>
                  </li>
                </ul>
              </div>
            </slide>
            <template #addons>
              <navigation />
            </template>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
export default {
  components: { Carousel, Slide, Navigation },
  data() {
    return {
      settings: {
        itemsToShow: 1,
        // snapAlign: "center",
      },
      breakpoints: {
        700: {
          itemsToScroll: 3,
          itemsToShow: 3,
        },
        1200: {
          itemsToScroll: 4,
          itemsToShow: 4,
        },
      },
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

<style scoped>
.carousel {
  padding-top: 61px;
}
:deep(.carousel__prev),
:deep(.carousel__next) {
  position: absolute;
  top: 0;
  box-sizing: content-box;
  background: #00366e;
  border-radius: 5px;
}

:deep(.carousel__prev) {
  left: 43%;
}

:deep(.carousel__next) {
  right: 43%;
}

:deep(.carousel__prev--in-active),
:deep(.carousel__next--in-active) {
  background: #a39c9c;
}

@media screen and (min-width: 700px) {
  :deep(.carousel__prev) {
    left: 48%;
  }

  :deep(.carousel__next) {
    right: 48%;
  }
}
</style>
