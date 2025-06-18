import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Templates</Text>
          
          <TouchableOpacity style={styles.card}>
            <Ionicons name="phone-portrait" size={24} color="#3592C4" />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>React Native App</Text>
              <Text style={styles.cardDescription}>
                A basic React Native application template
              </Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.card}>
            <Ionicons name="globe" size={24} color="#3592C4" />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Web App</Text>
              <Text style={styles.cardDescription}>
                Modern web application with React
              </Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.card}>
            <Ionicons name="desktop" size={24} color="#3592C4" />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Desktop App</Text>
              <Text style={styles.cardDescription}>
                Cross-platform desktop application
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  cardContent: {
    flex: 1,
    marginLeft: 16,
  },
  cardTitle: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#787878',
  },
});
