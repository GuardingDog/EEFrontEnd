<template>
  <div>
    <el-container>
      <div class="content">
      <el-progress
        style="width:50%;margin:0 auto 0 auto"
        :percentage.sync="percent"
        :format="format"
      ></el-progress>
      <div align="center">
        <el-tag
          v-text="blockName"
          type="success"
          style="margin: 10px; text-align: center; width: 40%"
        >标签一</el-tag>
      </div>
      <el-main>
        <div align="center">
          <el-table
            ref="multipleTable"
            v-bind:data="tableData"
            border
            tooltip-effect="dark"
            style="width: 70%"
            size="medium"
            max-height="480px"
            @selection-change="handleSelectionChange"
          >
            <el-table-column fixed align="center" type="selection" width="75%"></el-table-column>
            <!-- <el-table-column align="center" label="日期" width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>-->
            <el-table-column align="center" prop="origin" label="原始单词" show-overflow></el-table-column>
            <el-table-column align="center" prop="code" label="Cameo Code" width="100%"></el-table-column>
            <el-table-column align="center" prop="Chinese" label="翻译结果" show-overflow></el-table-column>
            <el-table-column align="center" prop="comment" label="注释（多为搭配的动词）" show-overflow></el-table-column>
          </el-table>
          <div style="margin-top: 20px">
            <el-button @click="end">退出</el-button>
            <el-button :disabled="disableCommit" @click="sendData()">{{commit}}</el-button>
          </div>
        </div>
      </el-main>
      <el-footer>
        <div style="margin-top:20px">
          <el-carousel
            style="width: 100%; margin: 10px"
            :autoplay="false"
            :interval="1"
            type="card"
            :height="refHeight"
          >
            <el-carousel-item v-for="item in cameoList" :key="item">
              <el-card :body-style="{ padding: '0px', overflow: 'scroll' }" class="box-card">
                <div slot="header" class="clearfix">
                  <span>Cameo 编号：{{item['code']}}</span>
                </div>
                <div style="margin:20px; overflow: scroll">
                  <b>Name:</b>
                  <ul class="text item">{{item['content']['name'] }}</ul>
                  <b>Description:</b>
                  <ul class="text item">{{ item['content']['description'] }}</ul>
                  <b>
                    <span v-if="item['content']['usage_notes'].length">Usage Notes:</span>
                  </b>
                  <ul class="text item">{{ item['content']['usage_notes'] }}</ul>
                  <b>
                    <span v-if="item['content']['example'].length">Example:</span>
                  </b>
                  <ul v-for="eg in item['content']['example']" :key="eg" class="text item">{{ eg }}</ul>
                </div>
              </el-card>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-footer>
      </div>
    </el-container>
  </div>
</template>

<script>
import translateApi from "@/api/translate";
import authApi from "@/utils/auth";
export default {
  name: "Translate",
  data() {
    return {
      isExit: false,
      id: null,
      timer: null,
      commit: "确认",
      disableCommit: false,
      disableTime: 1,
      curNum: 0,
      allNum: 0,
      percent: 0,
      blockName: "Block Name",
      tableData: [],
      multipleSelection: [],
      cameoList: [],
      refHeight: "600px",
      screenWidth: document.body.clientWidth
    };
  },

  methods: {
    format() {
      return `${this.curNum}/${this.allNum}`;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    tempDisableCommit() {
      console.log("disable!");
      if (this.disableCommit) return;
      this.disableCommit = true;
      this.commit = this.disableTime + "s后可提交";
      let clock = window.setInterval(() => {
        --this.disableTime;
        console.log(this.disableTime);
        this.commit = this.disableTime + "s后可提交";
        if (this.disableTime < 0) {
          window.clearInterval(clock);
          this.commit = "确认";
          this.disableTime = 1;
          this.disableCommit = false;
        }
      }, 1000);
    },
    getData() {
      // console.log("????????SDDWQDASFADF");
      translateApi.getTransData().then(response => this.setData(response.data));
    },
    setRefHeight() {
      var num = 0;
      // -margin*2 / num of cards to play(3) -left space / nums of charactors
      var charNum = ((this.screenWidth - 40) / 3 - 50) / 6;
      for (var i = 0; i < this.cameoList.length; ++i) {
        var exampleLen = 0;
        for (
          var j = 0;
          j < this.cameoList[0]["content"]["example"].length;
          ++j
        ) {
          exampleLen += this.cameoList[0]["content"]["example"][j].length;
        }
        console.log(exampleLen);
        var temp =
          62 +
          8 * 20 +
          (4 +
            Math.ceil(
              this.cameoList[0]["content"]["description"].length / charNum
            ) +
            Math.ceil(
              this.cameoList[0]["content"]["usage_notes"].length / charNum
            ) +
            Math.ceil(exampleLen / charNum)) *
            18 +
          this.cameoList[0]["content"]["example"].length * 20;
        if (temp > num) {
          num = temp;
        }
      }
      this.refHeight = num.toString() + "px";
      console.log(this.cameoList, this.refHeight);
    },
    setData(res) {
      // 若数据产生变化则刷新
      if (this.tableData.toString() == res["transData"].toString()) {
        // console.log("???????");
        return;
      }
      if (this.curNum == this.allNum){

      this.commit = "保存";
      this.disableCommit = false;
      }
      this.tableData = res["transData"];
      this.blockName = this.tableData[0]["class"];
      this.cameoList = res["cameoData"];

      // this.setRefHeight();
      (this.commit = "确认"),
        (this.disableCommit = false),
        this.tempDisableCommit();
    },
    sendData() {
      if (this.curNum != this.allNum) {
        console.log(this.multipleSelection);
        (this.commit = "请稍候"),
          (this.disableCommit = true),
            translateApi.sendResult(this.multipleSelection).then(response => {
            this.curNum += 1;
            this.percent = (this.curNum / this.allNum) * 100;
            if(this.curNum==this.allNum){
                this.commit = "保存";
                this.disableCommit = false;
            }
          });
      } else {
        translateApi.end(this.id).then(response => {
            this.isExit=true;
            console.log(this.isExit)
          this.$message({
            type: response.data.flag ? "success" : "error",
            message: response.data.res
          });
          this.$router.push("/transMenu");
        });
      }
    },
    end() {
      if (!this.isExit) {
        this.$confirm("翻译尚未完成，退出将丢失目前进度，是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.isExit = true;
            this.id = "none"; //只要不是cameo编号，随便都行
              console.log("click exit")
            translateAPI.end(this.id).then(response => {
                console.log("get response")
              this.$message({
                type: response.data.flag ? "success" : "error",
                message: response.data.res
              });
              this.$router.push("/transMenu");
            });
          })
          .catch(() => {});
      }
    }
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
    this.id = this.$route.params.id;
    this.allNum = this.$route.query.allNum;
    this.percent = this.curNum / this.allNum;
    translateApi.setCategory(this.id);
    this.getData();
    this.timer = setInterval(() => {
      setTimeout(this.getData, 0);
    }, 3000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
    if(!this.isExit)
        translateApi.end("none").then(response => {
              this.$message({
                type: response.data.flag ? "success" : "error",
                message: response.data.res
              });
        });
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
        // this.setRefHeight();
      })();
    };
  }
};
</script>

<style scoped>
.content {
  padding-top: 20px;
  margin: 0 auto 0 auto;
  width: 100%;
}
</style>
