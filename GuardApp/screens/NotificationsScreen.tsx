import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Switch } from 'react-native';

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Shift Reminder',
      message: 'Your shift starts in 30 minutes at Main Entrance',
      time: '5 minutes ago',
      type: 'reminder',
      read: false
    },
    {
      id: 2,
      title: 'Security Alert',
      message: 'Unauthorized access detected at North Gate',
      time: '15 minutes ago',
      type: 'alert',
      read: false
    },
    {
      id: 3,
      title: 'Schedule Update',
      message: 'Your shift on Dec 28 has been moved to 9:00 AM',
      time: '1 hour ago',
      type: 'update',
      read: true
    },
    {
      id: 4,
      title: 'Training Required',
      message: 'Complete your monthly safety training by Dec 30',
      time: '2 hours ago',
      type: 'training',
      read: true
    },
    {
      id: 5,
      title: 'System Maintenance',
      message: 'Security system will be offline for maintenance tonight',
      time: '1 day ago',
      type: 'system',
      read: true
    }
  ]);

  const [settings, setSettings] = useState({
    pushNotifications: true,
    shiftReminders: true,
    securityAlerts: true,
    scheduleUpdates: true,
    systemNotifications: false
  });

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'reminder':
        return '⏰';
      case 'alert':
        return '🚨';
      case 'update':
        return '📅';
      case 'training':
        return '📚';
      case 'system':
        return '⚙️';
      default:
        return '📱';
    }
  };

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <Text style={styles.headerSubtitle}>
          {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
        </Text>
      </View>

      <View style={styles.settingsSection}>
        <Text style={styles.sectionTitle}>Notification Settings</Text>
        <View style={styles.settingsCard}>
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Push Notifications</Text>
            <Switch
              value={settings.pushNotifications}
              onValueChange={(value) => setSettings(prev => ({ ...prev, pushNotifications: value }))}
            />
          </View>
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Shift Reminders</Text>
            <Switch
              value={settings.shiftReminders}
              onValueChange={(value) => setSettings(prev => ({ ...prev, shiftReminders: value }))}
            />
          </View>
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Security Alerts</Text>
            <Switch
              value={settings.securityAlerts}
              onValueChange={(value) => setSettings(prev => ({ ...prev, securityAlerts: value }))}
            />
          </View>
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Schedule Updates</Text>
            <Switch
              value={settings.scheduleUpdates}
              onValueChange={(value) => setSettings(prev => ({ ...prev, scheduleUpdates: value }))}
            />
          </View>
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>System Notifications</Text>
            <Switch
              value={settings.systemNotifications}
              onValueChange={(value) => setSettings(prev => ({ ...prev, systemNotifications: value }))}
            />
          </View>
        </View>
      </View>

      <View style={styles.notificationsSection}>
        <Text style={styles.sectionTitle}>Recent Notifications</Text>
        {notifications.map((notification) => (
          <TouchableOpacity
            key={notification.id}
            style={[
              styles.notificationCard,
              !notification.read && styles.unreadCard
            ]}
            onPress={() => markAsRead(notification.id)}
          >
            <View style={styles.notificationHeader}>
              <Text style={styles.notificationIcon}>
                {getNotificationIcon(notification.type)}
              </Text>
              <View style={styles.notificationContent}>
                <Text style={[
                  styles.notificationTitle,
                  !notification.read && styles.unreadTitle
                ]}>
                  {notification.title}
                </Text>
                <Text style={styles.notificationTime}>{notification.time}</Text>
              </View>
              {!notification.read && <View style={styles.unreadDot} />}
            </View>
            <Text style={styles.notificationMessage}>{notification.message}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.clearAllButton}>
        <Text style={styles.clearAllText}>Clear All Notifications</Text>
      </TouchableOpacity>
    </ScrollView>
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
  settingsSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 15,
  },
  settingsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F8F9FA',
  },
  settingLabel: {
    fontSize: 16,
    color: '#1C1C1E',
  },
  notificationsSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  notificationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  unreadCard: {
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  notificationIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1C1C1E',
    marginBottom: 2,
  },
  unreadTitle: {
    fontWeight: '600',
  },
  notificationTime: {
    fontSize: 12,
    color: '#8E8E93',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#007AFF',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#1C1C1E',
    lineHeight: 20,
  },
  clearAllButton: {
    backgroundColor: '#FF3B30',
    marginHorizontal: 20,
    marginBottom: 30,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  clearAllText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});