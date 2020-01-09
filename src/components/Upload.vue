<template>
  <div>
    <el-container direction="vertical" style="margin-top: 100px;margin-left: 200px">
      <p style="font-weight: bold;margin-bottom: 50px">数据导入</p>
      <div style="width: 500px; color: #8c939d">
        文本库名称： {{lib_name}}
      </div>
        <div style="width: 10%;height: 50px;float: left;margin-top: 50px">导入文件</div>
        <div style="height: 80px;width: 50%;float: left">
          <el-upload
                     :auto-upload="false"
                     accept=".xls,.xlsx"
                     :limit="1"
                     :on-change="handleChange"
                     :on-remove="handleRemove">
            <h4 style="color:rgb(216,83,75)">
              <i data-v-0f1723f0 class="el-icon-upload"></i> &nbsp;上传文件
            </h4>
            <div slot="tip" class="el-upload__tip">只能上传xls/xlsx文件，且只能上传一个</div>
          </el-upload>
        </div>



      <p style="margin-top: 50px">标题映射</p>
      <div style="margin-top: 30px;width: 60%">
        <el-table
          :data="matchTable"
          style="width: 80%;height: auto">
          <el-table-column
            label="Excel单元格标题"
            prop="excelTitle">
          </el-table-column>
          <el-table-column
            label="目标字段"
            prop="targetTitles">
            <template slot-scope="scope">
              <el-select v-model="scope.row.selectValue" placeholder="请选择">
                <el-option
                  v-for="item in Titles"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </template>
          </el-table-column>
        </el-table>

      </div>
      <el-button type="primary" style="float: top;margin-top: 50px" @click="uploadFile">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    </el-container>
    <!--<el-footer style="color:  black;background-color:grey;margin-top:220px">-->
      <!--<p style="margin-left: 650px">关于我们 服务协议 隐私政策</p>-->
      <!--<p style="margin-left: 600px">Copyright 2018 上海萌泰数据科技有限公司</p>-->
    <!--</el-footer>-->
  </div>
</template>

<script>
  import textLibApi from "@/api/textLib";
    export default {
        name: "Upload",
        data() {
            return {
                Titles: [
                    {
                        value: "title",
                        label: "标题"
                    },
                    {
                        value: "author",
                        label: "作者"
                    },
                    {
                        value: "keywords",
                        label: "关键词"
                    },
                    {
                        value: "summary",
                        label: "摘要"
                    },
                    {
                        value: "content",
                        label: "内容"
                    },
                    {
                        value: "url",
                        label: "Url"
                    },
                    {
                        value: "publish_time",
                        label: "发布时间"
                    },
                    {
                        value: "none",
                        label: "不指定"
                    }
                ],
                matchTable: [],
                fileTemp: null,
                lib_name:"",
                lib_id:1

            }
        },
        created() {
            this.lib_name = this.$route.query.name
            this.lib_id = this.$route.query.id
        },
        methods: {
            handleRemove(file,fileList){
                this.fileTemp = null
                this.matchTable = []
            },
            handleChange(file,fileList) {
                this.fileTemp = file.raw;

                if(this.fileTemp){
                    this.readExcel(this.fileTemp)
                } else {
                    this.$message({
                        type: 'warning',
                        message: '请上传附件！'
                    })
                }
                this.readExcel();
            },
            readExcel(obj) {
                let _this = this;
                this.file = obj;
                var rABS = false; //是否将文件读取为二进制字符串
                var f = this.file;
                var reader = new FileReader();
                FileReader.prototype.readAsBinaryString = function (f) {
                    var binary = "";
                    var rABS = false; //是否将文件读取为二进制字符串
                    var pt = this;
                    var wb; //读取完成的数据
                    var outdata;
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        var bytes = new Uint8Array(reader.result);
                        var length = bytes.byteLength;
                        for (var i = 0; i < length; i++) {
                            binary += String.fromCharCode(bytes[i]);
                        }
                        var XLSX = require('xlsx');
                        if (rABS) {
                            wb = XLSX.read(btoa(fixdata(binary)), { //手动转化
                                type: 'base64'
                            });
                        } else {
                            wb = XLSX.read(binary, {
                                type: 'binary'
                            });
                        }
                        outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);//outdata就是读取excel内容之后输出的东西
                        let columns = [];
                        for(let key in outdata[0]){
                            let temp = {};
                            temp.excelTitle = key;
                            temp.selectValue = "";
                            columns.push(temp);
                        }
                        _this.reloadTable(columns)
                    };
                    reader.readAsArrayBuffer(f);
                };
                if (rABS) {
                    reader.readAsArrayBuffer(f);
                } else {
                    reader.readAsBinaryString(f);
                }
            },
            reloadTable(columns){
                this.matchTable = columns;
                console.log(this.matchTable)
            },
            uploadFile(){
                let fd = new FormData();
                fd.append("data", this.fileTemp);
                for(let i = 0; i < this.matchTable.length;i++){
                    let column = this.matchTable[i];
                    fd.append(column.selectValue, column.excelTitle);
                }
                textLibApi.uploadArticles(this.lib_id,fd).then(res=>{
                    this.$message({
                        type: res.data.flag? 'success':'error',
                        message: res.data.message
                    })
                    if (res.data.flag){
                        this.$router.push({path:`/configuration/${this.lib_id}`, query:{name: this.lib_name}})
                    }
                })
            }
        }
    }
</script>

<style scoped>
  .el-button--primary {
    color: #FFF;
    background-color: #ef1f0fe8;
    border-color: #f56c6c;
    width: 80px;
    height: 35px;
  }

  .el-upload-list__item {
    width: 20%;
  }
</style>
