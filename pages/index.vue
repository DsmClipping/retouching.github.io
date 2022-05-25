<template>
  <HeroBlock color-class="is-primary">
    <div class="container">
      <h1 class="title">
        Sylvain
      </h1>
    </div>
  </HeroBlock>
</template>

<script>
export default {
  name: 'IndexPage',

  head() {
    return {
      title: this.$t('home.title'),
    };
  },
};
</script>
