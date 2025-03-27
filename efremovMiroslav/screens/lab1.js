import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class ShapeChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCircle: false,
      colorIndex: 0,
      colors: ['#FF5733', '#33FF57', '#3357FF', '#F033FF', '#FF33F0']
    };
  }

  changeShapeAndColor = () => {
    this.setState(prevState => ({
      isCircle: !prevState.isCircle,
      colorIndex: (prevState.colorIndex + 1) % prevState.colors.length
    }));
  };

  render() {
    const { isCircle, colorIndex, colors } = this.state;
    const shapeStyle = {
      width: 150,
      height: 150,
      backgroundColor: colors[colorIndex],
      borderRadius: isCircle ? 75 : 0,
      marginBottom: 30,
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Shape Changer</Text>
        <View style={[styles.shape, shapeStyle]} />
        <TouchableOpacity 
          style={styles.button} 
          onPress={this.changeShapeAndColor}
        >
          <Text style={styles.buttonText}>Изменить форму и цвет</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  shape: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ShapeChanger;