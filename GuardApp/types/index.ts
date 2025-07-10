export interface User {
  id: string;
  name: string;
  position: string;
  department: string;
  phone: string;
  email: string;
  startDate: string;
  certifications: string[];
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
}

export interface Shift {
  id: number;
  date: string;
  time: string;
  location: string;
  type: string;
  status: 'upcoming' | 'active' | 'completed';
}

export interface Checkpoint {
  id: number;
  name: string;
  status: 'Active' | 'Pending' | 'Overdue';
  lastCheck: string;
  location: string;
}

export interface Alert {
  id: number;
  type: string;
  location: string;
  time: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Active' | 'Investigating' | 'Resolved';
  description: string;
}

export interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  type: 'reminder' | 'alert' | 'update' | 'training' | 'system';
  read: boolean;
}

export interface NotificationSettings {
  pushNotifications: boolean;
  shiftReminders: boolean;
  securityAlerts: boolean;
  scheduleUpdates: boolean;
  systemNotifications: boolean;
}