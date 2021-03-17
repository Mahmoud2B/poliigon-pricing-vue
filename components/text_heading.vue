<template>
    <div class="text-heading">
        <h1>
            {{text}}
        </h1>
    </div>
</template>

<script>
export default {
    name:"TextHeading",
    props:{
        text:String
    }
}
</script>

<style lang="scss" scoped>
.text-heading{
    text-align: center;
    padding-top: $text_heading_marging_top;
    padding-bottom: $text_heading_marging_bottom;
    h1{
        font-weight: 400;
        font-size: 40px;
    }
}
</style>