<template>
  <v-container class="asset-cost-container">
    <TextHeading text="Credit cost per asset type" />
    <v-row class="asset-cost-row">
      <AssetCostItem
        v-for="assetCostItem in assetCostItems"
        v-bind:key="assetCostItem.id"
        :assetCost="assetCostItem"
      />
    </v-row>
    <v-row class="median-price d-flex align-center justify-center">
      <p>*Median price of asset.</p>
    </v-row>
  </v-container>
</template>

<script>
import TextHeading from "./text_heading";
import AssetCostItem from "./asset-cost-item";
export default {
  name: "AssetCostContainer",
  components: {
    TextHeading,
    AssetCostItem,
  },
  data: () => {
    return {
      assetCostItems: [
        {
          id: "1",
          img: "Textures.png",
          name: "Textures",
          cost: 10,
        },
        {
          id: "2",
          img: "Models.png",
          name: "Models",
          cost: 15,
        },
        {
          id: "3",
          img: "Brushes.png",
          name: "Brushes",
          cost: 8,
        },
        {
          id: "4",
          img: "HDRS.png",
          name: "HDRS",
          cost: 10,
        },
        {
          id: "5",
          img: "Substance.png",
          name: "Texture Generators",
          cost: 100,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.median-price{
  height: 200px;
  color: $soft-text;
  font-size: 14px;
}
</style>