<template>
<section data-v-7e5aa87c class="el-container container-subjectExtra is-vertical">
  <div data-v-7e5aa87c class="content">
  <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 10px">
    <el-breadcrumb-item :to="{ path: '../../../myproject' }" style="margin-top: 12px">我的项目</el-breadcrumb-item>
    <el-breadcrumb-item :to="{path:'../../../EventExtract/'}" style="margin-top: 12px">字典列表</el-breadcrumb-item>
    <el-breadcrumb-item :to="{path:''}" style="margin-top: 12px">字典</el-breadcrumb-item>
  </el-breadcrumb>
        <div data-v-7e5aa87c class="el-row">
            <div data-v-7e5aa87c class="el-row" style="height: 80px; background-color: rgb(245, 247, 249);">
                <div class="el-col el-col-22">
                    <div class="el-row" style="height: 40px; line-height: 40px; padding-left: 20px;">
                        <span>
                            <el-button type="success" style="padding:3px;font-size:10px;text-align:center">主</el-button>
                            &nbsp;&nbsp;
                        </span>
                        <span style="color: rgb(0, 0, 0); font-weight: bold; font-size: 14px;">
                            文本库样例
                        </span>
                    </div>
                    <div class="el-row" style="height: 40px; line-height: 30px; padding-left: 20px;">
                        <form class="el-form el-form--label-left el-form--inline">
                            <div class="el-form-item">
                                <!---->
                                <div class="el-form-item__content">
                                    <div>
                                        <i class="fa fa-database"></i>&nbsp;&nbsp;
                                        <span>
                                            共计：
                                            <span style="color: red;" v-text="eventTotal">{{eventTotal}}</span>&nbsp;条
                                        </span>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="el-col el-col-2">
                    <div style="line-height: 80px; text-align: right;  margin-right: 30px;  cursor: pointer;">
                        <i aria-hidden="true" class="fa fa-list"></i>
                    </div>
                </div>
            </div>
            <div data-v-7e5aa87c class="el-row">
                <div data-v-7e5aa87c style="margin-top:10px">
                    <form data-v-7e5aa87c class="el-form resultForm el-form--label-left el-form--inline" width="100%">
                        <div data-v-7e5aa87c class="el-form-item">
                            <label class="el-form-item__label" style="width: 80px;">&nbsp;&nbsp;提取状态:</label>
                            <div class="el-form-item__content">
                                <el-button v-if="event.status==0" size="mini" type="warning" round>
                                    <span>等待中</span>
                                </el-button>
                                <el-button v-if="event.status==1" size="mini" type="info" round>
                                    <span>提取中</span>
                                </el-button>
                                <el-button v-if="event.status==2" size="mini" type="success" round>
                                    <span>已完成</span>
                                </el-button>
                            </div>
                        </div>
                        <div data-v-7e5aa87c class="el-form-item">
                            <label class="el-form-item__label" style="width: 100px;">事件提取词典:</label>
                            <div class="el-form-item__content">
                                <div>
                                    {{event.dictionary_id}}
                                    <!---->
                                </div>
                            </div>
                        </div>
                        <div data-v-7e5aa87c class="el-form-item">
                            <label class="el-form-item__label" style="width: 80px;">提取级别:</label>
                            <div class="el-form-item__content">
                                <div>
                                    {{event.analysis_algorithm}}
                                    <!---->
                                </div>
                            </div>
                        </div>
                        <div data-v-7e5aa87c class="el-form-item">
                            <label class="el-form-item__label" style="width: 80px;">提取时间:</label>
                            <div class="el-form-item__content">
                                <div>
                                    {{event.create_time}}
                                    <!---->
                                </div>
                            </div>
                        </div>
                    </form>

                    <div>
                        <div data-v-7e5aa87c style="margin: 10px 0px; height: 30px;">
                            <div data-v-7e5aa87c class="el-col el-col-19">
                                <button data-v-7e5aa87c type="button" class="el-button wordStatistics el-button--text" style="cursor: auto;">
                                    <!---->
                                    <!---->
                                    <span>
                                        <i data-v-7e5aa87c class="fa fa-mars-stroke fa-lg"></i> &nbsp;提取结果
                                    </span>
                                </button>
                            </div>
                        </div>

                        <el-table :data="resData" border stripe header-cell-style="background-color: rgb(245, 247, 249); text-align: center" style="width: 100%">
                            <el-table-column align="center" prop="text_id" label="文本 ID" width="180"></el-table-column>
                            <el-table-column align="center" prop="title" label="标题" width="180"></el-table-column>
                            <el-table-column show-overflow-tooltip align="center" prop="content" label="正文"></el-table-column>
                            <el-table-column align="center" prop="event_num" label="事件数量"></el-table-column>
                            <el-table-column align="center" prop="operation" label="操作" width="80px">
                              <template slot-scope="scope">
                                <el-button type="text" @click="toResultDetail(scope.row.text_id)"><span style="font-size:12px"><i class="fa fa-info-circle"></i>&nbsp;详情</span></el-button>
                                </template>
                            </el-table-column>
                        </el-table>

                        <div data-v-7e5aa87c style="margin: 10px 0px; height: 30px;">
                            <div data-v-7e5aa87c class="el-col el-col-pull-#24">
                                <button @click="download()" data-v-7e5aa87c type="button" class="el-button wordStatistics el-button--text" style="display: block;">
                                    <!---->
                                    <!---->
                                    <span>
                                        <i data-v-7e5aa87c class="fa fa-sign-out fa-lg"></i> &nbsp;导出
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div data-v-0f1723f0 class="el-col el-col-24" style="margin-top: 10px;">
                            <div class="block">
                                <el-pagination style="margin-top:10px" @size-change="getEventRes" @current-change="getEventRes" :current-page.sync="curPage" :page-size="curSize" layout="total,prev, pager, next, jumper" :total="total"></el-pagination>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer data-v-7e5aa87c class="el-footer" style="height: 60px;">
        <div data-v-4e9c2f90 data-v-7e5aa87c class="footer">
            <div data-v-4e9c2f90 class="links">
                <a data-v-4e9c2f90 href="#">关于我们</a>
                <a data-v-4e9c2f90 href="#">服务协议</a>
                <a data-v-4e9c2f90>隐私政策</a>
            </div>
            <div data-v-4e9c2f90 class="copyright">
                Copyright © 2019 上海萌泰数据科技股份有限公司 © 版权所有.
                <a data-v-4e9c2f90 href=" http://beian.miit.gov.cn" target="_blank" style="color: rgb(73, 49, 133);">沪 ICP 备 09099644 号</a>
            </div>
        </div>
    </footer>
