import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  position: string;
  department: string;
}

interface Shift {
  id: number;
  date: string;
  time: string;
  location: string;
  type: string;
  status: 'upcoming' | 'active' | 'completed';
}

interface Alert {
  id: number;
  type: string;
  location: string;
  time: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Active' | 'Investigating' | 'Resolved';
  description: string;
}

interface AppContextType {
  user: User | null;
  currentShift: Shift | null;
  alerts: Alert[];
  isOnDuty: boolean;
  setUser: (user: User | null) => void;
  setCurrentShift: (shift: Shift | null) => void;
  addAlert: (alert: Alert) => void;
  updateAlertStatus: (id: number, status: Alert['status']) => void;
  toggleDutyStatus: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>({
    id: 'GRD-001',
    name: 'John Smith',
    position: 'Senior Security Guard',
    department: 'Security Department'
  });

  const [currentShift, setCurrentShift] = useState<Shift | null>({
    id: 1,
    date: 'Today',
    time: '08:00 AM - 04:00 PM',
    location: 'Main Entrance',
    type: 'Regular Patrol',
    status: 'active'
  });

  const [alerts, setAlerts] = useState<Alert[]>([
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
    }
  ]);

  const [isOnDuty, setIsOnDuty] = useState(true);

  const addAlert = (alert: Alert) => {
    setAlerts(prev => [alert, ...prev]);
  };

  const updateAlertStatus = (id: number, status: Alert['status']) => {
    setAlerts(prev => 
      prev.map(alert => 
        alert.id === id ? { ...alert, status } : alert
      )
    );
  };

  const toggleDutyStatus = () => {
    setIsOnDuty(prev => !prev);
  };

  const value: AppContextType = {
    user,
    currentShift,
    alerts,
    isOnDuty,
    setUser,
    setCurrentShift,
    addAlert,
    updateAlertStatus,
    toggleDutyStatus
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};