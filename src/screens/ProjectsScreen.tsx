import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Plus, FolderGit2 } from 'lucide-react-native';

export default function ProjectsScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // Variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // Callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleNewProject = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to React Native</Text>
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
            <Text style={styles.optionTitle}>React Native App</Text>
            <Text style={styles.optionDescription}>
              Creates a new basic React Native app
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.projectOption}>
            <Text style={styles.optionTitle}>TypeScript App</Text>
            <Text style={styles.optionDescription}>
              Creates a new React Native app with TypeScript
            </Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>
    </View>
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
    fontWeight: '500',
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
    fontWeight: '400',
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
    fontWeight: '500',
  },
  subText: {
    color: '#787878',
    marginTop: 8,
    fontWeight: '400',
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
    fontWeight: '500',
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
    fontWeight: '500',
  },
  optionDescription: {
    color: '#787878',
    fontSize: 14,
    fontWeight: '400',
  },
});
