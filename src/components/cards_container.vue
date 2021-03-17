<template>
  <div class="cards-container">
    <AnualMonthlySwitch />
    <p class="annual-plans-off-percentage-text">
      Annual plans get 25% off, all credits up front and 24 month credit expiry.
    </p>
    <v-container class="mt-12">
      <v-row>
        <PricingCard v-for="card in cards" v-bind:key="card.id" :card="card" />
      </v-row>
    </v-container>
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
          rank: 0, //? hobby->professional->team ((->>>>)) 0->1->2->...
          included: [
            {
              title: "1 User",
              desc: "bla bla bla",
            },
            {
              title: "Non-Commercial Lisence",
              desc: "bla bla bla",
            },
            {
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
          rank: 1, //? hobby->professional->team ((->>>>)) 0->1->2->...
          included: [
            {
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
          rank: 2, //? hobby->professional->team ((->>>>)) 0->1->2->...
          included: [
            {
              title: "10 User",
              desc: "bla bla bla",
            },
            {
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
  // TODO remove this!
  min-height: 1000px;
  .annual-plans-off-percentage-text {
    text-align: center;
    font-size: 18px;
    margin-top: 10px;
  }
}
</style>