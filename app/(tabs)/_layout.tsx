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
            <Ionicons name="home" color={focused ? '#004d00' : color} size={size} />
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
            <Ionicons name="leaf" color={focused ? '#004d00' : color} size={size} />
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
            <Ionicons name="camera" color={focused ? '#004d00' : color} size={size} />
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
            <Ionicons name="bug" color={focused ? '#004d00' : color} size={size} />
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
            <Ionicons name="person" color={focused ? '#004d00' : color} size={size} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#004d00' : 'gray' }}>Profile</Text>
          ),
        }}
      />
    </Tabs>
  );
}
