<template>
  <div style="margin-top: 20px;margin-left: 20px">
    <el-form>
      <el-form-item label="字典名称">
        <el-input placeholder="请输入规则名称" v-model="dictName" style="width: 200px" size="medium"></el-input>
      </el-form-item>
    </el-form>
    <el-tabs v-model="activeName">
      <el-tab-pane label="添加同义词集" name="first">
        <el-form label-position="right" inline="true">
          <el-form-item label="主事件词">
            <el-input placeholder="请输入主词" v-model="wordsTemp.main" style="width: 200px;margin-left: 14px"
                      size="medium"></el-input>
          </el-form-item>
          <br>
          <el-form-item label="同义词名称">
            <el-input placeholder="请输入同义词,空号分隔" v-model="wordsTemp.same" style="width: 200px" size="medium"></el-input>
          </el-form-item>
          <el-button type="danger" @click="addWord">添加</el-button>
        </el-form>
        <el-table
          :data="wordsList">
          <el-table-column
            fixed
            label="编号">
            <template slot-scope="scope">
              {{(scope.$index + 1)}}
            </template>
          </el-table-column>
          <el-table-column
            prop="main"
            label="主词名称">
          </el-table-column>
          <el-table-column
            prop="same"
            label="同义词名称">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, wordsList)"
                type="text"
                size="small">
                移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="添加事件逻辑" name="second">
        <el-form inline="true">
          <el-form-item label="动作名称">
            <el-input placeholder="请输入动作名称" v-model="eventTemp.main" style="width: 200px;margin-left: 13px" size="medium">
            </el-input>
          </el-form-item>
          <br>
          <el-form-item label="动作同义词">
            <el-input placeholder="例:面临 010,遭受 020" v-model="eventTemp.same" style="width: 200px;" size="medium"></el-input>
          </el-form-item>
          <el-button type="danger" @click="addEvent">添加</el-button>
        </el-form>
        <el-table
          :data="eventList">
          <el-table-column
            fixed
            label="编号">
            <template slot-scope="scope">
              {{(scope.$index + 1)}}
            </template>
          </el-table-column>
          <el-table-column
            prop="main"
            label="动作词">
          </el-table-column>
          <el-table-column
            prop="same"
            label="同义词名称">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="editPattern(scope.$index)"
                type="text"
                size="small">
                添加匹配词
              </el-button>
              <el-button
                @click.native.prevent="deleteRow(scope.$index, eventList)"
                type="text"
                size="small">
                移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <el-button type="danger" style="margin: 20px"  @click="postData">提交</el-button>
    <el-dialog
      title="事件匹配词"
      :visible.sync="centerDialogVisible"
      width="60%"
      center>
      <div>
        <div v-html="eventList.length<=0 ? '':eventList[dialogIndex].main" style="text-align: center"></div>
        <el-autocomplete
          class="inline-input"
          v-model="slaveTemp.value"
          :fetch-suggestions="querySearch"
          placeholder="请输入从事件词"
          style="margin-left: 20px;width: 300px;margin-top: 20px"
        >
          <el-select v-model="slaveTemp.select" slot="prepend" style="width: 100px">
            <el-option label="新增" value="1"></el-option>
            <el-option label="选择" value="2"></el-option>
          </el-select>
        </el-autocomplete>
        <el-button type='danger' @click="addPattern" style="margin-left: 20px">新增</el-button>
        <el-table
          :data="eventList.length<=0 ? null:eventList[dialogIndex].slave">
          <el-table-column
            fixed
            label="编号">
            <template slot-scope="scope">
              {{(scope.$index + 1)}}
            </template>
          </el-table-column>
          <el-table-column
            prop="value"
            label="动作匹配词">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, eventList[dialogIndex].slave)"
                type="text"
                size="small">
                移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  import dictionaryApi from "@/api/dictionary";
    export default {
        name: "DictionaryCreate",
        data() {
            return {
                dictName: "",
                activeName: "first",
                wordsTemp: {},
                eventTemp: {main: "", same: ""},
                wordsList: [],
                eventList: [],
                centerDialogVisible: false,
                dialogIndex:0,
                slaveTemp:{},
            }
        },
        methods: {
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            editPattern(index){
                this.dialogIndex=index;
                this.centerDialogVisible = true;
            },
            addWord() {
                this.wordsList.push(this.wordsTemp);
                this.wordsTemp = {};
            },
            addEvent() {
                this.eventTemp.slave = [];
                this.eventList.push(this.eventTemp);
                this.eventTemp={};
            },
            addPattern(){
                this.eventList[this.dialogIndex].slave.push(this.slaveTemp);
                this.slaveTemp = {};
            },
            querySearch(queryString, cb,) {
                let result = [];

                    for(let i=0;i<this.wordsList.length;i++){
                        result.push({value:this.wordsList[i].main})
                    }

                cb(result);
            },
            postData(){
                let rs = {name:this.dictName,words:this.wordsList,events:this.eventList};
                dictionaryApi.createDictionaryByMyself(rs).then(res=>{
                    this.$message({
                        type: (res.data.flag?'success':'error'),
                        message: res.data.message
                    })
                    if (res.data.flag){
                        this.$router.push("/Dictionary")
                    }
                });

            }
        },
    }
</script>

<style scoped>

</style>
