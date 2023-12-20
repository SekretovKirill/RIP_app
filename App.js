import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmployeesScreen from './screens/EmployeeListScreen';
import EmployeeScreen from './screens/EmployeeScreen';
import { store } from './store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#444444',
                        },
                        headerTintColor: 'aliceblue',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                >
                    <Stack.Screen name='МГТУ' component={EmployeesScreen} />
                    <Stack.Screen name='Подробности' component={EmployeeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
