<template>
  <v-container class="plan-comparison-table">
    <v-row class="head-row">
      <v-col></v-col>
      <v-col class="head-content" v-for="title in titles" v-bind:key="title.id">
        <div class="head-title">{{ title.content }}</div>
        <CallToActionButton filled text="GET STARTED" />
      </v-col>
    </v-row>
    <v-row
      v-for="(listValue, propertyName, index) in plans"
      v-bind:key="propertyName"
      :class="'table-row' + (index % 2 != 0 ? ' filled' : '')"
    >
      <v-col class="body-col-leading">{{ listValue.name }}</v-col>
      <v-col
        class="body-col-content"
        v-for="value in listValue.content"
        v-bind:key="value.id"
      >
        <span v-if="listValue.list">
          <pre> {{ value.content }}</pre>
        </span>
        <span v-else-if="listValue.boolean">
          <span v-if="value.content">
              <v-icon>fa fa-check</v-icon>
          </span>
          <span v-else>
              <span class="dot"></span>
          </span>
        </span>
        <span v-else>
          {{ value.content }}
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CallToActionButton from "./call-to-action-button";
export default {
  name: "PlanComparionTable",
  components: {
    CallToActionButton,
  },
  data: () => {
    return {
      titles: [
        { id: "1", content: "Hobby" },
        { id: "2", content: "Pro" },
        { id: "3", content: "Team" },
      ],
      plans: {
        pricePerMonth: {
          name: "Price per month",
          content: [
            { id: "1", content: "$13.50" },
            { id: "2", content: "$27.00" },
            { id: "3", content: "$147.00" },
          ],
        },
        totalPricePerYear: {
          name: "Total price per year",
          content: [
            { id: "1", content: "$162.00" },
            { id: "2", content: "$162.00" },
            { id: "3", content: "$162.00" },
          ],
        },
        creditPerMonth: {
          name: "Credit per month",
          content: [
            { id: "1", content: "120" },
            { id: "2", content: "300" },
            { id: "3", content: "720" },
          ],
        },
        equivalentTo: {
          name: "Equivalent to",
          list: true,
          content: [
            {
              id: "1",
              content: `12 textures; or
            6 models; or
            15 brushes; or
            12 HDRs`,
            },
            {
              id: "2",
              content: `12 textures; or
            6 models; or
            15 brushes; or
            12 HDRs`,
            },
            {
              id: "3",
              content: `12 textures; or
            6 models; or
            15 brushes; or
            12 HDRs`,
            },
          ],
        },
        creditExpiry: {
          name: "Credit expiry",
          content: [
            { id: "1", content: "24 months" },
            { id: "2", content: "24 months" },
            { id: "3", content: "24 months" },
          ],
        },
        users: {
          name: "Users",
          content: [
            { id: "1", content: "1" },
            { id: "2", content: "1" },
            { id: "3", content: "10" },
          ],
        },
        commercial: {
          name: "Commercial",
          boolean:true,
          content: [
            { id: "1", content: false },
            { id: "2", content: true },
            { id: "3", content: true },
          ],
        },
        freeAssets: {
          name: "80+ free assets",
          boolean:true,
          content: [
            { id: "1", content: true },
            { id: "2", content: true },
            { id: "3", content: true },
          ],
        },
        premiumAssets: {
          name: "Premium assets",
          boolean:true,
          content: [
            { id: "1", content: true },
            { id: "2", content: true },
            { id: "3", content: true },
          ],
        },
        licensing: {
          name: "licensing",
          content: [
            { id: "1", content: "Individual" },
            { id: "2", content: "Individual" },
            { id: "3", content: "Team" },
          ],
        },
        prioritySupport: {
          name: "Priority support",
          boolean:true,
          content: [
            { id: "1", content: false },
            { id: "2", content: false },
            { id: "3", content: false },
          ],
        },
        customBilling: {
          name: "Custom billing",
          boolean:true,
          content: [
            { id: "1", content: false },
            { id: "2", content: false },
            { id: "3", content: false },
          ],
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.plan-comparison-table {
  border: 1px solid $border;
  border-radius: 8px;
  margin-bottom: 200px;
  .head-row {
    border-bottom: 1px solid $border;
    .head-content {
      text-align: center;
      font-size: 40px;
      padding: 40px 0;
      .head-title {
        margin-bottom: 10px;
      }
    }
  }
  .table-row {
      padding: 10px 0;
    &.filled {
      background-color: $grey_background;
    }
    .body-col-leading {
      padding-left: 35px;
    }
    .body-col-content {
      text-align: center;
      pre{
          white-space: pre-line;
          font-family: proxima-nova, sans-serif;
      }
      .v-icon{
          color: $primary;
      }
      .dot{
          height: 10px;
          width: 10px;
          background-color: $soft_text;
          display: inline-block;
          border-radius: 50%;
      }
    }
  }
}
</style>