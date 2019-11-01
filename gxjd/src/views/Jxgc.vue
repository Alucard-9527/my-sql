<template>
  <div class="jxgc">
    <div class="Cmap clear">
        <div class="block">
          <el-carousel trigger="click" height="300px">
            <el-carousel-item v-for="(item,index) in imgs" :key="index">
              <img :src="item.load" :alt="item.name">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="Introduction">
          <h2>机械工程系介绍</h2>
          <p>机械工程系设有焊接技术及自动化、数控技术、模具设计与制造、机械设计与制造、机械制造与自动化、机电设备维修与管理、机电设备维修与管理（工程机械维修方向）等7个专业（方向）。其中，全国职业院校装备制造类示范专业点1个、国家级教改试点专业2 个、自治区级教改试点专业1 个、自治区优质专业4 个、国家高职示范建设项目重点培育院校重点建设专业2 个、自治区示范特色专业及实训基地2 个、国家骨干院校重点建设专业2 个。在校生2000余人。</p>
          <p>  机械工程系拥有素质过硬、专兼结合、德技双馨的“双师结构”教学团队，有研究生学历或硕士学位者35人，教授8人，副教授24 人，讲师25 人，双师型教师25人，广西教学名师2 人，广西“五一劳动奖章”获得者4人，广西技术能手8 人、广西“五四青年奖章”获得者和“广西技能大奖”获得者各1 人，师资力量雄厚。</p>
          <p>机械工程系建有现代制造技术中心、焊接技术中心、机电设备维修技术中心、CAD 技术中心、机械基础技术中心等集教学、生产、技能培训为一体的校内实训基地，设有国家职业技能鉴定所，具有焊接、数控车、数控铣、加工中心、电加工机床等职业资格的培训和鉴定资格。在广西汽车集团有限公司等区内外企业建有稳定的校外实习基地，与多家企业签订订单人才培养协议，校企资源共享、互惠双赢。</p>
          <p>机械工程系建有现代制造技术中心、焊接技术中心、机电设备维修技术中心、CAD  机械筑工程系奉行“尚德务实、求真拓新、融入企业、服务社会”的宗旨，不断创新教育手段，不断调整、优化人才培养方案，突出学生职业技能训练，切实提高专业建设水平和人才培养质量，让行业认可、企业欢迎、学生受益、家长满意。</p>
          <p>机械工程系奉行“尚德务实、求真拓新、融入企业、服务社会”的宗旨，不断调整、优化人才培养方案，注重培养学生的综合能力，突出学生职业技能训练，培养学生多次在国际级、国家级、自治区级重要技能大赛中创造佳绩。毕业生就业率连续十五年保持在90%以上，就业地域遍及全国各地，供不应求。</p>
        </div>
    </div>
    <div class="teacher">
      <h2>师资队伍</h2>
      <div class="teacherimgs">
        <img src="../assets/homeimgs/jxgc1.jpg" alt="">
        <img src="../assets/homeimgs/jxgc2.png" alt="">
        <img src="../assets/homeimgs/jxgc3.jpg" alt="">
        <img src="../assets/homeimgs/jxgc4.png" alt="">
      </div>
    </div>
    <div class="news">
      <mainContent titles="机械工程新闻" icon="&#xe634;" :content1=content1></mainContent>
      <mainContent titles="机械工程公告" icon="&#xe6fc;" :content1=content1></mainContent>
    </div>
    <footsc></footsc>
  </div>
</template>
<script>
import MainContent from '@/components/MainContent'
import Footsc from '@/components/Foot-sc.vue'

export default {
  name: 'Jxgc',
  props: {
  },
  components: {
    MainContent,
    Footsc
  },
  data () {
    return {
      imgs: [
        { load: require('../assets/homeimgs/jxgc1.jpg'), name: '图一' },
        { load: require('../assets/homeimgs/jxgc2.png'), name: '图二' },
        { load: require('../assets/homeimgs/jxgc3.jpg'), name: '图三' },
        { load: require('../assets/homeimgs/jxgc4.png'), name: '图四' }
      ],
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
      ]
    }
  }
}
</script>
<style scoped>
.jxgc{
 width: 100%;
 height: calc(100vh);
 padding-top: 20px; 

}
.Cmap{
  width: 1300px;
  margin: 0 auto;
}
.block{
  width: 500px;
  float: left;
  margin-top:80px 
}
.el-carousel__item img{
  width: 500px;
}
h2{
    text-align: center;
    font-size: 26px;
    color: rgb(41,62,106);
    margin-bottom: 20px 
  }
.Introduction{
    width: 750px;
    float: right;
    margin-right:20px 
  }
  .Introduction p{
    font-size: 15px;
    text-indent: 2em;
  }
.teacher{
  width: 1300px;
  margin: 40px auto 0;
  }
  .teacher .teacherimgs{
    display: flex;
  }
  .teacher .teacherimgs img{
    height: 200px;
    flex: 1
  }
.news{
  width: 1300px;
  margin: 40px auto;
  display: flex;
}
.MainContent{
  float:left;
  flex: 1;
}
</style>
