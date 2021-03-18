import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'antd';
import './FileUpload.css';
import { useOktaAuth } from '@okta/okta-react';

const FileUpload = ({ uploadUrl }) => {
  const { authState } = useOktaAuth();
  const [selectedFile, setSelectedFile] = useState();
  const [fileUrl, setFileurl] = useState('');

  const getAuthHeader = authState => {
    if (!authState.isAuthenticated) {
      throw new Error('Not authenticated');
    }
    return { Authorization: `Bearer ${authState.idToken}` };
  };

  const changeHandler = event => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = async () => {
    const headers = getAuthHeader(authState);

    const formData = new FormData();
    formData.append('upload_preset', 'sendCloudinary');
    formData.append('image', selectedFile);

    axios
      .post(
        'https://api.cloudinary.com/v1_1/expressgroomer/image/upload',
        formData
      )
      .then(res => setFileurl(res.data.secure_url))
      .catch(error => console.log('Cloudinary error: ', error));

    const sendImgToDB = await axios
      .post(
        `${process.env.REACT_APP_API_URI}/${uploadUrl}`,
        { location: fileUrl },
        { headers }
      )
      .then(res => console.log(res))
      .catch(error => console.log('Error saving file URL.', error));

    sendImgToDB();
  };

  return (
    <div className={'upload-form'}>
      <input
        className={'upload-input'}
        id={'upload'}
        type="file"
        name="file"
        onChange={changeHandler}
      />

      <Button
        className={'submit-button'}
        type={'primary'}
        onClick={handleSubmission}
      >
        Submit
      </Button>
    </div>
  );
};
export default FileUpload;
