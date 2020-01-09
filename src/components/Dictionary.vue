<template>
  <section data-v-0f1723f0 class="el-container container-defineLibrary is-vertical">
    <!-- <header data-v-0f1723f0 class="el-header" style="height: 60px;">
      <nav data-v-273cece6 data-v-0f1723f0 class="nav-bar">
        <div data-v-273cece6 class="brand">
          <img
            data-v-273cece6
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAABBCAYAAAA36tphAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphZjAzZDM3Zi00OWVmLTQ5OWMtYjcyYi0yNTA3NzNmMGQ0MzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDkwMkRCNEZCQzRDMTFFOUI2MkZDMUU0RjY0ODE1QkQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDkwMkRCNEVCQzRDMTFFOUI2MkZDMUU0RjY0ODE1QkQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEREY2REJENTcxNTIxMUU4QjUzNDgxRTkwMzg3RTI3RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEREY2REJENjcxNTIxMUU4QjUzNDgxRTkwMzg3RTI3RCIvPiA8L3Jk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"
            alt
          />
        </div>
        <div data-v-273cece6 class="navbar-right">
          <span data-v-273cece6 class>
            <i data-v-273cece6 class="fa fa-file-text"></i> 我的分析
          </span>
          <span data-v-273cece6 class="active">
            <i data-v-273cece6 class="fa fa-bar-chart"></i> 分析配置
          </span>
          <div data-v-273cece6 class="el-dropdown">
            <span
              data-v-273cece6
              class="el-dropdown-link el-dropdown-selfdefine"
              aria-haspopup="list"
              aria-controls="dropdown-menu-6927"
              role="button"
              tabindex="0"
            >
              <i data-v-273cece6 class="fa fa-user-circle"></i>
              <span data-v-273cece6 class="pl0">return0</span>
              <i data-v-273cece6 class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <ul
              data-v-273cece6
              class="el-dropdown-menu el-popper"
              id="dropdown-menu-6927"
              style="display: none;"
            >
              <span data-v-273cece6>
                <li data-v-273cece6 tabindex="-1" class="el-dropdown-menu__item">个人中心</li>
              </span>
              <span data-v-273cece6>
                <li data-v-273cece6 tabindex="-1" class="el-dropdown-menu__item">个人权益</li>
              </span>
              <span data-v-273cece6>
                <li data-v-273cece6 tabindex="-1" class="el-dropdown-menu__item">退出</li>
              </span>
            </ul>
          </div>
        </div>
      </nav>
    </header>-->
    <div data-v-0f1723f0 class="content">
      <div data-v-0f1723f0 class="el-row">
        <div data-v-0f1723f0 class="el-col el-col-22">
          <ul data-v-0f1723f0 class="menus">
            <router-link data-v-0f1723f0 tag="li" style="cursor:pointer;" to="AnalysisMenu">
              <span data-v-0f1723f0>分析配置</span>

              <i data-v-0f1723f0 class="fa fa-angle-right fa-lg"></i>
              &nbsp;
            </router-link>
            <li data-v-0f1723f0 style="color: rgb(233, 71, 67);">
              <span data-v-0f1723f0>分词词典</span>
            </li>
          </ul>
        </div>
        <div data-v-0f1723f0 class="el-col el-col-2">
          <div data-v-0f1723f0 style="margin-top: 20px; text-align: right; display: none;">
            <button data-v-0f1723f0 type="button" class="el-button el-button--primary el-button--mini"
                    style="background-color: rgb(247, 247, 247); color: rgb(102, 102, 102); border-color: rgb(221, 221, 221);">
              <!---->
              <!---->
              <span>返回分析</span>
            </button>
          </div>
        </div>
      </div>
      <div data-v-0f1723f0 class="el-col el-col-24">
        <form data-v-0f1723f0 class="el-form el-form--label-left">
          <div data-v-0f1723f0 class="el-form-item">
            <label class="el-form-item__label">词典名称</label>
            <div class="el-form-item__content">
              <div data-v-0f1723f0 class="el-input el-input--suffix" style="width: 200px;">
                <!---->
                <input type="text" v-model="search" autocomplete="off" placeholder="请输入" class="el-input__inner"/>
                <!---->
                <!---->
                <!---->
              </div>
              <button @click="dict_data()" data-v-0f1723f0 type="button" class="el-button el-button--primary">
                <!---->
                <!---->
                <span>查询</span>
              </button>
              <!---->
            </div>
          </div>
        </form>
      </div>
      <div data-v-0f1723f0 class="el-col el-col-24">
        <button data-v-0f1723f0 type="button" class="el-button wordStatistics el-button--text"
                style="margin-bottom:20px" @click="dialogVisible=true">
          <!---->
          <!---->
          <span>
                    <i data-v-0f1723f0 class="fa fa-plus-square-o fa-lg"></i> &nbsp;上传词典
                </span>
        </button>
        <button data-v-0f1723f0 type="button" class="el-button wordStatistics el-button--text"
                style="margin-bottom:20px" @click="toCreate">
          <!---->
          <!---->
          <span>
                    <i data-v-0f1723f0 class="fa fa-plus-square-o fa-lg"></i> &nbsp;新建词典
                </span>
        </button>
        <el-dialog title="创建词典" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
          <el-form v-model="form">
            <el-upload style="display:inline-block" action="http://100.68.187.168:5000/dic" :auto-upload="false"
                       :limit="1" accept=".txt" :on-change="uploadFile">
                <h4 style="color:rgb(216,83,75)">
                <i data-v-0f1723f0 class="el-icon-upload"></i> &nbsp;上传词典
              </h4>
            </el-upload>
            <div slot="tip" class="el-upload__tip">只能上传txt文件，且只能上传一个</div>
            <el-form-item>
              <h4 style="margin:10px 0">词典名称</h4>
              <el-input v-model="form.name" placeholder="请输新建词典的名称" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="createDict(),dialogVisible = false">确 定</el-button>
                </span>
        </el-dialog>
        <p data-v-0f1723f0></p>
      </div>
      <el-table :data="dict_data" stripe header-cell-style="background-color: rgb(245, 247, 249); text-align: center"
                style="width: 100%">

        <el-table-column width="200%" label="序号" align="center" >
          <template slot-scope="scope">
            {{(scope.$index + 1)}}
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name" label="词典名称">
          <template slot-scope="scope">
            <a :href="'/dictionaryDetail/'+scope.row.id" target="_blank" class="buttonText">{{scope.row.name}}</a>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="create_time" label="创建时间"></el-table-column>

        <el-table-column align="center" prop="operation" label="操作">
          <template slot-scope="scope">
            <el-button @click="downloadDict(scope.row.id,scope.row.name)" type="text">
                        <span style="font-size:12px">
                            <i class="fa fa-download"></i>下载
                        </span>
            </el-button>
            <el-button @click="delDict(scope.row.id)" type="text">
                        <span style="font-size:12px">
                            <i class="fa fa-trash"></i>删除
                        </span>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div data-v-0f1723f0 class="el-col el-col-24" style="margin-top: 10px;">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                       :current-page.sync="curPage" :page-sizes="[10, 20, 30, 40]" :page-size.sync="curSize"
                       layout="total,sizes,prev, pager, next, jumper" :total="total"></el-pagination>
      </div>
    </div>
    <footer data-v-0f1723f0 class="el-footer" style="height: 60px;">
      <div data-v-4e9c2f90 data-v-0f1723f0 class="footer">
        <div data-v-4e9c2f90 class="links">
          <a data-v-4e9c2f90 href="#">关于我们</a>
          <a data-v-4e9c2f90 href="#">服务协议</a>
          <a data-v-4e9c2f90>隐私政策</a>
        </div>
        <div data-v-4e9c2f90 class="copyright">
          Copyright © 2019 上海萌泰数据科技股份有限公司 © 版权所有.
          <a data-v-4e9c2f90 href=" http://beian.miit.gov.cn" target="_blank" style="color: rgb(73, 49, 133);">沪 ICP 备
            09099644 号</a>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
  import dictionaryApi from "@/api/dictionary";
  import authApi from "@/utils/auth";

  export default {
    name: "Dictionary",
    data() {
      return {
        search: '',
          isIDShow:false,
        form: {
          dic: null,
          name: ""
        },
        dialogVisible: false,
        dictName: "",
        curPage: 1,
        curSize: 10,
        dict_data: [{
          id: 1,
          name: "ss",
          create_time: "11",
          operation: ""
        }],
        total: 0
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
        }
      this.getDict();
    },
    computed: {

      dict_data() {
        alert(this.search)
        const search = this.search
        if (search) {
          // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
          // 注意： filter() 不会对空数组进行检测。
          // 注意： filter() 不会改变原始数组。
          return this.dict_data.filter(data => {
            // some() 方法用于检测数组中的元素是否满足指定条件;
            // some() 方法会依次执行数组的每个元素：
            // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测;
            // 如果没有满足条件的元素，则返回false。
            // 注意： some() 不会对空数组进行检测。
            // 注意： some() 不会改变原始数组。
            return Object.keys(data).some(key => {
              // indexOf() 返回某个指定的字符在某个字符串中首次出现的位置，如果没有找到就返回-1；
              // 该方法对大小写敏感！所以之前需要toLowerCase()方法将所有查询到内容变为小写。
              return String(data[key]).toLowerCase().indexOf(search) > -1
            })
          })
        }
        return this.dict_data
      },
    },
    watch: {
      // 检测表格数据过滤变化，自动跳到第一页
      dict_data() {
        this.curPage = 1
      }
    },
    methods: {
      uploadFile(file) {
        console.log(file.raw)
        this.form.dic = file.raw
      },
      getDict() {
        dictionaryApi.getDictionaryData(this.curPage, this.curSize).then(res => {
          this.total = res.data.data.total;
          this.dict_data = res.data.data.rows;
        });
      },
      delDict(id) {
        dictionaryApi.delDictionary(id).then(res => {
          this.$message({
            type: res.data.flag ? "success" : "error",
            message: res.data.message
          });
            if(res.data.flag){
                this.getDict();
            }
        });

      },
      createDict() {
        let fd = new FormData();
        fd.append("dic", this.form.dic);
        fd.append("name", this.form.name);
        dictionaryApi.createDictionary(fd).then(res => {
          this.$message({
            type: res.data.flag ? "success" : "error",
            message: res.data.message
          });
          this.getDict()
        });
      },
      downloadDict(id, name) {
        dictionaryApi.downloadDictionary(id).then(res => {

          const content = res.data
          const blob = new Blob([content]) // 构造一个blob对象来处理数据
          const fileName = name + '.txt' // 导出文件名
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
      },
        toCreate(){
            this.$router.push('/DictionaryCreate');
        }
    }
  };
</script>

<style scoped>
  a:hover {
    color: red
  }

  .el-button--text {
    color: black
  }

  .el-button--text:hover {
    color: red;
  }
</style>
