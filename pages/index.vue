<template>
  <main>
    <div class="monika" />
    <audio id="monika-music">
      <source src="@/assets/musics/monika-theme.webm" type="video/webm">
    </audio>

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

        <b-button
          class="about-button"
          icon-left="arrow-up"
          type="is-danger"
          outlined
          @click="rickroll"
        >
          En savoir moins
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
              <img v-if="index === 2" class="egg" src="@/assets/images/egg.png">
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
      currentWord: '',
    };
  },

  head() {
    return {
      title: this.$t('home.title'),
    };
  },

  mounted() {
    if (document) document.addEventListener('keydown', this.onKeydown);
  },

  destroyed() {
    if (document) document.removeEventListener('keydown', this.onKeydown);
  },

  methods: {
    rickroll() {
      window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&autoplay=1&t=0';
    },

    onKeydown(event) {
      const WORD_KEY = 'MONIKA'.toLowerCase();
      const pressedKey = event.key;

      if (/[a-zA-Z]/g.test(pressedKey)) {
        this.currentWord += pressedKey.toLowerCase();

        if (!WORD_KEY.includes(this.currentWord)) {
          this.currentWord = '';
        } else if (WORD_KEY === this.currentWord) {
          document.removeEventListener('keydown', this.onKeydown);

          const monikaBg = document.querySelector('.monika');
          const monikaMusic = document.querySelector('#monika-music');

          monikaBg.style.zIndex = '9999';

          monikaMusic.volume = 0.1;
          monikaMusic.currentTime = 0;
          monikaMusic.play();

          let opacity = 0;
          const opacityTimer = setInterval(() => {
            opacity += 0.005;
            monikaBg.style.opacity = opacity;

            if (opacity >= 1) clearInterval(opacityTimer);
          }, 200);
        }
      }
    },
  },
};
</script>

<style lang="scss">
  @import '@/assets/scss/main.scss';

  .monika {
    opacity: 0;
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('@/assets/images/monika.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

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
