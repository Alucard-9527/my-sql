<template>
  <div class="ysx">
    <div class="maincontent">
    <el-carousel indicator-position="none" height="500px">
      <el-carousel-item v-for="(item, index) in imgs" :key="index">
        <img :src="item.load" :alt="item.name">
      </el-carousel-item>
    </el-carousel>
    <div class="row1 clear">
      <div class="title">
        <h2>学院要闻</h2>
        <a href="">more...</a>
      </div>
      <ul>
        <li>
          <a href="">
            <img src="../assets/homeimgs/IMG_012.jpg" alt="">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sequi.</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="../assets/homeimgs/IMG_012.jpg" alt="">
            <p>Lorem ipsum dolor sit amet consectetur amet consecteturadipisicing elit. Laborum, sequi.</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="../assets/homeimgs/IMG_012.jpg" alt="">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sequi.</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="row2">
      <div class="introduce">
        <div class="titles">
          <h2>招生专业介绍</h2>
          <a href="">more...</a>
        </div>
        <ul>
          <li><a href=""><img src="../assets/homeimgs/IMG_012.jpg" alt=""><p>Lorem ipsum dolor sit. Lorem ipsum dolor sit amet.</p> </a></li>
          <li><a href=""><img src="../assets/homeimgs/IMG_012.jpg" alt=""><p>Lorem Lorem, ipsum. ipsum dolor sit.</p> </a></li>
          <li><a href=""><img src="../assets/homeimgs/IMG_012.jpg" alt=""><p>Lorem ipsum dolor sit.</p> </a></li>
          <li><a href=""><img src="../assets/homeimgs/IMG_012.jpg" alt=""><p>Lorem Lorem, ipsum. ipsum dolor sit.</p> </a></li>
          <li><a href=""><img src="../assets/homeimgs/IMG_012.jpg" alt=""><p>Lorem ipsum dolor sit.</p> </a></li>
          <li><a href=""><img src="../assets/homeimgs/IMG_012.jpg" alt=""><p>Lorem ipsum Lorem, ipsum dolor. dolor sit.</p> </a></li>
        </ul>
      </div>
      <div class="introduce">
        <div class="titles">
          <h2>咨询快递|招生咨询</h2>
          <a href="">more...</a>
        </div>
        <ul>
          <li><a href=""><img src="../assets/homeimgs/IMG_012.jpg" alt=""><span>2019/09/13</span><p>Lorem, loressipsum dolor sit amet consectetur adipisicing elit.</p> </a></li>
          <li><a href=""><img src="../assets/homeimgs/IMG_012.jpg" alt=""><span>2019/09/13</span><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p> </a></li>
          <li><a href=""><img src="../assets/homeimgs/IMG_012.jpg" alt=""><span>2019/09/13</span><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p> </a></li>
          <li><a href=""><img src="../assets/homeimgs/IMG_012.jpg" alt=""><span>2019/09/13</span><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p> </a></li>
          <li><a href=""><img src="../assets/homeimgs/IMG_012.jpg" alt=""><span>2019/09/13</span><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p> </a></li>
          <li><a href=""><img src="../assets/homeimgs/IMG_012.jpg" alt=""><span>2019/09/13</span><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p> </a></li>
        </ul>
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
          { load: require('../assets/homeimgs/IMG_012.jpg'), name: '图一' },
          { load: require('../assets/homeimgs/IMG_013.jpg'), name: '图二' },
          { load: require('../assets/homeimgs/IMG_014.jpg'), name: '图三' }
      ]
    }
  }
}
</script>
<style scoped>
  .ysx .maincontent{
    width: 1200px;
    margin: 0 auto;
  }
.ysx .maincontent .row1{
  margin-top: 60px;
}
.ysx .maincontent .row1 .title{
    padding-left: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 24px;
  }
  .ysx .maincontent .row1 .title h2{
    float: left;
    margin-right: 15px;
  }
  .ysx .maincontent .row1 .title a{
    float: left;
    text-decoration: none;
    color:rgb(41,62,106)
  }
  .ysx .maincontent .row1 .title a:hover{
    color: rgb(255, 30, 0)
  }
  .ysx .maincontent .row1 ul{
    display: flex;
  }
  .ysx .maincontent .row1 ul li{
    flex: 1;
    text-align: center;
    margin: 0 15px; 
    font-size: 16px;
    color:rgb(41,62,106)
  }
  .ysx .maincontent .row1 ul li a{
    text-decoration: none;
    color:rgb(41,62,106)
  }
  .ysx .maincontent .row1 ul li a img{
    width: 320px;
  }
  .ysx .maincontent .row2{
    margin: 60px 0;
  }
  .ysx .maincontent .row2 .introduce{
    padding:60px 0;
    background: rgb(191,31,55)
    }
  .ysx .maincontent .row2 .introduce:last-child img{
    width: 100%
  }
  .ysx .maincontent .row2 .introduce:last-child{
    background: rgb(41,51,82)
  }
  .ysx .maincontent .row2 .introduce .titles{
    height: 36px;
    line-height: 36px;
    padding-left: 28px;
    color: #fff;
    margin-bottom: 10px;
  }
  .ysx .maincontent .row2 .introduce .titles h2{
    font-size: 26px;
    display: inline-block;
    margin-right: 15px;
  }
  .ysx .maincontent .row2 .introduce .titles a{
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    vertical-align: -3px;
  }
  .ysx .maincontent .row2 .introduce .titles a:hover{
    color: rgb(0, 162, 255)
  }
  .ysx .maincontent .row2 .introduce ul{
    display: flex;
    padding: 0 20px;
  }
  .ysx .maincontent .row2 .introduce ul li{
    text-align: center;
    flex: 1;
    margin:0  10px;
    height: 175px;
    background-color: #fff;
  }
  .ysx .maincontent .row2 .introduce:last-child ul li{
    height: 220px;
  }
  .ysx .maincontent .row2 .introduce ul li:hover{
    box-shadow:  0 4px 10px 2px rgb(85, 81, 81); 
  }
  .ysx .maincontent .row2 .introduce ul li a{
    color: rgb(53, 77, 129);
    text-decoration: none;
    font-size: 14px;
    display: block;
    width: 100%;
  }
    .ysx .maincontent .row2 .introduce ul li a:hover{
      color: #E97B1B
    }
  .ysx .maincontent .row2 .introduce ul li a img{
      width: 155px;
      height: 104px;
      vertical-align: middle;
  }
  .ysx .maincontent .row2 .introduce:last-child ul li a img{
      margin-bottom: 18px;
  }
  .ysx .maincontent .row2 .introduce ul li a p{
    padding: 0 8px;
    margin-top: 20px;
    border-top: 1px solid #c9c9cc;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>

<style>
.ysx .maincontent .el-carousel__item img{
  width: 1200px;
}
.ysx .maincontent .el-carousel__arrow{
  width: 60px;
  height: 60px;
  background: rgba(109, 132, 184, 0.6)
}
.ysx .maincontent .el-carousel__arrow:hover{
    background: rgba(109, 132, 184, 1)
}
.ysx .maincontent .el-carousel__arrow i{
  font-size: 26px;
}
</style>