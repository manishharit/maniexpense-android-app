import {  Text, Platform,  View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Home from './Home';
import Settings from './Settings';
import Transaction from './Transaction';
import Profile from './Profile';
import Account from './Account';


const Tab =createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    // backgroundColor: '#E5E5E5',
  },
  backgroundColor:"black"
}


function ProfileStack({ navigation }) {
  return (
    <Stack.Navigator 
     screenOptions={{
      headerStyle: { backgroundColor: "#6a51ae" },
      headerTitleStyle: { fontWeight: "bold" },
      headerTintColor: "#ffff",
      contentStyle: { backgroundColor: "#e8e4f3" },
    }}>
      <Stack.Screen name="Setting" component={Settings}
      options={{
        headerLeft: () => (
        <Pressable onPress={() => navigation.navigate('Profile')}>
          <Text className="text-gray-50 border rounded-2xl text-5xl font-extrabold bg-violet-600 mr-2">⬅</Text>
        </Pressable>
      ),
      }}
      />
      <Stack.Screen name="Account" component={Account}
      options={{
        headerLeft: () => (
        <Pressable onPress={() => navigation.navigate('Profile')}>
          <Text className="text-gray-50 border rounded-2xl text-5xl font-extrabold bg-violet-600 mr-2">⬅</Text>
        </Pressable>
      ),
      }}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigation() {
  return (
     <NavigationContainer >
       <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <Entypo name="home" size={28} color={focused ? "purple": "gray"} />
            </View>
              )
            }
          }}
          />

          <Tab.Screen 
          name="Transaction" 
          component={Transaction} 
           options={{
            tabBarIcon: ({focused})=>{
              return (
                <View
                 style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor : focused ? "purple":"green",
                  width: Platform.OS == "ios" ? 50 : 60,
                  height: Platform.OS == "ios" ? 50 : 60,
                  top: Platform.OS == "ios" ? -10 : -20,
                  borderRadius: Platform.OS == "ios" ? 25 : 30
                 }}
                >
                  <Ionicons name="add" size={28} color="#fff" />
                </View>
              )
            }
           }}
          />

          <Tab.Screen 
          name="Profile" 
          component={Profile} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                 <Ionicons name="person" size={28}  color={focused ? "purple": "gray"} />
            </View>
              )
            }
          }}
          />
          <Tab.Screen
          name='Setti'
          component={ProfileStack}
          options={{
            tabBarButton: () => null
          }}
          
          />
       </Tab.Navigator>
     </NavigationContainer>
)
}