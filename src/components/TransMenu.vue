<template>
  <div>
    <el-container>
      <el-main>
        <div class="content">
          <span>请选择翻译类别：</span>
          <el-select v-model="class3NumValue" placeholder="大类翻译">
            <el-option
              v-for="item in class3Num"
              :key="item.cameo"
              :label="item.cameo"
              :value="item.cameo">
            </el-option>
          </el-select>
          <el-button @click="select3Num()" style="margin-right:20px" type="primary">翻译</el-button>
          <el-select v-model="class4NumValue" placeholder="小类翻译">
            <el-option
              v-for="item in class4Num"
              :key="item.cameo"
              :label="item.cameo"
              :value="item.cameo">
            </el-option>
          </el-select>
          <el-button @click="select4Num()" style="margin-right:20px" type="primary">翻译</el-button>
          <el-button @click="download()" class="el-button wordStatistics el-button--text" style="display: inline;">
                                    <!---->
                                    <!---->
                                    <span>
                                        <i data-v-7e5aa87c class="fa fa-sign-out fa-lg"></i> &nbsp;导出 Cameo 字典
                                    </span>
                                </el-button>
          <el-table
            :data="allClass"
            stripe
            header-cell-style="background-color: rgb(245, 247, 249); text-align: center"
            style="width: 100%"
          >
            <el-table-column align="center" prop="cameo" label="类别"></el-table-column>
            <el-table-column align="center" prop="num" label="数量"></el-table-column>
            <el-table-column align="center" prop="status" label="状态">
              <template slot-scope="scope">
                <!-- todo -->
                <el-button v-if="scope.row.status==false" size="mini" type="warning" round>
                  <span>未完成</span>
                </el-button>
                <el-button v-if="scope.row.status==true" size="mini" type="success" round>
                  <span>已完成</span>
                </el-button>
              </template>
            </el-table-column>
            <el-table-column align="center" label="操作">
              <template slot-scope="scope">
                <el-button type="text" @click="check(scope.row.status,scope.row.cameo,scope.row.num)">
                  <span>
                    翻译
                  </span>
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import translateApi from "@/api/translate";
import authApi from "@/utils/auth";
export default {
  name: "TransMenu",
  data() {
    return {
      allClass:null,
      class3Num: null, // 3位Cameo
      class3NumValue: null,
      class4Num: null,
      class4NumValue: null,
    };
  },

  created() {
    if (authApi.getUser().token === undefined){
            this.$message({
                type:'error',
                message:'请先登录'
            })
            this.$router.push('/login')
            return
    };
    this.init();
  },
  methods: {
    init() {
      translateApi.init().then(response => {
      var temp3Num = [];
      var temp4Num = [];
      var tempAllClass =[];
      // 类别为空
      // temp3Num.push(response.data[0])
      // temp4Num.push(response.data[0])
      // tempAllClass.push(response.data[0])
      console.log(response.data[1].cameo.length);
      for (var i = 1; i < response.data.length; i++) {
        if(!response.data[i].num) continue
        tempAllClass.push(response.data[i])
        if (response.data[i].cameo.length != 4) {
          temp3Num.push(response.data[i]);
        } else {
          temp4Num.push(response.data[i]);
        }
      }
      this.class3Num = temp3Num;
      console.log(temp3Num);
      this.class4Num = temp4Num;
      this.allClass = tempAllClass;
    });
    },
    select3Num(){
      for(var i=0;i<this.class3Num.length;i++){
        if(this.class3Num[i].cameo==this.class3NumValue){
          this.check(this.class3Num[i].status,this.class3Num[i].cameo,this.class3Num[i].num)
          break
        }
      }
    },
    select4Num(){
      for(var i=0;i<this.class4Num.length;i++){
        if(this.class4Num[i].cameo==this.class4NumValue)
          this.check(this.class4Num[i].status,this.class4Num[i].cameo,this.class4Num[i].num,)
          break
      }
    },
    check(status,id,num){
      if(status)
        this.$confirm('该类别已翻译完成, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.proceed(id,num)
          }).catch(() => {      
          });
      else
        this.proceed(id,num)
    },
    proceed(id,num){
      this.$router.push({path:"/translate/"+id, query:{allNum:num}});
    },
    download(){
        translateApi.downloadDictionary().then(res => {
          const content = res.data
          const blob = new Blob([content]) // 构造一个blob对象来处理数据
          const fileName = 'Cameo中文字典.txt' // 导出文件名
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
        }
        )
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {  
  padding-top: 20px;
  margin: 0 auto 0 auto;
  width: 80%;
}
.el-select{
  margin-bottom: 20px;
  width:150px;
}
</style>
