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
        title: "DISCLAIMER",
        paragraph: "Last updated May 11, 2020"
    },
    {
        title: "WEBSITE DISCLAIMER",
        paragraph: "The information provided by SportsMedAnalytics (“we,” “us” or “our”) on http://www.sportsmedanalytics.com (the “Site”) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site. UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK."
    },
    {
        title: "EXTERNAL LINKS DISCLAIMER",
        paragraph: "The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES."
    },
    {
        title: "AFFILIATES DISCLAIMER",
        paragraph: "The Site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. Our affiliates include the following"
    },
]

const Disclaimer = ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <XHeader
            title="DISCLAIMER"
            navigation={ navigation }
        />
        <ScrollView style={styles.body}>
            <View style={styles.bodyMain}>
                <Image 
                    style={styles.banner}
                    source={require('../../../assets/banners/Ambassador.png')} 
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

export default Disclaimer;


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