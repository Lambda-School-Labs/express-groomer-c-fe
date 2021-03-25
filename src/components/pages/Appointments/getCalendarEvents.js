import React from 'react';
import './appointments.scss';

function GCal() {
  const gapi = window.gapi;
  const CLIENT_ID = `${process.env.REACT_APP_GAPI_CLIENT_ID}`;
  const API_KEY = `${process.env.REACT_APP_GAPI_API_KEY}`;
  const DISCOVERY_DOCS = [`${process.env.REACT_APP_GAPI_DISCOVERY_DOCS}`];
  const SCOPES = `${process.env.REACT_APP_GAPI_SCOPES}`;

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
    gapi.auth2
      .getAuthInstance()
      .signIn()
      .then(() => {
        const eventStartTime = new Date();
        const eventEndTime = new Date();
        eventEndTime.setMinutes(eventEndTime.getMinutes() + 30);

        var event = {
          summary: '3/24 Refactor',
          location: '800 Howard St., San Francisco, CA 94103',
          description: 'Really great refreshments',
          start: {
            dateTime: eventStartTime,
            timeZone: 'America/Los_Angeles',
          },
          end: {
            dateTime: eventStartTime,
            timeZone: 'America/Los_Angeles',
          },
          // 'recurrence': [
          //   'RRULE:FREQ=DAILY;COUNT=2'
          // ],
          attendees: [
            { email: 'lpage@example.com' },
            { email: 'sbrin@example.com' },
          ],
          reminders: {
            useDefault: false,
            overrides: [
              { method: 'email', minutes: 24 * 60 },
              { method: 'popup', minutes: 10 },
            ],
          },
        };

        var request = gapi.client.calendar.events.insert({
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
        //   'timeMin': (new Date()).toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: 'startTime',
      })
      .then(response => {
        const events = response.result.items;
        console.log('EVENTS: ', events);
      });
  };

  return (
    <div className="button-container">
      <button
        className="appt-button"
        style={{ width: 160, marginRight: 0 }}
        onClick={handleAddEvent}
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
