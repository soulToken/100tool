// component/customizeBulletBox/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isSuccess: {
      type: Boolean,
      value: false
    },
    isShow: {
      type: Boolean,
      value: true,
    },
  },

  

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached() {

  }, 
  // 此处attached的声明会被lifetimes字段中的声明覆盖
  ready() {
  },


  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(e) {
      // console.log(e)
      this.triggerEvent('bulletBoxClick')
    },
  }
})