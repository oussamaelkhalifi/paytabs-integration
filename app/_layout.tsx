import { Colors } from '@/constants/Colors';
import { Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function ProtectedLayout() {
  const { push } = useRouter();

  useEffect(() => {
    push('/home');
  }, [push]);

  return (
    <Stack
      initialRouteName='home'
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.black,
        },
        headerTintColor: Colors.white,
      }}>
      <Stack.Screen
        name='home'
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name='payment'
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
