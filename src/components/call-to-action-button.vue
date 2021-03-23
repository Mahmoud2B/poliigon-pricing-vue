<template>
  <v-btn
    :class="filled ? 'filled cta-button' : 'cta-button'"
    color="primary"
    :block="block"
    x-large
    outlined
    rounded
    >{{ text }}</v-btn
  >
</template>

<script>
export default {
  name: "CallToActionButton",
  props: {
    text: String,
    filled: Boolean,
    block: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.cta-button {
  font-weight: 700;
  transition: 0.3s;
  padding: 0 40px !important;
  &:hover {
    transition: 0.3s;
    color: white !important;
    background-color: $primary;
  }
  &.filled {
    background-color: $primary;
    color: white !important;
  }
}
</style>