import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';

export default function AlertsScreen() {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: 'Security Breach',
      location: 'North Gate',
      time: '2 minutes ago',
      priority: 'High',
      status: 'Active',
      description: 'Unauthorized access detected at North Gate entrance'
    },
    {
      id: 2,
      type: 'Equipment Malfunction',
      location: 'Main Building',
      time: '15 minutes ago',
      priority: 'Medium',
      status: 'Investigating',
      description: 'Security camera offline in corridor B'
    },
    {
      id: 3,
      type: 'Suspicious Activity',
      location: 'Parking Lot',
      time: '1 hour ago',
      priority: 'Low',
      status: 'Resolved',
      description: 'Unidentified person loitering near vehicles'
    },
    {
      id: 4,
      type: 'Fire Alarm',
      location: 'Building C',
      time: '3 hours ago',
      priority: 'High',
      status: 'Resolved',
      description: 'Fire alarm triggered in storage room - false alarm'
    }
  ]);

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return '#FF3B30';
      case 'medium':
        return '#FF9500';
      case 'low':
        return '#34C759';
      default:
        return '#8E8E93';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return '#FF3B30';
      case 'investigating':
        return '#FF9500';
      case 'resolved':
        return '#34C759';
      default:
        return '#8E8E93';
    }
  };

  const handleEmergencyAlert = () => {
    Alert.alert(
      'Emergency Alert',
      'Are you sure you want to send an emergency alert? This will notify all supervisors and emergency contacts.',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Send Alert', 
          style: 'destructive',
          onPress: () => {
            Alert.alert('Alert Sent', 'Emergency alert has been sent to all supervisors.');
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.emergencySection}>
        <TouchableOpacity style={styles.emergencyButton} onPress={handleEmergencyAlert}>
          <Text style={styles.emergencyIcon}>🚨</Text>
          <Text style={styles.emergencyText}>EMERGENCY ALERT</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.alertsHeader}>
        <Text style={styles.alertsTitle}>Recent Alerts</Text>
        <Text style={styles.alertsCount}>
          {alerts.filter(alert => alert.status === 'Active').length} active alerts
        </Text>
      </View>

      <ScrollView style={styles.alertsList}>
        {alerts.map((alert) => (
          <TouchableOpacity key={alert.id} style={styles.alertCard}>
            <View style={styles.alertHeader}>
              <View style={styles.alertTitleRow}>
                <Text style={styles.alertType}>{alert.type}</Text>
                <View style={[styles.priorityBadge, { backgroundColor: getPriorityColor(alert.priority) }]}>
                  <Text style={styles.priorityText}>{alert.priority}</Text>
                </View>
              </View>
              <View style={[styles.statusBadge, { backgroundColor: getStatusColor(alert.status) }]}>
                <Text style={styles.statusText}>{alert.status}</Text>
              </View>
            </View>

            <Text style={styles.alertDescription}>{alert.description}</Text>
            
            <View style={styles.alertFooter}>
              <Text style={styles.alertLocation}>📍 {alert.location}</Text>
              <Text style={styles.alertTime}>{alert.time}</Text>
            </View>

            {alert.status === 'Active' && (
              <View style={styles.alertActions}>
                <TouchableOpacity style={styles.respondButton}>
                  <Text style={styles.respondText}>Respond</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.escalateButton}>
                  <Text style={styles.escalateText}>Escalate</Text>
                </TouchableOpacity>
              </View>
            )}
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
  emergencySection: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  emergencyButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  emergencyIcon: {
    fontSize: 24,
    marginRight: 8,
  },
  emergencyText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  alertsHeader: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  alertsTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  alertsCount: {
    fontSize: 14,
    color: '#8E8E93',
  },
  alertsList: {
    flex: 1,
    padding: 20,
  },
  alertCard: {
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
  alertHeader: {
    marginBottom: 12,
  },
  alertTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  alertType: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
    flex: 1,
  },
  priorityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  priorityText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  alertDescription: {
    fontSize: 14,
    color: '#1C1C1E',
    marginBottom: 12,
    lineHeight: 20,
  },
  alertFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  alertLocation: {
    fontSize: 13,
    color: '#8E8E93',
  },
  alertTime: {
    fontSize: 13,
    color: '#8E8E93',
  },
  alertActions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  respondButton: {
    flex: 1,
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  respondText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  escalateButton: {
    flex: 1,
    backgroundColor: '#FF9500',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  escalateText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
});