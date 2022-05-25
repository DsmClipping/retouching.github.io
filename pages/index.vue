<template>
  <main>
    <HeroBlock class="has-text-centered" color-class="is-dark">
      <div class="container">
        <div class="columns is-centered is-vcentered">
          <div class="column is-profile-header">
            <img alt="Profile Image" src="@/assets/images/profile.jpg">
          </div>
          <div class="column is-title">
            <h1>
              Sylvain - arch
            </h1>
            <h2>
              Full Stack Developer
            </h2>
          </div>
        </div>

        <b-button
          tag="a"
          class="about-button"
          icon-left="arrow-down"
          type="is-primary"
          outlined
          href="#about"
        >
          En savoir plus
        </b-button>
      </div>
    </HeroBlock>

    <section id="about" class="section">
      <div class="container">
        <h1 class="title">
          {{ $t('home.about.title') }}
        </h1>
        <h2 class="subtitle">
          {{ $t('home.about.subtitle') }}
        </h2>

        <div class="columns is-centered">
          <div v-for="(text, index) of $t('home.about.cards')" :key="text" class="column is-3">
            <div class="card">
              <img v-if="index === randomCardEgg" class="egg" src="@/assets/images/egg.png">
              <div class="card-content">
                <div class="content">
                  {{ text }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import HeroBlock from '../components/HeroBlock.vue';

export default {
  name: 'IndexPage',

  components: {
    HeroBlock,
  },

  data() {
    return {
      randomCardEgg: Math.floor(Math.random() * this.$t('home.about.cards').length),
    };
  },

  head() {
    return {
      title: this.$t('home.title'),
    };
  },
};
</script>

<style lang="scss">
  @import '@/assets/scss/main.scss';

  .card {
    height: 100%;
    display:flex;
    flex-direction: column;

    .egg {
      z-index: -1;
      position: absolute;
      bottom: 0;
      height: 100%;
      transition: 0.6s;
    }

    .card-content {
      z-index: 1;
      background-color: $white;
      margin-top: auto;
      margin-bottom: auto;
    }
  }

  .card:hover {
    .egg {
      transform: translateY(-100%);
    }
  }

  #about {
    text-align: center;

    h2.subtitle {
      color: $black-ter;
    }
  }

  .about-button {
    .icon {
      animation-name: slidedown;
      animation-duration: 0.6s;
      animation-direction: alternate;
      animation-iteration-count: infinite;
    }
  }

  .is-profile-header {
    text-align: right;

    @media screen and (max-width: $tablet) {
        text-align: center;
    }

    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      margin: 0 auto;
    }
  }

  .is-title {
    text-align: left;

    @media screen and (max-width: $tablet) {
        text-align: center;
    }

    h1 {
      @extend .title;
      color: $white;
    }

    h2 {
      @extend .subtitle;
      color: $white;
    }
  }

  @keyframes slidedown {
    0% {
      transform: translateY(-15%);
    }
    100% {
      transform: translateY(15%);
    }
  }
</style>
