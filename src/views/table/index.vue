<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.sub_title" placeholder="Title" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-select v-model="listQuery.status" placeholder="Status" clearable style="width: 90px" class="filter-item">
        <el-option v-for="item in statusSelectOptions" :key="item.key" :label="item.label" :value="item.key" />
      </el-select>
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        Search
      </el-button>
      <!-- <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
        Add
      </el-button>
      <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">
        Export
      </el-button>
      <el-checkbox v-model="showReviewer" class="filter-item" style="margin-left:15px;" @change="tableKey=tableKey+1">
        reviewer
      </el-checkbox> -->
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="54">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="Title" width="150">
        <template slot-scope="scope">
          {{ scope.row.sub_title }}
        </template>
      </el-table-column>
      <el-table-column label="Distractor title" width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.distractor_title }}</span>
        </template>
      </el-table-column>

      <el-table-column label="Answer" width="150">
        <template slot-scope="scope">
          {{ scope.row.answer }}
        </template>
      </el-table-column>
      <el-table-column label="Distractor answer" width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.distractor }}</span>
        </template>
      </el-table-column>

      <el-table-column label="Cover" width="210">
        <template slot-scope="scope">
          <img :src="scope.row.cover" class="cover">
        </template>
      </el-table-column>
      <el-table-column label="Video" width="310">
        <template slot-scope="scope">
          <video
            id="myVideo"
            class="video-js"
            controls
            autoplay:true
            preload="auto"
            :poster="scope.row.cover"
            width="200px"
          >
            <source
              :src="scope.row.video"
              type="video/mp4"
            >
          </video>
          <!-- <img :src="scope.row.cover" class="cover"> -->
        </template>
      </el-table-column>
      <!-- <el-table-column label="File" width="210">
        <template slot-scope="scope">
          {{ scope.row.file }}
        </template>
      </el-table-column> -->
      <el-table-column label="Level" width="60" align="center">
        <template slot-scope="scope">
          {{ scope.row.level==1?'简单' :(scope.row.level==2?'中等':'困难') }}
          <!-- <span>{{ scope.row.level_name }}</span> -->
        </template>
      </el-table-column>
      <el-table-column label="Status" width="70" align="center">
        <template slot-scope="scope">
          {{ scope.row.status==1?'有效':'无效' }}
          <!-- <span>{{ scope.row.status_name }}</span> -->
        </template>
      </el-table-column>
      <el-table-column label="Created Date" width="156">
        <template slot-scope="scope">
          <span>{{ scope.row.created_at }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Updated Date" width="156">
        <template slot-scope="scope">
          <span>{{ scope.row.updated_at }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Actions" align="center" width="80" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button type="primary" size="mini" @click="handleUpdate(row)">
            Edit
          </el-button>
          <!-- <el-button v-if="row.status!='deleted'" size="mini" type="danger" @click="handleDelete(row,$index)">
            Delete
          </el-button> -->
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.current_page" :limit.sync="listQuery.per_page" @pagination="fetchData" />
    <el-dialog title="Update" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :rules="rules" :model="temp" label-position="left" label-width="80px" style="width: 350px; margin-left:20px;">
        <!-- <el-form-item label="Date" prop="timestamp">
          <el-date-picker v-model="temp.timestamp" type="datetime" placeholder="Please pick a date" />
        </el-form-item> -->
        <el-form-item label="Title" prop="title">
          <el-input v-model="temp.sub_title" />
        </el-form-item>
        <!-- <el-form-item label="Distractor Title" prop="title">
          <el-input v-model="temp.distractor_title" />
        </el-form-item> -->
        <el-form-item label="Answer" prop="answer">
          <el-input v-model="temp.answer" />
        </el-form-item>
        <el-form-item label="Distractor" prop="distractor">
          <el-input v-model="temp.distractor" />
        </el-form-item>
        <el-form-item label="Status" prop="status">
          <el-select v-model="temp.status" class="filter-item" placeholder="Please select">
            <el-option v-for="item in statusOptions" :key="item.key" :label="item.label" :value="item.key" />
          </el-select>
        </el-form-item>
        <el-form-item label="Level" prop="level">
          <el-select v-model="temp.level" class="filter-item" placeholder="Please select">
            <el-option v-for="item in levelOptions" :key="item.key" :label="item.label" :value="item.key" />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          Cancel
        </el-button>
        <el-button type="primary" @click="updateData()">
          Confirm
        </el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import Video from 'video.js'
import Vue from 'vue'
import 'video.js/dist/video-js.css'
import { getVideoList, updateVideoList } from '@/api/table'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination

Vue.prototype.$video = Video

export default {
  components: { Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      total: 0,
      listQuery: {
        // page: 1,
        // limit: 20,
        // importance: undefined,
        // title: undefined,
        // type: undefined,
        // sort: '+id',
        current_page: 1,
        per_page: 20,
        status: 0,
        sub_title: ''
      },
      statusSelectOptions: [{ label: '全部', key: 0 }, { label: '有效', key: 1 }, { label: '无效', key: 2 }],
      statusOptions: [{ label: '有效', key: 1 }, { label: '无效', key: 2 }],
      levelOptions: [{ label: '简单', key: 1 }, { label: '中等', key: 2 }, { label: '困难', key: 3 }],
      dialogFormVisible: false,
      temp: {
        id: undefined,
        status: 1,
        sub_title: '',
        distractor_title: '',
        answer: '',
        distractor: '',
        level: 1
      },
      rules: {
        // type: [{ required: true, message: 'type is required', trigger: 'change' }],
        // timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
        // title: [{ required: true, message: 'title is required', trigger: 'blur' }]
      }
    }
  },
  created() {
    this.fetchData()
  },
  mounted() {
    // this.initVideo()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getVideoList(this.listQuery).then(response => {
        this.list = response.data.list
        this.total = response.data.pageInfo && response.data.pageInfo.total
        this.listLoading = false
      })
    },
    handleFilter() {
      this.listQuery.current_page = 1
      this.fetchData()
    },
    handleUpdate(row) {
      console.log('row>>>', row)
      this.temp = Object.assign({}, row) // copy obj
      // const { id, status, sub_title, answer, distractor, level } = row
      // this.temp = { id, status, sub_title, answer, distractor, level }
      // this.temp.timestamp = new Date(this.temp.timestamp)
      // this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          console.log('temp', this.temp)
          // tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
          updateVideoList(tempData).then(() => {
            const index = this.list.findIndex(v => v.id === this.temp.id)
            this.list.splice(index, 1, this.temp)
            this.dialogFormVisible = false
            this.$notify({
              title: 'Success',
              message: 'Update Successfully',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    initVideo() {
      // 初始化视频方法
      // eslint-disable-next-line no-undef
      this.$video(myVideo, {
        // 确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
        controls: true,
        // 自动播放属性,muted:静音播放
        autoplay: true,
        // 建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        preload: 'auto',
        // 设置视频播放器的显示宽度（以像素为单位）
        width: '200px'
        // 设置视频播放器的显示高度（以像素为单位）
        // height: '400px'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .filter-container{
    margin-bottom: 10px;
  }
  .cover{
    width:200px;

  }

</style>
