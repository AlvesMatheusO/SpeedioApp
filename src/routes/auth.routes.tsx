//routes for nonlogged users

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Auth/Login';

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Login" 
                component={Login}
                options={{
                    headerShown: false
                }}
                />
        </Stack.Navigator>
    )
}