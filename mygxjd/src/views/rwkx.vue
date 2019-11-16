<template>
  <div class="rwkx">
    <div class="mainrwkx">
      <commissionNav :contents=contents></commissionNav>
      <el-carousel indicator-position="none" arrow="never" height="500px" :interval="3500">
        <el-carousel-item v-for="(item, index) in imgs" :key="index">
          <img :src="item.load" :alt="item.name">
        </el-carousel-item>
      </el-carousel>
      <div class="row-nevs clear">
        <div class="row1 ft">
          <div class="title-to">
            <h2>学院要闻</h2>
            <a href="">MORE>></a>
          </div>
          <div class="maintext">
            <div class="top-main clear">
              <img src="../assets/homeimgs/jxgc3.jpg" alt="">
                <p>Lorem ipsum dolor</p>
                <p>Lorem, ipsum dolor sit amet consectetur... <a href="">【详情】</a></p>
            </div>
            <ul>
              <li><a href="">Lorem ipsum dolor sit amet, consectetur adipisicing.</a></li>
              <li><a href="">Quo reiciendis amet consequuntur explicabo atque. Vero?</a></li>
              <li><a href="">Doloremque veniam modi quibusdam adipisci, ducimus nulla.</a></li>
              <li><a href="">Sapiente saepe, voluptatibus asperiores eos inventore facere.</a></li>
              <li><a href="">Earum ea, voluptate fugiat ad numquam omnis!</a></li>
            </ul>
          </div>
        </div>
        <div class="row1 ft">
          <div class="title-to">
          <h2>学院要闻</h2>
          <a href="">MORE>></a>
        </div>
        <div class="maintext">
          <ul>
            <li><a href="">Lorem ipsum dolor sit amet, consectetur adipisicing.</a></li>
            <li><a href="">Quo reiciendis amet consequuntur explicabo atque. Vero?</a></li>
            <li><a href="">Doloremque veniam modi quibusdam adipisci, ducimus nulla.</a></li>
            <li><a href="">Sapiente saepe, voluptatibus asperiores eos inventore facere.</a></li>
            <li><a href="">Earum ea, voluptate fugiat ad numquam omnis!</a></li>
          </ul>
          <div class="erwm clear">
            <img src="../assets/homeimgs/ws.jpg" alt="">
            <p>打开二维码扫一扫，关注广西机电更多信息</p>
          </div>
        </div>
        </div>
        <div class="row2 ft">
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
            <li>Magnam aperiam, quasi eos laudantium dolore esse perspiciatis.</li>
            <li>Temporibus quaerat modi obcaecati perspiciatis deleniti, nisi quos!</li>
            <li>Blanditiis qui, dicta exercitationem veritatis cum esse quisquam.</li>
            <li>Fuga vel maiores quibusdam saepe, molestiae suscipit quo.</li>
            <li>Accusantium doloribus consequatur molestiae cum exercitationem quidem modi!</li>
            <li>Ullam culpa perspiciatis hic adipisci minima vero nemo?</li>
            <li>Fugiat, velit aut? Veritatis temporibus officia voluptate unde?</li>
            <li>Temporibus quaerat modi obcaecati perspiciatis deleniti, nisi quos!</li>
            <li>Blanditiis qui, dicta exercitationem veritatis cum esse quisquam.</li>
            <li>Fuga vel maiores quibusdam saepe, molestiae suscipit quo.</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="cooperate">
      <div class="cooperate-title">
        <h2>企业合作</h2>
      </div>
      <div class="cooperate-content">
        <div class="box">
          <ul class="list">
            <li>
              <a href="">
                <div class="cooperate-img">
                  <img src="../assets/homeimgs/cooperate_icon_4.png" alt="">
                  <p>Lorem, ipsum.</p>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="cooperate-img">
                  <img src="../assets/homeimgs/cooperate_icon_4.png" alt="">
                  <p>Ad, non.</p>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="cooperate-img">
                  <img src="../assets/homeimgs/cooperate_icon_4.png" alt="">
                  <p>Voluptates, dolor?</p>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="cooperate-img">
                  <img src="../assets/homeimgs/cooperate_icon_4.png" alt="">
                  <p>Consequatur, quaerat.</p>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="cooperate-img">
                  <img src="../assets/homeimgs/cooperate_icon_4.png" alt="">
                  <p>Reiciendis, ipsum!</p>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="cooperate-img">
                  <img src="../assets/homeimgs/cooperate_icon_4.png" alt="">
                  <p>Corporis, debitis.</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <footsc></footsc>
  </div>
</template>
<script>
import Footsc from '@/components/Foot-sc.vue'
import CommissionNav from '@/components/CommissionNav.vue'

