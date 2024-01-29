import React, { useState } from "react";

const SuccessPage = () => {
  const [formData, setFormData] = useState({
    FullName: "",
    RequiredID: "",
    RequiredTitle: "",
    Role: "",
    RequiredCreationDate: "",
    VendorID: "",
    ImmigrationStatus: "",
    ContractType: "",
    SubmissionDate: "",
    RequiredSubmissionEndDate: "",
    CandidateCurrentLocation: "",
    ContactNumber: "",
    RecruiterName: "",
    State: "",
    SubmissionStatus: "",
    VendorRate: "",
    CandidatePayRate: "",
    BillRateMargin: "",
    ResumeSource: "",
    EmailId: "",
    LinkedInID: "",
    EmployerInformation: "",
    ProfessionalReferences: "",
    DOB: "",
    RequiredSkills: "",
    ResumeFormatingNeeded: "",
    FormatedBy: "",
    Password: "",
    PasswordConfirmation: "",
    Resume: null, // Handle file uploads separately if needed
  });
  const [showPopup, setShowPopup] = useState(false);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(formData)); // Convert formData to JSON
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    window.location.reload(); // Reloads the page
  };
  return (
    <div>
      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">
          Employee Information Form
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="FullName"
              >
                Full Name
              </label>
              <input
                id="FullName"
                type="text"
                placeholder="Full Name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={handleInputChange} // attach handleInputChange here
                value={formData.FullName}
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="RequiredID"
              >
                Required ID
              </label>
              <input
                id="RequiredID"
                type="text"
                placeholder="ID"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={handleInputChange} // attach handleInputChange here
                value={formData.RequiredID}
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="RequiredTitle"
              >
                Required Title
              </label>
              <input
                id="RequiredTitle"
                type="text"
                placeholder="Title"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={handleInputChange} // attach handleInputChange here
                value={formData.RequiredTitle}
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="Role">
                Role
              </label>
              <input
                id="Role"
                type="text"
                placeholder="Role"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={handleInputChange} // attach handleInputChange here
                value={formData.Role}
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="RequiredCreationDate"
              >
                Required Creation Date
              </label>
              <input
                id="RequiredCreationDate"
                type="Number"
                placeholder="MM/DD/YYYY"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={handleInputChange} // attach handleInputChange here
                value={formData.RequiredCreationDate}
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="VendorID"
              >
                Vendor ID
              </label>
              <input
                id="VendorID"
                type="text"
                placeholder="Vendor ID"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={handleInputChange} // attach handleInputChange here
                value={formData.VendorID}
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="ImmigrationStatus"
              >
                Immigration Status
              </label>
              <input
                id="ImmigrationStatus"
                type="text"
                placeholder="Immigration Status"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={handleInputChange} // attach handleInputChange here
                value={formData.ImmigrationStatus}
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="ContractType"
              >
                Contract Type
              </label>
              <input
                id="ContractType"
                type="text"
                placeholder="Contract Type"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={handleInputChange} // attach handleInputChange here
                value={formData.ContractType}
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="SubmissionDate"
              >
                Submission Date
              </label>
              <input
                id="SubmissionDate"
                type="text"
                placeholder="MM/DD/YYYY"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={handleInputChange} // attach handleInputChange here
                value={formData.SubmissionDate}
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="RequiredSubmissionEndDate"
              >
                Required Submission end Date
              </label>
              <input
                id="RequiredSubmissionEndDate"
                type="text"
                placeholder="MM/DD/YYYY"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={handleInputChange} // attach handleInputChange here
                value={formData.RequiredSubmissionEndDate}
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="CandidateCurrentLocation"
              >
                Candidate Current Location
              </label>
              <input
                id="CandidateCurrentLocation"
                type="text"
                placeholder="Candidate Current Location"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={handleInputChange} // attach handleInputChange here
                value={formData.CandidateCurrentLocation}
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="ContactNumber"
              >
                Contact Number
              </label>
              <input
                id="ContactNumber"
                type="text"
                placeholder="Contact Number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={handleInputChange} // attach handleInputChange here
                value={formData.ContactNumber}
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="RecruiterName"
              >
                Recruiter Name
              </label>
              <input
                id="RecruiterName"
                type="text"
                placeholder="Recruiter Name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={handleInputChange} // attach handleInputChange here
                value={formData.RecruiterName}
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="State">
                State
              </label>
              <input
                id="State "
                type="text"
                placeholder="State"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={handleInputChange} // attach handleInputChange here
                value={formData.State}
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="SubmissionStatus"
              >
                Submission Status
              </label>
              <input
                id="SubmissionStatus"
                type="text"
                placeholder="Submission Status"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={handleInputChange} // attach handleInputChange here
                value={formData.SubmissionStatus}
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="VendorRate"
              >
                Vendor Rate
              </label>
              <input
                id="VendorRate"
                type="text"
                placeholder="Vendor Rate "
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={handleInputChange} // attach handleInputChange here
                value={formData.VendorRate}
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="CandidatePayRate"
              >
                Candidate Pay Rate
              </label>
              <input
                id="CandidatePayRate"
                type="text"
                placeholder="Candidate Pay Rate"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={handleInputChange} // attach handleInputChange here
                value={formData.CandidatePayRate}
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="BillRateMargin"
              >
                Bill Rate Margin
              </label>
              <input
                id="BillRateMargin"
                type="text"
                placeholder="Bill Rate Margin"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={handleInputChange} // attach handleInputChange here
                value={formData.BillRateMargin}
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="ResumeSource"
              >
                Resume Source
              </label>
              <input
                id="ResumeSource"
                type="text"
                placeholder="Resume Source"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={handleInputChange} // attach handleInputChange here
                value={formData.ResumeSource}
              />
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="emailId"
              >
                Email ID
              </label>
              <input
                id="emailId"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={handleInputChange} // attach handleInputChange here
                value={formData.emailId}
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="LinkedInID"
              >
                LinkedIn ID
              </label>
              <input
                id="LinkedInID"
                type="text"
                placeholder="LinkedIn ID"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={handleInputChange} // attach handleInputChange here
                value={formData.LinkedInID}
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="EmployerInformation"
              >
                Employer Information
              </label>
              <input
                id="EmployerInformation"
                type="text"
                placeholder="Employer Information"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={handleInputChange} // attach handleInputChange here
                value={formData.EmployerInformation}
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="ProfessionalReferences"
              >
                Professional References
              </label>
              <input
                id="ProfessionalReferences"
                type="text"
                placeholder="Professional References "
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={handleInputChange} // attach handleInputChange here
                value={formData.ProfessionalReferences}
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="DOB">
                DOB
              </label>
              <input
                id="DOB"
                type="text"
                placeholder="MM/DD/YYYY"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={handleInputChange} // attach handleInputChange here
                value={formData.DOB}
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="RequiredSkills"
              >
                Required Skills
              </label>
              <input
                id="RequiredSkills"
                type="text"
                placeholder="Required Skills"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={handleInputChange} // attach handleInputChange here
                value={formData.RequiredSkills}
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="ResumeFormatingNeeded"
              >
                Resume Formating Needed?
              </label>
              <input
                id="ResumeFormatingNeeded"
                type="text"
                placeholder="Resume Formating Needed?"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={handleInputChange} // attach handleInputChange here
                value={formData.ResumeFormatingNeeded}
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="FormatedBy"
              >
                Formated By
              </label>
              <input
                id="FormatedBy"
                type="text"
                placeholder="Formated By "
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={handleInputChange} // attach handleInputChange here
                value={formData.FormatedBy}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Resume
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        onChange={handleInputChange} // attach handleInputChange here
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </section>
      {showPopup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <h2 className="text-lg mb-4">Submission Successful</h2>
            <p>Your form has been submitted successfully.</p>
            <button
              onClick={handleClosePopup}
              className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuccessPage;
