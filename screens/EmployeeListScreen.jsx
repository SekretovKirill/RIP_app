import { ScrollView, StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../api';
import { setEmployees } from '../store/EmployeeSlice';
import EmployeeCard from '../components/EmployeeCard';
import { useFocusEffect } from '@react-navigation/native';

export default function EmployeeListScreen({ navigation }) {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const { employees } = useSelector((store) => store.employee);

    const handleSearch = async () => {
        try {
            const response = await axiosInstance.get(
                `/employees/?filter=${searchValue}`
            );
            dispatch(setEmployees(response?.data));
        } catch (error) {
            console.error('Error during search:', error);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            async function getAllEmployees() {
                try {
                    const response = await axiosInstance.get('/employees');
                    dispatch(setEmployees(response?.data));
                } catch (error) {
                    console.error('Error fetching employees:', error);
                }
            }
            console.log('useeff');
            getAllEmployees();
        }, [dispatch])
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Имя или должность"
                    placeholderTextColor="grey"
                    onChangeText={setSearchValue}
                    value={searchValue}
                />
                <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                    <Text style={styles.searchButtonText}>Найти</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.page}>
                {!!employees &&
                    employees.map((employee) => (
                        <EmployeeCard key={employee.id} {...employee} navigation={navigation} />
                    ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#AAAAAA',
    },
    page: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#AAAAAA',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    input: {
        flex: 1,
        height: 30,
        color: 'aliceblue',
        borderWidth: 1,
        borderColor: '#555555',
        marginBottom: 16,
        paddingLeft: 8,
        paddingRight: 8,
        borderEndStartRadius: 8,
        borderStartStartRadius: 8,
    },
    searchButton: {
        paddingVertical: 6,
        paddingHorizontal: 16,
        backgroundColor: 'aliceblue',
        borderRadius: 4,
        marginLeft: 8,
        marginTop: -16,
    },
    searchButtonText: {
        color: '#1F3E47',
    },
});
