Page({  
  data: {  
    items: [  
      {name: 'a', value: '前中后可以到位'},  
      //checked为truetrue，所以该项默认选中  
      {name: 'b', value: '前中后，左中右，指哪儿打哪儿'},  
      {name: 'c', value: '三维控制，对球飞行路线有所把握'},  
    ],
    confirmed: 0
  },  


  toNext:function(){
    wx.navigateTo({
      url:'../test6/test6',
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
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    console.log(this.data)
    if(this.data.confirmed == 0){
      getApp().globalData.answer.push(e.detail.value)
      this.setData({
        confirmed: 1
      })
    }else{
      getApp().globalData.answer.pop() 
      getApp().globalData.answer.push(e.detail.value)
    }
    console.log("answer now:")
    console.log(getApp().globalData.answer)

    }
})