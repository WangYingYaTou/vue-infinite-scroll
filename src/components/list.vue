<template>
  <div :style="{height:listHeight}" class="list">
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled = "busy"
      infinite-scroll-distance = "5">
      <li v-for="(item, index) in tableData" :key="index" class="diffClass">
        {{ item }}
      </li>
      <div v-if="tableData.length<=0">暂无更多数据</div>
    </ul>
  </div>
</template>
<script>
export default {
  props:{
    listHeight:{
      type:String,
      default:''
    },
    loadMore: {
      type: Function,
      default: () => {}
    },
    tableData:{
      type:Array,
      default:[]
    }
  },

  data() {
    return {
      
    }
  }
}
</script>
<style scoped>
.diffClass {
  list-style:none;
}
ul {
  height:190px;
}
.list {
  overflow: auto;
  background-color:antiquewhite;
}
</style>
