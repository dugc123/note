<template>
  <div class="writeNote w1170">
      <h3>标题</h3>
      <el-input v-model="formData.title"></el-input>
      <h3>内容</h3>
   <quill-editor class="editor"
      v-model="formData.content"
      ref="myQuillEditor"
      :options="editorOption"
      @change="handleChange"
    >
    </quill-editor>
    <div class="category clearfix">
      <span class="fll" style="margin-top:6px"> 分类：</span><div class="fll" v-for="(item,index) in categories" :key="index">
    <el-radio-group v-model="formData.category">
      <el-radio-button :label="item._id"><span>{{item.name}}</span></el-radio-button>
    </el-radio-group>
  </div>
    </div>
    <el-button type="success" class="btn" @click="handleSubmit">发布</el-button>
  </div>
</template>

<script>
import 'quill/dist/quill.snow.css'
  import {quillEditor, Quill} from 'vue-quill-editor'
  import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'

  Quill.register('modules/ImageExtend', ImageExtend)

export default {
 data() {
 return {
     formData:{
     title:"",
    content: '',
    contentText:"",
    category:""
     },
     categories:[],
     editorOption: {  
          modules: {
            ImageExtend: {
              loading: true,
              name: 'img',
              action: "https://qiniu.com",
              response: (res) => {
                return res.info
              }
            },
            toolbar: {
              container: container,
              handlers: {
                'image': function () {
                  QuillWatch.emit(this.quill.id)
                }
              }
            }
          }
        }
 }
 },
components: {quillEditor},
methods:{
  handleChange({ quill, html, text }){
        // console.log('editor change!', text)
        this.formData.contentText = text
        this.formData.contentText = this.formData.contentText.substring(0,200)+"..."
  },
  getCategory(){
    this.$axios.get("/category").then(res=>{
      this.categories = res.data
    })
  },
  handleSubmit(){
    this.$axios.post("/article",this.formData).then(res=>{
      if (res.code == 200) {
        this.$message.success(res.msg)
        this.$router.push("/")
      }
    })
  }
},
created() {
  this.getCategory()
},
}
</script>

<style scoped lang="">
.writeNote{
    background-color: #fff;
    margin-top:20px;
    padding:20px;
}
h3{
    margin: 12px 0;
}
.btn{
    margin-top:10px;
}

.category{
    margin-top:10px;
    color:#409eff;
    font-weight: 600;
    font-size: 18px;
}
</style>
<style>
.ql-editor{
  min-height:200px
}
</style>
