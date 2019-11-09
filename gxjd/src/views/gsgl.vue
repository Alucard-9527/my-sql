<template>
  <div class="gsgl">
    <div class="content">
      <commissionNav :contents=contents></commissionNav>
      <el-carousel indicator-position="none" height="500px">
        <el-carousel-item v-for="(item, index) in imgs" :key="index">
          <img :src="item.load" :alt="item.name">
        </el-carousel-item>
      </el-carousel>
      <div class="topnews">
        <div class="toptitle">
          <span>公告通知</span>
          <span>NOTICE</span>
          <a href="">more</a>
        </div>
        <ul class="ltlist">
          <li>
            <div>
              <span>01</span>
              <p>2019-03</p>
              <a href="">Lorem, ipsum dolor sit amet consectetur adipisicing.</a>
            </div>
          </li>
          <li>
            <div>
              <span>06</span>
              <p>2019-03</p>
              <a href="">Lorem, ipsum dolor sit amet consectetur adipisicing.</a>
            </div>
          </li>
          <li>
            <div>
              <span>05</span>
              <p>2019-03</p>
              <a href="">Lorem, ipsum dolor sit amet consectetur adipisicing.</a>
            </div>
          </li>
          <li>
            <div>
              <span>04</span>
              <p>2019-03</p>
              <a href="">Lorem, ipsum dolor sit amet consectetur adipisicing.</a>
            </div>
          </li>
        </ul>
      </div>
      <div class="topnews">
        <div class="toptitle">
          <span>招生就业</span>
          <span>ADMISSION</span>
          <a href="">more</a>
        </div>
        <ul class="rilist">
          <li><a href="">Lorem ipsum dolor sit amet consectetur.</a></li>
          <li><a href="">Itaque ex adipisci ut dolores tempore.</a></li>
          <li><a href="">Animi nostrum vitae quasi esse nulla.</a></li>
          <li><a href="">Quos dicta voluptas eligendi eos necessitatibus?</a></li>
          <li><a href="">Natus maxime libero quibusdam tempora dolor.</a></li>
          <li><a href="">Iste, modi. Vero veritatis alias ea.</a></li>
          <li><a href="">Fugit recusandae adipisci molestias modi nostrum!</a></li>
          <li><a href="">Culpa odit enim et dignissimos voluptatum!</a></li>
        </ul>
      </div>
      <div class="risite">
        <div class="toptitle">
          <span>专业设置</span>
          <span>SPECIALITY</span>
        </div>
        <ul>
          <li>Lorem, ipsum.</li>
          <li>Esse, odit.</li>
          <li>Rerum, hic.</li>
          <li>Enim, porro.</li>
          <li>Dolorem, sequi.</li>
        </ul>
      </div>
    </div>
    <div class="bmlist">
      <ul>
        <li>
          <img src="../assets/homeimgs/IMG_1086.jpg" alt="">
          <div>师资队伍</div>
        </li>
        <li>
          <img src="../assets/homeimgs/IMG_1086.jpg" alt="">
          <div>校友平台</div>
        </li>
        <li>
          <img src="../assets/homeimgs/IMG_1086.jpg" alt="">
          <div>本科招生</div>
        </li>
        <li>
          <img src="../assets/homeimgs/IMG_1086.jpg" alt="">
          <div>校园文化</div>
        </li>
      </ul>
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
        imgs: [
          { load: require('../assets/homeimgs/IMG_012.jpg'), name: '图一' },
          { load: require('../assets/homeimgs/IMG_013.jpg'), name: '图二' },
          { load: require('../assets/homeimgs/IMG_014.jpg'), name: '图三' }
      ],
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
.nevs{
  margin: 0
}
.gsgl{
  position: relative;
  }
  .gsgl {
    width: 100%;
    background: url(../assets/homeimgs/IMG_700.jpg) no-repeat;
  }
  .gsgl .content{
    width: 1200px;
    margin: 0 auto;
  }
  .gsgl .content .topnews{
    display: inline-block;
    width: 410px;
    padding:20px;
    padding-top: 60px;
    color: #1569c7;
    vertical-align: auto;
  }
  .gsgl .content .topnews a{
    text-decoration: none;
    color: #2c3e50;
  }
  .gsgl .content .toptitle{
    height: 24px;
    line-height: 24px;
    font-size: 24px;
  }
  .gsgl .content .toptitle span:nth-of-type(2){
    font-size: 16px;
    font-weight: 600;
    margin-left: 15px;
    vertical-align: -2px
  }
  .gsgl .content .toptitle a{
    font-size: 12px;
    float: right;
  }
  .gsgl .content .toptitle a:hover{
    color: #f00;
  }
  .gsgl .content .topnews .ltlist{
    padding: 10px 0;
  }
  .gsgl .content .topnews .ltlist li div{
    height: 54px;
    line-height: 54px;
    background: rgba(169, 190, 218, 0.6);
    padding-left: 8px;
    border-radius: 10px;
    margin-bottom: 4px;
  }
  .gsgl .content .topnews .ltlist li div span{
    font-size: 24px;
    font-weight: bold;
    margin-right: 4px
  }
  .gsgl .content .topnews .ltlist li div p{
    font-size: 14px;
    color: #7a7a7a;
    display: inline-block;
  }
  .gsgl .content .topnews .ltlist li div a{
    width: 300px;
    float: right;
    text-align: left;
    font-size: 16px;
    line-height: 20px;
    padding-top: 10px;
  }
  .gsgl .content .topnews .rilist{
    margin-top: 14px;
    background: rgba(169, 190, 218, 0.6);
    padding: 10px 8PX;
    border-radius: 10px;
    display: inline-block;
  }
  .gsgl .content .topnews .rilist li{
    list-style: square;
    list-style-position: inside;
    height: 24px;
    font-size: 16px;
    line-height: 24px;
  }
  .gsgl .content .risite{
    width: 300px;
    display: inline-block;
    color: #1569c7;
  }
  .gsgl .content .risite ul{
    padding-top: 20px;
  }
  .gsgl .content .risite ul li{
    height: 40px;
    cursor: pointer;
    text-indent: 2em;
    line-height: 40px;
    font-size: 16px;
    color: #2c3e50;
  }
  .gsgl .content .risite ul li:nth-of-type(1){
    background: url(../assets/homeimgs/link_bg.jpg)
  }
  .gsgl .content .risite ul li:hover{
    background: url(../assets/homeimgs/link_bg.jpg)
  }
  .gsgl .bmlist{
    width: 1300px;
    margin: 60px auto;
  }
  .gsgl .bmlist ul{
    display: flex;
  }
  .gsgl .bmlist ul li{
    flex: 1;
    margin-right: 8px;
  }
  .gsgl .bmlist ul li:last-child{
    margin-right: 0
  }
  .gsgl .bmlist ul li img{
    width: 100%;
    vertical-align: middle
  }
  .gsgl .bmlist ul li div{
    width: 100%;
    height: 36px;
    background: #1569c7;
    text-align: center;
    line-height: 36px;
    font-size: 24px;
    color: #fff
  }
</style>

<style>
.gsgl .content .el-carousel__item img{
  width: 1200px;
}
.gsgl .content .el-carousel__arrow{
  width: 80px;
  height: 80px;
  background: rgba(41,62,106,.6)
}
.gsgl .content .el-carousel__arrow:hover{
    background: rgba(41,62,106,1)

}
.gsgl .content .el-carousel__arrow i{
  font-size: 26px;
}
</style>
