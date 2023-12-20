import { ScrollView, StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { axiosInstance } from '../api';
import { setEmployee } from '../store/EmployeeSlice';
import OneEmployee from '../components/EmployeeDetailCard';

export default function EmployeeDetailScreen() {
    const route = useRoute();
    const employeeId = route.params?.employee_id || 'No ID';
    const dispatch = useDispatch();
    const { employee } = useSelector((store) => store.employee);
    
    useEffect(() => {
        async function getEmployee() {
            const response = await axiosInstance.get(`/employees/photo/${employeeId}`);
            dispatch(setEmployee(response?.data));
        }
        getEmployee();
    }, [dispatch]);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.page}>
                {!!employee && <OneEmployee key={employee.id} {...employee} />}
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
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#AAAAAA',
    }
});
