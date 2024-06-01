import { View, Text, Image, StatusBar, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export default function Profile({ navigation }) {  
    
    return (
      <View>
        <StatusBar backgroundColor='rgb(15, 118, 110)' animated={true}/>
        <View className="bg-teal-600 h-60 rounded-b-3xl">
        <View className="flex flex-row pt-20">    
        <Text className="ml-12 pl-28 text-white text-2xl font-semibold">Profile</Text> 
       </View>
       <View className="flex items-center pt-10">
            <Image
                className='w-36 h-36 rounded-full border-2 bg-white'
                source={require('./assets/mypic.png')}
            />
            <Animatable.Text animation="flipInY" className=" font-bold text-xl pt-2">Manish Harit</Animatable.Text>
       </View>

       </View>

       {/* ==== */}

       <View className="mt-32 bg-white ml-6 mr-6 rounded-xl">
        <Pressable onPress={()=>navigation.navigate("Setti", { screen: 'Account' })} className="flex-row pl-3 pt-3 pb-3">
        <View className="rounded-xl bg-purple-400 p-2">
           <Ionicons name="person-add-outline" size={32} /> 
        </View>
          <Text className="text-xl pt-2 pl-6">Account</Text>
        </Pressable>

        <View className="bg-gray-100 h-0.5"></View>

        <View className="flex-row pl-3 pt-3 pb-3">
        <View className="rounded-xl bg-orange-200 p-2">
           <Ionicons name="cloud-upload-outline" size={32} /> 
        </View>
          <Text className="text-xl pt-2 pl-6 ">BackUp</Text>
        </View>

        <View className="bg-gray-100 h-0.5"></View>

        <View className="flex-row pl-3 pt-3 pb-3">
        <View className="rounded-xl bg-purple-400 p-2">
           <Ionicons name="settings-outline" size={32} /> 
        </View>
          <Pressable onPress={()=>navigation.navigate("Setti", { screen: 'Setting' })}>
          <Text className="text-xl pt-2 pl-6">Settings</Text>
          </Pressable>
        </View>

        <View className="bg-gray-100 h-0.5"></View>

        <View className="flex-row pl-3 pt-3 pb-3">
        <View className="rounded-xl bg-red-300 p-2">
           <Ionicons name="log-out-outline" size={32} /> 
        </View>
          <Text className="text-xl pt-2 pl-6 font-semibold">Log-Out</Text>
        </View>
       </View>



      </View>
    )
  }

