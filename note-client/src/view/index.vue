<template>
    <div class="page w1170">
        <div class="banner-wrap clearfix">
            <Banner></Banner>
            <UserBox></UserBox>
        </div>
        <div class="article-wrap" v-if="isShow">
            <router-link :to="{name:'article',params:{id:item._id}}" class="article-item" v-for="(item,index) in allArticle" :key="index">
                <div class="article-msg clearfix">
                    <div class="row1">
                        <div class="avatar fll">
                            <img :src="item.author.avatar">
                        </div>
                        <div class="author-msg">
                            <span class="author-name" v-text="item.author.username"></span>
                            <span class="article-divide">|</span>
                            <span class="article-content" v-text="item.title"></span>
                        </div>
                    </div> 
                    <div class="row2 fll">
                        <span class="strong">浏览：<span v-text="item.looknums"></span> </span>
                        <span class="strong">回复：<span v-text="item.commentnums"></span> </span>
                        <span class="strong">分类：<span v-text="item.category.name"></span> </span>
                    </div>
                </div>
                <div class="article-content" v-text="item.contentText">
                    快放假了
            </div>
            </router-link>
        </div>
    </div>
</template>
<script> 
    import Banner from '../components/Banner.vue'
    import UserBox from '../components/UserBox.vue'
    export default {
        components:{
            Banner,
            UserBox
    },
    data() {
    return {
        allArticle:[],
        isShow:false
    }
    },
    methods: {
        getData(){
            this.$axios.get("/article").then(res=>{
            this.allArticle = res.data
            //  console.log(this.allArticle)
        })
        let info = {...this.$store.state.userInfo}
            if(info.email){
                this.isShow = true
            }
        }
    },
    created() {
        this.getData()
    }
}
</script>

<style scoped lang="scss">
.article-wrap{
    margin-top: 30px;
    width: 750px;
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
}
.article-item{
    display: block;
    text-decoration: none;
    padding: 24px;
    background-color: #fff;
    color:#333;
    .avatar{
        width: 70px;
        height: 70px;
        img{
            width: 100%;
            height: 100%;
        }
    } 
        .author-msg{
            margin-left: 80px;
        }
        .row1{
            line-height: 28px;
        }
        .row2{
            margin-left: 10px;
            width: 600px;
            margin-top: 6px;
            background: #bbb;
            color:#555;
            border-radius: 4px;
            padding: 6px;
        }
        .author-name{
            font-size: 18px;
            font-weight: bold;
            color:#409eff;
        }
    }
</style>