export default {
  components:{
    Footsc,
    CommissionNav
  },
  data (){
    return{
      contents:[
        {navs:'网站首页'},
        {navs:'系部概况'},
        {navs:'专业设置'},
        {navs:'学科介绍'},
        {navs:'教学科研'},
        {navs:'校企合作'},
        {navs:'党建工作'},
        {navs:'学生工作'},
      ],
      imgs: [
        { load: require('../assets/homeimgs/IMG_012.jpg'), name: '图一' },
        { load: require('../assets/homeimgs/IMG_013.jpg'), name: '图二' },
        { load: require('../assets/homeimgs/IMG_014.jpg'), name: '图三' }
      ]
    }
  }
}
</script>
<style scoped>
.mainrwkx{
  width: 1200px;
  margin: 0 auto;
  }
.rwkx .nevs{
    margin: 10px 0;
  }
  .rwkx .row-nevs .ft{
    float: left;
    box-sizing: border-box;
    margin: 20px 10px 0 0;
  }
  .rwkx .row-nevs .ft:last-child{
    margin-right: 0;
  }
  .rwkx .row-nevs .row1{
    width: 440px;
  }
  .rwkx .row-nevs .row1 .title-to{
    height: 40px;
    line-height: 40px;
  }
  .rwkx .row-nevs .row1 .title-to h2{
    font-size: 26px;
    display: inline-block;
    margin-right: 10px;
  }
  .rwkx .row-nevs .row1 .title-to a{
    text-decoration: none;
    color: #000;
    font-size: 14px
  }
  .rwkx .row-nevs .row1 .title-to a:hover{
    color: crimson
  }
  .rwkx .row-nevs .row1 .top-main{
    height: 100px;
  }
  .rwkx .row-nevs .row1 .top-main p{
    float: left;
    font-size: 16px;
    padding-left: 20px;
    width: 170px;
    cursor: pointer
  }
  .rwkx .row-nevs .row1 .top-main p:first-of-type{
    font-weight: bold;
  }
  .rwkx .row-nevs .row1 .top-main p a{
    float: right;
    color: #000;
    text-decoration: none
  }
  .rwkx .row-nevs .row1 .maintext img{
    width: 150px;
    vertical-align: middle;
    float: left;
  }
  .rwkx .row-nevs .row1 .maintext ul{
    padding-top: 10px;
  }
  .rwkx .row-nevs .row1 .maintext ul li{
    height: 36px;
    line-height: 36px;
    list-style-type: disc;
    list-style: inside;
    font-size: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-bottom: 2px dotted rgb(79,155,222)
  }
  .rwkx .row-nevs .row1 .maintext ul li:hover{
    color: rgb(253, 154, 108)
  }
  .rwkx .row-nevs .row1 .maintext ul li a:hover{
    color: rgb(253, 154, 108)
  }
  .rwkx .row-nevs .row1 .maintext ul li a{
    color: rgb(37, 24, 8);
    text-decoration: none;
  }
  .rwkx .row-nevs .row1 .maintext .erwm{
    height: 144px;
    padding-top: 20px;
    display: flex;
    align-items: center;
  }
  .rwkx .row-nevs .row1 .maintext .erwm p{
    float: left;
    font-size: 24px;
    font-weight: bold;
    width: 290px;
    text-align: center;
    padding-top: 20px;
  }
  .rwkx .row-nevs .row1 .maintext .erwm img{
    height: 100%;
    float: left;
  }
  .rwkx .row-nevs .row2{
    width: 300px
  }
  .rwkx .row-nevs .row2 ul{
    background: rgb(232, 233, 232);
  }
  .rwkx .row-nevs .row2 ul li{
    height: 24px;
    line-height: 24px;
    background: rgba(79,155,222,.6);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 10px;
    margin: 12px 0;
    cursor: pointer
  }
  .rwkx .row-nevs .row2 ul li:hover{
    background: rgba(79,155,222,1);
  }
  .rwkx .el-carousel img{
    height: 100%
  }
.rwkx .cooperate{
  width: 1200px;
  margin: 40px auto;
}
.rwkx .cooperate .cooperate-title{
  height: 30px;
  border-bottom: 1px solid #ddd;
  text-align: center;
}
.rwkx .cooperate .cooperate-title h2{
  line-height: 60px;
  height: 60px;
  font-size: 26px;
  display: inline-block;
  padding: 0 20px;
  background: #fff;
}
.rwkx .cooperate .cooperate-content{
  margin-top: 40px
}
.rwkx .cooperate .cooperate-content .list{
  display: flex
}
.rwkx .cooperate .cooperate-content .list li{
  flex: 1 130px;
  text-align: center;
  filter: grayscale(100%);
}
.rwkx .cooperate .cooperate-content .list li a{
  color: #0b8cdd;
  text-decoration: none;
  font-size: 16px;
}
.rwkx .cooperate .cooperate-content .list li:hover{
  filter: grayscale(0);
}
</style>