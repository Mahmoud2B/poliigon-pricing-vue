<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest</span>
        <v-icon>fas fa-external-link-alt</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <TextHeading text="Make better renders, faster" />
      <Tabs :tabs="tabs" />
      <CardsContainer />
      <AssetCostContainer />
      <hr class="separator" />
      <TextHeading text="Works in any 3D Software" />
      <SoftwareContainer />
      <EnterpriseContainer />
      <BrandsContainer />
      <TextHeading text="Plan comparison" />
      <PlanComparisonContainer />
      <FAQContainer />
    </v-main>
  </v-app>
</template>

<script>
import TextHeading from "./components/text_heading";
import Tabs from "./components/tabs";
import CardsContainer from "./components/cards_container";
import AssetCostContainer from "./components/asset-cost-container";
import SoftwareContainer from "./components/software-container";
import EnterpriseContainer from "./components/enterprise-container";
import BrandsContainer from "./components/brands-container";
import PlanComparisonContainer from "./components/plan-comparison-container";
import FAQContainer from "./components/faq-container";

export default {
  name: "App",

  components: {
    TextHeading,
    Tabs,
    CardsContainer,
    AssetCostContainer,
    SoftwareContainer,
    EnterpriseContainer,
    BrandsContainer,
    PlanComparisonContainer,
    FAQContainer,
  },

  data: () => ({
    tabs: [
      {
        text: "Subscriptions",
      },
      {
        text: "Credit Packs",
      },
    ],
  }),
};
</script>
