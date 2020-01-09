<template>
    <div id="RegistPage">
      <div id="head-div">
        <div id="logo" >
          <img src="static/icons8_planet_on_the_dark_side_128px.png" width="80" height="80">
        </div>
        <div id="WebName" style="font-size: 30px;color: white;float: left;margin-top: 43px;margin-left: 10px">
          锐研·云质析
        </div>
      </div>
      <loadingAnimate v-if="loading" class="center-fix"/>
      <div class="RegistFormContainer">
        <div class="Wrapper">
          <div class="RegistText">
            <span>注册你的账号</span>
          </div>
          <div class="ErrHint alert alert-danger" v-if="errHint">
            {{ errHint }}
          </div>
          <div class="RegistInput">
            <div class="username">
              <input type="text" v-model="name" placeholder="用户名" @keyup.enter="registEventHandler">
            </div>
            <div class="account">
              <input type="text" v-model="email" placeholder="邮箱" @keyup.enter="registEventHandler">
            </div>
            <div class="password">
              <input type="password" v-model="password" placeholder="密码" @keyup.enter="registEventHandler">
            </div>
            <div class="password-confirm">
              <input type="password" v-model="password2" placeholder="密码确认" @keyup.enter="registEventHandler">
            </div>
          </div>
          <div class="Submit">
            <button class="btn submit" type="button" @click="registEventHandler">注册</button>
          </div>
        </div>
      </div>
      <div class="LoginHint">
        <div class="Wrapper">
          <div class="hint" style="margin-left: 170px">
            <span>已经有账号了？</span>
            <router-link to="/login">立马登录! »</router-link>
          </div>
        </div>
      </div>
      <div id="buttom-div">
        <div id="buttom-content" style="color: white;">
          <p style="margin-left: 650px">关于我们    服务协议   隐私政策</p>
          <p style="margin-left: 600px">Copyright 2018 上海萌泰数据科技有限公司</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Register"
    }
</script>

<style scoped>
  .ErrHint{
    color:red;
    font-size: 16px;
  }
  #head-div
  {
    height: 15%;
    width: 100%;
    background-color: #ff3333;
    margin-bottom: 50px;
  }
  #buttom-div
  {
    position: fixed;
    bottom: 0;
    height: 15%;
    width: 100%;
    background-color: #ff3333;
    /*margin-top: 100px;*/
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
  #RegistPage {
    height: calc(100vh - 46px);
    /* padding-top: 10px; */
    background-color: #e6ecf0;
  }

  .RegistFormContainer {
    max-width: 840px;
    padding: 15px;
    margin: 0 auto;
  }

  .RegistFormContainer {
    background-color: white;
  }

  .Wrapper {
    max-width: 585px;
    padding: 0 10px;
    margin: 0 auto;
  }

  .RegistText {
    font-size: 24px;
    font-weight: 600;
    margin-left: 170px;
    margin-bottom: 20px;
  }

  .RegistInput input {
    width: 97%;
    max-width: 280px;
    padding: 4px;
    border: 1px solid #e6ecf0;
    border-radius: 3px;
    outline: none;
    font-size: 14px;
    line-height: 20px;
    margin-left: 125px;
  }

  .RegistInput input:focus {
    outline: 0;
    color: #14171a;
    border-color: #ff3333;
  }

  .RegistInput .username,
  .RegistInput .account,
  .RegistInput .password {
    margin-bottom: 15px;
  }

  .Submit {
    margin-top: 30px;
    margin-bottom: 200px;
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
    padding: 6px 16px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    margin-left: 200px;
  }

  .Submit button:hover {
    border-color: #ff3333;
    background-color: #ff3333;
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px #ee3333;
  }

  .LoginHint {
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
