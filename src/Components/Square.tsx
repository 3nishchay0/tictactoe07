import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react'

const Square = ({spaceId, spaceValue, setTurn}) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setTurn(spaceId)}
        style={styles.box}
        disabled={spaceValue ? true : false}>
        <Text style={styles.content}>{spaceValue}</Text>
      </Pressable>
    </View>
  );
};
export default Square;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 100,
    width: 100,
    marginHorizontal: 5,
    marginVertical: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  content: {
    fontSize: 20,
    color: 'black',
  },
})