</section>
</template>

<script>
import eventResultApi from "@/api/eventResult";
import eventLibApi from "@/api/eventLib";
import authApi from "@/utils/auth";
export default {
    name: "EventResult",
    data() {
        return {
            id: 1,
            total: 0,
            curPage:1,
            curSize:10,
            eventTotal: '0',
            event: null,
            resData: [{
                articleID: '1',
                title: 'title',
                content: 'xxxxx',
                num: '233',
                operation: '',
            }, ]
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
        this.id = this.$route.params.id
        this.eventTotal = this.$route.query.eventTotal
        this.event = this.$route.query.event
        this.getEventLibDetail()
    },
    methods: {
        getEventLibDetail() {
            eventLibApi.getEventLibDetail(this.id).then(res => {
                this.resData = res.data.data
                this.total = res.data.data.length
            })
        },
        getEventRes() {
            eventResultApi.getEventResult(this.id).then(res => {
                this.total = res.data.data.rows.size
                this.resData = res.data.data.rows
            })
        },
        toResultDetail(id) {
          this.$router.push({path:"/resultDetail/"+id, query:{projectID:this.id}});
        },
        download() {
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.resData)));
            element.setAttribute('download', this.event.name + '_result');

            element.style.display = 'none';
            document.body.appendChild(element);

            element.click();

            document.body.removeChild(element);
            console.log(element)
        }
    }
};
</script>

<style scoped>
.el-button--text {
    color: black
}

.el-button--text:hover {
    color: red;
}
</style>
