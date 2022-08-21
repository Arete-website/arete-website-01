<template>
  <the-header />
  <home-main />
  <home-who />
  <home-vision />
  <home-objective />
  <home-volunteer />
  <home-ebook />
  <home-subscribe />
  <the-footer />
</template>

<script>
import HomeEbook from "../components/home/HomeEbook.vue";
import HomeMain from "../components/home/HomeMain.vue";
import HomeObjective from "../components/home/HomeObjective.vue";
import HomeSubscribe from "../components/home/HomeSubscribe.vue";
import HomeVision from "../components/home/HomeVision.vue";
import HomeVolunteer from "../components/home/HomeVolunteer.vue";
import HomeWho from "../components/home/HomeWho.vue";
import TheFooter from "../components/navbar/TheFooter.vue";
import TheHeader from "../components/navbar/TheHeader.vue";
export default {
  components: {
    TheHeader,
    HomeMain,
    TheFooter,
    HomeWho,
    HomeVision,
    HomeObjective,
    HomeVolunteer,
    HomeEbook,
    HomeSubscribe,
  },
};
</script>

<style lang="scss" scoped></style>
