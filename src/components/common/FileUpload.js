import React, { useContext } from 'react';
import axios from 'axios';
import { Button } from 'antd';

import './FileUpload.css';
import { useOktaAuth } from '@okta/okta-react';
import { APIContext } from '../../state/contexts/APIContext';

// uploadUrl is the path to the DB endpoint in our API - it varies with what we're saving
// fileUrl is the Cloudinary path where the file was saved

const FileUpload = ({ uploadUrl }) => {
  const { authState } = useOktaAuth();
  const { getPet } = useContext(APIContext);
  let selectedFile = '';
  let fileUrl = '';

  const getAuthHeader = authState => {
    if (!authState.isAuthenticated) {
      throw new Error('Not authenticated');
    }
    return { Authorization: `Bearer ${authState.idToken}` };
  };

  const changeHandler = event => {
    selectedFile = event.target.files[0];
    // console.log('selectedFile', selectedFile);
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
      .then(res => (fileUrl = res.data.secure_url))
      // .then(res => console.log('Cloudinary response', res))
      .catch(error => console.log('Cloudinary error: ', error));

    // console.log('file URL', fileUrl);
    // console.log('upload URL', uploadUrl);

    axios
      .post(
        `${process.env.REACT_APP_API_URI}/${uploadUrl}`,
        { location: fileUrl },
        {
          headers,
        }
      )
      .then(res => {
        // console.log('DB response', res);
        if (res.data.message === 'Pet vaccination updated') {
          // console.log('Refresh pet state here');
          getPet(authState);
        }
        if (res.data.message === 'Pet image updated') {
          getPet(authState);
        }
      })
      .catch(error => console.log('DB error', error));

    // console.log('file URL-2', fileUrl);
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
