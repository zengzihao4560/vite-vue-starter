<template>
  <div class="main">
    <table width="100%" height="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" height="30%" width="50%">
          <div class="zgyc"></div>
        </td>
      </tr>
      <tr>
        <td align="center">
          <div class="login">
            <div class="top">
              <div class="updatePassword">兴业银行结果查询</div>
            </div>
            <table width="700" cellpadding="0" cellspacing="0">
              <tbody>
                <tr>
                  <form id="form" method="post"></form>
                  <td style="padding-top:20px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr height="35">
                        <td align="right" style="width:45%;">企业名称：</td>
                        <td align="left">
                          <input
                            type="text"
                            id="qymc"
                            name="qymc"
                            value
                            style="width:50%;height:20px"
                          />
                        </td>
                      </tr>
                      <tr height="35">
                        <td align="right">纳税人识别号：</td>
                        <td align="left">
                          <input
                            type="text"
                            id="nsrsbh"
                            name="nsrsbh"
                            value
                            style="width:50%;height:20px"
                          />
                        </td>
                      </tr>
                      <tr height="35">
                        <td align="right">法人名称：</td>
                        <td align="left">
                          <input
                            type="text"
                            id="frxm"
                            name="frxm"
                            value
                            style="width:50%;height:20px"
                          />
                        </td>
                      </tr>
                      <tr height="35">
                        <td align="right">法人证件类型：</td>
                        <td align="left">
                          <select id="zjlx" name="zjlx" style="width:50%;height:20px;">
                            <option value="201">居民身份证</option>
                            <option value="200">个人</option>
                            <option value="100">单位</option>
                            <option value="101">组织机构代码证</option>
                            <option value="199">其他证件</option>
                            <option value="227">中国护照</option>
                            <option value="228">城镇退役士兵自谋职业证</option>
                            <option value="202">军官证</option>
                            <option value="203">武警警官证</option>
                            <option value="204">士兵证</option>
                            <option value="205">军队离退休干部证</option>
                            <option value="206">残疾人证</option>
                            <option value="207">残疾军人证（1-8级）</option>
                            <option value="208">外国护照</option>
                            <option value="209">港澳同胞回乡证</option>
                            <option value="210">港澳居民来往内地通行证</option>
                            <option value="211">台胞证</option>
                            <option value="212">中华人民共和国往来港澳通行证</option>
                            <option value="213">台湾居民来往大陆通行证</option>
                            <option value="214">大陆居民往来台湾通行证</option>
                            <option value="215">外国人居留证</option>
                            <option value="216">外交官证</option>
                            <option value="217">领事馆证</option>
                            <option value="218">海员证</option>
                            <option value="219">香港身份证</option>
                            <option value="220">台湾身份证</option>
                            <option value="221">澳门身份证</option>
                            <option value="222">外国人身份证件</option>
                            <option value="223">高校毕业生自主创业证</option>
                            <option value="224">就业失业登记证</option>
                            <option value="225">退休证</option>
                            <option value="226">离休证</option>
                            <option value="299">其他个人证件</option>
                            <option value="233">外国人永久居留证</option>
                          </select>
                        </td>
                      </tr>
                      <tr height="35">
                        <td align="right">法人证件号码：</td>
                        <td align="left">
                          <input
                            type="text"
                            id="frsfz"
                            name="frsfz"
                            value
                            style="width:50%;height:20px"
                          />
                        </td>
                      </tr>
                      <tr height="35">
                        <td align="right">法人移动手机号码：</td>
                        <td align="left">
                          <input
                            type="text"
                            id="frsjh"
                            name="frsjh"
                            value
                            style="width:50%;height:20px"
                          />
                        </td>
                      </tr>
                      <!-- <tr height="35">
                        <td align="right">贷款期限（月）：</td>
                        <td align="left">
                          <input
                            type="text"
                            id="dkqx"
                            name="dkqx"
                            value
                            style="width:50%;height:20px"
                          />
                        </td>
                      </tr> -->
                      <tr height="35">
                        <td align="right">交换类型：</td>
                        <td align="left">
                          <select
                            id="exchangetype"
                            name="exchangetype"
                            style="width:50%;height:20px"
                          >
                            <option value="01">授信审批</option>
                            <option value="02">贷后管理</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td align="right"></td>
                        <td align="left" style="padding-top:15px;">
                          <button
                            id="submit"
                            v-on:click="pushMessage"
                            type="submit"
                            class="submit"
                          >提交信息</button>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table width="100%" cellpadding="0" cellspacing="0" style="padding-top:15px;">
              <tr>
                <td align="center">
                  <font id="error" color="red">&nbsp;</font>
                </td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
      <tr height="30%"></tr>
    </table>
  </div>
</template>



<script lang="ts">
import { defineComponent } from "vue";
import AV from "leancloud-storage";



