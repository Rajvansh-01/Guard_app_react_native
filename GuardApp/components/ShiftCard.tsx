import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface ShiftCardProps {
  date: string;
  time: string;
  location: string;
  type: string;
}

export default function ShiftCard({ date, time, location, type }: ShiftCardProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.leftSection}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      
      <View style={styles.rightSection}>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.type}>{type}</Text>
      </View>
      
      <View style={styles.arrow}>
        <Text style={styles.arrowText}>›</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  leftSection: {
    flex: 1,
  },
  date: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  time: {
    fontSize: 14,
    color: '#8E8E93',
  },
  rightSection: {
    flex: 2,
    paddingLeft: 16,
  },
  location: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  type: {
    fontSize: 13,
    color: '#007AFF',
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  arrow: {
    paddingLeft: 16,
  },
  arrowText: {
    fontSize: 20,
    color: '#C7C7CC',
  },
});