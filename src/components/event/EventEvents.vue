<template>
  <div class="pb-[100px]">
    <div class="container">
      <div>
        <h2
          class="bg-[#F5F9FC] text-[#141414] font-semibold text-2xl md:text-3xl p-3 pr-[3rem] rounded-md inline-block mb-[37px]"
        >
          Upcoming Event
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/img/obj-02.png" alt="obj-02" />
          <div>
            <p class="text-primary font-semibold text-xl md:text-3xl mb-1.5">
              Summer Bootcamp
            </p>
            <p class="text-[rgba(20,20,20,0.63)] font-semibold text-xl mb-4">
              Theme: Love and light
            </p>
            <p class="text-[rgba(51,51,51,0.6)] text-lg">
              We believe that teaching and equipping children with programming
              and soft skills will improve their typing, critical thinking, and
              problem-solving abilities.
            </p>
            <hr class="my-4" />
            <p class="font-semibold text-lg mb-4">Registration Fee [Amount]</p>
            <p class="text-[rgba(20,20,20,0.63)] font-semibold text-xl">
              Registration starts on Date and ends on Date
            </p>
            <div
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
            </div>
          </div>
        </div>
      </div>
      <div class="mt-[100px]">
        <h3
          class="bg-[#F5F9FC] text-[#141414] font-semibold text-2xl md:text-3xl p-3 pr-[3rem] rounded-md inline-block mb-[37px]"
        >
          Past Events
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="event in events" :key="event">
            <img
              :src="event.picture"
              alt="event-01"
              class="h-[300px] w-full object-cover mb-5"
            />
            <p class="text-sm flex items-center gap-1.5 mb-1">
              <span class="mdi mdi-circle text-[8px] text-primary"></span>
              <span>{{ event.tag }}</span>
            </p>
            <p class="font-bold text-2xl uppercase mb-5">{{ event.event }}</p>
            <p class="font-semibold text-lg mb-5">
              {{ truncateText(event.summary) }}
            </p>
            <a href="#" class="text-primary font-semibold">Read More</a>
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
      events: [],
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

<style lang="scss" scoped></style>
