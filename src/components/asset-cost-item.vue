<template>
  <v-col class="asset-cost-item">
    <v-img
      class="asset-cost-img"
      :src="require('@/assets/images/' + assetCost.img)"
      height="140"
      width="140"
      alt=""
    />
    <p class="asset-cost-name">
      {{ assetCost.name }}
    </p>
    <p class="asset-cost-cost">{{ assetCost.cost }} Credits</p>
  </v-col>
</template>

<script>
export default {
  name: "AssetCostItem",
  props: {
    assetCost: Object,
  },
};
</script>

<style lang="scss" scoped>
.asset-cost-item {
  text-align: center;
  .asset-cost-img {
    margin: auto;
  }
}
.asset-cost-name {
  font-size: 20px;
  margin-left: 20px !important;
}
.asset-cost-cost {
  font-size: 18px;
  margin-left: 20px !important;
}
</style>