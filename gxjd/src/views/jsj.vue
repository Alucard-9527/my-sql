<template>
  <div class="jsj">
    <div class="jsjbj">
      <div class="rotate">
        <div class="sphere">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="sphere">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="sphere">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div class="newscontent clear">
      <div class="newsdt flo">
        <div class="toptitlte">
          <h3>新闻动态</h3>
          <a href="#">MORE</a>
          <a href="#">...</a>
        </div>
        <div class="block">
          <el-carousel trigger="click" height="320px">
            <el-carousel-item v-for="(item, index) in imgs" :key="index">
              <img :src="item.load" :title="item.name">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="news">
          <ul>
            <li>
              <div class="newtime">
                <p>01</p>
                <p>10月</p>
              </div>
              <a href="#">【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题</a>
            </li>
            <li>
              <div class="newtime">
                <p>01</p>
                <p>10月</p>
              </div>
              <a href="#">【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题</a>
            </li>
            <li>
              <div class="newtime">
                  <p>01</p>
                  <p>10月</p>
              </div>
              <a href="#">【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题</a>
              </li>
            <li>
              <div class="newtime">
                <p>01</p>
                <p>10月</p>
              </div>
              <a href="#">【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题</a>
            </li>
            <li>
              <div class="newtime">
                <p>01</p>
                <p>10月</p>
              </div>
              <a href="#">【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="newsgg flo">
        <div class="toptitlte">
          <h3>新闻公告</h3>
          <a href="#">MORE</a>
          <a href="#">...</a>
        </div>
        <div class="newrt">
          <ul>
            <li><i>&#xe60a;</i><a href="#">【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题</a></li>
            <li><i>&#xe60a;</i><a href="#">【不长讲授“不忘初心、牢记使命”主题忘初心、牢记使命”</a></li>
            <li><i>&#xe60a;</i><a href="#">Maxime 【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题</a></li>
            <li><i>&#xe60a;</i><a href="#">【不忘初心、牢记】赖晓桦院长讲授“不忘初心、牢记使命”主题us ut ea ullam iste.</a></li>
            <li><i>&#xe60a;</i><a href="#">Incidunt fugiat perferendi【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题corporis eius.</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="lntroduction">
      <div class="title">
        <img src="../assets/homeimgs/zyjs_title1.png" alt="">
      </div>
      <div class="lists">
        <ul>
          <li>
            <a href="">
              <i>&#xe60a;</i>
              <div>计算机应用技术专业</div>
            </a>
          </li>
          <li>
            <a href="">
              <i>&#xe60a;</i>
              <div>软件技术专业</div>
            </a>
          </li>
          <li>
            <a href="">
              <i>&#xe60a;</i>
              <div>计算机网络技术专业</div>
            </a>
          </li>
          <li>
            <a href="">
              <i>&#xe60a;</i>
              <div>物联网应用技术专业</div>
            </a>
          </li>
          <li>
            <a href="">
              <i>&#xe60a;</i>
              <div>计算机信息管理-网站设计与维护专业</div>
            </a>
          </li>
          <li>
            <a href="">
              <i>&#xe60a;</i>
              <div>软件技术专业（数据智能处理）</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="listimg">
      <div class="container">
        <div class="box">
          <div class="imgbox">
            <img src="../assets/homeimgs/jxgc4.png" alt="">
          </div>
          <div class="content">
            <h2>计算机应用技术专业</h2>
            <p>计算机与信息工程系是学院成立最早的系部之一，形成了以应用为特色，软、硬件并重，教学和技术开发兼顾的办学风格。现有计算机应用技术、软件技术、计算机信息管理、计算机网络技术、图文信息技术、物联网应用技术等5个专业，在校生1212多人，其中计算机应用技术为自治区优质专业。</p>
            <a href="#">更多...</a>
          </div>
        </div>
          <div class="box">
            <div class="imgbox">
              <img src="../assets/homeimgs/jxgc2.png" alt="">
            </div>
            <div class="content">
              <h2>软件技术专业</h2>
              <p>计算机与信息工程系是学院成立最早的系部之一，形成了以应用为特色，软、硬件并重，教学和技术开发兼顾的办学风格。现有计算机应用技术、软件技术、计算机信息管理、计算机网络技术、图文信息技术、物联网应用技术等5个专业，在校生1212多人，其中计算机应用技术为自治区优质专业。</p>
              <a href="#">更多...</a>
            </div>
        </div>
          <div class="box">
            <div class="imgbox">
              <img src="../assets/homeimgs/jxgc3.jpg" alt="">
            </div>
            <div class="content">
              <h2>计算机网络技术专业</h2>
              <p>计算机与信息工程系是学院成立最早的系部之一，形成了以应用为特色，软、硬件并重，教学和技术开发兼顾的办学风格。现有计算机应用技术、软件技术、计算机信息管理、计算机网络技术、图文信息技术、物联网应用技术等5个专业，在校生1212多人，其中计算机应用技术为自治区优质专业。</p>
              <a href="#">更多...</a>
            </div>
        </div>
          <div class="box">
            <div class="imgbox">
              <img src="../assets/homeimgs/jxgc4.png" alt="">
            </div>
            <div class="content">
              <h2>物联网应用技术专业</h2>
              <p>计算机与信息工程系是学院成立最早的系部之一，形成了以应用为特色，软、硬件并重，教学和技术开发兼顾的办学风格。现有计算机应用技术、软件技术、计算机信息管理、计算机网络技术、图文信息技术、物联网应用技术等5个专业，在校生1212多人，其中计算机应用技术为自治区优质专业。</p>
              <a href="#">更多...</a>
            </div>
          </div>
      </div>
    </div>
    <footsc></footsc>
  </div>
