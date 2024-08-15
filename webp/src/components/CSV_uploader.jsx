import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';

function CSVUploader() {
  const [data, setData] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    Papa.parse(file, {
      complete: (result) => {
        setData(result.data.slice(1)); // Ignore header row
      },
      header: false,
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="bg-[#0c0a0a]  text-white p-6 font-sans">
      <div {...getRootProps()} className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center bg-gray-800 cursor-pointer">
        <input {...getInputProps()} />
        <div className="w-10 h-10 bg-green-500 mx-auto mb-4"></div>
        <p>Drop your excel sheet here or browse</p>
      </div>
      <button className="w-full py-2 mt-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300">
        Upload
      </button>

      {data.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Uploads</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800">
              <thead>
                <tr className="bg-gray-700">
                  <th className="px-4 py-2 text-left">Sl No.</th>
                  <th className="px-4 py-2 text-left">Links</th>
                  <th className="px-4 py-2 text-left">Prefix</th>
                  <th className="px-4 py-2 text-left">Add Tags</th>
                  <th className="px-4 py-2 text-left">Selected Tags</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="px-4 py-2">{row[0]}</td>
                    <td className="px-4 py-2">
                      <a href={row[1]} className="text-indigo-400 hover:underline">{row[1]}</a>
                    </td>
                    <td className="px-4 py-2">{row[2]}</td>
                    <td className="px-4 py-2">
                      <select className="bg-gray-700 text-white px-2 py-1 rounded">
                        <option>Select Tags</option>
                      </select>
                    </td>
                    <td className="px-4 py-2">
                      {row[4].split(',').map((tag, i) => (
                        <span key={i} className="inline-block bg-indigo-600 text-white px-2 py-1 rounded-full text-sm mr-2 mb-2">
                          {tag}
                          <button className="ml-1 font-bold">×</button>
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default CSVUploader;