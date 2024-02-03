// import React, { useState } from 'react';
// import axios from 'axios';

// const FileUploadComponent = () => {
//     const [selectedFile, setSelectedFile] = useState(null);

//     const handleFileSelect = (event) => {
//         setSelectedFile(event.target.files[0]);
//     };

//     const handleFileUpload = async () => {
//         if (!selectedFile) {
//             alert('Please select a file first!');
//             return;
//         }

//         const url = `https://8t9nfrdxf9.execute-api.us-east-1.amazonaws.com/Prod/upload/{filename}`;

//         try {
//             const response = await axios.put(url, selectedFile, {
//                 headers: {
//                     'Content-Type': 'application/octet-stream',
//                     // Any other headers required by your API or for CORS
//                 },
//             });
//             console.log('File uploaded successfully:', response.data);
//         } catch (error) {
//             console.error('Error uploading file:', error);
//         }
//     };

//     return (
//         <div>
//             <input type="file" onChange={handleFileSelect} />
//             <button onClick={handleFileUpload}>Upload</button>
//         </div>
//     );
// };

// export default FileUploadComponent;

import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"; // If you're using React Router for navigation

const FileUploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const history = useHistory(); // For navigation

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile); // Ensure your backend is set up to handle 'file' key
    const url =
      "https://8t9nfrdxf9.execute-api.us-east-1.amazonaws.com/Prod/upload/{filename}"; // Replace with your actual endpoint

    try {
      await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // For file upload
        },
      });
      setUploadSuccess(true); // Update state to show success message
      // Optional: Redirect to success page
      // history.push('/success'); // Uncomment if using React Router for navigation
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("File upload failed.");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileSelect} />
      <button onClick={handleFileUpload}>Upload</button>
      {uploadSuccess && <div>File uploaded successfully!</div>}
    </div>
  );
};

export default FileUploadComponent;
