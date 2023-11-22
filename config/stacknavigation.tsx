// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Products from '../screens/products';
import SingleProduct from '../screens/singleproduct';
import Login from '../screens/login';
import { _dark, _danger } from 'rncstyles';
import SignUp from '../screens/signup';
import Task from '../screens/task';


const Stack = createNativeStackNavigator();

function StackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{
                    headerShown: false
                }} name="Task" component={Task} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="Login" component={Login} />
                <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
                <Stack.Screen options={{
                    title: 'ABC App',
                    headerTitleAlign: 'center',
                    headerTintColor: _danger,
                }} name="Home" component={Home} />
                <Stack.Screen name="Products" component={Products} />
                <Stack.Screen name="SingleProduct" component={SingleProduct} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigation;