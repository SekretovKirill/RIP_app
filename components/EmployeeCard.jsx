import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function EmployeeCard({ navigation, ...props }) {
    const handlePress = () => {
        navigation.navigate('Подробности', { employee_id: props.id });
    };
    const placeholderImage = require('/home/student/pythonProjects/mobapp/logo.jpg');

    return (
        <View style={styles.card}>
            <Image
                style={styles.image}
                source={
                    props.photo_binary
                        ? { uri: `data:image/jpeg;base64,${props.photo_binary}` }
                        : placeholderImage
                }
            />
            <View style={styles.textContainer}>
                <Text style={styles.textTitle}>{props.name}</Text>
                <Text style={styles.textOverview}>{props.role}</Text>
                <TouchableOpacity style={styles.btn} onPress={handlePress}>
                    <Text style={styles.btnText}>Подробнее</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: 175,
        height: 265,
        backgroundColor: '#444444',
        borderRadius: 8,
        paddingTop: 12,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 8,
        marginTop: 8
    },
    textTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 4, 
    },
    textOverview: {
        fontSize: 14,
        color: '#FFFFFF',
        marginBottom: 10,
    },
    image: { height: 120, width: 158, marginBottom: 8 }, 
    textContainer: { alignItems: 'center' },
    btn: {
        backgroundColor: 'aliceblue',
        padding: 8,
        width: 100,
        borderRadius: 8,
    },
    btnText: {
        color: '#35525A',
        textAlign: 'center',
        fontSize: 12,
    },
});