export default defineComponent({
  name: "Home",
  methods: {
    check: function() {
      var qymc = document.getElementById("qymc") as HTMLInputElement; //企业名称
      var nsrsbh = document.getElementById("nsrsbh") as HTMLInputElement; //纳税人识别号
      var frxm = document.getElementById("frxm") as HTMLInputElement; //法人姓名
      var zjlx = document.getElementById("zjlx") as HTMLInputElement; //证件类型
      var frsfz = document.getElementById("frsfz") as HTMLInputElement; //法定代表人证件号码
      var frsjh = document.getElementById("frsjh") as HTMLInputElement; //法定代表人移动手机号码
      var dkqx = document.getElementById("dkqx") as HTMLInputElement; //贷款期限（月）
      var exchangetype = document.getElementById(
        "exchangetype"
      ) as HTMLInputElement; //交换类型
      if (qymc.value == "") {
        alert("企业名称不能为空！");
        return false;
      }
      if (nsrsbh.value == "") {
        alert("纳税人识别号不能为空！");
        return false;
      }
      if (frxm.value == "") {
        alert("法人姓名不能为空！");
        return false;
      }
      if (zjlx.value == "") {
        alert("法人证件类型不能为空！");
        return false;
      }
      if (frsfz.value == "") {
        alert("法人证件号码不能为空！");
        return false;
      }
      if (frsjh.value == "") {
        alert("法人移动手机号码不能为空！");
        return false;
      }
      // if (dkqx.value == "") {
      //   alert("贷款期限（月）不能为空！");
      //   return false;
      // }
      if (exchangetype.value == "") {
        alert("交换类型不能为空！");
        return false;
      }
      return true;
    },

    

    pushMessage() {
      if (this.check()) {
        setTimeout(() => {
          confirm("审核拒绝");
          location.reload();
        }, 500);
      }
    }

}
    //   if (this.check()) {
    //     var qymc = document.getElementById("qymc") as HTMLInputElement; //企业名称
    //     var nsrsbh = document.getElementById("nsrsbh") as HTMLInputElement; //纳税人识别号
    //     var frxm = document.getElementById("frxm") as HTMLInputElement; //法人姓名
    //     var zjlx = document.getElementById("zjlx") as HTMLInputElement; //证件类型
    //     var frsfz = document.getElementById("frsfz") as HTMLInputElement; //法定代表人证件号码
    //     var frsjh = document.getElementById("frsjh") as HTMLInputElement; //法定代表人移动手机号码
    //     var dkqx = document.getElementById("dkqx") as HTMLInputElement; //贷款期限（月）
    //     var exchangetype = document.getElementById(
    //       "exchangetype"
    //     ) as HTMLInputElement; //交换类型
    //     // 声明 class
    //     const Todo = AV.Object.extend("UserMessage");
    //     // 构建对象
    //     const todo = new Todo();
    //     // 为属性赋值
    //     todo.set("qymc", qymc.value);
    //     todo.set("nsrsbh", nsrsbh.value);
    //     todo.set("frxm", frxm.value);
    //     todo.set("zjlx", zjlx.value);
    //     todo.set("frsfz", frsfz.value);
    //     todo.set("frsjh", frsjh.value);
    //     todo.set("dkqx", dkqx.value);
    //     todo.set("exchangetype", exchangetype.value);

    //     // 将对象保存到云端
    //     todo.save().then(
    //       todo => {
    //         // 成功保存之后，执行其他逻辑
    //         alert("提交成功");
    //         location.reload()
    //       },
    //       error => {
    //         alert("网络错误，请稍后重试");
    //       }
    //     );
    //   }
    // }
  
});


</script>

<style type="text/css">
* {
  margin: 0 auto;
  padding: 0;
  border: 0;
  font-size: 12px;
}
body {
  background: #0462a5;
  font: 12px "宋体";
  color: #004c7e;
}
input {
  border: 1px solid #004c7e;
}
.main {
  background: url(../../public/bg.jpeg) repeat-x;
  height: 100%;
}
.zgyc {
  background: url(../../public/xylogo.png) no-repeat;
  cursor: hand;
  width: 636px;
  height: 220px;
  border: 0;
}
.login {
  background: #ddf1fe;
  width: 700px;
  height: 400px;
  border: 1px solid #000;
}
.top {
  background: url(../../public/login_bg.jpeg) repeat-x;
  width: 700px;
  height: 40px;
  border: 1px solid #2376b1;
  margin-top: 1px;
}
.logo {
  background: url(../../public/logo.gif) no-repeat;
  width: 150px;
  height: 42px;
  float: left;
  margin: 29px 0 0 14px;
}
.submit {
  cursor: hand;
  width: 71px;
  height: 24px;
  border: 0;
  background-color: #8fc8f5;
}
.reset {
  background: url(../../reset.gif) no-repeat;
  cursor: hand;
  width: 71px;
  height: 24px;
  border: 0;
}
.updatePassword {
  font-size: 24px;
  color: white;
  margin: 2px auto;
  font-family: "微软雅黑";
}
.back {
  background: url(../../back.gif) no-repeat;
  cursor: hand;
  width: 71px;
  height: 24px;
  border: 0;
}
</style>