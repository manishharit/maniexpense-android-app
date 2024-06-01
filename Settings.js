import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export default function Settings({ navigation }) {
React.useEffect(() => {
  navigation.getParent() ?.setOptions({
    tabBarStyle: {
      display: 'none'
    }
  });
  return () => {
    navigation.getParent() ?.setOptions({
      tabBarStyle: {
        display: 'flex'
      }
    });
  }
}, [])
  return (
    <View>
      
      <View className="mt-32 bg-white ml-6 mr-6 rounded-xl">
        <View className="flex-row pl-3 pt-3 pb-3">
        <View className="rounded-xl p-2">
           <Ionicons name="notifications-outline" size={32} /> 
        </View>
          <Text className="text-xl pt-2 pl-6">Notification</Text>
          <View className="rounded-xl  ml-28 p-2">
           <Ionicons name="arrow-forward" size={32} color='rgb(254 215 170)' /> 
         </View>
        </View>

        <View className="bg-gray-100 h-0.5"></View>

        <View className="flex-row pl-3 pt-3 pb-3">
        <View className="rounded-xl p-2">
           <Ionicons name="logo-bitcoin" size={32} /> 
        </View>
          <Text className="text-xl pt-2 pl-6 ">Expense Category</Text>
          <View className="rounded-xl  ml-12 p-2">
           <Ionicons name="arrow-forward" size={32} color='rgb(254 215 170)' /> 
         </View>
        </View>


        <View className="bg-gray-100 h-0.5"></View>

        <View className="flex-row pl-3 pt-3 pb-3">
        <View className="rounded-xl p-2">
           <Ionicons name="finger-print-outline" size={32} /> 
        </View>
          <Pressable>
          <Text className="text-xl pt-2 pl-6">Security</Text>
          </Pressable>
          <View className="rounded-xl  ml-36 p-2">
           <Ionicons name="arrow-forward" size={32} color='rgb(192 132 252)' /> 
         </View>
        </View>

        <View className="bg-gray-100 h-0.5"></View>

        <View className="flex-row pl-3 pt-3 pb-3">
        <View className="rounded-xl p-2">
           <Ionicons name="people-outline" size={32} /> 
        </View>
          <Text className="text-xl pt-2 pl-6">About</Text>
          <View className="rounded-xl  ml-40 p-2">
           <Ionicons name="arrow-forward" size={32} color='rgb(252 165 165)' /> 
         </View>
        </View>
       </View>


    </View>
  )
}