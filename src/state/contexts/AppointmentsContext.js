import React, { createContext, useState } from 'react';

// context (shares provider data to components)
export const AppointmentsContext = createContext({});

// provider (holds the data for context to share)
export const AppointmentsProvider = ({ children }) => {
  const [appointments, setAppointments] = useState({});

  return (
    <AppointmentsContext.Provider value={{ appointments, setAppointments }}>
      {children}
    </AppointmentsContext.Provider>
  );
};

export default AppointmentsProvider;

// AppointmentsContext holds appointment data for logged-in groomer
// It can be manually refreshed with the Refresh Appointments button in
// src/components/pages/Appointments/getCalendarEvents
