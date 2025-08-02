import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SettingsContextType {
  darkMode: boolean;
  notifications: boolean;
  autoSave: boolean;
  toggleDarkMode: () => void;
  toggleNotifications: () => void;
  toggleAutoSave: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [autoSave, setAutoSave] = useState(true);

  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const toggleNotifications = () => setNotifications(prev => !prev);
  const toggleAutoSave = () => setAutoSave(prev => !prev);

  return (
    <SettingsContext.Provider value={{
      darkMode,
      notifications,
      autoSave,
      toggleDarkMode,
      toggleNotifications,
      toggleAutoSave,
    }}>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        {children}
      </div>
    </SettingsContext.Provider>
  );
}

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within SettingsProvider');
  }
  return context;
};