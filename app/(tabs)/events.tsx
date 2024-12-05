import { Item } from "@/components/Item";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { events } from "@/constants/Events";
import { StyleSheet } from "react-native";

export default function EventsScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="calendar"
          style={styles.headerImage}
        />
      }>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Agenda de Eventos</ThemedText>
        </ThemedView>

        <ThemedView style={styles.contentContainer}>
          { events.map((event) => <Item key={event.id} item={event} />) }
        </ThemedView>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  contentContainer: {
    flexDirection: 'column',
    gap: 8,
  },
});