import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './DrawerItems.styles';

export default function DrawerItems() {

    return (
        <View style={styles.itemsContainer}>
            <View style={styles.item}>
                <Feather name="sun" color="#596373" size={22} />
                <Text style={styles.itemText}>My Day</Text>
            </View>

            <View style={styles.item}>
                <Feather name="star" color="#786F81" size={22} />
                <Text style={styles.itemText}>Important</Text>
            </View>

            <View style={styles.item}>
                <Feather name="calendar" color="#7C96A5" size={22} />
                <Text style={styles.itemText}>Planned</Text>
            </View>

            <View style={styles.item}>
                <Feather name="user" color="#9DAEBF" size={22} />
                <Text style={styles.itemText}>Assigned to me</Text>
            </View>

            <View style={styles.item}>
                <Feather name="flag" color="#AAADB3" size={22} />
                <Text style={styles.itemText}>Flagged email</Text>
            </View>

            <View style={styles.item}>
                <Feather name="home" color="#6A76B2" size={22} />
                <Text style={styles.itemText}>Tasks</Text>
            </View>

        </View>
    );
}


