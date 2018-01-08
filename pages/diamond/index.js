// pages/diamond/index.js
var Zan = require('../../dist/index');
Page(Object.assign({}, Zan.NoticeBar, {
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      '/images/swiper1.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      '/images/swiper2.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg' ,
      '/images/swiper3.jpg' 
    ],
    indicatorDots: true ,
    indicatorColor: 'rgba(255 , 255 , 255 , 0.8)' ,
    autoplay: true ,
    interval: 3000 ,
    duration: 1000 ,
    movable: {
      text: ''
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.initZanNoticeBarScroll('movable');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   this.init() ;
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
  
  } ,
  /**
   * init
   */
  init(){
    this.setMovelableAds() ;
  } ,
  /**
   * 滚动广告 
   */
  setMovelableAds(){
    let ads = [
      "2018年1月20号，款多多钻石全明星强势登陆古都成都！ 期待您的到来！" ,
      '热烈庆祝款多多携手鲁盛珠宝，钻石全明星活动圆满成功签约56家！'
    ] ;
    let random = Math.floor(Math.random(2) * 10) % ads.length ;
    this.setData({
      movable : {text : ads[random]}
    }) ;
  } ,

  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
}))