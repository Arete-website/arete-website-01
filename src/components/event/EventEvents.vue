<template>
  <div class="pb-[100px]">
    <div class="container">
      <div>
        <h2
          class="bg-[#F5F9FC] text-[#141414] font-semibold text-2xl md:text-3xl p-3 pr-[3rem] rounded-md inline-block mb-[37px]"
        >
          Ongoing Event
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 1xl:gap-[78px]">
          <img
            src="/img/next-event.png"
            alt="obj-02"
            class="lg:w-[500px] lg:h-[400px] w-full"
          />
          <div> 
            <p class="text-primary font-semibold text-xl md:text-3xl mb-1.5">
              October Outreach
            </p>
            <p
              class="text-[rgba(20,20,20,0.63)] font-semibold text-xl mb-4"
            ></p>
            <p class="text-[rgba(51,51,51,0.6)] text-lg"></p>
            <hr class="my-4" />
            <p class="font-semibold text-lg mb-4"></p>
            <p class="text-[rgba(20,20,20,0.63)] font-semibold text-xl">
              Partner: Journey Down The Street
            </p>
            <p
              class="text-[rgba(20,20,20,0.53)] font-semibold text-xl lg:text-3xl uppercase mt-8"
            >
              Watch this space
            </p> 
            <!-- <div
              class="flex flex-col justify-center md:justify-start md:flex-row gap-4 items-center mt-4"
            >
              <button
                class="bg-primary text-white rounded-md py-4 font-semibold btn w-full md:w-[200px]"
              >
                Apply here
              </button>
              <button
                class="bg-white text-primary rounded-md py-4 font-semibold btn border border-solid border-primary capitalize w-full md:w-[200px]"
              >
                Partner
              </button>
            </div> -->
          </div>
        </div>
      </div>
      <div class="mt-[100px]">
        <h3
          class="bg-[#F5F9FC] text-[#141414] font-semibold text-2xl md:text-3xl p-3 pr-[3rem] rounded-md inline-block mb-[37px]"
        >
          Past Events
        </h3>
        <div class="mt-6">
          <carousel
            :settings="settings"
            :breakpoints="breakpoints"
            :autoplay="3000"
            v-if="events.length"
          >
            <slide v-for="event in events" :key="event">
              <div class="text-left md:mx-4">
                <img
                  :src="event.picture"
                  alt="event-01"
                  class="h-[300px] w-full object-cover mb-5"
                />
                <p class="text-sm flex items-center gap-1.5 mb-1">
                  <span class="mdi mdi-circle text-[8px] text-primary"></span>
                  <span>{{ event.tag }}</span>
                </p>
                <p class="font-bold text-2xl uppercase mb-5">
                  {{ event.event }}
                </p>
                <p class="font-semibold text-lg mb-5">
                  {{ event.summary }}
                </p>
                <a
                  :href="event.more"
                  target="_blank"
                  class="text-primary font-semibold"
                  >Read More</a
                >
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
      events: [],
      settings: {
        itemsToShow: 1,
      },
      breakpoints: {
        700: {
          itemsToScroll: 2,
          itemsToShow: 2,
        },
        1200: {
          itemsToScroll: 3,
          itemsToShow: 3,
        },
      },
    };
  },
  methods: {
    async getEvents() {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}`);
        const data = await response.json();
        this.events = data.events;
      } catch (error) {
        console.error(error);
      }
    },
    truncateText(value) {
      return value.substring(0, 150) + "...";
    },
  },
  mounted() {
    this.getEvents();
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
