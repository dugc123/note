<template>
 <div class="region">
<el-form label-position="left" label-width="80px" class="form">
    <h1>新用户注册</h1>
  <el-form-item label="用户名：">
    <el-input v-model="formData.username" placeholder="请输入用户名"></el-input>
  </el-form-item>
  <el-form-item label="邮箱：">
    <el-input v-model="formData.email" placeholder="请输入邮箱"></el-input>
  </el-form-item>
  <el-form-item label="密码：">
    <el-input type="password" v-model="formData.password" placeholder="请输入密码" @keyup.enter.native="handleRegion"></el-input>
  </el-form-item>
   <el-button type="primary" class="btn" @click="handleRegion">注册</el-button>
</el-form>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
   formData:{
     username:"",
     password: "",
     email:""
   }
 }
 },
 components: {

 },
 methods: {
   handleRegion(){
     this.$axios.post("/user",this.formData).then(res=>{
       if (res.code == 200) {
         this.$message.success(res.msg)
         setTimeout(() => {
           this.$router.push("/")
         }, 500);
       }else{
         this.$message.error(res.msg)
       }
     })
   }
 }
}
</script>

<style scoped lang="">
.region{
margin-top: 90px;
}
.form{
  width: 390px;
  margin: 0 auto;
    padding:0 160px;
    background-color: #fff;
}
h1{
  text-align: center;
  font-weight: 400;
  padding: 50px 0;
}
.btn{
  width: 100%;
  margin: 30px 0;
}
</style>
