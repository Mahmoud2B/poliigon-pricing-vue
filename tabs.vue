<template>
  <v-tabs slider-size="3" height="70" centered>
    <v-tab
      :ripple=false
      class="pricing-tabs"
      v-for="tab in tabs"
      v-bind:key="tab.text"
      >{{ tab.text }}</v-tab
    >
  </v-tabs>
</template>
<script>
export default {
  name: "Tabs",
  props: {
    tabs: Array,
  },
};
</script>

<style lang="scss" scoped>
$tabs-item-padding: 100px;
.pricing-tabs {
  font-size: 20px;
}
</style>