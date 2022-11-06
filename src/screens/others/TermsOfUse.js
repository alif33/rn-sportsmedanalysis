import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
} from 'react-native';
import OCard from '../../components/cards/OCard';
import XHeader from "../../components/common/XHeader";


const items = [
    {
        title: "PRIVACY POLICY",
        paragraph: "Last updated May 11, 2020"
    },
    {
        paragraph: "Thank you for choosing to be part of our community at SportsMedAnalytics (“Company”, “we”, “us”, or “our”). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at chonasportsmed@gmail.com."
    },
    
]

const TermsOfUse = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <XHeader
            title="TERMS OF USE"
            navigation={ navigation }
        />
        <ScrollView style={styles.body}>
            <View style={styles.bodyMain}>
                <Image 
                    style={styles.banner}
                    source={require('../../../assets/banners/TOU.png')} 
                />
                {
                    items.map((item, index)=>(
                        <OCard
                            key={index}
                            title={item.title}
                            paragraph={item.paragraph}
                        />
                    ))
                }
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default TermsOfUse;


const styles = StyleSheet.create({
    body: {
        flex: .88
    },
    bodyMain: {
        width: "95%", 
        alignSelf: "center"
    },
    banner: {
        width: 240,
        height: 240,
        alignSelf: "center"
    }
});