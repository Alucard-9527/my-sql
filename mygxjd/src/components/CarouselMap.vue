<template>
  <div class="cmap">
    <el-carousel :interval="5000" type="card" height="360px">
      <el-carousel-item v-for="(item, index) in imgs" :key="index">
        <img :src="item.load" :title="item.name">
      </el-carousel-item>
   </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'CarouselMap',
  props: {
  },
  data () {
    return {
      imgs: [
        { load: require('../assets/imgs/2.jpg'), name: '图一' },
        { load: require('../assets/imgs/3.jpg'), name: '图二' },
        { load: require('../assets/imgs/4.jpg'), name: '图三' },
        {load: require('../assets/imgs/5.jpg'), name: '图四' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-carousel{
    width: 100%;
  }
  .cmap{
    width: 1400px;
    margin: 0 auto;
  }
img{
  width:1080px;
  height: 360px;
}
.el-carousel__indicators--outside button{
  background: rgb(17,75,169,)
}
</style>
