<template>
  <div class="background_img">
    <div class="empty_box"></div>
    <div class="form_div">
      <el-card class="box-card" :body-style="{padding: '10px'}">
        <template #header>
          <div class="card-header">
            <span>湖南国税申请信息</span>
          </div>
        </template>
        <el-form ref="form" :model="form" label-width="120px" class="input_form">
          <el-form-item label="企业名称:">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="纳税人识别号:">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="法人名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="法人证件类型">
            <el-select v-model="form.region" placeholder="请选择证件类型">
              <el-option label="个人" value="person"></el-option>
              <el-option label="企业" value="company"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="法人证件号码">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="法人移动手机号">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="贷款期限">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即申请</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "form",
  data() {
    return {
      form: {
        name: "",
        region: "",
      },
    };
  },
};
</script>

<style lang="stylus" scoped>
.background_img {
  width: 100%;
  height: 100%;
  background-image: url('../bg.jpeg');
  background-repeat: repeat-x;
  background-size: 100% 100%;
}
.empty_box {
  height: 90px;
}
.card-header {
  justify-content: center;
  display: flex;
}
.form_div {
  display: flex;
  justify-content: center;
}
.input_form {
  width: 100%;
  background-color: #fff;
}
.el-form-item {
    margin-bottom 5px
}
:deep(.el-card .el-card__header) {
  padding: 10px;
}
</style>

