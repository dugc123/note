<template>
<div class="article">
    <div class="title">
        <div class="author-msg clearfix" v-if="content.author">
            <div class="img-wrap fll">
                <img :src="content.author.avatar">
            </div>
            <div class="author-details">
                <div class="author-name">
                    {{content.author.username}}
                </div>
                <div class="date">
                    <span class="format-date">
                        {{content.times}}
                    </span>
                    <span>
                        阅读：{{content.looknums}}
                    </span>
                </div>
            </div>
        </div>
    </div>
    <h1 class="title">
        {{content.title}}
    </h1>
    <div class="content-html" v-html="content.content">

    </div>
</div>
</template>

<script>
export default {
 data() {
 return {
     content:{
         time:"",
         times:""
     }
 }
 },
methods: {
    getData(){
        this.$axios.get(`/article/${this.$route.params.id}`).then(res=>{
            this.content = res.data
            this.content.time = this.content.updatedAt
            let d= new Date(this.content.time)
            this.content.times=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + 
            d.getDate() + ' ' + (d.getHours() >= 10?d.getHours():"0"+d.getHours() )+ ':' + 
            (d.getMinutes()>=10?d.getMinutes():"0"+d.getMinutes()) + ':' +(d.getSeconds()>=10 ? d.getSeconds():"0"+d.getSeconds()) ;
        })
    }
},
created() {
    this.getData()
},
}
</script>

<style scoped lang="scss">
.article{
    width: 800px;
    min-height:300px;
    margin: 0 auto;
    margin-top: 50px;
    background-color: #fff;
    border-radius: 6px;
    padding:60px 40px;
    .img-wrap{
        width: 60px;
        height: 60px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .author-details{
        margin-left: 26px;
        line-height:24px;
    .author-name{
        font-size: 18px;
        font-weight: bold;
        color:#333
    }
    }
}
</style>
