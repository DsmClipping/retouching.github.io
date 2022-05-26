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
