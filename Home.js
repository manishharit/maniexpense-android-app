import { View, Text, Image, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
export default function Home() {
  return (
  <View>
    <StatusBar backgroundColor='rgb(15, 118, 110)' animated={true}/>
    <View className="bg-teal-600 h-64 rounded-b-3xl">
       <View className="flex flex-row">
          <View className="p-6 pt-20">
            <Text className=" text-white text-sm">Good Afternoon,</Text>
            <Text className=" text-white text-2xl font-semibold">Manish Harit</Text>
          </View>
          <View className="m-20 ml-44 p-1 rounded-xl  ">
          <Ionicons name="notifications-outline" size={24} /> 
          </View>
       </View>

    {/* card */}

    <View className="bg-teal-700 rounded-3xl ml-6 mr-6 -mt-12 h-52 p-5">
      <View className="flex flex-row">
      <View>
        <Text className="text-white font-semibold pb-2">Total Expense ^</Text>
        <Text className="text-white text-3xl font-bold">₹ 1599.00</Text>
      </View>
      <View className="pl-40">
        <Text className="text-3xl font-bold text-white">...</Text> 
      </View>
      </View>

      <View className="flex flex-row pt-10">
      <View>
        <Text className="text-white font-thin pb-2">Current Week</Text>
        <Text className="text-white text-2xl font-bold">₹ 1599.00</Text>
      </View>
      <View className="pl-24">
      <Text className="text-white font-thin pb-2">Past Week</Text>
      <Text className="text-white text-2xl font-bold">₹ 1599</Text>

      </View>
      </View>


    </View>
      
  </View>

    {/* =========== */}

     <View className="mt-28">
      <View className="flex-row pl-6 pr-6">
      <Text className="font-bold text-lg">Recent Transaction</Text>
      <Text className="font-semibold text-gray-600 text-lg ml-32">See all</Text>
      </View>
      
     </View>
    {/* card.. */}

    <View className="p-6 flex-row">
      <View className="flex-row">
      <Image className='w-12 h-12 rounded-2xl border-2 bg-white'
        source={require('./assets/mypic.png')}/>
      <View className="pl-2">
        <Text className="font-semibold text-2xl">Travel</Text>
        <Text>Today</Text>
      </View>
      </View>
      
      <Text className="font-bold text-2xl ml-36 text-red-500">- ₹ 599</Text>
    </View>
    <View className="p-6 flex-row">
      <View className="flex-row">
      <Image className='w-12 h-12 rounded-2xl border-2 bg-white'
        source={require('./assets/mypic.png')}/>
      <View className="pl-2">
        <Text className="font-semibold text-2xl">Travel</Text>
        <Text>Today</Text>
      </View>
      </View>
      
      <Text className="font-bold text-2xl ml-36 text-red-500">- ₹ 599</Text>
    </View>
    <View className="p-6 flex-row">
      <View className="flex-row">
      <Image className='w-12 h-12 rounded-2xl border-2 bg-white'
        source={require('./assets/mypic.png')}/>
      <View className="pl-2">
        <Text className="font-semibold text-2xl">Travel</Text>
        <Text>Today</Text>
      </View>
      </View>
      
      <Text className="font-bold text-2xl ml-36 text-red-500">- ₹ 599</Text>
    </View>
    

    
    
    
    
    
    
    </View>
  )
}