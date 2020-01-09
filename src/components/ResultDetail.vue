<template>
  <el-main>
    <div align="center">
      <el-row>
        <div class="head">
          <span class="title">改革开放与21世纪世界社会主义”国际研讨会在中国社会科学院召开</span>
        </div>
      </el-row>
      <div class="description">
        <span class="description">时间: {{article.publish_time}}</span>
        <a :href="article.url"><span>来源</span></a>
        <span class="description">作者: {{article.author}}</span>
      </div>
      <el-row>
        <div class="description">
          <span class="keyword">关键词：</span>
          <span class="description">{{article.keywords}}</span>
<!--          <el-button size="mini" round="true" @click="getXMLResult">输出xml文件</el-button>-->
        </div>
      </el-row>

      <el-row class="content">
        <p
        style="word-wrap:break-word;text-indent: 2em;line-height: 30px"
          class="content_text"
           v-for="item in article.content" :key="item"
        >{{item}}</p>
      </el-row>
    </div>
    <div>

      <el-row class="content">

      <el-button type="text" @click="toEventResult">
        <!---->
        <!---->
        <span>
          <i data-v-e4a61f98 class="fa fa-table fa-lg"></i> &nbsp;事件提取结果
        </span>
      </el-button>
        <el-table
          :data="tableData"
          border="true"
          stripe
          header-cell-style=" background-color: rgb(245, 247, 249); text-align: center"
          style="width: 100%;"
        >
          <el-table-column align="center" prop="source" label="实施者"></el-table-column>
          <el-table-column align="center" prop="target" label="受施者"></el-table-column>
          <el-table-column align="center" prop="event" label="触发词"></el-table-column>
          <el-table-column align="center" prop="sentenceTime" label="发生时间"></el-table-column>
          <el-table-column align="center" prop="location" label="地点"></el-table-column>
          <el-table-column align="center" prop="rs" label="事件提取"></el-table-column>
          <el-table-column show-overflow-tooltip align="center" prop="content" label="文本"></el-table-column>
        </el-table>
      </el-row>
    </div>
  </el-main>
</template>

<script>
import eventResultApi from "@/api/eventResult";
import authApi from "@/utils/auth";
export default {
  name: "ResultDeetail",
  data() {
    return {
      projectID:0,
      id:0,
      article:null,
        tableData:[{}]
    };
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
    this.id=this.$route.params.id
    this.projectID=this.$route.query.projectID
    this.getEventResult()
  },
  methods:{
      getEventResult(){
        eventResultApi.getEventResult(this.projectID,this.id).then(res=>{
          this.tableData=res.data.events
          this.article=res.data.text
          this.article.time=this.$formatter(this.article.time)
        })
      },
      toEventResult(){
          this.$router.push('/eventResult')
      },
      getXMLResult(){
          eventResultApi.getXMLResult(this.id).then(res=>{

              const content = res.data
              const blob = new Blob([content]) // 构造一个blob对象来处理数据
              const fileName = 'result.xml'// 导出文件名
              // 对于<a>标签，只有 Firefox 和 Chrome（内核） 支持 download 属性
              // IE10以上支持blob但是依然不支持download
              if ('download' in document.createElement('a')) { // 支持a标签download的浏览器
                  const link = document.createElement('a') // 创建a标签
                  link.download = fileName // a标签添加属性
                  link.style.display = 'none'
                  link.href = URL.createObjectURL(blob)
                  document.body.appendChild(link)
                  link.click() // 执行下载
                  URL.revokeObjectURL(link.href) // 释放url
                  document.body.removeChild(link) // 释放标签
              } else { // 其他浏览器
                  navigator.msSaveBlob(blob, fileName)
              }
          })
      }
  }
};
</script>

<style scoped>
.head {
  margin-top: 20px;
}
.description {
  margin-top: 10px;
  color: rgba(16, 16, 16, 0.61);
  font-size: 14px;
  text-align: center;
  font-family: SourceHanSansSC-regular;
}
.description .el-button {
  margin-left: 20px;
  padding: 5px 15px;
  color: rgb(88, 158, 248);
  background-color: rgb(238, 245, 254);
  border-color: rgb(186, 215, 251);
  text-align: center;
}
.title {
  color: rgba(16, 16, 16, 1);
  font-size: 20px;
  text-align: center;
  font-family: SourceHanSansSC-regular;
}
.keyword {
  color: rgba(185, 185, 185, 1);
  font-size: 14px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}
.content {
  margin-top: 10px;
  padding: 0 10px;
  text-align: left;
}
.content_text {
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}
</style>
