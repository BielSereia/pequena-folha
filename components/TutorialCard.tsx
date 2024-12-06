import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

interface IItem {
  item: {
    id: string;
    title: string;
    description: string;
  }
}

export function TutorialCard({ item }: IItem) {
  return (
    <View style={styles.item}>
      <Link
        href={{
          pathname: '/tutorials/[id]',
          params: { id: item.id }
        }}
      >
        <Text style={styles.title}>{item.title}</Text>
      </Link>
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
