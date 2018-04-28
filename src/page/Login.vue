<template>
 <div class="css-form-wrap">
     <img src="./../assets/img/login/logo@2x.png" class="css-login-logo" />
    <el-form 
      :model="ruleForm2"
      status-icon 
      ref="ruleForm2"
      class="css-login-ruleForm"
      :rules="rule2"
      >
     <el-form-item
      prop="username"
      >
       <el-input placeholder="用户名" type="username" v-model="ruleForm2.username" auto-complete="off"></el-input>
     </el-form-item>
     <el-form-item
      prop="password"
      >
       <el-input placeholder="密码" v-model="ruleForm2.password" auto-complete="off"></el-input>
     </el-form-item>
     <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
     </el-form-item>
    </el-form>
 </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm2: {
        username: "",
        password: ""
      },
      rule2: {
        username: [
          { required: true, message: "请输入用户名", tyigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", tyigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.ruleForm2.username);
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.css-login-logo {
  width: 330px;
  margin-top: 200px;
}
.css-form-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("./../assets/img/login/bjt@1x.jpg") no-repeat center 50%;
  text-align: center;
}
.css-login-ruleForm {
  padding: 50px;
  width: 400px;
  margin: 40px auto;
  border: 1px solid #cecece;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
}
.el-input__inner {
  line-height: 52px;
  height: 52px;
}
.el-form-item__content {
  text-align: center;
}
.el-button--primary {
  width: 100%;
  line-height: 54px;
  padding: 0;
  font-size: 20px;
  letter-spacing: 8px;
  border-color: #e02e24;
  background: #e02e24;
  border-radius: 0;
}
.el-button--primary:focus,
.el-button--primary:hover {
  border-color: #e02e24;
  background: #e02e24;
}
</style>
