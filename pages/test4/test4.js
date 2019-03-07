Page({  
  data: {  
    items: [  
      {name: 'a', value: '无意识防守，能打回去就行'},  
      //checked为truetrue，所以该项默认选中  
      {name: 'b', value: '力求过渡，争取空间'},  
      {name: 'c', value: '以守代功，防守中寻找对方弱点'},  
    ],
    confirmed: 0
  },  


  toNext:function(){
    wx.navigateTo({
      url:'../test5/test5',
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