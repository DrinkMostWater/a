<template>
  <Header imgName='cssz.png' navTitle='参数设置' />

  <div class='parameter'>
    <div class='top'>
      <div class='contentTitle tip1'>模型参数预览</div>
      <div class='contentTitle tip2'>模型参数设置</div>
    </div>
    <div class='content'>
      <div class='left'>
        <div class='text'>{{ pageData.code }}</div>
        <div class='bottom'>
          <el-button class='bt' @click='handleRestore' :loading='restoreBtnLoading' plain>恢复默认</el-button>
          <el-button class='bt' @click='handleExecute' :loading='executeBtnLoading' plain>执行</el-button>
        </div>
      </div>

      <div class='center'></div>

      <div class='left right'>
        <div class='text'>
          <el-form :inline='true' :model='formInline' class='form-inline' label-position='top' :rules='rules'
                   ref='formRef' hide-required-asterisk>
            <el-form-item label='数据源' prop='source'>
              <el-input v-model='formInline.source' placeholder='请输入' />
            </el-form-item>
            <el-form-item label='图片尺寸' prop='imgsz'>
              <el-input v-model='formInline.imgsz' placeholder='请输入' />
            </el-form-item>
            <el-form-item label='报警阀值' prop='abnormal_thres'>
              <el-input v-model='formInline.abnormal_thres' placeholder='请输入' />
            </el-form-item>
            <el-form-item label='预测框宽度' prop='line_thickness'>
              <el-input v-model='formInline.line_thickness' placeholder='请输入' />
            </el-form-item>
            <el-form-item label='IOU-THRES' prop='iouthress'>
              <el-input v-model='formInline.iouthress' placeholder='请输入' />
            </el-form-item>
            <el-form-item label='CONF-THRES' prop='confthress'>
              <el-input v-model='formInline.confthress' placeholder='请输入' />
            </el-form-item>
            <el-form-item label='检测区域' prop='m_id'>
              <el-input v-model='formInline.m_id' placeholder='请输入' />
            </el-form-item>
            <el-form-item label='最大检测数量' prop='maxdet'>
              <el-input v-model='formInline.maxdet' placeholder='请输入' />
            </el-form-item>
            <!--            <el-form-item label='检测线设置'>-->
            <!--              <el-input v-model='formInline.va1' placeholder='请输入' />-->
            <!--            </el-form-item>-->
          </el-form>
        </div>
        <div class='bottom'>
          <el-button class='bt' @click='handleReset' plain>一键清空</el-button>
          <el-button class='bt' @click='handleSave' :loading='saveBtnLoading' plain>保存</el-button>
        </div>
      </div>
    </div>
    <p class='copyright'>Copyright@山东众志电子有限公司</p>
  </div>
</template>

<script setup name='sceneType'>
import { defineAsyncComponent, reactive, ref } from 'vue'
import { parameterSettingsApi } from '@/api/common/parameterSettingsApi.js'
import { ElMessage } from 'element-plus'

const Header = defineAsyncComponent(() => import('@/components/Header.vue'))
const formRef = ref()

const executeBtnLoading = ref(false)
const restoreBtnLoading = ref(false)
const saveBtnLoading = ref(false)

const title = ref('')
title.value = localStorage.getItem('globalTitle')
const pageData = ref({})

const apiData = reactive({
  '玻璃纤维丝飞丝检测': {
    preview: 'fsmPreview',
    restore: 'fsmRestore',
    execute: 'fsmExecute',
    alter: 'fsmAlter'
  },
  '火灾检测': {
    preview: 'hzmPreview',
    restore: 'hzmRestore',
    execute: 'hzmExecute',
    alter: 'hzmAlter'
  },
  '安全帽检测': {
    preview: 'aqmPreview',
    restore: 'aqmRestore',
    execute: 'aqmExecute',
    alter: 'aqmAlter'
  },
  '人员统计计数': {
    preview: 'ptmPreview',
    restore: 'ptmRestore',
    execute: 'ptmExecute',
    alter: 'ptmAlter'
  },
  '车辆统计计数': {
    preview: 'ctmPreview',
    restore: 'ctmRestore',
    execute: 'ctmExecute',
    alter: 'ctmAlter'
  }
})

