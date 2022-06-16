import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";

const { width, height } = Dimensions.get("window");
const images = [
  "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?cs=srgb&dl=art-blur-cappuccino-close-up-302899.jpg&fm=jpg",
  "https://images.pexels.com/photos/997670/pexels-photo-997670.jpeg?cs=srgb&dl=black-coffee-mug-997670.jpg&fm=jpg",
  "https://images.pexels.com/photos/585750/pexels-photo-585750.jpeg?cs=srgb&dl=caffeine-coffee-coffee-beans-roasted-585750.jpg&fm=jpg",
];
export default class Swiper extends React.Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };
  }

  selectedIndex = (event) => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;

    const selectedIndex = contentOffset / viewSize;
    this.setState({ selectedIndex });
  };

  componentDidMount = () => {
    setInterval(() => {
      this.setState(
        (prev) => ({
          selectedIndex:
            prev.selectedIndex === images.length - 1
              ? 0
              : prev.selectedIndex + 1,
        }),
        () => {
          this.scrollRef.current.scrollTo({
            animated: true,
            y: 0,
            x: width * 0.95 * this.state.selectedIndex,
          });
        }
      );
    }, 3000);
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={this.change}
          style={styles.scrollView}
          onMomentumScrollEnd={this.selectedIndex}
          ref={this.scrollRef}
        >
          {images.map((item, index) => (
            <Image key={index} source={{ uri: item }} style={styles.image} />
          ))}
        </ScrollView>
        <View style={styles.pagination}>
          {images.map((item, index) => (
            <Text
              key={index}
              style={
                index == this.state.selectedIndex
                  ? styles.pagingActiveText
                  : styles.pagingText
              }
            >
              ⬤
            </Text>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  scrollView: {
    width: width*0.95,
    height: height * 0.3,
  },
  image: {
    width: width*0.95,
    height: height * 0.3,
    borderRadius: 5,
  },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  pagingText: {
    color: "#888",
    margin: 5,
  },
  pagingActiveText: {
    color: "#fff",
    margin: 5,
  },
});
