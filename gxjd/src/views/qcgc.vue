<template>
  <div class="qcgc">
    <div class="topnews">
      <div class="introduction">
        <h2>系部介绍</h2>
        <p>汽车工程系拥有雄厚的师资力量。现有专兼职教师37人，其中高级职称10人，中级职称13人。系部各教学团队既具有扎实的理论知识和丰富的教育教学经验，又具备较强的工程实践能力科研能力，承担了多项自治区级、厅级和院级科研项目，拥有汽车新型燃料专利2项。</p>
      </div>
      <commissionNav :contents=contents></commissionNav>
      <div class="row1 clear">
        <dl>
          <dt>学院要闻</dt>
          <dd><a href="">更多</a></dd>
        </dl>
        <ul class="ltnew fl">
          <li>
            <div>
              <span>03</span>
              <p>11</p>
            </div>
            <a href="">Lorem ipsum dolor sit amet consectetur.</a>
          </li>
          <li>
            <div>
              <span>03</span>
              <p>11</p>
            </div>
            <a href="">Lorem ipsum dolor sit amet consectetur adipisicing.</a>
          </li>
          <li>
            <div>
              <span>03</span>
              <p>11</p>
            </div>
            <a href="">Lorem ipsum dolor sit amet consectetur adipisicing.</a>
          </li>
          <li>
            <div>
              <span>03</span>
              <p>11</p>
            </div>
            <a href="">Lorem ipsum dolor sit amet consectetur adipisicing.</a>
          </li>
          <li>
            <div>
              <span>03</span>
              <p>11</p>
            </div>
            <a href="">Lorem ipsum dolor sit amet consectetur adipisicing.</a>
          </li>
        </ul>
        <ul class="rtnew fl">
          <li>
            <img src="../assets/homeimgs/IMG_013.jpg" alt="">
            <p>汽车工程系关于对2019年春季学期职业能力鉴定报告</p>
          </li>
          <li>
            <img src="../assets/homeimgs/IMG_012.jpg" alt="">
            <p>汽车工程系关期职业能力鉴定报</p>
          </li>
        </ul>
      </div>
      <div class="row2">
        <div class="box">
          <li class="box1">
            <div class="atitle">
              <h3>通知公告</h3>
              <a href="">更多</a>
            </div>
            <ul>
              <li><a href="">Lorem ipsum dolor sit.</a></li>
            </ul>
          </li>
        </div>
        <div class="box">
          <li class="box2">
            <div class="atitle">
              <h3>党员工作</h3>
              <a href="">更多</a>
            </div>
            <ul>
              <li><a href="">Lorem ipsum dolor sit.</a></li>
              <li><a href="">Lorem ipsum dolor sit.</a></li>
              <li><a href="">Hic sunt veniam recusandae.</a></li>
              <li><a href="">Quidem dignissimos eum impedit.</a></li>
              <li><a href="">Laudantium esse obcaecati adipisci.</a></li>
            </ul>
          </li>
        </div>
        <div class="box">
          <li class="box3 box">
            <div class="atitle">
              <h3>招生就业</h3>
              <a href="">更多</a>
            </div>
            <ul>
              <li><a href="">Lorem ipsum dolor sit.</a></li>
              <li><a href="">Lorem ipsum dolor sit amet consectetur.</a></li>
              <li><a href="">Maxime sunt expedita nihil veniam numquam!</a></li>
              <li><a href="">Est corporis doloribus esse consectetur modi?</a></li>
              <li><a href="">Eos assumenda totam excepturi tenetur iure.</a></li>
              <li><a href="">Labore quis expedita ipsum odio quaerat?</a></li>
              <li><a href="">Vero maiores fuga nemo excepturi suscipit.</a></li>
            </ul>
          </li>
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
  data (){
    return{
      contents:[
        {navs:'系部首页'},
        {navs:'系部简介'},
        {navs:'师资力量'},
        {navs:'专业建设'},
        {navs:'教学科研'},
        {navs:'实训基地'},
        {navs:'学生园地'},
      ]
    }
  }
}
</script>
<style scoped>
.qcgc{
  width: 100%;
  background: url(../assets/homeimgs/Qc1.jpg)
}
.topnews{
  width: 1240px;
  margin: 0 auto;
  background: rgba(108,135,164,.3);
  padding:0 20px
  }
  .topnews .nevs .titlenav{
    box-shadow: none;
  }
  .topnews .introduction{
    padding-top: 20px;
    text-align: center;
  }
  .topnews .introduction h2{
    font-size: 36px;
  }
  .topnews .introduction p{
    font-size: 26px;
    text-indent: 2em
  }
  .topnews .row1{
    width: 100%;
    padding-top: 60px;
    color: #000
  }
  .topnews .row1 dl{
    height: 26px;
    line-height: 26px;
  }
  .topnews .row1 dl dt{
    font-size: 26px;
    float: left;
  }
  .topnews .row1 dl dd{
    float: right;
  }
  .topnews .row1 dl dd a{
    font-weight: bold;
    color: #BF000A;
    text-decoration: none;
  }

  .topnews .row1 .ltnew{
    width: 385px;
    float: left;
    padding-top: 10px;
  }
  .topnews .row1 .ltnew li{
    height: 60px;
    margin-bottom: 8px
  }
  .topnews .row1 .ltnew li div{
    height: 60;
    width: 45px;
    float: left;
    background:rgba(248, 151, 151, 0.774)
  }
  .topnews .row1 .ltnew li div span{
    display: block;
    height: 30px;
    line-height: 30px;
    font-size: 28px;
    color: #fff;
  }
  .topnews .row1 .ltnew li div p{
    text-align: right;
    font-size: 16px;
    height: 25px;
    line-height: 25px;
  }
  .topnews .row1 .ltnew li a{
    float: left;
    display: block;
    height: 100%;
    font-size: 16px;
    width: 320px;
    padding-left: 10px;
    color: #000
  }
  .topnews .row1 .rtnew{
    width: 815px;
    float: right;
    display: flex;
  }

  .topnews .row1 .rtnew li{
    flex: 1;
    display: inline-block;
    height: 360px;
    background: rgba(147,178,199);
    transition: all .3s ease .2s
  }
  .topnews .row1 .rtnew li:hover{
    box-shadow: 2px 2px 5px 2px rgba(0,0,0,0.2);
  }
  .topnews .row1 .rtnew li:nth-child(1){
    margin-right: 20px;
  }
  .topnews .row1 .rtnew li img{
    width: 100%;
    height: 320px;
    object-fit:cover;
  }
  .topnews .row1 .rtnew li p{
    text-align: center;
    font-size: 16px;
    color: #000;
    height: 40px;
    line-height: 40px;
  }
.topnews .row2{
  padding-top: 80px;
  display: flex;
  padding-bottom: 40px
  }
  .topnews .row2 .box{
    flex: 1;
    margin-right: 40px;
    padding:8px 0 0 8px;
    height: 230px;
    box-sizing: border-box;
    transition: all .3s ease .2s
  }
  .topnews .row2 .box:hover{
    padding: 0;
    margin-right: 48px;
    box-shadow: 2px 2px 5px 2px rgba(0,0,0,0.2);

  }
  .topnews .row2 .box:last-child{
    margin-right: 0;
  }
  .topnews .row2 .box a{
    text-decoration: none;
    color: #000;
  }
  .topnews .row2 .box a:hover{
    color: rgb(254,127,37)
  }
  .topnews .row2 .box h3{
    font-size: 24px;
    display: inline-block;
    color:rgb(192, 64, 70)
  }
  .topnews .row2 .box .atitle{
    height: 36px;
    line-height: 36px;
  }
  .topnews .row2 .box .atitle a{
    float: right;
    color:#BF000A
  }
  .topnews .row2 .box ul {
    padding-left:10px 
  }
  .topnews .row2 .box ul li{
    height: 26px;
    line-height: 26px;
    font-size: 16px;
  }
</style>

