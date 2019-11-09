<template>
  <div id="app">
    <div class="topbar clear">
      <div class="topleft">国家示范性重点培育高职院校————国家示范性骨干高职院校 </div>
      <div class="topright">
        <a href="#" class="topr"><i>&#xe631;</i>电子邮箱</a>
        <a href="#" class="topr"><i>&#xe650;</i>校历</a>
        <a href="#" class="topr"><i>&#xe60a;</i>English</a>
      </div>
    </div>
    <div id="nav" class="clear">
      <div class="logo">
        <router-link to="/" @click="gohome">
          <img src="@/assets/homeimgs/gxcme.jpg" alt="">
        </router-link>
      </div>
      <div class="hfot">
        <div class="hfot-title">广西机电职业技术学院</div>
        <p>GUANGXI TECHNOLOGICAL COLLEGE OF MACHINERY AND ELECTRICITY</p>
      </div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#fff"
        text-color="#2c3e50"
        active-text-color="#3B5998">
        <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
        <el-menu-item index="2" ><router-link to="/jxgc">机械工程系</router-link></el-menu-item>
        <el-menu-item index="3"><router-link to="/dqgc">电气工程系</router-link></el-menu-item>
        <el-menu-item index="4"><router-link to="/gsgl">工商管理系</router-link></el-menu-item>
        <el-submenu index="5">
            <template slot="title">计算机与信息工程系</template>
            <el-menu-item index="5-1" class="el-tow"><router-link to="/jsj">欢迎来到我的网页</router-link></el-menu-item>
            <el-menu-item index="5-2" class="el-tow"><router-link to="/jsj">网络1701的</router-link></el-menu-item>
            <el-menu-item index="5-3" class="el-tow"><router-link to="/jsj">黄祖辉</router-link></el-menu-item>
        </el-submenu>
        <el-menu-item index="6"><router-link to="/qcgc">汽车工程系</router-link></el-menu-item>
        <el-menu-item index="7"><router-link to="/jzgc">建筑工程系</router-link></el-menu-item>
        <el-menu-item index="8"><router-link to="/ysx">艺术系</router-link></el-menu-item>
        <el-menu-item index="9"><router-link to="/rwkx">人文科学系</router-link></el-menu-item>
        <el-submenu index="10">
            <template slot="title">其他</template>
            <el-menu-item index="10-1" class="el-tow"><router-link to="/sxzz">思想政治理论课教学部</router-link></el-menu-item>
            <el-menu-item index="10-2" class="el-tow"><router-link to="/jxjy">继续教育培训中心</router-link></el-menu-item>
            <el-menu-item index="10-3" class="el-tow"><router-link to="/jcjn">基础技能实训中心</router-link></el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    gohome () {
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>
@import url(../src/assets/CSS/defunct.css);
@font-face {
    font-family: 'gxcme';
    src: url('http://img.xunhuiwang.cn/gxcme.eot');
    src:
    url('http://img.xunhuiwang.cn/gxcme.woff') format('woff'),
    url('http://img.xunhuiwang.cn/gxcme.ttf') format('truetype'),
    url('http://img.xunhuiwang.cn/gxcme.svg') format('svg');
    font-weight: normal;
    font-style: normal;
}
@font-face {
  font-family: 'iconfont';  /* project id 1467029 */
  src: url('//at.alicdn.com/t/font_1467029_n5pyoc6464j.eot');
  src: url('//at.alicdn.com/t/font_1467029_n5pyoc6464j.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1467029_n5pyoc6464j.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1467029_n5pyoc6464j.woff') format('woff'),
  url('//at.alicdn.com/t/font_1467029_n5pyoc6464j.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1467029_n5pyoc6464j.svg#iconfont') format('svg');
}
#app {
  min-width: 1620px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav{
  width: 100%;
  height: 61px;
  background: #fff;
  }
  #nav .logo{
    width: 60px;
    height: 60px;
    float: left;
    margin-left: 30px;
  }
  #nav .logo img{
    width: 60px;
  }
  #nav .hfot{
    display: inline-block;
    font-family: gxcme;
    font-size: 26px;
    line-height: 26px;
    margin-top: 10px;
    margin-left: 10px;
  }
  #nav .hfot p{
    font-size: 9.6px;
    line-height: 20px;
    color: #707070;
  }
  #nav .el-menu-demo{
    float: right;
  }
  #nav a, .el-menu--horizontal a, .el-submenu__title a{
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
    width: 100%;
    height: 100%;
    color: #293E6A;
  }
  #nav .el-submenu .el-submenu__title{
    color: #293E6A;
    font-weight: bold;
  }
  .el-menu .el-menu-item{
    text-align: center;
  }
  .el-menu .el-tow{
    border-left: 1px solid #639cf165;
    border-right: 1px solid #639cf165;
  }
  .el-menu .el-menu-item:hover{
    background: #639bf1!important
  }
  #nav .el-menu-item:hover, .el-submenu__title:hover{
    background: #639bf1!important;
  }
  .topbar{
    width: 100%;
    height: 30px;
    background: #293E6A;
    color: #ffffff;
  }
  .topbar .topleft{
    float: left;
    height: 30px;
    line-height: 30px;
    font-size: 15px;
    margin-left: 30px
  }
  .topbar .topright{
    float: right;
    font-family: 'iconfont';
    font-size: 16px;
    font-style: normal;
    height: 30px;

  }
  .topbar .topright a{
    color: #ffffff;
    text-decoration: none;
    line-height: 30px;
    margin-right: 18px;
    display: inline-block;
  }
  .topbar .topright i{
    font-style: normal;
    margin-right: 5px
  }
</style>
