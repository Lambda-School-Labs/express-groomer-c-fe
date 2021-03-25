import React from 'react';
import { Calendar, Badge } from 'antd';
// import React, { useContext } from 'react';
// import { CustomersContext } from '../../../state/contexts/CustomersContext';
// import FileUpload from '../../common/FileUpload';
// import { Divider, Row } from 'antd';
// import './pet.scss';

const Appointments = props => {
  //   const { custInfo } = useContext(CustomersContext);
  //   const thisPet = props.pet;

  function getListData(value) {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event。。....' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ];
        break;
      default:
    }
    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
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
      <h2 style={{ textAlign: 'center', color: 'white', fontSize: 28 }}>
        Appointments
      </h2>
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />

      {/* <Divider style={{ borderColor: 'lightblue' }}>
        Upload Pet Vaccination Image
      </Divider>

      <Row justify={'center'} style={{ width: '90%', margin: 'auto' }}>
        <FileUpload
          uploadUrl={`pets/vaccination-upload/${thisPet}?customer_id=${custInfo.user_id}`}
        />
      </Row> */}
    </div>
  );
};

// ReactDOM.render(
//   <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />,
//   mountNode,
// );

export default Appointments;
