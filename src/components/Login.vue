<template>
  <div id="LoginPage" >
    <loadingAnimate v-if="loading" class="center-fix"/>
    <div id="head-div">
      <div id="logo" >
        <img src="static/img/logo.png" width="200" height="80">
      </div>

    </div>
    <div class="LoginFormContainer">
      <div class="Wrapper">
        <div class="LoginText">
          <span >登录</span>
        </div>
        <div class="ErrHint alert alert-danger" v-if="errHint">
          {{ errHint }}
        </div>
        <div class="LoginInput" >
          <div class="account">
            账号
            <input size="large" type="text" v-model="email" placeholder="账号" @keyup.enter="loginEventHandeler"></input>
          </div>
          <div class="password">
            密码
            <input size="large" type="password" v-model="password" placeholder="密码" @keyup.enter="loginEventHandeler"></input>
          </div>
        </div>
        <div class="Submit">
          <button class="btn submit" type="button" @click="login">登录</button>
        </div>
      </div>
    </div>

    <!--<div id="buttom-div">-->
      <!--<div id="buttom-content" style="color: black;">-->
        <!--<p style="text-align: center;width: 1700px">关于我们    服务协议   隐私政策</p>-->
        <!--<p style="text-align: center">Copyright 2018 上海萌泰数据科技有限公司</p>-->
      <!--</div>-->
    <!--</div>-->
    <footer data-v-0f1723f0 class="el-footer" style="height: 60px;width: 100%;  position:fixed;bottom:0">
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
  </div>
</template>

<script>
 import userApi from "@/api/user";
 import authApi from "@/utils/auth";
    export default {
        name: "Login",
        data(){
          return{
            email: null,
            password: null,
            errHint: '',
            loading:false
          }
        },
        created(){
            if(authApi.getUser().token !== undefined){
                this.$router.push("/myproject")
            }
        },
        methods:{
            login(){
                userApi.login(this.email, this.password).then(response=>{
                    if (response.data.flag){
                        authApi.setUser(response.data.data.token, response.data.data.nickname);
                        location.href = '/myproject'
                    }else {
                        this.$message({
                            message: response.data.message,
                            type:  'error'
                        });
                        this.mobile= "";
                        this.password = "";
                    }
                })
            }
        },
}

</script>

<style scoped>
  #LoginPage {
    /* padding-top: 10px; */
    background: url('/static/img/background.jpg') center center no-repeat;
    height: 960px;
    margin:0px;
    padding: 0px;
    background-size: cover;
  }
  #head-div
  {
    height: 18%;
    width: 100%;

  }
  #buttom-div
  {
    height:13%;
    width: 100%;
    background-color: gainsboro;
    position: fixed;
    bottom: 0;
  }
  #logo
  {
    size: 20px;
    margin-top: 20px;
    margin-left: 20px;
    float: left;
  }
  #buttom-content
  {
    margin-top: 10px;
    margin-left: 40px;
    float: left;
    font-size: 17px;
    text-align: left;
  }
  .LoginFormContainer {
    width: 20%;
    margin-left: 70%;
    height: 40%;
    opacity: 0.85;
  }

  .LoginFormContainer {
    background-color: white;
  }



  .LoginText {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 5%;
    padding-top: 10%;
    text-align: center;
  }

  .LoginInput input {
    width:60%;
    margin-left: 6%;
    border: 1px solid #e6ecf0;
    border-radius: 3px;
    outline: none;
    font-size: 13px;
    line-height:30px;
    margin-top:30px;
  }

  .LoginInput input:focus {
    outline: 0;
    color: #14171a;
    border-color: #ff3333;
  }

  .LoginInput {
    margin-bottom: 40px;
    margin-left: 50px;
    margin-top: 20px;
  }

  .Submit {
    margin-top: 20%;
    margin-bottom: 20%;
    width: 60%;

    margin-left: 20%;
  }

  .Submit button {
    background-color: #ff3333;
    border: 1px solid #ff3333;
    color: #fff;
    border-radius: 100px;
    box-shadow: none;
    cursor: pointer;
    font-size: 14px;
    line-height: 20px;
    padding: 6px 36px;
    text-align: center;
    white-space: nowrap;
    width: 80%;
    margin-left: 10%;
  }

  .Submit button:hover {
    border-color: #ff3333;
    background-color: #ff3333;
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px #ff3333;
  }

  .RegistHint {
    padding: 20px 10px;
    background-color: #f5f8fa;
    font-size: 14px;
    line-height: 20px;
    color: #657786;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    max-width: 840px;
    margin: 0 auto;
  }
  .center-fix{
    position: fixed;/*固定位置*/
    z-index:99;/*设置优先级显示，保证不会被覆盖*/
    margin:auto;
    left:0;
    right:0;
    top:0;
    bottom:0;
  }
</style>
