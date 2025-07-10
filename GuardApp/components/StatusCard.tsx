import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface StatusCardProps {
  status: string;
  location: string;
  startTime: string;
  duration: string;
}

export default function StatusCard({ status, location, startTime, duration }: StatusCardProps) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'on duty':
        return '#34C759';
      case 'off duty':
        return '#8E8E93';
      case 'break':
        return '#FF9500';
      default:
        return '#007AFF';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={[styles.statusIndicator, { backgroundColor: getStatusColor(status) }]} />
        <Text style={styles.statusText}>{status}</Text>
      </View>
      
      <View style={styles.details}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Location:</Text>
          <Text style={styles.detailValue}>{location}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Started:</Text>
          <Text style={styles.detailValue}>{startTime}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Duration:</Text>
          <Text style={styles.detailValue}>{duration}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  statusText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1C1C1E',
  },
  details: {
    gap: 8,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 14,
    color: '#8E8E93',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1C1C1E',
  },
});