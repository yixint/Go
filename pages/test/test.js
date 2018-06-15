Page({  
  data: {  
    items: [  
      {name: 'USA', value: '反手上方'},  
      //checked为truetrue，所以该项默认选中  
      {name: 'CHN', value: '正手上方'},  
      {name: 'BRA', value: '反手下方'},  
      // disabled为truetrue，所以该项不能被点击，checked为truetrue，默认选中，但是不能点击  
      {name: 'JPN', value: '正手下方'}
    ]
  },  


  toNext:function(){
    wx.navigateTo({
      url:'../test2/test2',
      success: function(res){

      },
      fail: function() {

      },
      complete: function(){

      }

    })
  },
  // checkbox点击的时候会执行这个方法  
  checkboxChange: function(e) {  
    console.log('checkbox发生change事件，携带value值为：', e.detail.value),
    // getApp().globalData.answer.pop() 
    // ......TODO
    getApp().globalData.answer.push(e.detail.value)

    // wx.setStorage({
    //   key: 'temp',
    //   data: e.detail.value,
    //   success: function(res){

    //     wx.navigateTo({
    //       url:'../test2/test2?select_id=' + res.data,
    //       success: function(res){

    //       },
    //       fail: function() {

    //       },
    //       complete: function(){

    //       }

    //     })
    //   },
    //   fail: function(){
    //     console.log("haha")
    //   }
    //   })
    }
})