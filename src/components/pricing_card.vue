<template>
  <v-col>
    <div :class="'pricing-card ' + card.featured">
      <div :class="'featured ' + card.featured">
        <p>{{ getCardFeaturedText(card.featured) }}</p>
      </div>
      <div :class="'pb-12 content ' + card.featured">
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
          <div class="price pr-2">${{ card.monthlyPrice }}</div>
          <div class="price-unit">
            <div>USD</div>
            <div>/month</div>
          </div>
        </div>
        <div class="button-row">
          <div
            class="button d-flex align-center justify-center"
            v-if="card.featured == 'current'"
          >
            <p class="your-current-plan">YOUR CURRENT PLAN</p>
          </div>
          <div class="button" v-else>
            <CallToActionButton :block="true" text="CHANGE PLAN" />
          </div>
        </div>
        <div class="whats-included-text-row">
          {{ card.whatsIncludedText }}
        </div>
        <div class="whats-included pt-3">
          <div
            v-for="whatsIncluded in card.included"
            v-bind:key="whatsIncluded.id"
            class="whats-included-item"
          >
            <v-icon color="primary" class="pr-3"> fa-check </v-icon>
            <span class="pr-2">{{ whatsIncluded.title }}</span>
            <v-icon class="pr-3"> far fa-question-circle </v-icon>
          </div>
        </div>
      </div>
    </div>
  </v-col>
</template>

<script>
import CallToActionButton from "./call-to-action-button";
export default {
  name: "PricingCard",
  props: {
    card: Object,
  },
  components: {
    CallToActionButton,
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
  height: 100%;
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
      height: 100%;
    }
    &.popular {
      height: 100%;
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
      .credits-unit {
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
      .price-unit {
        font-size: 18px;
      }
    }
    .button-row {
      text-align: center;
      padding: 23px 0;
      .button {
        min-height: 50px;
        p {
          font-weight: 700;
          color: $soft_text;
        }
        .your-current-plan {
          padding: 0;
        }
      }
    }
    .whats-included-text-row {
      font-size: 18px;
    }
    .whats-included-item {
      padding: 3px 0;
      .v-icon {
        &.fa-check {
          font-size: 16px;
          -webkit-text-stroke-width: 1.5px;
          -webkit-text-stroke-color: white;
        }
        &.fa-question-circle {
          font-size: 14px;
          -webkit-text-stroke-width: 0.2px;
          -webkit-text-stroke-color: white;
        }
      }
    }
  }
}
</style>