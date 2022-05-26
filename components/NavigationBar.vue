<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item">
          <img class="navbar-icon" src="@/assets/images/profile.jpg">
          <span>Sylvain | Portfolio</span>
        </nuxt-link>
        <span
          class="navbar-burger"
          :aria-expanded="isActive"
          :class="{ 'is-active': isActive }"
          role="button"
          aria-label="menu"
          data-target="collapse"
          @click="isActive = !isActive"
        >
          <span />
          <span />
          <span />
        </span>
      </div>
      <div id="collapse" :class="{ 'is-active': isActive }" class="navbar-menu">
        <div class="navbar-end">
          <nuxt-link to="/" class="navbar-item">
            <b-icon icon="home" />
            <span>Accueil</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      showNavbar: true,
    };
  },

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
      const navbar = document.querySelector('.navbar');

      if (window.scrollY > 0) {
        navbar.classList.add('is-fixed-top');
      } else {
        navbar.classList.remove('is-fixed-top');
      }
    },
  },
};
</script>

<style scoped lang="scss">
  @import '@/assets/scss/main.scss';

  .navbar {
    background-color: $black-ter !important;

    .navbar-burger {
      color: #fff;
    }

    .navbar-menu {
      background-color: $black-ter !important;

      .navbar-item .icon {
        margin-right: 0.5rem;
      }
    }

    .navbar-brand .navbar-item {
      background-color: $black-ter !important;

      img.navbar-icon {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 0.5rem;
      }
    }
  }
</style>
