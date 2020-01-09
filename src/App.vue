<template>
  <div id="app">
    <section v-if="$route.meta.keepAlive">
      <nav class="navBar" style="z-index: 1;">

        <Menu  mode="horizontal" :theme="theme1" avtive-name="1" @on-select="onSelect">
          <template>
            <img src="../static/img/logo.png" />
          </template>
          <Submenu name="1" style="float: right">
            <template slot="title">
              <el-icon class="el-icon-s-custom"/>
              萌泰科技
            </template>
            <MenuItem name="LogOut" ><div @click="logout">退出</div></MenuItem>

          </Submenu>
          <MenuItem name="AnalysisMenu"  style="float: right" >
            <el-icon class="el-icon-set-up"></el-icon>
            分析配置
          </MenuItem>
          <MenuItem name="MyProject" style="float: right" >
            <el-icon class="el-icon-s-custom"/>
            我的项目
          </MenuItem>
        </Menu>
      </nav>

    </section>
    <router-view/>
  </div>
</template>

<script>
  import authApi from "@/utils/auth";
  export default {
    name: 'App',
    data() {
      return {
        theme1: 'light'
      }
    },
    methods:{
      onSelect(d) {
        this.$router.push({ path: "/" + d });
      },
      logout(){
        authApi.removeUser();
        this.$message({
            type:'success',
            message:'成功退出'
        })
          this.$router.push('/login');
      }
    }
  }
</script>
<style scoped>
  .ivu-menu {
     background-color: #e6e6e6;

  }
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
    color: white;
    background-color: #ff3333;
    border-bottom: 2px solid #ff3333;
  }


</style>
<style>

</style>
