<template>
  <v-col>
    <div :class="'pricing-card ' + card.featured">
      <div :class="'featured ' + card.featured">
        <p>{{ getCardFeaturedText(card.featured) }}</p>
      </div>
      <div :class="'content ' + card.featured">
        <h2>{{ card.title }}</h2>
        <p class="desc">{{ card.desc }}</p>
        <div class="credits-row d-flex align-center">
          <div class="credits pr-2">
            {{ card.credits }}
          </div>
          <div class="credits-unit">
            <div>Credits</div>
            <div>per month*</div>
          </div>
        </div>
        <p class="equivalent">
          {{ card.equivalent }}
        </p>
        <hr />
        <div class="price-row d-flex align-center">
          <div class="price pr-2">
            ${{ card.monthlyPrice }}
          </div>
          <div class="price-unit">
            <div>USD</div>
            <div>/month</div>
          </div>
        </div>
      </div>
    </div>
  </v-col>
</template>

<script>
export default {
  name: "PricingCard",
  props: {
    card: Object,
  },
  methods: {
    getCardFeaturedText(featured) {
      switch (featured) {
        case "current":
          return "CURRENT PLAN";
        case "popular":
          return "MOST POPULAR";
        case "none":
          return "_";
        default:
          return "_";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.pricing-card {
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 8px;
  &.popular {
    box-shadow: 0px 0px 20px #0000001a;
  }
  &.none {
    border: 1px solid $border;
  }
  .featured {
    font-size: 16px;
    text-align: center;
    min-height: 32px;
    line-height: 32px;
    &.current {
      background-color: fade_out($green_background, 0.58);
      border-radius: 8px 8px 0px 0px;
      border: 1px solid fade_out($green_background, 0.68);
      color: $green_text;
    }
    &.popular {
      background-color: fade_out($blue_background, 0.8);
      border-radius: 8px 8px 0px 0px;
      border: 1px solid fade_out($blue_background, 0.9);
      color: $primary;
    }
    &.none {
      opacity: 0;
    }
  }
  .content {
    border: 1px solid $light_border;
    border-radius: 0 0 8px 8px;
    padding: 10px 32px;
    &.current {
      border-left: 1px solid $border;
      border-right: 1px solid $border;
      border-bottom: 1px solid $border;
      border-top: none;
    }
    &.none {
      border-top: none;
    }
    h2 {
      font-size: 40px;
      font-weight: 400;
    }
    p.desc {
      font-size: 16px;
    }
    .credits-row {
      .credits {
        font-size: 70px;
      }
      .credits-unit{
          font-size: 18px;
      }
    }
    p.equivalent {
      font-size: 14px;
      color: $soft_text;
    }
    hr {
      opacity: 0.3;
      margin: 25px 0;
    }
    .price-row {
      .price {
        font-size: 50px;
      }
      .price-unit{
          font-size: 18px;
      }
    }
  }
}
</style>