//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navBarOptions: {
      barTitleText: "反馈组件",
      frontColor: "#000000",
    },
    list: [
      {
        name: "Notify",
        path: "/pages/Notify_Ex/index"
      },
    ]
  },
  onLoad() {

  },
  jump(e) {
    wx.$.click(() => {
      let { index } = wx.$.get(e);
      wx.$.navigate(this.data.list[index].path);
    })
  }
})
