import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#38BDF8',
            tabBarInactiveTintColor: '#94A3B8',
            tabBarStyle: {
                backgroundColor: '#0F172A',
                borderTopColor: '#334155',
            },
            headerStyle: {
                backgroundColor: '#0F172A',
            },
            headerTintColor: '#F8FAFC',
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Signal',
                    tabBarIcon: ({ color }) => <FontAwesome size={24} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="briefing"
                options={{
                    title: 'Briefing',
                    tabBarIcon: ({ color }) => <FontAwesome size={24} name="book" color={color} />,
                }}
            />
            <Tabs.Screen
                name="concierge"
                options={{
                    title: 'Concierge',
                    tabBarIcon: ({ color }) => <FontAwesome size={24} name="magic" color={color} />,
                }}
            />
        </Tabs>
    );
}
