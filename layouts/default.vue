<template>
  <div>
    <Nuxt />
    <b-button
      class="go-top"
      type="is-dark"
      icon-left="arrow-up"
      @click="goTop"
    />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',

  mounted() {
    if (document) {
      document.addEventListener('scroll', this.onScroll);
    }
  },

  destroyed() {
    if (document) {
      document.removeEventListener('scroll', this.onScroll);
    }
  },

  methods: {
    onScroll() {
      const goTop = document.querySelector('.go-top');

      if (window.scrollY > 0) {
        goTop.classList.add('is-active');
      } else {
        goTop.classList.remove('is-active');
      }
    },

    goTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>

<style lang="scss" scoped>
.go-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  visibility: hidden;
}

.go-top.is-active {
  opacity: 1;
  visibility: visible;
}
</style>
