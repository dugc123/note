<template>
<div class="page">
    <div class="login-box"  v-if="!userInfo.username">
        <el-form class="right-box">
        <el-form-item >
            <el-input type="text" v-model="formData.email" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input type="password" v-model="formData.password" placeholder="密码" @keyup.enter="handleLogin"></el-input>
            <el-button type="primary" class="btn" @click="handleLogin">登录</el-button>
            <el-button class="btn" @click="$router.push('/region')">注册</el-button>
        </el-form-item>
        </el-form>
    </div>
    <div class="user-msg-box" v-else>
        <div class="img-wrap">
            <img :src="userInfo.avatar">
        </div>
        <div class="user-text">
            <span>欢迎：</span>{{userInfo.username}}
        </div>
        <el-button class="btn" type="warning" @click="handleLogout">退出登录</el-button>
    </div>
</div>
</template>

<script>
import {mapState} from "vuex"
 export default {
  data() {
    return {
        formData:{
            email:"wangcai",
            password:"wangcai"
        }
    };
},
methods:{
    handleLogin(){
        this.$axios.post("/login",this.formData).then(res=>{
            console.log(res)
            if (res.code == 200) {
                this.$message.success(res.msg)
                this.$store.commit("CHANGE_userInfo",res.userData) 
                // location.reload() 刷新当前页面两种方法
                this.$router.go(0)
            }
        })
    },
    handleLogout(){
        this.$axios.get("/logout").then(res=>{
                let userInfo = {
                avatar:"",
                email:""

            }
            if (res.code == 200) {
                this.$message.success(res.msg)
                // location.reload()
                this.$router.go(0)
                this.$store.commit("CHANGE_userInfo",userInfo)  //清空vuex保留的用户信息  
            }else{
            this.$store.commit("CHANGE_userInfo",userInfo)  //清空vuex保留的用户信息  
            this.$message.info("登录状态过期")
            }
        })
    }
},
    computed:{
    ...mapState(['userInfo'])
    }
};
</script>

<style scoped lang="scss">
.page {
    width: 360px;
    height: 340px;
    background-color: #fff;
    border-radius: 6px;
    float: right;
    margin-top: 50px;
}
.right-box{
    padding: 40px 20px;
}
.btn{
    width: 100%;
    margin-top: 40px
}
.user-msg-box{
    .img-wrap{
        width: 150px;
        height: 150px;
        margin:20px auto;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .user-text{
        text-align: center;
        font-size: 18px;
        color:#45f;
        font-weight: 700;
    }
    .btn{
        width: 80%;  
        margin-left: 35px
    }
}
</style>