</template>
<script>
import Footsc from '@/components/Foot-sc.vue'

export default {
  components:{
    Footsc
  },
  data(){
    return{
        imgs: [
          { load: require('../assets/imgs/2.jpg'), name: '图一' },
          { load: require('../assets/imgs/3.jpg'), name: '图二' },
          { load: require('../assets/imgs/4.jpg'), name: '图三' },
          { load: require('../assets/imgs/5.jpg'), name: '图四' }
      ]
    }
  }
}
</script>
<style scoped>
.jsj{
  min-width: 1200px; 
  }
  .jsjbj{
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -10;
    }
  .jsj .rotate{
    position: absolute;
    top: calc(50% - 200px);
    left: calc(50% - 200px);
    width: 400px;
    height: 400px;
    transform-style: preserve-3d;
    animation:  rotate 20s linear infinite;
    zoom: 4;
    }
  @keyframes rotate{
    0%{
      transform: rotateX(0) rotateY(0)
    }
    100%{
      transform: rotateX(360deg) rotateY(360deg)
    }
  }
  .jsj .rotate .sphere{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }
  .jsj .rotate .sphere:nth-child(2){
    transform: rotate(90deg)
  }
  .jsj .rotate .sphere:nth-child(3){
    transform: rotate(120deg)
  }
  .jsj .rotate .sphere span{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    background: radial-gradient(#ccc,#fff);
    border-radius: 50%;
  }
  .jsj .rotate .sphere span:nth-child(1){
    transform:rotateY(0deg);
  }
  .jsj .rotate .sphere span:nth-child(2){
    transform:rotateY(30deg);
  }
  .jsj .rotate .sphere span:nth-child(3){
    transform:rotateY(60deg);
  }
  .jsj .rotate .sphere span:nth-child(4){
    transform:rotateY(90deg);
  }
  .jsj .rotate .sphere span:nth-child(5){
    transform:rotateY(120deg);
  }
  .jsj .rotate .sphere span:nth-child(6){
    transform:rotateY(150deg);
  }
 .listimg{
  width: 1400px;
  margin: 20px auto;
  margin-top: 0;
 }
.container{
  position: relative;
  width: 1400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  }
  .container .box{
    position: relative;
    width: 300px;
    height: 480px;
    margin: 20px 0;
    box-sizing: border-box;
    border-radius: 10px;
  }
  .container .box .imgbox{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    clip-path: circle(410px at center 100px);
    transition: .8s
  }
  .container .box:hover .imgbox{
    clip-path: circle(100px at center 100px)
  }
  .container .box .imgbox img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .container .box .content{
    position: absolute;
    top: 45%;
    left: 0;
    width: 100%;
    height: 55%;
    padding: 10px;
    box-sizing: border-box;
    display: none;
    font-size: 16px;
    color: rgb(41,62,106);
  }
  .container .box:hover .content{
    display: block;
  }
  .container .box .content h2{
    font-size: 26px;
    text-align: center;
    line-height: 26px
  }
  .container .box .content p{
    text-indent: 2em;
  }
  .container .box .content a{
    color: rgb(41,62,106);
    text-decoration: none;
    float: right;
    bottom: 0;
  }
.newscontent{
    width: 1200px;
    margin: 0 auto;
    padding-top: 40px;
    margin-bottom: 40px; 
  }
  .newscontent .newsdt .block{
    width: 400px;
    float: left
  }
  .newscontent .toptitlte a{
      text-decoration: none;
      color: rgb(106, 41, 41);
      font-size: 16px;
    }
    .newscontent .toptitlte a:nth-child(3){
      font-size: 26px;
      font-weight: bolder
    }
    .newscontent .toptitlte h3{
      font-size: 26px;
      display: inline-block;
      vertical-align: 2px;
      margin-right: 20px;
    }
    .newscontent .flo{
      float: left;
    }
    .newscontent .newsdt{
      width: 800px;
    }
    .newscontent .newsgg{
      width: 400px;
    }
  .el-carousel__item img {
    width: 400px;
    height: 320px;
  }
  .newscontent .newsdt .news{
    width: 350px;
    float: left;
    margin-left: 20px;
  }
  .newscontent .newsdt .news ul li{
    margin: 10px 0;
    height: 50px;
  }
  .newscontent .newsdt .news ul li .newtime{
    width: 70px;
    height: 50px;
    line-height: 25px;
    text-align: center;
    float: left;
    margin-right: 10px;
  }
  .newscontent .newsdt .news ul li .newtime p:nth-child(1){
    background: rgb(154, 192, 214,.7);
  }
    .newscontent .newsdt .news ul li .newtime p:nth-child(2){
    background: rgba(16,75,169,.7);
  }
  .newscontent .newsdt .news ul li a{
    color: rgb(41,62,106);
    text-decoration: none;
    display: block;
    line-height: 25px;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .newscontent .newsgg .newrt ul li{
    margin: 10px 0;
  }
  .newscontent .newsgg .newrt ul li i{
    font-family: 'iconfont';
    font-style: normal;
    float: left;
    font-size: 26px;
    line-height: 50px;
    margin-right: 15px; 
  }
  .newscontent .newsgg .newrt ul li a{
    color: rgb(41,62,106);
    text-decoration: none;
    display: inline-block;
    height: 50px;
    line-height: 25px;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
.lntroduction{
  width: 1200px;
  margin: 60px auto;
  border-left: 8px solid rgb(173,200,215);
  border-right: 8px solid rgb(173,200,215);
  box-sizing: border-box;
  padding: 40px 0;
  border-radius: 20px;
}
.lntroduction .title{
  text-align: center
}
.lntroduction .lists ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.lntroduction .lists ul li{
  width: 300px;
  height: 175px;
  text-align: center;
}
.lntroduction .lists ul li a {
  color: rgb(41,62,106);
  text-decoration: none;
}
.lntroduction .lists ul li a i{
  font-family: 'iconfont';
  font-style: normal;
  font-size: 56px;
  display: block;
  width: 60%;
  margin: 0 auto;
}
.lntroduction .lists ul li a i:hover{
  transform-style: preserve-3d;
  animation: ico 3s infinite alternate;
  color: rgb(51,148,223)
}
.lntroduction .lists ul li a div{
  width: 60%;
  height: 65px;
  font-size: 16px;
  margin: 0 auto;
  padding-top: 15px;
  font-weight: bold
}
.lntroduction .lists ul li:hover a div{
  color: rgb(254,127,37)
}
@keyframes ico{
      0%{
      transform: rotateY(0)
    }
    100%{
      transform: rotateY(360deg)
    }
}
</style>
<style>
.newscontent .newsdt .block .el-carousel__indicator.is-active button{
    background: rgb(41,62,106)
  }
  .newscontent .newsdt .block .el-carousel__arrow{
    background: rgb(41,62,106)
  }
  .newscontent .newsdt .block .el-carousel__arrow:hover{
    background: rgb(16,75,169)
  }
  .newscontent .newsdt .block .el-carousel__indicator .el-carousel__button{
    height: 4px;
    border-radius:4px 
  }
</style>