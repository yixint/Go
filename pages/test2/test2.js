Page({  
  data: {  
    items: [  
      {name: 'a', value: '刚开始好猛，打着打着好累'},  
      //checked为truetrue，所以该项默认选中  
      {name: 'b', value: '体能消耗均匀，动作不变形'},  
      {name: 'c', value: '体力充沛，打不累'},  
    ],
    confirmed: 0
  },  


  toNext:function(){
    wx.navigateTo({
      url:'../test3/test3',
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