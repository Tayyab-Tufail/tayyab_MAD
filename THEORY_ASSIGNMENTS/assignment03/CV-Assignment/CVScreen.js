import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

const CVScreen = ({ route }) => {
  const { cvData } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>About Me</Text>
          <Text style={styles.infoText}>{cvData.aboutYou}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Personal Information</Text>
          <Text style={styles.infoText}>Name: {cvData.fullName}</Text>
          <Text style={styles.infoText}>Email: {cvData.email}</Text>
          <Text style={styles.infoText}>Age: {cvData.age}</Text>
          <Text style={styles.infoText}>Address: {cvData.address}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Education</Text>
          <Text style={styles.infoText}>{cvData.education}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Work Experience</Text>
          <Text style={styles.infoText}>{cvData.workExperience}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  section: {
    padding: 20,
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default CVScreen;