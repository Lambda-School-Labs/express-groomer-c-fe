import React from 'react';
import { Modal } from 'antd';
import './appointments.scss';

// This component has not been completed. Its meant to be linked to the "Add
// Appointment" button currently in getCalendarEvents. Right now, adding an
// appointment sends hardcoded data to the Google API. This component will be
// a modal that lets the user add their own data.

const AddAppointment = props => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  console.log('Add Appointment');

  return (
    <>
      <button onClick={showModal}>Add Appointment</button>

      <Modal
        title="Add Appointment"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      ></Modal>
    </>
  );
};

export default AddAppointment;
