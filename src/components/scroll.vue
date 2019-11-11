<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <List listHeight='200px'  :load-more="loadMore" :busy="busy" :tableData='tableData'/>
    <div :style="{fontSize:'12px'}">加载更多</div>
    <div :style="{fontSize:'12px'}">无更多数据</div>
  </div>
</template>

<script>
import List from './list.vue'
export default {
  name: 'scroll',
  components:{List},
  data () {
    return {
      msg: 'Welcome to Learn vue-infinite-scroll',
      tableData : [
        "我是第一排", "我是第二排", "我是第三排", "我是第四排", "我是第五排", "我是第六排","我是第七排", "我是第八排", "我是第九排", "我是第十排", 
        "我是第一排", "我是第二排", "我是第三排", "我是第四排", "我是第五排", "我是第六排","我是第七排", "我是第八排", "我是第九排", "我是第十排"
      ],
      page:1,   //页数
      busy: true, // 加载状态
      infiniteMsgShow:false,   //加载更多
      empty:false     //无更多数据
    }
  },
  methods:{
    // loadMore() {
    //   this.busy = true
    //   // 多次加载数据
    //   setTimeout(() => {
    //     this.page++
    //     this.infiniteMsgShow = true
    //     this.getMultidimensionalFactData(true)
    //   }, 1000)
    // },

    // 获取列表
    // getMultidimensionalFactData(flag) {
      
    //   // 接口参数
    //   const params = {
    //     pageNumber: this.page, // 第几页
    //     pageSize: this.pagesize, // 页大小
    //   }

    //   searchTable(params)
    //     .then(res => {
    //       let status = res.data.responseCode
    //       let data = res.data.responseData
    //       if (status === 0) {
    //         // 多次加载
    //         if (flag) {
    //           this.tabs[this.num].list = this.tabs[this.num].list.concat(
    //             data.list
    //           ) // 列表

    //           if (data.list.length === 0) {
    //             // 到底了
    //             this.busy = true // 滚动关闭
    //             this.infiniteMsgShow = false // 加载中关闭
    //           } else {
    //             this.busy = false
    //           }
    //         } else {
    //           // 第一次加载数据
    //           this.tabs[this.num].list = data.list // 列表

    //           // 当第一次加载数据完之后，把这个滚动到底部的函数触发打开
    //           this.busy = false
    //           this.infiniteMsgShow = false // 加载中

    //         }
    //       }
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // },
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
