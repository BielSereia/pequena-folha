import { StyleSheet, Text, View } from "react-native";

interface IItem {
  item: {
    data: string;
    local: string;
    activityType: string;
    description: string;
  }
}

export function Item({ item }: IItem) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>Data: {item.data}</Text>
      <Text style={styles.title}>Local: {item.local}</Text>
      <Text style={styles.title}>Tipo de Atividade: {item.activityType}</Text>
      <Text style={styles.title}>Descrição: {item.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#376631',
    height: 150,
    justifyContent: 'center',
    padding: 20,
    gap: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
  },
});