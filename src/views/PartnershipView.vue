<template>
  <the-header />
  <partner-main />
  <the-footer />
</template>

<script>
import TheFooter from "../components/navbar/TheFooter.vue";
import TheHeader from "../components/navbar/TheHeader.vue";
import PartnerMain from "../components/patnership/PartnerMain.vue";
export default {
  components: { TheHeader, PartnerMain, TheFooter },
};
</script>

<style lang="scss" scoped></style>