const rules = reactive({
  source: [
    { required: true, message: '请输入数据源', trigger: 'blur' }
  ],
  imgsz: [
    { required: true, message: '请输入图片尺寸', trigger: 'blur' }
  ],
  abnormal_thres: [
    { required: true, message: '请输入报警阈值', trigger: 'blur' }
  ],
  line_thickness: [
    { required: true, message: '请输入预测框宽度', trigger: 'blur' }
  ],
  iouthress: [
    { required: true, message: '请输入IOU-THRES', trigger: 'blur' }
  ],
  confthress: [
    { required: true, message: '请输入CONF-THRES', trigger: 'blur' }
  ],
  m_id: [
    { required: true, message: '请输入检测区域', trigger: 'blur' }
  ],
  maxdet: [
    { required: true, message: '请输入最大检测数量', trigger: 'blur' }
  ]
})

const formInline = ref({})

// 获取所有数据
const getPageData = () => {
  // 模型参数预览
  parameterSettingsApi[apiData[title.value].preview]().then(res => {
    pageData.value['code'] = res[0].code
  })
}

// 恢复默认
const handleRestore = () => {
  restoreBtnLoading.value = true
  parameterSettingsApi[apiData[title.value].restore]()
    .then(res => {
      pageData.value['code'] = res[0].code
      ElMessage.success('执行成功')
    })
    .finally(() => {
      restoreBtnLoading.value = false
    })
}

// 执行
const handleExecute = () => {
  executeBtnLoading.value = true
  parameterSettingsApi[apiData[title.value].execute]()
    .then(res => {
      ElMessage.success(res[0].result)
    })
    .finally(() => {
      executeBtnLoading.value = false
    })
}

// 一键清空
const handleReset = () => {
  formRef.value.resetFields()
}

// 保存
const handleSave = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      saveBtnLoading.value = true
      parameterSettingsApi[apiData[title.value].alter](formInline.value)
        .then(res => {
          pageData.value['code'] = res[0].code
          ElMessage.success('执行成功')
        })
        .finally(() => {
          saveBtnLoading.value = false
        })
    }
  })
}


getPageData()
</script>
<style scoped lang='scss'>
.parameter {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .top {
    display: flex;
    width: 83.4%;

    .tip1 {
      width: 40%;
      margin-right: 10%;
    }

    .tip2 {
      width: 50%;
    }
  }

  .content {
    width: 83.4%;
    //height: 75%;
    display: flex;

    .left {
      width: 40%;
      padding: 50px 30px;
      word-wrap: break-word;
      background: linear-gradient(to bottom, rgba(0, 149, 255, 0.8), rgba(28, 146, 255, 0.26));
      border: 1px solid #4DAAFF;
      border-radius: 4px;

      .text {
        min-height: 330px;

        .form-inline {
          width: 100%;

          :deep(.el-form-item .el-form-item__label) {
            color: #fff;
            font-size: 26px;
            text-align: center;
            padding: 0;
            line-height: 1em;
            white-space: nowrap;
          }

          :deep(.el-form-item) {
            width: 33.3%;
            padding: 2% 1%;
            margin: 0;
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
      }

      .bottom {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;

        .bt {
          width: 41%;
          text-align: center;
          max-width: 220px;
          height: 44px;
          line-height: 44px;
          border-radius: 4px;
          cursor: pointer;
          background: linear-gradient(to bottom, rgba(0, 149, 255, 0.8), rgba(28, 146, 255, 0));
          border: 1px solid #4DAAFF;
          font-size: 18px;
          color: #fff;
        }
      }
    }

    .center {
      margin: auto;
      width: 10%;
      height: 100%;
      background: url('../assets/images/parame/img1.png') no-repeat center;
      background-size: 94px auto;
    }

    .right {
      width: 50%;
    }
  }
}
</style>
