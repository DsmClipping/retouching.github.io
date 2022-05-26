<template>
  <div>
    <div class="monika" />
    <audio id="monika-music">
      <source src="@/assets/musics/sayo-nara.webm" type="video/webm">
    </audio>
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
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */

import fscreen from 'fscreen';

export default {
  name: 'DefaultLayout',

  data() {
    return {
      currentWord: '',
      monikaLock: false,
      monikaBgInterval: null,
      monikaBg: require('~/assets/images/monika.png'),
      monikaScareImg: require('~/assets/images/monika-scare.webp'),
    };
  },

  mounted() {
    if (window) {
      window.addEventListener('scroll', this.onScroll);
      window.addEventListener('keydown', this.onKeydown);

      if (fscreen.fullscreenEnabled) {
        fscreen.addEventListener('fullscreenchange', this.onFullscreenChange, false);
      }
    }
  },

  destroyed() {
    if (window) {
      window.removeEventListener('keydown', this.onKeydown);
      window.removeEventListener('scroll', this.onScroll);

      if (fscreen.fullscreenEnabled) {
        fscreen.removeEventListener('fullscreenchange', this.onFullscreenChange, false);
      }
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

    onFullscreenChange() {
      if (this.monikaLock && !fscreen.fullscreenElement) {
        this.monikaLock = false;

        if (this.monikaBgInterval) {
          clearInterval(this.monikaBgInterval);
          this.monikaBgInterval = null;
        }

        ['body', 'html'].forEach((itemName) => {
          document.querySelector(itemName).style = '';
        });

        const monikaBg = document.querySelector('.monika');
        const monikaMusic = document.querySelector('#monika-music');

        monikaBg.style = '';
        monikaMusic.pause();
      }
    },

    onKeydown(event) {
      const WORD_KEY = 'MONIKA'.toLowerCase();
      const pressedKey = event.key;

      if (/[a-zA-Z]/g.test(pressedKey)) {
        this.currentWord += pressedKey.toLowerCase();

        if (!WORD_KEY.includes(this.currentWord)) {
          this.currentWord = '';
        } else if (WORD_KEY === this.currentWord) {
          this.currentWord = '';
          this.monikaLock = true;

          const html = document.documentElement;

          if (html.requestFullscreen) {
            html.requestFullscreen();
          } else if (html.webkitRequestFullscreen) {
            html.webkitRequestFullscreen();
          } else if (html.msRequestFullscreen) {
            html.msRequestFullscreen();
          }

          const monikaBg = document.querySelector('.monika');
          const monikaMusic = document.querySelector('#monika-music');

          ['body', 'html'].forEach((itemName) => {
            document.querySelector(itemName).style.setProperty('overflow', 'hidden', 'important');
          });

          monikaBg.style.zIndex = '9999';

          monikaMusic.volume = 0.3;
          monikaMusic.currentTime = 0;
          monikaMusic.play();

          let opacity = 0;
          this.monikaBgInterval = setInterval(() => {
            opacity += 0.005;
            monikaBg.style.opacity = opacity;

            const popMonikaScare = Math.random() > 0.6;

            if (popMonikaScare) {
              monikaBg.style.backgroundImage = `url(${this.monikaScareImg})`;

              setTimeout(() => {
                monikaBg.style.backgroundImage = `url(${this.monikaBg})`;
              }, 100);
            }

            if (opacity >= 1) {
              clearInterval(this.monikaBgInterval);
              this.monikaBgInterval = null;
            }
          }, 200);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .monika {
    opacity: 0;
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('@/assets/images/monika.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

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
