<template>
  <section data-v-7e5aa87c class="el-container container-subjectExtra is-vertical">
    <!-- <header data-v-7e5aa87c class="el-header" style="height: 60px;">
      <nav data-v-273cece6 data-v-7e5aa87c class="nav-bar">
        <div data-v-273cece6 class="brand">
          <img
            data-v-273cece6
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAABBCAYAAAA36tphAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphZjAzZDM3Zi00OWVmLTQ5OWMtYjcyYi0yNTA3NzNmMGQ0MzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDkwMkRCNEZCQzRDMTFFOUI2MkZDMUU0RjY0ODE1QkQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDkwMkRCNEVCQzRDMTFFOUI2MkZDMUU0RjY0ODE1QkQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEREY2REJENTcxNTIxMUU4QjUzNDgxRTkwMzg3RTI3RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEREY2REJENjcxNTIxMUU4QjUzNDgxRTkwMzg3RTI3RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoHqLy8AAA0eSURBVHja7F1viCRHFa85E04F8QYj+EE/2BfUKMHgrIj6RWSG2wgqKnOJ5j4IxlliNDFGnZFEjRHOGQ1nUBG2DxQhMZcd9DCJcmHHKIoYhIl/g3pxB1RQQWE0aAgmcf29mVe7b+v6/3TP3/eDR89Ud1d3Vb33q1evq6tLu7u7RqFQKAglJQSFQqGEoFAolBAUCoUSgkKhUEJQKBSFEkKpVIrcf3792POxuRVyNeTTkK+/7NyDyjqKpcCyd6C5EQKI4FnYXAv5LOSFYtdPINeDFH6p6qRQQlgBQgAZvBmbOyGXh5z2DOTL5DGAGB5XtVIoISwhIYAILsXmDsjbE57+N8hHQAr3qGoplBCWhBBABEfw8xbIjZCLM1z3BzyM+K2qmEIJYYEJ4bEr16/D5nbIJRNe+ynIKYo5gBj+o6qmUEJYTELIu0b+DPkwSOHb0yo0PBwPm03+28K1+2JfBZsq/UZ6R6RTWsVNV0zcDlSnfdTpwNlH6W3+28V+P0v+br5KCtG4aA7u4SWQb6HxzmH7QTTgzhSu6VmjB4IUps0KRYra4zQ6vsnHdwKUrxlxvS6knvTmiiAcSWgZ0Y0x2jQoO/dSC2iHsmijXspyWFLvBLWVYr4JwWId8iganBrwc1C+Jwu8ljTOLVyTtn1WPKlsTVZ6ec6Qjd81kCjD6Kc0nCKUOKvxyjJEGW3WPPshpDxpOYYsigUlBMJhyKcgJ2B0N8DgvltQT9kQSVVHidrOvmqAQlYCFLnG223hFfhC8WtMKg3neKngLT62CPQ5/6yIM9pWkGfD9W3rxOfjhhHt0+B6KovkBufTd4w8rL4GRQwVlBBmB3LpH4ASnMX2JjTuH/MY9z125XpFKOeGOy513P5amt6JhhY4XypxTww3Rv+Ft2HsPvZO9ozWOSc3cL69GbfrIIoMIrwOj8U4ZSisvpQQ5hPvoKEEjIaeapxC4/83hzyJBDpxPUiQojnGGwSpyCunqKif7RADd3v6oPiEL+InHfYUbOCX2quVIFajmGNCuB9CE5cumzCf51BMAfJeKMMHoBgPZcmEJ1T1kccowBdg3N0cylwVPdcquqxx8QTZ05sY8qykyFexAITwCORdkI9BPgl59oT5vRzyfRjyvTyM+GvGfMLc/onG7vwIzcYHKvi/K7yNUgG9MdXHYeT9q7AhEgHDpEmfLgT15oMQr6oUE0NopXiCIkmgEvIIcTuB11bTYcWcDBnQEDT56CQa7Qy2X4UcyyHbqyAPm/G7E5kUmo1fBrps2iSG0w4glwobhX3M5jmG4vaEFVbw0KAYx0JoqjjFV0rkWuPY0xkIMCsinwoEDAlk+byA/UM5D0SQq+tJENm2Au5lGOB9yHR90jBvMQRWbooFXMWG/KJZFZjvZSB6lkFQgC9krFsPMYK6s88q7rYwCnd8vR1BKnR+VE9KL5OVxO/TMQbcCimLNdaB2X8iEoe4odB2xL6GOfiExw4XagnqucGPpCVaou2asv7UK5hjQhDGeC9PQDoJuU4o9TwiSrHd6LZnoicfDdgo5WPMlji3IbyVQYLhyzcg7zHjx7R+RMzEGlzPITDyWGRwrpNlJmAM4p5qNELiCUGEMHDqSbEMhMCk8C9srodSklJTFPmKaV5fju1tr4y0NitvxzFc23Na5bX//YBxdScgb+mVdNgDOTAt2pkX0Y3r2djQH8F55GWVcPzTGaqBrlcW5OYXUNU9p4wHhgec5gW0j53nMRD7fdEm2vMXiEMzdN1/hs1rITdD/j3FS7s914D/j3p9VuKeGE50hJs8+u8+S5/FEwVc85ksZBDgHbRCjqN4RpXH83l4W9sJYxmWHN3hwYbGA5aYEFipn4bQG4+vhHxnStekqLMcs/qcJg2jssRt3hTeQSfCI6kKQ54mGmLo5JJuS012iQlBNDa98fg1yD/npF5ksC1PlAvKN6l3UBfeQc8hQRd2GOHxJKE4DEKu6TmxljgMwwxfpyOvACFAYV4KuZ89hCMzvA8vYGyb93sFF7y9N8XyVcz+zD8q1/EYkh4KUmjGEKesKzskGzpDAEsudXF8L6CON2KmN3viHjWekDMumqEBHmZF+4SZfNLSREbKPaDP41Y7zo0MtvE03bD39CtOjyff/Sd0Z1DOTeGhkCE1nEk97rP/ijje4/kOfkg5e7b3lsMxDta6ZLKJ9GGYd4L0uLqpOh6MYtEJAQpBrzrToquXzkEd7K2LgPvaZCUnI94Ic/nFIiphPVQ7wPVuC+OZRc9WceIIWerJF21I/21v3xLpZU5vmoNPCYhst/g+aIahz/Gbfgq9sXkOja5zsPiEgAalxVC+aMZTmucFrrKSstUcRe2zQVScR4uua+tOsBk9ZhMTl8KIZhqIC8jJ8u7NlGSSHL2STMYu3PmmcPH7TBBNc+ELXjJwucZG3eQ8yUsZMDEkMXA58UjjCYtKCGh0ilV83IzfaXjunJS9ZcS8fHbpW6ycrqF32JgPKLvrQkf0/B4b3MasFHmCVZhkxL8sSHBgDr4nYOcP2BhCL6j3F28z1i3Jmv3VjeLQM86Sdw4590KIWpEQRa6p+Bk03G1sbEdybCT6xkMdeZ/NmbTKCd7Vz5p36Np+4j0HG7dQZZ5z6JqK84MfmfHy7b8poActzBCjvAK+rkbLFXOBQwtyn/SBlxOQNxVBBgqFYjE8BBoefAlym34CTqFYbUKgrzt9CETwqDaTQrG6hPAXyM0ggjPaPArFdDGPMQT6fPwPtWkUCiUEAj2fPn9+/dhHIRdrEykUq00IhOdBvgD5NUghj3UYR8+Ok4h7vHtuWL5Jr5f0HqPS4/JKWsa05yQtR9ixSes/bRtFlS9Lm8e1p8YQZgdaWfgcSOE+M15peaJZfu8+cUKuAOyCXqrZW4QDx9I3Jkez8fDbfiPAN87UY+yjdMr3qJNO02zlykR2/n0n4v7omh7nNRDplLbD1/b5mpR3KSSfbRO8dDnNdzhuAiaJ4Ry5JqFEn6/bF/cRt+ajzK/L1zSiHsNAZT6K46Ksbq9uOD8S+Z6GXfUqa5t7bh7uvd9z110lJYTZ4m2QYyCGO7A9CWJ4YsL8amfuvntvMtDV11xDSrPFChz1rkEDx/ZwbugbedhfZgWkbQvH+pw+MhDaj7S49wroXtYmLCPdZ03cl8f3RXnXwk7COSWnPKNFUrA9mmHoR4ZW5zIPuS58kfcu11EQufhI34ioZ0s4dNwap5HRNrk9qY2HGds8aIXnlfg2xKEFuld6XfoWyO9BDK/PM2NWlCRfaB5ao44iDe5lapYM+Bq212mycUZdo8IKn2cZ7XqQaRW7Yy78WnMk2NgqwqhyXRyV66/NZLIhyugz2cUuyBrR5uQRlbkMkuTrZgVmlE6LEGjNRHrd+X855PViyOsKuMdygmNarGztGELosgG6StihHjhon6OQPhOPt6B6RcYzYAPtJSDaLPkbE7AmAtctGXozY5sP+fyqWx4lhJzAayfewG7ww/NWCexq1k38oht2XT8aOtRDhguemXyJtBbnsZVjGStmf73CpOeUmfwG0t1OcI6syy57PGnXqaQ63nXEGqnH9zSMaKdylCcX0+Zdc+EXwrtmBTDt7zL8HO7+G/HzfWb8vcYXzKjcNCYOGrPGLuJJvTyTwSbFExK6tztO8oYcTgRcY4jz6F62eOiQRRmrPEY/UEYTsy5CwDk9k24NB/sp964wLhsETZNPZAyh4DbvCRIdcJnWViGOMIvvMtCw4TR/6p1I4doZlHsUYGJj3WIFTrMk13E28k0jIvZsyEPpirILW4oghzBS6OJ43/bQGcp4IKiYItYwaQTdek47jgFScLEV0aunwZ4HEJLfaN0Gbo/Ubc7ndcVQoY+0vowr6JAhf2L4B+T9+PkGyC9mcQ9srDXRg3gpzmuxwrhK0mF3N4/xvx06tBdBmbjMVfaASla4jss5xhK6nF8j5B4aJuSxaIo274r2XYnhwkwJQRDDT834gy03Qh6fASkMuccvpzE8fmrQN87S4pw+YGVrOmNWGxPop7i3lkm2fPk8oGH2g3KyHD3heudF5FQvFHjdFHVs5xxEfqsySZvzPVsSU0KYAPTF589DTqUgBQo60mvOr4B8s4iCim8dBjW+/SBqPeXjvsBJPvxc3JeBMR5e0HWO8vWSKn83rLcLCLrtTElv2gHXtpOE/BA33ue4hpcTKXQ4JlERdUyES0941uKGJgnb3Ofhwsqs35j3EmoPmPGMwj9MclPn14/RF42/Arks5BC6xp1GoZgyln3qcl4ewu8g6zDSt05KBuwxPITNq834mw1PqBoqFItBCPQl55sgl8OIH8w5tvAUpM1ewlltKoWieGR97Eh+02nIrTDavxd5g8j/T9i8E8OIt5jxbEdPm02hmB8P4ceQ18BQN4omA4cYvofNqyC3Q57UplMo8kdp2YMkCoVCCUGhUCghKBQKJQSFQqGEoFAolBAUCoUSgkKhUEJQKBRKCAqFYvr4vwADAIH++e0hOX4YAAAAAElFTkSuQmCC"
            alt
          />
        </div>
        <div data-v-273cece6 class="navbar-right">
          <span data-v-273cece6 class="active">
            <i data-v-273cece6 class="fa fa-file-text"></i> 我的分析
          </span>
          <span data-v-273cece6 class>
            <i data-v-273cece6 class="fa fa-bar-chart"></i> 分析配置
          </span>
          <div data-v-273cece6 class="el-dropdown">
            <span
              data-v-273cece6
              class="el-dropdown-link el-dropdown-selfdefine"
              aria-haspopup="list"
              aria-controls="dropdown-menu-2534"
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
              id="dropdown-menu-2534"
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
    <div data-v-7e5aa87c class="content">
      <div data-v-7e5aa87c class="el-row">
        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 5px">
          <el-breadcrumb-item :to="{ path: '../../AnalysisMenu' }" style="margin-top: 12px">我的分析</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'#'}" style="margin-top: 12px">事件提取</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
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
              <div style="margin-left:20px;display:none">

                <i class="fa fa-database"></i>&nbsp;&nbsp;
                <span>
                                            共计：
                                            <span style="color: red;" :v-text="eventTotal">{{eventTotal}}</span>&nbsp;条
                                        </span>
              </div>
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
                                            <span style="color: red;" :v-text="eventTotal">{{eventTotal}}</span>&nbsp;条
                                        </span>
                    </div>
                    <!---->
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="el-col el-col-2">
            <div style="line-height: 80px; text-align: right; margin-right: 30px; cursor: pointer;">
              <i aria-hidden="true" class="fa fa-list"></i>
            </div>
          </div>
        </div>

        <div style="margin-top:20px">
          <el-table :data="eventLibs" stripe
                    header-cell-style="background-color: rgb(245, 247, 249); text-align: center" style="width: 100%">
            <el-table-column align="center" prop="name" label="名称"></el-table-column>
            <el-table-column align="center" prop="dictionary_id" label="事件词典名称"></el-table-column>
            <el-table-column align="center" label="提取级别">
              <template slot-scope="scope">
                <span>{{scope.row.analysis_algorithm == 0? '句子提取':'段落提取'}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="create_time" label="创建时间"></el-table-column>
            <el-table-column align="center" prop="status" label="状态">
              <template slot-scope="scope">
                <!-- todo -->
                <el-button v-show="scope.row.status==0" size="mini" type="warning" round>
                  <span>等待中</span>
                </el-button>
                <el-button v-show="scope.row.status==1" size="mini" type="info" round>
                  <span>提取中</span>
                </el-button>
                <el-button v-show="scope.row.status==2" size="mini" type="success" round>
                  <span>已完成</span>
                </el-button>
                <el-button v-show="scope.row.status==4" size="mini" type="danger" round>
                  <span>提取出错</span>
                </el-button>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="operation" label="操作">
              <template slot-scope="scope">

                <el-button @click="toResult(scope.row.id,scope.row)" type="text"><span><i class="fa fa-line-chart"></i></span>
                </el-button>
                <el-button @click="delEventLib(scope.row.id)" type="text" style="margin-left:10px;"><span>
                                <i class="fa fa-trash"></i></span></el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- <el-pagination style="margin-top:20px" @size-change="getEventLib" @current-change="getEventLib" :current-page.sync="curPage" :page-size="curSize" layout="total,prev, pager, next, jumper" :total="total"></el-pagination> -->

        </div>

        <div data-v-7e5aa87c class="newStatistic" style="display: block;">
          <div data-v-7e5aa87c class="add">
            <h3>&nbsp;&nbsp;新建主题抽取</h3>
            <p data-v-7e5aa87c></p>
          </div>
          <el-form v-model="form" class="el-form el-form--label-left" style="width: 600px;">
            <el-form-item required="true" label="事件文本库">
              <el-select style="margin-left: 10px;width: 300px;" v-model="form.lib_id" placeholder="请选择">
                <el-option v-for="item in textLibs" :key="item.id" :label="item.textlibrary_name" :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item required="true" label="自定义名称">
              <el-input v-model="form.name" placeholder="请输入提取名称" style="margin-left: 10px;width:300px;"
                        auto-complete="false"></el-input>
            </el-form-item>
            <el-form-item required="true" label="提取字段">
              <template>
                <el-select style="margin-left: 25px;width: 300px;" v-model="value1" multiple placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </template>
            </el-form-item>
            <el-form-item required="true" label="提取级别">
              <el-radio-group style="margin-left: 30px;" v-model="form.algorithm">
                <el-radio :label="0">句子提取</el-radio>
                <el-radio :label="1">段落提取</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item required="true" label="事件词典">
              <el-select style="margin-left: 24px;width: 300px;" v-model="form.dic_id" placeholder="请选择">
                <el-option v-for="item in dictLibs" :key="item.id" :label="item.name" :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <el-button @click="startEventExtract" type="primary">
            <!---->
            <!---->
            <span>开始提取</span>
          </el-button>
        </div>
      </div>
      <!---->
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
          <a data-v-4e9c2f90 href=" http://beian.miit.gov.cn" target="_blank" style="color: rgb(73, 49, 133);">沪 ICP 备
            09099644 号</a>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
    import dictionaryApi from "@/api/dictionary";
    import textLibApi from "@/api/textLib";
    import eventLibApi from "@/api/eventLib";
    import authApi from "@/utils/auth"

    export default {
        name: "EventExtract",
        data() {
            return {
                timer: null,
                checkAll: false,
                eventTotal: 0,
                event: {
                    total: 0,
                    create_time: '2020 - 08 - 22'
                },
                total: 0,
                curPage: 1,
                curSize: 10,
                options: [{
                    value: 'title',
                    label: '标题'
                }, {
                    value: 'author',
                    label: '作者'
                }, {
                    value: 'publish_time',
                    label: '发布时间'
                }, {
                    value: 'summary',
                    label: '摘要'
                }, {
                    value: 'keywords',
                    label: '关键词'
                }, {
                    value: 'content',
                    label: '内容'
                }, {
                    value: 'url',
                    label: 'url'
                }],
                textLibs: [{
                    name: '1',
                    id: '1',
                }, {
                    name: '2',
                    id: '2',
                }],
                dictLibs: [{
                    name: '1',
                    id: '1',
                }, {
                    name: '2',
                    id: '2',
                }],
                form: {
                    lib_id: null,
                    name: '',
                    type: 13,
                    algorithm: null,
                    dic_id: null,
                },
                eventLibs: [{
                    name: "name",
                    dicName: "someDictionary",
                    level: "juzi",
                    time: "now",
                    state: "",
                    operation: ""
                }],
                value1: [],
            };
        },
        created() {
            if (authApi.getUser().token === undefined) {
                this.$message({
                    type: 'error',
                    message: '请先登录'
                })
                this.$router.push('/login')
                return
            }
            // authApi.getUser().token != undefined
            this.initData()
            this.getAllEventLib()
            // this.getEventLib()
            this.getStatus()
            this.timer = setInterval(() => {
                setTimeout(this.getStatus)
            }, 3000)
        },
        beforeDestroy() {
            clearInterval(this.timer);
        },
        methods: {
            initData() {
                eventLibApi.getTextLibAndDictionary().then(res => {
                    this.textLibs = res.data.data.libs
                    this.dictLibs = res.data.data.dicts
                })
            },
            // getTextLib() {
            //     eventLibApi.createEventLib(this.form).then(res=>{
            //         this.total=res.data.data.total
            //         this.eventLibs=res.data.data.rows
            //     })
            // },
            // gtDict(){
            //      dictionaryApi.getDictionaryData(1, 10).then(res => {
            //         this.dictLibs = res.data.data.rows;
            //     });
            // },
            getStatus() {
                for (let i = 0; i < this.eventLibs.length; i++) {
                    let item = this.eventLibs[i];
                    if (item.status !== 2)
                        eventLibApi.getStatus(item.id).then(res => {
                            item.status = res.data.data.status
                        })
                }
            },
            startEventExtract() {
                eventLibApi.createEventLib(this.form).then(res => {
                    this.$message({
                        type: res.data.flag ? "success" : "error",
                        message: res.data.message
                    });
                    if (res.data.flag)
                        this.getAllEventLib()
                })
            },
            getAllEventLib() {
                eventLibApi.getAllEventLib().then(res => {
                    this.eventTotal = res.data.data.total
                    this.eventLibs = res.data.data.json
                })
            },
            getEventLib() {
                eventLibApi.getEventLib(this.curPage, this.curSize).then(res => {
                    this.total = res.data.data.total
                    this.eventLibs = res.data.data.rows
                })
            },
            delEventLib(id) {
                eventLibApi.delEventLib(id).then(res => {
                    this.$message({
                        type: res.data.flag ? "success" : "error",
                        message: res.data.message
                    });
                    if (res.data.flag)
                        this.getAllEventLib()
                })
            },
            toResult(id, row) {
                this.$router.push({path: "/eventResult/" + id, query: {eventTotal: this.eventTotal, event: row}});
            },
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
