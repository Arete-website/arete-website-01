<template>
  <div class="py-18">
    <div class="container xl:w-[1100px]">
      <div
        class="bg-[url('/img/bg-01.png')] bg-no-repeat bg-center bg-cover bg-[#031324] px-8 py-12 text-white rounded-md my-10"
        data-aos="fade"
      >
        <ul
          class="flex justify-center items-center space-x-8 font-semibold capitalize"
        >
          <li
            v-for="vision in visions"
            :key="vision"
            @click="currentTab = vision"
            class="cursor-pointer"
            :class="{ 'border-b-4 border-b-primary': currentTab === vision }"
          >
            {{ vision }}
          </li>
        </ul>
        <div class="text-center md:w-[530px] mx-auto mt-10">
          <component :is="currentTab" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mission from "./MissionTab.vue";
import vision from "./VisionTab.vue";
export default {
  components: {
    mission,
    vision,
  },
  data() {
    return {
      visions: ["vision", "mission"],
      currentTab: "vision",
    };
  },
};
</script>

<style lang="scss" scoped></style>
