<template>
  <the-header active="partnership" />
  <partner-main />
  <partner-content />
  <partner-bursary />
  <partner-contact />
  <the-footer />
</template>

<script>
import TheFooter from "../components/navbar/TheFooter.vue";
import TheHeader from "../components/navbar/TheHeader.vue";
import PartnerContact from "../components/patnership/PartnerContact.vue";
import PartnerMain from "../components/patnership/PartnerMain.vue";
import PartnerBursary from "../components/patnership/PartnerBursary.vue";
import PartnerContent from "../components/patnership/PartnerContent.vue";
export default {
  components: {
    TheHeader,
    PartnerMain,
    TheFooter,
    PartnerContent,
    PartnerBursary,
    PartnerContact,
  },
};
</script>

<style lang="scss" scoped></style>
