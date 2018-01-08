// pages/shopManage/index.js
const Charts = require("../../utils/wx-charts.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    wx.getSystemInfo({
      success: function (res) {
        _this.drawSaleStacChart(res.windowWidth);
        _this.drawReturnStacChart(res.windowWidth);
        _this.drawTotalStacChart(res.windowWidth);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 绘制总体统计图表
   */
  drawTotalStacChart(clientWidth) {
    new Charts({
      canvasId: 'total-chart',
      type: 'radar',
      categories: ['周销量', '月销量', '季度销量', '好评率', '翻单率'],
      series: [{
        data: [90, 110, 125, 95, 86]
      }],
      width: clientWidth,
      height: 180,
      extra: {
        radar: {
          max: 150
        }
      }
    });
  },

  /**
   * 绘制销售统计图表 
   */
  drawSaleStacChart: function (clientWidth) {
    // 折线图
    new Charts({
      canvasId: 'sale-chart',
      type: 'area',
      categories: ['2016-08', '2016-09', '2016-10', '2016-11', '2016-12', '2017'],
      series: [{
        name: '成交量1',
        data: [70, 40, 65, 100, 34, 18],
        format: function (val) {
          return val.toFixed(2) + '万';
        }
      }, {
        name: '成交量2',
        data: [15, 20, 45, 37, 4, 80],
        format: function (val) {
          return val.toFixed(2) + '万';
        }
      }],
      yAxis: {
        format: function (val) {
          return val + '万';
        }
      },
      width: clientWidth,
      height: 200
    });
  },

  /**
   * 绘制退货统计图片
   */
  drawReturnStacChart: function (clientWidth) {
    // 饼形图
    // new Charts({
    //   canvasId: 'return-chart',
    //   type: 'pie',
    //   series: [{
    //     name: '成交量1',
    //     data: 15,
    //   }, {
    //     name: '成交量2',
    //     data: 35,
    //   }, {
    //     name: '成交量3',
    //     data: 78,
    //   }, {
    //     name: '成交量4',
    //     data: 63,
    //   }],
    //   width: 320,
    //   height: 200,
    //   dataLabel: false
    // });
    // 柱状图
    new Charts({
      canvasId: 'return-chart',
      type: 'column',
      categories: ['2016-08', '2016-09', '2016-10', '2016-11', '2016-12', '2017'],
      series: [{
        name: '成交量1',
        color: '#0ea4e4',
        data: [15, 20, 45, 37, 4, 80]
      }, {
        name: '成交量2',
        color: "#1179bd",
        data: [70, 40, 65, 100, 34, 18]
      }, {
        name: '成交量3',
        color: "#19be6b",
        data: [70, 40, 65, 100, 34, 18]
      }, {
        name: '成交量4',
        color: '#F63D26',
        data: [70, 40, 65, 100, 34, 18]
      }],
      yAxis: {
        format: function (val) {
          return val + '万';
        }
      },
      width: clientWidth,
      height: 250,
      dataLabel: false
    });
  }
})