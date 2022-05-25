<template>
  <section class="hero" :class="[colorClass, sizeClass]">
    <div class="hero-head">
      <NavigationBar />
    </div>
    <div class="hero-body">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroBlock',

  props: {
    colorClass: {
      type: String,
      default: 'is-dark',
    },
    sizeClass: {
      type: String,
      default: 'is-fullheight',
    },
  },
};
</script>
