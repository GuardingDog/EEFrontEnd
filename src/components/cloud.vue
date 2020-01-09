<template>
  <el-form v-model="form">
    <el-upload style="display:inline-block"
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
    <el-form-item>
      <h4 style="margin:10px 0">词典名称</h4>
      <el-input v-model="form.name" placeholder="请输新建词典的名称" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
    import XLSX from 'xlsx'

    export default {
        name: 'siderBar',
        data() {
            return {
                fileTemp: null,
                fileColumns:[],
                form: {}
            };
        },
        methods: {
            handleRemove(file,fileList){
                this.fileTemp = null
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
                        console.log(reader.result)
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
                        columns = [];
                        for(let key in outdata[0]){
                            columns.push(key)
                        }
                        this.fileColumns = columns;
                    };
                    reader.readAsArrayBuffer(f);
                };
                if (rABS) {
                    reader.readAsArrayBuffer(f);
                } else {
                    reader.readAsBinaryString(f);
                }
            }
        }
    }

</script>
