<template>
  <div>
    <el-button @click="showDate">显示日期</el-button>
    {{dateValue}}
    <el-select v-model="dateType" placeholder="请选择">
      <el-option v-for="item in dateTypeList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
    <MydatePicker
      ref="date"
      :arrowOffset="5"
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd"
      v-model="dateValue"
      @change="handleChange"
      :type="dateType"
      placeholder="选择日期"
    ></MydatePicker>
    <!-- <el-date-picker
      v-model="value1"
      type="monthrange"
      range-separator="至"
      start-placeholder="开始月份"
      end-placeholder="结束月份"
    ></el-date-picker>-->
    <!-- <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
    </div> -->
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker :appendToBody="false" v-model="value2" align="center" type="date" placeholder="选择日期" :picker-options="pickerOptions1"></el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker v-model="value2" align="center" type="date" placeholder="选择日期" :picker-options="pickerOptions1"></el-date-picker>
    </div>
  </div>
</template>

<script>
import MydatePicker from './mydate-picker'
export default {
  components: {MydatePicker},
  data() {
    return {
      dateTypeList: ['year', 'month', 'date', 'dates', 'week', 'datetime', 'datetimerange', 'daterange', 'monthrange'],
      dateType: 'year',
      dateValue: '',
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      value1: '',
      value2: '',
    };
  },
  methods: {
    showDate() {
      console.log(this.$refs.date)
      this.$refs.date.__show()
      // this.$refs.date.handleFocus()
    },
     handleChange(val) {
      console.log('change', val)
    }
  },
};
</script>