import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Header from '../components/common/Header';
import PlayersTab from '../components/common/PlayersTab';
import XNews from '../components/Sections/XNews';

const NBA = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <Header
            navigation={navigation}
        />
        <ScrollView style={styles.body}>
            <XNews
                headline="Headlines"
            />
            <XNews
                headline="Player News"
                image={true}
            />
            <XNews
                headline="Most Read"
            />
            <PlayersTab/>
        </ScrollView>
        <View style={styles.footer}>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around"}}>
            <TouchableOpacity 
                onPress={()=>navigation.push('login')}
                style={styles.footerIcon}
            >
                <Image 
                    style={styles.image}
                    source={require('../../assets/icons/HOMEXX.png')} 
                />
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.footerIcon}
                onPress={()=>navigation.push('nfl')}
                >
                <Image 
                    style={styles.image}
                    source={require('../../assets/icons/SEARCHXX.png')} 
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerIcon}>
                <Image 
                    style={styles.image}
                    source={require('../../assets/icons/BOOKMARKXX.png')} 
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerIcon}>
                <Image 
                    style={styles.image}
                    source={require('../../assets/icons/MANXX.png')} 
                />
            </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
    
  );
};

export default NBA;


const styles = StyleSheet.create({
    header: {
      flex: .2, 
      flexDirection: "column"
    },
    headerTitle: {
      fontSize: 22, 
      textAlign: "center", 
      lineHeight: 33,
      paddingTop: 20 
    },
    haederSlogan: {
      fontSize: 14, 
      textAlign: "center", 
      color: "#969AA8", 
      fontWeight: "400",
      lineHeight: 21,
  
    },
    image: {
      width: 17.59,
      height: 18.94,
      marginBottom: 8,
      alignSelf: "center",
      marginTop: 16
    },
    brandName: {
      fontSize: 28,
      fontWeight: "400"
    },
    body: {
        flex: .7,
        flexDirection: "column",
        backgroundColor: "#DEDEDE"
    },
    footer: {
        flex: .08,
        flexDirection: "column",
        backgroundColor: "#FFFFFF"
    },
    footerIcon: {
        flexDirection: "row",
        // justifyContent: "space-between"
    }
});
  

