<template>
  <div class="cards-container">
    <AnualMonthlySwitch />
    <p class="annual-plans-off-percentage-text">
      Annual plans get 25% off, all credits up front and 24 month credit expiry.
    </p>
    <v-container class="mt-12">
      <v-row d-flex align-stretch>
        <PricingCard v-for="card in cards" v-bind:key="card.id" :card="card" />
      </v-row>
    </v-container>
    <div class="d-flex align-center justify-center comparison-scroll">
      <span class="comparison-scroll-click-area">
        <span class="mr-5 comparison-scroll-text">See detailed plan comparison</span>
        <v-icon color="primary">fas fa-chevron-down</v-icon>
      </span>
    </div>
  </div>
</template>
<script>
import AnualMonthlySwitch from "./anual_monthly_switch";
import PricingCard from "./pricing_card";
export default {
  name: "CardsContainer",
  components: {
    AnualMonthlySwitch,
    PricingCard,
  },
  data: () => {
    return {
      period: "monthly",
      cards: [
        {
          id: "1",
          title: "Hobby",
          featured: "current", //? "current,popular,blank"
          desc: "Individuals working on personal projects",
          credits: 120,
          equivalent: "*12 textures; or 6 models; or 15 brushes; or 12 HDRs",
          monthlyPrice: "13.50",
          yearlyPrice: "13.50",
          buttonType: "current", //? "current,getStarted,change"
          whatsIncludedText: "What's Included",
          included: [
            {
              id: "included 1",
              title: "1 User",
              desc: "bla bla bla",
            },
            {
              id: "included 2",
              title: "Non-Commercial Lisence",
              desc: "bla bla bla",
            },
            {
              id: "included 3",
              title: "Unlimited Re-Downloads",
              desc: "bla bla bla",
            },
          ],
        },
        {
          id: "2",
          title: "Professional",
          featured: "popular", //? "current,popular,blank"
          desc: "Individuals working commercially",
          credits: 300,
          equivalent: "*30 textures; or 15 models; or 37 brushes; or 30 HDRs",
          monthlyPrice: "27.00",
          yearlyPrice: "27.00",
          buttonType: "change", //? "current,getStarted,change"
          whatsIncludedText: "Everything in Hobby plus:",
          included: [
            {
              id: "included 1",
              title: "Commercial license",
              desc: "bla bla bla",
            },
          ],
        },
        {
          card: "3",
          title: "Team",
          featured: "none", //? "current,popular,none"
          desc: "Small teams working together",
          credits: 720,
          equivalent: "*72 textures; or 36 models; or 90 brushes; or 72 HDRs",
          monthlyPrice: "147.00",
          yearlyPrice: "147.00",
          buttonType: "change", //? "current,getStarted,change"
          whatsIncludedText: "Everything in Professional plus:",
          included: [
            {
              id: "included 1",
              title: "10 User",
              desc: "bla bla bla",
            },
            {
              id: "included 2",
              title: "Team commercial license",
              desc: "bla bla bla",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.cards-container {
  background-color: $grey_background;
  padding-top: 30px;
  .annual-plans-off-percentage-text {
    text-align: center;
    font-size: 18px;
    margin-top: 10px;
  }
  .comparison-scroll {
    text-align: center;
    height: 150px;
    .comparison-scroll-click-area{
      cursor: pointer;
    }
    .v-icon {
      -webkit-text-stroke-width: 1.4px;
      -webkit-text-stroke-color: $grey_background;
    }
    .comparison-scroll-text{
      font-size: 20px;
    }
  }
}
</style>