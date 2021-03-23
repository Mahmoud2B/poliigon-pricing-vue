<template>
  <v-container class="faq-container">
    <h1>Frequently Asked Questions</h1>
    <v-expansion-panels :value="0" flat>
      <v-expansion-panel
        v-for="(faq, i) in faqs"
        :key="i"
        :class="(i == 0 ? 'first' : '') + (i == faqs.length - 1 ? 'last' : '')"
      >
        <v-expansion-panel-header>
          {{ faq.title }}
        </v-expansion-panel-header>
        <v-expansion-panel-content class="faq-content">
          {{ faq.text }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  name: "FAQContainer",
  data: () => {
    return {
      faqs: [
        {
          title:
            "Can I use the textures for commercial purposes, such as in a render, animation or printed media such as magazines or t-shirts?",
          text:
            "Yes, provided the textures are purchased while on the Freelancer plan, Production plan or with On-demand credits from a credit pack.",
        },
        {
          title: "What are the credits for?",
          text:
            "Yes, provided the textures are purchased while on the Freelancer plan, Production plan or with On-demand credits from a credit pack.",
        },
        {
          title:
            "Do the credits roll-over if I have a subscription? Do they expire?",
          text:
            "Yes, provided the textures are purchased while on the Freelancer plan, Production plan or with On-demand credits from a credit pack.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.faq-container {
  max-width: 890px;
  h1 {
    font-size: 40px;
    margin-bottom: 30px !important;
  }
  .v-expansion-panel {
    border-top: 1px solid $border;
    border-bottom: 1px solid $border;
    padding: 20px 0;
    &.first {
      border-bottom: none;
    }
    &.last {
      border-top: none;
    }
  }
  .v-expansion-panel-header {
    font-size: 20px;
    font-weight: 700;
    padding-left: 0;
    padding-right: 100px;
  }
  .faq-content {
    font-size: 18px;
    margin: 0 -24px;
    padding-right: 100px;
  }
}
</style>