<template>
  <div>
    <div style="width: 70%;margin-left: 15%">
      <el-breadcrumb separator-class="el-icon-arrow-right" >
        <el-breadcrumb-item :to="{ path: '../../myproject' }" style="margin-top: 12px">我的项目</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path:'#'}" style="margin-top: 12px">文本库</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button type="text" icon="el-icon-download" @click="importClick" style="margin-top: 15px">导入</el-button>
      <el-table
      ref="mutipleTable"
      :data="tableData"
      stripe
      header-cell-style="background-color: rgb(245, 247, 249)"
      tooltip-effect="dark">
        <el-table-column type="index" label="序号" width="100" align="center"></el-table-column>
        <el-table-column
          v-if="isIDShow"
          prop="id"
          label="序号"
          style="width: 15%"
          align="center">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          style="width: 20%"
          align="center">
        </el-table-column>
        <el-table-column
          prop="author"
          label="作者"
          style="color: dimgray;width: 10%"
          align="center">
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="url"
          label="来源"
          style="width: 20%"
          align="center">
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="时间"
          style="width: 20%"
          align="center">
        </el-table-column>
        <el-table-column
          label="操作"
          style="width: 20%"
          align="center">
          <template slot-scope="scope">
          <el-button type="text" icon="el-icon-zoom-in" @click="detailArticle(scope.row.id)">详情</el-button>
          <el-button type="text" icon="el-icon-close" @click="deleteArticle(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block"  style="margin:100px">
      <el-pagination
        small
        layout="prev, pager, next"
        :total="total"
        :current-page="curPage"
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>

    </div>
  </div>
</template>

<script>
  import textLibApi from "@/api/textLib";
  import authApi from "@/utils/auth";
  export default {
    name: "Configuration",
    data(){
      return{
          isIDShow:false,
          rowId:0,
          lib_id:1,
          lib_name:"",
          total:10,
          tableData:[],
          curPage:1,

      }
    },
    created(){
        if (authApi.getUser().token === undefined){
            this.$message({
                type:'error',
                message:'请先登录'
            })
            this.$router.push('/login')
            return
        }
          this.lib_id = this.$route.params.id;
          this.lib_name = this.$route.query.name;
          this.getTextLibData();
    },
    methods:{
      detailArticle(id){
        this.$router.replace('/articleDetail/'+ this.lib_id+`/${id}`)
      },
      deleteArticle(id) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            textLibApi.deleteArticle(this.lib_id,parseInt(id)).then(res => {
              if (res.data.flag) {
                this.getTextLibData()
              }
              this.$message({
                type: res.data.flag?'success':'error',
                message: res.data.message
              })
            })
          }
        ).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
      ,
        handleCurrentChange(val) {
            this.curPage = val;
            this.getTextLibData();
        },
        getTextLibData(){
            textLibApi.getTextLibData(this.lib_id,this.curPage).then(res=>{
              console.log(res.data)
               this.total = res.data.data.total;
               this.tableData = res.data.data.rows;
            })
        },
      importClick(){
        this.$router.push({path:'/upload',query:{name:this.lib_name,id:this.lib_id}})
      }

    }
  }
</script>

<style scoped>

</style>
