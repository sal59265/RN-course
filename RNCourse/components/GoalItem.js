import { StyleSheet, View, Text, Pressable} from 'react-native'

function GoalItem(props) {
    return (
        <Pressable onPress={props.onDeleteItem}>
        <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
      </Pressable>
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e98cc",
        padding: 8,
      },
      goalText: {
        color: 'white'
      }
});