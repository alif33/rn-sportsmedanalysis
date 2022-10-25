import { useState } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity
} from 'react-native';
import Slice from './Slice';

const tabs = ["NFL", "NBA", "MLB"];

export default function PlayersTab({ }) {
    const [active, setActive] = useState("NFL");

    return (
        <View style={styles.tab}>
            <View style={styles.tabHeader}>
                {
                    tabs.map((tab, index)=>(
                        <TouchableOpacity
                            style={styles.tabItem}
                            key={index}
                            onPress={()=>setActive(tab)}
                        >
                            <Text style={{...styles.tabTitle, borderBottomWidth: active===tab? 2: 0}}>
                                {tab}
                            </Text>
                        </TouchableOpacity>
                    ))
                }

            </View>
            <Slice/>
            <Slice/>
            <Slice/>
            <Slice/>
            <Slice/>
            <Slice/>
            <Slice/>
            <Slice/>
            <Slice/>
            <Slice/>
            <Slice/>
            <Slice/>
            <Slice/>
            <Slice/>
            <Slice/>
        </View>
    );
}

const styles = StyleSheet.create({
  tab: {
    marginTop: 50,
    width: "95%",
    alignSelf: "center"
  },
  tabHeader: {
    flexDirection: "row"
  },
  tabItem: {
    marginRight: 15
  },
  tabTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#5C5656",
    borderBottomColor: "#5C5656"
  }
});
