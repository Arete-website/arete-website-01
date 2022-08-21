<template>
  <div
    class="flex flex-col md:flex-row text-white md:text-left"
    :class="[reverse ? 'flex-col-reverse md:flex-row-reverse' : '']"
  >
    <div class="relative other-bg basis-1/2 h-full">
      <img
        :src="`/img/${src}.svg`"
        :alt="alt"
        class="h-[400px] md:h-full w-full object-cover md:object-none"
      />
    </div>
    <div class="basis-1/2 py-16 md:py-8 flex flex-col" :class="bg">
      <div class="container lg:w-[440px] 2xl:w-[529px]">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reverse: {
      type: Boolean,
      default: false,
    },
    bg: {
      type: String,
    },
    src: {
      type: String,
    },
    alt: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
