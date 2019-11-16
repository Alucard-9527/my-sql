<template>
    <div class="foot">
        <div class="footbar">
            <div class="f-box clear">
                <div class="f-box-1">
                    <div class="f-box-l">
                        <img src="@/assets/homeimgs/logo.jpg" alt="">
                        <p>GXJD</p>
                    </div>
                    <ul class="f-box-info clear">
                        <li><a href="#">书记信箱</a>|<a href="#">院长信箱</a></li>
                        <li><a href="#">中国高职高专教育网</a></li>
                        <li><a href="#">广西招生考试网</a></li>
                        <li><a href="#">我要举报</a></li>
                    </ul>
                    <ul class="f-box-info clear">
                        <li><a href="#">中华人民共和国教育部</a></li>
                        <li><a href="#">广西壮族自治区教育厅</a></li>
                        <li><a href="#">广西壮族自治区工业和信息化厅</a></li>
                        <li><a href="#">教育部全国青少年普法网</a></li>
                    </ul>
                </div>

                <div class="f-box-wx clear">
                    <div class="wx">
                        <img src="@/assets/homeimgs/ws.jpg" alt="">
                        <p>学院微信</p>
                    </div>
                    <div class="wx">
                        <img src="@/assets/homeimgs/zs.jpg" alt="">
                        <p>招生微信</p>
                    </div>
                    <div class="wxs">
                        <a href="#">
                            <img src="@/assets/homeimgs/baicp.gif" alt="">
                        </a>
                        <a href="#">
                            <img src="@/assets/homeimgs/cyberhome.gif" alt="">
                        </a>
                    </div>
                    <a href="#" class="dwlog">
                        <img src="@/assets/homeimgs/blue.png" alt="">
                    </a>
                </div>
            </div>
        </div>
        <div class="footbox">
            Copyright © 2019 GXCME. All rights reserved | 地址：广西南宁大学东路101号 | 邮编：530007 | 桂ICP备05000952号
            <p>电话：+86-771-3249900（院办） 3243821 3278454（招生就业办）</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Foot',
  props: {}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .foot{
        width: 100%;
        min-width: 980px;
        height: 204px;
    }
    .foot .footbar{
        height: 160px;
        background: #114ba9;
    }
    .footbar .f-box{
        width: 1140px;
        margin: 0 auto;
        color: #fff;
        font-size: 22px;
        padding-top:30px ;
    }
    .footbar .f-box img{
        width: 88px;
        vertical-align: middle;
    }
    .footbar .f-box p{
        width: 88px;
        height: 22px;
        line-height: 22px;
        text-align: center;
        display: block;
    }
    .footbar .f-box .f-box-1{
        width: 660px;
        height: 118px;
        float: left;
    }
    .f-box-l{
        width: 88px;
        height: 118px;
        float: left;
    }
    .foot .footbox{
        height:44px;
        background:rgb(4, 42, 104);
    }
    .f-box-1 .f-box-info{
        float: left;
        font-size:15px ;
        width: 220px;
        height: 108px;
        margin-left:60px ;
        text-align: center;
    }
    .f-box-1 .f-box-info li{
        display: inline-block;
        height: 26px;
        line-height: 26px;
        text-align: center;
    }
    .f-box-1 .f-box-info a{
        color: #fff;
        text-decoration: none;
    }
    .f-box-wx .wx{
        float: right;
        font-size: 16px;
        margin-left: 20px;
    }
    .f-box-wx .wxs{
        float: right;
        width: 88px;
        height: 88px;
    }
    .f-box-wx .wxs a{
        display: block;
        margin-bottom: 10px;
    }
    .dwlog{
        float: right;
    }
    .footbox{
        color: #fff;
        text-align: center;
        padding-top: 8px
    }
</style>
