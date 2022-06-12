<template>
  <the-header active="about" />
  <about-main />
  <about-content />
  <about-founders />
  <about-stand />
  <about-volunteers />
  <the-footer />
</template>

<script>
import AboutContent from "../components/about/AboutContent.vue";
import AboutFounders from "../components/about/AboutFounders.vue";
import AboutMain from "../components/about/AboutMain.vue";
import AboutStand from "../components/about/AboutStand.vue";
import AboutVolunteers from "../components/about/AboutVolunteers.vue";
import TheFooter from "../components/navbar/TheFooter.vue";
import TheHeader from "../components/navbar/TheHeader.vue";
export default {
  components: {
    TheHeader,
    AboutMain,
    AboutContent,
    TheFooter,
    AboutFounders,
    AboutVolunteers,
    AboutStand,
  },
};
</script>
,

<style lang="scss" scoped></style>
