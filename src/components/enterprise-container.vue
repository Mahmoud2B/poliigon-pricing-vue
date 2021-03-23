<template>
  <div class="enterprise-container">
    <div class="white-bg"></div>
    <div class="grey-bg"></div>
    <v-container>
      <v-row>
        <v-col class="d-flex align-stretch enterprise-col" cols="8">
          <v-row class="enterprise-col-inner-container">
            <v-col cols="7">
              <v-row>
                <v-col>
                  <p class="heading-text">Enterprise</p>
                  <p class="subheading-text">
                    For organizations with custom needs
                  </p>
                </v-col>
              </v-row>
              <v-row class="price-row">
                <div>
                  <p class="starting-from">Starting From</p>
                  <div class="d-flex align-center">
                    <div class="price pr-2">$1K</div>
                    <div class="price-unit">
                      <div>USD</div>
                      <div>/month</div>
                    </div>
                  </div>
                </div>
                <div
                  class="button-col flex-grow-1 d-flex align-center justify-center"
                >
                  <CallToActionButton :block="true" text="CONTACT US" filled />
                </div>
              </v-row>
            </v-col>
            <v-col class="d-flex align-center" cols="5">
              <div class="whats-included-container">
                <div
                  class="whats-included-item"
                  v-for="whatsIncluded in whatsIncludedList"
                  v-bind:key="whatsIncluded.id"
                >
                  <v-icon color="primary" class="pr-3"> fa-check </v-icon>
                  <span class="pr-2">{{ whatsIncluded.text }}</span>
                  <v-icon class="pr-3"> far fa-question-circle </v-icon>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col no-gutters class="flex-grow-1 enterprise-col free" cols="4">
          <div class="flex-grow-1 enterprise-col-inner-container">
            <p class="heading-text">Free</p>
            <p class="subheading-text">Not sure which plan is right?</p>
            <p class="content-text">
              Join Poliigon for free, get access to 80+ premium assets and
              upgrade at any time.
            </p>
            <CallToActionButton text="GET STARTED" class="mt-6" filled />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CallToActionButton from "./call-to-action-button";
export default {
  name: "EnterpriseContainer",
  components: {
    CallToActionButton,
  },
  data: () => {
    return {
      whatsIncludedList: [
        { id: "1", text: "Custom credits per month" },
        { id: "2", text: "Unlimited users" },
        { id: "3", text: "Custom licensing" },
        { id: "4", text: "Priority support" },
        { id: "5", text: "Custom billing" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.enterprise-container {
  margin-top: 100px;
  position: relative;
  * {
    z-index: 1;
  }
  .white-bg {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    height: 50%;
    width: 100%;
    background-color: white;
  }
  .grey-bg {
    position: absolute;
    z-index: 0;
    top: 50%;
    left: 0;
    height: 50%;
    width: 100%;
    background-color: $grey_background;
  }
  .enterprise-col {
    padding: 24px;
    .enterprise-col-inner-container {
      background-color: white;
      border: 1px solid $border;
      border-radius: 8px;
      padding: 16px;
      .heading-text {
        font-size: 40px;
      }
      .subheading-text {
        font-size: 18px;
      }
      .content-text {
        margin-top: 25px !important;
      }
      .price-row {
        padding: 12px;
        margin-top: 30px;
        .price {
          font-size: 50px;
        }
        .price-unit {
          font-size: 18px;
        }
        .button-col {
          padding-left: 40px;
          padding-right: 30px;
        }
      }
      .whats-included-container {
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
    &.free {
      padding: 12px;
      .enterprise-col-inner-container {
        height: 100%;
        padding: 28px;
      }
    }
  }
}
</style>