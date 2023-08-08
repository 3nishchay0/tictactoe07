/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import Board from './Components/Board';

interface Turns {
  [key: number]: string;
};

function App() {
  const [playerTurn, changeTurn] = useState(true);
  const [turns, setTurn] = useState<Turns>({});
  const [modal, setModal] = useState(false);
  const [win, setWin]=useState('');
  const [end, setEnd] = useState(false);
 

  const resetGame = () => {
    changeTurn(true);
    setTurn({});
    setModal(false);
    setEnd(false);

    setWin('');
  }

  const togglePlayer = () => {
    changeTurn(!playerTurn);
  };
  const triggerModal = () => {
    setModal(!modal);
  }
  const finishgame = () => {
    setEnd(true);
    triggerModal();
  }
  function checkwinner() {
    const winnercheck = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [3, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winnercheck.length; i++) {
      const [a, b, c] = winnercheck[i];
      if (
        turns[a] === turns[b] &&
        turns[b] === turns[c] &&
        a in turns &&
        b in turns &&
        c in turns)
      {
        setWin(playerTurn ? 'congratulations X' : 'congratulations O');
        finishgame();
      }

      if (Object.keys(turns).length === 9) {
        setWin("It's a tie ,play again");
        finishgame();
      }
    }
}

  const checkTurn = (value: number) => {
    let tempTurn = turns;
    tempTurn[value] = playerTurn ? 'X' : 'O';

    setTurn({...tempTurn});
    checkwinner();
    togglePlayer();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.HeaderText}>Let's Play Tic Tac Toe !</Text>
      {!end && <Board turns={turns} checkTurn={checkTurn} />}
      <Modal animationType="slide" visible={modal}>
        <View style={styles.modalcontainer}>
          <View style={styles.buttoncontainer}>
            <Text style={styles.winText}>{win}</Text>
            <TouchableOpacity onPress={resetGame} style={styles.resetButton}>
              <Text style={styles.resetbuttonText}>Start a new Game</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View>
        <Text style={styles.bottomText}>Have Fun !</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent : 'center',
  },
  HeaderText: {
    margin: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color :'#02B290',
  },
  bottomText: {
    margin: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color :'#02B290',
  },

  modalcontainer:{
    margin : 20,
    backgroundColor : '#02B290',
    height : 120,
    width: 300,
    borderRadius : 10,
    marginVertical : 300,
    marginHorizontal : 50,
  },
  buttoncontainer:{
    flex:1,
    alignItems :'center',
    justifyContent:'center',
  },
  winText:{
    padding : 10,
    fontSize: 20,
    fontWeight : 'bold',
  },
  resetButton:{
    height : 40,
    width :150,
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 10,
    backgroundColor: '#242B2E',
  },
  resetbuttonText:{
    fontWeight :'bold',
  },


});

export default App;
