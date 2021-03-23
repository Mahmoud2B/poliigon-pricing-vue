<template>
  <v-container class="mt-12">
    <v-row>
      <v-col
        v-for="softwareRender in softwareRenders"
        v-bind:key="softwareRender.id"
      >
        <v-img
          class="software-img"
          :src="require('@/assets/images/' + softwareRender.img)"
          width="190"
          contain
          alt=""
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SoftwareContainer",
  data: () => {
    return {
      softwareRenders: [
        {
          id: "1",
          img: "3dmax.png",
        },
        {
          id: "2",
          img: "maya.png",
        },
        {
          id: "3",
          img: "cinema4d.png",
        },
        {
          id: "4",
          img: "blender.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.software-img{
    margin: auto;
}
</style>