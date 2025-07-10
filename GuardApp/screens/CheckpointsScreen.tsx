import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function CheckpointsScreen() {
  const checkpoints = [
    {
      id: 1,
      name: 'Main Entrance',
      status: 'Active',
      lastCheck: '10 minutes ago',
      location: 'Building A - Front Door'
    },
    {
      id: 2,
      name: 'North Gate',
      status: 'Pending',
      lastCheck: '45 minutes ago',
      location: 'Parking Area - North Side'
    },
    {
      id: 3,
      name: 'Emergency Exit',
      status: 'Active',
      lastCheck: '5 minutes ago',
      location: 'Building B - Rear Exit'
    },
    {
      id: 4,
      name: 'Loading Dock',
      status: 'Overdue',
      lastCheck: '2 hours ago',
      location: 'Warehouse - Loading Area'
    },
    {
      id: 5,
      name: 'Reception Area',
      status: 'Active',
      lastCheck: '15 minutes ago',
      location: 'Main Building - Lobby'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return '#34C759';
      case 'pending':
        return '#FF9500';
      case 'overdue':
        return '#FF3B30';
      default:
        return '#8E8E93';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Security Checkpoints</Text>
        <Text style={styles.headerSubtitle}>
          {checkpoints.filter(cp => cp.status === 'Active').length} of {checkpoints.length} checkpoints active
        </Text>
      </View>

      <ScrollView style={styles.content}>
        {checkpoints.map((checkpoint) => (
          <TouchableOpacity key={checkpoint.id} style={styles.checkpointCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.checkpointName}>{checkpoint.name}</Text>
              <View style={[styles.statusBadge, { backgroundColor: getStatusColor(checkpoint.status) }]}>
                <Text style={styles.statusText}>{checkpoint.status}</Text>
              </View>
            </View>
            
            <Text style={styles.location}>{checkpoint.location}</Text>
            <Text style={styles.lastCheck}>Last checked: {checkpoint.lastCheck}</Text>
            
            <View style={styles.actions}>
              <TouchableOpacity style={styles.checkInButton}>
                <Text style={styles.checkInText}>Check In</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.reportButton}>
                <Text style={styles.reportText}>Report Issue</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#8E8E93',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  checkpointCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkpointName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  location: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 4,
  },
  lastCheck: {
    fontSize: 13,
    color: '#8E8E93',
    marginBottom: 16,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
  },
  checkInButton: {
    flex: 1,
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkInText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  reportButton: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  reportText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '500',
  },
});