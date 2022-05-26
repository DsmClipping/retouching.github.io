<template>
  <div>
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
          {{ $t('home.getMore') }}
        </b-button>

        <b-button
          id="download-cv"
          icon-left="download-outline"
          type="is-info"
          outlined
          @click="downloadCv"
        >
          {{ $t('home.getCV') }}
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
                  {{
                    text.replace(
                      ':age:',
                      new Date(
                        Date.now() - new Date('2001-08-01').getTime()
                      ).getFullYear() - new Date(0).getFullYear()
                    )
                  }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" class="section">
      <div class="container">
        <h1 class="title">
          {{ $t('home.skills.title') }}
        </h1>
        <h2 class="subtitle">
          {{ $t('home.skills.subtitle') }}
        </h2>

        <div class="tabs is-centered is-primary">
          <ul>
            <!--li class="is-active">
              <a id="all" @click="onSkillClick">Tous</a>
            </li-->
            <li class="is-active">
              <a id="langs" @click="onSkillClick">Langages</a>
            </li>
            <li>
              <a id="frameworks" @click="onSkillClick">Frameworks</a>
            </li>
            <li>
              <a id="techs" @click="onSkillClick">Technologies</a>
            </li>
            <li>
              <a id="softs" @click="onSkillClick">Logiciels</a>
            </li>
          </ul>
        </div>

        <div class="columns is-centered is-multiline">
          <div
            v-for="(skill) of skills"
            :key="skill.name"
            :data-skill-group="skill.group"
            class="column is-3"
          >
            <div class="card has-ribbon is-small">
              <div class="card-content">
                <div class="content">
                  <!--div class="ribbon is-small is-primary">
                    {{ $t(`home.skills.type.${skill.group}`) }}
                  </div-->
                  <img alt="skill" :src="skill.image">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */

import HeroBlock from '../components/HeroBlock.vue';

export default {
  name: 'IndexPage',

  components: {
    HeroBlock,
  },

  data() {
    return {
      currentWord: '',
      skills: [
        {
          image: require('~/assets/images/skills/html-css.webp'),
          group: 'langs',
        },
        {
          image: require('~/assets/images/skills/cpp.png'),
          group: 'langs',
        },
        {
          image: require('~/assets/images/skills/java.png'),
          group: 'langs',
        },
        {
          image: require('~/assets/images/skills/js.png'),
          group: 'langs',
        },
        {
          image: require('~/assets/images/skills/python.png'),
          group: 'langs',
        },
        {
          image: require('~/assets/images/skills/sql.png'),
          group: 'langs',
        },
        {
          image: require('~/assets/images/skills/php.png'),
          group: 'langs',
        },
        {
          image: require('~/assets/images/skills/vuejs.png'),
          group: 'frameworks',
        },
        {
          image: require('~/assets/images/skills/nuxtjs.png'),
          group: 'frameworks',
        },
        {
          image: require('~/assets/images/skills/qt.png'),
          group: 'frameworks',
        },
        {
          image: require('~/assets/images/skills/symfony.png'),
          group: 'frameworks',
        },
        {
          image: require('~/assets/images/skills/bulma.png'),
          group: 'frameworks',
        },
        {
          image: require('~/assets/images/skills/bootstrap.png'),
          group: 'frameworks',
        },
        {
          image: require('~/assets/images/skills/expressjs.png'),
          group: 'frameworks',
        },
        {
          image: require('~/assets/images/skills/flask.png'),
          group: 'frameworks',
        },
        {
          image: require('~/assets/images/skills/mysql.png'),
          group: 'techs',
        },
        {
          image: require('~/assets/images/skills/mariadb.png'),
          group: 'techs',
        },
        {
          image: require('~/assets/images/skills/postgres.png'),
          group: 'techs',
        },
        {
          image: require('~/assets/images/skills/mongodb.png'),
          group: 'techs',
        },
        {
          image: require('~/assets/images/skills/rethinkdb.png'),
          group: 'techs',
        },
        {
          image: require('~/assets/images/skills/redis.png'),
          group: 'techs',
        },
        {
          image: require('~/assets/images/skills/docker.webp'),
          group: 'techs',
        },
        {
          image: require('~/assets/images/skills/vscode.png'),
          group: 'softs',
        },
        {
          image: require('~/assets/images/skills/intellij.png'),
          group: 'softs',
        },
        {
          image: require('~/assets/images/skills/dbbrowser.png'),
          group: 'softs',
        },
        {
          image: require('~/assets/images/skills/dbeaver.png'),
          group: 'softs',
        },
        {
          image: require('~/assets/images/skills/git.png'),
          group: 'softs',
        },
      ],
    };
  },

  head() {
    return {
      title: this.$t('home.title'),
    };
  },

  mounted() {
    if (document) {
      this.skillShow('langs', false);
      document.addEventListener('scroll', this.onScroll);
      document.removeEventListener('keydown', this.onKeydown);
    }
  },

  destroyed() {
    if (document) {
      document.removeEventListener('scroll', this.onScroll);
      document.removeEventListener('keydown', this.onKeydown);
    }
  },

  methods: {
    skillShow(skillActiveId, scroll = true) {
      document.querySelectorAll('#skills .tabs ul li a').forEach((elem) => {
        if (elem.id === skillActiveId) {
          elem.parentNode.classList.add('is-active');
        } else {
          elem.parentNode.classList.remove('is-active');
        }
      });

      document.querySelectorAll('#skills .columns .column').forEach((elem) => {
        if (elem.dataset.skillGroup === skillActiveId || skillActiveId === 'all') {
          elem.classList.remove('is-hidden');
        } else {
          elem.classList.add('is-hidden');
        }
      });

      if (scroll) {
        document.querySelector('#skills').scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    },

    onSkillClick(event) {
      const currentTab = event.target;
      this.skillShow(currentTab.id);
    },

    downloadCv() {
      document.querySelector('#download-cv').blur();

      this.$buefy.toast.open({
        message: `
        <span class="icon is-small"><i class="mdi mdi-close"></i></span>
        <span>Mon CV n'est pas disponible pour le moment</span>
        `,
        type: 'is-danger',
      });
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

  #about, #skills {
    text-align: center;

    h2.subtitle {
      color: $black-ter;
    }
  }

  #skills {
    img {
      height: auto;
      width: 80px;
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
