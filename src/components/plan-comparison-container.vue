<template>
  <div class="plan-comparison-container">
    <AnualMonthlySwitch />
    <p class="annual-plans-off-percentage-text">
      Annual plans get 25% off, all credits up front and 24 month credit expiry.
    </p>
    <PlanComparionTable/>
  </div>
</template>

<script>
import AnualMonthlySwitch from "./anual_monthly_switch";
import PlanComparionTable from "./plan-comparison-table";
export default {
  name: "PlanComparisonContainer",
  components: {
    AnualMonthlySwitch,
    PlanComparionTable,
  },
};
</script>

<style lang="scss" scoped>
.annual-plans-off-percentage-text {
  text-align: center;
  font-size: 18px;
  margin-top: 10px !important;
  margin-bottom: 70px !important;
}
</style>