import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native'
import {useState} from 'react'
function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
      };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('')
    }
    return (
      <Modal visible={props.visible} animationType="fade">
        <View style={styles.inputContainer}>
          <Image source={require('../assets/images/goal.png')} />
        <TextInput 
          style={styles.TextInput} 
          placeholder='Your course goal!'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
        <Button title='Add Goal' onPress={addGoalHandler}/>
          </View>
        <Button title='Cancel' onPress={props.onCancel}/>
        </View>
      </View>
      </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        padding: 16,
        borderBottomColor: 'grey'
      },
      TextInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '90%',
        padding: 8
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
      },
      image: {
        width: 100,
        height: 100,
        margin: 20
      },
      button: {
        width: 100,
        marginHorizontal: 8,
      }
})