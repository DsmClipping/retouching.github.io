<!-- eslint-disable max-len -->
<template>
  <section class="section has-text-centered is-dark">
    <div class="container">
      <p class="footer-text">
        {{ $t('footer.text') }}
      </p>
      <p>
        <a href="https://twitter.com/0x394" target="_blank" class="has-text-link">
          <b-icon
            icon="twitter"
          />
        </a>

        <a href="https://github.com/retouching" target="_blank" class="has-text-link">
          <b-icon
            icon="github"
          />
        </a>

        <a class="has-text-link" @click="copyToClipboard('arch#3724')">
          <b-icon
            icon="discord"
          />
        </a>

        <a class="has-text-link" href="mailto:sylvain.lefeuvre0@gmail.com">
          <b-icon
            icon="gmail"
          />
        </a>

        <a class="has-text-link" href="https://www.linkedin.com/in/sylvain-lfvr/">
          <b-icon
            icon="linkedin"
          />
        </a>

        <a class="has-text-link" href="https://anilist.co/user/arch/">
          <i class="icon">
            <svg viewBox="0 0 360 273" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path
                  id="svg_2"
                  fill="currentColor"
                  d="m245.921,203.272l0,-186.67c0,-10.698 -5.887,-16.602 -16.558,-16.602l-36.433,0c-10.672,0 -16.561,5.904 -16.561,16.602l0,88.651c0,2.497 23.996,14.089 24.623,16.541c18.282,71.61 3.972,128.92 -13.359,131.6c28.337,1.405 31.455,15.064 10.348,5.731c3.229,-38.209 15.828,-38.134 52.049,-1.406c0.31,0.317 7.427,15.282 7.87,15.282l85.545,0c10.672,0 16.558,-5.9 16.558,-16.6l0,-36.524c0,-10.698 -5.886,-16.602 -16.558,-16.602l-97.524,-0.003z"
                />
                <path
                  id="svg_3"
                  d="m96.681,0.18568l-95.681,273l74.338,0l16.192,-47.222l80.96,0l15.826,47.222l73.968,0l-95.314,-273l-70.289,0zm11.776,165.28l23.183,-75.629l25.393,75.629l-48.576,0z"
                  fill="currentColor"
                />
              </g>
            </svg>
          </i>
        </a>
      </p>
      <p
        class="spoiler"
        :class="{ 'is-active': spoilerActive }"
        @click="spoilerActive = !spoilerActive"
      >
        {{ $t('footer.egg') }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FooterBlock',

  data() {
    return {
      spoilerActive: false,
    };
  },

  methods: {
    async copyToClipboard(text) {
      let successful = false;

      if (navigator.clipboard) {
        successful = await navigator.clipboard.writeText(text)
          .catch(() => false).then(() => true);
      }

      if (!successful) {
        const textArea = document.createElement('textarea');
        textArea.value = text;

        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.position = 'fixed';

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          successful = document.execCommand('copy');
        } catch (e) {
          successful = false;
        }

        document.body.removeChild(textArea);
      }

      if (successful) {
        this.$buefy.toast.open({
          message: `${this.$t('footer.copied')} (${text})`,
          type: 'is-success',
        });
      } else {
        this.$buefy.toast.open({
          message: this.$t('footer.copyFailed'),
          type: 'is-danger',
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/main.scss';

  section.section {
    background-color: $black-ter !important;
    color: $light !important;
  }

  .footer-text {
    margin-bottom: 0.5rem;
  }

  p.spoiler, p.spoiler::selection, p.spoiler::-moz-selection {
    font-size: 0.4rem;
    background-color: $grey-darker !important;
    border-radius: 4px !important;
    color: transparent;
    transition: 0.2s;
    display: inline;
    padding: 0.1rem 0.25rem;
  }

  p.spoiler:hover {
    cursor: pointer;
  }

  p.spoiler.is-active, p.spoiler.is-active::selection, p.spoiler.is-active::-moz-selection {
    color: $grey-lighter !important;
    background-color: $black-bis !important;
    border-radius: 4px !important;
    padding: 0.1rem 0.25rem;
  }
</style>
