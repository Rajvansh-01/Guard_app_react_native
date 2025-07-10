import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StatusCard from '../components/StatusCard';
import ShiftCard from '../components/ShiftCard';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#007AFF', '#0056CC']}
        style={styles.header}
      >
        <Text style={styles.welcomeText}>Welcome Back, Guard!</Text>
        <Text style={styles.dateText}>
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </Text>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.statusSection}>
          <Text style={styles.sectionTitle}>Current Status</Text>
          <StatusCard 
            status="On Duty"
            location="Main Entrance"
            startTime="08:00 AM"
            duration="4h 30m"
          />
        </View>

        <View style={styles.quickActions}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionGrid}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>🚨</Text>
              <Text style={styles.actionText}>Emergency Alert</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>📍</Text>
              <Text style={styles.actionText}>Check-in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>📝</Text>
              <Text style={styles.actionText}>Report Incident</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>📞</Text>
              <Text style={styles.actionText}>Contact Supervisor</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.upcomingShifts}>
          <Text style={styles.sectionTitle}>Upcoming Shifts</Text>
          <ShiftCard 
            date="Tomorrow"
            time="06:00 AM - 02:00 PM"
            location="North Gate"
            type="Regular Patrol"
          />
          <ShiftCard 
            date="Dec 28"
            time="10:00 PM - 06:00 AM"
            location="Main Building"
            type="Night Security"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    padding: 20,
    paddingTop: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  dateText: {
    fontSize: 16,
    color: '#E3F2FD',
  },
  content: {
    padding: 20,
  },
  statusSection: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 15,
  },
  quickActions: {
    marginBottom: 25,
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#FFFFFF',
    width: '48%',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  actionIcon: {
    fontSize: 30,
    marginBottom: 8,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1C1C1E',
    textAlign: 'center',
  },
  upcomingShifts: {
    marginBottom: 20,
  },
});