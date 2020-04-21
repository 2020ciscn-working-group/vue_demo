<template>
    <div>
    <mt-header fixed title="出入记录" >
   </mt-header>
    <mt-search class="searchTab"
     v-model="value"
     cancel-text="取消"
     placeholder="搜索">
    </mt-search>
    <el-table class="table"
      :data="list"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="place"
        label="出入地点"
        width="180">
      </el-table-column>
    </el-table>
    
    </div>
</template>
<script>
export default {
    data(){
        return{
           list:[
           {
           date:'2019-10-1',
           name:'lijiarui',
           place:'2号楼'
          },
          {
           date:'2019-10-1',
           name:'Sst',
           place:'2号楼'
          }
          ]
        }
    }
}
</script>
<style scoped>
.searchTab{
    height:40px;
    margin: 10;
    padding:10px;
    width: 100%;   
}
.table{
    width:100%;
    padding:10;
    margin: 10px;
}
</style>