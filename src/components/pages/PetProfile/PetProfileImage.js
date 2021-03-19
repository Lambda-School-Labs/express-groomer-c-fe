import React from 'react';
// import React, { useContext } from 'react';
import { Avatar, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// import { FormContext } from '../../../state/contexts/FormContext';
// import { APIContext } from '../../../state/contexts/APIContext';
// import { useOktaAuth } from '@okta/okta-react';

const PetImageModal = () => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState('Content of the modal');

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
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

  return (
    <>
      <div className="profile-img-container" onClick={showModal}>
        <Avatar size={74} icon={<UserOutlined />} />
      </div>

      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};

export default PetImageModal;
