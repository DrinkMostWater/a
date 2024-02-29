<template>
  <Header imgName="sjhc.png" navTitle="数据回传" />

  <div class="backhaulWrap">
    <div class="contentTitle">数据回传</div>
    <div class="backhaulContent">
      <el-form :inline='true' :model='formInline' class='form-inline' label-position='top' :rules='rules' ref='formRef'
        hide-required-asterisk>
        <el-form-item label='目标地址' prop='ip'>
          <el-input v-model='formInline.ip' placeholder='请输入' />
        </el-form-item>
        <el-form-item label='用户名' prop='user'>
          <el-input v-model='formInline.user' placeholder='请输入' />
        </el-form-item>
        <el-form-item label='密码' prop='pwd'>
          <el-input v-model='formInline.pwd' placeholder='请输入' />
        </el-form-item>
        <el-form-item label='设备名称' prop='device'>
          <el-input v-model='formInline.device' placeholder='请输入' />
        </el-form-item>
        <el-form-item label='模型名称' prop='m_name'>
          <el-input v-model='formInline.m_name' readonly placeholder='请输入' />
        </el-form-item>

      </el-form>
      <div class="back">
        <div class="backhaulSuccess" v-show="showTip" @click="showTip = false">
          <h3><el-icon>
              <CircleCheck />
            </el-icon>数据回传成功！</h3>
          <p>数据回传时间：{{ msgTime['数据回传成功'] }}</p>
        </div>
      </div>


      <el-button :loading="loading" class="backhaulBtn bt" @click="dataDownload">数据回传</el-button>
    </div>
  </div>
  <p class="copyright">Copyright@山东众志电子有限公司</p>
</template>

<script setup name="backhaul">
// 引入组件
import { defineAsyncComponent, ref, reactive, onMounted } from "vue";
import { dataDownloadApi } from '@/api/common/dataDownloadApi.js'
const showTip = ref(false)
const formInline = ref({

})
const title = localStorage.getItem('globalTitle')
onMounted(() => {
  console.log(title);

  switch (title)
  {
    case '车辆统计计数':
      formInline.value.m_name = 'ctm'
      break;
    case '人员统计计数':
      formInline.value.m_name = 'ptm'
      break;
    case '火灾检测':
      formInline.value.m_name = 'hzm'
      break;
    case '安全帽检测':
      formInline.value.m_name = 'aqm'
      break;
    case '玻璃纤维丝飞丝检测':
      formInline.value.m_name = 'fsm'
      break;
    default:
      break;
  }
})
const formRef = ref()
const rules = reactive({
  ip: [
    { required: true, message: '请输入目标地址', trigger: 'blur' }
  ],
  user: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  pwd: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ],
  device: [
    { required: true, message: '请输入设备名称', trigger: 'blur' }
  ],
  m_name: [
    { required: true, message: '请输入模型名称', trigger: 'blur' }
  ],
})

const loading = ref(false)
const msgTime = ref({ '数据回传成功': '' })
const dataDownload = () => {
  formRef.value.validate((valid) => {
    if (valid)
    {
      let params = {
        ...formInline.value
      }
      loading.value = true
      dataDownloadApi.datadownload(params).then(res => {
        msgTime.value = res[0]
        showTip.value = true
        loading.value = false
      })
    }
  })

}

const Header = defineAsyncComponent(() => import('@/components/Header.vue'));


</script>

<style lang="scss" scoped>
.bt {
  width: 31%;
  min-width: 220px;
  text-align: center;
  margin: 0 34px;
  height: 44px;
  line-height: 44px;
  border-radius: 4px;
  cursor: pointer;
  background: linear-gradient(to bottom, rgba(0, 149, 255, 0.8), rgba(28, 146, 255, 0));
  border: 1px solid #4DAAFF;
  font-size: 18px;
  color: #fff;
}

.backhaulContent {

  width: 83.4%;
  margin: 0 auto;
  min-height: 300px;
  background-color: #0C35CD;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0 50px;
  border: 1px solid #1690FF;

  .backhaulSuccess {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 50%;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background: linear-gradient(180deg, rgba(3, 126, 243) 0%, rgba(15, 71, 243) 100%);
    border-radius: 4px;
    margin-bottom: 50px;
    border: 1px solid #1690FF;

    h3 {
      display: flex;
      align-items: center;
      line-height: 30px;
      font-weight: bold;
      font-size: 28px;
      margin-bottom: 20px;

      .el-icon {
        font-size: 30px;
        margin-right: 6px;
      }
    }

  }

  .backhaulBtn {
    margin-top: 30px;
    width: 220px;
    height: 46px;
    line-height: 42px;
    text-align: center;
    border-radius: 4px;
    font-size: 24px;
    background: linear-gradient(180deg, rgba(0, 149, 255, 0.8) 0%, rgba(28, 146, 255, 0) 100%);
    border: 1px solid #4DAAFF;
    cursor: pointer;
  }

  .form-inline {
    width: 100%;

    :deep(.el-form-item .el-form-item__label) {
      color: #fff;
      font-size: 30px;
      text-align: center;
      padding: 0;
      line-height: 1em;
    }

    :deep(.el-form-item) {
      width: 29.3%;
      margin: 2% 2%;
    }

    :deep(.el-input__wrapper) {
      border: 1px solid #4DAAFF;
      overflow: hidden;
      padding: 0;
    }

    :deep(.el-input__inner) {
      height: 55px;
      text-align: center;
      font-size: 24px;
      color: #FFFFFF;
      background: rgb(6, 78, 219);
    }
  }

  .back {}
}
</style>
