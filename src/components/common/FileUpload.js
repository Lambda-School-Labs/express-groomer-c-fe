// import React, { useState } from 'react';
import React from 'react';
import axios from 'axios';
import { Button } from 'antd';

import './FileUpload.css';
import { useOktaAuth } from '@okta/okta-react';

// uploadUrl is the path to the DB endpoint in our API - it varies with what we're saving
// fileUrl is the Cloudinary path where the file was saved

const FileUpload = ({ uploadUrl }) => {
  const { authState } = useOktaAuth();
  // const [selectedFile, setSelectedFile] = useState();
  // const [fileUrl, setFileurl] = useState('');
  let selectedFile = '';
  let fileUrl = '';

  const getAuthHeader = authState => {
    if (!authState.isAuthenticated) {
      throw new Error('Not authenticated');
    }
    return { Authorization: `Bearer ${authState.idToken}` };
  };

  const changeHandler = event => {
    // setSelectedFile(event.target.files[0]);
    selectedFile = event.target.files[0];
    console.log('selectedFile', selectedFile);
  };

  const handleSubmission = async () => {
    const headers = getAuthHeader(authState);

    const formData = new FormData();
    formData.append('upload_preset', 'sendCloudinary');
    formData.append('file', selectedFile);

    await axios
      .post(
        'https://api.cloudinary.com/v1_1/expressgroomer/image/upload',
        formData
      )
      // .then(res => setFileurl(res.data.secure_url))
      .then(res => (fileUrl = res.data.secure_url))
      .then(res => console.log('Cloudinary response', res))
      .catch(error => console.log('Cloudinary error: ', error));

    console.log('file URL', fileUrl);
    console.log('upload URL', uploadUrl);

    axios
      .post(
        `${process.env.REACT_APP_API_URI}/${uploadUrl}`,
        { location: fileUrl },
        {
          headers,
        }
      )
      .then(res => console.log('DB response', res))
      .catch(error => console.log('DB error', error));

    // rest();

    console.log('file URL-2', fileUrl);
    // console.log({ rest }, 'Test Res');
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
