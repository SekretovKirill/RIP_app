import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Platform } from 'react-native';
import React from 'react';

export default function OneEmployee({ ...props }) {
    const placeholderImage = require('/home/student/pythonProjects/mobapp/logo.jpg');

    return (
        <View style={styles.card}>
            <View style={styles.betw}>
                <View style={styles.container}>
                    <Image
                        style={styles.image}
                        source={
                            props.photo_binary
                                ? { uri: `data:image/jpeg;base64,${props.photo_binary}` }
                                : placeholderImage
                        }
                    />
                    <View style={styles.row}>
                        <Text style={styles.text_title}>{props.name}</Text>
                        <Text style={styles.text_description}>{props.role}</Text>
                        <Text style={styles.text_description}>{props.info}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: 350,
        backgroundColor: '#444444',
        justifyContent: 'space-between',
        borderRadius: 8,
        paddingTop: 12,
        padding: 24,
        marginBottom: 8,
        marginTop: 8
    },
    text_title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'aliceblue',
    },
    text_description: {
        fontSize: 18,
        marginTop: 5,
        color: 'aliceblue',
    },
    image: { height: 200, width: 314 },
    container: { display: 'flex', width: '100%', margin: 0 },
});
