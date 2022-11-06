import { useState, useRef } from "react";
import { 
    StyleSheet, 
    Text, 
    View
} from 'react-native';
import FCard, { SLIDER_WIDTH, ITEM_WIDTH } from '../cards/FCard';
import Carousel from "react-native-snap-carousel";

const data = [
    {
      title: "FanNation Grades Every NFL Team’s season  knitting elements, their housing, drive and control",
      body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      imgUrl: "https://picsum.photos/id/11/200/300",
    },
    {
      title: "FanNation Grades Every NFL Team’s season  knitting elements, their housing, drive and control",
      body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
      imgUrl: "https://picsum.photos/id/10/200/300",
    },
    {
      title: "FanNation Grades Every NFL Team’s season  knitting elements, their housing, drive and control",
      body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
];



export default function FNews({ headline, image }) {
    const [index, setIndex] = useState(0);
    const isCarousel = useRef(null);

    return (
        <View style={styles.news}>
            <Text style={styles.title}>{headline}</Text>
            <Carousel
                layout="default"
                // layoutCardOffset={9}
                ref={isCarousel}
                data={data}
                renderItem={FCard}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={(index) => setIndex(index)}
                // useScrollView={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    news: {
        marginTop: 30
    },
    title: {
        width: "95%",
        alignSelf: "center",
        fontSize: 24,
        fontWeight: "600",
        color: "#1C1C1C"
    }
});