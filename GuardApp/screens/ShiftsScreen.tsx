import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import ShiftCard from '../components/ShiftCard';

export default function ShiftsScreen() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingShifts = [
    {
      id: 1,
      date: 'Today',
      time: '02:00 PM - 10:00 PM',
      location: 'Main Entrance',
      type: 'Regular Patrol'
    },
    {
      id: 2,
      date: 'Tomorrow',
      time: '06:00 AM - 02:00 PM',
      location: 'North Gate',
      type: 'Morning Security'
    },
    {
      id: 3,
      date: 'Dec 28',
      time: '10:00 PM - 06:00 AM',
      location: 'Main Building',
      type: 'Night Security'
    },
    {
      id: 4,
      date: 'Dec 29',
      time: '08:00 AM - 04:00 PM',
      location: 'Parking Lot',
      type: 'Vehicle Security'
    }
  ];

  const pastShifts = [
    {
      id: 5,
      date: 'Yesterday',
      time: '06:00 AM - 02:00 PM',
      location: 'South Gate',
      type: 'Morning Patrol'
    },
    {
      id: 6,
      date: 'Dec 24',
      time: '10:00 PM - 06:00 AM',
      location: 'Main Building',
      type: 'Night Security'
    },
    {
      id: 7,
      date: 'Dec 23',
      time: '02:00 PM - 10:00 PM',
      location: 'Reception Area',
      type: 'Front Desk Security'
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'upcoming' && styles.activeTab]}
          onPress={() => setActiveTab('upcoming')}
        >
          <Text style={[styles.tabText, activeTab === 'upcoming' && styles.activeTabText]}>
            Upcoming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'past' && styles.activeTab]}
          onPress={() => setActiveTab('past')}
        >
          <Text style={[styles.tabText, activeTab === 'past' && styles.activeTabText]}>
            Past Shifts
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {activeTab === 'upcoming' ? (
          <View>
            <Text style={styles.sectionTitle}>Upcoming Shifts</Text>
            {upcomingShifts.map((shift) => (
              <ShiftCard
                key={shift.id}
                date={shift.date}
                time={shift.time}
                location={shift.location}
                type={shift.type}
              />
            ))}
          </View>
        ) : (
          <View>
            <Text style={styles.sectionTitle}>Completed Shifts</Text>
            {pastShifts.map((shift) => (
              <ShiftCard
                key={shift.id}
                date={shift.date}
                time={shift.time}
                location={shift.location}
                type={shift.type}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    margin: 20,
    borderRadius: 12,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#007AFF',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#8E8E93',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 15,
  },
});