import {StyleSheet, View} from 'react-native';
import React from 'react'
import Square from './Square';

const Board = ({turns, checkTurn}) => {
  return (
    <View style={styles.containerMain}>
      <View >
        <Square spaceId={0} spaceValue={turns[0]} setTurn={checkTurn} />
        <Square spaceId={1} spaceValue={turns[1]} setTurn={checkTurn} />
        <Square spaceId={2} spaceValue={turns[2]} setTurn={checkTurn} />
      </View>
      <View>
        <Square spaceId={3} spaceValue={turns[3]} setTurn={checkTurn} />
        <Square spaceId={4} spaceValue={turns[4]} setTurn={checkTurn} />
        <Square spaceId={5} spaceValue={turns[5]} setTurn={checkTurn} />
      </View>
      <View>
        <Square spaceId={6} spaceValue={turns[6]} setTurn={checkTurn} />
        <Square spaceId={7} spaceValue={turns[7]} setTurn={checkTurn} />
        <Square spaceId={8} spaceValue={turns[8]} setTurn={checkTurn} />
      </View>
    </View>
  )
}

export default Board

const styles = StyleSheet.create({
  containerMain: {
    marginHorizontal: 40,
    height: 330,
    width: 330,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#12B0E8',
  },
 

})