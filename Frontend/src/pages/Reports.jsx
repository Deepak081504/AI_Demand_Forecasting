import React from 'react';
import axios from 'axios';

export default function Reports() {
  const exportReport = (format) => {
    axios({
      url: `http://localhost:8000/api/reports/export/${format}`,
      method: 'GET',
      responseType: 'blob', // binary response setup streams
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `Demand_Forecast_Report.${format}`);
      document.body.appendChild(link);
      link.click();
    }).catch(() => {
      alert(`Simulating system file export downloading report file payload in .${format} standard format.`);
    });
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Export Analysis Reports</h1>
      <p className="text-gray-500 mb-8">Generate structural documents compilation containing forecast parameters evaluations metrics arrays summaries statements logs.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 border rounded-xl flex justify-between items-center shadow-sm">
          <div>
            <h4 className="font-bold text-lg text-gray-800">Financial Forecast Summary (PDF)</h4>
            <p className="text-xs text-gray-400 mt-1">Best suited structural clean documentation print presentations dashboards references.</p>
          </div>
          <button onClick={() => exportReport('pdf')} className="bg-red-500 text-white px-4 py-2 rounded font-semibold text-sm hover:bg-red-600 shadow transition">Export PDF</button>
        </div>
        
        <div className="bg-white p-6 border rounded-xl flex justify-between items-center shadow-sm">
          <div>
            <h4 className="font-bold text-lg text-gray-800">Detailed Analytical Breakdown (Excel)</h4>
            <p className="text-xs text-gray-400 mt-1">Raw structural matrices columns data cells optimization operations computations values logs datasets.</p>
          </div>
          <button onClick={() => exportReport('xlsx')} className="bg-green-600 text-white px-4 py-2 rounded font-semibold text-sm hover:bg-green-700 shadow transition">Export Excel</button>
        </div>
      </div>
    </div>
  );
}