Page({  
  data: {  
    items: [  
      {name: 'USA', value: '吊对角'},  
      //checked为truetrue，所以该项默认选中  
      {name: 'CHN', value: '直线高远'},  
      {name: 'BRA', value: '斜线高远'},  
      // disabled为truetrue，所以该项不能被点击，checked为truetrue，默认选中，但是不能点击  
      {name: 'JPN', value: '吊直线'},  
      {name: 'ENG', value: '平抽'},  
    ],
  },  
    toFinal:function(){
    wx.navigateTo({
      url:'../testn/testn'
    })
  },
  // checkbox点击的时候会执行这个方法  
  checkboxChange: function(e) {  
    console.log('checkbox发生change事件，携带value值为：', e.detail.value) 
  },
  onLoad: function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // this.setData({
    //    select_id: options.select_id,
    //   });
    var answer =  getApp().globalData.answer;
    console.log(answer)
  }
})
