<template>
  <the-header active="event" />
  <event-main />
  <event-content />
  <event-events />
  <the-footer />
</template>

<script>
import EventContent from "../components/event/EventContent.vue";
import EventEvents from "../components/event/EventEvents.vue";
import EventMain from "../components/event/EventMain.vue";
import TheFooter from "../components/navbar/TheFooter.vue";
import TheHeader from "../components/navbar/TheHeader.vue";
export default {
  components: {
    TheHeader,
    EventMain,
    EventEvents,
    EventContent,
    TheFooter,
  },
};
</script>
,

<style lang="scss" scoped></style>
