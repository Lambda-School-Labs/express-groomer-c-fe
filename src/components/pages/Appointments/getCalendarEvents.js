import React from 'react';
// import AddAppointment from './AddAppointment';
// import AppointmentsContext from '../../../state/contexts/AppointmentsContext';
import './appointments.scss';

// This component communicates with the Google API (gapi) to add events to a
// user's calendar and get events from the same calendar. Its currently hardcoded
// to use expressgroomer001@gmail.com. Its possible that accounts will need to be
// created for other groomers (there are 4 in total) so that their calendars can
// also be updated.

// expressgroomer001@gmail.com needs to be logged in as the primary gmail account
// on the machine that's running the program for HandleGetEvents to work. If another
// account is logged in, it will return errors instead of an array of events.

// The global state for appointments has been commented out, because its giving
// an error when used. To add it back, uncomment out the AppointmentsContext from
// here and AppointmentsProvider from RootContext.

// An AddAppointment component was started. It was meant to include a modal that
// shows an individual component's details when clicked, but hasn't beeb completed.

function GCal() {
  const gapi = window.gapi;
  const CLIENT_ID = `${process.env.REACT_APP_GAPI_CLIENT_ID}`;
  const API_KEY = `${process.env.REACT_APP_GAPI_API_KEY}`;
  const DISCOVERY_DOCS = [`${process.env.REACT_APP_GAPI_DISCOVERY_DOCS}`];
  const SCOPES = `${process.env.REACT_APP_GAPI_SCOPES}`;

  //   const { appointments, setAppointments } = useContext(AppointmentsContext);

  // Load client & calendar
  gapi.load('client:auth2', () => {
    console.log('loaded client');

    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    });

    gapi.client.load('calendar', 'v3', () => console.log('loaded calendar'));
  });

  // Add an event (hardcoded event)
  const handleAddEvent = () => {
    console.log('handleAddEvent');
    // return (
    //     // <AddAppointment />
    // );

    gapi.auth2
      .getAuthInstance()
      .signIn()
      .then(() => {
        const eventStartTime = new Date();
        const eventEndTime = new Date();
        eventEndTime.setMinutes(eventEndTime.getMinutes() + 30);

        const event = {
          summary: 'Client Name',
          description: 'Service',
          start: {
            dateTime: eventStartTime,
          },
          end: {
            dateTime: eventStartTime,
          },
        };

        const request = gapi.client.calendar.events.insert({
          calendarId: 'primary',
          resource: event,
        });

        request.execute(event => {
          console.log('ADDING EVENT', event);
          window.open(event.htmlLink);
        });
      });
  };

  // Get the calendar & events
  const handleGetEvents = () => {
    console.log('GETTING EVENTS');
    gapi.client.calendar.events
      .list({
        calendarId: 'primary',
        //   'timeMin': (new Date()).toISOString(), // commended out so all events return
        showDeleted: false,
        singleEvents: true,
        // maxResults: 10, // commented out so all events return, not just a given number
        orderBy: 'startTime',
      })
      .then(response => {
        const events = response.result.items;
        console.log('EVENTS: ', events);
        // setAppointments(events);
        // console.log('APPOINTMENTS: ', appointments);
      });
  };

  return (
    <div className="button-container">
      <button
        className="appt-button"
        style={{ width: 160, marginRight: 0 }}
        onClick={handleAddEvent}
        // onClick={<AddAppointment />}
      >
        Add Appointment
      </button>

      <button
        className="appt-button"
        style={{ width: 160 }}
        onClick={handleGetEvents}
      >
        Refresh Appointments
      </button>
    </div>
  );
}

export default GCal;
