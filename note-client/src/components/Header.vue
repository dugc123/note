<template>
 <div class="page">
     <div class="header-box w1170">
        <div class="title">
            <router-link to="/"> 云笔记</router-link>
            </div>
        <el-button class="WriteNotes" @click="handleClick">写笔记</el-button>
     </div>

 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
 }
 },
methods: {
    handleClick(){
        let Info = {...this.$store.state.userInfo}
        // console.log(Info)
         if (Info.email) {
        this.$router.push('/writeNote')
    }else{
        this.$message.info("未登录状态不能写笔记")
    }
    }
   
}
}
</script>

<style scoped lang="scss">
.page{
    width: 100%;
    height: 50px;
    background-color: #409eff;
}
.title{
    font-size: 30px;
    font-weight: 400;
    float: left;
    color: #fff;
    line-height: 50px;
    a{
        text-decoration: none;
        color: #fff
    }
}
.WriteNotes{
    float: right;
    margin-top: 5px;
    cursor: pointer;
    color: #333;
}
.WriteNotes:hover{
    color:#409eff
}
</style>
