<template>
  <the-header />
  <partner-main />
  <partner-content />
  <partner-contact />
  <the-footer />
</template>

<script>
import TheFooter from "../components/navbar/TheFooter.vue";
import TheHeader from "../components/navbar/TheHeader.vue";
import PartnerContact from "../components/patnership/PartnerContact.vue";
import PartnerMain from "../components/patnership/PartnerMain.vue";
import PartnerContent from "../components/patnership/PartnerContent.vue";
export default {
  components: {
    TheHeader,
    PartnerMain,
    TheFooter,
    PartnerContent,
    PartnerContact,
  },
};
</script>

<style lang="scss" scoped></style>
