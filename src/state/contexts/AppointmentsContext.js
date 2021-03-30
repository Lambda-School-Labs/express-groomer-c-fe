// This context is meant to share appointment data with the components in
// src/pages/Appointments and any other components that use appointment data.
// There was an issue getting the data in state before Appointments.js was
// rendered, so testing was started to see if that data could be loaded here
// before Appointments.js rendered. There were errors, so this might need to
// be corrected, or another approach considered.

// The code to grab initial data has been commented out, below.

// To use this context, uncomment out AppointmentsProvider in RootContext.

import React, { createContext, useState } from 'react';

// context (shares provider data to components)
export const AppointmentsContext = createContext({});

// provider (holds the data for context to share)
export const AppointmentsProvider = ({ children }) => {
  const [appointments, setAppointments] = useState({});
  // const gapi = window.gapi;
  // const CLIENT_ID = `${process.env.REACT_APP_GAPI_CLIENT_ID}`;
  // const API_KEY = `${process.env.REACT_APP_GAPI_API_KEY}`;
  // const DISCOVERY_DOCS = [`${process.env.REACT_APP_GAPI_DISCOVERY_DOCS}`];
  // const SCOPES = `${process.env.REACT_APP_GAPI_SCOPES}`;

  // // Load client & calendar
  // gapi.load('client:auth2', () => {
  //   console.log('loaded client');

  //   gapi.client.init({
  //     apiKey: API_KEY,
  //     clientId: CLIENT_ID,
  //     discoveryDocs: DISCOVERY_DOCS,
  //     scope: SCOPES,
  //   });

  //   gapi.client.load('calendar', 'v3', () => console.log('loaded calendar 1'));
  // });

  // // Get the calendar & events
  // const getEvents = async () => {
  //   console.log('GETTING EVENTS');
  //   await gapi.client.load('calendar', 'v3', () =>
  //     console.log('loaded calendar 2')
  //   );
  //   gapi.client.calendar.events
  //     .list({
  //       calendarId: 'primary',
  //       //   'timeMin': (new Date()).toISOString(),
  //       showDeleted: false,
  //       singleEvents: true,
  //       maxResults: 10,
  //       orderBy: 'startTime',
  //     })
  //     .then(response => {
  //       const events = response.result.items;
  //       console.log('EVENTS: ', events);
  //       setAppointments(events);
  //       console.log('APPOINTMENTS 1: ', appointments);
  //       setAppointments(events);
  //       console.log('APPOINTMENTS 2: ', appointments);
  //     });
  // };

  // useEffect(() => {
  //   console.log('useEffect');
  //   getEvents();
  // }, []);

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
