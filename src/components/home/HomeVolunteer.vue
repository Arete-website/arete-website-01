<template>
  <side-slide src="illus-01" bg="bg-[#00366E]" alt="happy_img">
    <h5 class="text-xl lg:text-3xl xl:text-4xl font-semibold mb-6">
      Make a child happy
    </h5>
    <p class="lg:text-lg">
      Arete regularly organizes free boot camps to cater to underprivileged
      children and youths. With your donation, we can reach out to more
      communities.
    </p>
    <a
      href="https://forms.gle/J7mqEfchsAA1eL3h6"
      target="_blank"
      class="bg-white text-primary rounded-md py-4 mt-[36px] font-semibold btn md:px-0 w-[208px] inline-block text-center capitalize"
      >Make A Donation</a
    >
  </side-slide>
  <side-slide
    src="illus-02"
    bg="bg-[rgba(3,19,36,1)]"
    alt="volunteer_img"
    :reverse="true"
  >
    <h6 class="text-xl lg:text-3xl xl:text-4xl font-semibold mb-6">
      Volunteer with Arete
    </h6>
    <p class="lg:text-lg">
      “We make a living by what we get, but we make a life by what we give” -
      Winston Churchill
    </p>
    <p class="mt-6 lg:text-lg">
      Do you want to make an impact in your local community via tech? Are you
      driven toward education as a tool for self-development? If this is you,
      sign up to volunteer for our cause.
    </p>
    <a
      href="https://forms.gle/96yLtBpT6jh3ybp68"
      target="_blank"
      class="bg-white text-primary rounded-md py-4 mt-[36px] font-semibold btn md:px-0 w-[208px] inline-block text-center capitalize"
    >
      volunteer
    </a>
  </side-slide>
</template>

<script>
import SideSlide from "../reuseables/SideSlide.vue";

export default {
  components: { SideSlide },
};
</script>

<style lang="scss" scoped></style>
