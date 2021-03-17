<template>
  <div class="anual-monthly-switch-container">
    <v-container>
      <v-row align="center" align-content="center" justify="center">
        <v-col align-self="center">
          <span>Annual</span>
        </v-col>
        <v-col align-self="center">
          <v-switch
            light
            inset
            flat
            :ripple="false"
            class="anual-monthly-switch-input"
            color="primary"
          />
        </v-col>
        <v-col align-self="center">
          <span>Monthly</span>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "AnualMonthlySwitch",
};
</script>

<style lang="scss" scroped>
.anual-monthly-switch-container {
  padding-top: 30px;
  .col {
    flex-grow: 0;
    padding: 0 10px;
    font-size: 20px;
    .v-input--switch__track.theme--light {
      color: $primary;
      opacity: 1;
    }
    .v-input--switch__thumb.theme--light.primary--text {
      color: white !important;
    }
    .v-input--selection-controls__input{
      margin-right: -4px;
    }
  }
}
</style>