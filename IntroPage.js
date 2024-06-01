import React from 'react'
import { Text, View, ActivityIndicator } from 'react-native';

const IntroPage =()=>{
  return (
    <View className="flex-1 items-center justify-center bg-teal-600">
        <View className="flex-1 items-center justify-center">
        <Text className="text-white text-5xl mb-10">Welcome !</Text>
        <ActivityIndicator size="large" color="orange"/>
        </View>
        <Text className="text-white text-2xl absolute bottom-16">
          Powered By <Text className="font-bold text-orange-500">Manish Harit</Text> !</Text>
    </View>
  )
}

export default IntroPage;
