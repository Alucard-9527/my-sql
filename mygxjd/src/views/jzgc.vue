<template>
  <div class="jzgc">
    <div class="topnev">
      <div class="topimg">
        <img src="../assets/homeimgs/IMG_012.jpg" alt="">
      </div>
      <div class="nevs">
        <ul class="titlenve">
          <li><a href="">学院状况</a></li>
          <li><a href="">党建思政</a></li>
          <li><a href="">建工要闻</a></li>
          <li><a href="">专业介绍</a></li>
          <li><a href="">招生就业</a></li>
          <li><a href="">网站公告</a></li>
        </ul>
      </div>
      <div class="nevcontent clear">
        <div class="ltnew">
          <div class="yzjy">
            <img src="../assets/homeimgs/IMG_1086.jpg" alt="">
          </div>
          <div class="zyjj">
            <h2>专业简介</h2>
            <ul>
              <li><a href="">建设工程管理</a></li>
              <li><a href="">建筑装饰工程技术</a></li>
              <li><a href="">工程造价</a></li>
              <li><a href="">房地产经营与管理</a></li>
              <li><a href="">物业管理</a></li>
              <li><a href="">建筑工程技术</a></li>
              <li><a href="">建筑设计
                </a></li>
            </ul>
          </div>
        </div>
        <div class="rtnew">
          <div class="main-list">
            <h2>建工要闻</h2>
            <ul >
              <li><a href="">Lorem ipsum dolor sit amet consectetur.<span></span></a></li>
              <li><a href="">Enim quod repellat itaque dolore necessitatibus?<span></span></a></li>
              <li><a href="">Excepturi voluptatibus blanditiis ducimus nulla sed!<span></span></a></li>
              <li><a href="">Fugiat voluptas a vero nam porro?<span></span></a></li>
              <li><a href="">Suscipit laudantium vero illum blanditiis velit?<span></span></a></li>
              <li><a href="">Iste molestiae id vel. Explicabo, nisi.<span></span></a></li>
              <li><a class="bmnav" href="">更多。。。</a></li>
            </ul>
          </div>
          <div class="main-list">
            <h2>建工要闻</h2>
            <ul >
              <li><a href="">Lorem ipsum dolor sit amet consectetur.<span></span></a></li>
              <li><a href="">Enim quod repellat itaque dolore necessitatibus?<span></span></a></li>
              <li><a href="">Excepturi voluptatibus blanditiis ducimus nulla sed!<span></span></a></li>
              <li><a href="">Fugiat voluptas a vero nam porro?<span></span></a></li>
              <li><a href="">Suscipit laudantium vero illum blanditiis velit?<span></span></a></li>
              <li><a href="">Iste molestiae id vel. Explicabo, nisi.<span></span></a></li>
              <li><a class="bmnav" href="">更多。。。</a></li>
            </ul>
          </div>
          <div class="main-list">
            <h2>建工要闻</h2>
            <ul >
              <li><a href="">Lorem ipsum dolor sit amet consectetur.<span></span></a></li>
              <li><a href="">Enim quod repellat itaque dolore necessitatibus?<span></span></a></li>
              <li><a href="">Excepturi voluptatibus blanditiis ducimus nulla sed!<span></span></a></li>
              <li><a href="">Fugiat voluptas a vero nam porro?<span></span></a></li>
              <li><a href="">Suscipit laudantium vero illum blanditiis velit?<span></span></a></li>
              <li><a href="">Iste molestiae id vel. Explicabo, nisi.<span></span></a></li>
              <li><a class="bmnav" href="">更多。。。</a></li>
            </ul>
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
}
</script>
<style scoped>
.jzgc .topnev{
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 40px;
  }
  .jzgc .topnev .topimg{
    height: 240px;;
    position: relative;
    overflow: hidden;
  }
  .jzgc .topnev .topimg img{
    width: 100%;
    position: absolute;
    top: -140px;
  }
