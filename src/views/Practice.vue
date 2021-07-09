<template>
    <div class="background_img">
        <div class="empty_box"></div>
        <el-form ref="form" :model="form" label-width="80px" class="input_form">
        <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        </el-form>
        <div>xsdsdfdfs</div>
    </div>
</template>

<script lang="ts">

export default {
    name: 'form',
    data() {
        return {
            form: {
                name: '',
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.background_img {
    width 100%
    height 100%
    background-image url('https://img0.baidu.com/it/u=1679869541,4205931077&fm=26&fmt=auto&gp=0.jpg')
    background-size 100% 100%
}
.empty_box {
    height 90px
}
.input_form {
    width 80%
    background-color #fff
    padding 5%
    margin 5%
    // padding-top 10px
    // padding-right -10px
}

</style>

