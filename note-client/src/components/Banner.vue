<template>
 <div class="page">
    <img src="/static/img/banner.jpg">
    <div class="text">十三亿人都会用的云笔记</div>

 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {

 }
 },
 components: {

 }
}
</script>

<style scoped lang="">
.page{
    margin-top: 50px;
    float: left;
}
img{
    height: 340px;
    width:750px;
    border-radius: 6px;
    position: relative;
}
.text{
    position: absolute;
    height:50px;
    width:710px;
    font-size: 22px;
    margin-top:-53px;
    background-color: rgba(0, 0, 0, .5);
    color: #fff;
    line-height: 50px;
    padding-left: 40px;
    font-weight: 300;
    border-radius: 6px;
}
</style>
