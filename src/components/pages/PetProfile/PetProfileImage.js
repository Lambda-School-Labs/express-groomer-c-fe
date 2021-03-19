import React, { useContext } from 'react';
import { Avatar, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { CustomersContext } from '../../../state/contexts/CustomersContext';
import FileUpload from '../../common/FileUpload';
import './pet.scss';

const PetImageModal = props => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const { custInfo } = useContext(CustomersContext);
  const thisPet = props.pet;

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

  return (
    <>
      <div className="profile-img-container" onClick={showModal}>
        {props.petImg ? (
          <img
            src={props.petImg}
            alt="Pet Profile"
            className="pet-profile-img"
          />
        ) : (
          <Avatar size={74} icon={<UserOutlined />} />
        )}
      </div>

      <Modal
        title="Upload Pet Image"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <FileUpload
          uploadUrl={`pets/image-upload/${thisPet}?customer_id=${custInfo.user_id}`}
        />
      </Modal>
    </>
  );
};

export default PetImageModal;
