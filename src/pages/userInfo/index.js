import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

class User extends Component{
  render(){
    return(
      <View className='components-page'>
        <Text>flex-direction: row 横向布局</Text>
        <View className='flex-wrp' style='flex-direction:row;'>
          <View className='flex-item demo-text-1'>1</View>
          <View className='flex-item demo-text-2'>2</View>
          <View className='flex-item demo-text-3'>3</View>
        </View>
        <Text>flex-direction: column 纵向布局</Text>
        <View className='flex-wrp' style='flex-direction:column;'>
          <View className='flex-item flex-item-V demo-text-1'>1</View>
          <View className='flex-item flex-item-V demo-text-2'>2</View>
          <View className='flex-item flex-item-V demo-text-3'>3</View>
        </View>
      </View>
    )
  }
}

export default User;