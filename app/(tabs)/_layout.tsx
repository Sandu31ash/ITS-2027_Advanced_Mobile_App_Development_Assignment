import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="home" 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} color='#004d00' size={21} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#004d00' : 'gray' }}>Home</Text>
          ),
        }}
      />

      <Tabs.Screen 
        name="plants" 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? 'leaf' : 'leaf-outline'} color='#004d00' size={22} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#004d00' : 'gray' }}>Plants</Text>
          ),
        }}
      />

      <Tabs.Screen 
        name="camera" 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? 'camera' : 'camera-outline'} color='#004d00' size={23} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#004d00' : 'gray' }}>Camera</Text>
          ),
        }}
      />
      
      <Tabs.Screen 
        name="diseases" 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? 'bug' : 'bug-outline'} color='#004d00' size={23} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#004d00' : 'gray' }}>Diseases</Text>
          ),
        }}
      />
      
      <Tabs.Screen 
        name="profile" 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? 'person-circle' : 'person-circle-outline'} color='#004d00' size={25} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#004d00' : 'gray' }}>Profile</Text>
          ),
        }}
      />
    </Tabs>
  );
}
