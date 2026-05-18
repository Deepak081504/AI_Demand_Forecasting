import React, { useState } from 'react';
import axios from 'axios';

export default function DatasetUpload() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return setStatus('Please select a file first.');

    const formData = new FormData();
    formData.append('file', file);

    setStatus('Uploading and validating dataset...');
    try {
      await axios.post('http://localhost:8000/api/dataset/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setStatus('Success: Dataset uploaded, missing values handled, and saved securely to DB!');
    } catch (err) {
      setStatus('Error processing your dataset. Ensure columns formatting standard values.');
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="bg-white p-8 rounded-xl border shadow-sm">
        <h2 className="text-2xl font-bold mb-2">Upload Sales Dataset</h2>
        <p className="text-sm text-gray-500 mb-6">Supported Formats: .csv, .xlsx. System automatically validates duplicates and cleans records.</p>
        
        <form onSubmit={handleUpload} className="space-y-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
            <input type="file" onChange={handleFileChange} className="mx-auto block" accept=".csv, .xlsx" />
          </div>
          <button type="submit" className="bg-indigo-600 text-white px-6 py-2.5 rounded font-semibold shadow hover:bg-indigo-700 transition">
            Upload & Process
          </button>
        </form>
        {status && <div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 text-indigo-800 text-sm rounded-lg">{status}</div>}
      </div>
    </div>
  );
}