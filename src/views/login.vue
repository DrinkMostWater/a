<template>
  <!-- 检测场景 -->
  <Header imgName='cssz.png' navTitle='参数设置' />

  <div class='sceneWrap'>
    <div class='left'>
      <div class='font'>
        <h3>欢迎使用</h3>
        <p>参数配置功能</p>
      </div>
    </div>
    <div class='right'>
      <div class='top'>
        <div class='login'>
          <div class='one'>1</div>
          <div class='font1'>账号登录</div>
        </div>
        <div class='line'></div>
        <div class='login'>
          <div class='one'>2</div>
          <div class='font1'>参数设置</div>
        </div>
      </div>
      <el-form :model='form' class='form'>
        <el-input :type='!showUserName ? "text" : "password"' v-model='form.name' placeholder='请输入账号'>
          <template #prepend>
            <div class='icon'>
              <img src='../assets/images/login/icon.png' alt=''>
            </div>
          </template>
          <template #append>
            <div v-show='!showUserName' @click='showUserNameChange'>
              <img src='../assets/images/login/icon1.png' alt=''>
            </div>
            <div class='icon' v-show='showUserName' @click='showUserNameChange'>
              <img src='../assets/images/login/icon2.png' alt=''>
            </div>
          </template>
        </el-input>

        <el-input :type='showPassWord ? "text" : "password"' v-model='form.psd' placeholder='请输入密码' class='inp'>
          <template #prepend>
            <div class='icon'>
              <img src='../assets/images/login/icon3.png' alt=''>
            </div>
          </template>

          <template #append>
            <div class='icon' v-show='!showPassWord' @click='showPassWordChange'>
              <img src='../assets/images/login/icon2.png' alt=''>
            </div>
            <div class='icon' v-show='showPassWord' @click='showPassWordChange'>
              <img src='../assets/images/login/icon1.png' alt=''>
            </div>
          </template>
        </el-input>

        <el-button class='btn' type='primary' @click="login('/parameterSettings')">登 录</el-button>
        <div class='btn1'><span>忘记密码</span></div>
      </el-form>
    </div>
  </div>

  <p class='copyright'>Copyright@山东众志电子有限公司</p>
</template>

<script setup name='sceneType'>
// 引入组件
import { defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'

const router = useRouter()

const goRoute = (url) => {
  router.push(url)
}

const login = (url) => {
  if (form.name !== 'admin') {
    return ElMessage.error('用户不存在')
  }

  if (form.name === 'admin' && form.psd !== 'T@cl0ud123.com') {
    return ElMessage.error('密码不正确')
  }

  if (form.name === 'admin' && form.psd === 'T@cl0ud123.com') {
    localStorage.setItem('token', '1')
    router.push(url)
  }
}

const form = reactive({
  name: 'admin',
  psd: 'T@cl0ud123.com'
})

const showUserName = ref(false)
const showPassWord = ref(false)

const showPassWordChange = () => {
  showPassWord.value = !showPassWord.value
}
const showUserNameChange = () => {
  showUserName.value = !showUserName.value
}

const Header = defineAsyncComponent(() => import('@/components/Header.vue'))


</script>
<style scoped lang='scss'>
.sceneWrap {
  width: 83.4%;
  background: #fff;
  margin: 65px auto;
  display: flex;
  border-radius: 4px;

  .left {
    width: 60%;
    position: relative;
    background: rgb(235, 245, 255) url('../assets/images/login/img.png') no-repeat 80% bottom;
    background-size: 68% auto;

    .font {
      position: absolute;
      top: 8%;
      left: 8%;
      color: #1890FF;
      font-size: 30px;

      h3 {
        font-size: 50px;
        font-weight: bold;
      }
    }
  }

  .right {
    width: 40%;

    .top {
      display: flex;
      justify-content: center;
      margin-top: 120px;

      .login {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .font1 {
          font-size: 18px;
          color: rgba(30, 116, 248, 1);
        }
      }

      .one {
        font-size: 36px;
        width: 55px;
        height: 55px;
        line-height: 55px;
        background: rgba(22, 144, 255, 1);
        border-radius: 50%;
        text-align: center;
      }

      .line {
        margin: 30px 20px 0 20px;
        width: 160px;
        height: 1px;
        background: rgba(24, 144, 255, 1);
      }
    }

    .form {
      width: 80%;
      margin: 50px auto;

      .inp {
        margin-top: 27px;
      }

      .btn {
        margin-top: 90px;
        font-size: 24px;
        width: 100%;
        height: 62px;
      }

      .btn1 {
        margin: 0 auto;
        font-size: 18px;
        color: #409eff;
        text-align: center;
        line-height: 40px;

        span {
          cursor: pointer;
        }
      }
    }
  }

  .icon {
    width: 100%;
    /* 最大宽度为容器宽度 */
    height: auto;
    padding: 16px 0;

    /* 高度自动调整 */
    img {
      width: 32px;
      // height: 32px;
    }
  }
}
</style>
