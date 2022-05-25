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
import NavigationBar from './NavigationBar.vue';

export default {
  name: 'HeroBlock',

  components: {
    NavigationBar,
  },

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
