import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function ProfileScreen() {
  const profileData = {
    name: 'John Smith',
    id: 'GRD-001',
    department: 'Security Department',
    position: 'Senior Security Guard',
    phone: '+1 (555) 123-4567',
    email: 'john.smith@company.com',
    startDate: 'January 15, 2020',
    certifications: ['CPR Certified', 'First Aid', 'Security License'],
    emergencyContact: {
      name: 'Jane Smith',
      relationship: 'Spouse',
      phone: '+1 (555) 987-6543'
    }
  };

  const menuItems = [
    { icon: '⚙️', title: 'Settings', subtitle: 'App preferences and notifications' },
    { icon: '📋', title: 'Shift History', subtitle: 'View your complete shift records' },
    { icon: '📊', title: 'Performance', subtitle: 'View your performance metrics' },
    { icon: '📚', title: 'Training', subtitle: 'Access training materials' },
    { icon: '❓', title: 'Help & Support', subtitle: 'Get help and contact support' },
    { icon: '🔒', title: 'Privacy Policy', subtitle: 'Review privacy and terms' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JS</Text>
          </View>
        </View>
        <Text style={styles.name}>{profileData.name}</Text>
        <Text style={styles.position}>{profileData.position}</Text>
        <Text style={styles.id}>ID: {profileData.id}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Department:</Text>
            <Text style={styles.infoValue}>{profileData.department}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Phone:</Text>
            <Text style={styles.infoValue}>{profileData.phone}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Email:</Text>
            <Text style={styles.infoValue}>{profileData.email}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Start Date:</Text>
            <Text style={styles.infoValue}>{profileData.startDate}</Text>
          </View>
        </View>
      </View>

      <View style={styles.certificationsSection}>
        <Text style={styles.sectionTitle}>Certifications</Text>
        <View style={styles.certificationsContainer}>
          {profileData.certifications.map((cert, index) => (
            <View key={index} style={styles.certificationBadge}>
              <Text style={styles.certificationText}>{cert}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.emergencySection}>
        <Text style={styles.sectionTitle}>Emergency Contact</Text>
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Name:</Text>
            <Text style={styles.infoValue}>{profileData.emergencyContact.name}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Relationship:</Text>
            <Text style={styles.infoValue}>{profileData.emergencyContact.relationship}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Phone:</Text>
            <Text style={styles.infoValue}>{profileData.emergencyContact.phone}</Text>
          </View>
        </View>
      </View>

      <View style={styles.menuSection}>
        <Text style={styles.sectionTitle}>Menu</Text>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Text style={styles.menuIcon}>{item.icon}</Text>
            <View style={styles.menuContent}>
              <Text style={styles.menuTitle}>{item.title}</Text>
              <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
            </View>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  profileHeader: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  position: {
    fontSize: 16,
    color: '#8E8E93',
    marginBottom: 4,
  },
  id: {
    fontSize: 14,
    color: '#8E8E93',
  },
  infoSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 15,
  },
  infoCard: {
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
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F8F9FA',
  },
  infoLabel: {
    fontSize: 14,
    color: '#8E8E93',
    flex: 1,
  },
  infoValue: {
    fontSize: 14,
    color: '#1C1C1E',
    fontWeight: '500',
    flex: 2,
    textAlign: 'right',
  },
  certificationsSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  certificationsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  certificationBadge: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  certificationText: {
    fontSize: 12,
    color: '#007AFF',
    fontWeight: '500',
  },
  emergencySection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  menuSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  menuItem: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  menuIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1C1C1E',
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 13,
    color: '#8E8E93',
  },
  menuArrow: {
    fontSize: 20,
    color: '#C7C7CC',
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    marginHorizontal: 20,
    marginBottom: 30,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});