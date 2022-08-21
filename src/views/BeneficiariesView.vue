<template>
  <the-header active="beneficiaries" />
  <beneficiaries-main />
  <beneficiaries-content />
  <beneficiaries-beneficiary />
  <the-footer />
</template>

<script>
import BeneficiariesContent from "../components/beneficiaries/BeneficiariesContent.vue";
import BeneficiariesBeneficiary from "../components/beneficiaries/BeneficiariesBeneficiary.vue";
import BeneficiariesMain from "../components/beneficiaries/BeneficiariesMain.vue";
import TheFooter from "../components/navbar/TheFooter.vue";
import TheHeader from "../components/navbar/TheHeader.vue";
export default {
  components: {
    TheHeader,
    BeneficiariesMain,
    BeneficiariesBeneficiary,
    BeneficiariesContent,
    TheFooter,
  },
};
</script>
,

<style lang="scss" scoped></style>
