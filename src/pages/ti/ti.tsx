import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './ti.scss'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: 'page_ti'
  }
  constructor () {
    super(...arguments)
    this.state = {
    }
  }

  componentWillMount () {
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  toMin () {
    Taro.navigateTo({
      url: '/pages/min/min'
    })
  }
  toIndex () {
    Taro.navigateTo({
      url: '/pages/index/index'
    })
  }


  render () {
    return (
      <View className='index'>
        ZKNB2
        <View className="" style="height:5.6vh;">
        <View className='grid col-4 grid-square'>
          <View className='bg-blue light' onClick={this.toIndex}  style="height:5vh;">button1</View>
          <View className='bg-blue light' onClick={this.toMin}  style="height:5vh;">button2</View>
          <View className='bg-blue'  style="height:5vh;">button3</View>
          <View className='bg-blue light'  style="height:5vh;">敬请期待</View>
        </View>
      </View>
      </View>
      
    )
  }
}
