<template>
  <!-- 检测场景 -->
  <Header imgName='sjcx.png' navTitle='数据查询' />

  <div class='sceneWrap'>
    <div class='contentTitle'>数据查询</div>
    <div class='statisticalCount'>
      <el-table :data='showData' stripe style='width: 100%' :border='false' :header-cell-style='headerStyle'
                :cell-style='cellStyle' v-loading='params.loading'>
        <el-table-column type='index' label='序号' width='60px' />
        <el-table-column prop='m_id' label='检测区域' />
        <el-table-column prop='det_date' label='检测时间' />
        <el-table-column prop='result' label='异常目标数量' />
        <el-table-column prop='time' label='检测耗时（ms）' />
        <el-table-column label='图像预览'>
          <template #default='scope'>
            <div class='options' @click='preview(scope.row)'>
              <el-image
                src='./icon.png'
                class='cup'
                :zoom-rate='1.2'
                :max-scale='7'
                :min-scale='0.2'
                :preview-src-list='[scope.row.abnormal_path]'
                fit='cover'
                :preview-teleported='true'
              />
            </div>
          </template>
        </el-table-column>
        <template #empty>
          <el-empty description='暂无数据' />
        </template>
      </el-table>
      <div class='page'>
        <el-pagination
          background
          layout='prev, pager, next,total, slot1'
          :total='allData.length'
          class='mt-4'
          @current-change='onHandleCurrentChange'
          :hide-on-single-page='true'
        >
        </el-pagination>
      </div>
    </div>
  </div>

  <p class='copyright'>Copyright@山东众志电子有限公司</p>
</template>

<script setup name='sceneType'>
// 引入组件
import { defineAsyncComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { dataQueryApi } from '@/api/common/dataQueryApi.js'

const Header = defineAsyncComponent(() => import('@/components/Header.vue'))

const params = reactive({
  page: 1,
  size: 10,
  loading: false
})

const apiList = reactive({
  '玻璃纤维丝飞丝检测': 'fsmAlldata',
  '人员统计计数': 'ptmAlldata',
  '车辆统计计数': 'ctmAlldata',
  '安全帽检测': 'aqmAlldata',
  '火灾检测': 'hzmAlldata'
})

// 所有数据、展示数据
const allData = ref([])
const showData = ref([])
let title = localStorage.getItem('globalTitle')


const headerStyle = { background: '#0D86FF', color: '#fff', textAlign: 'center' }

const cellStyle = (row) => {
  if (row.rowIndex % 2) return {
    background: 'rgba(30, 60, 202, 1)', color: '#fff', textAlign: 'center'
  }

  return {
    background: 'rgba(11,43,193, 1)', color: '#fff', textAlign: 'center'
  }
}


// 获取所有数据
const getAllData = () => {
  params.loading = true
  dataQueryApi[apiList[title]]().then(res => {
    allData.value = res
    showData.value = allData.value.slice(0, 10)
    params.loading = false
  })
}

getAllData()

// 切换分页
const onHandleCurrentChange = (v) => {
  params.loading = true
  const startIndex = (v - 1) * params.size
  const endIndex = startIndex + params.size
  showData.value = allData.value.slice(startIndex, endIndex)
  params.loading = false
}

// 预览
const preview = (scope) => {
  console.log(scope)
}

</script>
<style scoped lang='scss'>
.sceneWrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .statisticalCount {
    width: 83.4%;
    padding: 30px;
    background: #0C35CD;
    border: 1px solid #1690FF;
    border-radius: 4px;
  }

  .options {
    display: flex;
    justify-content: center;
  }

  .page {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }

  :deep(.el-pagination .el-pagination__total) {
    color: #fff;
  }

  :deep(.el-table tr .el-table__cell) {
    border: 1px solid rgba(22, 144, 255, 1);
  }
}
</style>
