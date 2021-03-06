import React from "react";
import {
  Animated,
  AppRegistry,
  Model,
  Pano,
  Text,
  View,
  VrButton,
  Sphere,
  Cylinder,
  asset
} from "react-vr";

export default class WelcomeToVR extends React.Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
  }

  animate = () => {
    this.animatedValue.setValue(0);
    Animated.sequence([
      Animated.timing(this.animatedValue, {
        duration: 800,
        toValue: 150
      }),
      Animated.spring(this.animatedValue, {
        duration: 800,
        friction: 1,
        tension: 5,
        toValue: 250
      })
    ]).start(() => {
      console.log("Sequence of two animations finished.");
    });
  };

  render() {
    return (
      <View>
        <Pano source={asset("eiffel_tower.jpg")} />
        <Animated.View
          style={{
            transform: [
              {
                translate: [220, -10, -50]
              },
              { translateY: this.animatedValue },
              { scale: 3 }
            ]
          }}
        >
          <Model
            source={{
              obj: asset("astronaut.obj"),
              mtl: asset("astronaut.mtl"),
              texture: asset("Astronaut_BaseColor.jpg")
            }}
          />
        </Animated.View>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            width: 10,
            height: 10,
            alignItems: "center",
            transform: [{ translate: [-5, 1, -25] }]
          }}
        >
          <Animated.View
            style={{
              padding: 0.9,
              transform: [{ rotateY: this.animatedValue }]
            }}
          >
            <Sphere
              style={{ color: "orange" }}
              radius={0.5}
              widthSegments={20}
              heightSegments={12}
            />
          </Animated.View>
          <Animated.View
            style={{
              padding: 0.9,
              transform: [{ rotateY: this.animatedValue }]
            }}
          >
            <Cylinder
              style={{ color: "blue" }}
              radiusTop={0.5}
              radiusBottom={0.5}
              dimHeight={1}
              segments={12}
            />
          </Animated.View>
          <Animated.View
            style={{
              padding: 1,
              transform: [{ rotateY: this.animatedValue }]
            }}
          >
            <Cylinder
              style={{ color: "yellow" }}
              radiusTop={0}
              radiusBottom={1}
              dimHeight={2}
              segments={12}
            />
          </Animated.View>
        </View>
        <VrButton
          onClick={() => this.animate()}
          style={{
            transform: [{ translate: [50, 250, -500] }]
          }}
        >
          <Text style={{ color: "gray", fontSize: 40 }}>Animate</Text>
        </VrButton>
        <Animated.Image
          style={{
            width: 200,
            height: 200,
            transform: [
              {
                translate: [-250, 250, -500]
              },
              { scale: 0.5 },
              { translateY: this.animatedValue }
            ]
          }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            width: 10,
            height: 10,
            alignItems: "center",
            transform: [{ translate: [-5, 1, -25] }]
          }}
        >
          <View style={{ padding: 0.9 }}>
            <Sphere
              style={{ color: "orange" }}
              radius={0.5}
              widthSegments={20}
              heightSegments={12}
            />
          </View>
          <View style={{ padding: 0.9 }}>
            <Cylinder
              style={{ color: "blue" }}
              radiusTop={0.5}
              radiusBottom={0.5}
              dimHeight={1}
              segments={12}
            />
          </View>
          <View style={{ padding: 1 }}>
            <Cylinder
              style={{ color: "yellow" }}
              radiusTop={0}
              radiusBottom={1}
              dimHeight={2}
              segments={12}
            />
          </View>
        </View>
        <Animated.Text
          style={{
            width: 200,
            height: 200,
            transform: [
              {
                translate: [-250, 250, -500]
              },
              { scale: 0.5 },
              { translateY: this.animatedValue }
            ]
          }}
        >
          hello react-vr
        </Animated.Text>
      </View>
    );
  }
}

AppRegistry.registerComponent("WelcomeToVR", () => WelcomeToVR);
