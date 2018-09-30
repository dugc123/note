<template>
  <div id="app">
    <Layout></Layout>
	<router-view/>
  </div>
</template>

<script>
import Layout from "./components/layout"
export default {
  name: 'App',
   components: {
      Layout
    }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  background-color: #f1f1f1;
}
.w1170 {
  width: 1170px;
  margin: 0 auto;
}
  #nprogress .bar {
    background: rgb(255, 0, 128)
  }
    .clearfix::after {
    content: '';
    display: block;
    clear: both;
  }
  .fll {
    float: left;
  }
  .flr{
    float: right;
  }
</style>
