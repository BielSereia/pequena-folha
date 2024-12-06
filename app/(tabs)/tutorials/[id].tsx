import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { tutoriais } from "@/constants/Tutoriais";
import { useLocalSearchParams } from "expo-router";
import { Platform, StyleSheet } from "react-native";
import WebView from "react-native-webview";

export const unstable_settings = {
  href: null,
};

export default function TutorialIdScreen() {
  const { id } = useLocalSearchParams();

  const tutorial = tutoriais.find((tutorial) => tutorial.id === id);

  if (!tutorial) {
    return <ThemedText type="title">Tutorial não encontrado</ThemedText>;
  }

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
        <ThemedText type="title">{tutorial?.title}</ThemedText>
      </ThemedView>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="default">{tutorial?.description}</ThemedText>
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
