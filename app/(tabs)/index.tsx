import { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Plus, FolderGit2 } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function ProjectsScreen() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': Roboto_400Regular,
    'Roboto-Medium': Roboto_500Medium,
  });

  const bottomSheetRef = useRef<BottomSheet>(null);
  const router = useRouter();

  // Variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // Callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleNewProject = () => {
    bottomSheetRef.current?.expand();
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Android Studio</Text>
        <TouchableOpacity style={styles.newButton} onPress={handleNewProject}>
          <Plus color="#fff" size={24} />
          <Text style={styles.buttonText}>New Project</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.emptyState}>
          <FolderGit2 size={64} color="#787878" />
          <Text style={styles.emptyText}>No projects open</Text>
          <Text style={styles.subText}>Create a new project or open an existing one</Text>
        </View>
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose
        backgroundStyle={styles.bottomSheetBackground}>
        <BottomSheetView style={styles.bottomSheetContent}>
          <Text style={styles.sheetTitle}>Create New Project</Text>
          <TouchableOpacity style={styles.projectOption}>
            <Text style={styles.optionTitle}>Empty Activity</Text>
            <Text style={styles.optionDescription}>
              Creates a new basic Android app with an empty activity
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.projectOption}>
            <Text style={styles.optionTitle}>Basic View</Text>
            <Text style={styles.optionDescription}>
              Creates a new Android app with a basic view layout
            </Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B2B2B',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#1E1E1E',
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontFamily: 'Roboto-Medium',
    marginBottom: 20,
  },
  newButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3592C4',
    padding: 12,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#FFFFFF',
    marginLeft: 8,
    fontFamily: 'Roboto-Regular',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyState: {
    alignItems: 'center',
  },
  emptyText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 16,
    fontFamily: 'Roboto-Medium',
  },
  subText: {
    color: '#787878',
    marginTop: 8,
    fontFamily: 'Roboto-Regular',
  },
  bottomSheetBackground: {
    backgroundColor: '#1E1E1E',
  },
  bottomSheetContent: {
    padding: 20,
  },
  sheetTitle: {
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 20,
    fontFamily: 'Roboto-Medium',
  },
  projectOption: {
    backgroundColor: '#2B2B2B',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  optionTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 4,
    fontFamily: 'Roboto-Medium',
  },
  optionDescription: {
    color: '#787878',
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
});