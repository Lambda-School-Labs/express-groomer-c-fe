import React from 'react';
import { Calendar, Badge } from 'antd';
import GCal from './getCalendarEvents';

const Appointments = props => {
  function getListData(value) {
    let listData;
    switch (value.date()) {
      case 1:
        listData = [
          { type: 'success', content: '9 AM' },
          { type: 'warning', content: '11 AM' },
          { type: 'error', content: '1 PM' },
        ];
        break;
      case 19:
        listData = [
          { type: 'success', content: '9 AM' },
          { type: 'warning', content: '11 AM' },
          { type: 'error', content: '12 PM' },
          { type: 'success', content: '1 PM' },
          { type: 'warning', content: '2 PM' },
          { type: 'error', content: '3 PM' },
        ];
        break;
      default:
    }
    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events" style={{ listStyleType: 'none', padding: 0 }}>
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }

  function getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }

  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2
        style={{
          textAlign: 'center',
          color: 'white',
          fontSize: 28,
          marginBottom: '.75rem',
        }}
      >
        Schedule Appointments
      </h2>
      <GCal />
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
    </div>
  );
};

export default Appointments;
