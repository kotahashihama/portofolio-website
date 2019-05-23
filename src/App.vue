<template>
  <div id="app">
    <TheHeader/>
    <router-view/>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: {
    TheHeader
  }
};
</script>

<style lang="scss">
.navbar-toggler {
  &:focus {
    outline: none;
  }
}

.section {
  margin-top: 56px;
  padding: 5rem 1rem;

  &-title {
    font-size: 2.5rem;
  }
}
</style>
