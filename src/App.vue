<template>
  <div id="app">
    <!--<div content="header">-->
      <!--I am header-->
    <!--</div>-->
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <div class="content border-1px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script  type="text/ecmascript-6">
import header from './components/header/Header.vue'
import axios from 'axios'
const ERR_OK = 0;
export default {
  name: 'app',
  mounted() {
    this.get();
  },
  data() {
    return {
      seller: {},
    }
  },
  methods:{
    get(){
      var _this=this;//备份this
      axios.get('/api/seller').then(function (res) {
//        console.log(res);
        res=res.data;
//        console.log(res);
        if(res.error === ERR_OK){
          _this.seller = res.data;
        }
      }).catch((function (err) {

      }))
    }
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl";
  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      /*border-bottom: 1px solid rgba(7,17,27,0.1)*/
      border-1px(rgba(7,17,27,0.1))
      .tab-item
        flex:1
        text-align: center
        & > a
          display: block
          font-size: 14px
          color: rgb(77,85,93)
          &.active
            color:rgb(240,20,20)
</style>
