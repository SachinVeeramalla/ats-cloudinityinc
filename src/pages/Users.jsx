import Sidebar from "../components/Sidebar";

// src/components/UserTable.js
import React, { useState, useEffect } from "react";

const UsersPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://ue1ljpk7rd.execute-api.us-east-1.amazonaws.com/Prod/data"
        );
        if (!response.ok) {
          throw new Error("Data could not be fetched!");
        } else {
          const data = await response.json();
          setData(data); // Assuming the response JSON structure matches your data requirement
          console.log("Data fetched successfully: ", data);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Users Table flex">
      <Sidebar />
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg m-8">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          {/* Table Header */}
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Req Id
              </th>
              <th scope="col" className="py-3 px-6">
                Full Name
              </th>
              <th scope="col" className="py-3 px-6">
                Email ID
              </th>
              <th scope="col" className="py-3 px-6">
                Role
              </th>
              <th scope="col" className="py-3 px-6">
                DOB
              </th>
              <th scope="col" className="py-3 px-6">
                Req Skills
              </th>
              <th scope="col" className="py-3 px-6">
                Req Creation Date
              </th>
              <th scope="col" className="py-3 px-6">
                Req Title
              </th>
              <th scope="col" className="py-3 px-6">
                Immigration Status
              </th>
              <th scope="col" className="py-3 px-6">
                Contract Type
              </th>
              <th scope="col" className="py-3 px-6">
                Submission Date
              </th>
              <th scope="col" className="py-3 px-6">
                Req Submission End Date
              </th>
              <th scope="col" className="py-3 px-6">
                Candidate Current Location
              </th>
              <th scope="col" className="py-3 px-6">
                Contact Number
              </th>
              <th scope="col" className="py-3 px-6">
                Recruiter Name
              </th>
              <th scope="col" className="py-3 px-6">
                State
              </th>
              <th scope="col" className="py-3 px-6">
                Submission Status
              </th>
              <th scope="col" className="py-3 px-6">
                Vendor Rate
              </th>
              <th scope="col" className="py-3 px-6">
                Candidate Pay Rate
              </th>
              <th scope="col" className="py-3 px-6">
                Bill Rate Margin
              </th>
              <th scope="col" className="py-3 px-6">
                Bill Rate
              </th>
              <th scope="col" className="py-3 px-6">
                Resume Source
              </th>
              <th scope="col" className="py-3 px-6">
                Email ID
              </th>
              <th scope="col" className="py-3 px-6">
                Vendor ID
              </th>
              <th scope="col" className="py-3 px-6">
                LinkedIn ID
              </th>
              <th scope="col" className="py-3 px-6">
                Employer Information
              </th>
              <th scope="col" className="py-3 px-6">
                Professional References
              </th>
              <th scope="col" className="py-3 px-6">
                Resume Formatting Needed
              </th>
              <th scope="col" className="py-3 px-6">
                Formatted By
              </th>

              {/* Add more headers as needed */}
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="py-4 px-6">{item.ReqId}</td>
                <td className="py-4 px-6">{item.FullName}</td>
                <td className="py-4 px-6">{item.ReqTitle}</td>
                {/* Render more data as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersPage;
