<template>
  <div class="jxjy">
    <commissionNav :contents=contents></commissionNav>
    <div class="jxjy-top">
      <div class="title"><h2>继续教育中心</h2></div>
      <div class="row clear">
        <div class="main-text ft">
          <div class="main1">
            <div class="title"><h3>联系我们</h3></div>
            <ul>
              <li><a href="">成高函授教育：0771-3248722，余老师</a></li>
              <li><a href="">自考专本衔接：0771-3248722，余老师</a></li>
              <li><a href="">职教师资培训：0771-3248722，余老师</a></li>
              <li><a href="">职业技能培训：0771-3248722，刘老师</a></li>
              <li><a href="">职业技能鉴定：0771-3248722，刘老师</a></li>
              <li><a href="">职业技能竞赛：0771-3248722，刘老师</a></li>
            </ul>
          </div>
          <div class="main2">
            <div class="title"><h3>下载专区</h3></div>
            <ul>
              <li><a href="">成高教育</a></li>
              <li><a href="">自学考试</a></li>
              <li><a href="">职教师资培训</a></li>
              <li><a href="">职业技能培训与鉴定</a></li>
              <li><a href="">技能竞赛</a></li>
            </ul>
          </div>
          <div class="main3">
            <div class="title"><h3>友情链接</h3></div>
            <ul>
              <li><a href="">中国高职高专教育网</a></li>
              <li><a href="">广西教师教育网</a></li>
              <li><a href="">广西招生考试网</a></li>
              <li><a href="">广西壮族自治区职业资格工作网</a></li>
            </ul>
          </div>
        </div>
      <div class="row1 ft">
          <div class="row-title"><h3>中心新闻</h3></div>
          <ul class="list">
            <li><a href="">Lorem ipsum dolor sit.</a><span>[2019-11-9]</span></li>
            <li><a href="">Magni quidem voluptate eaque?</a><span>[2019-11-9]</span></li>
            <li><a href="">Cum voluptates maxime fugit.</a><span>[2019-11-9]</span></li>
            <li><a href="">Rerum quod neque illum.</a><span>[2019-11-9]</span></li>
          </ul>
      </div>
      <div class="row2 ft">
        <div class="row-title"><h3>通知公告</h3><a href="">更多</a></div>
        <ul class="list">
          <li><a href="">Doloribus qui ipsum iusto?</a><span>[2019-11-9]</span></li>
          <li><a href="">Labore ut porro ullam.</a><span>[2019-11-9]</span></li>
          <li><a href="">Consequatur quas inventore quam?</a><span>[2019-11-9]</span></li>
          <li><a href="">Modi optio architecto doloribus!</a><span>[2019-11-9]</span></li>
        </ul>
      </div>
      <div class="row3 ft">
        <div class="row-title"><h3>办事流程</h3></div>
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
        {navs:'首页'},
        {navs:'成高教育'},
        {navs:'自学考试'},
        {navs:'职教师培训'},
        {navs:'职业技能培训鉴定'},
        {navs:'技能竞赛'},
        {navs:'继续教育管理系统'}
        ]
    }
  }
}
</script>
<style scoped>
.jxjy .jxjy-top{
  width: 1200px;
  margin: 0 auto;
  }
  .jxjy .jxjy-top .title{
    height: 32px;
    text-align: center;
    font-size: 32px;
    color: #032C68;
    margin-bottom: 40px;
    border-bottom: 2px solid #ddd
  }
  .jxjy .jxjy-top h2{
    line-height: 64px;
    height: 64px;
    display: inline-block;
    padding: 0 20px;
    background: #fff;
  }
  .jxjy .jxjy-top .row{
  }
  .jxjy-top .ft{
    margin: 10px 0;
    background: rgb(233, 233, 233);
    float: left;
  }
  .jxjy-top .ft .row-title{
    height: 40px;
    line-height: 40px;
    font-size: 24px;
    color: #fff;
    background: linear-gradient(to left,#56a0de,#1774de);
    padding-left: 1em;
  }
  .jxjy-top .ft .row-title h3{
    display: inline-block;
  }
  .jxjy-top .ft .row-title a{
    float: right;
    color:#fff;
    font-size: 18px;
    padding-right: 10px;
  }
  .jxjy-top .ft .row-title a:hover{
    color: rgb(253, 162, 70)
  }
  .jxjy-top .ft .list li{
    height: 36px;
    line-height: 36px;
    font-size: 16px;
    padding: 0 1em;  
  }
  .jxjy-top .ft .list li a{
    float: left;
    text-decoration: none;
    color: rgb(29,64,96)
  }
  .jxjy-top .ft .list li a:hover{
    color: rgb(253, 162, 70)
  }
  .jxjy-top .ft .list li span{
    float: right;
  }
  .jxjy-top .main-text{
    width: 400px;
    overflow: hidden;
    height: 800px;
    margin-right: 60px
  }
  .jxjy-top .row1,.jxjy-top .row2{
    width: 700px;
    height: 390px;
  }
  .jxjy-top .row3{
    width: 1200px;
    height: 200px;
  }
.jxjy-top .row .main-text .title{
  height: 60px;
  line-height: 60px;
  font-size: 24px;
  color: #fff;
}
.jxjy-top .row .main-text .title h3{
  background: linear-gradient(to left,#56a0de,#1774de);
  box-shadow: 10px 5px 10px 1px rgb(143, 221, 231);
}
</style>