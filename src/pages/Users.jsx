import Sidebar from "../components/Sidebar";

// src/components/UserTable.js
import React, { useState, useEffect } from "react";

const UsersPage = () => {
  const [data, setData] = useState([]);
  const [visibleColumns, setVisibleColumns] = useState([
    "ReqId",
    "FullName",
    "EmailID",
    "Role",
    "DOB",
    "ReqSkills",
    "ReqCreationDate",
    "ReqTitle",
    "ImmigrationStatus",
    "ContractType",
    // Initially visible columns. Adjust as needed.
  ]);

  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const allColumns = [
    "ReqId",
    "FullName",
    "EmailID",
    "Role",
    "DOB",
    "ReqSkills",
    "ReqCreationDate",
    "ReqTitle",
    "ImmigrationStatus",
    "ContractType",
    "SubmissionDate",
    "ReqSubmissionEndDate",
    "CandidateCurrentLocation",
    "ContactNumber",
    "RecruiterName",
    "State",
    "SubmissionStatus",
    "VendorRate",
    "CandidatePayRate",
    "BillRateMargin",
    "BillRate",
    "ResumeSource",
    "EmailID",
    "VendorID",
    "LinkedInID",
    "EmployerInformation",
    "ProfessionalReferences",
    "ResumeFormattingNeeded",
    "FormattedBy",
  ];

  const toggleColumnVisibility = (column) => {
    setVisibleColumns((prev) =>
      prev.includes(column)
        ? prev.filter((c) => c !== column)
        : [...prev, column]
    );
  };

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
        {/* Filter Button */}
        <div>
          <button
            onClick={() => setIsFilterVisible(!isFilterVisible)}
            className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded origin-top-right "
          >
            Filter
          </button>
          {isFilterVisible && (
            <div className="absolute z-10 bg-white p-4 shadow-lg rounded">
              {allColumns.map((column) => (
                <div key={column}>
                  <input
                    type="checkbox"
                    checked={visibleColumns.includes(column)}
                    onChange={() => toggleColumnVisibility(column)}
                  />{" "}
                  {column}
                </div>
              ))}
            </div>
          )}
        </div>

        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          {/* Table Header */}
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {allColumns
                .filter((column) => visibleColumns.includes(column))
                .map((column) => (
                  <th key={column} scope="col" className="py-3 px-6">
                    {column}
                  </th>
                ))}
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                {allColumns
                  .filter((column) => visibleColumns.includes(column))
                  .map((column) => (
                    <td key={column} className="py-4 px-6">
                      {item[column]}
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersPage;
