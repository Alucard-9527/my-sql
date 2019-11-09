<template>
    <div class="nevs">
        <ul class="titlenve">
            <li v-for="(lists,index) in contents" :key="index"><a href="">{{lists.navs}}</a></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'navs',
  props: {
      contents:{
          type: Array
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nevs{
  height: 50px;
  background: linear-gradient(to top,#56a0de,#1774de);
  line-height: 50px;
  text-align: center;
  font-size: 22px;
  margin-bottom:20px; 
  }
  .nevs .titlenve{
    display: flex;
    box-shadow: 4px 6px 8px 1px rgb(141, 141, 141);
  }
  .nevs .titlenve li{
    flex: 1;
  }
  .nevs .titlenve li a{
    text-decoration: none;
    color: rgb(255, 255, 255);
  }
  .nevs .titlenve li:hover{
    background-color: #56a0de;
  }
</style>