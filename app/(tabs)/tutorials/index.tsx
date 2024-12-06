import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TutorialCard } from "@/components/TutorialCard";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { StyleSheet } from "react-native";
import { tutoriais } from "@/constants/Tutoriais";

export default function TutorialScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="book.fill"
          style={styles.headerImage}
        />
    }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Tutoriais</ThemedText>
      </ThemedView>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="default">Veja abaixo nossos tutoriais</ThemedText>
      </ThemedView>

      <ThemedView style={styles.contentContainer}>
        { tutoriais.map((tutorial) => <TutorialCard key={tutorial.id} item={tutorial} />) }
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
