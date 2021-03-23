<template>
  <div class="brands-container">
    <v-container>
      <p class="text-heading">
        Poliigon is trusted by forward thinking companies of all shapes and
        sizes.
      </p>
      <v-img contain src="@/assets/images/brands.png" />
    </v-container>
  </div>
</template>

<script>
export default {
  name: "BrandsContainer",
};
</script>

<style lang="scss" scoped>
.brands-container {
  background-color: $grey_background;
  text-align: center;
  padding: 100px 0;
  .text-heading{
      font-size: 20px;
      margin-bottom: 90px !important;
  }
}
</style>