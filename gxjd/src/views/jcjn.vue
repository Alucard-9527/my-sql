<template>
  <div class="jcjn">
    <div class="jcjn-top">
      <div class="title"><h2>基础技能实训中心</h2></div>
      <commissionNav :contents=contents></commissionNav>
      <div class="row">
        <div class="main-img ft">
         <img src="../assets/homeimgs/IMG_013.jpg" alt="">
        </div>
        <div class="row1 ft">
          <div class="row-title"><h3>通知公告</h3></div>
          <ul class="list">
            <li><a href="">Lorem ipsum dolor sit.</a><span>[2019-11-9]</span></li>
            <li><a href="">Magni quidem voluptate eaque?</a><span>[2019-11-9]</span></li>
            <li><a href="">Cum voluptates maxime fugit.</a><span>[2019-11-9]</span></li>
            <li><a href="">Rerum quod neque illum.</a><span>[2019-11-9]</span></li>
          </ul>
      </div>
      <div class="row2 ft">
        <div class="row-title"><h3>部门动态</h3><a href="">更多</a></div>
        <ul class="list">
          <li><a href="">Doloribus qui ipsum iusto?</a><span>[2019-11-9]</span></li>
          <li><a href="">Labore ut porro ullam.</a><span>[2019-11-9]</span></li>
          <li><a href="">Consequatur quas inventore quam?</a><span>[2019-11-9]</span></li>
          <li><a href="">Modi optio architecto doloribus!</a><span>[2019-11-9]</span></li>
        </ul>
      </div>
      <div class="row3 ft">
        <div class="row-title"><h3>师资力量</h3></div>
        <ul class="list">
          <li><a href="">Architecto molestiae hic quos?</a><span>[2019-11-9]</span></li>
          <li><a href="">Atque at consequuntur ad.</a><span>[2019-11-9]</span></li>
          <li><a href="">Laborum at dolor reprehenderit?</a><span>[2019-11-9]</span></li>
          <li><a href="">Qui officia quisquam at.</a><span>[2019-11-9]</span></li>
        </ul>
       </div>
      </div>
    </div>
    <footsc></footsc>
  </div>
</template>
<script>
import Footsc from '@/components/Foot-sc.vue'
import CommissionNav from'@/components/CommissionNav.vue'

export default {
  components:{
    Footsc,
    CommissionNav
  },
  data(){
  return{
      contents:[
        {navs:'学院首页'},
        {navs:'部门简介'},
        {navs:'师资力量'},
        {navs:'课程建设'},
        {navs:'教研科研'},
        {navs:'实践教学'},
        {navs:'资料下载'}
        ]
    }
  }
}
</script>
<style scoped>
.jcjn .jcjn-top{
  width: 1200px;
  margin: 0 auto;
  }
  .jcjn .jcjn-top .title{
    height: 32px;
    text-align: center;
    font-size: 32px;
    color: #032C68;
    margin-bottom: 40px;
    border-bottom: 2px solid #ddd
  }
  .jcjn .jcjn-top h2{
    line-height: 64px;
    height: 64px;
    display: inline-block;
    padding: 0 20px;
    background: #fff;
  }
  .jcjn .jcjn-top .row{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .jcjn-top .ft{
    background: #fff;
    margin: 10px 0;
    background: rgb(220, 223, 228)
  }
  .jcjn-top .ft .row-title{
    height: 40px;
    line-height: 40px;
    font-size: 24px;
    color: #fff;
    background: linear-gradient(to left,rgb(83, 125, 167),rgb(28, 63, 95));
    padding-left: 1em;
  }
  .jcjn-top .ft .row-title h3{
    display: inline-block;
  }
  .jcjn-top .ft .row-title a{
    float: right;
    color:#fff;
    font-size: 18px;
    padding-right: 10px;
  }
  .jcjn-top .ft .row-title a:hover{
    color: rgb(253, 162, 70)
  }
  .jcjn-top .ft .list li{
    height: 36px;
    line-height: 36px;
    font-size: 16px;
    padding: 0 1em;  
  }
  .jcjn-top .ft .list li a{
    float: left;
    text-decoration: none;
    color: rgb(29,64,96)
  }
  .jcjn-top .ft .list li a:hover{
    color: rgb(253, 162, 70)
  }
  .jcjn-top .ft .list li span{
    float: right;
  }
  .jcjn-top .main-img{
    width: 600px;
    position: relative;
    overflow: hidden;
    height: 400px;
  }
  .jcjn-top .main-img img{
    position: absolute;
    top: -50%;
    left: -50%;
  }
  .jcjn-top .row2{
    width: 600px;
  }
  .jcjn-top .row1,.jcjn-top .row3{
    width: 500px;
  }

</style>