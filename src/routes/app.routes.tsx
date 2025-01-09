// Routes for only logged users.

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Dashboard/Home';

const Stack = createNativeStackNavigator();

export default function AppRoutes () {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='Home' 
                component={Home}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}