import React from 'react';
import { Button, Image, Text, TextInput, View } from 'react-native';
import { AntDesign, Feather, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './DrawerContent.styles';
import DrawerItems from './DrawerItems';
import DrawerUserList from './DrawerUserList';

export default function DrawerContent({ navigation }) {

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>

                {/* User Info */}
                <View style={styles.userInfo}>
                    <Image source={require('../../static/user.jpg')} style={styles.userImage} />

                    <View>
                        <Text style={styles.userName}>User Name</Text>
                        <Text style={styles.userEmail}>user@mail.com</Text>
                    </View>
                </View>

                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <FontAwesome name="search" color="white" size={20} />
                    <TextInput placeholder="Search" placeholderTextColor="white" style={styles.searchInput} />
                </View>

                {/* Sidebar Items */}
                <DrawerItems />

                <View style={styles.border}></View>


                {/* User Todo Lists */}
                <DrawerUserList navigation={navigation}/>


            </View>
        </View>
    );
}
