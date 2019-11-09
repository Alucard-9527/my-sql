<template>
  <div class="foot-sc">
      <div class="footer clear">
          <div class="blog"><img src="../assets/homeimgs/logo.jpg" alt=""></div>
          <div class="contents">
              <ul>
                  <li>地址：广西南宁大学东路101号</li>
                  <li>电话：+86-771-3249900（院办） 3243821 3278454（招生就业办）</li>
                  <li>邮箱：邮编：530007</li>
              </ul>
          </div>
          <div class="rtimg">
              <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Foot-sc',
}
</script>

<style scoped>
.foot-sc{
    width: 100%;
    height: 110px;
    background: rgb(16,75,169);
}
.foot-sc .footer{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
}
.footer .blog{
    float: left;
    width: 110px;
    height: 80px;
    margin-top: 20px;
    text-align: center;
    border-right: 1px solid #fff
}
.footer .blog img{
    height: 80px;
    vertical-align: middle;
}
.footer .contents{
    float: left;
    color: #fff;
    font-size: 14px;
    margin-top: 28px;
    margin-left:25px
}
.footer .rtimg{
    width: 300px;
    float: right;
}
.footer .rtimg ul li{
    width: 0px;
    height: 20px;
    background: #c9c99c;
    margin-top:10px;
    margin-bottom: 10px;
    animation:  rotate 5s linear 1s infinite alternate;
}
  @keyframes rotate{
    0%{
      width: 0px;background: #00a2ff
    }
    100%{
      width: 300px;background: #1131a9;
    }
  }
.footer .rtimg ul li:nth-child(1){
    margin-top: 0;
    animation-delay: 0.5s
}
.footer .rtimg ul li:nth-child(2){
    animation-delay: as
}
.footer .rtimg ul li:nth-child(3){
    animation-delay: 1.5s
}
.footer .rtimg ul li:nth-child(4){
    margin-bottom: 0px;
    animation-delay: 2s
}
</style>