.jzgc .topnev .nevs{
  height: 50px;
  background: linear-gradient(to left,#56a0de,#1774de);
  line-height: 50px;
  text-align: center;
  font-size: 22px;
  margin-bottom:20px; 
  }
  .jzgc .topnev .nevs .titlenve{
    display: flex;
    box-shadow: 4px 6px 8px 1px rgb(141, 141, 141);
  }
  .jzgc .topnev .nevs .titlenve li{
    flex: 1;
  }
  .jzgc .topnev .nevs .titlenve li a{
    text-decoration: none;
    color: rgba(255, 255, 255, 0.6);
  }
  .jzgc .topnev .nevs .titlenve li:hover{
    background-color: #56a0de;
  }
.jzgc .topnev .nevcontent .ltnew{
  width: 470px;
  float: left;
  }
  .jzgc .topnev .nevcontent .ltnew .yzjy{
    position: relative;
  }
  .jzgc .topnev .nevcontent .ltnew .yzjy::after{
    content: "院长寄语";
    font-size: 26px;
    line-height: 36px;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    display: block;
    height: 36px;
    text-align: right;
    clear: both;
    position: absolute;
    width: 100%;
    right: 0px;
    bottom: 0px;
    text-align: center;
    letter-spacing: 8px
  }
  .jzgc .topnev .nevcontent .ltnew .yzjy img{
    width: 470px;
    vertical-align: middle;
  }
  .jzgc .topnev .nevcontent .ltnew .zyjj{
    padding-top: 40px;
    text-align: center;
    color: #fff;
  }
  .jzgc .topnev .nevcontent .ltnew .zyjj h2{
    font-size: 32px;
    line-height: 80px;
    height: 80px;
    background: linear-gradient(to left,rgb(51,103,153),rgb(20,125,129))
  }
  .jzgc .topnev .nevcontent .ltnew .zyjj ul{
    margin: 0 auto;
    box-sizing: border-box;
    border: 1px solid rgb(177, 177, 177);
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top: none;
    padding-top: 20px;
  }
  .jzgc .topnev .nevcontent .ltnew .zyjj ul li{
    height: 58px;
    line-height: 58px;
    background: linear-gradient(to left,rgb(51,103,153),rgb(20,125,129));
    margin: 20px;
    font-size: 24px;
    box-shadow: 2px 2px 1px 1px #56a0de;
  }
  .jzgc .topnev .nevcontent .ltnew .zyjj ul li:hover{
      box-shadow: 2px 2px 1px 1px #1774de
  }
  .jzgc .topnev .nevcontent .ltnew .zyjj ul li:nth-of-type(1){
    margin-top: 0;
  }
  .jzgc .topnev .nevcontent .ltnew .zyjj ul li a{
    color: #fff;
    text-decoration: none;
  }
.jzgc .topnev .nevcontent .rtnew{
  float: right;
  width: 700px;
}
.jzgc .topnev .nevcontent .rtnew .main-list{
  margin: 20px 0;
}
.jzgc .topnev .nevcontent .rtnew .main-list:nth-child(1){
  margin-top: 0;
}
.jzgc .topnev .nevcontent .rtnew .main-list h2{
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 32px;
  text-align: center;
  background: url(../assets/homeimgs/new_list_title_bg.jpg) 0px 0px;
  color: #fff;
}
.jzgc .topnev .nevcontent .rtnew .main-list:nth-child(2) h2{
  background: url(../assets/homeimgs/new_list_title_bg.jpg) 0px 60px;
}
.jzgc .topnev .nevcontent .rtnew .main-list:nth-child(3) h2{
  background: url(../assets/homeimgs/new_list_title_bg.jpg) 0px 126px;
}
.jzgc .topnev .nevcontent .rtnew .main-list ul{
  border: 1px solid rgb(180, 180, 180,.6);
}
.jzgc .topnev .nevcontent .rtnew .main-list ul li{
  height: 37px;
  box-sizing: border-box;
  border-bottom: 1px dashed rgb(202, 202, 202);
  line-height: 37px;
  font-size: 16px;
  list-style:inside;
  padding-left:10px; 
  margin-bottom: 10px;
}
.jzgc .topnev .nevcontent .rtnew .main-list ul li:last-child{
  border: none;
  list-style: none;
  margin: 0;
}
.jzgc .topnev .nevcontent .rtnew .main-list a{
  text-decoration: none;
  color: rgb(41,62,106)
}
.jzgc .topnev .nevcontent .rtnew .main-list .bmnav{
  float:right;

}
.jzgc .topnev .nevcontent .rtnew .main-list .bmnav:hover{
  color: rgb(255, 38, 0);
}
</style>