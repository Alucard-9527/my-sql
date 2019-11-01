<template>
  <div class="home">
    <carouselMap class="map"></carouselMap>
    <div class="mainContent clear">
      <div class="ltnew">
      <mainContent titles="机电要闻" icon="&#xe634;" :content1=content1></mainContent>
      <mainContent titles="通知公告" icon="&#xe6fc;" :content1=content1></mainContent>
      <mainContent titles="采购信息" icon="&#xe671;" :content1=content1></mainContent>
      </div>
      <div class="rtnew">
        <div class="login">
          <h3 class="logtitle"><i>&#xe634;</i>登录系统管理</h3>
          <form action="" class="logsystem">
            <div class="user cent">
              <i>&#xe6fc;</i><input type="text" placeholder="用户名" class="centstyle">
            </div>
            <div class="password cent">
              <i>&#xe671;</i><input type="password" placeholder="密码" class="centstyle">
              <div class="errorpass"><a href=""> 忘记密码?</a></div>
            </div>
            <input class="submit" type="submit" value="登录">
          </form>
        </div>
        <div class="specialweb">
          <div class="header-content">
            <i>&#xe634;</i>专题网站
            <div class="more"><a href="javascript:void(0)" title="点击获取更多"><i>&#xe626;</i>更多</a></div>
          </div>
          <div class="imgs">
            <ul>
              <li><img src="@/assets/homeimgs/ddzs.jpg" alt=""></li>
              <li><img src="@/assets/homeimgs/yswz.jpg" alt=""></li>
              <li><img src="@/assets/homeimgs/xyysw.jpg" alt=""></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <foot></foot>
      <a href="#" class="gotop">TOP</a>
  </div>
</template>

<script>
// @ is an alias to /src
import Foot from '@/components/Foot.vue'
import CarouselMap from '@/components/CarouselMap'
import MainContent from '@/components/MainContent'

export default {
  name: 'home',
  components: {
    Foot,
    CarouselMap,
    MainContent
  },
  data(){
    return{
      content1:[
        {news:'【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题',times:'[10-24'},
        {news:'【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题',times:'[10-24'},
        {news:'【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题',times:'[10-24'},
        {news:'【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题',times:'[10-24'},
        {news:'【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题',times:'[10-24'},
        {news:'【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题',times:'[10-24'},
        {news:'【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题',times:'[10-24'},
        {news:'【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题',times:'[10-24'},
      ],
      content2:[
        {news:'【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题',times:'[10-24'},
        {news:'【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题',times:'[10-24'},
        {news:'【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题',times:'[10-24'},
        {news:'【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题',times:'[10-24'},
        {news:'【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题',times:'[10-24'},
        {news:'【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题',times:'[10-24'},
        {news:'【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题',times:'[10-24'},
        {news:'【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题',times:'[10-24'},
      ],
      content3:[
        {news:'【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题',times:'[10-24'},
        {news:'【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题',times:'[10-24'},
        {news:'【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题',times:'[10-24'},
        {news:'【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题',times:'[10-24'},
        {news:'【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题',times:'[10-24'},
        {news:'【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题',times:'[10-24'},
        {news:'【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题',times:'[10-24'},
        {news:'【不忘初心、牢记使命】赖晓桦院长讲授“不忘初心、牢记使命”主题',times:'[10-24'},
      ],

    }
  }

}
</script>
<style scoped>
.home{
  position: relative;
}
  .home .gotop{
    display: block;
    position: fixed;
    right: 50px;
    bottom: 250px;
    width: 50px;
    height: 50px;
    border: 2px solid rgb(4, 42, 104);
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    line-height: 50px;
    text-decoration: none;
    color: rgb(4, 42, 104);
    text-align: center;
    background: #639bf1
  }
  .mainContent{
    width: 1100px;
    margin: 0 auto;
    background: rgb(235, 235, 235)

  }
  .ltnew{
    float: left;
  }
.rtnew{
  float: right;
  width: 444px;
  margin-top: 30px;
 }
  .rtnew .login{
    margin: 8px;
    padding: 10px;
    font-size: 18px;
    border: 2px solid rgb(215, 215, 216);
    border-radius:20px 
  }
  .rtnew .login h3{
    font-size: 26px;
    text-align: center;
  }
  .rtnew .login i{
    font-family: 'iconfont';
    font-style: normal;
  }
  .logsystem .submit{
    border: none;
    background: none;
    display: block;
    width: 120px;
    height: 36px;
    border: 1px solid rgb(4, 42, 104);
    background: #639bf1;;
    border-radius: 10px;
    cursor: pointer;
    margin: 10px auto;
    outline: none;
  }
  .logsystem .submit:hover{
    background: rgb(30,144,255)
  }
  .logsystem .cent{
    height: 40px;
    width: 360px;
    margin: 0 auto;
  }
  .logsystem .cent .centstyle{
    padding-left: 10px
  }
  .logsystem .password{
    position: relative;
  }
  .logsystem .password .errorpass{
    position: absolute;
    right: 30px;
    top: 8px;
  }
  .logsystem .password .errorpass a{
    color: rgb(179, 96, 96);
    font-size: 14px;

  }
  .logsystem .cent>input{
    border: 1px solid #cad6eb;
    border-radius: 5px;
  }
  .logsystem .cent i{
    margin-right: 10px;
    font-size: 24px;
  }
.specialweb{
  width: 444px;
  margin-top: 40px;
}
.header-content{
  width: 444px;
  height: 30px;
  font-size: 22px;
  line-height: 22px;
  color: rgb(4, 42, 104);
  border-bottom: 5px solid;
  border-image: linear-gradient( to left, #00a2ff, #1131a9) 30 30;
}
.header-content i{
  font-size: 30px;
  font-family: 'iconfont';
  font-style: normal;
  color: rgb(4, 42, 104);
}
.header-content .more{
  float: right;
  font-size: 20px
}
.header-content .more a{
  color: rgb(4, 42, 104);
}
.header-content .more i{
  font-size: 20px
}
.imgs{
  margin: 20px auto;
}
.imgs ul li{
  width: 420px;
  height: 200px;
  margin: 10px auto 10px;
  vertical-align: middle;

}
.imgs ul li img{
  width: 420px;
  display: block;
  float: left;
}
</style>